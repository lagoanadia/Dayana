/* =========================================================
   Login con Google + guardado en Google Drive (carpeta oculta de la app).
   No necesita servidor: solo el ID de cliente de js/config.js.
   ========================================================= */
(function(){
  const CID = window.GOOGLE_CLIENT_ID;
  if(!CID) return;
  const SCOPE = 'https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/userinfo.email';
  const FILE = 'progreso.json';
  let token = null, expires = 0, fileId = null, client = null, timer = null, needsLogin = false;
  const C = Object.assign({on:false, email:'', last:0}, (() => { try{ return JSON.parse(localStorage.getItem('cloud_v1')) || {}; }catch(e){ return {}; } })());
  const keep = () => { try{ localStorage.setItem('cloud_v1', JSON.stringify(C)); }catch(e){} };

  const s = document.createElement('script');
  s.src = 'https://accounts.google.com/gsi/client'; s.async = true;
  s.onload = () => {
    client = google.accounts.oauth2.initTokenClient({client_id: CID, scope: SCOPE, callback: onToken});
    if(C.on) needsLogin = true;   // se reconecta en el primer toque (los navegadores lo exigen)
    refresh();
  };
  document.head.appendChild(s);

  document.addEventListener('click', () => { if(needsLogin && client){ needsLogin = false; client.requestAccessToken({prompt: ''}); } }, true);

  async function api(url, opts){
    const r = await fetch(url, Object.assign({}, opts, {headers: Object.assign({Authorization: 'Bearer ' + token}, (opts||{}).headers)}));
    if(r.status === 401){ token = null; needsLogin = true; throw new Error('401'); }
    if(!r.ok) throw new Error(r.status);
    return r;
  }
  async function onToken(resp){
    if(resp.error) return;
    token = resp.access_token; expires = Date.now() + (resp.expires_in - 60) * 1000;
    try{
      if(!C.email){ const u = await (await api('https://www.googleapis.com/oauth2/v3/userinfo')).json(); C.email = u.email || ''; }
      const list = await (await api(`https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=name%3D'${FILE}'&fields=files(id)`)).json();
      fileId = list.files && list.files[0] ? list.files[0].id : null;
      if(fileId){
        const remote = await (await api(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`)).json();
        // Se queda con el progreso que tenga más XP
        if((remote.xp || 0) > (P.xp || 0)){ setPlayer(remote); toast('☁️ Progreso recuperado de Google', true); }
        else await upload();
      } else await upload();
      C.on = true; C.last = Date.now(); keep(); refresh();
      toast('☁️ Conectada: tu progreso se guarda en Google');
    }catch(e){ refresh(); }
  }
  async function upload(){
    const body = JSON.stringify(P);
    if(fileId){
      await api(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`, {method:'PATCH', headers:{'Content-Type':'application/json'}, body});
    } else {
      const fd = new FormData();
      fd.append('metadata', new Blob([JSON.stringify({name: FILE, parents: ['appDataFolder']})], {type:'application/json'}));
      fd.append('file', new Blob([body], {type:'application/json'}));
      const r = await (await api('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {method:'POST', body: fd})).json();
      fileId = r.id;
    }
    C.last = Date.now(); keep(); refresh();
  }
  window.cloudSave = function(){
    if(!C.on) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      if(!token || Date.now() > expires){ needsLogin = true; return; }
      upload().catch(() => {});
    }, 2500);
  };
  window.cloudCard = function(){
    if(!client) return '';
    const sub = C.on ? (token ? 'Guardado en ' + esc(C.email) + (C.last ? ' · ' + new Date(C.last).toLocaleTimeString().slice(0,5) : '') : 'Toca para reconectar con ' + esc(C.email)) : 'Inicia sesión para no perder nunca tu progreso';
    return `<button class="mission ${C.on && token ? 'done' : ''}" id="cloudBtn"><div class="ic" style="background:#fff;border:2px solid var(--line)">☁️</div>
      <div><div class="t">${C.on ? 'Cuenta de Google' : 'Guardar con Google'}</div><div class="s">${sub}</div></div><div class="st">${C.on && token ? '✅' : '▶'}</div></button>`;
  };
  window.cloudBind = function(){
    const b = document.getElementById('cloudBtn'); if(!b) return;
    b.onclick = () => {
      if(C.on && token){
        confirmBox('¿Cerrar sesión?', 'Tu progreso se queda guardado en Google y en este dispositivo.', 'Cerrar sesión', () => {
          google.accounts.oauth2.revoke(token, () => {}); token = null; C.on = false; C.email = ''; keep(); refresh();
        });
      } else { needsLogin = false; client.requestAccessToken({prompt: C.on ? '' : 'consent'}); }
    };
  };
  function refresh(){ if(location.hash.replace(/^#\/?/, '') === '') route(); }
})();
