/* Asignatura: Bioloxía e Xeoloxía (en galego, como os apuntes) */
registerSubject({
  id:"bioloxia", name:"Bioloxía", icon:"🌍", color:"var(--green)", colorD:"var(--green-d)",
  sections:[
  {
    id:"terra", title:"A Terra, un planeta excepcional", icon:"🌍",
    body:`
    <div class="card"><h3><span class="chip">1</span>Por que é especial a Terra?</h3>
      <p>A Terra é o único planeta coñecido con vida. Iso é grazas a <b>seis</b> factores:</p>
      <ul><li><b>Distancia adecuada ao Sol</b>: nin moita calor nin moito frío.</li>
      <li><b>Tamaño adecuado do Sol</b>.</li>
      <li><b>Atmosfera</b>: capa de gases que nos protexe.</li>
      <li><b>Campo magnético</b>: escudo invisible que produce o núcleo.</li>
      <li><b>Lúa</b>: a súa forza de atracción produce as mareas.</li>
      <li><b>Actividade xeolóxica</b>: volcáns e movementos do interior.</li></ul></div>`,
    quiz:[
      {q:"Cantos factores fan da Terra un planeta excepcional?", opts:["Catro factores","Seis factores","Dous factores","Dez factores"], a:1, fb:"Son seis: distancia ao Sol, tamaño do Sol, atmosfera, campo magnético, Lúa e actividade xeolóxica."},
      {q:"Cal destes NON é un factor que fai excepcional á Terra?", opts:["O campo magnético","A distancia ao Sol","Ter moitos aneis","A actividade xeolóxica"], a:2, fb:"Os aneis non aparecen; a Terra non ten aneis."},
      {q:"Que astro produce as mareas na Terra?", opts:["O Sol","Marte","A Lúa","Xúpiter"], a:2, fb:"A forza gravitacional da Lúa produce as mareas."}
    ],
    hard:[
      {q:"Escribe dous factores que fan excepcional á Terra.", ans:"Distancia ao Sol, tamaño do Sol, atmosfera, campo magnético, Lúa, actividade xeolóxica", ok:["distancia","tamano","atmosfera","magnetic","lua","luna","xeolox","geolog"]},
      {q:"Que satélite da Terra aparece entre os factores?", ans:"A Lúa", ok:["lua","luna"]},
      {q:"Que capa de gases protexe a Terra?", ans:"A atmosfera", ok:["atmosfera"]}
    ],
    games:[
      {type:"pick", title:"Os 6 factores", prompt:"Toca os factores que fan á Terra excepcional", items:[["Distancia ao Sol",true],["Tamaño do Sol",true],["Atmosfera",true],["Campo magnético",true],["Lúa",true],["Actividade xeolóxica",true],["Aneis",false],["Moitos satélites",false],["Ser o máis grande",false]]},
      {type:"hangman", title:"Palabra oculta", words:[["Atmosfera","Capa de gases que envolve a Terra"],["Magnetico","Campo ... : escudo invisible"],["Lua","Satélite que produce as mareas"],["Distancia","... adecuada ao Sol"]]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["A Terra está a unha distancia adecuada ao Sol",true],["A Lúa non ten ningún efecto sobre a Terra",false,"Produce as mareas"],["O campo magnético é un dos factores",true],["A Terra non ten actividade xeolóxica",false,"Si ten: volcáns, terremotos..."],["A atmosfera é unha capa de gases",true]]}
    ]
  },
  {
    id:"esferas", title:"As esferas da Terra", icon:"🌐",
    body:`
    <div class="card"><h3><span class="chip">1</span>As catro capas ou esferas</h3>
      <ul><li><b>Biosfera</b>: conxunto de seres vivos.</li>
      <li><b>Atmosfera</b>: capa de gases que envolve o planeta Terra.</li>
      <li><b>Hidrosfera</b>: conxunto da auga do planeta.</li>
      <li><b>Xeosfera</b>: capa na súa maioría sólida, formada por rochas e minerais.</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>A xeosfera</h3>
      <p>É a parte <b>sólida</b> da Terra. É a <b>maior</b> das súas capas, xa que se estende dende a superficie ata o <b>centro da Terra</b>.</p>
      <p>Está baixo os océanos e parte dela emerxe para formar os <b>continentes</b>. Formada por rochas, minerais e solos.</p></div>`,
    quiz:[
      {q:"Que esfera é o conxunto de seres vivos?", opts:["Hidrosfera","Biosfera","Xeosfera","Atmosfera"], a:1, fb:"A biosfera son todos os seres vivos."},
      {q:"Que esfera é o conxunto da auga do planeta?", opts:["Atmosfera","Xeosfera","Hidrosfera","Biosfera"], a:2, fb:"Hidro = auga."},
      {q:"Cal é a maior das capas da Terra?", opts:["A atmosfera","A hidrosfera","A xeosfera","A biosfera"], a:2, fb:"A xeosfera vai dende a superficie ata o centro."},
      {q:"De que está formada a xeosfera?", opts:["De gases e vapor de auga quente","De auga salgada e auga doce","De rochas, minerais e solos","De plantas e animais"], a:2, fb:"Rochas, minerais e solos."}
    ],
    hard:[
      {q:"Como se chama a esfera dos seres vivos?", ans:"Biosfera", ok:["biosfera"]},
      {q:"Como se chama a esfera da auga?", ans:"Hidrosfera", ok:["hidrosfera"]},
      {q:"Como se chama a capa de gases que envolve a Terra?", ans:"Atmosfera", ok:["atmosfera"]},
      {q:"Como se chama a parte sólida da Terra?", ans:"Xeosfera", ok:["xeosfera","geosfera"]}
    ],
    games:[
      {type:"match", title:"Une cada esfera", pairs:[["Biosfera","Seres vivos"],["Atmosfera","Gases"],["Hidrosfera","Auga"],["Xeosfera","Rochas e minerais"]]},
      {type:"classify", title:"A que esfera pertence?", bins:["🌿 Biosfera","☁️ Atmosfera","💧 Hidrosfera","🪨 Xeosfera"], items:[["Un peixe",0],["Unha árbore",0],["Unha persoa",0],["O aire",1],["As nubes",1],["O osíxeno que respiramos",1],["O mar",2],["Un río",2],["Un glaciar",2],["Unha montaña",3],["O granito",3],["O centro da Terra",3]]},
      {type:"memory", title:"Memoria das esferas", pairs:[["Bio","Vida"],["Hidro","Auga"],["Atmo","Gases"],["Xeo","Terra sólida"],["Xeosfera","A maior capa"],["Continentes","Parte da xeosfera que emerxe"]]}
    ]
  },
  {
    id:"capas", title:"As capas da xeosfera", icon:"🥚",
    body:`
    <div class="card"><h3><span class="chip">1</span>Tres capas concéntricas</h3>
      <p>Na xeosfera diferéncianse tres capas: <b>codia</b>, <b>manto</b> e <b>núcleo</b>.</p>
      <p>Fóronse separando pola súa diferente <b>densidade</b>: a Terra ten maior densidade canto máis nos achegamos ao <b>centro</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Codia terrestre</h3>
      <ul><li>Capa máis <b>externa</b> e <b>delgada</b>. Baixa densidade.</li>
      <li>Formada por rochas sólidas e ríxidas. Grosor: 20-70 km continental, 10 km oceánica.</li>
      <li><b>Codia oceánica</b>: nos fondos oceánicos, máis delgada e máis densa. Abunda o <b>basalto</b>.</li>
      <li><b>Codia continental</b>: nos continentes, máis grosa e menos densa. A rocha máis abundante é o <b>granito</b>.</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>Manto terrestre</h3>
      <ul><li>Capa <b>intermedia</b>. Rochas máis densas que as da codia, con altas presións e temperaturas.</li>
      <li><b>Manto superior</b> (70-700 km): rochas ríxidas, sobre todo <b>peridotita</b>. Negras e densas.</li>
      <li><b>Manto inferior</b> (700-2900 km): maior densidade e temperatura, rochas brandas (plásticas) e algunhas zonas fundidas. O 70% é <b>bridgmanita</b>.</li></ul></div>
    <div class="card"><h3><span class="chip">4</span>Núcleo terrestre</h3>
      <ul><li>A capa máis <b>interna</b> e máis <b>densa</b> (dende 2900 km ata o centro).</li>
      <li>Formado por metais: <b>ferro</b> e <b>níquel</b>.</li>
      <li><b>Núcleo externo</b>: está fundido. <b>Núcleo interno</b>: é sólido.</li>
      <li>É o responsable do <b>campo magnético</b> terrestre.</li>
      <li><b>Capa D''</b>: límite entre núcleo e manto.</li></ul></div>`,
    quiz:[
      {q:"Cales son as tres capas da xeosfera?", opts:["Codia, manto e núcleo","Biosfera, auga e aire","Rocha, mineral e solo","Litosfera, mar e terra"], a:0, fb:"Codia, manto e núcleo."},
      {q:"Por que se separaron as capas?", opts:["Pola súa cor diferente","Pola súa densidade","Pola súa idade","Pola forza do vento"], a:1, fb:"Pola súa diferente densidade."},
      {q:"Cal é a rocha máis abundante da codia continental?", opts:["Basalto","Granito","Peridotita","Mármore"], a:1, fb:"Continental = granito; oceánica = basalto."},
      {q:"Que rocha abunda na codia oceánica?", opts:["Granito","Calcaria","Basalto","Lousa"], a:2, fb:"Na oceánica abunda o basalto."},
      {q:"De que metais está formado o núcleo?", opts:["Ouro e prata","Ferro e níquel","Cobre e estaño","Aluminio e chumbo"], a:1, fb:"Ferro e níquel."},
      {q:"Que parte do núcleo está fundida?", opts:["O núcleo interno","O núcleo externo","Todo o núcleo","Ningunha"], a:1, fb:"Externo fundido, interno sólido."},
      {q:"Que capa é a responsable do campo magnético?", opts:["A codia","O manto superior","O núcleo","A atmosfera"], a:2, fb:"O núcleo produce o campo magnético."}
    ],
    hard:[
      {q:"Escribe as tres capas da xeosfera.", ans:"Codia, manto e núcleo", ok:[["codia","corteza"],["manto"],["nucleo"]]},
      {q:"Cal é a capa máis externa e delgada?", ans:"A codia", ok:["codia","corteza"]},
      {q:"Rocha máis abundante da codia continental:", ans:"Granito", ok:["granito"]},
      {q:"Rocha abundante na codia oceánica:", ans:"Basalto", ok:["basalto"]},
      {q:"Rocha principal do manto superior:", ans:"Peridotita", ok:["peridotita"]},
      {q:"De que dous metais está feito o núcleo?", ans:"Ferro e níquel", ok:[["ferro","hierro"],["niquel"]]},
      {q:"Como se chama o límite entre núcleo e manto?", ans:"Capa D''", ok:["capa d","d''","d\""]}
    ],
    games:[
      {type:"order", title:"De fóra a dentro", prompt:"Ordena as capas dende a superficie ata o centro", items:["Codia","Manto superior","Manto inferior","Núcleo externo","Núcleo interno"]},
      {type:"classify", title:"Codia, manto ou núcleo?", bins:["Codia","Manto","Núcleo"], items:[["Capa máis externa e delgada",0],["Granito e basalto",0],["10 km oceánica",0],["Capa intermedia",1],["Peridotita",1],["Bridgmanita",1],["Ferro e níquel",2],["Campo magnético",2],["A máis densa",2],["Unha parte sólida e outra fundida",2]]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["A codia oceánica é máis delgada e máis densa",true],["A codia continental é máis densa que a oceánica",false,"É menos densa e máis grosa"],["O núcleo interno é sólido",true],["O núcleo externo é sólido",false,"Está fundido"],["A densidade aumenta cara ao centro",true],["O manto inferior ten rochas brandas (plásticas)",true],["O núcleo está feito de granito",false,"De ferro e níquel"]]}
    ]
  },
  {
    id:"litosfera", title:"Litosfera e placas", icon:"🔥",
    body:`
    <div class="card"><h3><span class="chip">1</span>A litosfera</h3>
      <p>É o conxunto formado pola <b>codia terrestre</b> e a <b>parte superior do manto</b>.</p>
      <p>Está formada por rochas sólidas e ríxidas. O seu grosor é variable: dende <b>70 km</b> baixo os océanos ata <b>200 km</b> nos continentes.</p></div>
    <div class="card"><h3><span class="chip">2</span>As placas móvense sobre o manto</h3>
      <p>No manto prodúcense lentos <b>movementos de convección</b>:</p>
      <ul><li>Os materiais en contacto co núcleo <b>quéntanse</b>, teñen menos densidade e <b>ascenden</b>.</li>
      <li>Cando <b>arrefrían</b>, a densidade aumenta e <b>afúndense</b> de novo.</li>
      <li>Así créanse correntes que <b>arrastran as placas tectónicas</b>.</li></ul></div>`,
    quiz:[
      {q:"Que forma a litosfera?", opts:["Só a codia oceánica e os océanos","A codia e a parte superior do manto","O manto inferior e todo o núcleo","A auga dos mares e o aire"], a:1, fb:"Codia + parte superior do manto."},
      {q:"Canto mide a litosfera nos continentes?", opts:["Ata 10 km","Ata 200 km","Ata 2900 km","Ata 6000 km"], a:1, fb:"De 70 km (océanos) ata 200 km (continentes)."},
      {q:"Que lle pasa ao material do manto ao quentarse?", opts:["Faise máis denso e afúndese","Faise menos denso e sobe","Convértese en auga","Non lle pasa nada"], a:1, fb:"Quéntase, baixa a densidade e ascende."},
      {q:"Que move as placas tectónicas?", opts:["Os ventos fortes da atmosfera","As correntes de convección do manto","As mareas que produce a Lúa","Os terremotos e os volcáns"], a:1, fb:"As correntes de convección arrastran as placas."}
    ],
    hard:[
      {q:"Como se chama o conxunto da codia e a parte superior do manto?", ans:"Litosfera", ok:["litosfera"]},
      {q:"Como se chaman os movementos do manto que arrastran as placas?", ans:"Movementos de convección", ok:["convecc","convec"]},
      {q:"Que lle pasa ao material do manto cando arrefría?", ans:"Aumenta a densidade e afúndese", ok:["afund","baixa","descend","hund","dens"]}
    ],
    games:[
      {type:"order", title:"O ciclo da convección", prompt:"Ordena o que lle pasa ao material do manto", items:["Quéntase en contacto co núcleo","Diminúe a súa densidade","Ascende cara arriba","Arrefría","Aumenta a densidade e afúndese","Arrastra as placas tectónicas"]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["A litosfera inclúe a codia",true],["A litosfera é máis grosa baixo os océanos",false,"É máis grosa nos continentes (200 km)"],["O material quente ascende",true],["O material frío ascende",false,"O frío afúndese"],["As placas móvense sobre o manto",true]]},
      {type:"hangman", title:"Palabra oculta", words:[["Litosfera","Codia + parte superior do manto"],["Conveccion","Movementos lentos do manto"],["Placas","A litosfera está dividida en ..."],["Densidade","Diminúe ao quentarse"]]}
    ]
  },
  {
    id:"relevo", title:"O relevo terrestre", icon:"⛰️",
    body:`
    <div class="card"><h3><span class="chip">1</span>Que é o relevo?</h3>
      <p>A superficie da xeosfera presenta numerosas irregularidades que chamamos <b>relevo</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Zonas emerxidas</h3>
      <p>Son os <b>continentes</b> e as <b>illas</b>.</p>
      <ul><li><b>Cordilleiras</b>: conxuntos de elevacións montañosas ao longo dunha grande extensión.</li>
      <li><b>Chairas</b>: extensas rexións chairas que ocupan a maior parte dos continentes.</li>
      <li><b>Depresións</b>: zonas máis baixas que os relevos de arredor.</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>Zonas somerxidas</h3>
      <p>Ocupan <b>3/4 partes</b> da extensión terrestre.</p>
      <ul><li><b>Plataforma continental</b>: prolongación do continente cuberta pola auga; remata nunha forte pendente chamada <b>noiro continental</b>.</li>
      <li><b>Chaira abisal</b>: extensas chairas no fondo oceánico, con montañas e volcáns somerxidos que ás veces forman illas.</li>
      <li><b>Dorsal</b>: cordilleira submarina de miles de km, cunha fenda no centro chamada <b>rift</b>.</li>
      <li><b>Foxa oceánica</b>: fendas alongadas, estreitas e moi profundas no fondo oceánico.</li></ul></div>`,
    quiz:[
      {q:"Que parte da superficie ocupan as zonas somerxidas?", opts:["1/4 parte","A metade","3/4 partes","Toda"], a:2, fb:"3/4 partes da extensión terrestre."},
      {q:"Que son as zonas emerxidas?", opts:["Os fondos dos océanos","Os continentes e as illas","As foxas e as dorsais","Os ríos, lagos e mares"], a:1, fb:"Continentes e illas."},
      {q:"Como se chama a fenda no centro dunha dorsal?", opts:["Noiro","Rift","Foxa","Chaira"], a:1, fb:"O rift percorre a dorsal."},
      {q:"En que remata a plataforma continental?", opts:["Na chaira abisal","No noiro continental","Na dorsal oceánica","Nunha illa volcánica"], a:1, fb:"Nunha forte pendente: o noiro continental."},
      {q:"Que relevo emerxido ocupa a maior parte dos continentes?", opts:["As cordilleiras","As chairas","As depresións","As foxas"], a:1, fb:"As chairas."}
    ],
    hard:[
      {q:"Como chamamos ás irregularidades da superficie da xeosfera?", ans:"Relevo", ok:["relevo","relieve"]},
      {q:"Cordilleira submarina con fenda no centro:", ans:"Dorsal", ok:["dorsal"]},
      {q:"Fendas estreitas e moi profundas do fondo oceánico:", ans:"Foxa oceánica", ok:["foxa","fosa"]},
      {q:"Zonas máis baixas que os relevos de arredor:", ans:"Depresións", ok:["depresi"]},
      {q:"Forte pendente onde remata a plataforma continental:", ans:"Noiro continental", ok:["noiro","talud"]}
    ],
    games:[
      {type:"classify", title:"Emerxido ou somerxido?", bins:["🏔️ Emerxido","🌊 Somerxido"], items:[["Cordilleira",0],["Chaira",0],["Depresión",0],["Illa",0],["Plataforma continental",1],["Chaira abisal",1],["Dorsal",1],["Foxa oceánica",1],["Noiro continental",1],["Rift",1]]},
      {type:"match", title:"Une cada relevo", pairs:[["Cordilleira","Elevacións montañosas en fila"],["Chaira","Rexión plana e extensa"],["Depresión","Máis baixa que o arredor"],["Dorsal","Cordilleira submarina con rift"],["Foxa oceánica","Fenda moi profunda"],["Chaira abisal","Chaira no fondo oceánico"]]},
      {type:"memory", title:"Memoria do relevo", pairs:[["Plataforma","Noiro continental"],["Dorsal","Rift"],["Somerxidas","3/4 partes"],["Emerxidas","Continentes e illas"],["Chaira abisal","Volcáns somerxidos"],["Foxa","Moi profunda"]]}
    ]
  },
  {
    id:"minerais", title:"Que son os minerais?", icon:"💎",
    body:`
    <div class="card"><h3><span class="chip">1</span>Rochas e minerais</h3>
      <p>A codia terrestre está formada por moitos tipos de <b>rochas</b>, e as rochas están formadas por <b>minerais</b>.</p>
      <p>Coñécense máis de <b>3500</b> minerais. Hai <b>20</b> máis abundantes que adoitan estar nas rochas: os <b>minerais petroxenéticos</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Definición de mineral</h3>
      <p>Os minerais son substancias:</p>
      <ul><li><b>Sólidas</b>: os líquidos e gases non son minerais.</li>
      <li>De <b>orixe natural</b>: fórmanse en procesos xeolóxicos.</li>
      <li><b>Inorgánicas</b>: non as orixinan os seres vivos nin forman parte deles.</li>
      <li><b>Homoxéneas</b>: a mesma composición química en todas as súas partes.</li>
      <li>Con <b>redes ordenadas</b>: os seus átomos están dispostos de xeito regular.</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>Elementos → mineral → rocha</h3>
      <p>Un conxunto de <b>elementos químicos</b> (Si, O, Fe, Mg...) forman un <b>mineral</b> (cuarzo, feldespato, olivino...).</p>
      <p>Un conxunto de <b>minerais</b> forman unha <b>rocha</b> (granito, arenisca, basalto...).</p></div>`,
    quiz:[
      {q:"Cantos minerais diferentes se coñecen?", opts:["Uns 20","Máis de 3500","Uns 100","Só 5"], a:1, fb:"Máis de 3500; 20 son os petroxenéticos."},
      {q:"Como se chaman os 20 minerais máis abundantes nas rochas?", opts:["Minerais preciosos e raros","Minerais petroxenéticos","Minerais metálicos","Minerais líquidos"], a:1, fb:"Petroxenéticos."},
      {q:"Por que a auga líquida NON é un mineral?", opts:["Porque non é sólida","Porque é moi transparente","Porque está moi fría","Porque é moi abundante"], a:0, fb:"Os minerais teñen que ser sólidos."},
      {q:"Que significa que un mineral sexa inorgánico?", opts:["Que non o forman seres vivos","Que brilla moito na luz","Que se fabricou nunha fábrica","Que é de cor escura"], a:0, fb:"Non o orixinan seres vivos nin forman parte deles."},
      {q:"Que forma un conxunto de minerais?", opts:["Un elemento","Unha rocha","Un átomo","Un metal"], a:1, fb:"Elementos → mineral → rocha."}
    ],
    hard:[
      {q:"Escribe as 5 características dun mineral (polo menos 3).", ans:"Sólido, orixe natural, inorgánico, homoxéneo, redes ordenadas", ok:[["solid","natural","inorgan","homox","homog","rede","red"]]},
      {q:"Que forma un conxunto de minerais?", ans:"Unha rocha", ok:["rocha","roca"]},
      {q:"Como se chaman os 20 minerais máis abundantes nas rochas?", ans:"Minerais petroxenéticos", ok:["petroxen","petrogen"]},
      {q:"Que forma un conxunto de elementos químicos?", ans:"Un mineral", ok:["mineral"]}
    ],
    games:[
      {type:"match", title:"As 5 características", pairs:[["Sólidos","Non son líquidos nin gases"],["Orixe natural","Procesos xeolóxicos"],["Inorgánicos","Non os forman seres vivos"],["Homoxéneos","Mesma composición en todo"],["Redes ordenadas","Átomos dispostos regularmente"]]},
      {type:"classify", title:"Elemento, mineral ou rocha?", bins:["⚛️ Elemento","💎 Mineral","🪨 Rocha"], items:[["Silicio (Si)",0],["Osíxeno (O)",0],["Ferro (Fe)",0],["Cuarzo",1],["Feldespato",1],["Olivino",1],["Plagioclasa",1],["Granito",2],["Arenisca",2],["Basalto",2]]},
      {type:"pick", title:"É un mineral?", prompt:"Toca só as cousas que SI cumpren ser mineral", items:[["Cuarzo",true],["Pirita",true],["Halita (sal)",true],["Auga líquida",false],["Aire",false],["Unha cuncha de caracol",false],["Plástico",false],["Fluorita",true]]}
    ]
  },
  {
    id:"propiedades", title:"Propiedades dos minerais", icon:"🔬",
    body:`
    <div class="card"><h3><span class="chip">1</span>Aspecto: forma, cor e brillo</h3>
      <ul><li><b>Forma</b>: algúns teñen formas xeométricas (<b>cristais</b>). Ex.: prisma hexagonal (aragonito), <b>cubo (pirita)</b>, <b>octaedro (fluorita)</b>.</li>
      <li><b>Cor</b>: algúns teñen unha soa cor: amarelo (<b>xofre</b>), verde (<b>malaquita</b>), azul (<b>celestina</b>), granate (granate). Outros teñen moitas (fluorita, cuarzo).</li>
      <li><b>Brillo</b>: aspecto ao reflectir a luz: <b>metálico</b> (pirita), <b>vítreo</b> (cuarzo), <b>anacarado</b> (mica), <b>sedoso</b> (xeso).</li></ul></div>
    <div class="card"><h3><span class="chip">2</span>Cor da raia</h3>
      <p>É a cor do <b>po</b> que se produce cando raiamos o mineral sobre unha superficie branca. Normalmente <b>non coincide</b> coa cor da superficie.</p>
      <p>Ex.: a <b>pirita</b> é dourada pero a súa raia é <b>negra</b>; a mica é marrón e a raia é branca.</p></div>
    <div class="card"><h3><span class="chip">3</span>Tipo de rotura</h3>
      <ul><li><b>Fractura</b>: forma en que rompe un mineral ao golpealo (concoidea - xaspe, fibrosa - serpentina, irregular...).</li>
      <li><b>Exfoliación</b>: rotura en superficies <b>planas</b> (mica).</li></ul></div>
    <div class="card"><h3><span class="chip">4</span>Densidade</h3>
      <p>Relación entre a <b>masa</b> e o <b>volume</b>: <b>densidade = masa / volume</b>. A igual volume, un mineral máis denso ten máis masa.</p>
      <p>Ex.: con 10 cm³, a calcopirita ten 43 g e a caolinita 23 g → a calcopirita é máis densa.</p></div>
    <div class="card"><h3><span class="chip">5</span>Dureza: escala de Mohs</h3>
      <p>Resistencia que opón un mineral a ser <b>raiado</b>. Escala do 1 ao 10:</p>
      <ul><li>1 <b>Talco</b> (ráiase coa uña) · 2 <b>Xeso</b> · 3 <b>Calcita</b> (moeda de cobre)</li>
      <li>4 <b>Fluorita</b> · 5 <b>Apatito</b> (coitelo) · 6 <b>Ortosa</b> (lixa)</li>
      <li>7 <b>Cuarzo</b> (raia o vidro) · 8 <b>Topacio</b> · 9 <b>Corindón</b> · 10 <b>Diamante</b> (só se raia con outro diamante)</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>Outras propiedades</h3>
      <p><b>Magnetita</b>: atrae obxectos de ferro. <b>Halita</b> (sal): sabor salgado.</p></div>`,
    quiz:[
      {q:"Cal é o mineral máis brando da escala de Mohs?", opts:["Diamante","Talco","Cuarzo","Calcita"], a:1, fb:"Talco = 1."},
      {q:"Que número ten o cuarzo na escala de Mohs?", opts:["3","5","7","10"], a:2, fb:"Cuarzo = 7, raia o vidro."},
      {q:"Que é a cor da raia?", opts:["A cor do po ao raialo","A cor da súa superficie","A cor da luz que reflicte","A cor das súas liñas"], a:0, fb:"É a cor do po."},
      {q:"Que brillo ten a pirita?", opts:["Vítreo","Metálico","Sedoso","Anacarado"], a:1, fb:"Pirita: metálico."},
      {q:"Que forma ten a pirita?", opts:["Octaedro","Cubo","Prisma hexagonal","Esfera"], a:1, fb:"Cubo (pirita), octaedro (fluorita)."},
      {q:"Como se chama a rotura en superficies planas?", opts:["Fractura","Exfoliación","Raia","Densidade"], a:1, fb:"Exfoliación (mica)."},
      {q:"Que mineral atrae obxectos de ferro?", opts:["Halita","Magnetita","Talco","Xeso"], a:1, fb:"A magnetita."},
      {q:"Como se calcula a densidade?", opts:["Masa / volume","Volume / masa","Masa + volume","Masa × volume"], a:0, fb:"densidade = masa / volume."}
    ],
    hard:[
      {q:"Mineral número 10 da escala de Mohs:", ans:"Diamante", ok:["diamante"]},
      {q:"Mineral número 1 da escala de Mohs:", ans:"Talco", ok:["talco"]},
      {q:"Que mide a escala de Mohs?", ans:"A dureza", ok:["dureza"]},
      {q:"Fórmula da densidade:", ans:"densidade = masa / volume", ok:[["masa"],["volume","volumen"]]},
      {q:"Mineral que ten sabor salgado:", ans:"Halita", ok:["halita"]},
      {q:"Cor da raia da pirita:", ans:"Negra", ok:["negr"]},
      {q:"Rotura dun mineral en superficies planas:", ans:"Exfoliación", ok:["exfolia"]},
      {q:"Escribe dous tipos de brillo.", ans:"Metálico, vítreo, anacarado, sedoso", ok:["metal","vitre","anacar","sedos"]}
    ],
    games:[
      {type:"order", title:"Escala de Mohs", prompt:"Ordena do máis brando (1) ao máis duro (10)", items:["Talco","Xeso","Calcita","Fluorita","Apatito","Ortosa","Cuarzo","Topacio","Corindón","Diamante"]},
      {type:"mohs", title:"Quen raia a quen?"},
      {type:"match", title:"Brillo e cor", pairs:[["Metálico","Pirita"],["Vítreo","Cuarzo"],["Anacarado","Mica"],["Sedoso","Xeso"],["Amarelo","Xofre"],["Verde","Malaquita"]]},
      {type:"classify", title:"Que propiedade é?", bins:["Aspecto","Raia","Rotura","Densidade","Dureza"], items:[["Cubo, octaedro, prisma",0],["Brillo metálico",0],["Cor do po ao raialo",1],["Raia negra da pirita",1],["Fractura concoidea",2],["Exfoliación da mica",2],["Masa / volume",3],["A calcopirita pesa máis ca caolinita",3],["Escala de Mohs",4],["Ráiase coa uña",4]]}
    ]
  },
  {
    id:"clasusos", title:"Clasificación e usos", icon:"⛏️",
    body:`
    <div class="card example"><h3><span class="chip">?</span>Como diferenzo un silicato dun non silicato?</h3>
      <p>A diferenza está no que levan <b>dentro</b> (a súa composición química), non na cor nin na forma.</p>
      <ul><li><b>Silicatos</b>: levan <b>silicio (Si)</b> unido ao <b>osíxeno (O)</b>. Son os máis abundantes da codia e forman a maioría das rochas, como o granito (cuarzo, feldespato e mica).</li>
      <li><b>Non silicatos</b>: <b>non levan silicio</b>. Están feitos doutros elementos: metais como ferro, cobre ou chumbo, xofre, carbono, sal...</li></ul>
      <p><b>Truco para lembralos</b>: os silicatos do exame son só tres, <b>olivino, mica e cuarzo</b>. Calquera outro mineral do exame (pirita, galena, halita, calcita, xeso, fluorita...) é <b>non silicato</b>.</p>
      <p><b>Pistas</b>: se ten <b>brillo metálico</b> (pirita, galena) ou <b>atrae o ferro</b> (magnetita), é un non silicato. Se se parece a un <b>cristal de vidro</b> e forma parte do granito ou da area, seguramente é un silicato (cuarzo).</p></div>
    <div class="card"><h3><span class="chip">1</span>Clasificación segundo a composición</h3>
      <ul><li><b>Silicatados</b> (silicatos): conteñen <b>silicio</b>. Son os máis abundantes na codia. Compostos por silicio e osíxeno. Ex.: olivino, cuarzo, ortosa, mica, talco, hornblenda.</li>
      <li><b>Non silicatados</b>: <b>non</b> conteñen silicio. Clasifícanse en <b>7 grupos</b>:</li></ul>
      <ul><li><b>Nativos</b>: cobre · <b>Óxidos</b>: magnetita · <b>Sulfuros</b>: pirita</li>
      <li><b>Sulfatos</b>: xeso · <b>Haluros</b>: halita · <b>Carbonatos</b>: calcita · <b>Fosfatos</b>: turquesa</li></ul></div>
    <div class="card"><h3><span class="chip">2</span>Usos dos minerais</h3>
      <ul><li><b>Minerais metálicos (menas)</b>: conteñen metais fáciles de extraer. Olixisto e magnetita → <b>ferro</b> (aceiro); calcopirita → <b>cobre</b> (cables); galena → <b>chumbo</b> (baterías); bauxita → <b>aluminio</b> (construción); cromita → cromo (pinturas).</li>
      <li><b>Cristais</b>: xoiería (diamante, rubí, zafiro), electrónica (cuarzo), óptica (fluorita), coleccións.</li>
      <li><b>Uso industrial</b>: uraninita → <b>uranio</b>; cuarzo → <b>vidro</b>; nitratos e fosfatos → <b>fertilizantes</b>; halita → <b>sal común</b>.</li></ul></div>`,
    quiz:[
      {q:"Que teñen os minerais silicatados?", opts:["Silicio","Ferro","Carbono","Auga"], a:0, fb:"Conteñen silicio (Si)."},
      {q:"En cantos grupos se clasifican os non silicatados?", opts:["En 2","En 5","En 7","En 10"], a:2, fb:"7 grupos."},
      {q:"De que mineral se obtén o cobre?", opts:["Galena","Calcopirita","Bauxita","Halita"], a:1, fb:"Calcopirita → cobre."},
      {q:"De que mineral se obtén o aluminio?", opts:["Bauxita","Olixisto","Galena","Cuarzo"], a:0, fb:"Bauxita → aluminio."},
      {q:"A que grupo pertence a pirita?", opts:["Óxidos","Sulfuros","Carbonatos","Silicatos"], a:1, fb:"Pirita = sulfuro."},
      {q:"Que se obtén da halita?", opts:["Vidro","Sal común","Chumbo","Uranio"], a:1, fb:"Sal común."}
    ],
    hard:[
      {q:"Como se chaman os minerais que conteñen silicio?", ans:"Silicatos (silicatados)", ok:["silicat"]},
      {q:"Como se chaman os minerais que conteñen metais fáciles de extraer?", ans:"Menas", ok:["mena"]},
      {q:"Que metal se obtén da galena?", ans:"Chumbo", ok:["chumbo","plomo"]},
      {q:"Que se fabrica co cuarzo (uso industrial)?", ans:"Vidro", ok:["vidro","vidrio"]},
      {q:"A que grupo pertence a calcita?", ans:"Carbonatos", ok:["carbonat"]},
      {q:"A que grupo pertence a magnetita?", ans:"Óxidos", ok:["oxido"]}
    ],
    games:[
      {type:"classify", title:"Silicato ou non?", bins:["Silicatado (Si)","Non silicatado"], items:[["Olivino",0],["Cuarzo",0],["Ortosa",0],["Mica",0],["Talco",0],["Cobre",1],["Pirita",1],["Halita",1],["Calcita",1],["Magnetita",1],["Xeso",1],["Galena",1]]},
      {type:"match", title:"Mineral e o que se obtén", pairs:[["Calcopirita","Cobre (cables)"],["Galena","Chumbo (baterías)"],["Bauxita","Aluminio"],["Olixisto","Ferro (aceiro)"],["Uraninita","Uranio"],["Halita","Sal común"]]},
      {type:"memory", title:"Os 7 grupos", pairs:[["Nativos","Cobre"],["Óxidos","Magnetita"],["Sulfuros","Pirita"],["Sulfatos","Xeso"],["Haluros","Halita"],["Carbonatos","Calcita"],["Fosfatos","Turquesa"]]}
    ]
  },
  {
    id:"rochas", title:"As rochas", icon:"🪨",
    body:`
    <div class="card"><h3><span class="chip">1</span>Que son as rochas?</h3>
      <p>As rochas son <b>agregados naturais</b> formados por grans dun <b>só mineral</b> ou de <b>varios minerais</b> diferentes.</p></div>
    <div class="card"><h3><span class="chip">2</span>Propiedades das rochas</h3>
      <p>Dependen sobre todo do xeito no que a rocha se formou.</p>
      <ul><li><b>Forma</b>: bloques macizos, moi fragmentadas, en capas horizontais, inclinadas, curvadas...</li>
      <li><b>Composición</b>: os minerais que a forman. Granito: <b>feldespato, cuarzo e mica</b>. Calcaria: <b>calcita</b>.</li>
      <li><b>Textura</b>: forma na que se dispoñen os grans dos minerais.</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>Magmáticas ou ígneas</h3>
      <p>Fórmanse a partir de <b>magmas</b> que ascenden e arrefrían.</p>
      <ul><li><b>Plutónicas</b>: o magma arrefría <b>lentamente</b> no interior da codia. Cristais grandes e visibles. Ex.: <b>granito</b>, <b>gabro</b>.</li>
      <li><b>Volcánicas</b>: o magma arrefría <b>rapidamente</b> na superficie. Sen cristais ou moi pequenos. Ex.: <b>basalto</b>, <b>pumita</b>.</li></ul></div>
    <div class="card"><h3><span class="chip">4</span>Metamórficas</h3>
      <p>Orixínanse pola transformación (<b>metamorfismo</b>) de rochas xa existentes por cambios de <b>presión</b> ou <b>temperatura</b>.</p>
      <ul><li><b>Foliadas</b>: por cambios de presión; minerais en láminas paralelas. Ex.: <b>lousa</b>, <b>xisto</b>, <b>gneis</b>.</li>
      <li><b>Non foliadas</b>: por cambios de temperatura; cristais grandes sen orientación. Ex.: <b>mármore</b>, <b>cuarcita</b>.</li></ul></div>
    <div class="card"><h3><span class="chip">5</span>Sedimentarias</h3>
      <p>Orixínanse pola transformación de <b>sedimentos</b> depositados en concas sedimentarias.</p>
      <ul><li><b>Detríticas</b>: fragmentos pola erosión. <b>Conglomerado</b> (&gt;2 mm) &gt; <b>arenisca</b> (1/16-2 mm) &gt; <b>arxila</b> (&lt;1/16 mm).</li>
      <li><b>Non detríticas</b>: precipitación de substancias disoltas ou restos de seres vivos. Ex.: <b>caliza</b>, <b>evaporitas</b>.</li></ul></div>`,
    quiz:[
      {q:"En cantos grandes grupos se clasifican as rochas?", opts:["Dous","Tres","Cinco","Sete"], a:1, fb:"Magmáticas, metamórficas e sedimentarias."},
      {q:"Como arrefría o magma nas rochas plutónicas?", opts:["Rapidamente na superficie","Lentamente no interior","Coa auga do mar","Non arrefría"], a:1, fb:"Lentamente no interior → cristais grandes."},
      {q:"Cal é unha rocha volcánica?", opts:["Granito","Basalto","Mármore","Arxila"], a:1, fb:"Basalto e pumita son volcánicas."},
      {q:"Que rochas se forman por metamorfismo?", opts:["As sedimentarias","As metamórficas","As plutónicas","As volcánicas"], a:1, fb:"Metamorfismo = transformación por presión ou temperatura."},
      {q:"Cal é unha rocha metamórfica foliada?", opts:["Lousa","Caliza","Gabro","Pumita"], a:0, fb:"Lousa, xisto e gneis son foliadas."},
      {q:"Que rocha detrítica ten os grans máis grandes?", opts:["Arxila","Arenisca","Conglomerado","Caliza"], a:2, fb:"Conglomerado > arenisca > arxila."},
      {q:"Que minerais forman o granito?", opts:["Feldespato, cuarzo e mica","Calcita, xeso e moita halita","Pirita, cobre e un pouco de ouro","Olivino, talco e sal común"], a:0, fb:"Feldespato, cuarzo e mica."}
    ],
    hard:[
      {q:"Escribe os tres grandes grupos de rochas.", ans:"Magmáticas, metamórficas e sedimentarias", ok:[["magmat","igne"],["metamorf"],["sediment"]]},
      {q:"Rochas magmáticas que arrefrían lentamente no interior:", ans:"Plutónicas", ok:["plutonic"]},
      {q:"Rochas magmáticas que arrefrían rapidamente na superficie:", ans:"Volcánicas", ok:["volcanic"]},
      {q:"Escribe unha rocha metamórfica non foliada.", ans:"Mármore ou cuarcita", ok:["marmo","marmol","cuarcita"]},
      {q:"Escribe unha rocha sedimentaria detrítica.", ans:"Conglomerado, arenisca ou arxila", ok:["conglomerad","arenisca","arxila","arcilla"]},
      {q:"Que son as rochas?", ans:"Agregados naturais de grans dun ou varios minerais", ok:["mineral"]}
    ],
    games:[
      {type:"classify", title:"Que tipo de rocha é?", bins:["🌋 Magmática","🔥 Metamórfica","🏖️ Sedimentaria"], items:[["Granito",0],["Gabro",0],["Basalto",0],["Pumita",0],["Lousa",1],["Xisto",1],["Gneis",1],["Mármore",1],["Cuarcita",1],["Conglomerado",2],["Arenisca",2],["Arxila",2],["Caliza",2]]},
      {type:"order", title:"Tamaño dos grans", prompt:"Ordena as rochas detríticas de grans máis grandes a máis pequenos", items:["Conglomerado (>2 mm)","Arenisca (1/16-2 mm)","Arxila (<1/16 mm)"]},
      {type:"match", title:"Une os conceptos", pairs:[["Plutónicas","Arrefrían lentamente no interior"],["Volcánicas","Arrefrían rapidamente fóra"],["Foliadas","Láminas por presión"],["Non foliadas","Cristais por temperatura"],["Detríticas","Fragmentos da erosión"],["Non detríticas","Precipitación ou restos de seres vivos"]]}
    ]
  },
  {
    id:"usosrochas", title:"Usos das rochas", icon:"🏗️",
    body:`
    <div class="card"><h3><span class="chip">1</span>Aplicacións das rochas</h3>
      <ul><li><b>Industriais</b>: <b>cemento</b> (caliza + arxila), <b>formigón</b> (cemento + auga + grava + area), <b>cerámica</b> (arxila).</li>
      <li><b>Ornamentais</b>: esculturas, paredes, solos... con <b>mármore</b>, <b>granito</b> e <b>lousa</b>.</li></ul></div>
    <div class="card"><h3><span class="chip">2</span>Combustibles fósiles</h3>
      <p>Compostos de <b>orixe orgánica</b> ricos en enerxía que se usan como combustibles.</p>
      <ul><li><b>Carbón</b>: de <b>restos vexetais</b> acumulados en lagos, pantanos, marismas e deltas nun ambiente <b>anaerobio</b> (sen osíxeno). Tipos: <b>turba, lignito, hulla e antracita</b>.</li>
      <li><b>Petróleo</b>: en concas mariñas pouco profundas onde viviron moitos <b>organismos planctónicos</b>.</li></ul></div>`,
    quiz:[
      {q:"Con que se fai o cemento?", opts:["Caliza e arxila","Granito e lousa","Ferro e cobre","Sal e auga"], a:0, fb:"Cemento = caliza + arxila."},
      {q:"Que rocha se usa para a cerámica?", opts:["Arxila","Mármore","Basalto","Granito"], a:0, fb:"A cerámica faise con arxila."},
      {q:"Cal destas é unha rocha ornamental?", opts:["Mármore","Arxila","Turba","Petróleo"], a:0, fb:"Mármore, granito e lousa."},
      {q:"De que se orixina o carbón?", opts:["De restos vexetais","De organismos planctónicos","De magma arrefriado","De sal do mar"], a:0, fb:"Restos vexetais sen osíxeno."},
      {q:"Onde se orixina o petróleo?", opts:["En concas mariñas pouco profundas","No núcleo da Terra, moi fondo","Dentro dos volcáns activos","Nos desertos de area quente"], a:0, fb:"Con moitos organismos planctónicos."}
    ],
    hard:[
      {q:"Que leva o formigón?", ans:"Cemento + auga + grava + area", ok:[["cemento"],["auga","agua","grava","area"]]},
      {q:"Escribe os 4 tipos de carbón (polo menos 2).", ans:"Turba, lignito, hulla e antracita", ok:["turba","lignito","hulla","antracita"]},
      {q:"Como se chama un ambiente sen osíxeno?", ans:"Anaerobio", ok:["anaerob"]},
      {q:"Escribe os dous combustibles fósiles do tema.", ans:"Carbón e petróleo", ok:[["carbon"],["petrole"]]}
    ],
    games:[
      {type:"classify", title:"Industrial ou ornamental?", bins:["🏭 Industrial","🗿 Ornamental"], items:[["Cemento",0],["Formigón",0],["Cerámica",0],["Esculturas",1],["Paredes de mármore",1],["Solos de granito",1],["Tellados de lousa",1]]},
      {type:"pick", title:"Tipos de carbón", prompt:"Toca só os tipos de carbón", items:[["Turba",true],["Lignito",true],["Hulla",true],["Antracita",true],["Petróleo",false],["Granito",false],["Mármore",false],["Arxila",false]]},
      {type:"tf", title:"Verdadeiro ou falso", items:[["Os combustibles fósiles teñen orixe orgánica",true],["O carbón fórmase con moito osíxeno",false,"Nun ambiente anaerobio (sen osíxeno)"],["O petróleo vén de organismos planctónicos",true],["A cerámica faise con arxila",true],["O formigón leva cemento, auga, grava e area",true],["O mármore é unha rocha industrial para cemento",false,"É ornamental"]]}
    ]
  }
  ]
});
