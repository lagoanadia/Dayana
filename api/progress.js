/* GET /api/progress → progreso guardado de la cuenta
   PUT /api/progress → guarda el progreso (JSON) */
const {redis, userFromSession} = require('./_lib/util');

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  try{
    const u = await userFromSession(req);
    if(!u) return res.status(401).json({error: 'no_session'});
    if(req.method === 'GET'){
      const data = await redis('GET', 'prog:' + u.sub);
      return res.status(200).json({email: u.email, name: u.name, data: data ? JSON.parse(data) : null});
    }
    if(req.method === 'PUT'){
      const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {});
      if(body.length > 900000) return res.status(413).json({error: 'too_big'});
      JSON.parse(body);
      await redis('SET', 'prog:' + u.sub, body);
      return res.status(200).json({ok: true});
    }
    res.status(405).end();
  }catch(e){
    console.error(e);
    res.status(500).json({error: e.message});
  }
};
