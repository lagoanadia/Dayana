/* =========================================================
   Login con Google + guardado del progreso en la base de datos
   de Vercel. Igual que en Synaptic: solo pide nombre y correo,
   así cualquier cuenta de Google puede entrar.
   Google Cloud Console:
     · Orígenes de JavaScript: https://day-study.vercel.app
     · URI de redirección:     https://day-study.vercel.app/callback
   ========================================================= */
(function(){
  if(!location.protocol.startsWith('http')) return;   // abierto como archivo: sin login
  const read = k => { try{ return JSON.parse(localStorage.getItem(k)) || {}; }catch(e){ return {}; } };
  const C = Object.assign({on:false, email:'', last:0, pending:false}, read('cloud_v2'));
  const keep = () => { try{ localStorage.setItem('cloud_v2', JSON.stringify(C)); }catch(e){} };
  let timer = null, online = false;

  async function load(){
    try{
      const r = await fetch('/api/progress', {credentials: 'same-origin'});
      if(r.status === 401){ C.on = false; keep(); online = false; refresh(); return; }
      if(!r.ok) throw new Error(r.status);
      const j = await r.json();
      const first = !C.on;
      C.on = true; C.email = j.email; online = true; keep();
      // Se queda con el progreso que tenga más XP
      if(j.data && (j.data.xp || 0) > (P.xp || 0)){ setPlayer(j.data); toast('☁️ Progreso recuperado de tu cuenta', true); }
      else { await upload(); if(first) toast('☁️ Conectada: tu progreso se guarda en tu cuenta'); }
      refresh();
    }catch(e){ online = false; refresh(); }
  }
  async function upload(){
    const r = await fetch('/api/progress', {method: 'PUT', credentials: 'same-origin', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(P)});
    if(r.status === 401){ C.on = false; keep(); refresh(); return; }
    if(!r.ok) throw new Error(r.status);
    C.last = Date.now(); C.pending = false; keep(); refresh();
  }
  window.cloudSave = function(){
    if(!C.on) return;
    clearTimeout(timer);
    timer = setTimeout(() => upload().catch(() => { C.pending = true; keep(); }), 2000);
  };
  window.cloudCard = function(){
    const ok = C.on;
    const sub = ok ? 'Guardado en ' + esc(C.email) + (C.last ? ' · ' + new Date(C.last).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) : '') + (C.pending ? ' · pendiente de subir' : '')
                   : 'Inicia sesión para no perder nunca tu progreso';
    return `<button class="mission ${ok ? 'done' : ''}" id="cloudBtn"><div class="ic" style="background:#fff;border:2px solid var(--line)">☁️</div>
      <div><div class="t">${ok ? 'Cuenta de Google' : 'Entrar con Google'}</div><div class="s">${sub}</div></div><div class="st">${ok ? '✅' : '▶'}</div></button>`;
  };
  window.cloudBind = function(){
    const b = document.getElementById('cloudBtn'); if(!b) return;
    b.onclick = () => {
      if(C.on){
        confirmBox('¿Cerrar sesión?', 'Tu progreso se queda guardado en tu cuenta y en este dispositivo.', 'Cerrar sesión', async () => {
          await fetch('/api/auth/logout', {method: 'POST', credentials: 'same-origin'}).catch(() => {});
          C.on = false; C.email = ''; keep(); refresh();
        });
      } else location.href = '/api/auth/login';
    };
  };
  function refresh(){ if(location.hash.replace(/^#\/?/, '').split('?')[0] === '' && typeof route === 'function') route(); }

  const MSG = {
    access_denied: 'Has cancelado el inicio de sesión.',
    sin_bd: 'Falta conectar la base de datos en Vercel (Storage → Upstash Redis).',
    falta_secreto: 'Falta poner GOOGLE_CLIENT_SECRET en las variables de Vercel.',
    state: 'La sesión caducó, prueba otra vez.',
    token: 'Google no devolvió la cuenta, prueba otra vez.',
    error: 'No se pudo iniciar sesión, prueba otra vez.'
  };
  document.addEventListener('DOMContentLoaded', () => setTimeout(() => {
    const m = location.hash.match(/[?&]login=([a-z_]+)/);
    if(m){
      history.replaceState(null, '', location.pathname + '#/');
      if(m[1] !== 'ok') toast('⚠️ ' + (MSG[m[1]] || MSG.error));
    }
    load();
  }, 200));
  // Al volver a la app (por ejemplo desde otra pestaña), sube lo pendiente
  document.addEventListener('visibilitychange', () => { if(document.visibilityState === 'visible' && C.pending) upload().catch(() => {}); });
})();
