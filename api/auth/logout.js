/* POST /api/auth/logout → cierra la sesión */
const {redis, cookie, cookies} = require('../_lib/util');

module.exports = async (req, res) => {
  const sid = cookies(req).sid;
  if(sid) await redis('DEL', 'sess:' + sid).catch(() => {});
  res.setHeader('Set-Cookie', cookie('sid', '', 0));
  res.status(200).json({ok: true});
};
