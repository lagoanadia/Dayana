/* GET /callback (reescrito aquí en vercel.json) → Google vuelve con un código,
   lo cambiamos por los datos de la cuenta y creamos la sesión. */
const {CLIENT_ID, CLIENT_SECRET, YEAR, redis, origin, cookie, cookies, rand} = require('../_lib/util');

module.exports = async (req, res) => {
  const back = (why) => { res.writeHead(302, {Location: '/#/' + (why ? '?login=' + why : '')}); res.end(); };
  try{
    const url = new URL(req.url, origin(req));
    if(url.searchParams.get('error')) return back(url.searchParams.get('error'));
    const code = url.searchParams.get('code');
    if(!code || url.searchParams.get('state') !== cookies(req).oauth_state) return back('state');
    if(!CLIENT_SECRET) return back('falta_secreto');

    const tok = await (await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams({code, client_id: CLIENT_ID, client_secret: CLIENT_SECRET, redirect_uri: origin(req) + '/callback', grant_type: 'authorization_code'})
    })).json();
    if(!tok.id_token) return back('token');
    // El id_token llega directo de Google por HTTPS: leemos sus datos
    const info = JSON.parse(Buffer.from(tok.id_token.split('.')[1], 'base64url').toString());
    if(info.aud !== CLIENT_ID || !info.sub) return back('token');

    const sid = rand();
    await redis('SET', 'sess:' + sid, JSON.stringify({sub: info.sub, email: info.email || '', name: info.given_name || info.name || ''}), 'EX', YEAR);
    res.setHeader('Set-Cookie', [cookie('sid', sid, YEAR), cookie('oauth_state', '', 0)]);
    back('ok');
  }catch(e){
    console.error(e);
    back(/base de datos/.test(e.message) ? 'sin_bd' : 'error');
  }
};
