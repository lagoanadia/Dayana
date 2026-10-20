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
      <ul><li><b>un cartable</b> → mochila · <b>un livre</b> → libro · <b>un cahier</b> → cuaderno</li>
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
