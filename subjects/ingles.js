/* Asignatura: Inglés (explicaciones en español, ejemplos en inglés) */
registerSubject({
  id:"ingles", name:"Inglés", icon:"🇬🇧", color:"var(--purple)", colorD:"var(--purple-d)",
  sections:[
  {
    id:"time", title:"The time: What time is it?", icon:"🕒",
    body:`
    <div class="card"><h3><span class="chip">1</span>¿Cómo se pregunta la hora?</h3>
      <p><b>What time is it?</b> → <b>It's</b> ... (¿Qué hora es? → Son las...)</p>
      <p>Primero se dicen los <b>minutos</b> y después la <b>hora</b>: al revés que en español.</p></div>
    <div class="card"><h3><span class="chip">2</span>En punto, y cuarto, y media, menos cuarto</h3>
      <ul><li>3:00 → It's three <b>o'clock</b> (en punto)</li>
      <li>3:15 → It's <b>quarter past</b> three (y cuarto)</li>
      <li>3:30 → It's <b>half past</b> three (y media)</li>
      <li>3:45 → It's <b>quarter to</b> four (las cuatro menos cuarto)</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>PAST y TO</h3>
      <ul><li>Del minuto 1 al 30 usamos <b>past</b> (pasadas): 3:10 → <b>ten past</b> three.</li>
      <li>Del minuto 31 al 59 usamos <b>to</b> (menos) y la hora <b>siguiente</b>: 3:50 → <b>ten to</b> four.</li>
      <li>Minutos: five, ten, quarter, twenty, twenty-five, half.</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>Truco del reloj</h3>
      <p>Mira la aguja larga: si está en la mitad <b>derecha</b> del reloj → <b>past</b>. Si está en la mitad <b>izquierda</b> → <b>to</b>.</p></div>`,
    quiz:[
      {q:"¿Cómo se dice 7:30?", opts:["Half past seven","Half to seven","Seven half","Half past eight"], a:0, fb:"Y media = half past + la hora."},
      {q:"¿Cómo se dice 4:45?", opts:["Quarter past four","Quarter to five","Quarter to four","Forty-five past four"], a:1, fb:"Pasado el 30 usamos TO y la hora siguiente: menos cuarto para las 5."},
      {q:"¿Cómo se dice 9:10?", opts:["Ten to nine","Ten past nine","Nine past ten","Ten past ten"], a:1, fb:"Antes del 30 → past: diez pasadas las nueve."},
      {q:"¿Cómo se dice 2:50?", opts:["Ten past two","Ten to two","Ten to three","Fifty past two"], a:2, fb:"Faltan 10 minutos para las 3 → ten to three."},
      {q:"'Quarter past six' es...", opts:["6:15","6:45","5:45","6:30"], a:0, fb:"Quarter past = y cuarto."},
      {q:"¿Qué palabra usamos del minuto 31 al 59?", opts:["Past","To","O'clock","Half"], a:1, fb:"TO = menos, y se dice la hora siguiente."}
    ],
    hard:[
      {q:"Escribe en inglés: 5:00", ans:"Five o'clock", ok:[["five"],["oclock","o'clock","o clock"]]},
      {q:"Escribe en inglés: 8:30", ans:"Half past eight", ok:[["half"],["past"],["eight"]]},
      {q:"Escribe en inglés: 11:15", ans:"Quarter past eleven", ok:[["quarter"],["past"],["eleven"]]},
      {q:"Escribe en inglés: 1:45", ans:"Quarter to two", ok:[["quarter"],["to"],["two"]]},
      {q:"Escribe en inglés: 6:20", ans:"Twenty past six", ok:[["twenty"],["past"],["six"]]},
      {q:"Escribe en inglés: 10:55", ans:"Five to eleven", ok:[["five"],["to"],["eleven"]]},
      {q:"¿Cómo se pregunta la hora en inglés?", ans:"What time is it?", ok:[["what"],["time"]]}
    ],
    games:[
      {type:"clock", title:"¿Qué hora marca?", mode:"read"},
      {type:"clock", title:"Encuentra el reloj", mode:"find"},
      {type:"classify", title:"¿Past o To?", prompt:"¿Se dice con PAST o con TO?", bins:["➡️ PAST","⬅️ TO"], items:[["3:05",0],["3:10",0],["3:15",0],["3:20",0],["3:25",0],["3:30",0],["3:35",1],["3:40",1],["3:45",1],["3:50",1],["3:55",1],["8:20",0],["8:40",1]]}
    ]
  },
  {
    id:"tobe", title:"Verb to be", icon:"🙋",
    body:`
    <div class="card"><h3><span class="chip">1</span>¿Qué significa?</h3>
      <p><b>To be</b> significa <b>ser</b> o <b>estar</b>: I am happy (estoy contenta), I am Dayana (soy Dayana).</p></div>
    <div class="card"><h3><span class="chip">2</span>Afirmativa</h3>
      <ul><li>I <b>am</b> (I'm)</li><li>You <b>are</b> (you're)</li><li>He / She / It <b>is</b> (he's, she's, it's)</li><li>We / You / They <b>are</b> (we're, they're)</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>Negativa e interrogativa</h3>
      <ul><li>Negativa: añadimos <b>not</b>: I'm not · she <b>isn't</b> · they <b>aren't</b>.</li>
      <li>Pregunta: el verbo va <b>delante</b>: <b>Are</b> you ten? <b>Is</b> she your sister?</li>
      <li>Respuestas cortas: Yes, I <b>am</b>. / No, she <b>isn't</b>.</li></ul></div>`,
    quiz:[
      {q:"She ___ my best friend.", opts:["am","is","are","be"], a:1, fb:"He / she / it → is."},
      {q:"We ___ in the same class.", opts:["is","am","are","be"], a:2, fb:"We / you / they → are."},
      {q:"Negativa de 'He is tired':", opts:["He isn't tired","He aren't tired","He not is tired","He don't tired"], a:0, fb:"Is + not = isn't."},
      {q:"¿Cuál es la pregunta correcta?", opts:["You are eleven?","Are you eleven?","Is you eleven?","Am you eleven?"], a:1, fb:"En la pregunta el verbo va delante: Are you...?"},
      {q:"Respuesta corta: 'Is it a cat?' — Yes, ...", opts:["it is","it's","is it","it are"], a:0, fb:"En las respuestas cortas afirmativas no se contrae: Yes, it is."}
    ],
    hard:[
      {q:"Completa: I ___ eleven years old.", ans:"am", ok:["am"]},
      {q:"Completa: They ___ at school.", ans:"are", ok:["are"]},
      {q:"Escribe la forma corta de 'she is'.", ans:"she's", ok:["she's","shes","she s"]},
      {q:"Negativa corta de 'are not'.", ans:"aren't", ok:["aren't","arent","aren t"]},
      {q:"Traduce: 'Él no es alto' (tall).", ans:"He isn't tall", ok:[["he"],["isn't","isnt","is not"],["tall"]]}
    ],
    games:[
      {type:"classify", title:"am, is o are", prompt:"¿Qué forma de to be va con...?", bins:["am","is","are"], items:[["I",0],["he",1],["she",1],["it",1],["my dog",1],["you",2],["we",2],["they",2],["my friends",2],["Dayana",1]]},
      {type:"match", title:"Formas cortas", pairs:[["I am","I'm"],["you are","you're"],["she is","she's"],["it is","it's"],["we are","we're"],["is not","isn't"]]},
      {type:"tf", title:"¿Está bien dicho?", items:[["I is happy",false,"I am happy"],["They are my cousins",true],["She are in the park",false,"She is in the park"],["Are you ready?",true],["We isn't late",false,"We aren't late"],["It is a big dog",true],["He am my brother",false,"He is my brother"],["Is she ten?",true]]}
    ]
  },
  {
    id:"havegot", title:"Have got", icon:"🎒",
    body:`
    <div class="card"><h3><span class="chip">1</span>¿Qué significa?</h3>
      <p><b>Have got</b> significa <b>tener</b> (posesión, familia, aspecto): I've got a dog. She's got blue eyes.</p></div>
    <div class="card"><h3><span class="chip">2</span>Afirmativa</h3>
      <ul><li>I / You / We / They <b>have got</b> ('ve got)</li><li>He / She / It <b>has got</b> ('s got)</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>Negativa e interrogativa</h3>
      <ul><li>Negativa: <b>haven't got</b> / <b>hasn't got</b>.</li>
      <li>Pregunta: <b>Have</b> you <b>got</b> a pencil? <b>Has</b> he <b>got</b> a bike?</li>
      <li>Respuestas: Yes, I <b>have</b>. / No, he <b>hasn't</b>.</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>¡Cuidado!</h3><p>Con he / she / it se usa <b>has</b> (con S), igual que en el present simple.</p></div>`,
    quiz:[
      {q:"My sister ___ long hair.", opts:["have got","has got","is got","haves got"], a:1, fb:"He / she / it → has got."},
      {q:"We ___ a new teacher.", opts:["has got","have got","are got","got have"], a:1, fb:"We → have got."},
      {q:"Negativa de 'He has got a cat':", opts:["He haven't got a cat","He hasn't got a cat","He not has got a cat","He isn't got a cat"], a:1, fb:"Has + not = hasn't."},
      {q:"Pregunta correcta:", opts:["Have you got a ruler?","You have got a ruler?","Has you got a ruler?","Got you have a ruler?"], a:0, fb:"Have/Has va delante y got después del sujeto."},
      {q:"'Has she got a bike?' — No, ...", opts:["she hasn't","she haven't","she isn't","she doesn't"], a:0, fb:"Respuesta corta con has: No, she hasn't."}
    ],
    hard:[
      {q:"Completa: They ___ got two brothers.", ans:"have", ok:["have"]},
      {q:"Completa: It ___ got four legs.", ans:"has", ok:["has"]},
      {q:"Forma corta negativa de 'has not got'.", ans:"hasn't got", ok:["hasn't","hasnt"]},
      {q:"Traduce: 'Tengo un perro'.", ans:"I have got a dog / I've got a dog", ok:[["have","'ve","ve got"],["dog"]]}
    ],
    games:[
      {type:"classify", title:"have o has", prompt:"¿Have got o has got?", bins:["have got","has got"], items:[["I",0],["you",0],["we",0],["they",0],["my parents",0],["he",1],["she",1],["it",1],["my cat",1],["Tom",1]]},
      {type:"tf", title:"¿Está bien?", items:[["She have got a pen",false,"She has got a pen"],["I've got a sister",true],["Has they got a car?",false,"Have they got a car?"],["He hasn't got a bike",true],["We has got homework",false,"We have got homework"],["Have you got a rubber?",true]]},
      {type:"match", title:"Pregunta y respuesta", pairs:[["Have you got a pet?","Yes, I have."],["Has she got a phone?","No, she hasn't."],["Have they got bikes?","Yes, they have."],["Has it got wings?","No, it hasn't."]]}
    ]
  },
  {
    id:"pronouns", title:"Pronouns & possessives", icon:"👥",
    body:`
    <div class="card"><h3><span class="chip">1</span>Pronombres personales (sujeto)</h3>
      <p>Van delante del verbo: <b>I</b>, <b>you</b>, <b>he</b>, <b>she</b>, <b>it</b>, <b>we</b>, <b>you</b>, <b>they</b>.</p>
      <p><b>It</b> se usa para cosas y animales. <b>He</b> = él, <b>she</b> = ella.</p></div>
    <div class="card"><h3><span class="chip">2</span>Adjetivos posesivos</h3>
      <ul><li>I → <b>my</b> · you → <b>your</b> · he → <b>his</b> · she → <b>her</b></li>
      <li>it → <b>its</b> · we → <b>our</b> · they → <b>their</b></li></ul>
      <p>Van <b>delante</b> de un nombre: <b>my</b> book, <b>her</b> bag, <b>their</b> house.</p></div>
    <div class="card example"><h3><span class="chip">★</span>No confundas</h3>
      <p><b>His</b> = de él, <b>her</b> = de ella. <b>Its</b> (de ello) no lleva apóstrofo; <b>it's</b> = it is.</p></div>`,
    quiz:[
      {q:"This is Tom. ___ is my friend.", opts:["She","He","It","They"], a:1, fb:"Tom es un chico → he."},
      {q:"Laura has got a cat. ___ cat is white.", opts:["His","Her","Its","Their"], a:1, fb:"De ella → her."},
      {q:"We love ___ school.", opts:["our","we","us","their"], a:0, fb:"We → our."},
      {q:"The dog is wagging ___ tail.", opts:["it's","its","his","her"], a:1, fb:"De una cosa o animal → its (sin apóstrofo)."},
      {q:"Mis padres y su casa: 'My parents love ___ house.'", opts:["his","her","their","our"], a:2, fb:"They → their."}
    ],
    hard:[
      {q:"Posesivo de 'he':", ans:"his", ok:["his"]},
      {q:"Posesivo de 'they':", ans:"their", ok:["their"]},
      {q:"Posesivo de 'we':", ans:"our", ok:["our"]},
      {q:"Pronombre para una mesa (a table):", ans:"it", ok:["it"]},
      {q:"Traduce: 'Su mochila (de ella) es roja'.", ans:"Her bag is red", ok:[["her"],["bag","schoolbag","backpack"],["red"]]}
    ],
    games:[
      {type:"match", title:"Pronombre y posesivo", pairs:[["I","my"],["you","your"],["he","his"],["she","her"],["it","its"],["we","our"],["they","their"]]},
      {type:"classify", title:"¿He, she, it o they?", prompt:"¿Qué pronombre usarías?", bins:["he","she","it","they"], items:[["my brother",0],["Peter",0],["my mum",1],["Anna",1],["the pencil",2],["the dog",2],["Tom and Ana",3],["the books",3],["my grandad",0],["my aunt",1]]},
      {type:"memory", title:"Memoria de posesivos", pairs:[["I","my"],["he","his"],["she","her"],["we","our"],["they","their"],["it","its"]]}
    ]
  },
  {
    id:"wh", title:"Wh- questions", icon:"❓",
    body:`
    <div class="card"><h3><span class="chip">1</span>Las palabras para preguntar</h3>
      <ul><li><b>What</b> → qué · <b>Where</b> → dónde · <b>When</b> → cuándo</li>
      <li><b>Who</b> → quién · <b>Why</b> → por qué · <b>How</b> → cómo</li>
      <li><b>How old</b> → qué edad · <b>How many</b> → cuántos · <b>Which</b> → cuál · <b>Whose</b> → de quién</li></ul></div>
    <div class="card"><h3><span class="chip">2</span>Cómo se forman</h3>
      <p>Wh- word + verbo + sujeto: <b>Where</b> is my pencil? <b>What</b> do you like?</p>
      <p>Para responder a <b>Why</b> usamos <b>because</b> (porque).</p></div>`,
    quiz:[
      {q:"'___ do you live?' — In Vigo.", opts:["What","Where","When","Who"], a:1, fb:"La respuesta es un lugar → Where."},
      {q:"'___ is your birthday?' — In May.", opts:["When","Where","Who","How"], a:0, fb:"La respuesta es un momento → When."},
      {q:"'___ is that girl?' — She's my cousin.", opts:["What","Who","Why","Which"], a:1, fb:"Preguntamos por una persona → Who."},
      {q:"'___ old are you?' — I'm eleven.", opts:["What","How","Why","Where"], a:1, fb:"La edad: How old."},
      {q:"'Why are you sad?' — ...", opts:["Because I lost my pen","At home","Yesterday","My friend"], a:0, fb:"A why se responde con because."},
      {q:"'___ pencils have you got?' — Three.", opts:["How much","How many","What","Who"], a:1, fb:"Para contar cosas → How many."}
    ],
    hard:[
      {q:"¿Qué palabra significa 'dónde'?", ans:"Where", ok:["where"]},
      {q:"¿Qué palabra significa 'por qué'?", ans:"Why", ok:["why"]},
      {q:"¿Qué palabra significa 'quién'?", ans:"Who", ok:["who"]},
      {q:"Pregunta la edad: '___ ___ are you?'", ans:"How old", ok:[["how"],["old"]]},
      {q:"Palabra para responder a 'why':", ans:"Because", ok:["because"]}
    ],
    games:[
      {type:"match", title:"Pregunta y respuesta", pairs:[["Where is the cat?","Under the bed."],["When is the party?","On Saturday."],["Who is she?","My sister."],["What is it?","A rubber."],["Why are you late?","Because I missed the bus."],["How old is he?","He's twelve."]]},
      {type:"memory", title:"Memoria Wh-", pairs:[["What","qué"],["Where","dónde"],["When","cuándo"],["Who","quién"],["Why","por qué"],["How","cómo"]]},
      {type:"classify", title:"¿Qué pregunta encaja?", prompt:"¿Con qué palabra preguntarías por...?", bins:["Where","When","Who","What"], items:[["un lugar",0],["el parque",0],["el lunes",1],["a las 5",1],["mi profesora",2],["tu hermano",2],["una cosa",3],["tu color favorito",3]]}
    ]
  },
  {
    id:"prep", title:"Prepositions of place", icon:"📦",
    body:`
    <div class="card"><h3><span class="chip">1</span>¿Dónde está?</h3>
      <ul><li><b>in</b> → dentro de: The pen is <b>in</b> the pencil case.</li>
      <li><b>on</b> → encima de (tocando): The book is <b>on</b> the desk.</li>
      <li><b>under</b> → debajo de: The cat is <b>under</b> the chair.</li>
      <li><b>next to</b> → al lado de: I sit <b>next to</b> Ana.</li>
      <li><b>behind</b> → detrás de · <b>in front of</b> → delante de</li>
      <li><b>between</b> → entre (dos cosas) · <b>opposite</b> → enfrente de</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>Truco</h3><p>Imagina una caja 📦 y una pelota ⚽: dentro = in, encima = on, debajo = under, al lado = next to, detrás = behind.</p></div>`,
    quiz:[
      {q:"El libro está encima de la mesa: The book is ___ the table.", opts:["in","on","under","behind"], a:1, fb:"Encima tocando → on."},
      {q:"El gato está debajo de la cama:", opts:["The cat is on the bed","The cat is under the bed","The cat is in the bed","The cat is behind the bed"], a:1, fb:"Debajo → under."},
      {q:"La escuela está entre el parque y la tienda: The school is ___ the park and the shop.", opts:["next to","between","opposite","in front of"], a:1, fb:"Entre dos cosas → between."},
      {q:"'Behind' significa...", opts:["delante de","detrás de","al lado de","encima de"], a:1, fb:"Behind = detrás."},
      {q:"Los lápices están dentro del estuche: The pencils are ___ the pencil case.", opts:["in","on","at","under"], a:0, fb:"Dentro → in."}
    ],
    hard:[
      {q:"¿Cómo se dice 'debajo de'?", ans:"under", ok:["under"]},
      {q:"¿Cómo se dice 'al lado de'?", ans:"next to", ok:[["next"],["to"]]},
      {q:"¿Cómo se dice 'delante de'?", ans:"in front of", ok:[["front"]]},
      {q:"¿Cómo se dice 'entre'?", ans:"between", ok:["between"]},
      {q:"Traduce: 'La mochila está detrás de la puerta'.", ans:"The bag is behind the door", ok:[["behind"],["door"]]}
    ],
    games:[
      {type:"match", title:"Une cada preposición", pairs:[["in","dentro de"],["on","encima de"],["under","debajo de"],["next to","al lado de"],["behind","detrás de"],["in front of","delante de"],["between","entre"]]},
      {type:"pick", title:"Caza preposiciones", prompt:"Toca solo las preposiciones de lugar", items:[["in",true],["on",true],["under",true],["behind",true],["next to",true],["between",true],["happy",false],["book",false],["run",false],["blue",false],["she",false]]},
      {type:"memory", title:"Memoria de lugar", pairs:[["in","📦 dentro"],["on","⬆️ encima"],["under","⬇️ debajo"],["behind","🔙 detrás"],["next to","↔️ al lado"],["between","🔀 entre"]]}
    ]
  },
  {
    id:"present", title:"Present simple", icon:"🔁",
    body:`
    <div class="card"><h3><span class="chip">1</span>¿Para qué se usa?</h3>
      <p>Para <b>rutinas</b> y cosas que pasan <b>siempre</b> o <b>a menudo</b>: I play tennis on Mondays. She lives in Spain.</p>
      <p>Palabras que lo acompañan: <b>always</b>, <b>usually</b>, <b>sometimes</b>, <b>never</b>, <b>every day</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Afirmativa: ¡la S de he/she/it!</h3>
      <ul><li>I / you / we / they <b>play</b></li><li>He / she / it <b>plays</b> (+s)</li>
      <li>Verbos en -o, -sh, -ch, -x, -ss: +<b>es</b> → goes, watches, washes</li>
      <li>Consonante + y: <b>-ies</b> → study → studies</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>Negativa e interrogativa</h3>
      <ul><li>Negativa: <b>don't</b> / <b>doesn't</b> + verbo sin S: She <b>doesn't play</b>.</li>
      <li>Pregunta: <b>Do</b> / <b>Does</b> + sujeto + verbo: <b>Does</b> he <b>like</b> pizza?</li>
      <li>Respuestas: Yes, I <b>do</b>. / No, she <b>doesn't</b>.</li></ul></div>`,
    quiz:[
      {q:"My brother ___ football every Saturday.", opts:["play","plays","playing","is play"], a:1, fb:"He → verbo + s."},
      {q:"She ___ TV after dinner.", opts:["watchs","watches","watch","watching"], a:1, fb:"Acaba en -ch → +es: watches."},
      {q:"Negativa: 'He likes fish' →", opts:["He don't likes fish","He doesn't like fish","He doesn't likes fish","He not like fish"], a:1, fb:"Doesn't + verbo SIN s."},
      {q:"Pregunta correcta:", opts:["Do she live here?","Does she lives here?","Does she live here?","She does live here?"], a:2, fb:"Does + sujeto + verbo sin s."},
      {q:"'Study' con he/she/it:", opts:["studys","studies","studyes","study"], a:1, fb:"Consonante + y → -ies."},
      {q:"¿Cuándo usamos el present simple?", opts:["Para rutinas y hábitos","Para lo que pasó ayer","Para lo que pasa ahora mismo","Para el futuro lejano"], a:0, fb:"Rutinas y cosas que pasan a menudo."}
    ],
    hard:[
      {q:"Completa: She ___ (go) to school by bus.", ans:"goes", ok:["goes"]},
      {q:"Completa: They ___ (not like) spiders.", ans:"don't like", ok:[["don't","dont","do not"],["like"]]},
      {q:"Completa: ___ he play the piano?", ans:"Does", ok:["does"]},
      {q:"Forma con he de 'fly':", ans:"flies", ok:["flies"]},
      {q:"Traduce: 'Yo nunca como pescado' (eat fish).", ans:"I never eat fish", ok:[["never"],["eat"],["fish"]]}
    ],
    games:[
      {type:"classify", title:"¿Con -s o sin -s?", prompt:"¿Cómo va el verbo 'play'?", bins:["play","plays"], items:[["I ...",0],["you ...",0],["we ...",0],["they ...",0],["my friends ...",0],["he ...",1],["she ...",1],["it ...",1],["my mum ...",1],["Tom ...",1]]},
      {type:"match", title:"Verbo con he/she", pairs:[["play","plays"],["go","goes"],["watch","watches"],["study","studies"],["have","has"],["do","does"],["wash","washes"]]},
      {type:"tf", title:"¿Está bien?", items:[["She play tennis",false,"She plays tennis"],["I get up at 8",true],["He don't like milk",false,"He doesn't like milk"],["Does she live here?",true],["They watches TV",false,"They watch TV"],["My dog sleeps a lot",true],["Do he go to school?",false,"Does he go to school?"]]}
    ]
  },
  {
    id:"school", title:"School objects", icon:"✏️",
    body:`
    <div class="card"><h3><span class="chip">1</span>En mi estuche</h3>
      <ul><li><b>pencil</b> → lápiz · <b>pen</b> → bolígrafo · <b>rubber</b> (eraser) → goma</li>
      <li><b>pencil sharpener</b> → sacapuntas · <b>ruler</b> → regla · <b>crayons</b> → ceras</li>
      <li><b>felt-tip pens</b> → rotuladores · <b>glue</b> → pegamento · <b>scissors</b> → tijeras</li>
      <li><b>pencil case</b> → estuche</li></ul></div>
    <div class="card"><h3><span class="chip">2</span>En clase</h3>
      <ul><li><b>schoolbag</b> → mochila · <b>book</b> → libro · <b>notebook</b> → cuaderno</li>
      <li><b>desk</b> → pupitre · <b>chair</b> → silla · <b>board</b> → pizarra</li>
      <li><b>calculator</b> → calculadora · <b>dictionary</b> → diccionario · <b>computer</b> → ordenador</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>Úsalo en frases</h3>
      <p>I've got a <b>ruler</b> in my <b>pencil case</b>. The <b>book</b> is <b>on</b> the <b>desk</b>.</p></div>`,
    quiz:[
      {q:"¿Cómo se dice 'goma de borrar'?", opts:["ruler","rubber","glue","pen"], a:1, fb:"Rubber (en EE. UU., eraser)."},
      {q:"'Scissors' es...", opts:["tijeras","regla","sacapuntas","pegamento"], a:0, fb:"Scissors = tijeras."},
      {q:"¿Cómo se dice 'sacapuntas'?", opts:["pencil case","pencil sharpener","sharp pencil","pen"], a:1, fb:"Pencil sharpener."},
      {q:"Para medir una línea usas un...", opts:["ruler","rubber","crayon","notebook"], a:0, fb:"Ruler = regla."},
      {q:"'Pupitre' en inglés:", opts:["chair","board","desk","bag"], a:2, fb:"Desk = pupitre / escritorio."}
    ],
    hard:[
      {q:"Escribe en inglés: 'estuche'.", ans:"pencil case", ok:[["pencil"],["case"]]},
      {q:"Escribe en inglés: 'mochila'.", ans:"schoolbag", ok:["schoolbag","school bag","backpack","bag"]},
      {q:"Escribe en inglés: 'cuaderno'.", ans:"notebook", ok:["notebook"]},
      {q:"Escribe en inglés: 'pegamento'.", ans:"glue", ok:["glue"]},
      {q:"Escribe en inglés: 'pizarra'.", ans:"board", ok:["board"]}
    ],
    games:[
      {type:"memory", title:"Memoria escolar", pairs:[["pencil","✏️ lápiz"],["ruler","📏 regla"],["scissors","✂️ tijeras"],["book","📕 libro"],["schoolbag","🎒 mochila"],["calculator","🧮 calculadora"],["pen","🖊️ bolígrafo"],["glue","🧴 pegamento"]]},
      {type:"hangman", title:"Hangman", words:[["Pencil","lápiz ✏️"],["Ruler","regla 📏"],["Rubber","goma de borrar"],["Scissors","tijeras ✂️"],["Notebook","cuaderno 📓"],["Schoolbag","mochila 🎒"],["Desk","pupitre"],["Crayons","ceras de colores"],["Glue","pegamento"],["Calculator","calculadora 🧮"]], max:4},
      {type:"classify", title:"¿Estuche o clase?", prompt:"¿Dónde lo encuentras?", bins:["✏️ Pencil case","🏫 Classroom"], items:[["pencil",0],["pen",0],["rubber",0],["sharpener",0],["crayons",0],["desk",1],["chair",1],["board",1],["computer",1],["window",1]]}
    ]
  }
  ]
});

/* Banco de preguntas para entender (inglés) */
addQA("ingles", {
  time: [
    ["Las agujas marcan las 6:15. ¿Cómo lo dices?", "Quarter past six", [["quarter"],["past"],["six"]], "15 minutos = quarter; antes del 30 → past."],
    ["Son las 9:40. ¿Qué hora dices?", "Twenty to ten", [["twenty"],["to"],["ten"]], "Faltan 20 min para las 10 → twenty to ten."],
    ["¿Por qué a las 4:50 decimos 'ten to FIVE' y no 'four'?", "Porque con TO se dice la hora siguiente", ["siguiente","five","proxima"], "TO = faltan minutos para la hora siguiente."],
    ["La aguja larga está en el 6. ¿Qué palabra usas?", "Half past", [["half"]], "En el 6 son las y media → half past."],
    ["La aguja larga está en el 9. ¿Qué dices?", "Quarter to", [["quarter"],["to"]], "En el 9 faltan 15 minutos → quarter to."],
    ["Son las 12:05. ¿Cómo lo dices?", "Five past twelve", [["five"],["past"],["twelve"]], "5 minutos pasadas las 12."],
    ["¿Qué significa 'o'clock'?", "En punto", ["punto"], "It's three o'clock = son las tres en punto."]
  ],
  tobe: [
    ["¿Por qué decimos 'she IS' y no 'she are'?", "Con he/she/it va is", ["is"], "He, she, it → is. We, you, they → are."],
    ["Tu amiga y tú estáis en el parque: 'We ___ in the park'.", "are", ["are"], "We → are."],
    ["Para preguntar '¿Estás cansada?' empiezas por...", "Are you tired?", [["are"],["you"]], "En la pregunta el verbo to be va delante."],
    ["'I am not' en forma corta es...", "I'm not", ["i'm not","im not"], "No existe 'amn't': se dice I'm not."],
    ["Mi perro es pequeño: 'My dog ___ small'.", "is", ["is"], "My dog = it → is."]
  ],
  havegot: [
    ["¿Por qué decimos 'he HAS got'?", "Con he/she/it va has", ["has"], "Igual que is: he/she/it cambian el verbo."],
    ["Quieres preguntar si tiene hermanos: '___ she got any brothers?'", "Has", ["has"], "Pregunta con she → Has she got...?"],
    ["Mis abuelos tienen una casa grande: 'My grandparents ___ got a big house'.", "have", ["have"], "My grandparents = they → have."],
    ["No tengo móvil: 'I ___ got a phone'.", "haven't", ["haven't","havent","have not"], "Negativa con I → haven't got."]
  ],
  pronouns: [
    ["La mochila de Pedro: '___ bag'.", "His", ["his"], "De él → his."],
    ["El libro de mi hermana: '___ book'.", "Her", ["her"], "De ella → her."],
    ["La casa de nosotros: '___ house'.", "Our", ["our"], "We → our."],
    ["¿Qué pronombre usas para 'my parents'?", "They", ["they"], "Varias personas → they."],
    ["¿Por qué 'its' no lleva apóstrofo?", "Porque it's significa it is", ["it is","is"], "Its = de ello (posesivo); it's = it is."]
  ],
  wh: [
    ["Quieres saber dónde está tu goma. ¿Con qué palabra empiezas?", "Where", ["where"], "Where = dónde."],
    ["Quieres saber a qué hora empieza la clase. ¿Con qué palabra empiezas?", "What time", [["what"],["time"]], "What time = a qué hora."],
    ["Te preguntan 'Why?'. ¿Cómo empiezas la respuesta?", "Because", ["because"], "Why se responde con because."],
    ["Quieres saber cuántos lápices tiene. ¿Cómo preguntas?", "How many", [["how"],["many"]], "How many para cosas que se cuentan."],
    ["Quieres saber de quién es el libro. ¿Qué palabra usas?", "Whose", ["whose"], "Whose = de quién."]
  ],
  prep: [
    ["El estuche está dentro de la mochila: 'The pencil case is ___ the schoolbag'.", "in", ["in"], "Dentro → in."],
    ["Te sientas al lado de tu amiga: 'I sit ___ my friend'.", "next to", [["next"]], "Al lado → next to."],
    ["La pelota está debajo de la mesa: 'The ball is ___ the table'.", "under", ["under"], "Debajo → under."],
    ["La profesora está delante de la pizarra: 'The teacher is ___ the board'.", "in front of", [["front"]], "Delante → in front of."],
    ["El gato está entre dos sillas: 'The cat is ___ the chairs'.", "between", ["between"], "Entre → between."],
    ["El reloj está en la pared (tocándola): 'The clock is ___ the wall'.", "on", ["on"], "Sobre una superficie → on."]
  ],
  present: [
    ["¿Por qué decimos 'she plays' con S?", "Con he/she/it el verbo lleva -s", ["s","he","she"], "En present simple, he/she/it añaden -s."],
    ["¿Por qué 'he doesn't play' y no 'he doesn't plays'?", "Porque la S ya va en doesn't", ["doesn't","does"], "Does ya lleva la marca de he/she/it."],
    ["Tu rutina: 'I ___ (get up) at 7 every day'.", "get up", [["get"],["up"]], "Con I el verbo no cambia."],
    ["Mi padre lava el coche: 'My dad ___ the car'.", "washes", ["washes"], "Acaba en -sh → +es."],
    ["Pregunta si a ellos les gusta el fútbol:", "Do they like football?", [["do"],["they"],["like"]], "Con they → Do."]
  ],
  school: [
    ["Te equivocas al escribir con lápiz. ¿Qué necesitas?", "Rubber", ["rubber","eraser"], "Rubber = goma de borrar."],
    ["Quieres cortar un papel. ¿Qué necesitas?", "Scissors", ["scissors"], "Scissors = tijeras."],
    ["Tu lápiz no tiene punta. ¿Qué necesitas?", "Pencil sharpener", ["sharpener"], "Pencil sharpener = sacapuntas."],
    ["Quieres pegar una foto en el cuaderno. ¿Qué necesitas?", "Glue", ["glue"], "Glue = pegamento."],
    ["La profesora escribe en la...", "Board", ["board"], "Board = pizarra."],
    ["Guardas todos los lápices en el...", "Pencil case", [["pencil"],["case"]], "Pencil case = estuche."]
  ]
});

addFrases("ingles", {
  time: ["It's quarter past three.", "It's half past seven.", "It's ten to four.", "What time is it?"],
  tobe: ["I am eleven years old.", "She is my best friend.", "They aren't at school.", "Are you happy?"],
  havegot: ["I have got a dog.", "She has got blue eyes.", "Have you got a pencil?", "He hasn't got a bike."],
  pronouns: ["This is my brother and his name is Tom.", "Her bag is red.", "We love our school.", "They play with their dog."],
  wh: ["Where do you live?", "When is your birthday?", "How old are you?", "Why are you sad? Because I lost my pen."],
  prep: ["The book is on the desk.", "The cat is under the chair.", "I sit next to my friend.", "The school is between the park and the shop."],
  present: ["She plays tennis every Monday.", "He doesn't like fish.", "Does she live here?", "I always get up at seven."],
  school: ["I have got a ruler in my pencil case.", "The book is on the desk.", "Can I borrow your rubber, please?"]
});
