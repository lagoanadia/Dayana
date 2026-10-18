/* =========================================================
   Pío 🐥: asistente de dudas (IA con Groq, vía /api/ask)
   Sale en las pantallas de teoría y temas; se esconde en tests y juegos.
   ========================================================= */
(function(){
  const msgs = [];          // conversación de esta sesión
  let open = false, busy = false;

  const btn = document.createElement('button');
  btn.className = 'pio-btn'; btn.setAttribute('aria-label', 'Pregúntale a Pío');
  btn.innerHTML = `<span class="pio-face">${mascot('happy')}</span><span class="pio-bubble">¿Dudas?</span>`;
  const panel = document.createElement('div');
  panel.className = 'pio-panel'; panel.hidden = true;
  panel.innerHTML = `
    <div class="pio-head"><span class="pio-mini">${mascot('happy')}</span>
      <div style="flex:1;min-width:0"><b>Pío</b><div class="pio-where" id="pioWhere"></div></div>
      <button class="icon-btn" id="pioClose" aria-label="Cerrar">✕</button></div>
    <div class="pio-msgs" id="pioMsgs"></div>
    <div class="pio-chips" id="pioChips"></div>
    <form class="pio-form" id="pioForm"><input id="pioIn" autocomplete="off" maxlength="600" placeholder="Pregúntame lo que no entiendas..."><button class="btn small" id="pioSend">➤</button></form>`;
  document.body.append(btn, panel);

  /* ¿Dónde está? Asignatura, tema y su teoría como contexto */
  function where(){
    const parts = location.hash.replace(/^#\/?/, '').split('?')[0].split('/').filter(Boolean);
    if(parts[0] !== 's') return {};
    const s = subj(parts[1]); if(!s) return {};
    const out = {subject: s.name, what: parts[4] || ''};
    const i = parts[2] === 't' ? +parts[3] : null;
    if(i != null && s.sections[i]){
      const sec = s.sections[i], d = document.createElement('div'); d.innerHTML = sec.body;
      d.querySelectorAll('.gallery').forEach(g => g.remove());
      out.topic = sec.title;
      out.context = d.textContent.replace(/\s+/g, ' ').trim() + ' ' + (sec.qa || []).map(x => x[0] + ' → ' + x[1] + '. ' + (x[3] || '')).join(' ');
    } else out.context = s.sections.map(x => x.title).join(', ');
    return out;
  }
  // Escondido en tests, juegos y chapar (¡nada de copiar!)
  function visible(){
    const h = location.hash;
    return !!P.name && !/\/(facil|dificil|juego|chapar|jefe|fallos|arcade\/\d)/.test(h) && !/#\/avatar/.test(h);
  }
  function sync(){ btn.hidden = !visible(); if(!visible() && open) toggle(false); }
  window.addEventListener('hashchange', sync);
  setTimeout(sync, 300);

  function toggle(v){
    open = v; panel.hidden = !v; btn.hidden = v || !visible();
    if(v){
      const w = where();
      $('#pioWhere').textContent = w.topic ? w.subject + ' · ' + w.topic : w.subject || 'Estudiar Jugando';
      if(!msgs.length) add('assistant', '¡Hola, ' + (P.name || '') + '! 🐥 Soy Pío. Pregúntame lo que no entiendas' + (w.topic ? ' de «' + w.topic + '»' : '') + ' y te lo explico fácil.');
      chips(); setTimeout(() => $('#pioIn').focus(), 100);
    }
  }
  function chips(){
    const w = where();
    const list = w.topic ? ['Explícamelo más fácil', 'Ponme un ejemplo', 'Hazme una pregunta para practicar', '¿Qué es lo más importante?'] : ['¿Cómo estudio mejor?', 'Ayúdame a organizarme'];
    $('#pioChips').innerHTML = list.map(t => `<button type="button" class="toggle">${t}</button>`).join('');
    $('#pioChips').querySelectorAll('button').forEach(b => b.onclick = () => ask(b.textContent));
  }
  function add(role, text){
    msgs.push({role, content: text});
    const d = document.createElement('div'); d.className = 'pio-msg ' + role;
    d.textContent = text;   // texto plano: nunca HTML de la IA
    $('#pioMsgs').appendChild(d); $('#pioMsgs').scrollTop = 1e9;
    return d;
  }
  async function ask(q){
    q = (q || '').trim(); if(!q || busy) return;
    busy = true; $('#pioIn').value = ''; add('user', q);
    const t = document.createElement('div'); t.className = 'pio-msg assistant typing'; t.textContent = 'Pío está pensando…';
    $('#pioMsgs').appendChild(t); $('#pioMsgs').scrollTop = 1e9;
    const w = where();
    try{
      if(!location.protocol.startsWith('http')) throw new Error('Pío solo funciona en la web publicada');
      const r = await fetch('/api/ask', {method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({question: q, subject: w.subject, topic: w.topic, context: w.context, history: msgs.slice(0, -1).slice(-6)})});
      const j = await r.json().catch(() => ({}));
      t.remove();
      add('assistant', r.ok ? (j.answer || 'Mmm… no sé qué decir 🐥') : '⚠️ ' + (j.error || 'No pude responder, prueba otra vez'));
      if(r.ok) sfx('tap');
    }catch(e){ t.remove(); add('assistant', '⚠️ ' + (e.message || 'Sin conexión')); }
    busy = false;
  }
  btn.onclick = () => { sfx('tap'); toggle(true); };
  panel.querySelector('#pioClose').onclick = () => toggle(false);
  panel.querySelector('#pioForm').onsubmit = e => { e.preventDefault(); ask($('#pioIn').value); };
})();
