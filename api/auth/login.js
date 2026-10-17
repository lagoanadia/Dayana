/* GET /api/auth/login → manda a la pantalla de Google */
const {CLIENT_ID, origin, cookie, rand} = require('../_lib/util');

module.exports = (req, res) => {
  const state = rand();
  const q = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: origin(req) + '/callback',
    response_type: 'code',
    scope: 'openid email profile',
    state,
    prompt: 'select_account'
  });
  res.setHeader('Set-Cookie', cookie('oauth_state', state, 600));
  res.writeHead(302, {Location: 'https://accounts.google.com/o/oauth2/v2/auth?' + q});
  res.end();
};
