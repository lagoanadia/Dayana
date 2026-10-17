/* =========================================================
   Motor de la app: jugadora, niveles, mapa, lectura, tests
   y minijuegos. Las asignaturas se cargan desde /subjects.
   ========================================================= */
const SUBJECTS = [];
function registerSubject(def){ SUBJECTS.push(def); }
const subj = id => SUBJECTS.find(s => s.id === id);

/* ---------- Niveles y logros ---------- */
const LEVELS = [
  {xp:0,    name:"Aprendiz",      icon:"🐣"},
  {xp:60,   name:"Curiosa",       icon:"🔍"},
  {xp:150,  name:"Manitas",       icon:"🔧"},
  {xp:270,  name:"Exploradora",   icon:"🧭"},
  {xp:420,  name:"Diseñadora",    icon:"📐"},
  {xp:600,  name:"Constructora",  icon:"🧱"},
  {xp:820,  name:"Inventora",     icon:"💡"},
  {xp:1080, name:"Científica",    icon:"🔬"},
  {xp:1380, name:"Ingeniera",     icon:"🏗️"},
  {xp:1720, name:"Genio",         icon:"🧠"},
  {xp:2100, name:"Maestra",       icon:"🎓"},
  {xp:2550, name:"Heroína",       icon:"🦸‍♀️"},
  {xp:3050, name:"Superestrella", icon:"🌟"},
  {xp:3600, name:"Leyenda",       icon:"👑"},
  {xp:4300, name:"Dragona Sabia", icon:"🐉"}
];
const BADGES = [
  {id:"read1",   icon:"📖", name:"Lectora",        desc:"Lee un tema entero"},
  {id:"perfect", icon:"🎯", name:"Pleno",          desc:"Test sin ningún fallo"},
  {id:"combo5",  icon:"🔥", name:"En racha",       desc:"5 aciertos seguidos"},
  {id:"game1",   icon:"🕹️", name:"Jugona",         desc:"Gana tu primer minijuego"},
  {id:"game3s",  icon:"⭐", name:"Perfeccionista", desc:"3 estrellas en un minijuego"},
  {id:"play10",  icon:"🎮", name:"Viciada",        desc:"Juega 10 minijuegos"},
  {id:"play50",  icon:"🏅", name:"Imparable",      desc:"Juega 50 minijuegos"},
  {id:"boss",    icon:"🐲", name:"Matadragones",   desc:"Aprueba al jefe final"},
  {id:"boss8",   icon:"🏆", name:"Lista",          desc:"Un 8 o más al jefe final"},
  {id:"speed10", icon:"⚡", name:"Rayo",           desc:"10 en el contrarreloj"},
  {id:"streak3", icon:"📅", name:"Constante",      desc:"3 días seguidos"},
  {id:"lap",     icon:"🔁", name:"Otra vuelta",    desc:"Empieza una nueva vuelta"},
  {id:"fallos",  icon:"🩹", name:"Sin fallos",     desc:"Vacía la caja de fallos"},
  {id:"world",   icon:"🌍", name:"Mundo completo", desc:"Todas las estrellas de una asignatura"},
  {id:"lvl5",    icon:"🚀", name:"Nivel 5",        desc:"Llega al nivel 5"}
];
const AVATARS = ["🦒","🦊","🐼","🐱","🦄","🐸","🐧","🐙","🦁","🐰","🐨","🤖"];

/* ---------- Guardado ---------- */
const PKEY = "dayana_player_v2";
function load(k, d){ try{ return JSON.parse(localStorage.getItem(k)) || d; }catch(e){ return d; } }
function store(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
let P = Object.assign({name:"", avatar:"🦒", xp:0, badges:{}, sound:true, streak:{last:"", n:0}, played:0, subj:{}}, load(PKEY, {}));
function save(){ store(PKEY, P); }
function prog(sid){
  if(!P.subj[sid]) P.subj[sid] = {};
  return Object.assign(P.subj[sid], Object.assign({read:{}, cards:{}, easy:{}, hard:{}, games:{}, arcade:{}, final:null, misses:{}, laps:0}, P.subj[sid]));
}

/* ---------- Utilidades ---------- */
const $ = s => document.querySelector(s);
const esc = t => String(t).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function shuffle(a){ a = a.slice(); for(let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]] = [a[j],a[i]]; } return a; }
function norm(t){ return (t||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/\s+/g,' ').trim(); }
const COLORS = ['var(--orange)','var(--blue)','var(--green)','var(--purple)','var(--red)','var(--teal)'];
const COLORS_D = ['var(--orange-d)','var(--blue-d)','var(--green-d)','var(--purple-d)','var(--red-d)','#1f9a9a'];
function today(){ const d = new Date(); return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); }
function starsTxt(n, max){ let s=''; for(let i=0;i<max;i++) s += `<span class="${i<n?'':'off'}">⭐</span>`; return s; }

/* Mascota: blob amarillo con gafas */
function mascot(mood){
  const mouth = {
    happy:'<path d="M80 128 Q100 150 120 128" stroke="#2b1d0e" stroke-width="6" fill="#ff6a8a" stroke-linecap="round"/>',
    wow:'<ellipse cx="100" cy="134" rx="12" ry="14" fill="#2b1d0e"/>',
    sad:'<path d="M82 140 Q100 124 118 140" stroke="#2b1d0e" stroke-width="6" fill="none" stroke-linecap="round"/>',
    ok:'<path d="M84 132 Q100 142 116 132" stroke="#2b1d0e" stroke-width="6" fill="none" stroke-linecap="round"/>'
  }[mood] || '';
  return `<svg viewBox="0 0 200 200" aria-hidden="true">
    <path d="M100 18 L112 48 L134 22 L136 56 L166 40 L154 72 Q186 100 172 140 Q160 186 100 186 Q40 186 28 140 Q14 100 46 72 L34 40 L64 56 L66 22 L88 48 Z" fill="#ffd400" stroke="#2b1d0e" stroke-width="5" stroke-linejoin="round"/>
    <circle cx="58" cy="128" r="12" fill="#ff9db5" opacity=".8"/><circle cx="142" cy="128" r="12" fill="#ff9db5" opacity=".8"/>
    <circle cx="74" cy="100" r="20" fill="#fff" stroke="#2b1d0e" stroke-width="5"/><circle cx="126" cy="100" r="20" fill="#fff" stroke="#2b1d0e" stroke-width="5"/>
    <path d="M94 100 L106 100" stroke="#2b1d0e" stroke-width="5"/>
    <circle cx="${mood==='sad'?72:78}" cy="${mood==='sad'?106:100}" r="7" fill="#2b1d0e"/><circle cx="${mood==='sad'?124:130}" cy="${mood==='sad'?106:100}" r="7" fill="#2b1d0e"/>
    ${mouth}</svg>`;
}

/* ---------- XP, niveles, logros ---------- */
function levelInfo(xp){
  let i = 0;
  while(i+1 < LEVELS.length && xp >= LEVELS[i+1].xp) i++;
  const cur = LEVELS[i], next = LEVELS[i+1];
  return {i, cur, next, pct: next ? (xp-cur.xp)/(next.xp-cur.xp) : 1};
}
function renderHUD(){
  const L = levelInfo(P.xp);
  $('#hudAv').textContent = P.avatar;
  $('#hudLv').textContent = 'Nv ' + (L.i+1) + ' · ' + L.cur.name;
  $('#hudXp').textContent = P.xp + (L.next ? ' / ' + L.next.xp : '') + ' XP';
  $('#hudBar').style.width = Math.round(L.pct*100) + '%';
  $('#hudStreak').textContent = '🔥 ' + (P.streak.n || 0);
  $('#soundBtn').textContent = P.sound ? '🔊' : '🔇';
}
function addXP(n, x, y){
  if(!n) return;
  const before = levelInfo(P.xp).i;
  P.xp += n; save(); renderHUD();
  const b = $('#hudLvBtn'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
  if(x != null){
    const f = document.createElement('div');
    f.className = 'float-xp'; f.textContent = '+' + n + ' XP';
    f.style.left = Math.max(10, Math.min(x - 30, innerWidth - 110)) + 'px'; f.style.top = (y - 10) + 'px';
    document.body.appendChild(f); setTimeout(() => f.remove(), 1000);
  }
  const L = levelInfo(P.xp);
  if(L.i > before){
    if(L.i >= 4) unlock('lvl5');
    setTimeout(() => levelUp(L), 500);
  }
}
function levelUp(L){
  sfx('level'); confetti(80);
  const o = document.createElement('div');
  o.className = 'overlay';
  o.innerHTML = `<div class="box"><div class="lvbig">${L.cur.icon}</div><div class="eyebrow" style="margin-top:10px">¡Subes de nivel!</div><h2>Nivel ${L.i+1}</h2><p class="disp" style="font-size:22px;margin:4px 0 0">${L.cur.name}</p>
    <p class="muted">${L.next ? 'Siguiente: ' + L.next.icon + ' ' + L.next.name + ' a los ' + L.next.xp + ' XP' : '¡Has llegado al nivel máximo!'}</p>
    <button class="btn block" style="margin-top:10px">¡Genial! 🎉</button></div>`;
  o.querySelector('button').onclick = () => o.remove();
  document.body.appendChild(o);
}
function unlock(id){
  if(P.badges[id]) return;
  const b = BADGES.find(b => b.id === id); if(!b) return;
  P.badges[id] = Date.now(); save();
  setTimeout(() => { toast('🏅 Logro: ' + b.icon + ' ' + b.name, true); sfx('level'); }, 700);
}
function toast(msg, gold){
  const t = document.createElement('div');
  t.className = 'toast' + (gold ? ' gold' : ''); t.textContent = msg;
  $('#toasts').appendChild(t); setTimeout(() => t.remove(), 2900);
}
function confetti(n){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cols = ['#ff6a2b','#1d5be8','#2fb35a','#ffc928','#8f63f0','#ff8fb1'];
  for(let i=0;i<(n||40);i++){
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random()*100 + 'vw';
    c.style.background = cols[i % cols.length];
    c.style.animationDuration = (1.5 + Math.random()*1.8) + 's';
    c.style.animationDelay = Math.random()*.4 + 's';
    document.body.appendChild(c); setTimeout(() => c.remove(), 3800);
  }
}
let actx = null;
function sfx(type){
  if(!P.sound) return;
  try{
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const notes = {ok:[660,990], bad:[240,170], level:[523,659,784,1046], tap:[700], win:[523,784,1046,1318,1568]}[type] || [440];
    notes.forEach((f,i) => {
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = type === 'bad' ? 'square' : 'triangle'; o.frequency.value = f;
      const t0 = actx.currentTime + i*0.08;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(type==='bad'?0.06:0.16, t0+0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0+0.18);
      o.connect(g); g.connect(actx.destination); o.start(t0); o.stop(t0+0.2);
    });
  }catch(e){}
}
function updateStreak(){
  const t = today();
  if(P.streak.last === t) return;
  const y = new Date(); y.setDate(y.getDate()-1);
  const ys = y.getFullYear()+'-'+(y.getMonth()+1)+'-'+y.getDate();
  P.streak.n = P.streak.last === ys ? P.streak.n + 1 : 1;
  P.streak.last = t; save();
  if(P.streak.n >= 3) unlock('streak3');
}

/* ---------- Estrellas ---------- */
function temaStars(s, i){
  const p = prog(s.id), sec = s.sections[i];
  const e = p.easy[sec.id], h = p.hard[sec.id];
  return [!!p.read[sec.id], !!(e && e.best >= Math.ceil(e.total/2)), !!(h && h.best >= Math.ceil(h.total/2))].filter(Boolean).length;
}
function gameStars(s, i){ const p = prog(s.id); return s.sections[i].games.reduce((a,_,k) => a + ((p.games[s.sections[i].id+':'+k]||{}).stars||0), 0); }
function subjStars(s){
  let got = 0, max = 0;
  s.sections.forEach((sec,i) => { got += temaStars(s,i) + gameStars(s,i); max += 3 + sec.games.length*3; });
  return {got, max};
}

/* =========================================================
   Router: #/  ·  #/niveles  ·  #/avatar  ·  #/s/<id>  ·  #/s/<id>/t/<i>  ...
   ========================================================= */
let cleanup = null, RID = 0;
function go(h){ if(location.hash === h) route(); else location.hash = h; }
function route(){
  RID++;
  if(cleanup){ cleanup(); cleanup = null; }
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  window.scrollTo(0,0);
  if(!P.name && parts[0] !== 'avatar') return go('#/avatar');
  if(!parts.length) return viewHub();
  if(parts[0] === 'niveles') return viewLevels();
  if(parts[0] === 'avatar') return viewAvatar();
  if(parts[0] === 's'){
    const s = subj(parts[1]); if(!s) return go('#/');
    if(parts.length === 2) return viewMap(s);
    if(parts[2] === 't'){
      const i = +parts[3]; if(!s.sections[i]) return go('#/s/'+s.id);
      const what = parts[4];
      if(!what) return viewTema(s, i);
      if(what === 'leer') return viewRead(s, i);
      if(what === 'facil') return runQuiz(s, {mode:'easy', i});
      if(what === 'dificil') return runQuiz(s, {mode:'hard', i});
      if(what === 'juego') return runGame(s, s.sections[i].games[+parts[5]], {i, k:+parts[5]});
    }
    if(parts[2] === 'arcade'){
      if(parts[3] == null) return viewArcade(s);
      return runArcade(s, +parts[3]);
    }
    if(parts[2] === 'jefe') return runQuiz(s, {mode:'final'});
    if(parts[2] === 'fallos') return runQuiz(s, {mode:'fallos'});
  }
  go('#/');
}
function page(html){ $('#view').innerHTML = `<div class="page">${html}</div>`; }
document.addEventListener('click', e => {
  const g = e.target.closest('[data-go]');
  if(g){ sfx('tap'); go(g.getAttribute('data-go')); }
});

/* ---------- Vistas ---------- */
function viewAvatar(){
  let pick = P.avatar || AVATARS[0];
  page(`
    <div style="text-align:center">
      <div style="width:130px;margin:10px auto 0">${mascot('happy')}</div>
      <h1 class="title" style="font-size:34px">Crea tu personaje</h1>
      <p class="muted">Elige tu avatar y escribe tu nombre</p>
    </div>
    <div class="avatars">${AVATARS.map(a => `<button data-a="${a}" class="${a===pick?'sel':''}">${a}</button>`).join('')}</div>
    <input class="name-in" id="nameIn" maxlength="16" placeholder="Tu nombre" value="${esc(P.name)}">
    <div class="spacer"></div>
    <button class="btn block" id="goBtn">¡A jugar! →</button>`);
  document.querySelectorAll('.avatars button').forEach(b => b.onclick = () => {
    pick = b.dataset.a; sfx('tap');
    document.querySelectorAll('.avatars button').forEach(x => x.classList.toggle('sel', x === b));
  });
  $('#goBtn').onclick = () => {
    const n = $('#nameIn').value.trim();
    if(!n){ $('#nameIn').classList.add('shake'); setTimeout(()=>$('#nameIn').classList.remove('shake'), 400); $('#nameIn').focus(); return; }
    P.name = n; P.avatar = pick; save(); renderHUD(); sfx('win'); go('#/');
  };
}

function viewHub(){
  const L = levelInfo(P.xp);
  page(`
    <div class="hero orange">
      <div class="deco" style="width:160px;height:160px;right:-40px;top:-50px"></div>
      <div class="blob">${mascot('happy')}</div>
      <div class="eyebrow" style="color:#fff;opacity:.85">¡Hola, ${esc(P.name)}! ${P.avatar}</div>
      <h1>Estudiar<br>jugando</h1>
      <p>Elige una asignatura, gana XP y sube de nivel. Vas por el nivel ${L.i+1}: ${L.cur.icon} ${L.cur.name}.</p>
    </div>
    <div class="sect-title">Tus asignaturas</div>
    ${SUBJECTS.map((s,k) => {
      if(s.soon) return `<div class="subj locked"><div class="ic">${s.icon}</div><div style="flex:1"><div class="t">${s.name}</div><div class="s">${s.soon}</div></div><div>🔒</div></div>`;
      const st = subjStars(s), p = prog(s.id);
      return `<button class="subj" style="background:${s.color};box-shadow:0 6px 0 ${s.colorD}" data-go="#/s/${s.id}">
        <div class="ic">${s.icon}</div>
        <div style="flex:1;min-width:0"><div class="t">${s.name}</div>
          <div class="s">⭐ ${st.got} / ${st.max}${p.laps ? ' · 🔁 vuelta ' + (p.laps+1) : ''}</div>
          <div class="mini"><div style="width:${Math.round(st.got/st.max*100)}%"></div></div></div>
        <div style="font-size:26px">▶</div></button>`;
    }).join('')}
    <div class="sect-title">Tu progreso</div>
    <button class="mission" data-go="#/niveles"><div class="ic" style="background:var(--yellow)">${L.cur.icon}</div>
      <div><div class="t">Camino de niveles</div><div class="s">Mira los niveles que ya tienes y los que vienen</div></div><div class="st">▶</div></button>
    <button class="mission" data-go="#/avatar"><div class="ic" style="background:var(--pink)">${P.avatar}</div>
      <div><div class="t">Cambiar personaje</div><div class="s">Avatar y nombre</div></div><div class="st">▶</div></button>
    <footer>Hecho con cariño para ${esc(P.name)} 💛</footer>`);
}

function viewLevels(){
  const L = levelInfo(P.xp);
  const games = Object.values(P.subj).reduce((a,p) => a + Object.values(p.games||{}).reduce((b,g)=>b+(g.plays||0),0) + Object.values(p.arcade||{}).reduce((b,g)=>b+(g.plays||0),0), 0);
  const stars = SUBJECTS.filter(s=>!s.soon).reduce((a,s) => a + subjStars(s).got, 0);
  page(`
    <button class="back" data-go="#/">← Inicio</button>
    <div class="eyebrow" style="margin-top:14px">${P.avatar} ${esc(P.name)}</div>
    <h1 class="title">Camino de niveles</h1>
    <div class="stats">
      <div class="stat"><b>${P.xp}</b><span>XP total</span></div>
      <div class="stat"><b>${stars}</b><span>estrellas</span></div>
      <div class="stat"><b>${games}</b><span>partidas</span></div>
      <div class="stat"><b>${Object.keys(P.badges).length}</b><span>logros</span></div>
      <div class="stat"><b>${P.streak.n||0}</b><span>días seguidos</span></div>
      <div class="stat"><b>${L.i+1}</b><span>nivel</span></div>
    </div>
    <div class="sect-title">Niveles</div>
    <div class="lvl-road">${LEVELS.map((lv,i) => {
      const cls = i < L.i ? 'done' : i === L.i ? 'cur' : 'lock';
      const tag = i < L.i ? '✅ Conseguido' : i === L.i ? 'Ahora' : 'Faltan ' + (lv.xp - P.xp) + ' XP';
      return `<div class="lvl ${cls}"><div class="ic">${lv.icon}</div><div style="flex:1;min-width:0"><div class="t">Nivel ${i+1} · ${lv.name}</div><div class="s">Desde ${lv.xp} XP</div>
        ${i === L.i && L.next ? `<div class="bar"><div style="width:${Math.round(L.pct*100)}%"></div></div>` : ''}</div><div class="tag">${tag}</div></div>`;
    }).join('')}</div>
    <div class="sect-title">Logros</div>
    <div class="badges">${BADGES.map(b => `<div class="badge ${P.badges[b.id]?'got':'locked'}"><span class="ic">${b.icon}</span><b>${b.name}</b>${b.desc}</div>`).join('')}</div>
    <div class="sect-title">Cómo ganar XP</div>
    <div class="panel muted" style="line-height:1.6">📖 Leer una tarjeta: +5 · terminar la teoría: +20<br>✅ Acierto en test fácil: +10 · difícil: +15 · racha: +5 extra<br>🎮 Minijuego: +5 por partida y +15 por cada estrella nueva<br>🐲 Jefe final: +15 por acierto</div>`);
}

function viewMap(s){
  const p = prog(s.id);
  const st = subjStars(s);
  const next = s.sections.findIndex((_,i) => temaStars(s,i) < 3);
  const nodes = s.sections.map((sec,i) => {
    const t = temaStars(s,i), side = ['c','l','r','c','r','l'][i % 6];
    return `${i ? '<div class="path-dots"><i></i><i></i><i></i></div>' : ''}
      <div class="node-wrap ${side==='c'?'':side}">
        <button class="node ${t===3?'done':''} ${i===next?'next':''}" style="background:${COLORS[i%6]};box-shadow:0 7px 0 ${COLORS_D[i%6]}" data-go="#/s/${s.id}/t/${i}">${sec.icon || '📘'}${t===3 && gameStars(s,i) === sec.games.length*3 ? '<span class="crown">👑</span>' : ''}</button>
        <div class="node-label">${i+1}. ${sec.title}</div><div class="node-stars">${starsTxt(t,3)}</div>
      </div>`;
  }).join('');
  const missN = Object.keys(p.misses).length;
  page(`
    <button class="back" data-go="#/">← Inicio</button>
    <div class="hero" style="background:${s.color};margin-top:14px">
      <div class="deco" style="width:120px;height:120px;right:-30px;top:-30px"></div>
      <div class="eyebrow" style="color:#fff;opacity:.85">Mundo ${s.icon}${p.laps ? ' · vuelta ' + (p.laps+1) : ''}</div>
      <h1>${s.name}</h1>
      <p>⭐ ${st.got} de ${st.max} estrellas</p>
      <div class="bar" style="background:rgba(255,255,255,.3)"><div style="width:${Math.round(st.got/st.max*100)}%;background:#fff"></div></div>
    </div>
    <div class="map">${nodes}
      <div class="path-dots"><i></i><i></i><i></i></div>
      <div class="node-wrap l"><button class="node" style="background:var(--purple);box-shadow:0 7px 0 var(--purple-d)" data-go="#/s/${s.id}/arcade">🕹️</button><div class="node-label">Zona Arcade</div><div class="node-stars muted" style="font-size:13px">5 juegos mezclados</div></div>
      <div class="path-dots"><i></i><i></i><i></i></div>
      <div class="node-wrap"><button class="node" style="background:var(--ink);box-shadow:0 7px 0 #000;width:104px;height:104px;font-size:52px" data-go="#/s/${s.id}/jefe">🐲</button><div class="node-label">JEFE FINAL<br><span class="muted" style="font-family:Nunito;font-size:13px">${p.final ? 'Mejor nota: ' + (p.final.best/p.final.total*10).toFixed(1) : 'Examen de escribir'}</span></div></div>
    </div>
    <button class="mission" data-go="#/s/${s.id}/fallos" ${missN ? '' : 'disabled style="opacity:.6"'}><div class="ic" style="background:var(--red)">🩹</div>
      <div><div class="t">Caja de fallos</div><div class="s">${missN ? 'Tienes ' + missN + ' preguntas falladas por repasar' : 'Aquí irán las preguntas que falles'}</div></div><div class="st">${missN ? '▶' : ''}</div></button>
    <button class="mission" id="lapBtn"><div class="ic" style="background:var(--teal)">🔁</div>
      <div><div class="t">Nueva vuelta</div><div class="s">Vuelve a empezar el mundo para repasar todo. Mantienes tu XP, nivel y logros.</div></div></button>`);
  $('#lapBtn').onclick = () => confirmBox('¿Empezar una nueva vuelta?', 'Las estrellas de ' + s.name + ' vuelven a 0 para que lo repases todo otra vez. Tu XP, nivel y logros se quedan. Ganarás estrellas (y XP) de nuevo.', 'Sí, ¡otra vuelta!', () => {
    const laps = (p.laps||0) + 1;
    P.subj[s.id] = {laps, misses: p.misses}; save(); unlock('lap'); toast('🔁 ¡Vuelta ' + (laps+1) + '! A por todas las estrellas'); confetti(30); route();
  });
}
function confirmBox(title, text, ok, fn){
  const o = document.createElement('div'); o.className = 'overlay';
  o.innerHTML = `<div class="box"><div style="width:110px;margin:0 auto">${mascot('wow')}</div><h2 style="font-size:26px">${title}</h2><p class="muted">${text}</p>
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px"><button class="btn" id="cOk">${ok}</button><button class="btn ghost" id="cNo">Mejor no</button></div></div>`;
  document.body.appendChild(o);
  o.querySelector('#cNo').onclick = () => o.remove();
  o.querySelector('#cOk').onclick = () => { o.remove(); fn(); };
}

const GAME_INFO = {
  order:{icon:'🧩', name:'Ordena'}, match:{icon:'🔗', name:'Une parejas'}, classify:{icon:'🗂️', name:'Clasifica'},
  tf:{icon:'✅', name:'Verdadero o falso'}, hangman:{icon:'🔤', name:'Palabra oculta'}, pick:{icon:'🫧', name:'Caza burbujas'}, memory:{icon:'🃏', name:'Memoria'}
};
function viewTema(s, i){
  const p = prog(s.id), sec = s.sections[i];
  const e = p.easy[sec.id], h = p.hard[sec.id];
  page(`
    <button class="back" data-go="#/s/${s.id}">← Mapa</button>
    <div class="hero" style="background:${COLORS[i%6]};margin-top:14px">
      <div class="deco" style="width:120px;height:120px;right:-30px;top:-30px"></div>
      <div class="eyebrow" style="color:#fff;opacity:.85">Tema ${i+1} · ${s.name}</div>
      <h1>${sec.icon||''} ${sec.title}</h1>
      <p style="font-size:24px">${starsTxt(temaStars(s,i),3)}</p>
    </div>
    <div class="sect-title">Misiones</div>
    <button class="mission ${p.read[sec.id]?'done':''}" data-go="#/s/${s.id}/t/${i}/leer"><div class="ic" style="background:var(--blue)">📖</div>
      <div><div class="t">Teoría</div><div class="s">${p.read[sec.id] ? 'Leída · puedes repasarla tapando palabras' : 'Lee las tarjetas y destapa las palabras'}</div></div><div class="st">${p.read[sec.id]?'⭐':'☆'}</div></button>
    <button class="mission ${e && e.best>=Math.ceil(e.total/2)?'done':''}" data-go="#/s/${s.id}/t/${i}/facil"><div class="ic" style="background:var(--green)">🟢</div>
      <div><div class="t">Test fácil</div><div class="s">Elige la respuesta${e ? ' · mejor: ' + e.best + '/' + e.total : ''}</div></div><div class="st">${e && e.best>=Math.ceil(e.total/2)?'⭐':'☆'}</div></button>
    <button class="mission ${h && h.best>=Math.ceil(h.total/2)?'done':''}" data-go="#/s/${s.id}/t/${i}/dificil"><div class="ic" style="background:var(--red)">🔴</div>
      <div><div class="t">Test difícil</div><div class="s">Escribe la respuesta${h ? ' · mejor: ' + h.best + '/' + h.total : ''}</div></div><div class="st">${h && h.best>=Math.ceil(h.total/2)?'⭐':'☆'}</div></button>
    <div class="sect-title">Minijuegos</div>
    ${sec.games.map((g,k) => {
      const r = p.games[sec.id+':'+k] || {};
      return `<button class="mission ${r.stars===3?'done':''}" data-go="#/s/${s.id}/t/${i}/juego/${k}"><div class="ic" style="background:${COLORS[(k+3)%6]}">${GAME_INFO[g.type].icon}</div>
        <div><div class="t">${g.title || GAME_INFO[g.type].name}</div><div class="s">${GAME_INFO[g.type].name}${r.plays ? ' · jugado ' + r.plays + (r.plays===1?' vez':' veces') : ' · ¡nuevo!'}</div></div><div class="st">${starsTxt(r.stars||0,3)}</div></button>`;
    }).join('')}`);
}

/* ---------- Lectura ---------- */
function viewRead(s, i){
  const p = prog(s.id), sec = s.sections[i];
  page(`
    <button class="back" data-go="#/s/${s.id}/t/${i}">← Tema</button>
    <div class="eyebrow" style="margin-top:14px">Tema ${i+1} · Teoría</div>
    <h1 class="title">${sec.title}</h1>
    <div class="reader-bar" id="rbar"></div>
    <div class="tools">
      <button class="toggle" id="mStep">👣 Paso a paso</button>
      <button class="toggle" id="mAll">📜 Ver todo</button>
      <button class="toggle" id="hideAll">🙈 Tapar palabras</button>
      <button class="toggle" id="showAll">👀 Destapar todas</button>
    </div>
    <p class="muted" style="font-size:13.5px;margin:10px 0 0">💡 Toca una palabra amarilla para destaparla y otra vez para taparla. ¡Intenta adivinarla antes!</p>
    <div id="rbody">${sec.body}</div>
    <div style="margin-top:20px; display:flex; flex-direction:column; gap:12px" id="ract"></div>`);
  const body = $('#rbody');
  body.querySelectorAll('b').forEach(b => {
    if(b.textContent.trim().endsWith(':')) return;
    b.classList.add('key');
    b.onclick = () => { b.classList.toggle('shown'); sfx('tap'); };
  });
  const cards = Array.from(body.children);
  let step = !p.read[sec.id], shown = 1;
  function paint(){
    $('#mStep').classList.toggle('on', step); $('#mAll').classList.toggle('on', !step);
    if(!step) shown = cards.length;
    cards.forEach((c,k) => c.hidden = k >= shown);
    $('#rbar').innerHTML = cards.map((_,k) => `<span class="${k<shown?'on':''}"></span>`).join('');
    const done = shown >= cards.length;
    $('#ract').innerHTML = done
      ? `<button class="btn green block" data-go="#/s/${s.id}/t/${i}/facil">🟢 Test fácil</button>
         <button class="btn red block" data-go="#/s/${s.id}/t/${i}/dificil">🔴 Test difícil</button>
         <button class="btn ghost block" data-go="#/s/${s.id}/t/${i}">Volver al tema</button>`
      : `<button class="btn blue block" id="nextCard">Siguiente tarjeta ↓</button>`;
    if(!done) $('#nextCard').onclick = e => {
      const c = cards[shown]; shown++;
      const key = sec.id + ':' + shown;
      if(!p.cards[key]){ p.cards[key] = 1; save(); addXP(5, e.clientX, e.clientY); }
      sfx('tap'); paint();
      c.classList.remove('pop'); void c.offsetWidth; c.classList.add('pop');
      c.scrollIntoView({behavior:'smooth', block:'start'});
    };
    if(done && !p.read[sec.id]){
      p.read[sec.id] = true; save();
      addXP(20); toast('📖 ¡Teoría terminada! ⭐ Primera estrella'); sfx('win'); confetti(30); unlock('read1');
    }
  }
  $('#mStep').onclick = () => { step = true; shown = 1; paint(); };
  $('#mAll').onclick = () => { step = false; paint(); };
  $('#hideAll').onclick = () => { body.querySelectorAll('b.key').forEach(b => b.classList.remove('shown')); sfx('tap'); toast('🙈 Palabras tapadas: ¡a ver si te las sabes!'); };
  $('#showAll').onclick = () => { body.querySelectorAll('b.key').forEach(b => b.classList.add('shown')); sfx('tap'); };
  paint();
}

/* =========================================================
   Tests: fácil (elegir), difícil (escribir), jefe final,
   contrarreloj y caja de fallos
   ========================================================= */
function prepEasy(s, si, qi){
  const q = s.sections[si].quiz[qi];
  const order = shuffle(q.opts.map((_,k) => k));
  return {kind:'mc', q:q.q, fb:q.fb, opts:order.map(k => q.opts[k]), a:order.indexOf(q.a), id:si+':'+qi, si};
}
function prepHard(s, si, hi){ const h = s.sections[si].hard[hi]; return Object.assign({kind:'write', si}, h); }
function checkWritten(q, text){
  const t = norm(text);
  if(t.length < 2) return false;
  if(Array.isArray(q.ok[0])) return q.ok.every(g => g.some(w => t.includes(norm(w))));
  return q.ok.some(w => t.includes(norm(w)));
}
function allEasy(s){ const r = []; s.sections.forEach((sec,si) => sec.quiz.forEach((_,qi) => r.push(prepEasy(s,si,qi)))); return r; }

function runQuiz(s, cfg){
  const p = prog(s.id);
  let qs, title, back;
  if(cfg.mode === 'easy'){ qs = shuffle(s.sections[cfg.i].quiz.map((_,k) => prepEasy(s,cfg.i,k))); title = '🟢 ' + s.sections[cfg.i].title; back = `#/s/${s.id}/t/${cfg.i}`; }
  else if(cfg.mode === 'hard'){ qs = shuffle(s.sections[cfg.i].hard.map((_,k) => prepHard(s,cfg.i,k))); title = '🔴 ' + s.sections[cfg.i].title; back = `#/s/${s.id}/t/${cfg.i}`; }
  else if(cfg.mode === 'final'){ qs = []; s.sections.forEach((sec,si) => sec.hard.forEach((_,k) => qs.push(prepHard(s,si,k)))); qs = shuffle(qs); title = '🐲 Jefe final'; back = `#/s/${s.id}`; }
  else if(cfg.mode === 'speed'){ qs = shuffle(allEasy(s)); title = '⚡ Contrarreloj'; back = `#/s/${s.id}/arcade`; }
  else if(cfg.mode === 'fallos'){
    qs = shuffle(Object.keys(p.misses).map(id => { const [si,qi] = id.split(':').map(Number); return s.sections[si] && s.sections[si].quiz[qi] ? prepEasy(s,si,qi) : null; }).filter(Boolean));
    title = '🩹 Caja de fallos'; back = `#/s/${s.id}`;
    if(!qs.length){ toast('¡No tienes fallos guardados! 🎉'); return go(back); }
  }
  const speed = cfg.mode === 'speed';
  let qi = 0, right = 0, combo = 0, bestCombo = 0, xp = 0, missed = [], answered = false, time = 60, timer = null;

  page(`
    <button class="back" data-go="${back}">← Salir</button>
    <div class="qtop"><div class="eyebrow">${title}</div><div class="row"><span class="chip combo" id="combo" hidden></span><span class="chip" id="count"></span></div></div>
    <div class="qbar ${speed?'timer':''}"><div id="qfill" style="width:${speed?100:0}%"></div></div>
    <div class="qcard" id="qcard"></div>`);

  if(speed){
    timer = setInterval(() => {
      time--; $('#qfill').style.width = (time/60*100) + '%'; $('#count').textContent = '⏱️ ' + time + ' s';
      if(time <= 0){ clearInterval(timer); timer = null; finish(); }
    }, 1000);
    cleanup = () => { if(timer) clearInterval(timer); };
  }

  function paintCombo(){
    const c = $('#combo'); c.hidden = combo < 2; c.textContent = '🔥 x' + combo;
    c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
  }
  function show(){
    if(speed && qi >= qs.length) qs = qs.concat(shuffle(allEasy(s)));
    const q = qs[qi]; answered = false;
    if(speed) $('#count').textContent = '⏱️ ' + time + ' s · ✅ ' + right;
    else { $('#count').textContent = (qi+1) + ' / ' + qs.length; $('#qfill').style.width = (qi/qs.length*100) + '%'; }
    const card = $('#qcard');
    card.innerHTML = `<div class="qtext"></div><div id="qbody"></div><div id="qfb"></div><button class="btn blue block" id="qnext" hidden style="margin-top:14px"></button>`;
    card.querySelector('.qtext').textContent = q.q;
    const body = $('#qbody');
    if(q.kind === 'mc'){
      q.opts.forEach((o,k) => {
        const b = document.createElement('button'); b.className = 'opt';
        b.innerHTML = `<span class="letter">${'ABCD'[k]}</span><span></span>`; b.lastChild.textContent = o;
        b.onclick = e => answerMC(k, e); body.appendChild(b);
      });
    } else {
      body.innerHTML = `<input class="w-input" id="win" autocomplete="off" autocapitalize="off" placeholder="Escribe tu respuesta..."><button class="btn block" id="wchk">Comprobar</button>`;
      const go2 = e => { if(!answered) answerWrite(e); };
      $('#wchk').onclick = go2;
      $('#win').addEventListener('keydown', e => { if(e.key === 'Enter'){ e.preventDefault(); go2(e); } });
      setTimeout(() => $('#win') && $('#win').focus(), 60);
    }
  }
  function good(e, q){
    right++; combo++; bestCombo = Math.max(bestCombo, combo);
    const gain = (speed ? 5 : q.kind === 'write' ? 15 : 10) + (combo >= 3 && !speed ? 5 : 0);
    xp += gain; addXP(gain, e.clientX, e.clientY); sfx('ok');
    if(combo === 5) unlock('combo5');
    if(!speed && (combo === 3 || combo === 5 || combo === 10)) toast('🔥 ¡Racha de ' + combo + '!');
    if(q.id && cfg.mode === 'fallos'){ delete p.misses[q.id]; save(); }
    paintCombo();
  }
  function bad(q, yours, correct){
    combo = 0; sfx('bad');
    const c = $('#qcard'); c.classList.remove('shake'); void c.offsetWidth; c.classList.add('shake');
    missed.push({q:q.q, correct});
    if(q.id){ p.misses[q.id] = 1; save(); }
    paintCombo();
  }
  function after(){
    if(speed){ setTimeout(() => { if(timer){ qi++; show(); } }, 500); return; }
    const n = $('#qnext'); n.hidden = false;
    n.textContent = qi+1 < qs.length ? 'Siguiente →' : 'Ver resultado 🎉';
    n.onclick = () => { qi++; if(qi >= qs.length) finish(); else show(); };
  }
  function answerMC(k, e){
    if(answered) return; answered = true;
    const q = qs[qi];
    document.querySelectorAll('#qbody .opt').forEach((b,j) => { b.disabled = true; if(j === q.a) b.classList.add('correct'); else if(j === k) b.classList.add('wrong'); });
    const fb = $('#qfb');
    if(k === q.a){ good(e, q); if(!speed){ fb.className = 'feedback ok'; fb.textContent = '✓ ¡Correcto! ' + q.fb; } }
    else { bad(q, q.opts[k], q.opts[q.a]); fb.className = 'feedback no'; fb.textContent = '✗ Era «' + q.opts[q.a] + '». ' + (q.fb||''); if(speed){ setTimeout(() => { if(timer){ qi++; show(); } }, 1300); return; } }
    after();
  }
  function answerWrite(e){
    const q = qs[qi], inp = $('#win'), text = inp.value;
    if(!text.trim()){ inp.focus(); return; }
    answered = true; inp.disabled = true; $('#wchk').remove();
    const r = inp.getBoundingClientRect(), pos = {clientX:r.left+40, clientY:r.top};
    const fb = $('#qfb');
    if(checkWritten(q, text)){ good(pos, q); inp.classList.add('ok'); fb.className = 'feedback ok'; fb.textContent = '✓ ¡Correcto! Respuesta: ' + q.ans; }
    else {
      bad(q, text, q.ans); inp.classList.add('no'); fb.className = 'feedback no'; fb.textContent = '✗ La respuesta era: ' + q.ans + ' ';
      const fix = document.createElement('button'); fix.className = 'btn ghost small'; fix.style.marginTop = '8px';
      fix.textContent = '🙋 La sabía, lo dije con otras palabras';
      fix.onclick = ev => { missed.pop(); good(ev, q); fb.className = 'feedback ok'; fb.textContent = '✓ ¡Vale, cuenta como bien! Respuesta: ' + q.ans; inp.classList.replace('no','ok'); };
      fb.appendChild(fix);
    }
    after();
  }
  function finish(){
    if(timer){ clearInterval(timer); timer = null; }
    const total = speed ? right : qs.length, pct = total ? right/total : 0;
    let big, sub, msg, retry = () => route(), starsHtml = '', mood;
    if(speed){
      const a = p.arcade.speed = p.arcade.speed || {best:0, plays:0};
      const prev = a.best; a.best = Math.max(prev, right); a.plays++; save(); countPlay();
      if(right >= 10) unlock('speed10');
      big = right; sub = 'aciertos en 60 segundos · racha máxima ' + bestCombo;
      msg = right > prev ? '¡Nuevo récord! 🎉' : 'Tu récord: ' + a.best + '. ¡A por él!'; mood = right > prev ? 'happy' : 'ok';
    } else {
      if(cfg.mode === 'easy' || cfg.mode === 'hard'){
        const store2 = cfg.mode === 'easy' ? p.easy : p.hard, id = s.sections[cfg.i].id;
        const prev = store2[id];
        store2[id] = {best: Math.max(right, prev ? prev.best : 0), total};
        save();
        starsHtml = starsTxt(temaStars(s, cfg.i), 3);
      }
      if(cfg.mode === 'final'){
        const prev = p.final; p.final = {best: Math.max(right, prev ? prev.best : 0), total}; save();
        if(pct >= .5) unlock('boss'); if(pct >= .8) unlock('boss8');
        big = (pct*10).toFixed(1).replace('.0',''); sub = 'de nota · ' + right + '/' + total + ' correctas';
      } else { big = right + '/' + total; sub = 'respuestas correctas'; }
      if(cfg.mode === 'fallos' && !Object.keys(p.misses).length) unlock('fallos');
      if(pct === 1){ unlock('perfect'); xp += 20; addXP(20); }
      msg = pct === 1 ? '¡PERFECTO! Te lo sabes al dedillo 🏆' : pct >= .8 ? '¡Muy bien! Casi lo bordas' : pct >= .5 ? '¡Aprobado! Repasa las falladas' : 'Lee otra vez la teoría y vuelve, ¡tú puedes!';
      mood = pct >= .8 ? 'happy' : pct >= .5 ? 'ok' : 'sad';
    }
    const st = subjStars(s); if(st.got === st.max) unlock('world');
    if(mood === 'happy'){ confetti(60); sfx('win'); }
    resultScreen({title: mood === 'happy' ? '¡Genial!' : mood === 'ok' ? '¡Bien hecho!' : '¡Ánimo!', mood, big, sub, starsHtml, xp, msg, retry, back, missed});
  }
  show();
}

function resultScreen(r){
  page(`<div class="panel result">
    <div class="mascot">${mascot(r.mood)}</div>
    <h2>${r.title}</h2>
    ${r.big != null ? `<div class="big">${r.big}</div><div class="muted">${r.sub||''}</div>` : ''}
    ${r.starsHtml ? `<div class="stars">${r.starsHtml.replace(/<span class/g, (m, o) => m)}</div>` : ''}
    ${r.xp ? `<div class="xp-pill">+${r.xp} XP</div>` : ''}
    <p class="disp" style="font-size:19px;margin:14px 0 0">${r.msg}</p>
    <div class="actions"><button class="btn" id="rAgain">🔁 Otra vez</button><button class="btn ghost" data-go="${r.back}">Volver</button></div>
    <div class="miss-list" id="rMiss"></div></div>`);
  document.querySelectorAll('.result .stars span').forEach((sp,k) => sp.style.animationDelay = (k*0.2) + 's');
  $('#rAgain').onclick = r.retry;
  if(r.missed && r.missed.length){
    const m = $('#rMiss');
    m.innerHTML = '<div class="eyebrow" style="margin-bottom:8px">Para repasar</div>';
    r.missed.forEach(x => { const d = document.createElement('div'); d.className = 'miss-item'; d.innerHTML = '<b></b>Correcta: <span class="a-ok"></span>'; d.querySelector('b').textContent = x.q; d.querySelector('.a-ok').textContent = x.correct; m.appendChild(d); });
  }
}
function countPlay(){ P.played = (P.played||0) + 1; save(); if(P.played >= 10) unlock('play10'); if(P.played >= 50) unlock('play50'); }

/* =========================================================
   Minijuegos
   ========================================================= */
function runGame(s, g, ctx){
  // ctx: {i, k} para minijuegos de tema · {arcade:n} para arcade
  const back = ctx.arcade != null ? `#/s/${s.id}/arcade` : `#/s/${s.id}/t/${ctx.i}`;
  const info = GAME_INFO[g.type];
  page(`
    <button class="back" data-go="${back}">← Salir</button>
    <div class="eyebrow" style="margin-top:14px">${info.icon} ${info.name}</div>
    <h1 class="title" style="font-size:28px">${g.title || info.name}</h1>
    <div class="ghud" id="ghud"></div>
    <div id="gbody"></div>`);
  let errors = 0; const myRID = RID;
  const hud = extra => $('#ghud') && ($('#ghud').innerHTML = `<span class="chip">❌ Fallos: ${errors}</span>${extra||''}`);
  const miss = el => { errors++; sfx('bad'); if(el){ el.classList.remove('bad','shake'); void el.offsetWidth; el.classList.add(el.classList.contains('tile') || el.classList.contains('bubble') ? 'bad' : 'shake'); } };
  const hit = () => sfx('ok');
  const finish = (customStars) => {
    const stars = customStars != null ? customStars : errors === 0 ? 3 : errors <= 2 ? 2 : 1;
    const key = ctx.arcade != null ? 'a' + ctx.arcade : s.sections[ctx.i].id + ':' + ctx.k;
    const p = prog(s.id), bag = ctx.arcade != null ? p.arcade : p.games;
    const r = bag[key] = bag[key] || {stars:0, plays:0};
    const newStars = Math.max(0, stars - r.stars);
    r.stars = Math.max(r.stars, stars); r.plays++; save(); countPlay();
    const xp = 5 + newStars*15;
    addXP(xp);
    unlock('game1'); if(stars === 3) unlock('game3s');
    const st = subjStars(s); if(st.got === st.max) unlock('world');
    if(stars === 3){ confetti(70); sfx('win'); } else sfx('level');
    setTimeout(() => RID === myRID && resultScreen({title: stars === 3 ? '¡PERFECTO!' : stars === 2 ? '¡Muy bien!' : '¡Conseguido!', mood: stars === 3 ? 'happy' : 'ok',
      big: null, starsHtml: starsTxt(stars,3), xp, msg: errors === 0 ? '¡Sin ningún fallo! 🏆' : 'Fallos: ' + errors + '. ¿Lo intentas sin fallar?',
      retry: () => route(), back}), 450);
  };
  const G = {order:gOrder, match:gMatch, classify:gClassify, tf:gTF, hangman:gHangman, pick:gPick, memory:gMemory}[g.type];
  G(g, {alive: () => RID === myRID, hud, miss, hit, finish, get errors(){ return errors; }, body: $('#gbody')});
}

function gOrder(g, X){
  X.hud();
  let next = 0;
  X.body.innerHTML = `<p class="prompt">${g.prompt || 'Toca en el orden correcto'}</p><div class="order-slots">${g.items.map((_,k) => `<div class="order-slot" id="os${k}"><span class="n">${k+1}</span><span>?</span></div>`).join('')}</div><div class="pool" id="pool"></div>`;
  shuffle(g.items.map((t,k) => ({t,k}))).forEach(({t,k}) => {
    const b = document.createElement('button'); b.className = 'tile'; b.textContent = t;
    b.onclick = () => {
      if(k === next){ const sl = $('#os'+k); sl.classList.add('filled'); sl.lastChild.textContent = t; b.remove(); next++; X.hit(); if(next === g.items.length) X.finish(); }
      else { X.miss(b); X.hud(); }
    };
    $('#pool').appendChild(b);
  });
}
function gMatch(g, X){
  X.hud();
  let selL = null, done = 0;
  const pairs = g.pairs.map((p,k) => ({a:p[0], b:p[1], k}));
  X.body.innerHTML = `<p class="prompt">${g.prompt || 'Une cada palabra con su pareja'}</p><div class="match-cols"><div id="mL" style="display:flex;flex-direction:column;gap:8px"></div><div id="mR" style="display:flex;flex-direction:column;gap:8px"></div></div>`;
  shuffle(pairs).forEach(p => {
    const b = document.createElement('button'); b.className = 'tile'; b.textContent = p.a; b.dataset.k = p.k;
    b.onclick = () => { if(b.classList.contains('ok')) return; document.querySelectorAll('#mL .tile').forEach(x => x.classList.remove('sel')); b.classList.add('sel'); selL = b; sfx('tap'); };
    $('#mL').appendChild(b);
  });
  shuffle(pairs).forEach(p => {
    const b = document.createElement('button'); b.className = 'tile'; b.textContent = p.b;
    b.onclick = () => {
      if(b.classList.contains('ok')) return;
      if(!selL){ toast('Primero toca una de la izquierda 👈'); return; }
      if(+selL.dataset.k === p.k){ selL.classList.remove('sel'); selL.classList.add('ok'); b.classList.add('ok'); selL = null; done++; X.hit(); if(done === pairs.length) X.finish(); }
      else { X.miss(b); X.hud(); }
    };
    $('#mR').appendChild(b);
  });
}
function gClassify(g, X){
  const items = shuffle(g.items);
  let n = 0;
  const cols = g.bins.length === 3 ? 'c3' : g.bins.length === 4 ? 'c4' : 'c2';
  X.body.innerHTML = `<p class="prompt">${g.prompt || '¿Dónde va cada una?'}</p><div id="citem"></div><div class="bins ${cols}">${g.bins.map((b,k) => `<button class="bin" data-k="${k}" style="background:${COLORS[(k+1)%6]};box-shadow:0 5px 0 ${COLORS_D[(k+1)%6]}">${b}</button>`).join('')}</div><div id="cfb" style="margin-top:12px"></div>`;
  let lock = false;
  function show(){ if(!X.alive()) return; X.hud(`<span class="chip">📦 ${n+1} / ${items.length}</span>`); $('#citem').innerHTML = `<div class="class-item"></div>`; $('#citem .class-item').textContent = items[n][0]; $('#cfb').innerHTML = ''; }
  document.querySelectorAll('.bin').forEach(b => b.onclick = () => {
    if(lock) return;
    const it = items[n], k = +b.dataset.k;
    if(k === it[1]){ X.hit(); next(); }
    else { lock = true; X.miss($('#citem .class-item')); X.hud(`<span class="chip">📦 ${n+1} / ${items.length}</span>`); $('#cfb').innerHTML = `<div class="feedback no">Va en «${g.bins[it[1]]}»</div>`; setTimeout(() => { lock = false; next(); }, 1300); }
  });
  function next(){ n++; if(n >= items.length) X.finish(); else show(); }
  show();
}
function gTF(g, X){
  const items = shuffle(g.items).slice(0, g.max || 10);
  let n = 0, lock = false;
  X.body.innerHTML = `<div id="tfc"></div><div class="tf-btns"><button class="btn green" id="tfV">👍 Verdadero</button><button class="btn red" id="tfF">👎 Falso</button></div><div id="tffb" style="margin-top:12px"></div>`;
  function show(){ X.hud(`<span class="chip">❓ ${n+1} / ${items.length}</span>`); $('#tfc').innerHTML = '<div class="tf-card"></div>'; $('#tfc .tf-card').textContent = items[n][0]; $('#tffb').innerHTML = ''; }
  function ans(v, e){
    if(lock) return; lock = true;
    const it = items[n];
    if(v === it[1]){ X.hit(); $('#tffb').innerHTML = `<div class="feedback ok">✓ ¡Bien!</div>`; setTimeout(nx, 550); }
    else { X.miss($('#tfc .tf-card')); X.hud(`<span class="chip">❓ ${n+1} / ${items.length}</span>`); $('#tffb').innerHTML = `<div class="feedback no"></div>`; $('#tffb .feedback').textContent = '✗ Era ' + (it[1] ? 'VERDADERO' : 'FALSO') + (it[2] ? '. ' + it[2] : ''); setTimeout(nx, 2000); }
  }
  function nx(){ if(!X.alive()) return; lock = false; n++; if(n >= items.length) X.finish(); else show(); }
  $('#tfV').onclick = e => ans(true, e); $('#tfF').onclick = e => ans(false, e);
  show();
}
function gHangman(g, X){
  const words = shuffle(g.words).slice(0, g.max || 3);
  let w = 0, lives, found, solved = 0;
  const LET = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  const base = ch => ch === 'Ñ' ? 'Ñ' : norm(ch).toUpperCase();
  function show(){
    lives = 6; found = new Set();
    paint();
  }
  function paint(){
    const word = words[w][0].toUpperCase();
    X.hud(`<span class="chip hearts">${'❤️'.repeat(lives)}${'🤍'.repeat(6-lives)}</span><span class="chip">🔤 ${w+1} / ${words.length}</span>`);
    X.body.innerHTML = `<div class="hint">💡 ${esc(words[w][1])}</div><div class="word">${word.split('').map(ch => ch === ' ' ? '<span class="l sp"></span>' : `<span class="l ${found.has(base(ch))?'show':''}">${found.has(base(ch)) ? ch : ''}</span>`).join('')}</div>
      <div class="keys">${LET.map(L => `<button data-l="${L}" class="${found.has(L) ? (word.split('').some(c=>base(c)===L)?'y':'n') : ''}" ${found.has(L)?'disabled':''}>${L}</button>`).join('')}</div>`;
    X.body.querySelectorAll('.keys button').forEach(b => b.onclick = () => guess(b.dataset.l));
  }
  function guess(L){
    const word = words[w][0].toUpperCase();
    found.add(L);
    if(word.split('').some(c => base(c) === L)) X.hit(); else { lives--; X.miss(); }
    const complete = word.split('').every(c => c === ' ' || found.has(base(c)));
    paint();
    if(complete){ solved++; toast('🎉 ¡' + words[w][0].toUpperCase() + '!'); setTimeout(nextW, 800); }
    else if(lives <= 0){ X.body.querySelector('.word').innerHTML = word.split('').map(ch => ch===' ' ? '<span class="l sp"></span>' : `<span class="l show" style="color:var(--red)">${ch}</span>`).join(''); X.body.querySelectorAll('.keys button').forEach(b => b.disabled = true); setTimeout(nextW, 1800); }
  }
  function nextW(){
    if(!X.alive()) return;
    w++;
    if(w >= words.length){ const e = X.errors; X.finish(solved < words.length ? 1 : e <= 2 ? 3 : e <= 5 ? 2 : 1); }
    else show();
  }
  show();
}
function gPick(g, X){
  const total = g.items.filter(x => x[1]).length;
  let got = 0;
  X.body.innerHTML = `<p class="prompt">${g.prompt}</p><div class="bubbles" id="bub"></div>`;
  const hud = () => X.hud(`<span class="chip">🫧 ${got} / ${total}</span>`);
  hud();
  shuffle(g.items).forEach((it,k) => {
    const b = document.createElement('button'); b.className = 'bubble'; b.textContent = it[0];
    b.style.background = COLORS[k%6]; b.style.boxShadow = '0 5px 0 ' + COLORS_D[k%6];
    b.onclick = () => {
      if(b.disabled) return;
      if(it[1]){ b.disabled = true; b.classList.add('ok'); got++; X.hit(); hud(); if(got === total) setTimeout(() => X.finish(), 400); }
      else { b.disabled = true; X.miss(b); hud(); }
    };
    $('#bub').appendChild(b);
  });
}
function gMemory(g, X){
  const pairs = shuffle(g.pairs).slice(0, 6);
  const cards = shuffle(pairs.flatMap((p,k) => [{t:p[0], k}, {t:p[1], k}]));
  let open = [], got = 0, lock = false;
  X.body.innerHTML = `<p class="prompt">${g.prompt || 'Encuentra las parejas'}</p><div class="mem-grid" id="mem"></div>`;
  X.hud(`<span class="chip">🃏 0 / ${pairs.length}</span>`);
  cards.forEach(c => {
    const b = document.createElement('button'); b.className = 'mcard';
    b.innerHTML = `<div class="in"><div class="f">❓</div><div class="b"></div></div>`; b.querySelector('.b').textContent = c.t;
    b.onclick = () => {
      if(lock || b.classList.contains('up')) return;
      b.classList.add('up'); sfx('tap'); open.push([b,c]);
      if(open.length === 2){
        const [[b1,c1],[b2,c2]] = open; open = [];
        if(c1.k === c2.k){ b1.classList.add('got'); b2.classList.add('got'); got++; X.hit(); X.hud(`<span class="chip">🃏 ${got} / ${pairs.length}</span>`); if(got === pairs.length) setTimeout(() => X.finish(X.errors <= 3 ? 3 : X.errors <= 7 ? 2 : 1), 500); }
        else { lock = true; X.miss(); X.hud(`<span class="chip">🃏 ${got} / ${pairs.length}</span>`); setTimeout(() => { b1.classList.remove('up'); b2.classList.remove('up'); lock = false; }, 900); }
      }
    };
    $('#mem').appendChild(b);
  });
}

/* ---------- Zona Arcade: 5 juegos mezclados (se crean solos con los datos) ---------- */
function arcadeGames(s){
  const all = t => s.sections.flatMap(sec => sec.games.filter(g => g.type === t));
  const pairs = [...all('match'), ...all('memory')].flatMap(g => g.pairs);
  const words = all('hangman').flatMap(g => g.words);
  const tf = all('tf').flatMap(g => g.items);
  const picks = shuffle(s.sections.map((_,i) => i)).slice(0, 3);
  return [
    {type:'memory', title:'Memoria mezclada', pairs: shuffle(pairs).slice(0,6), desc:'Parejas de todos los temas'},
    {type:'hangman', title:'Palabras ocultas', words: shuffle(words), max:4, desc:'4 palabras de todo el temario'},
    {type:'tf', title:'V o F relámpago', items: shuffle(tf), max:12, desc:'12 frases de todos los temas'},
    {type:'classify', title:'¿De qué tema es?', prompt:'¿A qué tema pertenece esta pregunta?', bins: picks.map(i => s.sections[i].title),
      items: shuffle(picks.flatMap((si,b) => s.sections[si].quiz.map(q => [q.q, b]))).slice(0, 9), desc:'Adivina el tema de cada pregunta'},
    {type:'speed', title:'Contrarreloj', desc:'60 segundos: ¿cuántas aciertas?'}
  ];
}
function viewArcade(s){
  const p = prog(s.id);
  const list = arcadeGames(s);
  page(`
    <button class="back" data-go="#/s/${s.id}">← Mapa</button>
    <div class="hero purple" style="margin-top:14px"><div class="deco" style="width:120px;height:120px;right:-30px;top:-30px"></div>
      <div class="eyebrow" style="color:#fff;opacity:.85">${s.name}</div><h1>🕹️ Zona Arcade</h1><p>Juegos que mezclan todos los temas. Cada partida es distinta.</p></div>
    ${list.map((g,k) => {
      const r = g.type === 'speed' ? p.arcade.speed : p.arcade['a'+k];
      const icon = g.type === 'speed' ? '⚡' : GAME_INFO[g.type].icon;
      const right = g.type === 'speed' ? (r ? '🏆 ' + r.best : '') : starsTxt((r||{}).stars||0, 3);
      return `<button class="mission" data-go="#/s/${s.id}/arcade/${k}"><div class="ic" style="background:${COLORS[k%6]}">${icon}</div>
        <div><div class="t">${g.title}</div><div class="s">${g.desc}${r && r.plays ? ' · ' + r.plays + ' partidas' : ''}</div></div><div class="st">${right}</div></button>`;
    }).join('')}`);
}
function runArcade(s, k){
  const g = arcadeGames(s)[k];
  if(!g) return go(`#/s/${s.id}/arcade`);
  if(g.type === 'speed') return runQuiz(s, {mode:'speed'});
  runGame(s, g, {arcade:k});
}

/* ---------- Arranque ---------- */
function boot(){
  updateStreak(); renderHUD();
  $('#soundBtn').onclick = () => { P.sound = !P.sound; save(); renderHUD(); };
  window.addEventListener('hashchange', route);
  route();
}
document.addEventListener('DOMContentLoaded', boot);
