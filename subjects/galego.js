/* Asignatura: Galego — lectura «El valle de los lobos» (Laura Gallego).
   Resumos de todos os capítulos, en galego. Os nomes propios van como no libro. */
registerSubject({
  id:"galego", name:"Galego", icon:"🐺", color:"var(--teal)", colorD:"#1f9a9a",
  sections:[
  {
    id:"libro", title:"O libro e os personaxes", icon:"📖",
    body:`
    <div class="card"><h3><span class="chip">1</span>O libro</h3>
      <p><b>El valle de los lobos</b> («O val dos lobos») é unha novela de <b>Laura Gallego García</b>, publicada no ano <b>2000</b>.</p>
      <p>É o primeiro libro da saga <b>Crónicas da Torre</b>. É unha novela de <b>fantasía</b>: hai magos, elfos, ananos, lobos encantados, un unicornio e espíritos.</p>
      <p>Ten <b>14 capítulos</b> e un <b>epílogo</b>. Está contada en <b>terceira persoa</b> por un narrador que sabe o que pensan e senten os personaxes (narrador <b>omnisciente</b>).</p></div>
    <div class="card"><h3><span class="chip">2</span>Os personaxes principais</h3>
      <ul><li><b>Dana</b>: a protagonista. Filla dunha familia de granxeiros, de pelo negro e ollos azuis. É unha <b>Kin-Shannay</b>: pode ver os espíritos.</li>
      <li><b>Kai</b>: o seu mellor amigo. Un rapaz <b>loiro</b> de ollos <b>verdes</b> que só ve Dana. É un <b>espírito</b>.</li>
      <li><b>O Mestre</b>: o Amo da Torre. Mago vello de <b>túnica gris</b> e ollos grises. É <b>mentalista</b> (le os pensamentos). É o antagonista.</li>
      <li><b>Fenris</b>: un <b>elfo</b> mago, de ollos de gato color mel e pelo cobrizo. É <b>lobishome</b>.</li>
      <li><b>Maritta</b>: a <b>anana</b> cociñeira da Torre. Rosmona, pero moi leal.</li>
      <li><b>Aonia</b>: a dama da <b>túnica dourada</b>, antiga Señora da Torre. Está morta.</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>Lugares e animais</h3>
      <ul><li>A <b>granxa</b> de Dana, o <b>Val dos Lobos</b>, a <b>Torre</b> (escola de Alta Feiticería), o bosque, o pobo e o <b>templo da Nai Terra</b>.</li>
      <li><b>Lunaestrella</b>: a egua baia de Dana. <b>Medianoche</b>: o cabalo branco do Mestre. <b>Alide</b>: o cabalo alazán de Fenris.</li></ul></div>
    <div class="card"><h3><span class="chip">4</span>Os graos de maxia</h3>
      <p>Cada libro aprobado cambia a cor da túnica:</p>
      <ul><li><b>Branca</b>: aprendiza que empeza.</li>
      <li>Libro da Terra → <b>verde</b>. Libro do Aire → <b>azul</b>. Libro da Auga → <b>violeta</b>.</li>
      <li>Libro do Lume e <b>Proba do Lume</b> → <b>vermella</b>: xa es maga.</li>
      <li>Os <b>arquimagos</b> levan túnica <b>dourada</b>.</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>Temas do libro</h3>
      <p>A <b>amizade</b>, o <b>amor imposible</b>, o medo a ser <b>diferente</b>, a <b>ambición</b>, a vinganza e a xustiza, e a <b>vida</b> e a <b>morte</b>.</p></div>`,
    quiz:[
      {q:"Quen escribiu «El valle de los lobos»?", opts:["Laura Gallego García","Rosalía de Castro","Joanne Kathleen Rowling","Roald Dahl"], a:0, fb:"A autora é Laura Gallego García (2000)."},
      {q:"De que saga é o primeiro libro?", opts:["Memorias de Idhún","Crónicas da Torre","Harry Potter e a pedra filosofal","Os Cinco"], a:1, fb:"É o primeiro libro das Crónicas da Torre."},
      {q:"Que é Fenris?", opts:["Un anano ferreiro","Un home do pobo","Un elfo lobishome","Un espírito dun mozo morto"], a:2, fb:"Fenris é un elfo que se converte en lobo coa lúa chea."},
      {q:"Que cor de túnica leva un aprendiz que acaba de chegar?", opts:["Vermella","Dourada","Verde","Branca"], a:3, fb:"Empézase coa túnica branca."},
      {q:"Quen é Maritta?", opts:["A anana cociñeira da Torre","A nai de Dana","A irmá maior de Kai, a do pobo","Unha arquimaga"], a:0, fb:"Maritta é a anana que cociña na Torre."},
      {q:"Cantos capítulos ten o libro?", opts:["Dez capítulos e un prólogo","Catorce e un epílogo","Vinte","Sete"], a:1, fb:"Ten 14 capítulos e un epílogo."}
    ],
    hard:[
      {q:"Como se chama a protagonista?", ans:"Dana", ok:["dana"]},
      {q:"Que cor de túnica levan os arquimagos?", ans:"Dourada", ok:["dourad","dorad","ouro","oro"]},
      {q:"Que tipo de narrador ten o libro?", ans:"Narrador en terceira persoa omnisciente", ok:["omniscient","terceira","tercera"]},
      {q:"Como se chama a egua de Dana?", ans:"Lunaestrella", ok:["lunaestrella"]}
    ],
    games:[
      {type:"match", title:"Quen é quen?", pairs:[["Dana","A protagonista"],["Kai","O amigo espírito"],["O Mestre","O Amo da Torre"],["Fenris","O elfo lobishome"],["Maritta","A anana cociñeira"],["Aonia","A dama da túnica dourada"]]},
      {type:"order", title:"As túnicas", prompt:"Ordena as túnicas de aprendiza a maga", items:["Branca","Verde","Azul","Violeta","Vermella"]},
      {type:"classify", title:"Persoa ou animal?", bins:["🧙 Personaxe","🐴 Animal"], items:[["Dana",0],["Fenris",0],["Maritta",0],["Aonia",0],["Nicolás",0],["Lunaestrella",1],["Medianoche",1],["Alide",1],["O unicornio",1]]}
    ]
  },
  {
    id:"cap1", title:"Cap. 1: Kai", icon:"👦",
    body:`
    <div class="card"><h3><span class="chip">1</span>O nacemento de Dana</h3>
      <p>Dana nace nunha noite escura de <b>vento</b> moi forte, <b>dous meses antes</b> de tempo. Ten ollos <b>azuis</b> e un mechón de pelo negro.</p>
      <p>A <b>comadroa</b> ve algo estraño nos seus ollos, pero <b>nunca</b> llo conta a ninguén.</p>
      <p>De pequena, Dana é calada, solitaria e <b>sixilosa coma un gato</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Coñece a Kai</h3>
      <p>Aos <b>seis anos</b> coñece a <b>Kai</b>, un neno <b>loiro</b>, delgado e de ollos <b>verdes</b>, sentado no valado.</p>
      <p>Fanse grandes amigos: el axúdaa nas tarefas e xogan no <b>bosque</b>. Kai sempre aparece cando ela está <b>soa</b> e pídelle que non lle fale del á familia.</p></div>
    <div class="card"><h3><span class="chip">3</span>«Kai non existe»</h3>
      <p>Aos <b>oito anos</b> chega tarde a casa. A nai dálle <b>labazadas</b> e Dana minte: di que estaba con <b>Sara</b>. Ao final berra que estaba con Kai.</p>
      <p>A irmá maior di que <b>Kai non existe</b> e que Dana fala soa. Dana foxe ao celeiro.</p>
      <p>Alí Kai confésalle: «<b>Ninguén pode verme. Só ti</b>». Dana tenta acariciarlle a cara e a súa man <b>atravésao</b>. Kai promete non deixala <b>nunca</b>.</p></div>
    <div class="card example"><h3><span class="chip">★</span>Recurso literario</h3>
      <p>«O vento <b>azoutaba sen piedade</b> as pólas» e «a granxa soportaba as sacudidas <b>con heroísmo</b>»: dámoslles calidades humanas a cousas. Iso é a <b>personificación</b>.</p></div>`,
    quiz:[
      {q:"Como era a noite na que naceu Dana?", opts:["Unha noite de verán tranquila","Escura e cun vento moi forte","Cunha gran nevarada","Cunha lúa chea moi brillante"], a:1, fb:"Había un vento terrible e non había lúa."},
      {q:"Que idade tiña Dana cando coñeceu a Kai?", opts:["Seis anos","Dez anos","Tres anos e medio","Oito anos"], a:0, fb:"Coñeceuno aos seis anos, recollendo framboesas."},
      {q:"Como é Kai?", opts:["Moreno e de ollos azuis escuros","Roxo e baixo","Loiro e de ollos verdes","Calvo e vello"], a:2, fb:"Kai é loiro, delgado e de ollos verdes."},
      {q:"Que pasa cando Dana tenta tocar a Kai?", opts:["Kai bótase a rir moi forte","A man atravésao coma néboa","Kai dálle a man","Kai desaparece para sempre da granxa"], a:1, fb:"Kai existe nun plano diferente: non se pode tocar."},
      {q:"A quen nomea Dana cando minte á nai?", opts:["A Maritta","A unha das súas irmás maiores","Ao Mestre","A Sara, a do norte"], a:3, fb:"Di que estaba con Sara, pero Sara estivera recollendo tomates."}
    ],
    hard:[
      {q:"Que viu a comadroa nos ollos de Dana?", ans:"Algo estraño que nunca contou a ninguén", ok:["estran","nunca","nadie","ninguen","raro"]},
      {q:"Que lle confesa Kai a Dana no celeiro?", ans:"Que ninguén pode velo, só ela", ok:["so ela","solo ella","ninguen","nadie","so ti","solo tu"]},
      {q:"Que recurso literario é «o vento azoutaba sen piedade»?", ans:"Personificación", ok:["personific"]}
    ],
    games:[
      {type:"order", title:"A orde do capítulo", prompt:"Ordena o que pasa no capítulo 1", items:["Dana nace nunha noite de vento","Aos seis anos coñece a Kai","Kai desaparece cando chega a nai","Dana chega tarde e a nai pégalle","A irmá di que Kai non existe","A man de Dana atravesa a Kai"]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["Dana naceu dous meses antes de tempo",true],["A comadroa contou a todos o que viu",false,"Nunca llo contou a ninguén"],["Kai é loiro e de ollos verdes",true],["A familia de Dana podía ver a Kai",false,"Só Dana pode velo"],["Dana podía abrazar a Kai sen problema",false,"A súa man atravésao"],["Kai promete non deixala nunca",true]]},
      {type:"hangman", title:"Palabra oculta", words:[["Comadroa","Muller que axudou no parto de Dana"],["Celeiro","Onde se refuxia Dana cando foxe"],["Personificación","Dar calidades humanas a cousas"],["Granxa","Onde vive a familia de Dana"]]}
    ]
  },
  {
    id:"cap2", title:"Cap. 2: O home da túnica gris", icon:"🧙",
    body:`
    <div class="card"><h3><span class="chip">1</span>«Bruxa!»</h3>
      <p>Pasan catro anos: Dana ten <b>dez anos</b>. Para non ter problemas, finxe que Kai foi un capricho.</p>
      <p>Sara e as súas amigas xogan á <b>pelota de trapo</b>. Sara invítaa, pero <b>búrlase</b> dela. Chámanlle <b>bruxa</b> e tíranlle <b>pedras</b>.</p>
      <p>Dana di que lle gustaría ser bruxa para <b>vingarse</b>. Kai respóndelle: «<b>Nunca digas iso</b>».</p>
      <p>Kai é alegre e aventureiro; Dana é tranquila e pensa antes de actuar.</p></div>
    <div class="card"><h3><span class="chip">2</span>Tempos difíciles</h3>
      <p>Chega un <b>inverno</b> moi duro: xeadas, fame e <b>lobos</b> que atacan as granxas.</p>
      <p>Na <b>primavera</b> vén unha gran <b>seca</b> e unha <b>epidemia</b> (polos mosquitos). Morren unha irmá maior, un irmán pequeno e o <b>avó</b> de Dana.</p></div>
    <div class="card"><h3><span class="chip">3</span>O home do pozo</h3>
      <p>Un día, no <b>pozo</b>, chega un <b>vello</b> nun <b>cabalo branco</b>. Ten pelo e ollos <b>grises</b> e leva unha <b>túnica gris</b>. Non ten barba.</p>
      <p>Pregunta o camiño á cidade e queda mirando a <b>Kai</b>. Ao marchar di: «Esta noite <b>choverá</b>».</p>
      <p>Non había nin unha nube… pero esa noite <b>choveu</b>.</p></div>`,
    quiz:[
      {q:"Que lle fan a Dana Sara e as súas amigas?", opts:["Invítana a xantar á súa casa","Búrlanse e tíranlle pedras","Regálanlle unha pelota de trapo nova","Fan unha festa con ela"], a:1, fb:"Chámanlle bruxa e tíranlle pedras."},
      {q:"Que lle di Kai cando Dana quere ser bruxa para vingarse?", opts:["Que é unha boa idea","Que el a axudará","Que nunca diga iso","Que vaia ao pobo"], a:2, fb:"Kai dille que é perigoso e que non é culpa delas."},
      {q:"Quen morre na epidemia?", opts:["Unha irmá, un irmán e o avó","A nai e o pai de Dana, os dous","Sara e as súas amigas do norte","Ninguén"], a:0, fb:"A familia pasa de doce a nove membros."},
      {q:"Como vai vestido o home que chega ao pozo?", opts:["Cunha armadura","Cunha capa vermella","Cunha túnica dourada","Cunha túnica gris"], a:3, fb:"Por iso o capítulo chámase «O home da túnica gris»."},
      {q:"Que predí o home da túnica gris?", opts:["Que choverá esa noite","Que vai nevar moitísimo","Que virán os lobos das montañas","Que Dana será raíña"], a:0, fb:"Dixo «esta noite choverá», e choveu."}
    ],
    hard:[
      {q:"Que lle chaman a Dana as nenas?", ans:"Bruxa", ok:["bruxa","bruja"]},
      {q:"Que é o que máis lle chama a atención a Dana do home do pozo?", ans:"Que mira a Kai: parece que o ve", ok:["kai"]},
      {q:"Que pasou na primavera despois do inverno duro?", ans:"Unha gran seca e unha epidemia", ok:["seca","sequia","epidemia","calor"]}
    ],
    games:[
      {type:"tf", title:"Verdadeiro ou falso", items:[["Dana ten dez anos neste capítulo",true],["Sara deixa xogar a Dana de verdade",false,"Búrlase dela"],["As nenas tiran pedras a Dana",true],["O inverno foi suave e bo",false,"Foi moi duro"],["O home do pozo leva túnica gris",true],["O home do pozo ten unha longa barba",false,"Non ten barba"],["Esa noite choveu",true]]},
      {type:"pick", title:"O home da túnica gris", prompt:"Toca o que describe ao home do pozo", items:[["Pelo gris",true],["Ollos grises",true],["Túnica gris",true],["Cabalo branco",true],["Cinto de coiro con saquiños",true],["Barba longa",false],["Espada",false],["Ollos verdes",false],["Coroa",false]]},
      {type:"order", title:"Que pasa primeiro?", prompt:"Ordena os feitos do capítulo 2", items:["As nenas tiran pedras a Dana","Chega un inverno moi duro","Hai seca e epidemia","Dana vai ao pozo por auga","Chega o home da túnica gris","Esa noite chove"]}
    ]
  },
  {
    id:"cap3", title:"Cap. 3: A Torre", icon:"🏰",
    body:`
    <div class="card"><h3><span class="chip">1</span>Unha visita na granxa</h3>
      <p>Na corte hai dous animais novos: un <b>cabalo branco</b> e unha <b>egua baia</b>. Dana escoita pola fiestra: o home da túnica gris fala cos seus pais.</p>
      <p>Dana cre que queren <b>casala</b> con el. O pai acepta que a leve.</p>
      <p>Kai dille «Escápate», en singular: el <b>non pode afastarse</b> da granxa.</p></div>
    <div class="card"><h3><span class="chip">2</span>A despedida</h3>
      <p>A nai dálle un <b>amuleto</b>: unha <b>lúa minguante</b> cunha <b>estrela de seis puntas</b>. Foi da súa nai e da súa avoa.</p>
      <p>A egua é para Dana; ponlle de nome <b>Lunaestrella</b>.</p>
      <p>O home mira cara a onde está Kai e di: «<b>Ti tamén podes vir</b>». Así confirma que sabe que Kai está alí.</p></div>
    <div class="card"><h3><span class="chip">3</span>A viaxe e a Torre</h3>
      <p>O home pídelle que o chame «<b>Mestre</b>». O seu cabalo chámase <b>Medianoche</b>. Viaxan semanas cara ao leste ata unha cordilleira.</p>
      <p>Chegan ao <b>Val dos Lobos</b>. A xente do pobo trata ao Mestre con respecto, pero <b>desconfía</b> del.</p>
      <p>A <b>Torre</b> é alta, escura e elegante, rematada nunha <b>agulla</b>. Une o <b>ceo</b> e a <b>terra</b>. A reixa ábrese soa cun <b>feitizo</b>.</p>
      <p>É unha <b>Escola de Alta Feiticería</b> e Dana será <b>aprendiza</b>. Entende que non vai casar: ten poderes!</p></div>`,
    quiz:[
      {q:"Que cre Dana que están negociando os seus pais?", opts:["Vender a granxa","Casala co home da túnica gris","Comprar un cabalo","Mandala a un colexio de monxas da cidade"], a:1, fb:"Cre que é un matrimonio, pero en realidade vai ser aprendiza."},
      {q:"Que obxecto lle dá a nai a Dana?", opts:["Un libro de feitizos antigos da familia","Unha espada","Un amuleto cunha lúa e unha estrela","Unha moeda de ouro"], a:2, fb:"Unha lúa minguante cunha estrela de seis puntas."},
      {q:"Que nome lle pon Dana á súa egua?", opts:["Medianoche","Alide","Lunaestrella","Estrela do Norte da Granxa"], a:2, fb:"Lunaestrella, pensando no seu amuleto."},
      {q:"Por que Kai di «escápate» e non «escapémonos»?", opts:["Porque non pode afastarse da granxa","Porque non quere a Dana","Porque lle ten moito medo aos lobos do camiño","Porque está enfermo"], a:0, fb:"Ata ese momento, Kai estaba atado á granxa."},
      {q:"Que é a Torre?", opts:["Un castelo dun rei moi rico e poderoso","Unha prisión","Unha igrexa","Unha Escola de Alta Feiticería"], a:3, fb:"Unha das poucas escolas de Alta Feiticería do mundo."}
    ],
    hard:[
      {q:"Como lle pide o home que o chame?", ans:"Mestre", ok:["mestre","maestro"]},
      {q:"Onde está a Torre?", ans:"No Val dos Lobos", ok:["val","valle","lobos"]},
      {q:"Que frase demostra que o Mestre sabe que Kai está alí?", ans:"«Ti tamén podes vir»", ok:["tamen podes","tambien puedes","podes vir","puedes venir"]},
      {q:"Como se abre a reixa da Torre?", ans:"Cun feitizo do Mestre", ok:["feitizo","hechizo","maxia","magia","conxuro"]}
    ],
    games:[
      {type:"match", title:"Une as parellas", pairs:[["Lunaestrella","Egua baia de Dana"],["Medianoche","Cabalo branco do Mestre"],["Amuleto","Lúa e estrela de seis puntas"],["A Torre","Escola de Alta Feiticería"],["Val dos Lobos","Onde está a Torre"]]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["Dana vai casar co Mestre",false,"Vai ser a súa aprendiza"],["O amuleto foi da avoa de Dana",true],["Kai non pode ir á Torre de ningunha maneira",false,"O Mestre permite que vaia"],["A xente do Val desconfía do Mestre",true],["A reixa da Torre ábrese soa cun feitizo",true],["A Torre está no medio do pobo",false,"Está xunto ao bosque, apartada"]]},
      {type:"hangman", title:"Palabra oculta", words:[["Amuleto","Regalo da nai de Dana"],["Aprendiza","O que vai ser Dana na Torre"],["Medianoche","Nome do cabalo do Mestre"],["Agulla","Remate de arriba da Torre"]]}
    ]
  },
  {
    id:"cap4", title:"Cap. 4: Primeiras leccións", icon:"🌳",
    body:`
    <div class="card"><h3><span class="chip">1</span>A Torre por dentro</h3>
      <p>Pola mañá Dana atopa o <b>almorzo</b> e unha <b>túnica branca</b>. Ninguén a oíu entrar.</p>
      <p>A Torre parece un <b>labirinto</b>, pero hai unha gran <b>escaleira de caracol</b> que a percorre de arriba abaixo. Moitos cuartos están baleiros.</p>
      <p>Dana <b>non sabe ler</b>, por iso non entende o letreiro da porta da <b>biblioteca</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Fenris e Maritta</h3>
      <p>Na biblioteca coñece a <b>Fenris</b>, un <b>elfo</b> de ollos rasgados coma os dun gato, pelo cobrizo, orellas en punta e túnica violeta. Aconséllalle que <b>nunca suba</b> aos cuartos do Mestre.</p>
      <p>Na Torre só hai <b>dous aprendices</b>: Fenris e ela. «Son malos tempos para a maxia».</p>
      <p>Logo coñece a <b>Maritta</b>, unha <b>anana</b> baixa e forte, a cociñeira. Os ananos <b>non confían na maxia</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>A primeira lección</h3>
      <p>O Mestre dálle o <b>Libro da Terra</b> (cunha árbore na tapa). Cando o aprenda terá a túnica <b>verde</b>. Tamén aprenderá a <b>ler</b> e a <b>linguaxe arcana</b>.</p>
      <p>Para el, a maxia é <b>comprender e controlar a enerxía</b> que move o mundo.</p>
      <p>Primeira tarefa: descubrir que lle pasa a unha <b>árbore enferma</b>, escoitándoa.</p>
      <p>Prohibición: <b>nunca</b> estar no bosque <b>de noite</b>, porque é a hora dos <b>lobos</b>. Na Torre está a salvo.</p></div>
    <div class="card example"><h3><span class="chip">★</span>Recurso literario</h3>
      <p>«Sixilosa <b>coma</b> un gato»: comparamos dúas cousas usando «coma». É unha <b>comparación</b> (ou símil).</p></div>`,
    quiz:[
      {q:"Por que Dana non entende o letreiro da biblioteca?", opts:["Porque está noutro idioma","Porque non sabe ler","Porque está escuro","Porque está borrado"], a:1, fb:"Dana é filla de granxeiros analfabetos; aprenderá a ler na Torre."},
      {q:"Que consello lle dá Fenris?", opts:["Que nunca suba aos cuartos do Mestre","Que fuxa da Torre","Que coma moito","Que non fale nunca con Maritta na cociña"], a:0, fb:"Ao Mestre non lle gusta que ninguén vaia aos seus dominios."},
      {q:"Cantos aprendices hai na Torre?", opts:["Cen aprendices de todo o mundo","Doce","Só dous: Fenris e Dana","Ningún"], a:2, fb:"«É unha escola moi selecta»."},
      {q:"Cal é o primeiro libro que estuda Dana?", opts:["O Libro do Lume e dos Dragóns","O Libro da Auga","O Libro do Aire","O Libro da Terra"], a:3, fb:"Co Libro da Terra conseguirá a túnica verde."},
      {q:"Cal é a primeira tarefa de Dana?", opts:["Saber que lle pasa a unha árbore enferma","Matar un lobo","Limpar a cociña","Ler e copiar todos os libros da biblioteca"], a:0, fb:"Debe abrir os sentidos e escoitar a árbore."},
      {q:"Que lle prohibe o Mestre?", opts:["Falar con Fenris na biblioteca","Montar a cabalo","Estar no bosque de noite","Ir á cociña"], a:2, fb:"De noite baixan os lobos a cazar."}
    ],
    hard:[
      {q:"Que elemento percorre a Torre de arriba abaixo?", ans:"Unha gran escaleira de caracol", ok:["escaleira","escalera","caracol"]},
      {q:"Que é a maxia para o Mestre?", ans:"Comprender e controlar a enerxía que move o mundo", ok:["enerxia","energia"]},
      {q:"Que recurso literario é «sixilosa coma un gato»?", ans:"Unha comparación ou símil", ok:["compara","simil"]},
      {q:"Que cor de túnica consegue Dana co Libro da Terra?", ans:"Verde", ok:["verde"]}
    ],
    games:[
      {type:"classify", title:"Fenris ou Maritta?", bins:["🧝 Fenris","🍲 Maritta"], items:[["É un elfo",0],["Ollos coma os dun gato",0],["Pelo cobrizo",0],["Túnica violeta",0],["É unha anana",1],["É a cociñeira",1],["Non confía na maxia",1],["É baixa e forte",1]]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["Dana xa sabía ler ao chegar",false,"Aprende na Torre"],["Na Torre hai moitos aprendices",false,"Só dous"],["O Libro da Terra ten unha árbore na tapa",true],["Maritta confía moito na maxia",false,"Os ananos non confían nela"],["Dana non debe estar no bosque de noite",true],["A escaleira de caracol percorre a Torre",true]]},
      {type:"memory", title:"Memoria da Torre", pairs:[["Fenris","Elfo"],["Maritta","Anana"],["Libro da Terra","Túnica verde"],["Noite","Hora dos lobos"],["Coma un gato","Comparación"],["Árbore enferma","Primeira tarefa"]]}
    ]
  },
  {
    id:"cap5", title:"Cap. 5: Visións", icon:"👻",
    body:`
    <div class="card"><h3><span class="chip">1</span>Cinco anos despois</h3>
      <p>Dana ten <b>quince anos</b>. Aproba o <b>Libro da Auga</b> e leva a túnica <b>violeta</b> (aprendiza de cuarto grao). Só lle queda o <b>Libro do Lume</b>, o máis difícil.</p>
      <p>Antes aprobou o Libro da Terra (túnica verde) e o do Aire (túnica azul).</p>
      <p>Quere chegar a ser <b>arquimaga</b>, máis que o Mestre. O Mestre é <b>mentalista</b>: le os pensamentos.</p></div>
    <div class="card"><h3><span class="chip">2</span>Dana e Kai, distanciados</h3>
      <p>Dana evita a Kai porque está <b>namorada</b> del e ten <b>medo</b>: non pode tocalo. Kai sábeo e xoga con iso.</p>
      <p><b>Maritta</b> nota que Dana está namorada… pero cre que é do <b>elfo</b>!</p>
      <p>Fenris xa aprobou a <b>Proba do Lume</b> e leva túnica vermella. Vixía cada tarde dende as <b>ameas</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>A dama da túnica dourada</h3>
      <p>Unha noite aparece no seu cuarto unha muller de <b>túnica dourada</b>, de idade mediana. Dana pode ver <b>a través</b> dela.</p>
      <p>Dille: «Son unha <b>prisioneira</b>. <b>Busca o unicornio</b>. E non lle digas a ninguén que me viches».</p>
      <p>Despois Dana ten un <b>pesadelo</b>: o Mestre e Fenris transforman a Kai nun lobo. Kai consólaa e fan as paces.</p>
      <p>A dama volve aparecer moitas veces e Dana non se pode concentrar.</p></div>`,
    quiz:[
      {q:"Que idade ten Dana neste capítulo?", opts:["Dez anos","Quince anos","Vinte anos e un mes","Oito anos"], a:1, fb:"Pasaron cinco anos dende que chegou á Torre."},
      {q:"Que libro lle falta para ser maga?", opts:["O Libro do Lume","O Libro da Terra","O Libro do Aire","O Libro da Auga"], a:0, fb:"O Libro do Lume é o último e o máis difícil."},
      {q:"Por que se afasta Dana de Kai?", opts:["Porque se enfadaron polo amuleto da nai","Porque Kai marchou","Porque está namorada del","Porque o Mestre llo mandou"], a:2, fb:"Ten medo dese sentimento por alguén a quen non pode tocar."},
      {q:"De quen cre Maritta que está namorada Dana?", opts:["Do Mestre da Torre","De Nicolás","De Kai","De Fenris"], a:3, fb:"Maritta non pode ver a Kai, por iso pensa no elfo."},
      {q:"Que lle pide a dama da túnica dourada?", opts:["Que fuxa da Torre esa mesma noite","Que busque o unicornio","Que mate ao Mestre","Que lle traia comida"], a:1, fb:"«Busca o unicornio» e non llo digas a ninguén."}
    ],
    hard:[
      {q:"Que cor de túnica consegue Dana co Libro da Auga?", ans:"Violeta", ok:["violeta"]},
      {q:"Que tipo de mago é o Mestre?", ans:"Mentalista: le os pensamentos", ok:["mentalista","pensamento","pensamiento"]},
      {q:"Como se define a si mesma a dama?", ans:"Como unha prisioneira", ok:["prisioneira","prisionera"]},
      {q:"Que soña Dana no pesadelo?", ans:"Que transforman a Kai nun lobo", ok:["lobo"]}
    ],
    games:[
      {type:"order", title:"Os libros de maxia", prompt:"Ordena os libros como os estuda Dana", items:["Libro da Terra","Libro do Aire","Libro da Auga","Libro do Lume"]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["Dana quere chegar a ser arquimaga",true],["O Mestre é mentalista",true],["Maritta sabe que Dana quere a Kai",false,"Cre que é o elfo"],["A dama é sólida coma unha persoa",false,"Pódese ver a través dela"],["A dama pide que busque o unicornio",true],["Fenris aínda leva túnica branca",false,"Leva túnica vermella"]]},
      {type:"hangman", title:"Palabra oculta", words:[["Unicornio","O que debe buscar Dana"],["Prisioneira","Así se presenta a dama"],["Mentalista","Mago que le os pensamentos"],["Violeta","Túnica do Libro da Auga"]]}
    ]
  },
  {
    id:"cap6", title:"Cap. 6: Preguntas", icon:"❓",
    body:`
    <div class="card"><h3><span class="chip">1</span>O unicornio do Val</h3>
      <p>Dana busca información na biblioteca. Fenris cóntalle que <b>todos os magos</b> buscan un unicornio, porque o seu <b>corno</b> dá un poder case <b>ilimitado</b>.</p>
      <p>Ninguén pode ver un unicornio se el <b>non quere</b>. Hai lendas dun unicornio no bosque do <b>Val dos Lobos</b>.</p>
      <p>A dama dille unha pista: «<b>Plenilunio</b>» (lúa chea). O Mestre ve a Dana falando soa e sorrí: «Por fin parece que imos a algunha parte».</p></div>
    <div class="card"><h3><span class="chip">2</span>Visita ao pobo</h3>
      <p>Dana pide un <b>día libre</b> para ir ao pobo. A xente mírana con <b>medo e desconfianza</b>, porque vive na Torre.</p>
      <p>Un neno de pelo roxo, <b>Nicolás</b>, dille que a súa nai a chama bruxa e que o unicornio son «contos de vellas».</p>
      <p>Unha <b>anciá cega</b> dille que o unicornio vive no bosque e que <b>todo o bosque</b> é o seu territorio. De súpeto, a anciá <b>desaparece</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>O consello de Maritta</h3>
      <p>Dana cóntalle a Maritta que ten <b>visións</b> e teme estar tola.</p>
      <p>Maritta leva case <b>cen anos</b> na Torre: xa estaba alí <b>antes</b> do Mestre. Dille que coa maxia <b>todo é posible</b> e que «os tolos <b>non saben</b> que están tolos».</p>
      <p>Dana decide saír na <b>lúa chea</b> a buscar o unicornio. Kai promete estar con ela «ata a morte e máis alá».</p></div>`,
    quiz:[
      {q:"Por que os magos buscan unicornios?", opts:["Porque son moi bonitos e brillantes","Porque o corno dá poder","Para montalos","Para vendelos"], a:1, fb:"O corno do unicornio dá un poder case ilimitado."},
      {q:"Que pista lle dá a dama a Dana?", opts:["Plenilunio","Bosque escuro","Pozo","Torre"], a:0, fb:"Plenilunio: a noite de lúa chea."},
      {q:"Quen é Nicolás?", opts:["Un elfo","O irmán pequeno de Dana","Un neno do pobo","Un lobo"], a:2, fb:"É o neno do pobo; no epílogo volve a aparecer de mozo."},
      {q:"Que lle pasa á anciá cega?", opts:["Vai coa nai de Nicolás","Morre de medo","Convértese en loba","Desaparece de súpeto"], a:3, fb:"Máis adiante saberemos que era unha pantasma."},
      {q:"Que consello lle dá Maritta?", opts:["Que os tolos non saben que o están","Que marche da Torre canto antes","Que fale co Mestre","Que se esqueza de todo"], a:0, fb:"Se Dana se pregunta se está tola, é que non o está."}
    ],
    hard:[
      {q:"Que significa «plenilunio»?", ans:"Lúa chea", ok:["chea","llena"]},
      {q:"Por que a xente do pobo ten medo de Dana?", ans:"Porque vive na Torre e cren que é bruxa", ok:["torre","bruxa","bruja","maxia","magia"]},
      {q:"Quen vivía antes na Torre: Maritta ou o Mestre?", ans:"Maritta", ok:["maritta"]}
    ],
    games:[
      {type:"match", title:"Quen dixo que?", pairs:[["Fenris","Todos os magos buscan un unicornio"],["A dama","Plenilunio"],["Nicolás","Son contos de vellas"],["A anciá cega","Todo o bosque é o seu territorio"],["Maritta","Os tolos non saben que o están"],["Kai","Ata a morte e máis alá"]]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["Calquera pode ver un unicornio",false,"Só se el quere"],["Dana pide un día libre ao Mestre",true],["No pobo reciben a Dana con moito cariño",false,"Con medo e desconfianza"],["A anciá cega recordaba a voz de Dana",true],["Maritta chegou á Torre despois do Mestre",false,"Xa estaba antes"],["Dana decide saír na lúa chea",true]]},
      {type:"hangman", title:"Palabra oculta", words:[["Plenilunio","Pista da dama"],["Corno","Parte do unicornio que dá poder"],["Nicolás","Neno de pelo roxo do pobo"],["Biblioteca","Onde busca Dana información"]]}
    ]
  },
  {
    id:"cap7", title:"Cap. 7: A noite dos lobos", icon:"🌕",
    body:`
    <div class="card"><h3><span class="chip">1</span>O unicornio</h3>
      <p>Na lúa chea, Dana <b>teletranspórtase</b> ao bosque con Kai e Lunaestrella. Fai un <b>círculo de protección</b> e o feitizo «<b>Ollos de Gato</b>» para ver de noite.</p>
      <p>Atopan o <b>unicornio</b> bebendo nun regato: branco, coma un <b>poni</b>, con cola de león, <b>cascos fendidos</b> coma unha cabra e un <b>corno</b> brillante. Os seus ollos son coma <b>pozos sen fondo</b>.</p>
      <p>O unicornio parece <b>guialos</b>, pero Dana corre tanto que o <b>perde</b>. Deixou atrás a Kai e a Lunaestrella: foi unha <b>imprudencia</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>O ataque</h3>
      <p>Uns <b>lobos</b> rodéana. Teñen <b>rabia e odio</b>, coma se quixesen vinganza. Dana lánzalles lume, xeo e pedra, pero os lobos <b>volven á vida</b>.</p>
      <p>Dende a Torre, o Mestre e Fenris miran. Fenris di: «Non sobrevivirá». O Mestre mándao ir buscala nunha hora.</p>
      <p><b>Kai</b> chega galopando en Lunaestrella e <b>salva</b> a Dana: cóllea da man!</p></div>
    <div class="card"><h3><span class="chip">3</span>Fenris ao rescate</h3>
      <p>A <b>teletransportación</b> de Dana <b>falla</b>. Invoca un <b>fogo fátuo</b> para ter luz, pero conxélao sen querer. Lunaestrella asústase e foxe.</p>
      <p>Chega <b>Fenris</b>: lanza unha bóla de lume e invoca <b>espectros de cans</b> de sombra. Logo manda a Dana á Torre no seu cabalo, <b>Alide</b>.</p>
      <p>Dana ve algo raro na cara de Fenris: «aos elfos <b>si lles crece barba</b>». Ao lonxe soa un <b>ouveo</b> cheo de dor.</p></div>`,
    quiz:[
      {q:"Para que serve o feitizo «Ollos de Gato»?", opts:["Para ver na escuridade","Para correr moito","Para falar cos gatos do bosque","Para voar"], a:0, fb:"Dana pode ver de noite sen usar fachos."},
      {q:"Como son os cascos do unicornio?", opts:["De ouro puro e moi brillantes","Fendidos, coma os dunha cabra","Coma os dun cabalo","Non ten cascos"], a:1, fb:"Ten pequenos cascos fendidos, coma unha cabra."},
      {q:"Por que perde Dana o unicornio?", opts:["Porque o asusta Kai","Porque se fai de día de súpeto","Porque corre sen pensar","Porque o caza o Mestre"], a:2, fb:"Foi unha imprudencia: deixou atrás a Kai e a egua."},
      {q:"Que teñen de raro os lobos?", opts:["Son de moitas cores distintas","Falan","Voan","Volven á vida"], a:3, fb:"A maxia de Dana non lles fai efecto."},
      {q:"Quen salva finalmente a Dana?", opts:["Fenris, cos espectros","Maritta coa súa tixola","O Mestre","Os aldeáns do pobo con fachos"], a:0, fb:"Fenris chega no cabalo Alide e salva a situación."},
      {q:"Que lle chama a atención a Dana na cara de Fenris?", opts:["Unha cicatriz","Ten barba","Ten ollos azuis","Está chorando"], a:1, fb:"Era o primeiro sinal de que se estaba transformando en lobo."}
    ],
    hard:[
      {q:"A que se parecen os ollos do unicornio?", ans:"A pozos sen fondo", ok:["pozo"]},
      {q:"Como se chama o cabalo de Fenris?", ans:"Alide", ok:["alide"]},
      {q:"Que criatura invoca Dana para ter luz?", ans:"Un fogo fátuo", ok:["fatuo","fogo","fuego"]},
      {q:"Que invoca Fenris contra os lobos?", ans:"Espectros de cans de sombra e unha bóla de lume", ok:["espectro","can","perro","bola","lume","fuego"]}
    ],
    games:[
      {type:"order", title:"A noite dos lobos", prompt:"Ordena o que pasa nesta noite", items:["Dana fai o feitizo Ollos de Gato","Ven o unicornio no regato","Dana perde o unicornio","Os lobos rodean a Dana","Kai salva a Dana en Lunaestrella","Fenris chega cos espectros de cans","Dana volve á Torre en Alide"]},
      {type:"pick", title:"O unicornio", prompt:"Toca o que describe ao unicornio", items:[["Branco",true],["Tamaño dun poni",true],["Cola de león",true],["Cascos fendidos",true],["Corno brillante",true],["Ten barbiña",true],["Ás de morcego",false],["Pelo negro",false],["Tres cornos",false]]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["A maxia de Dana non funciona contra os lobos",true],["Kai colle a Dana da man para salvala",true],["A teletransportación funciona perfecta",false,"Falla"],["Dana conxela o fogo fátuo sen querer",true],["Fenris volve á Torre con Dana",false,"Queda atrás cos lobos"],["O Mestre mira a loita dende a Torre",true]]}
    ]
  },
  {
    id:"cap8", title:"Cap. 8: Algunhas respostas", icon:"💬",
    body:`
    <div class="card"><h3><span class="chip">1</span>Espertar</h3>
      <p>O Mestre <b>non castiga</b> a Dana: di que xa tivo o seu castigo e que debe sentir <b>remorsos</b> por arriscar a vida de Fenris.</p>
      <p>Os lobos do val «non son coma os demais» e ninguén os pode vencer.</p>
      <p><b>Lunaestrella</b> volveu soa á Torre. Maritta cóntalle que durmiu <b>cinco días</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Lagoas na memoria</h3>
      <p>Kai quere esquecer o asunto: «<b>Nada vale tanto como para dar a vida por iso</b>».</p>
      <p>Kai di que os dous viron algo raro en Fenris, pero Dana <b>non o lembra</b>: ten <b>lagoas</b> na memoria.</p>
      <p>Dana di que os lobos parecían <b>clamar vinganza</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>Conversa con Fenris</h3>
      <p>Fenris está moi <b>canso</b> nas ameas. Dana pídelle perdón e dálle as grazas. Fenris dille que <b>non foi unha parvada</b>: ela non podía saber que os lobos son especiais.</p>
      <p>Cóntalle a lenda: hai unha <b>antiga maldición</b> sobre o val e un <b>tesouro oculto</b> no bosque. «Se o unicornio é o <b>guía</b>, os lobos son os <b>centinelas</b>».</p>
      <p>Dana decide esperar ata ser maga para buscar a verdade.</p></div>
    <div class="card example"><h3><span class="chip">★</span>Recurso literario</h3>
      <p>«Os raios dourados <b>xogaban</b> coa súa cara»: os raios non xogan de verdade. É outra <b>personificación</b>.</p></div>`,
    quiz:[
      {q:"Como castiga o Mestre a Dana?", opts:["Pechándoa no cuarto","Non a castiga","Botándoa da Torre","Quitándolle a túnica"], a:1, fb:"Di que xa recibiu o seu castigo e que sentirá remorsos."},
      {q:"Cantos días durmiu Dana?", opts:["Cinco días","Un día enteiro","Un mes","Dúas horas"], a:0, fb:"Estaba esgotada de tanta maxia."},
      {q:"Que lle pasa á memoria de Dana?", opts:["Recórdao todo moi ben","Esquece quen é Kai","Ten lagoas na memoria","Lembra a súa vida anterior noutro mundo"], a:2, fb:"Kai sospeita que alguén lle borrou o recordo."},
      {q:"Segundo a lenda, que fan os lobos?", opts:["Son os amigos do unicornio","Gardan a Torre do Mestre","Comen o tesouro","Son os centinelas"], a:3, fb:"O unicornio é o guía e os lobos son os centinelas."},
      {q:"Que lle di Kai sobre arriscar a vida?", opts:["Que nada vale tanto como a vida","Que hai que arriscalo todo sempre por aventuras","Que é divertido","Que o Mestre o quere así"], a:0, fb:"Kai sabe por experiencia o que é perder a vida."}
    ],
    hard:[
      {q:"Que volveu soa á Torre?", ans:"Lunaestrella, a egua", ok:["lunaestrella","egua","yegua"]},
      {q:"Que hai, segundo a lenda, oculto no bosque?", ans:"Un tesouro", ok:["tesouro","tesoro"]},
      {q:"Que pesa sobre o val ou a Torre?", ans:"Unha antiga maldición", ok:["maldicion"]}
    ],
    games:[
      {type:"match", title:"Une as ideas", pairs:[["O unicornio","O guía"],["Os lobos","Os centinelas"],["Cinco días","O que durmiu Dana"],["Lagoas","Ocos na memoria"],["Remorsos","O castigo de Dana"]]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["O Mestre castiga duramente a Dana",false,"Non a castiga"],["Lunaestrella volveu á Torre",true],["Dana lembra todo o que viu en Fenris",false,"Ten lagoas"],["Fenris di que non foi unha parvada",true],["Hai unha lenda dun tesouro no bosque",true],["Dana decide volver ao bosque esa mesma noite",false,"Decide esperar a ser maga"]]},
      {type:"hangman", title:"Palabra oculta", words:[["Centinelas","Os lobos, segundo a lenda"],["Maldición","O que pesa sobre o val"],["Tesouro","O que hai oculto no bosque"],["Remorsos","O que debe sentir Dana"]]}
    ]
  },
  {
    id:"cap9", title:"Cap. 9: A fuxida", icon:"🏃",
    body:`
    <div class="card"><h3><span class="chip">1</span>Un recordo recuperado</h3>
      <p>Pasa un ano: Dana ten <b>dezaseis anos</b> e prepárase para a <b>Proba do Lume</b>.</p>
      <p>Soña coa noite dos lobos e <b>recorda</b> o que esquecera: os lobos rodeaban a Fenris sen atacalo, e el <b>acariciábaos</b>. Fenris ten <b>poder sobre os lobos</b>.</p>
      <p>Kai e Dana pensan que o <b>Mestre</b> lle borrou a memoria para que non volvese ao bosque.</p></div>
    <div class="card"><h3><span class="chip">2</span>Fenris, Kai e Kin-Shannay</h3>
      <p>Dana cóntalle todo a Fenris <b>menos</b> o de Kai e pídelle axuda. El di que <b>non</b>. A dama, pola túnica dourada, debe ser unha <b>arquimaga</b>.</p>
      <p>Fenris escoita a Dana falando con Kai. Explica que «<b>Kai</b>» é unha palabra <b>élfica</b> que significa «<b>compañeiro</b>».</p>
      <p>Dille que ela é unha <b>Kin-Shannay</b>: unha persoa que é unha <b>porta</b> aberta a outra dimensión. Fenris acepta acompañala. (O Mestre xa lle pedira que a vixíase.)</p></div>
    <div class="card"><h3><span class="chip">3</span>Aonia e a verdade de Kai</h3>
      <p>Maritta recorda á <b>Señora da Torre</b>: <b>Aonia</b>, a feiticeira máis poderosa e xusta dos sete reinos. Morreu hai máis de <b>cincuenta anos</b>.</p>
      <p>Dana comprende que a dama é Aonia… e que <b>Kai é un fantasma</b>. Por primeira vez ve a Kai <b>chorar</b>, e confésalle o que sente por el.</p>
      <p>Antes de saír, Fenris fai un <b>círculo de purificación</b> na neve.</p></div>`,
    quiz:[
      {q:"Que recorda Dana no seu soño?", opts:["Que Fenris acariciaba os lobos","Que Kai era un lobo branco moi grande","O seu nacemento","Unha canción da nai"], a:0, fb:"Os lobos rodeaban a Fenris sen atacalo."},
      {q:"Que significa «Kai» en élfico?", opts:["Amigo","Compañeiro","Fantasma da noite","Lobo"], a:1, fb:"Kai significa compañeiro."},
      {q:"Que é unha Kin-Shannay?", opts:["Unha raíña elfa","Unha arma máxica moi antiga e poderosa","Unha porta a outra dimensión","Un tipo de lobo"], a:2, fb:"Poden ver e oír os espíritos."},
      {q:"Quen era Aonia?", opts:["A nai de Dana","A irmá de Maritta que vive no norte","Unha nena do pobo","A antiga Señora da Torre"], a:3, fb:"A feiticeira máis poderosa, sabia e xusta dos sete reinos."},
      {q:"Que fai Kai cando Dana descobre a verdade?", opts:["Chora por primeira vez","Ri moito","Marcha enfadado e non volve en semanas","Atácaa"], a:0, fb:"Dana nunca o vira chorar."}
    ],
    hard:[
      {q:"Que idade ten Dana neste capítulo?", ans:"Dezaseis anos", ok:["16","dezaseis","dieciseis"]},
      {q:"Que é Kai en realidade?", ans:"Un fantasma (un espírito)", ok:["fantasma","espirit","pantasma"]},
      {q:"Hai cantos anos morreu Aonia?", ans:"Hai máis de cincuenta anos", ok:["50","cincuenta","medio seculo","medio siglo"]},
      {q:"Quen borrou probablemente a memoria de Dana?", ans:"O Mestre", ok:["mestre","maestro"]}
    ],
    games:[
      {type:"match", title:"Palabras clave", pairs:[["Kai","Compañeiro en élfico"],["Kin-Shannay","Porta a outra dimensión"],["Aonia","Antiga Señora da Torre"],["Túnica dourada","Arquimaga"],["Círculo de purificación","Ritual de Fenris"]]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["Dana cóntalle a Fenris a existencia de Kai",false,"Fala de todo menos de Kai"],["Fenris ten poder sobre os lobos",true],["Aonia morreu hai cinco anos",false,"Hai máis de cincuenta"],["Kai é un fantasma",true],["Fenris acepta acompañar a Dana",true],["Dana nunca vira chorar a Kai",true]]},
      {type:"hangman", title:"Palabra oculta", words:[["Compañeiro","Significado de Kai en élfico"],["Fantasma","O que é Kai en realidade"],["Arquimaga","Maga de túnica dourada"],["Aonia","Antiga Señora da Torre"]]}
    ]
  },
  {
    id:"cap10", title:"Cap. 10: O refuxio do bosque", icon:"🛖",
    body:`
    <div class="card"><h3><span class="chip">1</span>A noite do lobishome</h3>
      <p>O Mestre baixa á <b>cociña</b> (por primeira vez en medio século) e pídelle a Maritta que o acompañe.</p>
      <p>No bosque, Fenris vaise <b>transformando</b>: «Nacín enfermo». <b>Ouvea</b> e os lobos obedécenlle. Ao final mándalle a Dana que <b>fuxa</b>.</p>
      <p>Dana levanta un <b>muro de xeo</b> e refúxiase na <b>cabana dos cazadores</b>, rodeada dunha <b>barreira vexetal</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>A historia de Kai</h3>
      <p>Hai máis de <b>500 anos</b>, un mozo granxeiro enfrontouse a un <b>dragón azul</b> con dous coitelos envelenados. O dragón levouno nunha garra; el cravoulle un coitelo e o dragón soltouno. <b>Caeu</b> dende moi alto e morreu aos <b>16 anos</b>. Era Kai.</p>
      <p>Foi enterrado onde despois estivo a <b>granxa</b> de Dana.</p>
      <p>Os espíritos escollérono para ser o «<b>Kai</b>» de Dana: guiala e <b>protexela</b>. Pode estar con ela tantos anos como tiña ao morrer: ese é o seu <b>prazo</b>. E Dana xa ten 16…</p>
      <p>A anciá cega do pobo era unha <b>pantasma</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>A trapela</h3>
      <p>Fenris-lobo entra na cabana. Dana <b>atórdao</b> cun feitizo. Ao caer, o chan soa a <b>oco</b>: hai unha <b>trapela</b> máxica.</p>
      <p>Baixan por unhas escaleiras de <b>mármore</b> ata unha porta enorme con dúas columnas: un <b>templo</b>.</p></div>`,
    quiz:[
      {q:"Que lle pasa a Fenris coa lúa chea?", opts:["Convértese en lobo","Vólvese invisible e moi frío","Dorme","Voa"], a:0, fb:"Fenris é un elfo lobishome."},
      {q:"Onde se refuxian Dana e Kai?", opts:["Na Torre","Na cabana dos cazadores","Nunha cova de ananos baixo a montaña","No pobo"], a:1, fb:"Protexen a cabana cunha barreira vexetal."},
      {q:"Como morreu Kai?", opts:["Dunha enfermidade","Afogado no río da aldea","Caeu dun dragón","Atacado por lobos"], a:2, fb:"O dragón soltouno no aire."},
      {q:"Cal é o «prazo» de Kai?", opts:["Mil anos","Ata que morra o Mestre da Torre","Un día","Os 16 anos que tiña"], a:3, fb:"Por iso queda pouco tempo: Dana xa ten 16."},
      {q:"Que descobren baixo a cabana?", opts:["Unha trapela a un templo","Un tesouro de moedas de ouro","Un túnel á Torre","Unha prisión"], a:0, fb:"Escaleiras de mármore ata un templo."}
    ],
    hard:[
      {q:"Contra que loitou Kai cando estaba vivo?", ans:"Contra un dragón azul", ok:["dragon"]},
      {q:"Cal é a misión de Kai con Dana?", ans:"Guiala e protexela", ok:["protex","proteg","guia","coidar","cuidar"]},
      {q:"Que era a anciá cega do pobo?", ans:"Unha pantasma", ok:["pantasma","fantasma","espirit"]},
      {q:"Que feitizo usa Dana para protexer a cabana?", ans:"Unha barreira vexetal (plantas)", ok:["vexetal","vegetal","planta","arbore","arbol"]}
    ],
    games:[
      {type:"order", title:"A historia de Kai", prompt:"Ordena a historia que conta Kai", items:["Un dragón azul ataca a aldea","Un mozo granxeiro vai loitar contra el","O dragón lévao nunha garra","El crávalle un coitelo","O dragón sóltao e cae","Morre aos dezaseis anos","Volve como o Kai de Dana"]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["Kai morreu hai máis de 500 anos",true],["Kai morreu aos 20 anos",false,"Aos 16"],["Kai foi enterrado onde estaría a granxa de Dana",true],["A anciá cega era unha pantasma",true],["Fenris controla sempre o seu lado lobo",false,"Coa lúa chea pérdese"],["Baixo a cabana hai unha trapela",true]]},
      {type:"memory", title:"Memoria", pairs:[["Dragón","Azul"],["Kai","Morreu aos 16"],["Cabana","Dos cazadores"],["Trapela","Leva ao templo"],["Muro","De xeo"],["Prazo","16 anos"]]}
    ]
  },
  {
    id:"cap11", title:"Cap. 11: Atrapados", icon:"🕳️",
    body:`
    <div class="card"><h3><span class="chip">1</span>O templo da Nai Terra</h3>
      <p>O templo ten unha enorme <b>árbore de ouro</b> con animais e un pequeno <b>pozo</b>. O <b>unicornio</b> toca a auga co corno e <b>desaparece</b>.</p>
      <p>Chegan o <b>Mestre</b>, Maritta e Fenris. O Mestre fala do <b>Pozo dos Reflexos</b>: no fondo hai unha figuriña de <b>cristal</b> de gran poder.</p>
      <p>Dana tenta collela, pero a man <b>atravésaa</b>: é coma un espellismo. O Mestre usounos para chegar ata alí.</p></div>
    <div class="card"><h3><span class="chip">2</span>A prisión máxica</h3>
      <p>O Mestre controla a mente de Dana e mándaa fóra. Logo péchaa con Fenris e Kai nunha <b>prisión máxica</b>: un <b>burato en ningures</b>.</p>
      <p>Fenris conta a súa historia: naceu hai case <b>200 anos</b> na terra dos elfos. Por ser <b>lobishome</b> expulsárono. O Mestre ofreceulle protección na Torre a cambio de <b>manter a raia aos lobos</b>.</p>
      <p>«A Torre é o meu <b>refuxio</b>, pero tamén a miña <b>prisión</b>».</p></div>
    <div class="card"><h3><span class="chip">3</span>O colgante</h3>
      <p>Quen teña a <b>Alma de Cristal</b> controlará o unicornio. O ritual precisa un <b>sacrificio humano</b>: a vítima vai ser <b>Maritta</b>!</p>
      <p>Kai pode saír da prisión. Con moito esforzo leva o <b>colgante</b> de Dana a Maritta e empúxaa ata o punto exacto.</p>
      <p>Maritta rompe o feitizo do Mestre: os ananos resisten a maxia pola súa <b>forte vontade</b>.</p></div>`,
    quiz:[
      {q:"Que hai no centro do templo?", opts:["Unha estatua do Mestre","Unha árbore de ouro","Un dragón","Un trono"], a:1, fb:"Unha árbore de ouro con animais, para a Nai Terra."},
      {q:"Que pasa cando Dana tenta coller a figuriña?", opts:["A man atravésaa","Quéimase a man co cristal","A colle sen problema","Cae ao pozo"], a:0, fb:"Non a pode coller."},
      {q:"Onde os pecha o Mestre?", opts:["Na cociña","Nunha gaiola de ferro","Nunha prisión máxica","No calabozo máis escuro da Torre"], a:2, fb:"Un lugar sen espazo do que non se pode saír camiñando."},
      {q:"Por que expulsaron a Fenris da terra dos elfos?", opts:["Por roubar libros aos elfos","Por ser mago","Por ser moi novo","Por ser lobishome"], a:3, fb:"A súa licantropía rompía a paz dos elfos."},
      {q:"Que leva Kai a Maritta?", opts:["O colgante de Dana","Unha carta","A figuriña de cristal","Un puñal"], a:0, fb:"Así Maritta entende que Dana a necesita."}
    ],
    hard:[
      {q:"Como se chama o pozo do templo?", ans:"Pozo dos Reflexos", ok:["reflexo","reflejo"]},
      {q:"Quen ía ser a vítima do sacrificio?", ans:"Maritta", ok:["maritta"]},
      {q:"Que pacto fixo Fenris co Mestre?", ans:"Manter a raia aos lobos a cambio de protección", ok:["lobo"]},
      {q:"Por que Maritta pode romper o feitizo?", ans:"Porque os ananos teñen moita vontade e resisten a maxia", ok:["vontade","voluntad","inmune","anan","enan","resist"]}
    ],
    games:[
      {type:"tf", title:"Verdadeiro ou falso", items:[["O templo está dedicado á Nai Terra",true],["Dana colle a figuriña de cristal",false,"A man atravésaa"],["O Mestre pecha a Dana nunha prisión máxica",true],["Fenris ten case 200 anos",true],["Kai non pode saír da prisión",false,"Si pode: é un espírito"],["Maritta rompe o feitizo do Mestre",true]]},
      {type:"classify", title:"Quen fai que?", bins:["🧙 O Mestre","👦 Kai","🍲 Maritta"], items:[["Pecha os amigos na prisión",0],["Quere a Alma de Cristal",0],["Prepara un ritual",0],["Sae da prisión máxica",1],["Leva o colgante",1],["Empuxa a Maritta",1],["Rompe o feitizo de parálise",2],["Ía ser sacrificada",2],["Recibe o colgante",2]]},
      {type:"hangman", title:"Palabra oculta", words:[["Reflexos","Pozo dos ..."],["Prisión","A Torre para Fenris"],["Colgante","O que leva Kai a Maritta"],["Sacrificio","O que precisa o ritual"]]}
    ]
  },
  {
    id:"cap12", title:"Cap. 12: O regreso de Aonia", icon:"✨",
    body:`
    <div class="card"><h3><span class="chip">1</span>A historia de Aonia</h3>
      <p>Maritta conta que o Mestre chegou á Torre de <b>neno</b>, pálido e enfermo, nunha tormenta de neve. <b>Aonia</b> criouno coma un <b>fillo</b> e ensinoulle maxia.</p>
      <p>Pero el tiña moita <b>ambición</b>: crían que Aonia tiña o poder do <b>unicornio</b>. O aprendiz <b>traizoouna e matouna</b>.</p>
      <p>Regra das escolas: un aprendiz <b>nunca</b> debe rebelarse contra o seu mestre. Aonia <b>maldiciuno</b> a el e a quen ocupase a Torre. Os <b>lobos</b> convertéronse nos gardiáns.</p></div>
    <div class="card"><h3><span class="chip">2</span>«Abre a Porta»</h3>
      <p>A voz de Aonia pídelle a Dana: «<b>Abre a Porta</b>». Kai explícallo: «<b>A Porta es ti</b>».</p>
      <p>Dana cruza a fronteira entre a vida e a morte e trae a Aonia, que entra no <b>corpo de Maritta</b>. Así os libera da prisión.</p>
      <p>Maritta-Aonia chama ao Mestre polo seu nome: <b>Suren</b>. Aparecen lobos e a maxia do Mestre non funciona. Mira no pozo e berra de <b>terror</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>O tesouro do unicornio</h3>
      <p>O Mestre recupera as forzas e leva a Fenris á Torre.</p>
      <p>Maritta-Aonia fai que Dana mire no pozo: ve o unicornio e unha luz de todas as cores. É a súa <b>propia alma</b>.</p>
      <p>No fondo do pozo <b>non hai nada</b>: só o <b>reflexo da alma</b> de quen mira.</p>
      <p>Dana <b>non quere matar</b> ao Mestre, pero irá á Torre para <b>rescatar a Fenris</b>.</p></div>`,
    quiz:[
      {q:"Como chegou o Mestre á Torre?", opts:["De neno, pálido e enfermo","Xa de vello e moi poderoso","Como rei","Con Fenris"], a:0, fb:"Aonia acolleuno e criouno coma un fillo."},
      {q:"Que lle fixo o Mestre a Aonia?", opts:["Salvouna","Traizoouna e matouna","Casou con ela no pobo","Levouna ao pobo"], a:1, fb:"Por iso Aonia o maldiciu."},
      {q:"Que significa «A Porta es ti»?", opts:["Que debe abrir unha porta de madeira","Que é unha porta de ferro","Que une os vivos e os mortos","Que debe pechar a Torre"], a:2, fb:"Por ser Kin-Shannay é unha porta entre os dous mundos."},
      {q:"En que corpo entra Aonia?", opts:["No de Dana","No de Fenris","No dun lobo das montañas","No de Maritta"], a:3, fb:"Aonia usa o corpo de Maritta para loitar."},
      {q:"Que ve Dana no Pozo dos Reflexos?", opts:["A súa propia alma","Un tesouro de ouro","A cara do Mestre","Ao seu pai"], a:0, fb:"O pozo só reflicte a alma de quen mira."}
    ],
    hard:[
      {q:"Cal é o nome verdadeiro do Mestre?", ans:"Suren", ok:["suren"]},
      {q:"Que regra rompeu o Mestre?", ans:"Un aprendiz nunca debe rebelarse contra o seu mestre", ok:["rebel","contra"]},
      {q:"Que hai de verdade no fondo do pozo?", ans:"Nada: só o reflexo da alma de quen mira", ok:["alma","reflexo","reflejo","nada"]},
      {q:"Para que vai Dana á Torre?", ans:"Para rescatar a Fenris", ok:["fenris"]}
    ],
    games:[
      {type:"order", title:"A historia da Torre", prompt:"Ordena a historia que conta Maritta", items:["Un neno enfermo chega á Torre","Aonia críao coma un fillo","O rapaz vólvese ambicioso","Traizoa e mata a Aonia","Aonia lánzalle unha maldición","Os lobos gardan a Torre","Anos despois volve co título de Mestre"]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["Aonia criou ao Mestre coma un fillo",true],["O Mestre respectou sempre a Aonia",false,"Traizoouna"],["Dana trae a Aonia do mundo dos mortos",true],["Aonia entra no corpo de Fenris",false,"No de Maritta"],["No pozo hai unha figura de cristal de verdade",false,"Só o reflexo da alma"],["Dana quere rescatar a Fenris",true]]},
      {type:"memory", title:"Memoria", pairs:[["Suren","Nome do Mestre"],["A Porta","Dana"],["Aonia","No corpo de Maritta"],["Pozo","Reflexo da alma"],["Maldición","Lobos gardiáns"],["Ambición","Defecto do Mestre"]]}
    ]
  },
  {
    id:"cap13", title:"Cap. 13: A Proba do Lume", icon:"🔥",
    body:`
    <div class="card"><h3><span class="chip">1</span>De volta na Torre</h3>
      <p>O Mestre está no seu estudo. Fenris vixía os lobos dende a fiestra; pensa en deixalos <b>entrar</b>.</p>
      <p>Dana, Kai e Maritta-Aonia aparecen na <b>cociña</b>. Póñense <b>capas de camuflaxe</b> para que o Mestre non os sinta. Kai debe <b>quedar</b> na cociña porque o Mestre nota a súa presenza.</p>
      <p>Soben a pé, sen feitizos, para non ser descubertas.</p></div>
    <div class="card"><h3><span class="chip">2</span>O trato</h3>
      <p>O Mestre atrapa a Kai co conxuro <b>sul'iketh</b>: pecha os espíritos nunha <b>botella</b> para sempre.</p>
      <p>Proponlle un <b>trato</b>: liberará a Kai se Dana traballa para el <b>toda a vida</b> e lle entrega a súa <b>mente</b>.</p>
      <p>Dana <b>acepta</b>: «Kai faría o mesmo por min». Maritta-Aonia desaparece.</p></div>
    <div class="card"><h3><span class="chip">3</span>A proba</h3>
      <p>Na <b>sala de probas</b> o Mestre obriga a Dana a facer a <b>Proba do Lume</b>. Hai unha botella <b>verde</b> cos restos de Kai.</p>
      <p>Durante <b>dúas horas</b> loita contra bólas de lume, demos, un <b>dragón</b> e un <b>cabalo alado de lume</b>.</p>
      <p>Sen forzas, o cabalo achégase e <b>acaríciaa</b>. Dana entende: non había que <b>destruír</b> o lume, senón <b>dominalo</b>. Xa é inmune ao lume. Monta no cabalo: <b>é maga</b>.</p></div>`,
    quiz:[
      {q:"Para que serven as capas de camuflaxe?", opts:["Para ter calor no inverno","Para ocultarse do Mestre","Para voar","Para parecer lobos do bosque"], a:1, fb:"Ocultan a mente e a enerxía máxica."},
      {q:"Para que serve o conxuro sul'iketh?", opts:["Para pechar espíritos","Para facer lume","Para curar as feridas de Fenris","Para abrir portas"], a:0, fb:"O Mestre encerra a Kai nunha botella verde."},
      {q:"Que lle pide o Mestre a Dana a cambio de liberar a Kai?", opts:["O seu amuleto","A súa egua","Traballar para el toda a vida","Que marche da Torre e non volva nunca"], a:2, fb:"Dana sería a súa escrava."},
      {q:"Que criatura aparece ao final da proba?", opts:["Un unicornio","Un lobo xigante de xeo","Unha serpe","Un cabalo alado"], a:3, fb:"O pegaso de lume recoñécea como a súa dona."},
      {q:"Como supera Dana a Proba do Lume?", opts:["Dominando o lume","Fuxindo do círculo","Pedindo axuda a Fenris dende a cadeira","Durmindo"], a:0, fb:"Non había que destruír os seres de lume, senón dominalos."}
    ],
    hard:[
      {q:"Como se chama o conxuro que atrapa espíritos?", ans:"Sul'iketh", ok:["suliketh","sul'iketh","sul iketh"]},
      {q:"Por que acepta Dana o trato do Mestre?", ans:"Para liberar a Kai, porque el faría o mesmo por ela", ok:["kai"]},
      {q:"Onde fai Dana a Proba do Lume?", ans:"Na sala de probas da Torre", ok:["sala"]},
      {q:"Que entende Dana ao final da proba?", ans:"Que había que dominar o lume, non destruílo", ok:["domin","doblegar","controlar"]}
    ],
    games:[
      {type:"order", title:"A Proba do Lume", prompt:"Ordena o que pasa no capítulo 13", items:["Póñense as capas de camuflaxe","Kai queda na cociña","O Mestre atrapa a Kai nunha botella","Dana acepta o trato","Dana entra na sala de probas","Loita contra o lume e un dragón","O cabalo de lume acaríciaa"]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["Kai sobe coas dúas á Torre",false,"Queda na cociña"],["O Mestre encerra a Kai nunha botella verde",true],["Dana rexeita o trato",false,"Acéptao por Kai"],["A proba dura dúas horas",true],["Dana mata ao cabalo alado de lume",false,"O cabalo recoñécea"],["Ao final Dana é inmune ao lume",true]]},
      {type:"pick", title:"Seres de lume", prompt:"Toca contra que loitou Dana na proba", items:[["Bólas de lume",true],["Círculos de chamas",true],["Pequenos demos",true],["Un dragón",true],["Un cabalo alado",true],["Lobos de xeo",false],["Un unicornio",false],["Pantasmas",false]]}
    ]
  },
  {
    id:"cap14", title:"Cap. 14: O adeus", icon:"💔",
    body:`
    <div class="card"><h3><span class="chip">1</span>O pacto e a morte</h3>
      <p>Dana recibe a túnica <b>vermella</b>. O Mestre fai o conxuro: <b>libera a Kai</b> e controla a mente de Dana.</p>
      <p>Dana esperta no mundo dos espíritos: está <b>morta</b>! Por primeira vez pode <b>abrazar</b> a Kai.</p>
      <p>Aonia explícalle que era a <b>única forma</b> de salvala do conxuro. Pero pode <b>volver</b>. Kai pídelle: «<b>Volve. Vive</b>».</p>
      <p>Mentres, Fenris chora por primeira vez en <b>150 anos</b> e decide marchar da Torre.</p></div>
    <div class="card"><h3><span class="chip">2</span>A fin do Mestre</h3>
      <p>Dana <b>revive</b> e finxe seguir morta. Maritta chama á porta cun «recado». Dana ataca ao Mestre e Fenris xa <b>non o protexe</b> dos lobos.</p>
      <p>O Mestre invoca unha <b>serpe</b> xigante, pero <b>Maritta</b> (ela soa) crávalle un <b>puñal</b>. O Mestre foxe escaleiras abaixo e os <b>lobos</b> alcánzano. A <b>maldición</b> cúmprese.</p>
      <p>Os lobos volverán ser lobos normais. Maritta di: «<b>Nunca deixei de ser eu</b>»: deixou entrar a Aonia porque a esperaba.</p></div>
    <div class="card"><h3><span class="chip">3</span>O adeus de Kai</h3>
      <p>Aonia e Kai deben marchar. Kai faille <b>prometer</b> a Dana: «<b>Vive</b>. Vive moitos anos, vive por min a vida que eu non puiden vivir».</p>
      <p>Dana debe recibir o <b>poder do unicornio</b>. Aonia dille que pode axudar a <b>Fenris</b> a controlar o seu lado lobo.</p>
      <p>Kai desaparece. Fenris abraza a Dana e miran o <b>amencer</b>: empeza unha <b>nova etapa</b> no Val dos Lobos.</p></div>`,
    quiz:[
      {q:"Que lle pasa a Dana despois do conxuro do Mestre?", opts:["Convértese en loba","Morre","Queda durmida un ano enteiro","Foxe á granxa"], a:1, fb:"Aonia e Kai a levaron para salvala do conxuro."},
      {q:"Que lle pide Kai a Dana no mundo dos espíritos?", opts:["Que volva e viva","Que quede con el","Que mate ao Mestre","Que esqueza a Fenris"], a:0, fb:"«Volve. Vive.» Aínda non chegou a súa hora."},
      {q:"Quen fere de morte ao Mestre?", opts:["Dana","Fenris, o elfo","Maritta","Aonia"], a:2, fb:"«Quen non mira nunca cara abaixo é home morto»."},
      {q:"Como morre o Mestre?", opts:["Cae ao pozo","Queimado polo lume do dragón","Durmindo","Alcánzano os lobos"], a:3, fb:"A maldición de Aonia cúmprese."},
      {q:"Que lle fai prometer Kai a Dana?", opts:["Que viva intensamente","Que nunca use a maxia","Que volva á granxa","Que se case con Fenris"], a:0, fb:"Que viva por el a vida que el non puido vivir."}
    ],
    hard:[
      {q:"Que lle permite facer a Dana a morte por primeira vez?", ans:"Abrazar a Kai", ok:["abraz","tocar"]},
      {q:"Hai cantos anos que non choraba Fenris?", ans:"150 anos", ok:["150","cento cincuenta","ciento cincuenta"]},
      {q:"Que lle pasará aos lobos agora?", ans:"Volverán ser lobos normais", ok:["normal","montana"]},
      {q:"Que lle promete Dana a Kai?", ans:"Que vivirá", ok:["viv"]}
    ],
    games:[
      {type:"order", title:"O adeus", prompt:"Ordena o final da historia", items:["O Mestre libera a Kai","Dana esperta no mundo dos espíritos","Kai pídelle que volva e viva","Dana revive e finxe estar morta","Maritta crava un puñal ao Mestre","Os lobos alcanzan ao Mestre","Kai e Aonia marchan"]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["Dana pode abrazar a Kai no mundo dos espíritos",true],["Dana queda para sempre no mundo dos mortos",false,"Volve á vida"],["Fenris chora por primeira vez en 150 anos",true],["O Mestre gaña a loita final",false,"Morre"],["Aonia obrigou a Maritta sen pedirlle permiso",false,"Maritta deixouna entrar"],["Kai fai prometer a Dana que vivirá",true]]},
      {type:"match", title:"Quen dixo que?", pairs:[["Kai","Volve. Vive."],["Maritta","Nunca deixei de ser eu"],["Aonia","Era a única forma de salvarte"],["Fenris","Os lobos veñen por ti"],["Dana","A Torre é nosa"]]}
    ]
  },
  {
    id:"epilogo", title:"Epílogo", icon:"🐉",
    body:`
    <div class="card"><h3><span class="chip">1</span>A Señora da Torre</h3>
      <p>Pasou o tempo. Dana é agora a <b>Señora da Torre</b>, que protexe a todos os habitantes do val. Fenris vive con ela.</p>
      <p>Dous homes chegan cunha mula. Un é <b>Nicolás</b>, o neno de pelo roxo do pobo, xa mozo. O outro é un vello desconfiado.</p></div>
    <div class="card"><h3><span class="chip">2</span>O dragón azul</h3>
      <p>Traen os <b>ósos dun dragón azul</b>. Entre as costelas atoparon un <b>puñal</b> vello e oxidado, un coitelo de cociña.</p>
      <p>O dragón caeu do ceo de súpeto. Así Dana sabe que <b>Kai matou o dragón</b>. Bica o puñal con moita tenrura.</p></div>
    <div class="card"><h3><span class="chip">3</span>O final</h3>
      <p>No ceo brilla unha <b>lúa crecente</b> cunha estrela entre os seus picos, coma o <b>amuleto</b> da nai de Dana.</p>
      <p><b>Fenris</b> ouvea e os lobos das montañas <b>respóndenlle</b>. Dana e Fenris sorrín e volven xuntos á Torre.</p></div>`,
    quiz:[
      {q:"Quen é agora a Señora da Torre?", opts:["Maritta","Dana","Aonia","Sara"], a:1, fb:"Dana é a nova Señora da Torre."},
      {q:"Que traen Nicolás e o vello?", opts:["Ósos de dragón e un puñal","Un unicornio","Unha carta da familia de Dana","Comida para Maritta"], a:0, fb:"Os restos do dragón que matou Kai."},
      {q:"Onde estaba o puñal?", opts:["No pozo dos reflexos do templo","Na granxa","Entre as costelas do dragón","Na Torre"], a:2, fb:"Cravado entre as costelas do dragón."},
      {q:"Que descobre Dana co puñal?", opts:["Que o Mestre segue vivo","Que hai máis dragóns","Que Nicolás é un mago","Que Kai matou o dragón"], a:3, fb:"Kai respondeulle á pregunta que se facía."},
      {q:"Que fai Fenris ao final?", opts:["Ouvea cos lobos","Marcha do val","Convértese en humano para sempre","Rompe a Torre"], a:0, fb:"Agora é un Señor dos Lobos."}
    ],
    hard:[
      {q:"Como se chama o mozo que trae os ósos?", ans:"Nicolás", ok:["nicolas"]},
      {q:"De que cor era o dragón?", ans:"Azul", ok:["azul"]},
      {q:"A que se parece a lúa do final?", ans:"Ao amuleto da nai de Dana: lúa cunha estrela", ok:["amuleto","colgante","estrela","estrella"]}
    ],
    games:[
      {type:"tf", title:"Verdadeiro ou falso", items:[["Dana é a Señora da Torre",true],["Nicolás segue sendo un neno",false,"Xa é un mozo"],["O puñal era unha arma de ouro con xoias",false,"Era un coitelo de cociña oxidado"],["Kai matou o dragón",true],["A lúa do final parece o amuleto",true],["Os lobos xa non responden a Fenris",false,"Respóndenlle"]]},
      {type:"hangman", title:"Palabra oculta", words:[["Puñal","Arma atopada nas costelas do dragón"],["Dragón","Animal azul de hai 500 anos"],["Nicolás","Mozo de pelo roxo do pobo"],["Crecente","Como está a lúa do final"]]},
      {type:"memory", title:"Memoria do final", pairs:[["Dana","Señora da Torre"],["Nicolás","Mozo de pelo roxo"],["Puñal","Entre as costelas"],["Dragón","Azul"],["Lúa crecente","Coma o amuleto"],["Fenris","Ouvea cos lobos"]]}
    ]
  }
  ]
});

/* Preguntas para ENTENDER e razoar (en galego).
   Formato: [pregunta, resposta curta, palabras clave válidas, por que] */
addQA("galego", {
  libro: [
    ["Por que é unha novela de fantasía?", "Ten magos, elfos e maxia", ["mag","elf","maxia","magia","unicornio"], "Na fantasía aparecen seres e poderes que non existen."],
    ["Se o narrador sabe o que pensan todos, é...", "Omnisciente", ["omniscient"], "O narrador omnisciente coñece os pensamentos dos personaxes."],
    ["Quen fai o papel de «malo» na historia?", "O Mestre", ["mestre","maestro"], "O Mestre é o antagonista."],
    ["Que cor de túnica leva quen xa é mago?", "Vermella", ["vermella","roja"], "Despois da Proba do Lume, a túnica é vermella."],
    ["Por que só Dana pode ver a Kai?", "Porque é Kin-Shannay", ["kin","shannay","porta"], "Os Kin-Shannay ven os espíritos."]
  ],
  cap1: [
    ["Por que a familia cre que Dana minte?", "Porque non ven a Kai", ["non ven","no ven","ver","existe"], "Só Dana pode ver a Kai."],
    ["Por que Kai sempre aparece cando Dana está soa?", "Para que non a crean tola", ["tola","loca","soa","sola","problema"], "Kai sabe que ninguén máis o pode ver."],
    ["Cantos anos pasan dende que coñece a Kai ata o celeiro?", "Dous anos", ["dous","dos","2"], "Coñéceo aos 6 e ten 8 no celeiro."],
    ["Por que a comadroa calou o que viu?", "Porque era algo estraño", ["estran","raro","medo","miedo"], "Viu algo especial nos ollos de Dana: os seus poderes."],
    ["Por que Kai non deixa que o toquen?", "Porque non ten corpo", ["corpo","cuerpo","plano","espirit"], "Kai existe noutro plano."]
  ],
  cap2: [
    ["Por que as nenas desconfían de Dana?", "Porque é diferente", ["diferent","estrana","sola","soa","fala soa"], "Sempre andaba soa e «falaba soa»."],
    ["Por que Kai non quere que Dana desexe ser bruxa?", "Porque é perigoso", ["perigos","peligros"], "Desexar mal aos demais é perigoso."],
    ["Por que a familia pasou de 12 a 9?", "Pola epidemia", ["epidemia","enfermidade"], "Morreron unha irmá, un irmán e o avó."],
    ["Que demostra que o vello é especial?", "Que choveu como dixo", ["chov","llov","chuvia","lluvia"], "Predixo a chuvia nun día sen nubes."],
    ["Por que se asusta Dana cando o vello mira a Kai?", "Porque parece que o ve", ["ve","kai"], "Ata entón ninguén máis podía velo."]
  ],
  cap3: [
    ["Por que cre Dana que a van casar?", "Porque negocian cos seus pais", ["negoci","pais","padres","diñeiro","dinero"], "Era o habitual cando se pactaban matrimonios."],
    ["Por que o Mestre permite que Kai vaia?", "Porque sabe que está alí", ["sabe","ve","kai"], "O Mestre sente onde está Kai."],
    ["Que lle lembra a Dana o nome da egua?", "O amuleto da súa nai", ["amuleto","nai","madre","colgante"], "Lunaestrella: a lúa e a estrela do amuleto."],
    ["Por que desconfía a xente do pobo do Mestre?", "Teñen medo da súa maxia", ["medo","miedo","maxia","magia","mago"], "A xente sinxela teme o que non entende."],
    ["Por que Dana se alegra ao chegar á Torre?", "Non ten que casar", ["casar"], "Vai ser aprendiza, non esposa."]
  ],
  cap4: [
    ["Por que a Torre parece menos labiríntica despois?", "Os pisos repítense", ["repit","igual","escaleira","escalera"], "A escaleira de caracol vertebra todos os pisos."],
    ["Por que Maritta desconfía da maxia?", "Porque é anana", ["anana","enana","anano","enano"], "Os ananos só cren no que poden tocar."],
    ["Por que a árbore estaba enferma?", "Por unha praga de térmitas", ["termita","praga"], "Dana descóbreo anos despois de escoitala."],
    ["Por que non debe saír de noite ao bosque?", "Polos lobos", ["lobo"], "A noite é a hora dos lobos."],
    ["Por que hai tantas camas baleiras?", "Malos tempos para a maxia", ["malos tempos","malos tiempos","maxia","magia"], "Só quedan dous aprendices."]
  ],
  cap5: [
    ["Por que Dana evita a Kai?", "Está namorada e ten medo", ["namor","enamor","medo","miedo"], "Non pode tocar a quen quere."],
    ["Por que Maritta pensa no elfo?", "Non pode ver a Kai", ["non pode ver","no puede ver","kai"], "Para Maritta, Kai non existe."],
    ["Por que Dana pode ver a través da dama?", "Porque é unha imaxe", ["imaxe","imagen","espirit","fantasma"], "Só é unha imaxe enviada dende lonxe."],
    ["Por que Dana sae chamuscada do estudo?", "Non se concentra", ["concentr","dama","vision"], "As visións da dama distráena."],
    ["Por que o Mestre podería descubrir o segredo?", "Le os pensamentos", ["pensamento","pensamiento","mente","mentalista"], "É mentalista."]
  ],
  cap6: [
    ["Por que Dana pensa nos pensamentos ao pedir o día libre?", "Para enganar ao Mestre", ["engan","mestre","maestro","ocult"], "O Mestre le a mente."],
    ["Por que a xente do pobo foxe de Dana?", "Pensa que é bruxa", ["bruxa","bruja","torre"], "Temen aos habitantes da Torre."],
    ["Por que Nicolás pensa que Dana está tola?", "Fala cun banco baleiro", ["banco","nadie","ninguen","soa","sola"], "Non podía ver á anciá cega."],
    ["Por que o Mestre sorrí ao ver a Dana falando soa?", "Agarda que busque o unicornio", ["unicornio","plan","busca"], "El tamén quere o segredo do unicornio."],
    ["Se Dana se pregunta se está tola, está tola?", "Non", ["non","no"], "Os tolos non son conscientes da súa tolemia."]
  ],
  cap7: [
    ["Por que Dana perde o unicornio?", "Pola súa imprudencia", ["imprudenc","corre","presa"], "Corre sen pensar e deixa atrás aos amigos."],
    ["Por que os feitizos non vencen os lobos?", "Están enfeitizados", ["enfeitiz","hechiz","maldic"], "Son lobos dunha maldición."],
    ["Por que o Mestre manda a Fenris?", "Porque os lobos non o atacan", ["lobo","control"], "Fenris ten poder sobre os lobos."],
    ["Que demostra que Kai é real?", "Salvou a Dana", ["salv","rescat"], "Un invento non a podería rescatar."],
    ["Por que Fenris non vai á Torre con Dana?", "Vai transformarse", ["transform","lobo","lua","luna"], "Era noite de lúa chea."]
  ],
  cap8: [
    ["Por que o Mestre non castiga a Dana?", "Xa ten castigo abondo", ["castigo","remors","culpa"], "O susto e os remorsos son o castigo."],
    ["Por que Dana ten lagoas na memoria?", "Borráronlla", ["borr","mestre","maestro"], "Alguén non quería que lembrase."],
    ["Por que Kai non quere volver ao bosque?", "Non vale a pena morrer", ["morr","vida","perig","peligr"], "Nada vale tanto como dar a vida."],
    ["Por que está Fenris tan canso?", "Pola noite de lúa chea", ["lua","luna","transform","lobo"], "A transformación quitoulle as forzas."],
    ["Por que Dana decide esperar?", "Quere estar preparada", ["prepar","maga"], "Quere ser maga antes de volver."]
  ],
  cap9: [
    ["Por que Dana recorda agora o que esqueceu?", "O feitizo pasou", ["feitizo","hechizo","eterno","pasou"], "Os feitizos non son eternos."],
    ["Por que Kai non quere que Fenris fale?", "Non quere que saiba que é un fantasma", ["fantasma","segredo","secreto"], "Dóelle que Dana coñeza o seu segredo."],
    ["Por que o Mestre trouxo a Dana á Torre?", "Por ser Kin-Shannay", ["kin","shannay","poder","porta"], "Os seus poderes eran útiles para o seu plan."],
    ["Por que Fenris fai un círculo de purificación?", "Para atrasar a transformación", ["transform","atras","lobo"], "Retrasa os efectos da lúa chea."],
    ["Por que Dana deduce que Kai é un fantasma?", "Fala cos mortos coma Aonia", ["aonia","mort","kin"], "Se ve a Aonia, morta, tamén ve a Kai."]
  ],
  cap10: [
    ["Por que os lobos obedecen a Fenris?", "É un lobishome", ["lobishome","lobo","xefe","jefe"], "Fenris convértese no xefe da manada."],
    ["Por que Kai di que a vida é preciosa?", "Perdeuna moi novo", ["perd","morr","novo","joven"], "Morreu aos 16 por unha imprudencia."],
    ["Por que Kai puido ir á Torre?", "Permitiullo o Mestre", ["mestre","maestro"], "Sen el, quedaría atado á granxa."],
    ["Por que Dana se asusta co prazo de Kai?", "Xa ten 16 anos", ["16","dezaseis","dieciseis"], "O tempo de Kai está a acabar."],
    ["Por que a trapela non se abre ao primeiro?", "É máxica", ["maxic","magic"], "Dana usa unha runa de apertura."]
  ],
  cap11: [
    ["Por que o Mestre chegou ao templo?", "Usou a Fenris como espía", ["fenris","espia","segu"], "Seguiunos a través de Fenris."],
    ["Por que Fenris obedece ao Mestre?", "Para controlar o seu lado lobo", ["lobo","transform","protec"], "A Torre protéxeo das transformacións."],
    ["Por que Kai pode saír da prisión?", "Non ten corpo", ["corpo","cuerpo","espirit","material"], "Non está suxeito ás leis da materia."],
    ["Por que lle custa a Kai coller o colgante?", "Perde forzas", ["forza","fuerza","prazo"], "Achégase a hora da súa partida."],
    ["Por que Maritta resiste o feitizo?", "Os ananos son inmunes", ["inmun","vontade","voluntad","anan","enan"], "Teñen unha vontade moi forte."]
  ],
  cap12: [
    ["Por que Aonia maldiciu ao Mestre?", "Porque a traizoou", ["traiz","trai","mat"], "Un aprendiz nunca debe rebelarse contra o seu mestre."],
    ["Por que Aonia precisa o corpo de Maritta?", "Para loitar no mundo dos vivos", ["loitar","luchar","corpo","cuerpo","vivos"], "Un espírito necesita un corpo."],
    ["Por que o Mestre berra ao mirar no pozo?", "Ve a súa alma escura", ["alma"], "O pozo reflicte a alma de quen mira."],
    ["Por que Dana ve cousas fermosas no pozo?", "Ten unha alma boa", ["alma","boa","buena"], "O pozo amosa o que hai dentro de cada un."],
    ["Por que Dana vai á Torre?", "Para salvar a Fenris", ["fenris"], "Non quere matar, pero si axudar ao seu amigo."]
  ],
  cap13: [
    ["Por que Kai queda na cociña?", "O Mestre sentiría a súa presenza", ["sent","presenz","presenc"], "O Mestre pode notar onde está Kai."],
    ["Por que soben a pé sen feitizos?", "Para non ser descubertas", ["descub","ocult","notar"], "Calquera feitizo as delataría."],
    ["Por que acepta Dana o trato?", "Para liberar a Kai", ["kai","liber"], "Kai faría o mesmo por ela."],
    ["Por que o Mestre quere que Dana sexa maga?", "Para ter máis poder", ["poder","maga"], "Controlar unha maga é mellor ca unha aprendiza."],
    ["Por que o cabalo de lume non a ataca?", "Dana xa domina o lume", ["domin","inmun"], "Non había que destruír o lume, senón dominalo."]
  ],
  cap14: [
    ["Por que Aonia e Kai levan a Dana á morte?", "Para salvala do conxuro", ["salv","conxuro","conjuro","mestre"], "Era a única forma de liberala."],
    ["Por que Dana volve á vida?", "Kai pídello", ["kai","vive","volve"], "Aínda non chegara a súa hora."],
    ["Por que o Mestre non mira a Maritta?", "Non mira cara abaixo", ["abaixo","abajo","baixa","baja"], "Quen non mira cara abaixo é home morto."],
    ["Por que os lobos alcanzan ao Mestre?", "Cúmprese a maldición", ["maldic"], "A maldición de Aonia perseguíao."],
    ["Por que Kai pide a Dana que viva?", "Porque el non puido", ["non puido","no pudo","morr","vida"], "Kai morreu moi novo."]
  ],
  epilogo: [
    ["Por que Dana bica o puñal?", "Era de Kai", ["kai"], "Era o coitelo co que Kai feriu ao dragón."],
    ["Que responde o puñal á pregunta de Kai?", "Que matou o dragón", ["mat","dragon"], "Kai preguntábase se matara o dragón."],
    ["Por que Fenris xa non sofre tanto coa lúa?", "Aprendeu a controlarse", ["control","domin","dana"], "Dana axudouno a controlar o seu lado lobo."],
    ["Por que a lúa do final é especial?", "Parece o amuleto", ["amuleto","colgante"], "Lúa e estrela, coma o regalo da nai."]
  ]
});

addFrases("galego", {
  libro: ["El valle de los lobos é unha novela de fantasía de Laura Gallego.", "Dana é unha Kin-Shannay e pode ver os espíritos.", "O Mestre é o Amo da Torre e le os pensamentos."],
  cap1: ["Dana naceu nunha noite de vento moi forte.", "Aos seis anos coñeceu a Kai, un neno loiro de ollos verdes.", "Ninguén pode ver a Kai, só Dana."],
  cap2: ["As nenas chamáronlle bruxa e tiráronlle pedras.", "Un vello de túnica gris chegou ao pozo nun cabalo branco.", "O vello dixo que esa noite chovería, e choveu."],
  cap3: ["A nai deulle un amuleto cunha lúa e unha estrela.", "Dana chamou Lunaestrella á súa egua baia.", "A Torre é unha Escola de Alta Feiticería no Val dos Lobos."],
  cap4: ["Na biblioteca Dana coñeceu a Fenris, un elfo.", "Maritta é a anana cociñeira da Torre.", "Dana nunca debe estar no bosque de noite."],
  cap5: ["Dana aprobou o Libro da Auga e levou a túnica violeta.", "Unha dama de túnica dourada pediulle que buscase o unicornio.", "Dana está namorada de Kai pero non pode tocalo."],
  cap6: ["Todos os magos buscan un unicornio polo seu corno.", "A dama deulle unha pista: plenilunio.", "Os tolos non saben que están tolos."],
  cap7: ["Na lúa chea Dana viu o unicornio bebendo nun regato.", "Os lobos volvían á vida despois dos feitizos.", "Fenris salvou a Dana cuns espectros de cans."],
  cap8: ["Dana durmiu cinco días despois da noite dos lobos.", "Se o unicornio é o guía, os lobos son os centinelas.", "Nada vale tanto como para dar a vida por iso."],
  cap9: ["Kai é unha palabra élfica que significa compañeiro.", "Aonia era a antiga Señora da Torre.", "Dana descubriu que Kai é un fantasma."],
  cap10: ["Fenris convértese en lobo coa lúa chea.", "Kai morreu aos dezaseis anos loitando contra un dragón.", "Baixo a cabana había unha trapela que levaba a un templo."],
  cap11: ["No templo había unha árbore de ouro e un pozo.", "O Mestre pechounos nunha prisión máxica.", "A Torre é o refuxio de Fenris pero tamén a súa prisión."],
  cap12: ["O Mestre traizoou e matou a Aonia.", "A Porta es ti, díxolle Kai a Dana.", "No Pozo dos Reflexos Dana viu a súa propia alma."],
  cap13: ["O Mestre atrapou a Kai nunha botella verde.", "Dana aceptou o trato para liberar a Kai.", "Na Proba do Lume había que dominar o lume, non destruílo."],
  cap14: ["Kai pediulle a Dana que volvese e vivise.", "Maritta cravoulle un puñal ao Mestre.", "Os lobos alcanzaron ao Mestre e cumpriuse a maldición."],
  epilogo: ["Dana é agora a Señora da Torre.", "Nicolás trouxo os ósos dun dragón azul.", "Fenris ouveou e os lobos respondéronlle."]
});
