/* Asignatura: Castellano (Lengua castellana, 1º ESO). Unidades 1 y 2 del libro. */
registerSubject({
  id:"castellano", name:"Castellano", icon:"📚", color:"var(--orange)", colorD:"var(--orange-d)",
  sections:[
  {
    id:"comunicacion", title:"La comunicación", icon:"💬",
    body:`
    <div class="card"><h3><span class="chip">1</span>¿Qué es la comunicación?</h3>
      <p>Es un <b>proceso</b> mediante el cual un <b>emisor</b> transmite información a un <b>receptor</b>.</p>
      <p>La forma más directa y cotidiana es la <b>conversación</b>: el emisor se llama <b>hablante</b> y el receptor, <b>oyente</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Los elementos de la comunicación</h3>
      <ul><li><b>Emisor</b>: persona que emite el mensaje.</li>
      <li><b>Receptor</b>: persona que recibe el mensaje.</li>
      <li><b>Mensaje</b>: información que el emisor dirige al receptor.</li>
      <li><b>Canal</b>: medio físico por el que circula el mensaje. Si es hablado, canal <b>auditivo</b> (ondas del aire); si es escrito, canal <b>visual</b>.</li>
      <li><b>Código</b>: conjunto de reglas y signos que comparten emisor y receptor (por ejemplo, la <b>lengua castellana</b>).</li>
      <li><b>Situación</b>: circunstancias que rodean al emisor y al receptor y permiten <b>interpretar</b> bien el mensaje.</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>Ejemplo del libro</h3>
      <p>Un niño cocinero dice: «¡Ganaremos una <b>estrella</b> con esta receta!». Como están en una cocina, entendemos que la estrella es un <b>premio</b> de la guía Michelin, no un astro del cielo. Eso lo aclara la <b>situación</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>La comunicación verbal</h3>
      <p>Se produce mediante <b>signos lingüísticos</b> o palabras. Puede ser <b>hablada</b> o <b>escrita</b>. Cuando es hablada se llama comunicación <b>oral</b>.</p>
      <p>La <b>conversación</b> es la forma de comunicación oral más característica. Hay dos tipos:</p>
      <ul><li><b>Espontánea o coloquial</b>: no se respeta el turno y no hay un plan previo; se improvisan los temas. La comunicación no verbal es muy importante.</li>
      <li><b>Planificada</b>: se respeta el turno, hay un plan previo y los temas están decididos. Ejemplo: una <b>entrevista</b> de un periodista a un político.</li></ul></div>
    <div class="card"><h3><span class="chip">4</span>Estructura de la conversación espontánea</h3>
      <ul><li><b>Apertura</b>: saludo inicial, toma de contacto («¡Hola, papá!»).</li>
      <li><b>Presentación</b>: introducción del tema («Necesito diez euros»).</li>
      <li><b>Desarrollo</b>: intercambio de mensajes sobre el tema.</li>
      <li><b>Cierre</b>: despedida, fin de la comunicación («Hasta luego, hija»).</li></ul></div>
    <div class="card"><h3><span class="chip">5</span>La comunicación no verbal</h3>
      <p>En ella <b>no se usan palabras</b>: un gesto, un saludo con la mano, unas nubes negras, un semáforo en rojo o un código de barras también informan.</p>
      <ul><li><b>Comunicación gestual</b> (lenguaje corporal): mirada, tono de voz, cejas, hombros, manos, distancia con el receptor, risa…</li>
      <li><b>Comunicación mediante imágenes</b>: carteles, anuncios, mapas, gráficos, señales de tráfico, dibujos, fotografías, planos…</li></ul></div>`,
    quiz:[
      {q:"¿Quién es el emisor?", opts:["Quien recibe el mensaje","Quien emite el mensaje","El medio por el que va el mensaje","Las reglas que se usan"], a:1, fb:"El emisor es la persona que emite el mensaje."},
      {q:"Hablas por teléfono con tu abuela. ¿Cuál es el canal?", opts:["Auditivo","Visual","El castellano","Tu abuela"], a:0, fb:"Un mensaje hablado viaja por el aire: canal auditivo."},
      {q:"¿Qué es el código?", opts:["La persona que habla","El contenido del mensaje","Las reglas y signos, como la lengua","El lugar y el momento en que estamos hablando"], a:2, fb:"El código es el conjunto de reglas y signos, por ejemplo la lengua castellana."},
      {q:"¿Qué elemento nos ayuda a interpretar bien el mensaje?", opts:["El canal","El receptor de la carta","El código","La situación"], a:3, fb:"La situación (las circunstancias) aclara el sentido del mensaje."},
      {q:"¿Cómo es una conversación planificada?", opts:["Se respeta el turno y hay un plan previo","Nadie respeta el turno de palabra y se improvisa todo","Solo hay gestos","No tiene temas"], a:0, fb:"Por ejemplo, una entrevista: temas y preguntas pactados."},
      {q:"¿En qué parte de la conversación decimos «¡Hola!»?", opts:["Cierre","Desarrollo","Apertura","Presentación"], a:2, fb:"La apertura es el saludo inicial."},
      {q:"Un semáforo en rojo es comunicación...", opts:["Verbal oral","No verbal","Verbal escrita","Planificada"], a:1, fb:"No usa palabras: es comunicación no verbal mediante imágenes."}
    ],
    hard:[
      {q:"Escribe los seis elementos de la comunicación.", ans:"Emisor, receptor, mensaje, canal, código y situación", ok:[["emisor"],["receptor"],["mensaje"],["canal"],["codigo"],["situacion"]]},
      {q:"¿Cómo se llama la comunicación verbal hablada?", ans:"Comunicación oral", ok:["oral"]},
      {q:"¿Cuáles son las cuatro partes de la conversación espontánea?", ans:"Apertura, presentación, desarrollo y cierre", ok:[["apertura"],["presentacion"],["desarrollo"],["cierre"]]},
      {q:"¿Qué dos tipos de comunicación no verbal hay?", ans:"Gestual (lenguaje corporal) y mediante imágenes", ok:[["gest","corporal"],["imagen"]]}
    ],
    games:[
      {type:"match", title:"Los elementos", pairs:[["Emisor","Quien emite el mensaje"],["Receptor","Quien recibe el mensaje"],["Mensaje","La información"],["Canal","Medio físico del mensaje"],["Código","Reglas y signos (la lengua)"],["Situación","Circunstancias que lo rodean"]]},
      {type:"order", title:"La conversación", prompt:"Ordena las partes de la conversación espontánea", items:["Apertura: saludo inicial","Presentación: introducción del tema","Desarrollo: intercambio de mensajes","Cierre: despedida"]},
      {type:"classify", title:"¿Verbal o no verbal?", bins:["🗣️ Verbal","👋 No verbal"], items:[["Una carta",0],["Una llamada de teléfono",0],["Un mensaje de WhatsApp escrito",0],["Una entrevista en la radio",0],["Saludar con la mano",1],["Un semáforo en rojo",1],["Arquear las cejas",1],["Una señal de tráfico",1],["Unas nubes negras",1]]}
    ]
  },
  {
    id:"texto", title:"El texto y la adecuación", icon:"📝",
    body:`
    <div class="card"><h3><span class="chip">1</span>¿Qué es un texto?</h3>
      <p>Un conjunto de enunciados con <b>extensión variable</b> cuyo significado completo depende de la <b>intención</b> del emisor y de la <b>situación</b> en la que se encuentra.</p></div>
    <div class="card"><h3><span class="chip">2</span>Extensión, intención y situación</h3>
      <ul><li><b>Extensión variable</b>: un texto puede ser una interjección (<b>¡Oh!</b>), una frase sin verbo (<b>¡Qué lío!</b>), una oración (<b>Tengo sueño</b>) o un libro entero, como <b>El Quijote</b> de Miguel de Cervantes.</li>
      <li><b>Intención</b>: el propósito con el que se dice algo: expresar un estado de ánimo, informar, dar órdenes, instruir, protestar, hacer reír…</li>
      <li><b>Situación</b>: las circunstancias físicas, emocionales, laborales, sociales… que rodean al mensaje (el patio del colegio, un cine, la consulta del médico…). También se llama <b>contexto extralingüístico</b>.</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>«¡Menudo banco!»</h3>
      <p>Una corredora cansada ve un banco roto en el parque y dice «¡Menudo banco!». Es un texto completo porque tiene una <b>intención</b> clara (expresar su disgusto) y se entiende por la <b>situación</b>.</p>
      <p>Por eso, <b>unas mismas palabras</b> pueden dar lugar a <b>varios textos diferentes</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>¿Qué es un texto adecuado?</h3>
      <p>Un texto es <b>adecuado</b> cuando su <b>contenido</b> y su <b>forma</b> se ajustan a la intención del emisor, a las características del receptor, a la situación y al canal.</p>
      <p>La adecuación se nota sobre todo en el <b>léxico</b> (las palabras), que será más o menos culto.</p></div>
    <div class="card"><h3><span class="chip">4</span>Los criterios de adecuación</h3>
      <ul><li><b>Intención del emisor</b>: expresar sentimientos, dar órdenes, intentar convencer, informar, dar instrucciones, hacer reír…</li>
      <li><b>Receptor</b>: experto o inexperto, conocido o desconocido, su edad, si está interesado o no…</li>
      <li><b>Situación formal</b>: lengua culta y trato de respeto (<b>usted</b>). <b>Situación informal</b>: lengua coloquial y confianza (<b>tuteo</b>).</li>
      <li><b>Canal oral</b>: improvisación y expresividad corporal. <b>Canal escrito</b>: exige <b>planificación</b> y <b>corrección</b>.</li>
      <li>En la <b>mensajería instantánea</b> se escribe como se habla: lenguaje <b>informal y abreviado</b>.</li></ul></div>`,
    quiz:[
      {q:"¿Cuál de estos puede ser un texto completo?", opts:["Solo un libro entero","Solo un párrafo largo de varias líneas","Desde un «¡Oh!» hasta un libro","Solo una oración con verbo"], a:2, fb:"La extensión es variable: ¡Oh! también puede ser un texto."},
      {q:"¿Qué es la intención de un texto?", opts:["El propósito con que se dice","El número de palabras","El papel o la pantalla donde se escribe","El idioma"], a:0, fb:"Informar, protestar, hacer reír…"},
      {q:"¿Qué otro nombre recibe la situación?", opts:["Código lingüístico","Contexto extralingüístico","Canal auditivo","Mensaje escrito o mensaje oral"], a:1, fb:"Situación = contexto extralingüístico."},
      {q:"En una situación formal se usa...", opts:["El tuteo y palabrotas","Emoticonos y muchas abreviaturas","Lenguaje abreviado","La lengua culta y el usted"], a:3, fb:"Lo formal pide lengua culta y trato de respeto."},
      {q:"¿Dónde se nota sobre todo la adecuación?", opts:["En el léxico","En el tamaño de la letra","En la puntuación","En la longitud"], a:0, fb:"En las palabras que elegimos, más o menos cultas."},
      {q:"¿Cómo es el lenguaje de la mensajería instantánea?", opts:["Muy culto y planificado","Informal y abreviado","Siempre con usted","Sin emociones de ningún tipo, como un informe"], a:1, fb:"Toma las características del canal oral."}
    ],
    hard:[
      {q:"¿De qué dos cosas depende el significado completo de un texto?", ans:"De la intención del emisor y de la situación", ok:[["intencion"],["situacion","contexto"]]},
      {q:"¿Qué ejemplo de libro entero pone el libro de texto?", ans:"El Quijote, de Miguel de Cervantes", ok:["quijote","cervantes"]},
      {q:"¿Cuándo es adecuado un texto?", ans:"Cuando su contenido y su forma se ajustan a la intención, al receptor, a la situación y al canal", ok:["ajust","adapt"]},
      {q:"¿Qué exige el canal escrito?", ans:"Planificación y corrección lingüística", ok:["planific","correc"]}
    ],
    games:[
      {type:"classify", title:"¿Formal o informal?", bins:["🎩 Formal","😎 Informal"], items:[["Hablar con el director del instituto",0],["Una carta para pedir trabajo",0],["Presentar un libro",0],["Un aviso del Ayuntamiento",0],["Charlar con tus amigos",1],["Un WhatsApp a tu hermana",1],["Hablar con tu familia en casa",1],["Bromear en el patio",1]]},
      {type:"tf", title:"Verdadero o falso", items:[["«¡Oh!» puede ser un texto",true],["Un texto siempre tiene que ser largo",false,"La extensión es variable"],["Unas mismas palabras pueden formar textos distintos",true],["En una situación formal se tutea",false,"Se usa usted"],["El canal escrito exige planificación",true],["La adecuación se refleja sobre todo en el léxico",true]]},
      {type:"match", title:"Los criterios", pairs:[["Intención","Informar, convencer, hacer reír"],["Receptor","Experto o inexperto"],["Situación formal","Lengua culta y usted"],["Situación informal","Lengua coloquial y tuteo"],["Canal escrito","Planificación y corrección"]]}
    ]
  },
  {
    id:"signo", title:"El signo y los emoticonos", icon:"🚦",
    body:`
    <div class="card"><h3><span class="chip">1</span>¿Qué es un signo?</h3>
      <p>Un signo es cualquier <b>elemento físico</b> (sonoro, visual, olfativo, gustativo o táctil) que nos transmite <b>información</b>. Un corazón atravesado por una flecha significa amor.</p>
      <p>La parte física del signo es el <b>significante</b> y la información que aporta es su <b>significado</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Signos naturales: el indicio</h3>
      <p>Su significado sale de la <b>observación de la naturaleza</b>, por una relación de <b>causa-efecto</b>.</p>
      <p>Ejemplos: las hojas secas indican que ha llegado el <b>otoño</b>; un trueno indica <b>tormenta</b>; la fiebre es indicio de <b>enfermedad</b>; una mancha de humedad en el techo indica <b>goteras</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>Signos artificiales</h3>
      <p>Son creados por el <b>ser humano</b> dentro de una cultura.</p>
      <ul><li><b>Señal</b>: transmite <b>órdenes</b>. Una señal de tráfico de dirección obligatoria, el silbato que termina un partido, la alarma de evacuación.</li>
      <li><b>Icono</b>: se <b>parece</b> a lo que representa (relación de <b>semejanza</b>). Una foto de Rosalía, el mapa de un país, el plano de una casa.</li>
      <li><b>Símbolo</b>: su relación con el significado es <b>arbitraria</b> (no hay razón que lo justifique). Los anillos olímpicos, la paloma de la paz, la bandera, el himno, la cruz roja.</li></ul>
      <p>Todas las <b>palabras</b> son símbolos, excepto las <b>onomatopeyas</b> (tictac, zigzag, quiquiriquí).</p></div>
    <div class="card"><h3><span class="chip">4</span>Los emoticonos</h3>
      <p>Los emoticonos (o <b>pictogramas</b>) son signos visuales que se usan en Internet y en los móviles para expresar <b>emociones</b> de forma <b>directa y abreviada</b>.</p>
      <p>Empezaron como secuencias de caracteres del <b>teclado</b>: :-) sonrisa, :-( triste, ;-) guiño, xD mucha risa, [] abrazo, :-* beso.</p>
      <p>Se han popularizado gracias a las <b>redes sociales</b>. También sirven para designar <b>objetos y acciones</b>, y su dibujo puede cambiar en cada aplicación (WhatsApp, Line, Twitter…).</p></div>`,
    quiz:[
      {q:"¿Cómo se llama la parte física del signo?", opts:["Significado","Significante","Símbolo","Código de la lengua"], a:1, fb:"Significante = parte física; significado = información."},
      {q:"La fiebre es un indicio de enfermedad. ¿Qué relación hay?", opts:["Causa-efecto","Semejanza","Arbitraria","Ninguna relación, es casualidad"], a:0, fb:"Los indicios son signos naturales de causa-efecto."},
      {q:"Una foto de tu cara es...", opts:["Un indicio","Una señal","Un icono","Un símbolo"], a:2, fb:"Se parece a lo que representa: icono."},
      {q:"La paloma de la paz es...", opts:["Un icono, porque es un dibujo","Un indicio natural","Una señal de tráfico","Un símbolo"], a:3, fb:"Su relación con la paz es arbitraria: símbolo."},
      {q:"¿Qué transmiten muchas señales?", opts:["Órdenes","Recuerdos","Olores","Nada"], a:0, fb:"Por ejemplo, la señal de dirección obligatoria."},
      {q:"¿Qué palabras NO son símbolos?", opts:["Los nombres propios","Las onomatopeyas","Los verbos","Las palabras largas de más de tres sílabas"], a:1, fb:"Tictac o quiquiriquí imitan el sonido real."},
      {q:"¿Qué significa el emoticono ;-)?", opts:["Triste","Beso","Guiño","Abrazo"], a:2, fb:"El punto y coma hace de ojo guiñado."}
    ],
    hard:[
      {q:"¿Cómo se llama la información que aporta un signo?", ans:"Significado", ok:["significado"]},
      {q:"¿Qué tipo de signo es un trueno que indica tormenta?", ans:"Un indicio (signo natural)", ok:["indicio","natural"]},
      {q:"¿Qué tres tipos de signos artificiales hay?", ans:"Señal, icono y símbolo", ok:[["senal"],["icono"],["simbolo"]]},
      {q:"¿Qué otro nombre reciben los emoticonos?", ans:"Pictogramas", ok:["pictograma"]}
    ],
    games:[
      {type:"classify", title:"¿Qué tipo de signo es?", bins:["🍂 Indicio","⛔ Señal","🖼️ Icono","🕊️ Símbolo"], items:[["Hojas secas en el suelo",0],["Un trueno",0],["Una mancha de humedad",0],["Silbato final del partido",1],["Alarma de evacuar",1],["Dirección obligatoria",1],["Foto de una persona",2],["Mapa de un país",2],["Plano de una casa",2],["Anillos olímpicos",3],["Paloma de la paz",3],["Bandera de un país",3]]},
      {type:"match", title:"Emoticonos", pairs:[[":-)","Sonrisa"],[":-(","Triste"],[";-)","Guiño"],["xD","Mucha risa"],["[ ]","Abrazo"],[":-*","Beso"]]},
      {type:"tf", title:"Verdadero o falso", items:[["Un signo puede ser un olor",true],["Los indicios los crea el ser humano",false,"Son naturales"],["El icono se parece a lo que representa",true],["Las palabras son iconos",false,"Son símbolos"],["Los emoticonos expresan emociones de forma abreviada",true],["Un emoticono se ve igual en todas las aplicaciones",false,"Puede variar"]]}
    ]
  },
  {
    id:"lenguas", title:"El lenguaje y las lenguas de España", icon:"🌍",
    body:`
    <div class="card"><h3><span class="chip">1</span>El lenguaje y las lenguas</h3>
      <p>El <b>lenguaje</b> es la capacidad del ser humano para comunicarse mediante la palabra. Cada comunidad lo concreta en una <b>lengua</b> o <b>idioma</b>: el español, el inglés, el alemán…</p>
      <p>En el mundo hay más de <b>6.000 lenguas</b>, repartidas de forma muy desigual.</p>
      <p>Las más habladas como lengua materna son el <b>chino</b> y el <b>español</b>, seguidas del inglés, el hindi y el árabe.</p></div>
    <div class="card"><h3><span class="chip">2</span>¿Qué hace importante a una lengua?</h3>
      <p>Su número de <b>hablantes</b>, su <b>extensión geográfica</b>, ser lengua <b>oficial</b> en organismos internacionales, el desarrollo económico de sus hablantes, su <b>tradición cultural y literaria</b> y el número de <b>traducciones</b>.</p>
      <p>Con estos criterios, el <b>castellano</b> es una de las <b>tres lenguas más importantes</b> del mundo, junto con el <b>inglés</b> y el <b>francés</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>Las familias lingüísticas</h3>
      <p>Las lenguas que comparten un mismo origen forman una <b>familia lingüística</b>. La más importante es la <b>indoeuropea</b>: casi la mitad del mundo habla lenguas que vienen del <b>indoeuropeo</b>, que se hablaba hacia el año <b>3000 a. C.</b></p></div>
    <div class="card"><h3><span class="chip">4</span>Las lenguas de España</h3>
      <p>España es un país <b>plurilingüe</b>. El <b>español</b> (castellano) es la lengua oficial del Estado; el <b>catalán</b>, el <b>gallego</b> y el <b>vasco</b> son <b>cooficiales</b> en sus comunidades.</p>
      <ul><li><b>Castellano</b>: oficial en <b>21 países</b>. Lo hablan más de <b>591 millones</b> de personas (el 7,5 % del mundo). Estados Unidos tiene la segunda comunidad hispanohablante, después de México.</li>
      <li><b>Catalán</b>: Cataluña, Baleares y Comunidad Valenciana (allí se llama <b>valenciano</b>). Es la única lengua oficial de <b>Andorra</b>. Más de 12,5 millones de hablantes.</li>
      <li><b>Gallego</b>: Galicia y zonas cercanas de León y Zamora. Unos <b>3,2 millones</b> de hablantes.</li>
      <li><b>Vasco o euskera</b>: País Vasco, parte de Navarra y el sur de Francia. Es la única lengua española que <b>no viene del latín</b>. Casi un millón de hablantes.</li></ul></div>
    <div class="card"><h3><span class="chip">5</span>Bilingüismo y diglosia</h3>
      <ul><li><b>Bilingüismo</b>: dos lenguas conviven en un territorio en <b>igualdad</b> de condiciones.</li>
      <li><b>Diglosia</b>: una lengua es <b>dominante</b> y tiene prestigio (se usa en lo formal y en la cultura); la otra queda en segundo lugar, <b>desprestigiada</b>, y solo se usa en el ámbito familiar.</li></ul></div>`,
    quiz:[
      {q:"¿Qué es el lenguaje?", opts:["Un idioma concreto como el inglés","La capacidad de comunicarse con la palabra","Un diccionario","Un dialecto"], a:1, fb:"El lenguaje es la capacidad; la lengua es su forma concreta."},
      {q:"¿Cuántas lenguas hay en el mundo?", opts:["Más de 6.000","Unas cincuenta","Cuatro","Un millón"], a:0, fb:"Más de 6.000, con una distribución muy desigual."},
      {q:"¿Cuál es la familia lingüística más importante?", opts:["La china","La árabe","La indoeuropea","La vasca, la más antigua de Europa"], a:2, fb:"Casi la mitad del mundo habla lenguas indoeuropeas."},
      {q:"¿Qué lengua de España no viene del latín?", opts:["El gallego","El catalán","El castellano","El vasco"], a:3, fb:"El vasco o euskera no procede del latín."},
      {q:"¿En cuántos países es oficial el español?", opts:["En 21","En 3","En 100","Solo en España"], a:0, fb:"En veintiún países."},
      {q:"¿Dónde es el catalán la única lengua oficial?", opts:["En Cataluña","En Andorra","En Francia","En Galicia"], a:1, fb:"En el Principado de Andorra."},
      {q:"Dos lenguas conviven, pero una tiene prestigio y la otra solo se usa en casa. Es...", opts:["Bilingüismo","Un dialecto","Diglosia","Una jerga"], a:2, fb:"Diglosia: una lengua dominante y otra desprestigiada."}
    ],
    hard:[
      {q:"¿Qué cuatro lenguas se hablan oficialmente en España?", ans:"Castellano, catalán, gallego y vasco", ok:[["castellano","espanol"],["catalan"],["gallego"],["vasco","euskera"]]},
      {q:"¿Cómo se llama un país donde se hablan varias lenguas?", ans:"Plurilingüe", ok:["plurilingue"]},
      {q:"¿Cuándo se hablaba el indoeuropeo?", ans:"Hacia el año 3000 a. C.", ok:["3000","3.000"]},
      {q:"¿Qué es el bilingüismo?", ans:"Dos lenguas que conviven en un territorio en igualdad", ok:["igualdad","igual"]}
    ],
    games:[
      {type:"match", title:"Lenguas de España", pairs:[["Castellano","Oficial en 21 países"],["Catalán","Única oficial en Andorra"],["Gallego","Galicia, León y Zamora"],["Vasco","No viene del latín"],["Valenciano","Catalán de la C. Valenciana"]]},
      {type:"tf", title:"Verdadero o falso", items:[["El español es una de las tres lenguas más importantes",true],["En el mundo hay unas cien lenguas",false,"Más de 6.000"],["El gallego se habla también en zonas de León y Zamora",true],["El vasco viene del latín",false,"Es la única que no"],["En la diglosia las dos lenguas son iguales",false,"Eso es bilingüismo"],["Estados Unidos tiene muchos hispanohablantes",true]]},
      {type:"hangman", title:"Palabra oculta", words:[["Diglosia","Una lengua dominante y otra desprestigiada"],["Plurilingüe","País con varias lenguas"],["Indoeuropea","Familia lingüística más importante"],["Euskera","Otro nombre del vasco"]]}
    ]
  },
  {
    id:"variedades", title:"Las variedades de la lengua", icon:"🗺️",
    body:`
    <div class="card"><h3><span class="chip">1</span>Variedades geográficas: los dialectos</h3>
      <p>Una lengua no se habla igual en todos sitios: cambian el <b>acento</b>, la <b>pronunciación</b>, el <b>vocabulario</b> e incluso la gramática. Estas variantes son los <b>dialectos</b>.</p>
      <p>Ningún dialecto es mejor que otro. La <b>lengua estándar</b> establece la <b>norma</b>: qué usos se consideran correctos.</p></div>
    <div class="card"><h3><span class="chip">2</span>Los dialectos del castellano</h3>
      <ul><li><b>Septentrionales</b>: en la mitad <b>norte</b>, con influencia del asturleonés y del navarroaragonés (de ahí vienen el <b>bable</b> y las <b>fablas aragonesas</b>).</li>
      <li><b>Meridionales</b>: en la mitad <b>sur</b> y en <b>Canarias</b>. Tienen <b>seseo</b> (pronunciar la z como s: <i>seresa</i> por cereza), <b>ceceo</b> (la s como z: <i>zozo</i> por soso), <b>aspiración</b> de la -s final (<i>lah botah</i>) y <b>ustedes</b> en lugar de vosotros.</li>
      <li><b>De transición</b>: el <b>extremeño</b> y el <b>murciano</b>.</li>
      <li><b>Español de América</b>: cinco zonas (mexicana-centroamericana, caribeña, andina, chilena y rioplatense).</li>
      <li><b>Históricos</b>: el <b>mozárabe</b> (cristianos en territorio musulmán en la Edad Media) y el <b>sefardí</b> (judíos expulsados en <b>1492</b>, que aún se habla).</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>Variedades sociales: los niveles de uso</h3>
      <p>La lengua cambia según el <b>perfil social</b> del hablante: su nivel cultural, edad, sexo, si vive en el campo o en la ciudad, su profesión…</p>
      <ul><li><b>Culto</b>: hablantes <b>instruidos</b> que manejan el idioma con soltura y lo adaptan a cada situación.</li>
      <li><b>Medio o estándar</b>: el de los <b>medios de comunicación</b>.</li>
      <li><b>Popular</b>: el de la <b>vida diaria</b>, espontáneo y natural.</li></ul>
      <p>No hay que confundir lo popular con la <b>lengua vulgar</b>, que son errores por falta de formación: <i>cocreta</i> por croqueta, <i>vinistes</i> por viniste, <i>contra más</i> por cuanto más, <i>pienso de que</i> por pienso que.</p>
      <p>Las <b>jergas</b> son el vocabulario específico de grupos <b>profesionales</b> (médicos, abogados, estudiantes) o <b>sociales</b> (raperos, skaters, góticos…).</p></div>
    <div class="card"><h3><span class="chip">4</span>Variedades según la situación: el registro</h3>
      <p>No hablamos igual en casa que en la calle con los amigos o con un profesor. Según la persona, el tema, la intención o el canal, usamos un <b>registro formal</b> o <b>informal</b>.</p></div>`,
    quiz:[
      {q:"¿Qué son los dialectos?", opts:["Lenguas inventadas por escritores","Variantes según la zona","Errores al hablar","Palabras de los médicos"], a:1, fb:"Son las variedades geográficas de una lengua."},
      {q:"Decir «seresa» en vez de «cereza» es...", opts:["Seseo","Ceceo","Aspiración","Una jerga"], a:0, fb:"Seseo: pronunciar la z como s."},
      {q:"¿Dónde se hablan los dialectos meridionales?", opts:["En el norte","En América del Sur y en Filipinas","En el sur y en Canarias","En Francia"], a:2, fb:"Meridional = del sur."},
      {q:"¿Qué es el sefardí?", opts:["Un dialecto del norte de la península","La jerga de los raperos","El dialecto de Murcia","El de los judíos expulsados"], a:3, fb:"Es un dialecto histórico que sobrevive hasta hoy."},
      {q:"¿Qué nivel de uso tienen los medios de comunicación?", opts:["Medio o estándar","Culto","Vulgar, lleno de errores","Popular"], a:0, fb:"El nivel medio o estándar."},
      {q:"«Cocreta» y «vinistes» son ejemplos de...", opts:["Lengua culta","Lengua vulgar","Registro formal","Seseo"], a:1, fb:"Son vulgarismos por falta de formación."},
      {q:"El vocabulario propio de los médicos o los skaters es una...", opts:["Diglosia","Familia léxica","Jerga","Lengua estándar"], a:2, fb:"Las jergas tienen un vocabulario específico."}
    ],
    hard:[
      {q:"¿Qué es el ceceo?", ans:"Pronunciar la s como z (zozo por soso)", ok:["s como z","zozo","pronunciar la s"]},
      {q:"¿Cuáles son los tres niveles de uso?", ans:"Culto, medio o estándar y popular", ok:[["culto"],["medio","estandar"],["popular"]]},
      {q:"Nombra los dos dialectos de transición.", ans:"El extremeño y el murciano", ok:[["extremen"],["murcian"]]},
      {q:"¿Qué establece la lengua estándar?", ans:"La norma: los usos que se consideran correctos", ok:["norma","correct"]}
    ],
    games:[
      {type:"classify", title:"¿Qué variedad es?", bins:["🗺️ Geográfica","👥 Social"], items:[["Seseo andaluz",0],["Hablar con acento canario",0],["El español de México",0],["Decir ustedes por vosotros",0],["La jerga de los médicos",1],["Decir «cocreta»",1],["El vocabulario de los skaters",1],["El nivel culto",1]]},
      {type:"match", title:"Rasgos del sur", pairs:[["Seseo","Seresa por cereza"],["Ceceo","Zozo por soso"],["Aspiración","Lah botah por las botas"],["Ustedes","En lugar de vosotros"]]},
      {type:"tf", title:"Verdadero o falso", items:[["Hay dialectos mejores que otros",false,"Ninguno es mejor"],["El bable viene del asturleonés",true],["Lo popular y lo vulgar son lo mismo",false,"Lo vulgar son errores"],["Con un profesor solemos usar un registro formal",true],["El español de América tiene cinco zonas",true],["El mozárabe se habla hoy en Madrid",false,"Es un dialecto histórico"]]}
    ]
  },
  {
    id:"palabra", title:"La palabra: lexema y morfemas", icon:"🧩",
    body:`
    <div class="card"><h3><span class="chip">1</span>¿Qué es una palabra?</h3>
      <p>La <b>palabra</b> es la <b>unidad básica</b> de la lengua dotada de <b>significado</b>. Al hablar la separamos con <b>pausas</b> y al escribir, con <b>espacios en blanco</b>.</p>
      <p>El conjunto de palabras de una lengua es su <b>léxico</b>. El <b>Diccionario de la lengua española (DLE)</b>, de la <b>RAE</b> y la ASALE, recoge cerca de <b>90.000</b> palabras.</p></div>
    <div class="card"><h3><span class="chip">2</span>Lexema y morfemas</h3>
      <ul><li><b>Lexema</b>: la <b>raíz</b> de la palabra. Aporta el significado que buscamos en el diccionario.</li>
      <li><b>Morfema</b>: se añade a la raíz para <b>precisar</b> su significado.</li></ul>
      <p>Ejemplo: <b>gatitos</b> = <b>gat-</b> (lexema) + <b>-it-</b> (diminutivo) + <b>-o</b> (masculino) + <b>-s</b> (plural).</p></div>
    <div class="card"><h3><span class="chip">3</span>Morfemas flexivos</h3>
      <p>Aportan <b>información gramatical</b>.</p>
      <ul><li>En <b>nombres y adjetivos</b>: <b>género</b> (chic-o, chic-a) y <b>número</b> (estudiante-s). Los adjetivos también expresan <b>grado</b> (clar-ísim-o).</li>
      <li>En los <b>verbos</b> se llaman <b>desinencias verbales</b>: expresan tiempo, modo, número, persona, aspecto y voz (am-o, am-aste, am-emos).</li></ul></div>
    <div class="card"><h3><span class="chip">4</span>Morfemas derivativos</h3>
      <p>Sirven para <b>formar palabras nuevas</b> (lexicalizadores) o para dar un <b>matiz expresivo</b> (apreciativos).</p>
      <p>Si van <b>delante</b> del lexema son <b>prefijos</b> (in-capaz, des-hacer, pre-temporada, super-hombre); si van <b>detrás</b>, <b>sufijos</b> (coch-ero, cuidad-oso, patin-aje, ágil-mente).</p>
      <ul><li><b>Aumentativos</b>: hacen más grande o intenso (libr-ote, patad-ón, golp-azo, forz-udo).</li>
      <li><b>Diminutivos</b>: hacen más pequeño (plat-ito, chiqu-illo, pequeñ-ín, ventan-uco).</li>
      <li><b>Despectivos</b>: muestran desprecio (floj-ucho, papel-ajo, tip-arraco, medic-astro).</li></ul></div>`,
    quiz:[
      {q:"¿Qué es el lexema?", opts:["Un trozo que se pone al final","La raíz de la palabra","Una palabra compuesta","Un signo de puntuación"], a:1, fb:"El lexema aporta el significado del diccionario."},
      {q:"En «gatitos», ¿qué indica la -s?", opts:["Plural","Masculino","Diminutivo","Femenino"], a:0, fb:"-s es el morfema de plural."},
      {q:"¿Qué información dan los morfemas flexivos de los nombres?", opts:["Tiempo y modo","Si es bonito o feo","Género y número","El significado del diccionario"], a:2, fb:"Chic-o/chic-a (género), estudiante-s (número)."},
      {q:"¿Cómo se llaman los morfemas flexivos de los verbos?", opts:["Prefijos","Sufijos apreciativos de tamaño","Lexemas","Desinencias verbales"], a:3, fb:"Expresan tiempo, modo, número, persona, aspecto y voz."},
      {q:"En «deshacer», ¿qué es des-?", opts:["Un prefijo","Un sufijo","Un lexema","Un morfema de plural"], a:0, fb:"Va delante del lexema: prefijo."},
      {q:"«Librote» lleva un sufijo...", opts:["Diminutivo","Aumentativo","Despectivo","De plural, porque son varios libros"], a:1, fb:"-ote hace más grande: aumentativo."},
      {q:"«Medicastro» lleva un sufijo...", opts:["Aumentativo","De género","Despectivo","Diminutivo"], a:2, fb:"-astro muestra desprecio."}
    ],
    hard:[
      {q:"¿Cuántas palabras recoge el DLE, más o menos?", ans:"Cerca de 90.000", ok:["90"]},
      {q:"¿Cómo se llama el conjunto de palabras de una lengua?", ans:"Léxico", ok:["lexico"]},
      {q:"¿Cómo se llaman los morfemas que van delante del lexema?", ans:"Prefijos", ok:["prefijo"]},
      {q:"Escribe el lexema de «gatitos».", ans:"gat-", ok:["gat"]}
    ],
    games:[
      {type:"classify", title:"¿Aumentativo, diminutivo o despectivo?", bins:["🔼 Aumentativo","🔽 Diminutivo","👎 Despectivo"], items:[["Librote",0],["Patadón",0],["Golpazo",0],["Forzudo",0],["Platito",1],["Chiquillo",1],["Pequeñín",1],["Ventanuco",1],["Flojucho",2],["Papelajo",2],["Tiparraco",2],["Medicastro",2]]},
      {type:"classify", title:"¿Prefijo o sufijo?", bins:["⬅️ Prefijo","➡️ Sufijo"], items:[["in- (incapaz)",0],["des- (deshacer)",0],["pre- (pretemporada)",0],["super- (superhombre)",0],["-ero (cochero)",1],["-oso (cuidadoso)",1],["-aje (patinaje)",1],["-mente (ágilmente)",1]]},
      {type:"match", title:"Partes de «gatitos»", pairs:[["gat-","Lexema"],["-it-","Diminutivo"],["-o","Masculino"],["-s","Plural"],["-ísim-","Grado (clarísimo)"]]}
    ]
  },
  {
    id:"clasespalabras", title:"Clases de palabras según su forma", icon:"🌻",
    body:`
    <div class="card"><h3><span class="chip">1</span>Simples, derivadas y compuestas</h3>
      <ul><li><b>Simples o primitivas</b>: lexema (+ morfema flexivo). Ejemplos: <b>árbol</b>, <b>tronco</b>, <b>ramas</b>, <b>hojas</b>, <b>frutos</b>.</li>
      <li><b>Derivadas</b>: lexema + <b>morfema derivativo</b> (+ morfema flexivo). Ejemplos: <b>arboleda</b>, <b>agilidad</b>, <b>ramaje</b>, <b>hojarasca</b>, <b>frutería</b>.</li>
      <li><b>Compuestas</b>: <b>lexema + lexema</b> (+ morfema flexivo). Ejemplos: media + noche (<b>medianoche</b>), boca + calle (<b>bocacalle</b>), col + i + flor (<b>coliflor</b>), saca + corchos (<b>sacacorchos</b>), bien + estar (<b>bienestar</b>).</li></ul></div>
    <div class="card"><h3><span class="chip">2</span>La familia léxica</h3>
      <p>Es el conjunto de palabras que comparten el <b>mismo lexema</b>.</p>
      <p>Ejemplo con <b>flor</b>: florecer, florido, florero, floral, florista, floristería.</p></div>
    <div class="card"><h3><span class="chip">3</span>Los compuestos cultos</h3>
      <p>Muchas palabras se forman con lexemas tomados del <b>griego</b> o del <b>latín</b>. Son habituales en el vocabulario <b>científico y técnico</b>, pero también en la lengua común.</p>
      <ul><li><b>Biología</b> = bio (griego, «vida») + logía (griego, «ciencia»): ciencia que trata de los seres vivos.</li>
      <li><b>Apicultura</b> = apicula (latín, «abeja») + cultura (latín, «cuidado, cría»): arte de criar abejas.</li></ul></div>
    <div class="card"><h3><span class="chip">4</span>Raíces clásicas</h3>
      <ul><li>Griegas: <b>biblio</b> = libro; <b>bio</b> = vida; <b>cracia</b> = gobierno; <b>demo</b> = pueblo; <b>eco</b> = casa; <b>grafo</b> = escritura; <b>itis</b> = inflamación; <b>logía</b> = ciencia.</li>
      <li>Latinas: <b>cida</b> = que mata; <b>fero</b> = que lleva o contiene.</li></ul></div>`,
    quiz:[
      {q:"«Árbol» es una palabra...", opts:["Simple","Derivada","Compuesta","Culta"], a:0, fb:"Solo tiene lexema: es simple o primitiva."},
      {q:"«Arboleda» es una palabra...", opts:["Simple","Derivada","Compuesta","Extranjera"], a:1, fb:"Lexema árbol + morfema derivativo -eda."},
      {q:"«Sacacorchos» es una palabra...", opts:["Simple","Derivada","Compuesta","Diminutiva"], a:2, fb:"Une dos lexemas: saca + corchos."},
      {q:"¿Qué es una familia léxica?", opts:["Palabras que riman","Palabras del mismo tema, como frutas","Palabras con las mismas letras","Palabras con el mismo lexema"], a:3, fb:"Flor, florero, florista… comparten flor-."},
      {q:"¿Qué significa «bio»?", opts:["Vida","Libro","Pueblo","Gobierno"], a:0, fb:"Bio = vida (del griego)."},
      {q:"¿Qué significa «demo», como en democracia?", opts:["Gobierno","Pueblo","Casa","Escritura"], a:1, fb:"Demo = pueblo; cracia = gobierno: gobierno del pueblo."},
      {q:"¿De dónde vienen los lexemas de los compuestos cultos?", opts:["Del inglés y el francés","Del árabe","Del griego o el latín","Del vasco"], a:2, fb:"Del griego o del latín."}
    ],
    hard:[
      {q:"¿Cómo se forma una palabra compuesta?", ans:"Con dos lexemas (lexema + lexema)", ok:["dos lexema","lexema + lexema","lexema y lexema"]},
      {q:"¿Qué significa «apicultura»?", ans:"Arte de criar abejas", ok:["abeja"]},
      {q:"¿Qué significa «itis», como en otitis?", ans:"Inflamación", ok:["inflamacion"]},
      {q:"Escribe una palabra de la familia léxica de «flor».", ans:"Florero, florido, florecer, floral, florista...", ok:["florero","florido","florecer","floral","florista","floristeria","florecilla","floracion"]}
    ],
    games:[
      {type:"classify", title:"¿Simple, derivada o compuesta?", bins:["🌱 Simple","🌿 Derivada","🌳 Compuesta"], items:[["Árbol",0],["Tronco",0],["Hojas",0],["Arboleda",1],["Ramaje",1],["Frutería",1],["Hojarasca",1],["Medianoche",2],["Bocacalle",2],["Coliflor",2],["Bienestar",2],["Sacacorchos",2]]},
      {type:"match", title:"Raíces clásicas", pairs:[["Biblio","Libro"],["Bio","Vida"],["Cracia","Gobierno"],["Demo","Pueblo"],["Grafo","Escritura"],["Logía","Ciencia"],["Itis","Inflamación"],["Cida","Que mata"]]},
      {type:"pick", title:"Familia léxica de «flor»", prompt:"Toca las palabras de la familia de «flor»", items:[["Florero",true],["Florido",true],["Florecer",true],["Floral",true],["Florista",true],["Floristería",true],["Flotar",false],["Flúor",false],["Rosa",false]]}
    ]
  }
  ]
});

/* Preguntas para ENTENDER y razonar.
   Formato: [pregunta, respuesta corta, palabras clave válidas, por qué] */
addQA("castellano", {
  comunicacion: [
    ["Lees un cartel en la calle. ¿Cuál es el canal?", "Visual", ["visual"], "Un mensaje escrito llega por la vista."],
    ["Tu amiga te cuenta un chiste en el patio. ¿Quién es el receptor?", "Yo", ["yo","tu","receptor","mi"], "El receptor es quien recibe el mensaje."],
    ["Si dos personas no hablan el mismo idioma, ¿qué elemento falla?", "El código", ["codigo"], "Emisor y receptor deben compartir el código."],
    ["¿Por qué en la cocina «estrella» significa premio?", "Por la situación", ["situacion","contexto"], "La situación ayuda a interpretar el mensaje."],
    ["Una entrevista en la tele, ¿qué tipo de conversación es?", "Planificada", ["planificada"], "Los temas y el turno están pactados."],
    ["¿Por qué en la conversación espontánea importan los gestos?", "Porque se improvisa y apoyan el mensaje", ["improvis","gest","no verbal","apoy"], "Tono, cejas o manos completan lo que decimos."],
    ["Unas nubes negras te avisan de que va a llover. ¿Es comunicación verbal?", "No", ["no"], "No usa palabras: es no verbal."]
  ],
  texto: [
    ["¿Por qué «¡Menudo banco!» es un texto completo?", "Tiene intención y situación", ["intencion","situacion"], "Se entiende por la intención y la situación."],
    ["¿Puede una sola palabra ser un texto?", "Sí", ["si"], "La extensión es variable: ¡Oh! es un texto."],
    ["Escribes al director del instituto. ¿Usted o tú?", "Usted", ["usted"], "Es una situación formal."],
    ["¿Por qué en WhatsApp escribimos «q» y «xq»?", "Es lenguaje informal y abreviado", ["abrevi","informal","rapid"], "La mensajería instantánea imita lo oral."],
    ["¿Qué cambia más al adecuar un texto?", "Las palabras (el léxico)", ["palabra","lexico","vocabulario"], "El léxico será más o menos culto."],
    ["¿Por qué un texto escrito se piensa antes?", "Exige planificación", ["planific","correc"], "El canal escrito exige planificación y corrección."]
  ],
  signo: [
    ["Ves humo a lo lejos y piensas que hay fuego. ¿Qué signo es el humo?", "Un indicio", ["indicio","natural"], "Causa-efecto: el fuego produce humo."],
    ["¿Por qué un mapa es un icono?", "Se parece a lo que representa", ["parec","semejanz"], "El icono tiene relación de semejanza."],
    ["¿Por qué la bandera es un símbolo?", "Su relación es arbitraria", ["arbitrari","convenc","acuerdo"], "No hay razón objetiva: lo acordamos."],
    ["¿Por qué «quiquiriquí» no es un símbolo?", "Imita el sonido real", ["imita","sonido","onomatopeya"], "Las onomatopeyas imitan lo que representan."],
    ["El silbato del árbitro al final del partido es...", "Una señal", ["senal"], "Transmite una orden: se acabó."],
    ["¿Por qué usamos emoticonos al escribir?", "Para expresar emociones", ["emocion","sentimient"], "Expresan emociones de forma directa y abreviada."]
  ],
  lenguas: [
    ["¿El lenguaje y la lengua son lo mismo?", "No", ["no"], "El lenguaje es la capacidad; la lengua, un idioma concreto."],
    ["Si un idioma tiene muchos libros traducidos, ¿gana o pierde importancia?", "Gana", ["gana","mas","aument"], "El número de traducciones es un criterio de importancia."],
    ["¿Por qué el castellano es tan importante?", "Muchos hablantes y países", ["hablante","pais","extension","oficial"], "Más de 591 millones de hablantes en 21 países oficiales."],
    ["En Galicia, ¿qué lenguas son oficiales?", "Gallego y castellano", ["gallego"], "El gallego es cooficial con el castellano."],
    ["¿Por qué el vasco es especial entre las lenguas de España?", "No viene del latín", ["latin"], "Es la única que no procede del latín."],
    ["Si una lengua solo se usa en casa y la otra en todo lo importante, hay...", "Diglosia", ["diglosia"], "Una lengua dominante y otra desprestigiada."]
  ],
  variedades: [
    ["Un andaluz dice «seresa». ¿Habla mal?", "No, es su dialecto", ["no","dialecto"], "Ningún dialecto es mejor que otro: es seseo."],
    ["Un canario dice «ustedes» a sus amigos. ¿Qué rasgo es?", "Ustedes por vosotros", ["ustedes","vosotros","meridional"], "Es un rasgo de los dialectos meridionales."],
    ["¿Por qué un médico habla de forma rara en su trabajo?", "Usa su jerga", ["jerga"], "Los grupos profesionales tienen vocabulario propio."],
    ["Decir «pienso de que» es...", "Un vulgarismo", ["vulgar"], "Lo correcto es «pienso que»."],
    ["En las noticias de la tele, ¿qué nivel se usa?", "Medio o estándar", ["medio","estandar"], "Es el nivel de los medios de comunicación."],
    ["¿Por qué no hablas igual con tu profesora que con tus amigos?", "Cambio de registro", ["registro","situacion","formal"], "Según la situación usamos registro formal o informal."]
  ],
  palabra: [
    ["¿Cuántos morfemas tiene «gatitos»?", "Tres", ["tres","3"], "-it- (diminutivo), -o (masculino) y -s (plural)."],
    ["¿Qué parte de «niñas» buscarías en el diccionario?", "El lexema niñ-", ["lexema","nin"], "El lexema aporta el significado léxico."],
    ["En «altísimo», ¿qué indica -ísim-?", "El grado", ["grado","superlativ"], "Los adjetivos tienen morfema de grado."],
    ["¿Por qué «in-» de «incapaz» es un prefijo?", "Va delante del lexema", ["delante","antes"], "Los prefijos van delante; los sufijos, detrás."],
    ["«Casucha», ¿qué matiz tiene?", "Despectivo", ["despectiv"], "-ucha muestra desprecio."],
    ["¿Qué expresa la terminación de «amaste»?", "Tiempo, persona y número", ["tiempo","persona","numero","desinencia"], "Es una desinencia verbal."]
  ],
  clasespalabras: [
    ["«Bienestar» une bien + estar. ¿Qué clase de palabra es?", "Compuesta", ["compuesta"], "Tiene dos lexemas."],
    ["«Frutería» viene de fruta. ¿Qué clase de palabra es?", "Derivada", ["derivada"], "Lexema + morfema derivativo -ería."],
    ["¿Por qué «florero» y «florista» son de la misma familia?", "Comparten el lexema flor", ["lexema","flor"], "La familia léxica comparte el lexema."],
    ["Si «grafo» es escritura, ¿qué hace un bolígrafo?", "Escribe", ["escrib"], "Bolígrafo: lo que escribe con una bola."],
    ["Si «cida» es «que mata», ¿qué hace un insecticida?", "Mata insectos", ["mata"], "Insecti- + -cida: que mata insectos."],
    ["¿Qué estudia la biología?", "Los seres vivos", ["vivo","vida"], "Bio = vida; logía = ciencia."],
    ["Una biblioteca guarda...", "Libros", ["libro"], "Biblio = libro."]
  ]
});

addFrases("castellano", {
  comunicacion: ["El emisor transmite un mensaje al receptor.", "El código es el conjunto de reglas y signos que comparten.", "La conversación planificada respeta el turno y tiene un plan previo."],
  texto: ["Un texto tiene extensión variable.", "La situación también se llama contexto extralingüístico.", "Un texto es adecuado si se ajusta al emisor, al receptor, a la situación y al canal."],
  signo: ["Un signo tiene significante y significado.", "El indicio tiene una relación de causa y efecto.", "El símbolo tiene una relación arbitraria con su significado."],
  lenguas: ["El lenguaje es la capacidad de comunicarse mediante la palabra.", "España es un país plurilingüe.", "El vasco es la única lengua española que no viene del latín."],
  variedades: ["Los dialectos son las variedades geográficas de una lengua.", "Los niveles de uso son culto, medio y popular.", "El seseo es pronunciar la z como s."],
  palabra: ["La palabra es la unidad básica de la lengua con significado.", "El lexema es la raíz de la palabra.", "Los prefijos van delante del lexema y los sufijos detrás."],
  clasespalabras: ["Las palabras compuestas tienen dos lexemas.", "Una familia léxica comparte el mismo lexema.", "Biología significa ciencia de la vida."]
});
