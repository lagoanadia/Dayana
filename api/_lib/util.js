/* Utilidades compartidas por las funciones de Vercel. Sin dependencias. */
const crypto = require('crypto');

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '772944802975-43ie6docjf834fo8qtooj8das0870oi2.apps.googleusercontent.com';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const YEAR = 60 * 60 * 24 * 365;

/* Base de datos: Upstash Redis (Vercel → Storage → Upstash for Redis).
   Vercel crea solas estas variables al conectarla al proyecto. */
const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(...cmd){
  if(!REDIS_URL || !REDIS_TOKEN) throw new Error('Falta conectar la base de datos (Upstash Redis) en Vercel');
  const r = await fetch(REDIS_URL, {method: 'POST', headers: {Authorization: 'Bearer ' + REDIS_TOKEN, 'Content-Type': 'application/json'}, body: JSON.stringify(cmd)});
  const j = await r.json();
  if(j.error) throw new Error(j.error);
  return j.result;
}

function origin(req){
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || (/^localhost(:|$)/.test(host) ? 'http' : 'https');
  return proto + '://' + host;
}
function cookie(name, value, maxAge){
  return `${name}=${value}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;
}
function cookies(req){
  const out = {};
  (req.headers.cookie || '').split(';').forEach(c => { const i = c.indexOf('='); if(i > 0) out[c.slice(0, i).trim()] = decodeURIComponent(c.slice(i + 1).trim()); });
  return out;
}
async function userFromSession(req){
  const sid = cookies(req).sid;
  if(!sid || !/^[a-f0-9]{64}$/.test(sid)) return null;
  const u = await redis('GET', 'sess:' + sid);
  return u ? JSON.parse(u) : null;
}
const rand = () => crypto.randomBytes(32).toString('hex');

module.exports = {CLIENT_ID, CLIENT_SECRET, YEAR, redis, origin, cookie, cookies, userFromSession, rand};
