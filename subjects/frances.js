/* Asignatura: Francés (Unité 1). Explicaciones en castellano, ejemplos en francés. */
registerSubject({
  id:"frances", name:"Francés", icon:"🇫🇷", color:"var(--red)", colorD:"var(--red-d)",
  sections:[
  {
    id:"accents", title:"Les accents", icon:"✍️",
    body:`
    <div class="card"><h3><span class="chip">1</span>Los cuatro acentos</h3>
      <ul><li><b>L'accent aigu</b>: <b>é</b> → sonido <b>cerrado</b> (fermé). Ex: <b>élève</b>.</li>
      <li><b>L'accent grave</b>: <b>è</b> → sonido <b>abierto</b> (ouvert). Ex: <b>mère</b>.</li>
      <li><b>L'accent circonflexe</b>: <b>ê</b>, <b>ô</b>, <b>â</b> → sonido <b>abierto</b>. Ex: <b>fête</b>, <b>hôpital</b>.</li>
      <li><b>Le tréma</b>: <b>ë</b>, <b>ï</b> → la vocal se pronuncia <b>separada</b>. Ex: <b>maïs</b> (ma-ís) ≠ <b>mais</b> (me).</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>Truco para recordarlo</h3>
      <p><b>Aigu</b> (agudo) sube hacia la derecha <b>é</b>; <b>grave</b> baja <b>è</b>; el <b>circonflexe</b> es un gorrito <b>ê</b>; el <b>tréma</b> son dos puntitos <b>ï</b>.</p></div>`,
    quiz:[
      {q:"¿Cómo se llama el acento de «é»?", opts:["Accent aigu","Accent grave","Accent circonflexe","Tréma"], a:0, fb:"é = accent aigu, sonido cerrado."},
      {q:"«è» suena...", opts:["Abierto (ouvert)","Cerrado (fermé)","No suena","Como una i"], a:0, fb:"El accent grave da un sonido abierto: mère."},
      {q:"¿Qué acento lleva «hôpital»?", opts:["Accent circonflexe","Accent aigu","Accent grave","Tréma"], a:0, fb:"ô = accent circonflexe, el «gorrito»."},
      {q:"¿Para qué sirve el tréma en «maïs»?", opts:["Para pronunciar la i separada","Para hacer la e cerrada","Para que no suene la s","Para que sea plural"], a:0, fb:"Ma-ís: las dos vocales se pronuncian separadas. Sin tréma, «mais» suena «me»."},
      {q:"¿Qué palabra lleva accent aigu?", opts:["élève","mère","fête","maïs"], a:0, fb:"élève empieza con é (aigu)."}
    ],
    hard:[
      {q:"Nombre del acento de «è»:", ans:"Accent grave", ok:["grave"]},
      {q:"Nombre del acento de «é»:", ans:"Accent aigu", ok:["aigu"]},
      {q:"Nombre de los dos puntitos de «ï»:", ans:"Tréma", ok:["trema"]},
      {q:"Escribe una palabra con accent circonflexe.", ans:"fête, hôpital...", ok:["fete","hopital","tete","foret","pate","ile"]}
    ],
    games:[
      {type:"match", title:"Acento y nombre", pairs:[["é","accent aigu"],["è","accent grave"],["ê","accent circonflexe"],["ï","tréma"],["fermé","cerrado"],["ouvert","abierto"]]},
      {type:"classify", title:"¿Qué acento tiene?", prompt:"¿Qué acento lleva la palabra?", bins:["aigu é","grave è","circonflexe ê/ô","tréma ï"], items:[["élève",0],["café",0],["génial",0],["mère",1],["père",1],["frère",1],["fête",2],["hôpital",2],["forêt",2],["maïs",3],["Noël",3]]},
      {type:"tf", title:"Vrai ou faux?", items:[["é suena cerrado",true],["è suena cerrado",false,"è (grave) suena abierto"],["El circonflexe parece un gorrito",true],["«mais» y «maïs» se pronuncian igual",false,"maïs = ma-ís; mais = me"],["Le tréma son dos puntitos",true]]}
    ]
  },
  {
    id:"son", title:"Son et graphie", icon:"🔊",
    body:`
    <div class="card"><h3><span class="chip">1</span>La letra E</h3>
      <ul><li>En el alfabeto suena como en <b>je</b>.</li>
      <li><b>E abierta (ouvert)</b>: <b>è</b> (mère), <b>ê</b> (fête), <b>ai</b> (mais), <b>ei</b> (peigne), <b>et</b> (carnet), y <b>e + consonante doble</b> (elle).</li>
      <li><b>E cerrada (fermé)</b>: <b>é</b> (génial), <b>-er</b> (danser), <b>-ez</b> (dansez).</li></ul></div>
    <div class="card"><h3><span class="chip">2</span>Consonantes que cambian</h3>
      <ul><li><b>c + e/i</b> = s: merci · <b>c + a/o/u</b> = k: cacao</li>
      <li><b>g + e/i</b> = sonido «ye»: génial · <b>g + a/o/u</b> = g: garage</li>
      <li><b>ph</b> = f: photographe · <b>ch</b> = sonido «x» gallego / «sh»: chat</li>
      <li><b>gn</b> = ñ: montagne · <b>j</b> = como en je</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>La letra O</h3>
      <ul><li><b>O cerrada (fermé)</b>: <b>o, au, eau</b>: moto, auto, bateau.</li>
      <li><b>O abierta (ouvert)</b>: o + consonante doble: homme.</li>
      <li><b>oi</b> suena [wa]: moi, voiture, au revoir.</li></ul></div>`,
    quiz:[
      {q:"En «merci», la c suena como...", opts:["s","k","ch","g"], a:0, fb:"c + e/i suena s."},
      {q:"«ph» en «photographe» suena...", opts:["f","p","v","b"], a:0, fb:"ph = f."},
      {q:"«oi» en «moi» suena...", opts:["[wa]","[oi]","[o]","[u]"], a:0, fb:"oi se pronuncia wa: moi, voiture."},
      {q:"«gn» en «montagne» suena como...", opts:["ñ","gn","n","g"], a:0, fb:"gn = ñ."},
      {q:"¿Qué terminación tiene E cerrada?", opts:["-er (danser)","-ai (mais)","-et (carnet)","-ei (peigne)"], a:0, fb:"-er y -ez suenan é cerrada."},
      {q:"«eau» en «bateau» suena...", opts:["o cerrada","e abierta","a","u"], a:0, fb:"au y eau suenan o cerrada."}
    ],
    hard:[
      {q:"¿Cómo suena «ch» en «chat»?", ans:"Como la x gallega / sh", ok:["x","sh"]},
      {q:"¿Qué dos letras suenan como ñ?", ans:"gn", ok:["gn"]},
      {q:"¿Cómo suena «oi»?", ans:"wa", ok:["wa","ua","oa"]},
      {q:"¿Cómo suena la c delante de e o i?", ans:"s", ok:["s"]}
    ],
    games:[
      {type:"classify", title:"¿E abierta o cerrada?", prompt:"¿La E suena abierta o cerrada?", bins:["ouvert (abierta)","fermé (cerrada)"], items:[["mère",0],["fête",0],["mais",0],["peigne",0],["carnet",0],["elle",0],["génial",1],["danser",1],["dansez",1],["élève (la primera é)",1]]},
      {type:"match", title:"Letras y sonido", pairs:[["ph","f"],["gn","ñ"],["oi","wa"],["eau","o"],["c + e/i","s"],["c + a/o/u","k"]]},
      {type:"classify", title:"¿Cómo suena la c / g?", prompt:"¿Qué sonido tiene?", bins:["s","k","ye (g suave)","g"], items:[["merci",0],["ici",0],["cacao",1],["copain",1],["génial",2],["gilet",2],["garage",3],["gomme",3]]}
    ]
  },
  {
    id:"nasales", title:"Les nasales", icon:"👃",
    body:`
    <div class="card"><h3><span class="chip">1</span>Sonidos nasales</h3>
      <p>Se pronuncian echando el aire también por la <b>nariz</b>, sin decir la n del todo.</p>
      <ul><li><b>an, en</b> → [ã]: <b>dent</b>, <b>sang</b></li>
      <li><b>in, un, ain, ein</b> → [ɛ̃]: <b>jardin</b>, <b>lundi</b>, <b>pain</b>, <b>plein</b></li>
      <li><b>on, om</b> → [ɔ̃]: <b>bonbon</b></li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>¡Ojo con la m!</h3><p>Delante de <b>p</b> o <b>b</b> se escribe <b>m</b> en vez de n: <b>im</b>possible, <b>om</b>bre, <b>em</b>porter.</p></div>`,
    quiz:[
      {q:"¿Qué grupo suena como en «dent»?", opts:["an / en","in / un","on / om","oi"], a:0, fb:"an y en suenan igual: [ã]."},
      {q:"«pain» tiene el mismo sonido nasal que...", opts:["jardin","bonbon","dent","sang"], a:0, fb:"ain, in, un, ein: el mismo sonido [ɛ̃]."},
      {q:"«bonbon» tiene el sonido...", opts:["on","an","in","un"], a:0, fb:"on / om."},
      {q:"Delante de p o b, la n se escribe...", opts:["m","nn","ng","n"], a:0, fb:"Delante de p o b va m."}
    ],
    hard:[
      {q:"Escribe una palabra con sonido «an/en».", ans:"dent, sang...", ok:["dent","sang","enfant","maman","temps","grand"]},
      {q:"Escribe una palabra con sonido «in/ain».", ans:"jardin, pain, lundi, plein...", ok:["jardin","pain","lundi","plein","vin","main"]},
      {q:"Escribe una palabra con sonido «on».", ans:"bonbon...", ok:["bonbon","bon","maison","non","crayon"]}
    ],
    games:[
      {type:"classify", title:"¿Qué nasal es?", prompt:"¿Qué sonido nasal tiene?", bins:["an / en","in / ain / un / ein","on / om"], items:[["dent",0],["sang",0],["enfant",0],["jardin",1],["lundi",1],["pain",1],["plein",1],["bonbon",2],["crayon",2],["maison",2]]},
      {type:"pick", title:"Caza las nasales «on»", prompt:"Toca solo las palabras con sonido «on»", items:[["bonbon",true],["crayon",true],["maison",true],["non",true],["pain",false],["dent",false],["jardin",false],["chat",false]]},
      {type:"tf", title:"Vrai ou faux?", items:[["«dent» y «sang» tienen el mismo sonido",true],["«pain» y «jardin» tienen el mismo sonido",true],["«bonbon» suena como «pain»",false,"bonbon = on; pain = in/ain"],["Delante de b se escribe m",true]]}
    ]
  },
  {
    id:"articles", title:"Les articles", icon:"🔤",
    body:`
    <div class="card"><h3><span class="chip">1</span>Artículos indefinidos (un, una, unos)</h3>
      <ul><li>Masculino singular: <b>un</b> → <b>un</b> stylo</li>
      <li>Femenino singular: <b>une</b> → <b>une</b> gomme</li>
      <li>Plural (masc. y fem.): <b>des</b> → <b>des</b> crayons</li></ul></div>
    <div class="card"><h3><span class="chip">2</span>Artículos definidos (el, la, los)</h3>
      <ul><li>Masculino singular: <b>le</b> → <b>le</b> cahier</li>
      <li>Femenino singular: <b>la</b> → <b>la</b> trousse</li>
      <li>Plural (masc. y fem.): <b>les</b> → <b>les</b> écoles</li>
      <li><b>l'</b> → cuando la palabra empieza por <b>vocal</b> o <b>h</b>: <b>l'</b>ordinateur, <b>l'</b>école, <b>l'</b>agenda.</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>Truco</h3><p>En plural no importa si es masculino o femenino: siempre <b>des</b> o <b>les</b>.</p></div>`,
    quiz:[
      {q:"___ gomme (indefinido)", opts:["une","un","des","le"], a:0, fb:"Gomme es femenino singular → une."},
      {q:"___ cahiers (indefinido)", opts:["des","un","une","les"], a:0, fb:"Plural indefinido → des."},
      {q:"___ trousse (definido)", opts:["la","le","l'","les"], a:0, fb:"Trousse es femenino → la."},
      {q:"___ ordinateur (definido)", opts:["l'","le","la","un"], a:0, fb:"Empieza por vocal → l'."},
      {q:"___ stylos (definido)", opts:["les","des","le","la"], a:0, fb:"Plural definido → les."},
      {q:"«C'est ___ agenda de Thomas»", opts:["l'","la","le","les"], a:0, fb:"Agenda empieza por vocal → l'agenda."},
      {q:"¿Cuándo se usa l'?", opts:["Delante de vocal o h","Solo en plural","Con las palabras femeninas","Delante de consonante"], a:0, fb:"l' = le / la delante de vocal o h."}
    ],
    hard:[
      {q:"Artículo indefinido plural:", ans:"des", ok:["des"]},
      {q:"Artículo definido femenino singular:", ans:"la", ok:["la"]},
      {q:"Completa: ___ école (definido)", ans:"l'", ok:["l'","l "]},
      {q:"Completa: ___ livre (indefinido)", ans:"un", ok:["un"]},
      {q:"Completa: ___ gommes (definido)", ans:"les", ok:["les"]}
    ],
    games:[
      {type:"classify", title:"un, une o des", prompt:"¿Qué artículo indefinido va?", bins:["un","une","des"], items:[["stylo",0],["livre",0],["cahier",0],["tableau",0],["gomme",1],["trousse",1],["règle",1],["professeure",1],["crayons",2],["ordinateurs",2],["gommes",2]]},
      {type:"classify", title:"le, la, l' o les", prompt:"¿Qué artículo definido va?", bins:["le","la","l'","les"], items:[["cahier",0],["stylo",0],["prénom",0],["trousse",1],["copine",1],["classe",1],["ordinateur",2],["école",2],["agenda",2],["gommes",3],["styles",3],["livres",3]]},
      {type:"match", title:"Indefinido → definido", pairs:[["un cahier","le cahier"],["une trousse","la trousse"],["des gommes","les gommes"],["un ordinateur","l'ordinateur"],["une école","l'école"],["des stylos","les stylos"]]}
    ]
  },
  {
    id:"ecole", title:"Le matériel scolaire", icon:"🎒",
    body:`
    <div class="card"><h3><span class="chip">1</span>Dans ma trousse (en mi estuche)</h3>
      <ul><li><b>un stylo</b> → bolígrafo · <b>un crayon</b> → lápiz</li>
      <li><b>une gomme</b> → goma · <b>un taille-crayon</b> → sacapuntas</li>
      <li><b>une règle</b> → regla · <b>des ciseaux</b> → tijeras</li>
      <li><b>un bâton de colle</b> → pegamento · <b>des feutres</b> → rotuladores</li>
      <li><b>des crayons de couleur</b> → lápices de colores · <b>une trousse</b> → estuche</li></ul></div>
    <div class="card"><h3><span class="chip">2</span>Dans mon cartable et en classe</h3>
      <ul><li><b>un cartable</b> / <b>un sac à dos</b> → mochila · <b>un livre</b> → libro · <b>un cahier</b> → cuaderno</li>
      <li><b>un agenda</b> → agenda · <b>une calculatrice</b> → calculadora · <b>un dictionnaire</b> → diccionario</li>
      <li><b>un tableau</b> → pizarra · <b>un TBI</b> → pizarra digital · <b>un ordinateur</b> → ordenador</li>
      <li><b>une chaise</b> → silla · <b>une table</b> → mesa · <b>le professeur / la professeure</b></li></ul></div>`,
    quiz:[
      {q:"«une gomme» es...", opts:["una goma","una regla","un lápiz","una mochila"], a:0, fb:"Gomme = goma de borrar."},
      {q:"¿Cómo se dice «estuche»?", opts:["une trousse","un cartable","un cahier","une règle"], a:0, fb:"Trousse = estuche; cartable = mochila."},
      {q:"«un cartable» es...", opts:["una mochila","un cuaderno","una carpeta","un libro"], a:0, fb:"Cartable = mochila del cole."},
      {q:"¿Cómo se dice «sacapuntas»?", opts:["un taille-crayon","une gomme","un stylo","une colle"], a:0, fb:"Taille-crayon: «corta-lápiz»."},
      {q:"«un tableau» es...", opts:["la pizarra","la mesa","el cuadro de notas","la ventana"], a:0, fb:"Tableau = pizarra."},
      {q:"«des ciseaux» son...", opts:["unas tijeras","unos lápices","unas reglas","unos rotuladores"], a:0, fb:"Ciseaux = tijeras."}
    ],
    hard:[
      {q:"Escribe en francés: «bolígrafo».", ans:"un stylo", ok:["stylo"]},
      {q:"Escribe en francés: «cuaderno».", ans:"un cahier", ok:["cahier"]},
      {q:"Escribe en francés: «regla».", ans:"une règle", ok:["regle"]},
      {q:"Escribe en francés: «lápiz».", ans:"un crayon", ok:["crayon"]},
      {q:"Escribe en francés: «ordenador».", ans:"un ordinateur", ok:["ordinateur"]}
    ],
    games:[
      {type:"memory", title:"Memoria del cole", pairs:[["un stylo","🖊️ bolígrafo"],["une gomme","🧽 goma"],["une règle","📏 regla"],["des ciseaux","✂️ tijeras"],["un livre","📕 libro"],["un cartable","🎒 mochila"],["une trousse","👝 estuche"],["un crayon","✏️ lápiz"]]},
      {type:"hangman", title:"Le pendu", words:[["Stylo","bolígrafo 🖊️"],["Gomme","goma de borrar"],["Regle","regla 📏"],["Cahier","cuaderno 📓"],["Trousse","estuche"],["Cartable","mochila 🎒"],["Crayon","lápiz ✏️"],["Ciseaux","tijeras ✂️"],["Tableau","pizarra"],["Livre","libro 📕"]], max:4},
      {type:"classify", title:"¿Trousse o cartable?", prompt:"¿Dónde lo guardas normalmente?", bins:["👝 trousse","🎒 cartable"], items:[["stylo",0],["crayon",0],["gomme",0],["taille-crayon",0],["feutres",0],["livre",1],["cahier",1],["agenda",1],["dictionnaire",1],["calculatrice",1]]}
    ]
  },
  {
    id:"couleurs", title:"Les couleurs", icon:"🎨",
    body:`
    <div class="card"><h3><span class="chip">1</span>Los colores</h3>
      <ul><li>🔴 <b>rouge</b> · 🔵 <b>bleu</b> · 🟢 <b>vert</b> · 🟡 <b>jaune</b></li>
      <li>⚫ <b>noir</b> · ⚪ <b>blanc</b> · 🟠 <b>orange</b> · 🟣 <b>violet</b></li>
      <li>🩷 <b>rose</b> · 🟤 <b>marron</b> · 🩶 <b>gris</b></li></ul></div>
    <div class="card"><h3><span class="chip">2</span>Masculino y femenino</h3>
      <p>El color va <b>detrás</b> de la palabra y cambia si es femenino:</p>
      <ul><li>Se añade <b>-e</b>: un stylo <b>vert</b> → une gomme <b>verte</b> · bleu → <b>bleue</b> · noir → <b>noire</b> · gris → <b>grise</b></li>
      <li>Cambian más: blanc → <b>blanche</b> · violet → <b>violette</b></li>
      <li>No cambian (ya acaban en -e): <b>rouge</b>, <b>jaune</b>, <b>rose</b>. Tampoco <b>orange</b> ni <b>marron</b>.</li>
      <li>En plural se añade <b>-s</b>: des stylos <b>bleus</b>.</li></ul></div>`,
    quiz:[
      {q:"«vert» es...", opts:["verde","azul","rojo","gris"], a:0, fb:"Vert = verde."},
      {q:"«jaune» es...", opts:["amarillo","naranja","blanco","marrón"], a:0, fb:"Jaune = amarillo."},
      {q:"une gomme ___ (blanco)", opts:["blanche","blanc","blance","blanches"], a:0, fb:"Blanc en femenino es blanche."},
      {q:"une trousse ___ (verde)", opts:["verte","vert","verts","verde"], a:0, fb:"Femenino: se añade -e → verte."},
      {q:"une règle ___ (rojo)", opts:["rouge","rougee","rouga","rouges"], a:0, fb:"Rouge ya acaba en -e: no cambia."},
      {q:"des stylos ___ (azul)", opts:["bleus","bleu","bleue","bleues"], a:0, fb:"Masculino plural: + s → bleus."}
    ],
    hard:[
      {q:"Escribe en francés: «negro».", ans:"noir", ok:["noir"]},
      {q:"Escribe en francés: «azul».", ans:"bleu", ok:["bleu"]},
      {q:"Femenino de «blanc»:", ans:"blanche", ok:["blanche"]},
      {q:"Traduce: «una goma rosa».", ans:"une gomme rose", ok:[["une"],["gomme"],["rose"]]}
    ],
    games:[
      {type:"memory", title:"Memoria de colores", pairs:[["rouge","🔴"],["bleu","🔵"],["vert","🟢"],["jaune","🟡"],["noir","⚫"],["blanc","⚪"],["orange","🟠"],["violet","🟣"]]},
      {type:"match", title:"Masculino → femenino", pairs:[["vert","verte"],["bleu","bleue"],["noir","noire"],["blanc","blanche"],["violet","violette"],["gris","grise"],["rouge","rouge"]]},
      {type:"tf", title:"Vrai ou faux?", items:[["une gomme blanche",true],["une trousse vert",false,"une trousse verte"],["un stylo rouge",true],["une règle jaune",true],["des crayons bleu",false,"des crayons bleus"],["une gomme noire",true],["un cahier blanche",false,"un cahier blanc"]]}
    ]
  },
  {
    id:"salut", title:"Salut ! Saluer et prendre congé", icon:"👋",
    body:`
    <div class="card"><h3><span class="chip">1</span>Saludar (saluer)</h3>
      <ul><li><b>Salut !</b> → ¡Hola! (con amigos)</li>
      <li><b>Bonjour !</b> → ¡Buenos días! / ¡Hola! (por el día, con cualquiera)</li>
      <li><b>Bonsoir !</b> → ¡Buenas tardes / noches! (al llegar por la tarde-noche)</li>
      <li>Bonjour <b>Monsieur</b> / Bonsoir <b>Madame</b> → con adultos.</li></ul></div>
    <div class="card"><h3><span class="chip">2</span>Despedirse (prendre congé)</h3>
      <ul><li><b>Salut ! / Tchao !</b> → ¡Chao!</li>
      <li><b>Au revoir !</b> → ¡Adiós!</li>
      <li><b>À bientôt !</b> → ¡Hasta pronto!</li>
      <li><b>À tout à l'heure !</b> → ¡Hasta luego! (hoy mismo) · <b>À plus (tard) !</b> → ¡Hasta luego!</li>
      <li><b>Bonne journée !</b> → ¡Buen día! · <b>Bonne soirée !</b> → ¡Buena tarde-noche! · <b>Bonne nuit !</b> → ¡Buenas noches! (al irse a dormir)</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>Los momentos del día</h3>
      <ul><li><b>le matin</b> → la mañana · <b>l'après-midi</b> → la tarde</li>
      <li><b>le soir</b> → la tarde-noche · <b>la nuit</b> → la noche</li></ul></div>
    <div class="card"><h3><span class="chip">4</span>Presentarse y les personnes</h3>
      <ul><li><b>Je suis</b> Mathilde. / <b>Je m'appelle</b> Mathilde. → Soy / Me llamo Mathilde.</li>
      <li><b>Comment ça s'écrit ?</b> → ¿Cómo se escribe? → T-H-O-M-A-S.</li>
      <li><b>un copain / une copine</b> → un amigo / una amiga</li>
      <li><b>un élève / une élève</b> → un alumno / una alumna</li>
      <li><b>un camarade / une camarade</b> → un compañero / una compañera</li>
      <li><b>un professeur / une professeure</b> → un profesor / una profesora</li>
      <li><b>Monsieur / Madame</b> → señor / señora · <b>un monsieur / une dame</b> → un señor / una señora</li></ul></div>`,
    quiz:[
      {q:"Llegas al cole por la mañana y ves a la directora. ¿Qué dices?", opts:["Bonjour Madame !","Bonne nuit !","Salut !","Au revoir !"], a:0, fb:"Por el día y con un adulto: Bonjour Madame."},
      {q:"Te vas a dormir. ¿Qué le dices a tu familia?", opts:["Bonne nuit !","Bonsoir !","Bonjour !","À bientôt !"], a:0, fb:"Bonne nuit = buenas noches al irse a dormir. Bonsoir es para saludar al llegar."},
      {q:"Te despides de un amigo que verás más tarde hoy:", opts:["À tout à l'heure !","Bonjour !","Bonsoir !","Je suis Lucas."], a:0, fb:"À tout à l'heure = hasta luego (hoy mismo)."},
      {q:"«une copine» es...", opts:["una amiga","una profesora","una señora","una alumna"], a:0, fb:"Copain / copine = amigo / amiga."},
      {q:"¿Qué expresión sirve para PRESENTARSE?", opts:["Je m'appelle Jade.","Au revoir !","Bonne journée !","À plus !"], a:0, fb:"Je m'appelle / Je suis + nombre."},
      {q:"«l'après-midi» es...", opts:["la tarde","la mañana","la noche","el mediodía"], a:0, fb:"Matin, après-midi, soir, nuit."},
      {q:"¿Cuál es una forma de DESPEDIRSE?", opts:["À bientôt !","Bonjour !","Bonsoir !","Je suis Thomas."], a:0, fb:"À bientôt = hasta pronto."}
    ],
    hard:[
      {q:"¿Cómo dices «¡Adiós!» en francés?", ans:"Au revoir !", ok:[["revoir"]]},
      {q:"¿Cómo dices «¡Hasta pronto!»?", ans:"À bientôt !", ok:["bientot"]},
      {q:"¿Cómo dices «Me llamo Dayana»?", ans:"Je m'appelle Dayana", ok:[["appelle"]]},
      {q:"¿Cómo preguntas «¿Cómo se escribe?»?", ans:"Comment ça s'écrit ?", ok:[["comment"],["ecrit"]]},
      {q:"«Una compañera de clase» en francés:", ans:"une camarade", ok:[["camarade"]]},
      {q:"Saludo para llegar por la noche:", ans:"Bonsoir", ok:["bonsoir"]}
    ],
    games:[
      {type:"classify", title:"¿Saludar o despedirse?", prompt:"¿Sirve para saludar o para despedirse?", bins:["👋 Saluer","🚪 Prendre congé"], items:[["Bonjour !",0],["Salut ! (al llegar)",0],["Bonsoir !",0],["Au revoir !",1],["À bientôt !",1],["À tout à l'heure !",1],["À plus !",1],["Bonne journée !",1],["Bonne nuit !",1],["Tchao !",1]]},
      {type:"order", title:"Los momentos del día", prompt:"Ordena del principio al final del día", items:["le matin","l'après-midi","le soir","la nuit"]},
      {type:"match", title:"Les personnes", pairs:[["un copain","un amigo"],["une élève","una alumna"],["un camarade","un compañero"],["une professeure","una profesora"],["une dame","una señora"],["Monsieur","señor"]]}
    ]
  },
  {
    id:"questions", title:"Qui est-ce ? Qu'est-ce que c'est ?", icon:"❔",
    body:`
    <div class="card"><h3><span class="chip">1</span>Preguntar por personas: Qui est-ce ?</h3>
      <ul><li><b>Qui est-ce ?</b> → ¿Quién es?</li>
      <li><b>C'est</b> Madame Dupont. → Es la señora Dupont. (una persona)</li>
      <li><b>Ce sont</b> les copines d'Amélie. → Son las amigas de Amélie. (varias personas)</li></ul></div>
    <div class="card"><h3><span class="chip">2</span>Preguntar por cosas: Qu'est-ce que c'est ?</h3>
      <ul><li><b>Qu'est-ce que c'est ?</b> → ¿Qué es?</li>
      <li><b>C'est un</b> cahier vert. → Es un cuaderno verde. (una cosa)</li>
      <li><b>Ce sont des</b> trousses jaunes. → Son unos estuches amarillos. (varias cosas)</li>
      <li><b>Qu'est-ce qu'il y a</b> dans ton sac ? → ¿Qué hay en tu mochila?</li>
      <li><b>Il y a</b> des livres, des cahiers, une trousse... → Hay libros, cuadernos, un estuche...</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>La question intonative</h3>
      <p>Para preguntar, se puede decir <b>la misma frase</b> pero <b>subiendo la voz</b> al final ↗:</p>
      <ul><li>Je suis Mathilde. → <b>Tu es Mathilde ?</b></li>
      <li>Nous sommes Li Na et Lucas. → <b>Vous êtes Li Na et Lucas ?</b></li></ul>
      <p>Afirmación = la voz baja ↘ · Pregunta = la voz sube ↗.</p></div>`,
    quiz:[
      {q:"Quieres saber quién es esa chica. Preguntas...", opts:["Qui est-ce ?","Qu'est-ce que c'est ?","Il y a ?","Comment ça s'écrit ?"], a:0, fb:"Para personas: Qui est-ce ?"},
      {q:"Quieres saber qué es ese objeto. Preguntas...", opts:["Qu'est-ce que c'est ?","Qui est-ce ?","Tu es Mathilde ?","Bonjour ?"], a:0, fb:"Para cosas: Qu'est-ce que c'est ?"},
      {q:"«___ des cahiers verts.»", opts:["Ce sont","C'est","Il est","Qui est"], a:0, fb:"Plural → Ce sont des..."},
      {q:"«___ une trousse jaune.»", opts:["C'est","Ce sont","Ils sont","Qui est-ce"], a:0, fb:"Singular → C'est un/une..."},
      {q:"«Dans mon sac, ___ des livres.»", opts:["il y a","c'est","qui est","ce sont"], a:0, fb:"Il y a = hay."},
      {q:"¿Cómo se hace la question intonative?", opts:["Subiendo la voz al final","Poniendo «est-ce» delante","Cambiando el orden de las palabras","Bajando la voz al final"], a:0, fb:"Misma frase, pero con la entonación de pregunta ↗."}
    ],
    hard:[
      {q:"¿Cómo preguntas «¿Quién es?»?", ans:"Qui est-ce ?", ok:[["qui"],["est"]]},
      {q:"¿Cómo preguntas «¿Qué es?»?", ans:"Qu'est-ce que c'est ?", ok:[["qu"],["est"]]},
      {q:"Completa: ___ ___ des stylos rouges. (Son)", ans:"Ce sont", ok:[["ce"],["sont"]]},
      {q:"«Hay» en francés:", ans:"il y a", ok:[["il"],["y"],["a"]]},
      {q:"Convierte en pregunta (entonación): «Tu es Lucas.»", ans:"Tu es Lucas ?", ok:[["tu"],["es"],["lucas"]]}
    ],
    games:[
      {type:"classify", title:"¿C'est o ce sont?", prompt:"¿Qué va delante?", bins:["C'est","Ce sont"], items:[["... un cahier vert.",0],["... une trousse.",0],["... Madame Dupont.",0],["... mon copain.",0],["... des livres.",1],["... les copines d'Amélie.",1],["... des stylos bleus.",1],["... des élèves.",1]]},
      {type:"match", title:"Pregunta y respuesta", pairs:[["Qui est-ce ?","C'est Thomas."],["Qu'est-ce que c'est ?","C'est un livre."],["Qu'est-ce qu'il y a dans ton sac ?","Il y a des cahiers."],["Comment ça s'écrit ?","T-H-O-M-A-S."],["Tu es Mathilde ?","Oui, je suis Mathilde."]]},
      {type:"classify", title:"¿Qui est-ce o qu'est-ce que c'est?", prompt:"¿Con qué pregunta preguntas por...?", bins:["Qui est-ce ?","Qu'est-ce que c'est ?"], items:[["una profesora",0],["tu copine",0],["Monsieur Dulac",0],["un élève",0],["un stylo",1],["une gomme",1],["un ordinateur",1],["un sac à dos",1]]}
    ]
  },
  {
    id:"etre", title:"Le verbe être", icon:"🧍",
    body:`
    <div class="card"><h3><span class="chip">1</span>Être = ser / estar</h3>
      <ul><li><b>je suis</b> → yo soy</li><li><b>tu es</b> → tú eres</li><li><b>il / elle est</b> → él / ella es</li>
      <li><b>nous sommes</b> → nosotros somos</li><li><b>vous êtes</b> → vosotros sois / usted es</li><li><b>ils / elles sont</b> → ellos / ellas son</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>¡Ojo con la pronunciación!</h3>
      <p><b>tu es</b>, <b>il est</b> y <b>elle est</b> se pronuncian <b>igual</b> («é»). Y <b>vous êtes</b> se une: «vu-zet».</p>
      <p><b>Vous</b> también se usa para hablar <b>con respeto</b> a un adulto: Vous êtes Madame Dupont ?</p></div>`,
    quiz:[
      {q:"Je ___ Dayana.", opts:["suis","es","est","sommes"], a:0, fb:"je suis."},
      {q:"Nous ___ dans la classe.", opts:["sommes","sont","êtes","est"], a:0, fb:"nous sommes."},
      {q:"Vous ___ Li Na et Lucas ?", opts:["êtes","sont","es","sommes"], a:0, fb:"vous êtes."},
      {q:"Ils ___ sympas.", opts:["sont","est","êtes","suis"], a:0, fb:"ils / elles sont."},
      {q:"Tu ___ française ?", opts:["es","est","êtes","suis"], a:0, fb:"tu es (se pronuncia igual que il est)."},
      {q:"¿Qué formas se pronuncian igual?", opts:["tu es / il est","je suis / ils sont","nous sommes / vous êtes","il est / ils sont"], a:0, fb:"es y est suenan «é»."}
    ],
    hard:[
      {q:"Conjuga: je ___", ans:"suis", ok:["suis"]},
      {q:"Conjuga: nous ___", ans:"sommes", ok:["sommes"]},
      {q:"Conjuga: vous ___", ans:"êtes", ok:["etes"]},
      {q:"Conjuga: elles ___", ans:"sont", ok:["sont"]},
      {q:"Traduce: «Ella es mi amiga» (ma copine).", ans:"Elle est ma copine", ok:[["elle"],["est"],["copine"]]}
    ],
    games:[
      {type:"match", title:"Conjuga être", pairs:[["je","suis"],["tu","es"],["il / elle","est"],["nous","sommes"],["vous","êtes"],["ils / elles","sont"]]},
      {type:"order", title:"Ordena la conjugación", prompt:"Ordena de je a ils", items:["je suis","tu es","il est","nous sommes","vous êtes","ils sont"]},
      {type:"tf", title:"Vrai ou faux?", items:[["Je suis Mathilde.",true],["Nous êtes copains.",false,"Nous sommes copains."],["Elles sont dans la classe.",true],["Tu est français.",false,"Tu es français."],["Vous êtes professeur ?",true],["Il sont sympas.",false,"Ils sont sympas."]]}
    ]
  },
  {
    id:"pluriel", title:"Le pluriel", icon:"➕",
    body:`
    <div class="card"><h3><span class="chip">1</span>Plural de nombres y adjetivos</h3>
      <ul><li>Regla general: se añade <b>-s</b>: un livre → des livre<b>s</b>; un stylo bleu → des stylo<b>s</b> bleu<b>s</b>.</li>
      <li>Si ya acaba en <b>-s</b>, no cambia: un corps → des corp<b>s</b>.</li>
      <li>Si acaba en <b>-x</b>, no cambia: une voix → des voi<b>x</b>.</li>
      <li>Si acaba en <b>-z</b>, no cambia: un nez → des ne<b>z</b>.</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>¡La s no se oye!</h3>
      <p>En francés la -s del plural <b>no se pronuncia</b>: livre y livres suenan igual. Lo que cambia y se oye es el artículo: <b>le</b> livre → <b>les</b> livres.</p>
      <p>El adjetivo también va en plural: les trousse<b>s</b> sont rouge<b>s</b>.</p></div>`,
    quiz:[
      {q:"Plural de «le stylo bleu»:", opts:["les stylos bleus","les stylos bleu","le stylos bleus","les stylo bleus"], a:0, fb:"Nombre y adjetivo + s."},
      {q:"Plural de «un nez»:", opts:["des nez","des nezs","des nezes","un nez"], a:0, fb:"Acaba en -z → no cambia."},
      {q:"Plural de «une voix»:", opts:["des voix","des voixs","des voixes","des voies"], a:0, fb:"Acaba en -x → no cambia."},
      {q:"Singular de «Les trousses sont rouges»:", opts:["La trousse est rouge.","La trousse sont rouge.","Les trousse est rouge.","La trousses est rouges."], a:0, fb:"Todo en singular: la, trousse, est, rouge."},
      {q:"¿Se pronuncia la -s del plural?", opts:["No, no se oye","Sí, siempre","Solo en los adjetivos","Solo en las palabras femeninas"], a:0, fb:"No se oye; se nota en el artículo (les, des)."}
    ],
    hard:[
      {q:"Plural de «le cahier vert»:", ans:"les cahiers verts", ok:[["les"],["cahiers"],["verts"]]},
      {q:"Plural de «l'ami français»:", ans:"les amis français", ok:[["les"],["amis"],["francais"]]},
      {q:"Singular de «Les amis sont anglais»:", ans:"L'ami est anglais", ok:[["ami"],["est"],["anglais"]]},
      {q:"Plural de «la trousse jaune»:", ans:"les trousses jaunes", ok:[["les"],["trousses"],["jaunes"]]}
    ],
    games:[
      {type:"match", title:"Singular → plural", pairs:[["le stylo bleu","les stylos bleus"],["le copain espagnol","les copains espagnols"],["la trousse jaune","les trousses jaunes"],["un nez","des nez"],["une voix","des voix"],["l'élève suédois","les élèves suédois"]]},
      {type:"classify", title:"¿Cambia o no cambia?", prompt:"En plural, ¿la palabra añade -s?", bins:["➕ añade -s","= no cambia"], items:[["livre",0],["cahier",0],["trousse",0],["rouge",0],["copain",0],["nez",1],["voix",1],["corps",1],["français",1],["anglais",1]]},
      {type:"tf", title:"Vrai ou faux?", items:[["les cahiers noirs",true],["des stylo rouges",false,"des stylos rouges"],["des nez",true],["les copines sympathiques",true],["les trousses est grandes",false,"les trousses sont grandes"]]}
    ]
  }
  ]
});

addQA("frances", {
  accents: [
    ["¿Por qué «élève» lleva é al principio?", "Porque esa e suena cerrada", ["cerrad","ferme"], "El accent aigu (é) marca la e cerrada."],
    ["¿Qué diferencia hay entre «mais» y «maïs»?", "El tréma separa la a y la i", ["trema","separ"], "mais = pero (se dice «me»); maïs = maíz (ma-ís)."],
    ["¿Qué sonido marca el accent grave (è)?", "E abierta", ["abiert","ouvert"], "è suena abierta, como en mère."],
    ["¿Qué acento parece un gorrito?", "El circonflexe", ["circonflexe"], "ê, ô, â: fête, hôpital."]
  ],
  son: [
    ["¿Por qué «merci» se lee con s y no con k?", "Porque la c va delante de i", ["i","e"], "c + e/i = s; c + a/o/u = k."],
    ["¿Cómo sabes que «garage» empieza con g fuerte?", "Porque la g va delante de a", ["a"], "g + a/o/u = g fuerte; g + e/i = sonido suave."],
    ["«voiture» se lee...", "vwatur", ["vwa","vua"], "oi suena wa."],
    ["¿Por qué en «elle» la e es abierta?", "Por la consonante doble (ll)", ["doble","ll"], "e + consonante doble = e abierta."],
    ["¿Cómo suena la terminación «-er» de «danser»?", "é cerrada", ["cerrad","e"], "-er y -ez suenan é cerrada."]
  ],
  nasales: [
    ["¿Qué sonido nasal comparten «pain» y «lundi»?", "in / ain", ["in","ain","un"], "in, un, ain y ein suenan igual."],
    ["¿Por qué se escribe «impossible» con m?", "Porque va delante de p", ["p"], "Delante de p o b, la n se escribe m."],
    ["¿Qué nasal tiene «enfant»?", "an / en", ["an","en"], "an y en suenan igual."]
  ],
  articles: [
    ["¿Por qué se dice «l'école» y no «la école»?", "Porque école empieza por vocal", ["vocal"], "Delante de vocal o h, le/la se convierten en l'."],
    ["¿Por qué «des crayons» y «des gommes» usan el mismo artículo?", "En plural no cambia según el género", ["plural","igual","genero"], "En plural siempre des (o les)."],
    ["«un» es masculino o femenino?", "Masculino", ["masculin"], "un = masculino, une = femenino."],
    ["Pasa a definido: «une trousse».", "la trousse", [["la"],["trousse"]], "une → la."],
    ["Pasa a definido: «un ordinateur».", "l'ordinateur", ["l'ordinateur","l ordinateur","lordinateur"], "Empieza por vocal → l'."]
  ],
  ecole: [
    ["Quieres borrar un error. ¿Qué pides?", "Une gomme", ["gomme"], "Gomme = goma."],
    ["Tu lápiz no tiene punta. ¿Qué necesitas?", "Un taille-crayon", ["taille"], "Taille-crayon = sacapuntas."],
    ["Guardas los libros en tu...", "Cartable", ["cartable"], "Cartable = mochila."],
    ["La profesora escribe en el...", "Tableau", ["tableau"], "Tableau = pizarra."],
    ["Para recortar usas...", "Des ciseaux", ["ciseaux"], "Ciseaux = tijeras."]
  ],
  couleurs: [
    ["¿Por qué se dice «une gomme verte» con e?", "Porque gomme es femenino", ["femenin"], "El color concuerda: femenino → + e."],
    ["¿Por qué «une règle rouge» no cambia?", "Rouge ya acaba en e", ["acaba","e"], "Los colores en -e no cambian en femenino."],
    ["Femenino de «violet»:", "Violette", ["violette"], "violet → violette."],
    ["El cielo es...", "Bleu", ["bleu"], "Bleu = azul."],
    ["La hierba es...", "Verte", ["vert"], "Vert = verde (l'herbe es femenino: verte)."]
  ]
});

addFrases("frances", {
  accents: ["L'accent aigu se trouve dans élève.", "L'accent grave se trouve dans mère.", "Le tréma se trouve dans maïs."],
  son: ["Merci, au revoir.", "Le chat est dans la montagne.", "Je danse avec ma mère."],
  nasales: ["Le pain est dans le jardin.", "J'ai un bonbon.", "Lundi, je mange du pain."],
  articles: ["C'est la trousse d'Emma.", "Voilà les livres de Manon.", "Je suis le professeur de français.", "Voilà l'agenda de Thomas."],
  ecole: ["J'ai un stylo et une gomme dans ma trousse.", "Le livre est dans le cartable.", "Le professeur écrit au tableau."],
  couleurs: ["J'ai une gomme blanche.", "Mon stylo est bleu.", "La trousse est verte et rouge."]
});

addQA("frances", {
  salut: [
    ["Son las 9 de la noche y llegas a casa de tu abuela. ¿Qué dices al llegar?", "Bonsoir !", ["bonsoir"], "Al llegar por la tarde-noche: Bonsoir. Bonne nuit es para irse a dormir."],
    ["¿Por qué no dices «Salut» al director del colegio?", "Porque Salut es informal", ["informal","amigo","confianza"], "Salut es para amigos; con adultos, Bonjour Monsieur / Madame."],
    ["Te vas de clase y verás a tu amiga mañana. ¿Qué dices?", "À demain ! / À bientôt !", ["demain","bientot","revoir"], "Para despedirse: Au revoir, À bientôt..."],
    ["¿Qué diferencia hay entre «Bonsoir» y «Bonne nuit»?", "Bonsoir saluda; Bonne nuit es para irse a dormir", ["dormir","saluda"], "Bonsoir = al llegar por la noche; Bonne nuit = al acostarse."],
    ["Femenino de «un copain»:", "une copine", ["copine"], "copain → copine."]
  ],
  questions: [
    ["Ves una mochila en la mesa y no sabes de quién es. ¿Qué preguntas para saber QUÉ es?", "Qu'est-ce que c'est ?", [["qu"],["est"]], "Para cosas: Qu'est-ce que c'est ?"],
    ["¿Por qué decimos «Ce sont des livres» y no «C'est des livres»?", "Porque es plural", ["plural"], "C'est para uno; Ce sont para varios."],
    ["¿Cómo sabes si «Tu es Mathilde» es pregunta o afirmación?", "Por la entonación (sube la voz)", ["entonacion","voz","sube"], "Question intonative: la voz sube al final ↗."],
    ["Quieres decir qué hay en tu estuche. Empiezas con...", "Il y a", [["il"],["y"]], "Il y a = hay."]
  ],
  etre: [
    ["¿Por qué «tu es» y «il est» suenan igual?", "Porque la s y la t final no se pronuncian", ["pronunc","suena","no"], "es y est se dicen «é»."],
    ["Hablas con respeto a la profesora. ¿Qué pronombre usas?", "Vous", ["vous"], "Vous sirve para el plural y para tratar de usted."],
    ["Completa: Lucas et moi, nous ___ copains.", "sommes", ["sommes"], "nous sommes."],
    ["Completa: Emma et Jade ___ en classe.", "sont", ["sont"], "Ellas = elles sont."]
  ],
  pluriel: [
    ["¿Por qué «des nez» no lleva -s?", "Porque acaba en z", ["z"], "Las palabras en -s, -x, -z no cambian en plural."],
    ["Si la -s no suena, ¿cómo se nota el plural al hablar?", "Por el artículo (les, des)", ["articulo","les","des"], "le livre / les livres: cambia el artículo."],
    ["Plural de «le prof sympa»:", "les profs sympas", [["les"],["profs"],["sympas"]], "Nombre y adjetivo + s."],
    ["Plural de «l'élève suédois»:", "les élèves suédois", [["les"],["eleves"],["suedois"]], "Suédois ya acaba en s: no cambia."]
  ]
});

addFrases("frances", {
  salut: ["Bonjour Madame, je m'appelle Dayana.", "Au revoir, à bientôt !", "Bonne nuit, à demain !"],
  questions: ["Qui est-ce ? C'est Madame Dupont.", "Qu'est-ce que c'est ? C'est un cahier vert.", "Qu'est-ce qu'il y a dans ton sac ? Il y a des livres."],
  etre: ["Je suis Mathilde.", "Nous sommes Li Na et Lucas.", "Vous êtes le professeur de français ?", "Ils sont sympas."],
  pluriel: ["Les stylos sont bleus.", "Les trousses sont rouges.", "Les copines sont sympathiques."]
});
