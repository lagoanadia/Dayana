/* Asignatura: Historia (Xeografía e Historia, en galego como o libro). Tema 2: O relevo */
registerSubject({
  id:"historia", name:"Historia", icon:"🏛️", color:"var(--teal)", colorD:"#1f9a9a",
  sections:[
  {
    id:"formas", title:"As formas do relevo", icon:"⛰️",
    body:`
    <div class="card"><h3><span class="chip">1</span>Que é o relevo?</h3>
      <p>O conxunto de formas que presenta a superficie terrestre constitúe o <b>relevo</b>.</p>
      <p>O relevo <b>modifícase constantemente</b>: ás veces tan lentamente que non o apreciamos nunha vida, e outras de maneira <b>brusca</b>, como nun <b>terremoto</b> ou nunha <b>erupción volcánica</b>.</p>
      <p>Conceptos clave do tema: <b>morfoloxía</b>, <b>cambio</b> e <b>recurso</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Formas do relevo continental</h3>
      <ul><li><b>Montañas</b>: terreos elevados con fortes pendentes. Agrúpanse en <b>serras</b>, <b>sistemas</b> ou <b>cordilleiras</b>. Os terreos entre montañas son os <b>vales</b>, que adoitan estar percorridos por ríos.</li>
      <li><b>Chairas</b>: terreos <b>planos</b> de pouca altitude, na costa ou no interior.</li>
      <li><b>Mesetas</b>: terreos chans situados a <b>maior altitude</b> ca as chairas.</li>
      <li><b>Depresións</b>: terreos a <b>menor altitude</b> ca as terras que os rodean, incluso por <b>debaixo do nivel do mar</b>.</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>Formas do relevo costeiro</h3>
      <p>A <b>costa</b> ou <b>litoral</b> é a zona de contacto entre a terra e o mar.</p>
      <ul><li><b>Península</b>: porción de terra rodeada de auga por todas as partes <b>menos por unha</b>, chamada <b>istmo</b>.</li>
      <li><b>Illa</b>: porción de terra rodeada de auga <b>por todas as partes</b>. Un conxunto de illas próximas forma un <b>arquipélago</b>.</li>
      <li><b>Cabo</b>: parte da costa que <b>entra no mar</b>.</li>
      <li><b>Golfo</b>: <b>entrada de mar</b> na terra. Se é pequeno chámase <b>baía</b>; as <b>calas</b> e <b>enseadas</b> son aínda máis pequenas.</li></ul>
      <p>Tamén son formas costeiras as <b>praias</b> e os <b>acantilados</b>.</p></div>
    <div class="card"><h3><span class="chip">4</span>Formas do relevo submarino</h3>
      <ul><li><b>Plataforma continental</b>: zona lixeiramente inclinada que descende ata uns <b>200 metros</b> de profundidade. Remata no <b>noiro continental</b>, unha zona de forte pendente cara ás grandes profundidades.</li>
      <li><b>Chaira abisal</b>: entre uns <b>3.000 e 7.000 metros</b>. É o fondo mariño. Percórrena as <b>dorsais oceánicas</b>, grandes cordilleiras mergulladas cuxas cimas poden formar illas.</li>
      <li><b>Foxas mariñas</b>: profundas e extensas fendas. A máis profunda é a <b>foxa Challenger</b>, no océano <b>Pacífico</b>, con máis de <b>10.000 m</b>.</li></ul></div>`,
    quiz:[
      {q:"Que é unha chaira?", opts:["Un terreo elevado con fortes pendentes","Un terreo plano de pouca altitude","Unha entrada de mar","Unha fenda no fondo do mar"], a:1, fb:"As chairas son planas e baixas."},
      {q:"En que se diferencia unha meseta dunha chaira?", opts:["A meseta está a maior altitude","A meseta ten moitas pendentes e picos","A meseta está baixo o mar","Non hai ningunha diferenza"], a:0, fb:"Ambas son chás, pero a meseta está máis alta."},
      {q:"Como se chama a terra rodeada de auga por todas as partes?", opts:["Península","Cabo","Illa","Istmo"], a:2, fb:"A península está unida á terra polo istmo; a illa non."},
      {q:"Que é un golfo?", opts:["Unha parte da costa que entra no mar","Unha montaña mergullada","Un terreo baixo o nivel do mar","Unha entrada de mar na terra"], a:3, fb:"Se é pequeno chámase baía."},
      {q:"Ata que profundidade baixa a plataforma continental?", opts:["Uns 200 metros","Uns 10.000 metros","Uns 3 metros","Uns 7.000 metros de fondo"], a:0, fb:"Logo vén o noiro continental."},
      {q:"Onde está a foxa Challenger?", opts:["No Atlántico","No Pacífico","No Mediterráneo","No Índico, preto da India"], a:1, fb:"É a máis profunda: máis de 10.000 m."}
    ],
    hard:[
      {q:"Como se chama a franxa de terra que une unha península co continente?", ans:"Istmo", ok:["istmo"]},
      {q:"Como se chama un conxunto de illas próximas?", ans:"Arquipélago", ok:["arquipelago","archipielago"]},
      {q:"Que terreos están a menor altitude ca as terras que os rodean?", ans:"As depresións", ok:["depresion"]},
      {q:"Como se chaman as grandes cordilleiras mergulladas da chaira abisal?", ans:"Dorsais oceánicas", ok:["dorsal"]}
    ],
    games:[
      {type:"classify", title:"Continental, costeiro ou submarino?", bins:["🏔️ Continental","🏖️ Costeiro","🌊 Submarino"], items:[["Montaña",0],["Val",0],["Meseta",0],["Chaira",0],["Península",1],["Cabo",1],["Golfo",1],["Praia",1],["Acantilado",1],["Plataforma continental",2],["Chaira abisal",2],["Foxa oceánica",2],["Dorsal",2]]},
      {type:"match", title:"Une cada forma", pairs:[["Península","Rodeada de auga menos por unha parte"],["Illa","Rodeada de auga por todas as partes"],["Cabo","Parte da costa que entra no mar"],["Golfo","Entrada de mar na terra"],["Meseta","Terreo chan a gran altitude"],["Depresión","Máis baixa ca o que a rodea"]]},
      {type:"order", title:"Do máis grande ao máis pequeno", prompt:"Ordena as entradas de mar da máis grande á máis pequena", items:["Golfo","Baía","Enseada ou cala"]}
    ]
  },
  {
    id:"mundo", title:"O relevo do mundo", icon:"🗺️",
    body:`
    <div class="card"><h3><span class="chip">1</span>Como se le un mapa de relevo?</h3>
      <p>Un <b>mapamundi de relevo</b> representa as principais formas do relevo continental e costeiro do planeta.</p>
      <ul><li>A <b>altimetría</b> expresa con cores a altitude: os tons <b>morados</b> indican as terras <b>máis elevadas</b>; os <b>amarelos, laranxas e marróns</b>, as altitudes <b>intermedias</b>; e os tons <b>verdes</b>, as terras <b>máis baixas</b>.</li>
      <li>A <b>rotulación</b> son os textos escritos sobre o mapa.</li></ul></div>
    <div class="card"><h3><span class="chip">2</span>Europa e Asia</h3>
      <p><b>Europa</b>: os principais sistemas montañosos están no sur: <b>Pireneos</b>, <b>Alpes</b>, <b>Cárpatos</b> e <b>Cáucaso</b>. A <b>Gran Chaira Europea</b> vai desde o océano Atlántico ata os <b>Montes Urais</b>. Hai moitas penínsulas (<b>escandinava</b>, <b>balcánica</b>, <b>itálica</b>) e illas (Sicilia, Creta, Sardeña).</p>
      <p><b>Asia</b>: o <b>Himalaia</b> é a cordilleira máis elevada do mundo e o <b>Everest</b>, o pico de maior altitude. O <b>Tíbet</b> é a meseta máis alta do mundo. Hai grandes penínsulas (Anatolia, arábiga, Indostán) e golfos (<b>Pérsico</b>, Bengala).</p></div>
    <div class="card"><h3><span class="chip">3</span>América</h3>
      <p>Os sistemas montañosos máis elevados percorren o <b>oeste</b>: <b>Montañas Rochosas</b>, Serra Madre e cordilleira dos <b>Andes</b>.</p>
      <p>Mesetas: o <b>altiplano andino</b> e o <b>Mato Grosso</b>. Dúas grandes chairas: unha ao norte, percorrida polo río <b>Mississippi</b>, e outra ao sur, polo <b>Amazonas</b>.</p>
      <p>Na costa destacan a illa de <b>Groenlandia</b> e as penínsulas do Labrador, Florida, Iucatán e Baixa California.</p></div>
    <div class="card"><h3><span class="chip">4</span>África, Oceanía e Antártida</h3>
      <p><b>África</b>: a cordilleira do <b>Atlas</b> e os montes <b>Drakensberg</b>. Extensas mesetas (de Darfur, de Bié). Na costa, a península de <b>Somalia</b> e o golfo de <b>Guinea</b>.</p>
      <p><b>Oceanía</b>: o principal sistema montañoso é a <b>Gran Cordilleira Divisoria</b>, en Australia. Hai miles de pequenas illas, pero tamén <b>Australia</b>, a <b>maior illa do mundo</b>.</p>
      <p><b>Antártida</b>: a maior parte do relevo está cuberto por <b>xeo e neve</b>.</p></div>`,
    quiz:[
      {q:"Que cor indica as terras máis elevadas nun mapa de relevo?", opts:["Verde","Morado","Azul","Amarelo"], a:1, fb:"Morados = máis altas; verdes = máis baixas."},
      {q:"Cal é a cordilleira máis elevada do mundo?", opts:["O Himalaia","Os Alpes","Os Andes","Os Pireneos"], a:0, fb:"Está en Asia e nela está o Everest."},
      {q:"Cal é a meseta máis alta do mundo?", opts:["O Mato Grosso","O altiplano andino","O Tíbet","A meseta de Darfur"], a:2, fb:"O Tíbet, en Asia."},
      {q:"Ata onde chega a Gran Chaira Europea?", opts:["Ata os Pireneos","Ata o Cáucaso e o mar Negro","Ata Sicilia","Ata os Urais"], a:3, fb:"Vai do Atlántico aos Urais."},
      {q:"Que río percorre a gran chaira do sur de América?", opts:["O Amazonas","O Mississippi","O Nilo","O Miño"], a:0, fb:"O Mississippi percorre a do norte."},
      {q:"Cal é a maior illa do mundo segundo o libro?", opts:["Groenlandia","Australia","Madagascar","Sicilia"], a:1, fb:"Australia, en Oceanía."}
    ],
    hard:[
      {q:"Como se chama o pico de maior altitude do mundo?", ans:"O Everest", ok:["everest"]},
      {q:"Nomea un sistema montañoso do sur de Europa.", ans:"Pireneos, Alpes, Cárpatos ou Cáucaso", ok:["pireneo","alpe","carpato","caucaso"]},
      {q:"Que cordilleira percorre o oeste de América do Sur?", ans:"A cordilleira dos Andes", ok:["andes"]},
      {q:"Que cobre a maior parte do relevo da Antártida?", ans:"Xeo e neve", ok:["xeo","neve","hielo","nieve"]}
    ],
    games:[
      {type:"classify", title:"De que continente é?", bins:["🇪🇺 Europa","🌏 Asia","🌎 América","🌍 África"], items:[["Alpes",0],["Pireneos",0],["Montes Urais",0],["Himalaia",1],["Tíbet",1],["Everest",1],["Andes",2],["Montañas Rochosas",2],["Amazonas",2],["Atlas",3],["Drakensberg",3],["Golfo de Guinea",3]]},
      {type:"match", title:"Récords do relevo", pairs:[["Himalaia","Cordilleira máis elevada"],["Everest","Pico máis alto"],["Tíbet","Meseta máis alta"],["Australia","Maior illa do mundo"],["Foxa Challenger","Lugar máis profundo"]]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["Os tons verdes indican as terras máis baixas",true],["Os Andes están no leste de América",false,"Están no oeste"],["O Mississippi percorre a chaira do norte de América",true],["O Atlas está en Europa",false,"Está en África"],["Oceanía ten miles de pequenas illas",true],["A rotulación son os textos escritos no mapa",true]]}
    ]
  },
  {
    id:"placas", title:"Tectónica de placas: pregamentos e fallas", icon:"🧩",
    body:`
    <div class="card"><h3><span class="chip">1</span>A teoría da tectónica de placas</h3>
      <p>A superficie terrestre está sempre <b>movéndose</b> de forma case imperceptible. Onde agora hai montañas, hai millóns de anos puido haber chairas.</p>
      <p>Segundo a <b>teoría da tectónica de placas</b>, a codia terrestre está formada por <b>placas tectónicas</b> de distintos tamaños e poucos quilómetros de espesor, en <b>continuo movemento</b> polas <b>forzas internas</b> da Terra, coma as pezas dun <b>crebacabezas</b>.</p>
      <p>As placas <b>non coinciden</b> cos continentes: unha placa pode ter terras emerxidas e terras mergulladas baixo os océanos.</p></div>
    <div class="card"><h3><span class="chip">2</span>Como se moven as placas?</h3>
      <p>As placas <b>sepáranse</b>, <b>escorregan</b> unhas sobre outras ou <b>chocan</b>. Ao chocar, unha placa pode escorregar debaixo doutra, ou a colisión pode formar grandes <b>cordilleiras</b>.</p>
      <p>Nas zonas de contacto de placas son frecuentes os <b>terremotos</b> e os <b>volcáns</b>.</p>
      <p>Algunhas placas: Euroasiática, Africana, Norteamericana, Suramericana, Pacífica, Indoaustraliana, Antártica, de Nazca…</p></div>
    <div class="card"><h3><span class="chip">3</span>Os pregamentos</h3>
      <p>Cando as forzas internas actúan sobre materiais <b>pouco ríxidos</b>, a superficie <b>ondúlase</b> e fórmanse <b>dobramentos</b> ou <b>pregamentos</b>.</p>
      <ul><li>Se a dobra ten forma <b>convexa</b> (cara arriba) chámase <b>anticlinal</b>.</li>
      <li>Se ten forma <b>cóncava</b> (cara abaixo) chámase <b>sinclinal</b>.</li></ul>
      <p>Ás veces as dobras son enormes e forman grandes cordilleiras, como o <b>Himalaia</b>, que naceu ao chocaren dúas placas.</p></div>
    <div class="card"><h3><span class="chip">4</span>As fallas</h3>
      <p>Cando as forzas actúan sobre materiais <b>ríxidos</b>, a codia <b>fende</b> e fractúrase en bloques. Estas fracturas son as <b>fallas</b>.</p>
      <p>Uns bloques <b>elévanse</b> (forman montañas e mesetas) e outros <b>afúndense</b> (forman <b>vales tectónicos</b>, como o <b>Gran Val do Rift</b>).</p></div>
    <div class="card example"><h3><span class="chip">★</span>A deriva continental</h3>
      <p>A principios do <b>século XX</b> formulouse a teoría da <b>deriva continental</b>: hai uns <b>200 millóns de anos</b> existía un só bloque continental, <b>Panxea</b>, e un único océano, o <b>mar de Tetis</b>.</p>
      <p>Panxea foise fracturando en placas, que se desprazaron moi lentamente sobre o <b>manto</b> ata formar os continentes e océanos actuais.</p></div>`,
    quiz:[
      {q:"De que está formada a codia terrestre segundo a tectónica de placas?", opts:["Dun só bloque inmóbil e moi duro","De placas que se moven","De auga e xeo","De volcáns apagados"], a:1, fb:"As placas móvense polas forzas internas."},
      {q:"Coinciden as placas cos continentes?", opts:["Non: teñen terra e mar","Si, cada continente é unha placa distinta","Só en Europa","Só as pequenas"], a:0, fb:"Unha placa pode ter terras emerxidas e mergulladas."},
      {q:"Que se forma cando as forzas actúan sobre materiais pouco ríxidos?", opts:["Fallas","Volcáns","Pregamentos","Praias e acantilados"], a:2, fb:"A superficie ondúlase: pregamentos ou dobramentos."},
      {q:"Un pregamento con forma convexa chámase...", opts:["Sinclinal","Falla","Val tectónico","Anticlinal"], a:3, fb:"Anticlinal = convexo, cara arriba."},
      {q:"Que son as fallas?", opts:["Fracturas da codia","Ondas dos pregamentos","Ríos mergullados baixo terra","Volcáns extinguidos"], a:0, fb:"Pasan cando os materiais son ríxidos."},
      {q:"Como se chamaba o único continente de hai 200 millóns de anos?", opts:["Tetis","Panxea","Atlántida","Eurasia"], a:1, fb:"O océano era o mar de Tetis."}
    ],
    hard:[
      {q:"Como se chama un pregamento de forma cóncava?", ans:"Sinclinal", ok:["sinclinal"]},
      {q:"Que gran val tectónico se formou por fallas?", ans:"O Gran Val do Rift", ok:["rift"]},
      {q:"Como se chamaba o único océano que rodeaba Panxea?", ans:"O mar de Tetis", ok:["tetis"]},
      {q:"Que cordilleira se formou polo choque de dúas placas?", ans:"O Himalaia", ok:["himalaia","himalaya"]}
    ],
    games:[
      {type:"classify", title:"Pregamento ou falla?", bins:["〰️ Pregamento","⚡ Falla"], items:[["Materiais pouco ríxidos",0],["A superficie ondúlase",0],["Anticlinal",0],["Sinclinal",0],["Materiais ríxidos",1],["A codia fende en bloques",1],["Bloque levantado e afundido",1],["Gran Val do Rift",1]]},
      {type:"order", title:"A historia dos continentes", prompt:"Ordena do máis antigo ao actual", items:["Hai 225 millóns de anos: Panxea","Hai 135 millóns de anos","Hai 65 millóns de anos","Na actualidade"]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["As placas están sempre en movemento",true],["O movemento das placas nótase cada día",false,"É case imperceptible"],["Nas zonas de contacto de placas hai terremotos e volcáns",true],["O sinclinal ten forma convexa",false,"É cóncavo"],["A deriva continental formulouse no século XX",true],["Os bloques afundidos forman montañas",false,"Forman vales tectónicos"]]}
    ]
  },
  {
    id:"volcans", title:"Volcáns e terremotos", icon:"🌋",
    body:`
    <div class="card"><h3><span class="chip">1</span>Os volcáns</h3>
      <p>Os <b>volcáns</b> son <b>fendas na codia</b> terrestre polas que se expulsan materiais do interior a elevadas temperaturas. Fórmanse pola acción das <b>forzas internas</b>, por exemplo, polo <b>choque de dúas placas</b>.</p>
      <p>Localízanse nas <b>zonas de contacto das placas</b>. A maioría das erupcións prodúcense no <b>fondo submarino</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Estados dos volcáns</h3>
      <ul><li><b>Activos</b>: en actividade permanente; entran en erupción cada certo tempo. Ex.: o <b>Popocatépetl</b> (México), varias explosións en 2020.</li>
      <li><b>Inactivos ou dormentes</b>: sen actividade durante varios centos de anos. Ex.: o <b>Mauna Kea</b> (Hawai), última erupción hai uns 4.500 anos.</li>
      <li><b>Extinguidos</b>: sen actividade durante varios miles de anos. Ex.: o <b>Kilimanxaro</b> (Tanzania), hai uns 360.000 anos.</li></ul>
      <p>As erupcións modifican o relevo: os materiais arrefrían e forman <b>conos volcánicos</b>, que parecen montañas, ou mesmo <b>illas</b>, como as <b>Canarias</b> ou o arquipélago de <b>Xapón</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>A erupción dun volcán</h3>
      <ul><li>1. No interior da Terra, o <b>magma</b> está sometido a unha intensa <b>presión</b>.</li>
      <li>2. Se a presión diminúe, o magma ascende pola <b>cheminea</b> e sae ao exterior polo <b>cráter</b>.</li>
      <li>3. O volcán expulsa materiais <b>sólidos</b> (cinsas, pedras), <b>viscosos</b> (<b>lava</b>) e distintos <b>gases</b>.</li></ul></div>
    <div class="card"><h3><span class="chip">4</span>Os terremotos</h3>
      <p>Os <b>terremotos</b> ou <b>sismos</b> son tremores bruscos da codia provocados polo choque das placas, os movementos das fallas ou as erupcións. As sacudidas propáganse en forma de <b>ondas sísmicas</b>.</p>
      <p>Mídense cos <b>sismógrafos</b> e a súa magnitude cuantifícase coa <b>escala de Richter</b>. A zona de maior actividade sísmica é o <b>Cinto de Fogo</b>, nos bordos do océano <b>Pacífico</b>.</p>
      <ul><li><b>Hipocentro</b>: punto do <b>interior</b> da Terra onde se orixina o terremoto.</li>
      <li><b>Epicentro</b>: punto da <b>superficie</b> próximo ao hipocentro, onde hai <b>maior destrución</b>.</li></ul>
      <p>Na escala de Richter: de 1 a 2,9 non se nota; a partir de 7 hai danos graves e mortes; 9 ou máis, danos gravísimos.</p></div>
    <div class="card example"><h3><span class="chip">★</span>O terremoto de Tohoku</h3>
      <p>O <b>11 de marzo de 2011</b> houbo un terremoto de magnitude <b>9,0</b> en Tohoku (<b>Xapón</b>), que provocou un <b>tsunami</b> con ondas de ata 40 metros e un accidente na central nuclear de <b>Fukushima</b>.</p>
      <p>Un <b>tsunami</b> ou <b>maremoto</b> é unha serie de ondas xigantes causadas por un terremoto ou unha erupción no fondo do mar.</p></div>`,
    quiz:[
      {q:"Que é un volcán?", opts:["Unha montaña de neve","Unha fenda que expulsa materiais quentes","Un tipo de falla mergullada no océano","Un río subterráneo"], a:1, fb:"Expulsa materiais do interior a elevadas temperaturas."},
      {q:"Onde se producen a maioría das erupcións?", opts:["No fondo submarino","No Polo Norte","Nos desertos máis quentes","Nas cidades"], a:0, fb:"A maioría son no fondo do mar."},
      {q:"O Kilimanxaro leva miles de anos sen erupcións. É un volcán...", opts:["Activo","Dormente","Extinguido","Submarino e moi novo"], a:2, fb:"Extinguido: sen actividade durante miles de anos."},
      {q:"Por onde sae o magma ao exterior?", opts:["Pola falla","Polo hipocentro","Pola chaira","Polo cráter"], a:3, fb:"Sobe pola cheminea e sae polo cráter."},
      {q:"Con que escala se mide a magnitude dun terremoto?", opts:["Coa escala de Richter","Coa escala de Mohs","Coa escala de cores do mapa","Cun termómetro"], a:0, fb:"E rexístrase cos sismógrafos."},
      {q:"Que é o epicentro?", opts:["O punto do interior onde nace o terremoto","O punto da superficie que máis sofre","O cráter dun volcán","Unha onda xigante no mar"], a:1, fb:"O do interior é o hipocentro."}
    ],
    hard:[
      {q:"Como se chama a zona de maior actividade sísmica do mundo?", ans:"O Cinto de Fogo", ok:["cinto","fogo","fuego"]},
      {q:"Como se chama o magma cando sae ao exterior?", ans:"Lava", ok:["lava"]},
      {q:"Que aparatos rexistran os terremotos?", ans:"Os sismógrafos", ok:["sismografo"]},
      {q:"Que é un tsunami?", ans:"Unha serie de ondas xigantes causadas por un terremoto ou erupción no fondo do mar", ok:["onda"]}
    ],
    games:[
      {type:"order", title:"A erupción", prompt:"Ordena como se produce unha erupción", items:["O magma está sometido a intensa presión","A presión diminúe","O magma sobe pola cheminea","Sae polo cráter","O volcán expulsa cinsas, lava e gases"]},
      {type:"match", title:"Exemplos de volcáns", pairs:[["Popocatépetl","Activo (México)"],["Mauna Kea","Dormente (Hawai)"],["Kilimanxaro","Extinguido (Tanzania)"],["Monte Batok","Cono volcánico en Xava"],["Canarias","Illas volcánicas"]]},
      {type:"order", title:"Como se forma un terremoto", prompt:"Ordena os pasos", items:["Dúas placas chocan","Unha placa esvara sobre outra","Acumúlase enerxía","Móvese bruscamente unha placa e fractúraa"]}
    ]
  },
  {
    id:"axentes", title:"Por que cambia o relevo?", icon:"💨",
    body:`
    <div class="card"><h3><span class="chip">1</span>As forzas externas</h3>
      <p>O relevo cambia <b>moi lentamente</b>, durante millóns de anos, pola acción dos <b>axentes externos</b>: o <b>vento</b>, a <b>temperatura</b>, a <b>auga</b> e os <b>seres vivos</b>.</p>
      <ul><li>A <b>erosión</b> é o desgaste, a fragmentación ou a disolución das rochas.</li>
      <li>O <b>transporte</b> é o arrastre dos materiais arrincados pola erosión.</li>
      <li>A <b>sedimentación</b> é o depósito dos materiais erosionados e transportados.</li></ul></div>
    <div class="card"><h3><span class="chip">2</span>O vento e a temperatura</h3>
      <p>O <b>vento</b> arrinca partículas de area, golpea e pule as rochas. Tamén transporta a area e deposítaa formando <b>dunas</b> (como no deserto de Rub al-Jali).</p>
      <p>Os <b>cambios bruscos de temperatura</b> rompen as rochas en fragmentos, sobre todo nos <b>desertos</b> e nas <b>montañas</b>, onde hai grandes diferenzas entre o día e a noite.</p>
      <p>En lugares húmidos, a auga métese nas <b>fendas</b>; ao <b>conxelarse</b> aumenta o seu volume e actúa como unha <b>cuña</b> que fragmenta a rocha.</p></div>
    <div class="card"><h3><span class="chip">3</span>A auga, o principal axente</h3>
      <ul><li>No <b>curso alto</b> dun río, a pendente é forte: a auga corre rápido e <b>erosiona</b>. Pode escavar <b>canóns</b>, <b>gargantas</b> e vales estreitos.</li>
      <li>No <b>curso medio</b>, o río vai por zonas chás e máis lento: erosiona menos e <b>transporta</b>.</li>
      <li>No <b>curso baixo</b>, corre moi lento e vai depositando os materiais: é a <b>sedimentación</b>. Así fórmanse as <b>chairas aluviais</b>.</li></ul>
      <p>As <b>ondas</b> e as <b>correntes</b> mariñas forman <b>acantilados</b> e, ao depositar materiais, <b>praias</b>.</p>
      <p>As <b>augas subterráneas</b> disolven as rochas <b>calcarias</b> e crean covas con <b>estalactitas</b> (nacen no <b>teito</b>) e <b>estalagmitas</b> (nacen no <b>chan</b>).</p></div>
    <div class="card"><h3><span class="chip">4</span>Os seres vivos</h3>
      <ul><li>As <b>raíces</b> das plantas penetran no solo e fragmentan as rochas.</li>
      <li>Algúns <b>animais</b> escavan túneles e fracturan as rochas.</li>
      <li>Os <b>seres humanos</b> transformamos a paisaxe: achanzamos terreos, facemos túneles e <b>encoros</b>, escavamos <b>minas</b>…</li></ul></div>`,
    quiz:[
      {q:"Que é a erosión?", opts:["O depósito de materiais","O desgaste das rochas","O arrastre de area polo vento ata as dunas","Un tipo de volcán"], a:1, fb:"Despois vén o transporte e a sedimentación."},
      {q:"Que forma o vento cando deposita a area?", opts:["Dunas","Canóns","Acantilados","Estalactitas"], a:0, fb:"Como no deserto de Rub al-Jali."},
      {q:"Por que o xeo rompe as rochas?", opts:["Porque está moi quente","Porque é moi pesado e cae desde arriba","Porque a auga xeada ocupa máis","Porque o leva o vento"], a:2, fb:"Actúa como unha cuña nas fendas."},
      {q:"En que tramo dun río se forman os canóns?", opts:["No curso baixo","No curso medio","Na desembocadura","No curso alto"], a:3, fb:"A forte pendente fai que a auga erosione moito."},
      {q:"Onde nacen as estalactitas?", opts:["No teito da cova","No chan da cova","No fondo do mar","Nas praias e acantilados"], a:0, fb:"As estalagmitas nacen no chan."},
      {q:"Cal é o principal axente modelador do relevo?", opts:["O vento","A auga","Os animais","A temperatura"], a:1, fb:"A auga actúa de moitas maneiras distintas."}
    ],
    hard:[
      {q:"Nomea os tres procesos externos que modifican o relevo.", ans:"Erosión, transporte e sedimentación", ok:[["erosion"],["transporte"],["sedimentacion"]]},
      {q:"Que se forma no curso baixo dun río coa sedimentación?", ans:"Chairas aluviais", ok:["aluvial"]},
      {q:"Que rochas disolven as augas subterráneas?", ans:"As rochas calcarias", ok:["calcaria","caliza"]},
      {q:"Nomea os catro axentes externos.", ans:"Vento, temperatura, auga e seres vivos", ok:[["vento","viento"],["temperatura"],["auga","agua"],["seres vivos","vivos"]]}
    ],
    games:[
      {type:"order", title:"O percorrido dun río", prompt:"Ordena os tramos dun río desde o nacemento", items:["Curso alto: erosiona e escava canóns","Curso medio: transporta materiais","Curso baixo: sedimenta e forma chairas aluviais"]},
      {type:"classify", title:"Que axente o fai?", bins:["💨 Vento","🌡️ Temperatura","💧 Auga","🌱 Seres vivos"], items:[["Forma dunas",0],["Pule as rochas coa area",0],["O xeo rompe as rochas",1],["Rochas rotas nos desertos",1],["Escava canóns",2],["Forma praias e acantilados",2],["Crea estalactitas",2],["As raíces rompen as rochas",3],["Os animais escavan túneles",3],["Os humanos fan encoros",3]]},
      {type:"match", title:"Erosión, transporte e sedimentación", pairs:[["Erosión","Desgaste das rochas"],["Transporte","Arrastre dos materiais"],["Sedimentación","Depósito dos materiais"],["Estalactita","Nace no teito"],["Estalagmita","Nace no chan"]]}
    ]
  },
  {
    id:"humanos", title:"O relevo e as actividades humanas", icon:"🏘️",
    body:`
    <div class="card"><h3><span class="chip">1</span>O relevo e o poboamento</h3>
      <p>O poboamento da Terra é <b>moi desigual</b>. As persoas establécense sobre todo preto de <b>cursos de auga</b>, en rexións cun <b>clima</b> favorable e cun <b>relevo</b> que facilita as actividades.</p>
      <p>Por iso, a maioría da poboación vive <b>preto da costa</b> e o <b>80 %</b> vive por <b>debaixo dos 500 metros</b> de altitude.</p>
      <ul><li>Nos <b>vales</b> e nas <b>chairas</b>, a pouca pendente e a <b>fertilidade</b> do terreo favorecen a <b>agricultura</b> e as vías de comunicación.</li>
      <li>As <b>montañas</b> abruptas están pouco poboadas, porque dificultan as infraestruturas e as actividades económicas.</li></ul>
      <p>Coa <b>tecnoloxía</b> adaptamos o relevo: perforamos montañas para facer <b>túneles</b> ou creamos <b>socalcos</b> nas ladeiras para cultivar.</p></div>
    <div class="card"><h3><span class="chip">2</span>O relevo como recurso</h3>
      <p>Extraemos do medio natural <b>recursos</b> (alimentos, enerxía…) e iso transforma profundamente o relevo, como a <b>minaría a ceo aberto</b>.</p>
      <p>Tamén aproveitamos o relevo para construír instalacións: <b>estacións de esquí</b> nas montañas con neve e <b>centrais hidroeléctricas</b> nos vales fluviais.</p>
      <p>Os <b>encoros e presas</b> alteran profundamente a paisaxe. Estas actividades poden cambiar o relevo de modo <b>irreversible</b>; por iso é importante <b>prever as consecuencias</b>.</p></div>`,
    quiz:[
      {q:"Onde vive a maioría da poboación?", opts:["Nas montañas altas","Preto da costa","No deserto","Na Antártida"], a:1, fb:"E o 80 % por debaixo dos 500 m."},
      {q:"Que porcentaxe da poboación vive por debaixo dos 500 m?", opts:["O 80 %","O 10 %","O 50 %","O 100 %"], a:0, fb:"Arredor do 80 %."},
      {q:"Por que as montañas abruptas están pouco poboadas?", opts:["Porque fai moita calor","Porque están baixo o mar","Porque é difícil construír","Porque non hai auga en ningún lugar"], a:2, fb:"As fortes pendentes complican vías e actividades."},
      {q:"Que se constrúe nas ladeiras para poder cultivar?", opts:["Encoros","Estacións de esquí","Minas","Socalcos"], a:3, fb:"Os socalcos son chanzos de terra."},
      {q:"Que se constrúe nos vales fluviais para producir enerxía?", opts:["Centrais hidroeléctricas","Estacións de esquí","Socalcos","Faros na beira do mar"], a:0, fb:"Aproveitan a forza da auga."},
      {q:"Por que hai que prever as consecuencias das obras?", opts:["Porque son baratas","Porque o cambio pode ser para sempre","Porque o relevo non cambia nunca","Porque o di a escala de Richter"], a:1, fb:"Algúns cambios son irreversibles."}
    ],
    hard:[
      {q:"Por que a xente prefire vivir en vales e chairas?", ans:"Pola pouca pendente e a fertilidade do terreo", ok:["pendente","fertil","plan","agricultura"]},
      {q:"Que tipo de minaría causa un gran impacto visible?", ans:"A minaría a ceo aberto", ok:["ceo aberto","cielo abierto"]},
      {q:"Nomea unha instalación que aproveita as montañas con neve.", ans:"Unha estación de esquí", ok:["esqui"]}
    ],
    games:[
      {type:"classify", title:"Moita ou pouca poboación?", bins:["🏙️ Moita poboación","🏔️ Pouca poboación"], items:[["Vales",0],["Chairas",0],["Preto da costa",0],["Preto dos ríos",0],["Montañas abruptas",1],["Fortes pendentes",1],["Lugares moi altos",1],["Zonas con mal clima",1]]},
      {type:"pick", title:"Actividades que cambian o relevo", prompt:"Toca as actividades humanas que modifican o relevo", items:[["Construír encoros",true],["Minaría a ceo aberto",true],["Facer túneles",true],["Crear socalcos",true],["Estacións de esquí",true],["Achanzar terreos",true],["Ler un libro",false],["Durmir a sesta",false],["Escoitar música",false]]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["O poboamento da Terra é moi desigual",true],["A maioría vive nas montañas",false,"Preto da costa e en zonas baixas"],["A tecnoloxía permite adaptar o relevo",true],["Os encoros non cambian a paisaxe",false,"Altérana profundamente"],["Algúns cambios no relevo son irreversibles",true],["As chairas teñen terreos fértiles",true]]}
    ]
  }
  ]
});

/* Preguntas para ENTENDER e razoar (en galego).
   Formato: [pregunta, resposta curta, palabras clave válidas, por que] */
addQA("historia", {
  formas: [
    ["En que se diferencian unha illa e unha península?", "A península está unida por un istmo", ["istmo","unida","unha parte"], "A illa está rodeada de auga por todas as partes."],
    ["En que se parecen unha meseta e unha chaira?", "As dúas son chás", ["chan","plan"], "A diferenza é a altitude."],
    ["Un terreo está por debaixo do nivel do mar. Que é?", "Unha depresión", ["depresion"], "Está máis baixo ca as terras que o rodean."],
    ["Un río percorre o terreo entre dúas montañas. Que é?", "Un val", ["val","valle"], "Os vales están entre montañas."],
    ["Unha baía é un golfo...", "Pequeno", ["pequen"], "As calas e enseadas son aínda máis pequenas."],
    ["Que hai despois da plataforma continental?", "O noiro continental", ["noiro","talud"], "Unha zona de forte pendente."],
    ["Pode unha dorsal oceánica formar illas?", "Si", ["si"], "As cimas máis altas poden sobresaír."]
  ],
  mundo: [
    ["Nun mapa ves unha zona morada. Como é?", "Moi elevada", ["elevad","alta","alto"], "Os tons morados indican as terras máis altas."],
    ["Nun mapa ves unha zona verde. Como é?", "Baixa", ["baix","baj"], "Os verdes indican as terras máis baixas."],
    ["Onde está o Everest?", "No Himalaia", ["himalaia","asia"], "É o pico máis alto do mundo."],
    ["En que lado de América están as grandes montañas?", "No oeste", ["oeste"], "Rochosas, Serra Madre e Andes."],
    ["Por que Australia non é só un continente pequeno?", "É a maior illa do mundo", ["illa","isla"], "Así o di o libro."],
    ["Que río percorre a chaira do norte de América?", "O Mississippi", ["mississippi","misisipi"], "O do sur é o Amazonas."]
  ],
  placas: [
    ["Por que se forman cordilleiras?", "Polo choque de placas", ["choque","chocan","placa"], "A colisión eleva a codia."],
    ["Por que hai tantos volcáns nos bordos das placas?", "Son zonas de contacto", ["contacto","borde","bordo"], "Alí as placas chocan ou se separan."],
    ["Unha rocha branda dóbrase. Que se forma?", "Un pregamento", ["pregamento","plegamiento","dobramento"], "Os materiais pouco ríxidos ondúlanse."],
    ["Unha rocha dura rompe en bloques. Que se forma?", "Unha falla", ["falla"], "Os materiais ríxidos fenden."],
    ["Que proba a deriva continental?", "As costas de África e América encaixan", ["encaix","costa"], "Antes estaban unidas en Panxea."],
    ["Sobre que se desprazan as placas?", "Sobre o manto", ["manto"], "Móvense moi lentamente."]
  ],
  volcans: [
    ["Por que os volcáns están nos bordos das placas?", "Polo choque das placas", ["choque","placa","contacto"], "As fendas fórmanse polas forzas internas."],
    ["Que fai que o magma suba?", "Que diminúa a presión", ["presion"], "Sobe pola cheminea ata o cráter."],
    ["Un volcán leva 500 anos tranquilo. Que é?", "Dormente", ["dormente","inactivo"], "Centos de anos sen actividade."],
    ["Onde hai máis destrución nun terremoto?", "No epicentro", ["epicentro"], "É o punto da superficie máis próximo ao hipocentro."],
    ["Por que Xapón ten tantos terremotos?", "Está no Cinto de Fogo", ["cinto","fogo","pacifico"], "Nos bordos do Pacífico."],
    ["Un terremoto de magnitude 2. Nótase?", "Non", ["non","no"], "Só o rexistran os sismógrafos."],
    ["Que pode causar un terremoto no fondo do mar?", "Un tsunami", ["tsunami","maremoto"], "Ondas xigantes, como en Tohoku."]
  ],
  axentes: [
    ["Por que un río escava no curso alto?", "Pola forte pendente", ["pendente","rapid"], "A auga corre rápido e erosiona."],
    ["Por que o río deposita no curso baixo?", "Corre moi lento", ["lent","velocidade"], "Xa non ten forza para transportar."],
    ["Por que se rompen as rochas no deserto?", "Polos cambios de temperatura", ["temperatura","calor","frio"], "Grandes diferenzas entre día e noite."],
    ["De onde saen as dunas?", "Do vento", ["vento","viento"], "O vento transporta e deposita a area."],
    ["Que diferenza hai entre estalactita e estalagmita?", "Unha nace no teito e outra no chan", ["teito","chan"], "Estalactita no teito; estalagmita no chan."],
    ["Pode actuar máis dun axente á vez?", "Si", ["si"], "Por exemplo, a auga e a temperatura no xeo."]
  ],
  humanos: [
    ["Por que se vive máis preto da costa?", "Relevo e clima favorables", ["clima","relevo","plan","auga","comunicac"], "O relevo e o clima facilitan as actividades."],
    ["Por que pouca xente vive nas montañas?", "Dificultan as infraestruturas", ["dificult","pendente","infraestrutura"], "As fortes pendentes complican vías e actividades."],
    ["Para que serven os socalcos?", "Para cultivar nas ladeiras", ["cultiv"], "Fan chanzos chans nas pendentes."],
    ["Por que un encoro cambia a paisaxe?", "Asolaga un val", ["asolag","auga","val","inund"], "Altera profundamente a paisaxe."],
    ["Por que hai que prever as consecuencias?", "Os cambios poden ser irreversibles", ["irreversib","para sempre"], "O relevo pode quedar cambiado para sempre."]
  ]
});

addFrases("historia", {
  formas: ["O relevo é o conxunto de formas da superficie terrestre.", "A península está rodeada de auga menos por unha parte, chamada istmo.", "A foxa Challenger é a máis profunda, no océano Pacífico."],
  mundo: ["O Himalaia é a cordilleira máis elevada do mundo.", "O Tíbet é a meseta máis alta do mundo.", "Australia é a maior illa do mundo."],
  placas: ["A codia terrestre está formada por placas tectónicas.", "Os materiais pouco ríxidos forman pregamentos.", "Hai 200 millóns de anos existía un só continente chamado Panxea."],
  volcans: ["O magma sobe pola cheminea e sae polo cráter.", "O epicentro é o punto da superficie con maior destrución.", "A zona de maior actividade sísmica é o Cinto de Fogo."],
  axentes: ["A erosión é o desgaste das rochas.", "O vento transporta a area e forma dunas.", "As estalactitas nacen no teito e as estalagmitas no chan."],
  humanos: ["A maioría da poboación vive preto da costa.", "Nas ladeiras créanse socalcos para cultivar.", "Os encoros e presas alteran profundamente a paisaxe."]
});
