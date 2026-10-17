/* =========================================================
   Login con Google (redirección a /callback) + guardado del
   progreso en Google Drive (carpeta oculta de la app).
   Configuración en Google Cloud Console:
     · Orígenes de JavaScript: https://day-study.vercel.app
     · URI de redirección:     https://day-study.vercel.app/callback
   ========================================================= */
(function(){
  const CID = window.GOOGLE_CLIENT_ID;
  if(!CID) return;
  const SCOPE = 'https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/userinfo.email';
  const FILE = 'progreso.json';
  const REDIRECT = location.origin + '/callback';
  const read = k => { try{ return JSON.parse(localStorage.getItem(k)) || {}; }catch(e){ return {}; } };
  const write = (k, v) => { try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} };
  const C = Object.assign({on:false, email:'', last:0, pending:false}, read('cloud_v1'));
  const keep = () => write('cloud_v1', C);
  let T = read('cloud_token'), fileId = null, timer = null, busy = false;
  const valid = () => T.token && Date.now() < T.exp;

  function login(silent){
    const state = Math.random().toString(36).slice(2);
    try{ sessionStorage.setItem('oauth_state', state); }catch(e){}
    const q = new URLSearchParams({client_id: CID, redirect_uri: REDIRECT, response_type: 'token', scope: SCOPE,
      include_granted_scopes: 'true', state, prompt: silent ? 'none' : 'select_account'});
    if(C.email) q.set('login_hint', C.email);
    location.href = 'https://accounts.google.com/o/oauth2/v2/auth?' + q;
  }
  async function api(url, opts){
    const r = await fetch(url, Object.assign({}, opts, {headers: Object.assign({Authorization: 'Bearer ' + T.token}, (opts||{}).headers)}));
    if(r.status === 401){ T = {}; write('cloud_token', T); refresh(); throw new Error('401'); }
    if(!r.ok) throw new Error(r.status);
    return r;
  }
  async function sync(){
    if(busy) return; busy = true;
    try{
      if(!C.email){ const u = await (await api('https://www.googleapis.com/oauth2/v3/userinfo')).json(); C.email = u.email || ''; }
      const list = await (await api(`https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=name%3D'${FILE}'&fields=files(id)`)).json();
      fileId = list.files && list.files[0] ? list.files[0].id : null;
      let restored = false;
      if(fileId){
        const remote = await (await api(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`)).json();
        // Se queda con el progreso que tenga más XP
        if((remote.xp || 0) > (P.xp || 0)){ C.on = true; keep(); setPlayer(remote); restored = true; }
      }
      if(!restored) await upload();
      const first = !C.on;
      C.on = true; C.pending = false; C.last = Date.now(); keep(); refresh();
      if(restored) toast('☁️ Progreso recuperado de Google', true);
      else if(first) toast('☁️ Conectada: tu progreso se guarda en Google');
    }catch(e){ refresh(); }
    busy = false;
  }
  async function upload(){
    const body = JSON.stringify(P);
    if(fileId){
      await api(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`, {method:'PATCH', headers:{'Content-Type':'application/json'}, body});
    } else {
      const fd = new FormData();
      fd.append('metadata', new Blob([JSON.stringify({name: FILE, parents: ['appDataFolder']})], {type:'application/json'}));
      fd.append('file', new Blob([body], {type:'application/json'}));
      fileId = (await (await api('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {method:'POST', body: fd})).json()).id;
    }
    C.last = Date.now(); C.pending = false; keep(); refresh();
  }
  window.cloudSave = function(){
    if(!C.on) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      if(!valid()){ C.pending = true; keep(); refresh(); return; }
      (fileId ? upload() : sync()).catch(() => { C.pending = true; keep(); });
    }, 2500);
  };
  window.cloudCard = function(){
    const ok = C.on && valid();
    const sub = ok ? 'Guardado en ' + esc(C.email) + (C.last ? ' · ' + new Date(C.last).toLocaleTimeString().slice(0,5) : '')
      : C.on ? 'Toca para reconectar' + (C.pending ? ' y guardar lo último' : '') + ' (' + esc(C.email) + ')'
      : 'Inicia sesión para no perder nunca tu progreso';
    return `<button class="mission ${ok ? 'done' : ''}" id="cloudBtn"><div class="ic" style="background:#fff;border:2px solid var(--line)">☁️</div>
      <div><div class="t">${C.on ? 'Cuenta de Google' : 'Guardar con Google'}</div><div class="s">${sub}</div></div><div class="st">${ok ? '✅' : '▶'}</div></button>`;
  };
  window.cloudBind = function(){
    const b = document.getElementById('cloudBtn'); if(!b) return;
    b.onclick = () => {
      if(C.on && valid()){
        confirmBox('¿Cerrar sesión?', 'Tu progreso se queda guardado en Google y en este dispositivo.', 'Cerrar sesión', () => {
          fetch('https://oauth2.googleapis.com/revoke?token=' + T.token, {method:'POST'}).catch(() => {});
          T = {}; write('cloud_token', T); C.on = false; C.email = ''; keep(); refresh();
        });
      } else login(false);
    };
  };
  function refresh(){ if(location.hash.replace(/^#\/?/, '') === '' && typeof route === 'function') route(); }

  // Al abrir la app: ¿venimos del login? ¿el permiso sigue valiendo?
  document.addEventListener('DOMContentLoaded', () => setTimeout(() => {
    if(T.error){
      const why = T.error === 'access_denied' ? 'Google no ha dado permiso. Revisa que tu correo esté en "Test users" o que la app esté publicada.' : 'No se pudo conectar con Google (' + T.error + ').';
      toast('⚠️ ' + why); T = {}; write('cloud_token', T); return;
    }
    if(valid()) sync();
  }, 300));
})();
