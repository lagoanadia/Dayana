/* Asignatura: Galego — lectura «El valle de los lobos» (Laura Gallego).
   Resúmenes de todos los capítulos, en castellano (el libro está en castellano). */
registerSubject({
  id:"galego", name:"Galego", icon:"🐺", color:"var(--teal)", colorD:"#1f9a9a",
  sections:[
  {
    id:"libro", title:"El libro y los personajes", icon:"📖",
    body:`
    <div class="card"><h3><span class="chip">1</span>El libro</h3>
      <p><b>El valle de los lobos</b> es una novela de <b>Laura Gallego García</b>, publicada en el año <b>2000</b>.</p>
      <p>Es el primer libro de la saga <b>Crónicas de la Torre</b>. Es una novela de <b>fantasía</b>: hay magos, elfos, enanos, lobos hechizados, un unicornio y espíritus.</p>
      <p>Tiene <b>14 capítulos</b> y un <b>epílogo</b>. Está contada en <b>tercera persona</b> por un narrador que sabe lo que piensan y sienten los personajes (narrador <b>omnisciente</b>).</p></div>
    <div class="card"><h3><span class="chip">2</span>Los personajes principales</h3>
      <ul><li><b>Dana</b>: la protagonista. Hija de una familia de granjeros, de pelo negro y ojos azules. Es una <b>Kin-Shannay</b>: puede ver a los espíritus.</li>
      <li><b>Kai</b>: su mejor amigo. Un chico <b>rubio</b> de ojos <b>verdes</b> que solo ve Dana. Es un <b>espíritu</b>.</li>
      <li><b>El Maestro</b>: el Amo de la Torre. Mago viejo de <b>túnica gris</b> y ojos grises. Es <b>mentalista</b> (lee los pensamientos). Es el antagonista.</li>
      <li><b>Fenris</b>: un <b>elfo</b> mago, de ojos de gato color miel y pelo cobrizo. Es <b>licántropo</b> (hombre lobo).</li>
      <li><b>Maritta</b>: la <b>enana</b> cocinera de la Torre. Gruñona, pero muy leal.</li>
      <li><b>Aonia</b>: la dama de la <b>túnica dorada</b>, antigua Señora de la Torre. Está muerta.</li></ul></div>
    <div class="card"><h3><span class="chip">3</span>Lugares y animales</h3>
      <ul><li>La <b>granja</b> de Dana, el <b>Valle de los Lobos</b>, la <b>Torre</b> (Escuela de Alta Hechicería), el bosque, el pueblo y el <b>templo de la Madre Tierra</b>.</li>
      <li><b>Lunaestrella</b>: la yegua baya de Dana. <b>Medianoche</b>: el caballo blanco del Maestro. <b>Alide</b>: el caballo alazán de Fenris.</li></ul></div>
    <div class="card"><h3><span class="chip">4</span>Los grados de magia</h3>
      <p>Cada libro aprobado cambia el color de la túnica:</p>
      <ul><li><b>Blanca</b>: aprendiz que empieza.</li>
      <li>Libro de la Tierra → <b>verde</b>. Libro del Aire → <b>azul</b>. Libro del Agua → <b>violeta</b>.</li>
      <li>Libro del Fuego y <b>Prueba del Fuego</b> → <b>roja</b>: ya eres maga.</li>
      <li>Los <b>archimagos</b> llevan túnica <b>dorada</b>.</li></ul></div>
    <div class="card example"><h3><span class="chip">★</span>Temas del libro</h3>
      <p>La <b>amistad</b>, el <b>amor imposible</b>, el miedo a ser <b>diferente</b>, la <b>ambición</b>, la venganza y la justicia, y la <b>vida</b> y la <b>muerte</b>.</p></div>`,
    quiz:[
      {q:"¿Quién escribió «El valle de los lobos»?", opts:["Laura Gallego García","Rosalía de Castro","Joanne Kathleen Rowling","Roald Dahl"], a:0, fb:"La autora es Laura Gallego García (2000)."},
      {q:"¿De qué saga es el primer libro?", opts:["Memorias de Idhún","Crónicas de la Torre","Harry Potter y la piedra filosofal","Los Cinco"], a:1, fb:"Es el primer libro de las Crónicas de la Torre."},
      {q:"¿Qué es Fenris?", opts:["Un enano herrero","Un hombre del pueblo","Un elfo hombre lobo","El espíritu de un chico muerto"], a:2, fb:"Fenris es un elfo que se convierte en lobo con la luna llena."},
      {q:"¿De qué color es la túnica de un aprendiz que acaba de llegar?", opts:["Roja","Dorada","Verde","Blanca"], a:3, fb:"Se empieza con la túnica blanca."},
      {q:"¿Quién es Maritta?", opts:["La enana cocinera de la Torre","La madre de Dana","La hermana mayor de Kai, la del pueblo","Una archimaga"], a:0, fb:"Maritta es la enana que cocina en la Torre."},
      {q:"¿Cuántos capítulos tiene el libro?", opts:["Diez capítulos y un prólogo","Catorce y un epílogo","Veinte","Siete"], a:1, fb:"Tiene 14 capítulos y un epílogo."}
    ],
    hard:[
      {q:"¿Cómo se llama la protagonista?", ans:"Dana", ok:["dana"]},
      {q:"¿De qué color es la túnica de los archimagos?", ans:"Dorada", ok:["dorad","oro"]},
      {q:"¿Qué tipo de narrador tiene el libro?", ans:"Narrador en tercera persona omnisciente", ok:["omniscient","tercera"]},
      {q:"¿Cómo se llama la yegua de Dana?", ans:"Lunaestrella", ok:["lunaestrella"]}
    ],
    games:[
      {type:"match", title:"¿Quién es quién?", pairs:[["Dana","La protagonista"],["Kai","El amigo espíritu"],["El Maestro","El Amo de la Torre"],["Fenris","El elfo hombre lobo"],["Maritta","La enana cocinera"],["Aonia","La dama de la túnica dorada"]]},
      {type:"order", title:"Las túnicas", prompt:"Ordena las túnicas de aprendiz a maga", items:["Blanca","Verde","Azul","Violeta","Roja"]},
      {type:"classify", title:"¿Persona o animal?", bins:["🧙 Personaje","🐴 Animal"], items:[["Dana",0],["Fenris",0],["Maritta",0],["Aonia",0],["Nicolás",0],["Lunaestrella",1],["Medianoche",1],["Alide",1],["El unicornio",1]]}
    ]
  },
  {
    id:"cap1", title:"Cap. 1: Kai", icon:"👦",
    body:`
    <div class="card"><h3><span class="chip">1</span>El nacimiento de Dana</h3>
      <p>Dana nace en una noche oscura de <b>viento</b> muy fuerte, <b>dos meses antes</b> de tiempo. Tiene ojos <b>azules</b> y un mechón de pelo negro.</p>
      <p>La <b>comadrona</b> ve algo extraño en su mirada, pero <b>nunca</b> se lo cuenta a nadie.</p>
      <p>De pequeña, Dana es callada, solitaria y <b>sigilosa como un gato</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Conoce a Kai</h3>
      <p>A los <b>seis años</b> conoce a <b>Kai</b>, un niño <b>rubio</b>, delgado y de ojos <b>verdes</b>, sentado en la valla.</p>
      <p>Se hacen grandes amigos: él la ayuda con las tareas y juegan en el <b>bosque</b>. Kai siempre aparece cuando ella está <b>sola</b> y le pide que no le hable de él a su familia.</p></div>
    <div class="card"><h3><span class="chip">3</span>«Kai no existe»</h3>
      <p>A los <b>ocho años</b> llega tarde a casa. Su madre le da <b>bofetadas</b> y Dana miente: dice que estaba con <b>Sara</b>. Al final grita que estaba con Kai.</p>
      <p>Su hermana mayor dice que <b>Kai no existe</b> y que Dana habla sola. Dana se escapa al granero.</p>
      <p>Allí Kai le confiesa: «<b>Nadie puede verme. Solo tú</b>». Dana intenta acariciarle la mejilla y su mano lo <b>atraviesa</b>. Kai promete no dejarla <b>nunca</b>.</p></div>
    <div class="card example"><h3><span class="chip">★</span>Recurso literario</h3>
      <p>«El viento <b>azotaba sin piedad</b> las ramas» y «la granja soportaba las sacudidas <b>con heroísmo</b>»: damos cualidades humanas a cosas. Eso es la <b>personificación</b>.</p></div>`,
    quiz:[
      {q:"¿Cómo era la noche en la que nació Dana?", opts:["Una noche de verano tranquila","Oscura y con un viento muy fuerte","Con una gran nevada","Con una luna llena muy brillante"], a:1, fb:"Había un viento terrible y no había luna."},
      {q:"¿Qué edad tenía Dana cuando conoció a Kai?", opts:["Seis años","Diez años","Tres años y medio","Ocho años"], a:0, fb:"Lo conoció a los seis años, cogiendo frambuesas."},
      {q:"¿Cómo es Kai?", opts:["Moreno y de ojos azules oscuros","Pelirrojo y bajito","Rubio y de ojos verdes","Calvo y viejo"], a:2, fb:"Kai es rubio, delgado y de ojos verdes."},
      {q:"¿Qué pasa cuando Dana intenta tocar a Kai?", opts:["Kai se echa a reír muy fuerte","Su mano lo atraviesa como niebla","Kai le da la mano","Kai desaparece para siempre de la granja"], a:1, fb:"Kai existe en un plano diferente: no se le puede tocar."},
      {q:"¿A quién nombra Dana cuando miente a su madre?", opts:["A Maritta","A una de sus hermanas mayores","Al Maestro","A Sara, la del norte"], a:3, fb:"Dice que estaba con Sara, pero Sara había estado recogiendo tomates."}
    ],
    hard:[
      {q:"¿Qué vio la comadrona en los ojos de Dana?", ans:"Algo extraño que nunca contó a nadie", ok:["extran","nunca","nadie","raro"]},
      {q:"¿Qué le confiesa Kai a Dana en el granero?", ans:"Que nadie puede verlo, solo ella", ok:["solo ella","nadie","solo tu"]},
      {q:"¿Qué recurso literario es «el viento azotaba sin piedad»?", ans:"Personificación", ok:["personific"]}
    ],
    games:[
      {type:"order", title:"El orden del capítulo", prompt:"Ordena lo que pasa en el capítulo 1", items:["Dana nace en una noche de viento","A los seis años conoce a Kai","Kai desaparece cuando llega la madre","Dana llega tarde y su madre le pega","Su hermana dice que Kai no existe","La mano de Dana atraviesa a Kai"]},
      {type:"tf", title:"Verdadero o falso", items:[["Dana nació dos meses antes de tiempo",true],["La comadrona contó a todos lo que vio",false,"Nunca se lo contó a nadie"],["Kai es rubio y de ojos verdes",true],["La familia de Dana podía ver a Kai",false,"Solo Dana puede verlo"],["Dana podía abrazar a Kai sin problema",false,"Su mano lo atraviesa"],["Kai promete no dejarla nunca",true]]},
      {type:"hangman", title:"Palabra oculta", words:[["Comadrona","Mujer que ayudó en el parto de Dana"],["Granero","Donde se refugia Dana cuando se escapa"],["Personificación","Dar cualidades humanas a cosas"],["Granja","Donde vive la familia de Dana"]]}
    ]
  },
  {
    id:"cap2", title:"Cap. 2: El hombre de la túnica gris", icon:"🧙",
    body:`
    <div class="card"><h3><span class="chip">1</span>«¡Bruja!»</h3>
      <p>Pasan cuatro años: Dana tiene <b>diez años</b>. Para no tener problemas, finge que Kai fue un capricho.</p>
      <p>Sara y sus amigas juegan con una <b>pelota de trapo</b>. Sara la invita, pero se <b>burla</b> de ella. La llaman <b>bruja</b> y le tiran <b>piedras</b>.</p>
      <p>Dana dice que le gustaría ser bruja para <b>vengarse</b>. Kai le responde: «<b>Nunca digas eso</b>».</p>
      <p>Kai es alegre y aventurero; Dana es tranquila y piensa antes de actuar.</p></div>
    <div class="card"><h3><span class="chip">2</span>Tiempos difíciles</h3>
      <p>Llega un <b>invierno</b> muy duro: heladas, hambre y <b>lobos</b> que atacan las granjas.</p>
      <p>En <b>primavera</b> llega una gran <b>sequía</b> y una <b>epidemia</b> (por los mosquitos). Mueren una hermana mayor, un hermano pequeño y el <b>abuelo</b> de Dana.</p></div>
    <div class="card"><h3><span class="chip">3</span>El hombre del pozo</h3>
      <p>Un día, en el <b>pozo</b>, llega un <b>viejo</b> en un <b>caballo blanco</b>. Tiene el pelo y los ojos <b>grises</b> y lleva una <b>túnica gris</b>. No tiene barba.</p>
      <p>Pregunta el camino a la ciudad y se queda mirando a <b>Kai</b>. Al irse dice: «Esta noche <b>lloverá</b>».</p>
      <p>No había ni una nube… pero esa noche <b>llovió</b>.</p></div>`,
    quiz:[
      {q:"¿Qué le hacen a Dana Sara y sus amigas?", opts:["La invitan a comer a su casa","Se burlan y le tiran piedras","Le regalan una pelota de trapo nueva","Hacen una fiesta con ella"], a:1, fb:"La llaman bruja y le tiran piedras."},
      {q:"¿Qué le dice Kai cuando Dana quiere ser bruja para vengarse?", opts:["Que es una buena idea","Que él la ayudará","Que nunca diga eso","Que vaya al pueblo"], a:2, fb:"Kai le dice que es peligroso y que no es culpa de ellas."},
      {q:"¿Quién muere en la epidemia?", opts:["Una hermana, un hermano y el abuelo","La madre y el padre de Dana, los dos","Sara y sus amigas del norte","Nadie"], a:0, fb:"La familia pasa de doce a nueve miembros."},
      {q:"¿Cómo va vestido el hombre que llega al pozo?", opts:["Con una armadura","Con una capa roja","Con una túnica dorada","Con una túnica gris"], a:3, fb:"Por eso el capítulo se llama «El hombre de la túnica gris»."},
      {q:"¿Qué predice el hombre de la túnica gris?", opts:["Que lloverá esa noche","Que va a nevar muchísimo","Que vendrán los lobos de las montañas","Que Dana será reina"], a:0, fb:"Dijo «esta noche lloverá», y llovió."}
    ],
    hard:[
      {q:"¿Cómo llaman a Dana las niñas?", ans:"Bruja", ok:["bruja"]},
      {q:"¿Qué es lo que más le llama la atención a Dana del hombre del pozo?", ans:"Que mira a Kai: parece que lo ve", ok:["kai"]},
      {q:"¿Qué pasó en primavera, después del invierno duro?", ans:"Una gran sequía y una epidemia", ok:["sequia","epidemia","calor"]}
    ],
    games:[
      {type:"tf", title:"Verdadero o falso", items:[["Dana tiene diez años en este capítulo",true],["Sara deja jugar a Dana de verdad",false,"Se burla de ella"],["Las niñas le tiran piedras a Dana",true],["El invierno fue suave y bueno",false,"Fue muy duro"],["El hombre del pozo lleva túnica gris",true],["El hombre del pozo tiene una larga barba",false,"No tiene barba"],["Esa noche llovió",true]]},
      {type:"pick", title:"El hombre de la túnica gris", prompt:"Toca lo que describe al hombre del pozo", items:[["Pelo gris",true],["Ojos grises",true],["Túnica gris",true],["Caballo blanco",true],["Cinturón de cuero con saquitos",true],["Barba larga",false],["Espada",false],["Ojos verdes",false],["Corona",false]]},
      {type:"order", title:"¿Qué pasa primero?", prompt:"Ordena los hechos del capítulo 2", items:["Las niñas tiran piedras a Dana","Llega un invierno muy duro","Hay sequía y epidemia","Dana va al pozo a por agua","Llega el hombre de la túnica gris","Esa noche llueve"]}
    ]
  },
  {
    id:"cap3", title:"Cap. 3: La Torre", icon:"🏰",
    body:`
    <div class="card"><h3><span class="chip">1</span>Una visita en la granja</h3>
      <p>En el establo hay dos animales nuevos: un <b>caballo blanco</b> y una <b>yegua baya</b>. Dana escucha por la ventana: el hombre de la túnica gris habla con sus padres.</p>
      <p>Dana cree que quieren <b>casarla</b> con él. Su padre acepta que se la lleve.</p>
      <p>Kai le dice «Escápate», en singular: él <b>no puede alejarse</b> de la granja.</p></div>
    <div class="card"><h3><span class="chip">2</span>La despedida</h3>
      <p>Su madre le da un <b>amuleto</b>: una <b>luna menguante</b> con una <b>estrella de seis puntas</b>. Fue de su madre y de su abuela.</p>
      <p>La yegua es para Dana; le pone de nombre <b>Lunaestrella</b>.</p>
      <p>El hombre mira hacia donde está Kai y dice: «<b>Tú puedes venir también</b>». Así confirma que sabe que Kai está allí.</p></div>
    <div class="card"><h3><span class="chip">3</span>El viaje y la Torre</h3>
      <p>El hombre le pide que lo llame «<b>Maestro</b>». Su caballo se llama <b>Medianoche</b>. Viajan semanas hacia el este hasta una cordillera.</p>
      <p>Llegan al <b>Valle de los Lobos</b>. La gente del pueblo trata al Maestro con respeto, pero <b>desconfía</b> de él.</p>
      <p>La <b>Torre</b> es alta, oscura y elegante, terminada en una <b>aguja</b>. Une lo <b>celestial</b> y lo <b>terreno</b>. La verja se abre sola con un <b>hechizo</b>.</p>
      <p>Es una <b>Escuela de Alta Hechicería</b> y Dana será <b>aprendiza</b>. Entiende que no va a casarse: ¡tiene poderes!</p></div>`,
    quiz:[
      {q:"¿Qué cree Dana que están negociando sus padres?", opts:["Vender la granja","Casarla con el hombre de la túnica gris","Comprar un caballo","Mandarla a un colegio de monjas de la ciudad"], a:1, fb:"Cree que es un matrimonio, pero en realidad va a ser aprendiza."},
      {q:"¿Qué objeto le da su madre a Dana?", opts:["Un libro de hechizos antiguos de la familia","Una espada","Un amuleto con una luna y una estrella","Una moneda de oro"], a:2, fb:"Una luna menguante con una estrella de seis puntas."},
      {q:"¿Qué nombre le pone Dana a su yegua?", opts:["Medianoche","Alide","Lunaestrella","Estrella del Norte de la Granja"], a:2, fb:"Lunaestrella, pensando en su amuleto."},
      {q:"¿Por qué Kai dice «escápate» y no «escapémonos»?", opts:["Porque no puede alejarse de la granja","Porque no quiere a Dana","Porque les tiene mucho miedo a los lobos del camino","Porque está enfermo"], a:0, fb:"Hasta ese momento, Kai estaba atado a la granja."},
      {q:"¿Qué es la Torre?", opts:["El castillo de un rey muy rico y poderoso","Una cárcel","Una iglesia","Una Escuela de Alta Hechicería"], a:3, fb:"Una de las pocas Escuelas de Alta Hechicería que quedan en el mundo."}
    ],
    hard:[
      {q:"¿Cómo le pide el hombre que lo llame?", ans:"Maestro", ok:["maestro"]},
      {q:"¿Dónde está la Torre?", ans:"En el Valle de los Lobos", ok:["valle","lobos"]},
      {q:"¿Qué frase demuestra que el Maestro sabe que Kai está allí?", ans:"«Tú puedes venir también»", ok:["puedes venir","tambien"]},
      {q:"¿Cómo se abre la verja de la Torre?", ans:"Con un hechizo del Maestro", ok:["hechizo","magia","conjuro","palabras"]}
    ],
    games:[
      {type:"match", title:"Une las parejas", pairs:[["Lunaestrella","Yegua baya de Dana"],["Medianoche","Caballo blanco del Maestro"],["Amuleto","Luna y estrella de seis puntas"],["La Torre","Escuela de Alta Hechicería"],["Valle de los Lobos","Donde está la Torre"]]},
      {type:"tf", title:"Verdadero o falso", items:[["Dana se va a casar con el Maestro",false,"Va a ser su aprendiza"],["El amuleto fue de la abuela de Dana",true],["Kai no puede ir a la Torre de ninguna manera",false,"El Maestro deja que vaya"],["La gente del Valle desconfía del Maestro",true],["La verja de la Torre se abre sola con un hechizo",true],["La Torre está en medio del pueblo",false,"Está junto al bosque, apartada"]]},
      {type:"hangman", title:"Palabra oculta", words:[["Amuleto","Regalo de la madre de Dana"],["Aprendiza","Lo que va a ser Dana en la Torre"],["Medianoche","Nombre del caballo del Maestro"],["Aguja","Remate de arriba de la Torre"]]}
    ]
  },
  {
    id:"cap4", title:"Cap. 4: Primeras lecciones", icon:"🌳",
    body:`
    <div class="card"><h3><span class="chip">1</span>La Torre por dentro</h3>
      <p>Por la mañana Dana encuentra el <b>desayuno</b> y una <b>túnica blanca</b>. Nadie la oyó entrar.</p>
      <p>La Torre parece un <b>laberinto</b>, pero hay una enorme <b>escalera de caracol</b> que la recorre de arriba abajo. Muchas habitaciones están vacías.</p>
      <p>Dana <b>no sabe leer</b>, por eso no entiende el letrero de la puerta de la <b>biblioteca</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Fenris y Maritta</h3>
      <p>En la biblioteca conoce a <b>Fenris</b>, un <b>elfo</b> de ojos rasgados como los de un gato, pelo cobrizo, orejas en punta y túnica violeta. Le aconseja que <b>nunca suba</b> a las habitaciones del Maestro.</p>
      <p>En la Torre solo hay <b>dos aprendices</b>: Fenris y ella. «Son malos tiempos para la magia».</p>
      <p>Después conoce a <b>Maritta</b>, una <b>enana</b> bajita y robusta, la cocinera. Los enanos <b>no confían en la magia</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>La primera lección</h3>
      <p>El Maestro le da el <b>Libro de la Tierra</b> (con un árbol en la tapa). Cuando lo domine tendrá la túnica <b>verde</b>. También aprenderá a <b>leer</b> y el <b>lenguaje arcano</b>.</p>
      <p>Para él, la magia es <b>comprender y controlar la energía</b> que mueve el mundo.</p>
      <p>Primera tarea: descubrir qué le pasa a un <b>árbol enfermo</b>, escuchándolo.</p>
      <p>Prohibición: <b>nunca</b> estar en el bosque <b>de noche</b>, porque es la hora de los <b>lobos</b>. En la Torre está a salvo.</p></div>
    <div class="card example"><h3><span class="chip">★</span>Recurso literario</h3>
      <p>«Sigilosa <b>como</b> un gato»: comparamos dos cosas usando «como». Es una <b>comparación</b> (o símil).</p></div>`,
    quiz:[
      {q:"¿Por qué Dana no entiende el letrero de la biblioteca?", opts:["Porque está en otro idioma","Porque no sabe leer","Porque está oscuro","Porque está borrado"], a:1, fb:"Dana es hija de granjeros analfabetos; aprenderá a leer en la Torre."},
      {q:"¿Qué consejo le da Fenris?", opts:["Que nunca suba a las habitaciones del Maestro","Que huya de la Torre","Que coma mucho","Que no hable nunca con Maritta en la cocina"], a:0, fb:"Al Maestro no le gusta que nadie vaya a sus dominios."},
      {q:"¿Cuántos aprendices hay en la Torre?", opts:["Cien aprendices de todo el mundo","Doce","Solo dos: Fenris y Dana","Ninguno"], a:2, fb:"«Es una escuela muy selecta»."},
      {q:"¿Cuál es el primer libro que estudia Dana?", opts:["El Libro del Fuego y de los Dragones","El Libro del Agua","El Libro del Aire","El Libro de la Tierra"], a:3, fb:"Con el Libro de la Tierra conseguirá la túnica verde."},
      {q:"¿Cuál es la primera tarea de Dana?", opts:["Saber qué le pasa a un árbol enfermo","Matar un lobo","Limpiar la cocina","Leer y copiar todos los libros de la biblioteca"], a:0, fb:"Debe abrir sus sentidos y escuchar al árbol."},
      {q:"¿Qué le prohíbe el Maestro?", opts:["Hablar con Fenris en la biblioteca","Montar a caballo","Estar en el bosque de noche","Ir a la cocina"], a:2, fb:"De noche bajan los lobos a cazar."}
    ],
    hard:[
      {q:"¿Qué recorre la Torre de arriba abajo?", ans:"Una enorme escalera de caracol", ok:["escalera","caracol"]},
      {q:"¿Qué es la magia para el Maestro?", ans:"Comprender y controlar la energía que mueve el mundo", ok:["energia"]},
      {q:"¿Qué recurso literario es «sigilosa como un gato»?", ans:"Una comparación o símil", ok:["compara","simil"]},
      {q:"¿Qué color de túnica consigue Dana con el Libro de la Tierra?", ans:"Verde", ok:["verde"]}
    ],
    games:[
      {type:"classify", title:"¿Fenris o Maritta?", bins:["🧝 Fenris","🍲 Maritta"], items:[["Es un elfo",0],["Ojos como los de un gato",0],["Pelo cobrizo",0],["Túnica violeta",0],["Es una enana",1],["Es la cocinera",1],["No confía en la magia",1],["Es bajita y robusta",1]]},
      {type:"tf", title:"Verdadero o falso", items:[["Dana ya sabía leer al llegar",false,"Aprende en la Torre"],["En la Torre hay muchos aprendices",false,"Solo dos"],["El Libro de la Tierra tiene un árbol en la tapa",true],["Maritta confía mucho en la magia",false,"Los enanos no confían en ella"],["Dana no debe estar en el bosque de noche",true],["La escalera de caracol recorre la Torre",true]]},
      {type:"memory", title:"Memoria de la Torre", pairs:[["Fenris","Elfo"],["Maritta","Enana"],["Libro de la Tierra","Túnica verde"],["Noche","Hora de los lobos"],["Como un gato","Comparación"],["Árbol enfermo","Primera tarea"]]}
    ]
  },
  {
    id:"cap5", title:"Cap. 5: Visiones", icon:"👻",
    body:`
    <div class="card"><h3><span class="chip">1</span>Cinco años después</h3>
      <p>Dana tiene <b>quince años</b>. Aprueba el <b>Libro del Agua</b> y lleva la túnica <b>violeta</b> (aprendiza de cuarto grado). Solo le queda el <b>Libro del Fuego</b>, el más difícil.</p>
      <p>Antes aprobó el Libro de la Tierra (túnica verde) y el del Aire (túnica azul).</p>
      <p>Quiere llegar a ser <b>archimaga</b>, más que el Maestro. El Maestro es <b>mentalista</b>: lee los pensamientos.</p></div>
    <div class="card"><h3><span class="chip">2</span>Dana y Kai, distanciados</h3>
      <p>Dana evita a Kai porque está <b>enamorada</b> de él y tiene <b>miedo</b>: no puede tocarlo. Kai lo sabe y juega con eso.</p>
      <p><b>Maritta</b> nota que Dana está enamorada… ¡pero cree que es del <b>elfo</b>!</p>
      <p>Fenris ya aprobó la <b>Prueba del Fuego</b> y lleva túnica roja. Vigila cada tarde desde las <b>almenas</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>La dama de la túnica dorada</h3>
      <p>Una noche aparece en su cuarto una mujer de <b>túnica dorada</b>, de mediana edad. Dana puede ver <b>a través</b> de ella.</p>
      <p>Le dice: «Soy una <b>prisionera</b>. <b>Busca al unicornio</b>. Y no le digas a nadie que me has visto».</p>
      <p>Después Dana tiene una <b>pesadilla</b>: el Maestro y Fenris convierten a Kai en un lobo. Kai la consuela y hacen las paces.</p>
      <p>La dama vuelve a aparecer muchas veces y Dana no se puede concentrar.</p></div>`,
    quiz:[
      {q:"¿Qué edad tiene Dana en este capítulo?", opts:["Diez años","Quince años","Veinte años y un mes","Ocho años"], a:1, fb:"Han pasado cinco años desde que llegó a la Torre."},
      {q:"¿Qué libro le falta para ser maga?", opts:["El Libro del Fuego","El Libro de la Tierra","El Libro del Aire","El Libro del Agua"], a:0, fb:"El Libro del Fuego es el último y el más difícil."},
      {q:"¿Por qué se aleja Dana de Kai?", opts:["Porque se enfadaron por el amuleto de su madre","Porque Kai se marchó","Porque está enamorada de él","Porque el Maestro se lo mandó"], a:2, fb:"Tiene miedo de ese sentimiento por alguien a quien no puede tocar."},
      {q:"¿De quién cree Maritta que está enamorada Dana?", opts:["Del Maestro de la Torre","De Nicolás","De Kai","De Fenris"], a:3, fb:"Maritta no puede ver a Kai, por eso piensa en el elfo."},
      {q:"¿Qué le pide la dama de la túnica dorada?", opts:["Que huya de la Torre esa misma noche","Que busque al unicornio","Que mate al Maestro","Que le traiga comida"], a:1, fb:"«Busca al unicornio» y no se lo digas a nadie."}
    ],
    hard:[
      {q:"¿Qué color de túnica consigue Dana con el Libro del Agua?", ans:"Violeta", ok:["violeta"]},
      {q:"¿Qué tipo de mago es el Maestro?", ans:"Mentalista: lee los pensamientos", ok:["mentalista","pensamiento"]},
      {q:"¿Cómo se presenta a sí misma la dama?", ans:"Como una prisionera", ok:["prisionera"]},
      {q:"¿Qué sueña Dana en la pesadilla?", ans:"Que convierten a Kai en un lobo", ok:["lobo"]}
    ],
    games:[
      {type:"order", title:"Los libros de magia", prompt:"Ordena los libros como los estudia Dana", items:["Libro de la Tierra","Libro del Aire","Libro del Agua","Libro del Fuego"]},
      {type:"tf", title:"Verdadero o falso", items:[["Dana quiere llegar a ser archimaga",true],["El Maestro es mentalista",true],["Maritta sabe que Dana quiere a Kai",false,"Cree que es el elfo"],["La dama es sólida como una persona",false,"Se puede ver a través de ella"],["La dama le pide que busque al unicornio",true],["Fenris todavía lleva túnica blanca",false,"Lleva túnica roja"]]},
      {type:"hangman", title:"Palabra oculta", words:[["Unicornio","Lo que debe buscar Dana"],["Prisionera","Así se presenta la dama"],["Mentalista","Mago que lee los pensamientos"],["Violeta","Túnica del Libro del Agua"]]}
    ]
  },
  {
    id:"cap6", title:"Cap. 6: Preguntas", icon:"❓",
    body:`
    <div class="card"><h3><span class="chip">1</span>El unicornio del Valle</h3>
      <p>Dana busca información en la biblioteca. Fenris le cuenta que <b>todos los magos</b> buscan un unicornio, porque su <b>cuerno</b> da un poder casi <b>ilimitado</b>.</p>
      <p>Nadie puede ver un unicornio si él <b>no quiere</b>. Hay leyendas de un unicornio en el bosque del <b>Valle de los Lobos</b>.</p>
      <p>La dama le da una pista: «<b>Plenilunio</b>» (luna llena). El Maestro ve a Dana hablando sola y sonríe: «Por fin parece que vamos a alguna parte».</p></div>
    <div class="card"><h3><span class="chip">2</span>Visita al pueblo</h3>
      <p>Dana pide un <b>día libre</b> para ir al pueblo. La gente la mira con <b>miedo y desconfianza</b>, porque vive en la Torre.</p>
      <p>Un niño pelirrojo, <b>Nicolás</b>, le dice que su madre la llama bruja y que el unicornio son «cuentos de viejas».</p>
      <p>Una <b>anciana ciega</b> le dice que el unicornio vive en el bosque y que <b>todo el bosque</b> es su territorio. De repente, la anciana <b>desaparece</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>El consejo de Maritta</h3>
      <p>Dana le cuenta a Maritta que tiene <b>visiones</b> y teme estar loca.</p>
      <p>Maritta lleva casi <b>cien años</b> en la Torre: ya estaba allí <b>antes</b> que el Maestro. Le dice que con la magia <b>todo es posible</b> y que «los locos <b>no son conscientes</b> de su locura».</p>
      <p>Dana decide salir con la <b>luna llena</b> a buscar al unicornio. Kai promete estar con ella «hasta la muerte y más allá».</p></div>`,
    quiz:[
      {q:"¿Por qué los magos buscan unicornios?", opts:["Porque son muy bonitos y brillantes","Porque su cuerno da poder","Para montarlos","Para venderlos"], a:1, fb:"El cuerno del unicornio da un poder casi ilimitado."},
      {q:"¿Qué pista le da la dama a Dana?", opts:["Plenilunio","Bosque oscuro","Pozo","Torre"], a:0, fb:"Plenilunio: la noche de luna llena."},
      {q:"¿Quién es Nicolás?", opts:["Un elfo","El hermano pequeño de Dana","Un niño del pueblo","Un lobo"], a:2, fb:"Es el niño del pueblo; en el epílogo vuelve a aparecer de joven."},
      {q:"¿Qué le pasa a la anciana ciega?", opts:["Se va con la madre de Nicolás","Se muere de miedo","Se convierte en loba","Desaparece de repente"], a:3, fb:"Más adelante sabremos que era un fantasma."},
      {q:"¿Qué consejo le da Maritta?", opts:["Que los locos no saben que lo están","Que se vaya de la Torre cuanto antes","Que hable con el Maestro","Que se olvide de todo"], a:0, fb:"Si Dana se pregunta si está loca, es que no lo está."}
    ],
    hard:[
      {q:"¿Qué significa «plenilunio»?", ans:"Luna llena", ok:["llena"]},
      {q:"¿Por qué la gente del pueblo tiene miedo de Dana?", ans:"Porque vive en la Torre y creen que es bruja", ok:["torre","bruja","magia"]},
      {q:"¿Quién vivía antes en la Torre: Maritta o el Maestro?", ans:"Maritta", ok:["maritta"]}
    ],
    games:[
      {type:"match", title:"¿Quién dijo qué?", pairs:[["Fenris","Todos los magos buscan un unicornio"],["La dama","Plenilunio"],["Nicolás","Son cuentos de viejas"],["La anciana ciega","Todo el bosque es su territorio"],["Maritta","Los locos no saben que lo están"],["Kai","Hasta la muerte y más allá"]]},
      {type:"tf", title:"Verdadero o falso", items:[["Cualquiera puede ver un unicornio",false,"Solo si él quiere"],["Dana pide un día libre al Maestro",true],["En el pueblo reciben a Dana con mucho cariño",false,"Con miedo y desconfianza"],["La anciana ciega recordaba la voz de Dana",true],["Maritta llegó a la Torre después que el Maestro",false,"Ya estaba antes"],["Dana decide salir con la luna llena",true]]},
      {type:"hangman", title:"Palabra oculta", words:[["Plenilunio","Pista de la dama"],["Cuerno","Parte del unicornio que da poder"],["Nicolás","Niño pelirrojo del pueblo"],["Biblioteca","Donde busca Dana información"]]}
    ]
  },
  {
    id:"cap7", title:"Cap. 7: La noche de los lobos", icon:"🌕",
    body:`
    <div class="card"><h3><span class="chip">1</span>El unicornio</h3>
      <p>Con la luna llena, Dana se <b>teletransporta</b> al bosque con Kai y Lunaestrella. Hace un <b>círculo de protección</b> y el hechizo «<b>Ojos de Gato</b>» para ver de noche.</p>
      <p>Encuentran al <b>unicornio</b> bebiendo en un arroyo: blanco, como un <b>poni</b>, con cola de león, <b>cascos hendidos</b> como los de una cabra y un <b>cuerno</b> brillante. Sus ojos son como <b>pozos sin fondo</b>.</p>
      <p>El unicornio parece <b>guiarlos</b>, pero Dana corre tanto que lo <b>pierde</b>. Ha dejado atrás a Kai y a Lunaestrella: fue una <b>imprudencia</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>El ataque</h3>
      <p>Unos <b>lobos</b> la rodean. Sienten <b>rabia y odio</b>, como si quisieran venganza. Dana les lanza fuego, hielo y piedra, pero los lobos <b>vuelven a la vida</b>.</p>
      <p>Desde la Torre, el Maestro y Fenris miran. Fenris dice: «No sobrevivirá». El Maestro le manda ir a buscarla en una hora.</p>
      <p><b>Kai</b> llega galopando en Lunaestrella y <b>salva</b> a Dana: ¡la coge de la mano!</p></div>
    <div class="card"><h3><span class="chip">3</span>Fenris al rescate</h3>
      <p>La <b>teletransportación</b> de Dana <b>falla</b>. Invoca un <b>fuego fatuo</b> para tener luz, pero lo congela sin querer. Lunaestrella se asusta y huye.</p>
      <p>Llega <b>Fenris</b>: lanza una bola de fuego e invoca <b>espectros de perros</b> de sombra. Luego manda a Dana a la Torre en su caballo, <b>Alide</b>.</p>
      <p>Dana ve algo raro en la cara de Fenris: «a los elfos <b>sí les crece barba</b>». A lo lejos suena un <b>aullido</b> lleno de dolor.</p></div>`,
    quiz:[
      {q:"¿Para qué sirve el hechizo «Ojos de Gato»?", opts:["Para ver en la oscuridad","Para correr mucho","Para hablar con los gatos del bosque","Para volar"], a:0, fb:"Dana puede ver de noche sin usar antorchas."},
      {q:"¿Cómo son los cascos del unicornio?", opts:["De oro puro y muy brillantes","Hendidos, como los de una cabra","Como los de un caballo","No tiene cascos"], a:1, fb:"Tiene pequeños cascos hendidos, como una cabra."},
      {q:"¿Por qué pierde Dana al unicornio?", opts:["Porque lo asusta Kai","Porque se hace de día de repente","Porque corre sin pensar","Porque lo caza el Maestro"], a:2, fb:"Fue una imprudencia: dejó atrás a Kai y a la yegua."},
      {q:"¿Qué tienen de raro los lobos?", opts:["Son de muchos colores distintos","Hablan","Vuelan","Vuelven a la vida"], a:3, fb:"La magia de Dana no les hace efecto."},
      {q:"¿Quién salva finalmente a Dana?", opts:["Fenris, con los espectros","Maritta con su sartén","El Maestro","Los aldeanos del pueblo con antorchas"], a:0, fb:"Fenris llega en su caballo Alide y salva la situación."},
      {q:"¿Qué le llama la atención a Dana en la cara de Fenris?", opts:["Una cicatriz","Tiene barba","Tiene los ojos azules","Está llorando"], a:1, fb:"Era la primera señal de que se estaba convirtiendo en lobo."}
    ],
    hard:[
      {q:"¿A qué se parecen los ojos del unicornio?", ans:"A pozos sin fondo", ok:["pozo"]},
      {q:"¿Cómo se llama el caballo de Fenris?", ans:"Alide", ok:["alide"]},
      {q:"¿Qué criatura invoca Dana para tener luz?", ans:"Un fuego fatuo", ok:["fatuo","fuego"]},
      {q:"¿Qué invoca Fenris contra los lobos?", ans:"Espectros de perros de sombra y una bola de fuego", ok:["espectro","perro","bola","fuego"]}
    ],
    games:[
      {type:"order", title:"La noche de los lobos", prompt:"Ordena lo que pasa esta noche", items:["Dana hace el hechizo Ojos de Gato","Ven al unicornio en el arroyo","Dana pierde al unicornio","Los lobos rodean a Dana","Kai salva a Dana en Lunaestrella","Fenris llega con los espectros de perros","Dana vuelve a la Torre en Alide"]},
      {type:"pick", title:"El unicornio", prompt:"Toca lo que describe al unicornio", items:[["Blanco",true],["Tamaño de un poni",true],["Cola de león",true],["Cascos hendidos",true],["Cuerno brillante",true],["Tiene barbita",true],["Alas de murciélago",false],["Pelo negro",false],["Tres cuernos",false]]},
      {type:"tf", title:"Verdadero o falso", items:[["La magia de Dana no funciona contra los lobos",true],["Kai coge a Dana de la mano para salvarla",true],["La teletransportación funciona perfecta",false,"Falla"],["Dana congela al fuego fatuo sin querer",true],["Fenris vuelve a la Torre con Dana",false,"Se queda atrás con los lobos"],["El Maestro mira la pelea desde la Torre",true]]}
    ]
  },
  {
    id:"cap8", title:"Cap. 8: Algunas respuestas", icon:"💬",
    body:`
    <div class="card"><h3><span class="chip">1</span>Al despertar</h3>
      <p>El Maestro <b>no castiga</b> a Dana: dice que ya ha recibido su castigo y que sentirá <b>remordimientos</b> por haber arriesgado la vida de Fenris.</p>
      <p>Los lobos del valle «no son como los demás» y nadie puede vencerlos.</p>
      <p><b>Lunaestrella</b> volvió sola a la Torre. Maritta le cuenta que ha dormido <b>cinco días</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>Lagunas en la memoria</h3>
      <p>Kai quiere olvidar el asunto: «<b>Nada vale tanto como para dar la vida por ello</b>».</p>
      <p>Kai dice que los dos vieron algo raro en Fenris, pero Dana <b>no lo recuerda</b>: tiene <b>lagunas</b> en la memoria.</p>
      <p>Dana dice que los lobos parecían <b>clamar venganza</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>Conversación con Fenris</h3>
      <p>Fenris está muy <b>cansado</b> en las almenas. Dana le pide perdón y le da las gracias. Fenris le dice que <b>no fue una tontería</b>: ella no podía saber que los lobos son especiales.</p>
      <p>Le cuenta la leyenda: hay una <b>antigua maldición</b> sobre el valle y un <b>tesoro oculto</b> en el bosque. «Si el unicornio es el <b>guía</b>, los lobos son los <b>centinelas</b>».</p>
      <p>Dana decide esperar hasta ser maga para buscar la verdad.</p></div>
    <div class="card example"><h3><span class="chip">★</span>Recurso literario</h3>
      <p>«Los dorados rayos que se colaban por la ventana <b>jugaban</b> con su rostro»: los rayos no juegan de verdad. Es otra <b>personificación</b>.</p></div>`,
    quiz:[
      {q:"¿Cómo castiga el Maestro a Dana?", opts:["Encerrándola en su cuarto","No la castiga","Echándola de la Torre","Quitándole la túnica"], a:1, fb:"Dice que ya ha recibido su castigo y que sentirá remordimientos."},
      {q:"¿Cuántos días durmió Dana?", opts:["Cinco días","Un día entero","Un mes","Dos horas"], a:0, fb:"Estaba agotada de tanta magia."},
      {q:"¿Qué le pasa a la memoria de Dana?", opts:["Lo recuerda todo muy bien","Olvida quién es Kai","Tiene lagunas en la memoria","Recuerda su vida anterior en otro mundo"], a:2, fb:"Kai sospecha que alguien le ha borrado el recuerdo."},
      {q:"Según la leyenda, ¿qué hacen los lobos?", opts:["Son los amigos del unicornio","Guardan la Torre del Maestro","Se comen el tesoro","Son los centinelas"], a:3, fb:"El unicornio es el guía y los lobos son los centinelas."},
      {q:"¿Qué le dice Kai sobre arriesgar la vida?", opts:["Que nada vale tanto como la vida","Que hay que arriesgarlo todo siempre por la aventura","Que es divertido","Que el Maestro lo quiere así"], a:0, fb:"Kai sabe por experiencia lo que es perder la vida."}
    ],
    hard:[
      {q:"¿Quién volvió sola a la Torre?", ans:"Lunaestrella, la yegua", ok:["lunaestrella","yegua"]},
      {q:"¿Qué hay oculto en el bosque, según la leyenda?", ans:"Un tesoro", ok:["tesoro"]},
      {q:"¿Qué pesa sobre el valle o la Torre?", ans:"Una antigua maldición", ok:["maldicion"]}
    ],
    games:[
      {type:"match", title:"Une las ideas", pairs:[["El unicornio","El guía"],["Los lobos","Los centinelas"],["Cinco días","Lo que durmió Dana"],["Lagunas","Huecos en la memoria"],["Remordimientos","El castigo de Dana"]]},
      {type:"tf", title:"Verdadero o falso", items:[["El Maestro castiga duramente a Dana",false,"No la castiga"],["Lunaestrella volvió a la Torre",true],["Dana recuerda todo lo que vio en Fenris",false,"Tiene lagunas"],["Fenris dice que no fue una tontería",true],["Hay una leyenda de un tesoro en el bosque",true],["Dana decide volver al bosque esa misma noche",false,"Decide esperar a ser maga"]]},
      {type:"hangman", title:"Palabra oculta", words:[["Centinelas","Los lobos, según la leyenda"],["Maldición","Lo que pesa sobre el valle"],["Tesoro","Lo que hay oculto en el bosque"],["Lagunas","Huecos en la memoria de Dana"]]}
    ]
  },
  {
    id:"cap9", title:"Cap. 9: La huida", icon:"🏃",
    body:`
    <div class="card"><h3><span class="chip">1</span>Un recuerdo recuperado</h3>
      <p>Pasa un año: Dana tiene <b>dieciséis años</b> y se prepara para la <b>Prueba del Fuego</b>.</p>
      <p>Sueña con la noche de los lobos y <b>recuerda</b> lo que había olvidado: los lobos rodeaban a Fenris sin atacarlo, y él los <b>acariciaba</b>. Fenris tiene <b>poder sobre los lobos</b>.</p>
      <p>Kai y Dana piensan que el <b>Maestro</b> le borró la memoria para que no volviera al bosque.</p></div>
    <div class="card"><h3><span class="chip">2</span>Fenris, Kai y los Kin-Shannay</h3>
      <p>Dana le cuenta todo a Fenris <b>menos</b> lo de Kai y le pide ayuda. Él dice que <b>no</b>. La dama, por la túnica dorada, debe de ser una <b>archimaga</b>.</p>
      <p>Fenris escucha a Dana hablando con Kai. Le explica que «<b>Kai</b>» es una palabra <b>élfica</b> que significa «<b>compañero</b>».</p>
      <p>Le dice que ella es una <b>Kin-Shannay</b>: una persona que es una <b>puerta</b> abierta a otra dimensión. Fenris acepta acompañarla. (El Maestro ya le había pedido que la vigilara.)</p></div>
    <div class="card"><h3><span class="chip">3</span>Aonia y la verdad de Kai</h3>
      <p>Maritta recuerda a la <b>Señora de la Torre</b>: <b>Aonia</b>, la hechicera más poderosa, sabia y justa de los siete reinos. Murió hace más de <b>cincuenta años</b>.</p>
      <p>Dana comprende que la dama es Aonia… y que <b>Kai es un fantasma</b>. Por primera vez ve a Kai <b>llorar</b>, y le confiesa lo que siente por él.</p>
      <p>Antes de salir, Fenris hace un <b>círculo de purificación</b> sobre la nieve.</p></div>`,
    quiz:[
      {q:"¿Qué recuerda Dana en su sueño?", opts:["Que Fenris acariciaba a los lobos","Que Kai era un lobo blanco muy grande","Su nacimiento","Una canción de su madre"], a:0, fb:"Los lobos rodeaban a Fenris sin atacarlo."},
      {q:"¿Qué significa «Kai» en élfico?", opts:["Amigo","Compañero","Fantasma de la noche","Lobo"], a:1, fb:"Kai significa compañero."},
      {q:"¿Qué es una Kin-Shannay?", opts:["Una reina elfa","Un arma mágica muy antigua y poderosa","Una puerta a otra dimensión","Un tipo de lobo"], a:2, fb:"Pueden ver y oír a los espíritus."},
      {q:"¿Quién era Aonia?", opts:["La madre de Dana","La hermana de Maritta que vive en el norte","Una niña del pueblo","La antigua Señora de la Torre"], a:3, fb:"La hechicera más poderosa, sabia y justa de los siete reinos."},
      {q:"¿Qué hace Kai cuando Dana descubre la verdad?", opts:["Llora por primera vez","Se ríe mucho","Se marcha enfadado y no vuelve en semanas","La ataca"], a:0, fb:"Dana nunca lo había visto llorar."}
    ],
    hard:[
      {q:"¿Qué edad tiene Dana en este capítulo?", ans:"Dieciséis años", ok:["16","dieciseis"]},
      {q:"¿Qué es Kai en realidad?", ans:"Un fantasma (un espíritu)", ok:["fantasma","espiritu"]},
      {q:"¿Hace cuántos años murió Aonia?", ans:"Hace más de cincuenta años", ok:["50","cincuenta","medio siglo"]},
      {q:"¿Quién borró probablemente la memoria de Dana?", ans:"El Maestro", ok:["maestro"]}
    ],
    games:[
      {type:"match", title:"Palabras clave", pairs:[["Kai","Compañero en élfico"],["Kin-Shannay","Puerta a otra dimensión"],["Aonia","Antigua Señora de la Torre"],["Túnica dorada","Archimaga"],["Círculo de purificación","Ritual de Fenris"]]},
      {type:"tf", title:"Verdadero o falso", items:[["Dana le cuenta a Fenris que existe Kai",false,"Le habla de todo menos de Kai"],["Fenris tiene poder sobre los lobos",true],["Aonia murió hace cinco años",false,"Hace más de cincuenta"],["Kai es un fantasma",true],["Fenris acepta acompañar a Dana",true],["Dana nunca había visto llorar a Kai",true]]},
      {type:"hangman", title:"Palabra oculta", words:[["Compañero","Significado de Kai en élfico"],["Fantasma","Lo que es Kai en realidad"],["Archimaga","Maga de túnica dorada"],["Aonia","Antigua Señora de la Torre"]]}
    ]
  },
  {
    id:"cap10", title:"Cap. 10: El refugio del bosque", icon:"🛖",
    body:`
    <div class="card"><h3><span class="chip">1</span>La noche del hombre lobo</h3>
      <p>El Maestro baja a la <b>cocina</b> (por primera vez en medio siglo) y le pide a Maritta que lo acompañe.</p>
      <p>En el bosque, Fenris se va <b>transformando</b>: «Nací enfermo». <b>Aúlla</b> y los lobos le obedecen. Al final le manda a Dana que <b>huya</b>.</p>
      <p>Dana levanta un <b>muro de hielo</b> y se refugia en la <b>cabaña de los cazadores</b>, rodeada de una <b>barrera vegetal</b>.</p></div>
    <div class="card"><h3><span class="chip">2</span>La historia de Kai</h3>
      <p>Hace más de <b>500 años</b>, un joven granjero se enfrentó a un <b>dragón azul</b> con dos cuchillos envenenados. El dragón se lo llevó en una garra; él le clavó un cuchillo y el dragón lo soltó. <b>Cayó</b> desde muy alto y murió a los <b>16 años</b>. Era Kai.</p>
      <p>Lo enterraron donde después estuvo la <b>granja</b> de Dana.</p>
      <p>Los espíritus lo eligieron para ser el «<b>Kai</b>» de Dana: guiarla y <b>protegerla</b>. Puede estar con ella tantos años como tenía al morir: ese es su <b>plazo</b>. Y Dana ya tiene 16…</p>
      <p>La anciana ciega del pueblo era un <b>fantasma</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>La trampilla</h3>
      <p>Fenris-lobo entra en la cabaña. Dana lo <b>aturde</b> con un hechizo. Al caer, el suelo suena a <b>hueco</b>: hay una <b>trampilla</b> mágica.</p>
      <p>Bajan por unas escaleras de <b>mármol</b> hasta una puerta enorme con dos columnas: un <b>templo</b>.</p></div>`,
    quiz:[
      {q:"¿Qué le pasa a Fenris con la luna llena?", opts:["Se convierte en lobo","Se vuelve invisible y muy frío","Se duerme","Vuela"], a:0, fb:"Fenris es un elfo licántropo."},
      {q:"¿Dónde se refugian Dana y Kai?", opts:["En la Torre","En la cabaña de los cazadores","En una cueva de enanos bajo la montaña","En el pueblo"], a:1, fb:"Protegen la cabaña con una barrera vegetal."},
      {q:"¿Cómo murió Kai?", opts:["De una enfermedad","Ahogado en el río de la aldea","Se cayó de un dragón","Atacado por lobos"], a:2, fb:"El dragón lo soltó en el aire."},
      {q:"¿Cuál es el «plazo» de Kai?", opts:["Mil años","Hasta que muera el Maestro de la Torre","Un día","Los 16 años que tenía"], a:3, fb:"Por eso queda poco tiempo: Dana ya tiene 16."},
      {q:"¿Qué descubren bajo la cabaña?", opts:["Una trampilla a un templo","Un tesoro de monedas de oro","Un túnel a la Torre","Una cárcel"], a:0, fb:"Escaleras de mármol hasta un templo."}
    ],
    hard:[
      {q:"¿Contra qué luchó Kai cuando estaba vivo?", ans:"Contra un dragón azul", ok:["dragon"]},
      {q:"¿Cuál es la misión de Kai con Dana?", ans:"Guiarla y protegerla", ok:["proteg","guia","cuidar"]},
      {q:"¿Qué era la anciana ciega del pueblo?", ans:"Un fantasma", ok:["fantasma","espiritu"]},
      {q:"¿Qué hechizo usa Dana para proteger la cabaña?", ans:"Una barrera vegetal (plantas)", ok:["vegetal","planta","arbol"]}
    ],
    games:[
      {type:"order", title:"La historia de Kai", prompt:"Ordena la historia que cuenta Kai", items:["Un dragón azul ataca la aldea","Un joven granjero va a luchar contra él","El dragón se lo lleva en una garra","Él le clava un cuchillo","El dragón lo suelta y cae","Muere a los dieciséis años","Vuelve como el Kai de Dana"]},
      {type:"tf", title:"Verdadero o falso", items:[["Kai murió hace más de 500 años",true],["Kai murió a los 20 años",false,"A los 16"],["Kai fue enterrado donde estaría la granja de Dana",true],["La anciana ciega era un fantasma",true],["Fenris controla siempre su lado lobo",false,"Con la luna llena se pierde"],["Bajo la cabaña hay una trampilla",true]]},
      {type:"memory", title:"Memoria", pairs:[["Dragón","Azul"],["Kai","Murió a los 16"],["Cabaña","De los cazadores"],["Trampilla","Lleva al templo"],["Muro","De hielo"],["Plazo","16 años"]]}
    ]
  },
  {
    id:"cap11", title:"Cap. 11: Atrapados", icon:"🕳️",
    body:`
    <div class="card"><h3><span class="chip">1</span>El templo de la Madre Tierra</h3>
      <p>El templo tiene un enorme <b>árbol de oro</b> con animales y un pequeño <b>pozo</b>. El <b>unicornio</b> toca el agua con el cuerno y <b>desaparece</b>.</p>
      <p>Llegan el <b>Maestro</b>, Maritta y Fenris. El Maestro habla del <b>Pozo de los Reflejos</b>: en el fondo hay una figurilla de <b>cristal</b> de gran poder.</p>
      <p>Dana intenta cogerla, pero su mano la <b>atraviesa</b>: es como un espejismo. El Maestro los ha utilizado para llegar hasta allí.</p></div>
    <div class="card"><h3><span class="chip">2</span>La prisión mágica</h3>
      <p>El Maestro controla la mente de Dana y la manda fuera. Luego la encierra con Fenris y Kai en una <b>prisión mágica</b>: un <b>agujero en ninguna parte</b>.</p>
      <p>Fenris cuenta su historia: nació hace casi <b>200 años</b> en la tierra de los elfos. Por ser <b>licántropo</b> lo expulsaron. El Maestro le ofreció protección en la Torre a cambio de <b>mantener a raya a los lobos</b>.</p>
      <p>«La Torre es mi <b>refugio</b>, pero también mi <b>prisión</b>».</p></div>
    <div class="card"><h3><span class="chip">3</span>El colgante</h3>
      <p>Quien tenga el <b>Alma de Cristal</b> controlará al unicornio. El ritual necesita un <b>sacrificio humano</b>: ¡la víctima va a ser <b>Maritta</b>!</p>
      <p>Kai puede salir de la prisión. Con mucho esfuerzo le lleva el <b>colgante</b> de Dana a Maritta y la empuja hasta el punto exacto.</p>
      <p>Maritta rompe el hechizo del Maestro: los enanos resisten la magia por su <b>fuerza de voluntad</b>.</p></div>`,
    quiz:[
      {q:"¿Qué hay en el centro del templo?", opts:["Una estatua del Maestro","Un árbol de oro","Un dragón","Un trono"], a:1, fb:"Un árbol de oro con animales, para la Madre Tierra."},
      {q:"¿Qué pasa cuando Dana intenta coger la figurilla?", opts:["Su mano la atraviesa","Se quema la mano con el cristal","La coge sin problema","Se cae al pozo"], a:0, fb:"No la puede coger: es como un espejismo."},
      {q:"¿Dónde los encierra el Maestro?", opts:["En la cocina","En una jaula de hierro","En una prisión mágica","En el calabozo más oscuro de la Torre"], a:2, fb:"Un lugar sin espacio del que no se puede salir andando."},
      {q:"¿Por qué expulsaron a Fenris de la tierra de los elfos?", opts:["Por robar libros a los elfos","Por ser mago","Por ser muy joven","Por ser licántropo"], a:3, fb:"Su licantropía rompía la paz de los elfos."},
      {q:"¿Qué le lleva Kai a Maritta?", opts:["El colgante de Dana","Una carta","La figurilla de cristal","Un puñal"], a:0, fb:"Así Maritta entiende que Dana la necesita."}
    ],
    hard:[
      {q:"¿Cómo se llama el pozo del templo?", ans:"Pozo de los Reflejos", ok:["reflejo"]},
      {q:"¿Quién iba a ser la víctima del sacrificio?", ans:"Maritta", ok:["maritta"]},
      {q:"¿Qué pacto hizo Fenris con el Maestro?", ans:"Mantener a raya a los lobos a cambio de protección", ok:["lobo"]},
      {q:"¿Por qué Maritta puede romper el hechizo?", ans:"Porque los enanos tienen mucha voluntad y resisten la magia", ok:["voluntad","inmune","enan","resist"]}
    ],
    games:[
      {type:"tf", title:"Verdadero o falso", items:[["El templo está dedicado a la Madre Tierra",true],["Dana coge la figurilla de cristal",false,"Su mano la atraviesa"],["El Maestro encierra a Dana en una prisión mágica",true],["Fenris tiene casi 200 años",true],["Kai no puede salir de la prisión",false,"Sí puede: es un espíritu"],["Maritta rompe el hechizo del Maestro",true]]},
      {type:"classify", title:"¿Quién hace qué?", bins:["🧙 El Maestro","👦 Kai","🍲 Maritta"], items:[["Encierra a los amigos en la prisión",0],["Quiere el Alma de Cristal",0],["Prepara un ritual",0],["Sale de la prisión mágica",1],["Lleva el colgante",1],["Empuja a Maritta",1],["Rompe el hechizo de parálisis",2],["Iba a ser sacrificada",2],["Recibe el colgante",2]]},
      {type:"hangman", title:"Palabra oculta", words:[["Reflejos","Pozo de los ..."],["Prisión","La Torre para Fenris"],["Colgante","Lo que lleva Kai a Maritta"],["Sacrificio","Lo que necesita el ritual"]]}
    ]
  },
  {
    id:"cap12", title:"Cap. 12: El regreso de Aonia", icon:"✨",
    body:`
    <div class="card"><h3><span class="chip">1</span>La historia de Aonia</h3>
      <p>Maritta cuenta que el Maestro llegó a la Torre de <b>niño</b>, pálido y enfermo, en una tormenta de nieve. <b>Aonia</b> lo crió como a un <b>hijo</b> y le enseñó magia.</p>
      <p>Pero él tenía mucha <b>ambición</b>: se decía que Aonia tenía el poder del <b>unicornio</b>. El aprendiz la <b>traicionó y la mató</b>.</p>
      <p>Regla de las escuelas: un aprendiz <b>jamás</b> debe rebelarse contra su Maestro. Aonia lo <b>maldijo</b> a él y a quien ocupara la Torre. Los <b>lobos</b> se convirtieron en los guardianes.</p></div>
    <div class="card"><h3><span class="chip">2</span>«Abre la Puerta»</h3>
      <p>La voz de Aonia le pide a Dana: «<b>Abre la Puerta</b>». Kai se lo explica: «<b>La Puerta eres tú</b>».</p>
      <p>Dana cruza la frontera entre la vida y la muerte y trae a Aonia, que entra en el <b>cuerpo de Maritta</b>. Así los libera de la prisión.</p>
      <p>Maritta-Aonia llama al Maestro por su nombre: <b>Suren</b>. Aparecen lobos y la magia del Maestro no funciona. Mira en el pozo y grita de <b>terror</b>.</p></div>
    <div class="card"><h3><span class="chip">3</span>El tesoro del unicornio</h3>
      <p>El Maestro recupera las fuerzas y se lleva a Fenris a la Torre.</p>
      <p>Maritta-Aonia hace que Dana mire en el pozo: ve al unicornio y una luz de todos los colores. Es su <b>propia alma</b>.</p>
      <p>En el fondo del pozo <b>no hay nada</b>: solo el <b>reflejo del alma</b> de quien mira.</p>
      <p>Dana <b>no quiere matar</b> al Maestro, pero irá a la Torre para <b>rescatar a Fenris</b>.</p></div>`,
    quiz:[
      {q:"¿Cómo llegó el Maestro a la Torre?", opts:["De niño, pálido y enfermo","Ya de viejo y muy poderoso","Como rey","Con Fenris"], a:0, fb:"Aonia lo acogió y lo crió como a un hijo."},
      {q:"¿Qué le hizo el Maestro a Aonia?", opts:["La salvó","La traicionó y la mató","Se casó con ella en el pueblo","La llevó al pueblo"], a:1, fb:"Por eso Aonia lo maldijo."},
      {q:"¿Qué significa «La Puerta eres tú»?", opts:["Que debe abrir una puerta de madera","Que es una puerta de hierro","Que une a los vivos y los muertos","Que debe cerrar la Torre"], a:2, fb:"Por ser Kin-Shannay es una puerta entre los dos mundos."},
      {q:"¿En qué cuerpo entra Aonia?", opts:["En el de Dana","En el de Fenris","En el de un lobo de las montañas","En el de Maritta"], a:3, fb:"Aonia usa el cuerpo de Maritta para luchar."},
      {q:"¿Qué ve Dana en el Pozo de los Reflejos?", opts:["Su propia alma","Un tesoro de oro","La cara del Maestro","A su padre"], a:0, fb:"El pozo solo refleja el alma de quien mira."}
    ],
    hard:[
      {q:"¿Cuál es el verdadero nombre del Maestro?", ans:"Suren", ok:["suren"]},
      {q:"¿Qué regla rompió el Maestro?", ans:"Un aprendiz jamás debe rebelarse contra su Maestro", ok:["rebel","contra"]},
      {q:"¿Qué hay de verdad en el fondo del pozo?", ans:"Nada: solo el reflejo del alma de quien mira", ok:["alma","reflejo","nada"]},
      {q:"¿Para qué va Dana a la Torre?", ans:"Para rescatar a Fenris", ok:["fenris"]}
    ],
    games:[
      {type:"order", title:"La historia de la Torre", prompt:"Ordena la historia que cuenta Maritta", items:["Un niño enfermo llega a la Torre","Aonia lo cría como a un hijo","El chico se vuelve ambicioso","Traiciona y mata a Aonia","Aonia lo maldice","Los lobos guardan la Torre","Años después vuelve como Maestro"]},
      {type:"tf", title:"Verdadero o falso", items:[["Aonia crió al Maestro como a un hijo",true],["El Maestro respetó siempre a Aonia",false,"La traicionó"],["Dana trae a Aonia del mundo de los muertos",true],["Aonia entra en el cuerpo de Fenris",false,"En el de Maritta"],["En el pozo hay una figura de cristal de verdad",false,"Solo el reflejo del alma"],["Dana quiere rescatar a Fenris",true]]},
      {type:"memory", title:"Memoria", pairs:[["Suren","Nombre del Maestro"],["La Puerta","Dana"],["Aonia","En el cuerpo de Maritta"],["Pozo","Reflejo del alma"],["Maldición","Lobos guardianes"],["Ambición","Defecto del Maestro"]]}
    ]
  },
  {
    id:"cap13", title:"Cap. 13: La Prueba del Fuego", icon:"🔥",
    body:`
    <div class="card"><h3><span class="chip">1</span>De vuelta en la Torre</h3>
      <p>El Maestro está en su estudio. Fenris vigila a los lobos desde la ventana; piensa en dejarlos <b>entrar</b>.</p>
      <p>Dana, Kai y Maritta-Aonia aparecen en la <b>cocina</b>. Se ponen <b>capas de camuflaje</b> para que el Maestro no las sienta. Kai debe <b>quedarse</b> en la cocina porque el Maestro nota su presencia.</p>
      <p>Suben a pie, sin hechizos, para no ser descubiertas.</p></div>
    <div class="card"><h3><span class="chip">2</span>El trato</h3>
      <p>El Maestro atrapa a Kai con el conjuro <b>sul'iketh</b>: encierra a los espíritus en una <b>botella</b> para siempre.</p>
      <p>Le propone un <b>trato</b>: liberará a Kai si Dana trabaja para él <b>toda la vida</b> y le entrega su <b>mente</b>.</p>
      <p>Dana <b>acepta</b>: «Kai habría hecho lo mismo por mí». Maritta-Aonia desaparece.</p></div>
    <div class="card"><h3><span class="chip">3</span>La prueba</h3>
      <p>En la <b>sala de pruebas</b> el Maestro obliga a Dana a hacer la <b>Prueba del Fuego</b>. A sus pies hay una botella <b>verde</b> con el espíritu de Kai.</p>
      <p>Durante <b>dos horas</b> lucha contra bolas de fuego, demonios, un <b>dragón</b> y un <b>caballo alado de fuego</b>.</p>
      <p>Sin fuerzas, el caballo se acerca y la <b>acaricia</b>. Dana entiende: no había que <b>destruir</b> el fuego, sino <b>doblegarlo</b>. Ya es inmune al fuego. Monta en el caballo: <b>es maga</b>.</p></div>`,
    quiz:[
      {q:"¿Para qué sirven las capas de camuflaje?", opts:["Para tener calor en invierno","Para esconderse del Maestro","Para volar","Para parecer lobos del bosque"], a:1, fb:"Ocultan la mente y la energía mágica."},
      {q:"¿Para qué sirve el conjuro sul'iketh?", opts:["Para encerrar espíritus","Para hacer fuego","Para curar las heridas de Fenris","Para abrir puertas"], a:0, fb:"El Maestro encierra a Kai en una botella verde."},
      {q:"¿Qué le pide el Maestro a Dana a cambio de liberar a Kai?", opts:["Su amuleto","Su yegua","Trabajar para él toda la vida","Que se vaya de la Torre y no vuelva nunca"], a:2, fb:"Dana sería su esclava."},
      {q:"¿Qué criatura aparece al final de la prueba?", opts:["Un unicornio","Un lobo gigante de hielo","Una serpiente","Un caballo alado"], a:3, fb:"El caballo alado de fuego la reconoce como su dueña."},
      {q:"¿Cómo supera Dana la Prueba del Fuego?", opts:["Doblegando el fuego","Huyendo del círculo","Pidiendo ayuda a Fenris desde la silla","Durmiendo"], a:0, fb:"No había que destruir a los seres de fuego, sino doblegarlos."}
    ],
    hard:[
      {q:"¿Cómo se llama el conjuro que atrapa espíritus?", ans:"Sul'iketh", ok:["suliketh","sul'iketh","sul iketh"]},
      {q:"¿Por qué acepta Dana el trato del Maestro?", ans:"Para liberar a Kai, porque él habría hecho lo mismo por ella", ok:["kai"]},
      {q:"¿Dónde hace Dana la Prueba del Fuego?", ans:"En la sala de pruebas de la Torre", ok:["sala"]},
      {q:"¿Qué entiende Dana al final de la prueba?", ans:"Que había que doblegar el fuego, no destruirlo", ok:["doblegar","domin","controlar"]}
    ],
    games:[
      {type:"order", title:"La Prueba del Fuego", prompt:"Ordena lo que pasa en el capítulo 13", items:["Se ponen las capas de camuflaje","Kai se queda en la cocina","El Maestro atrapa a Kai en una botella","Dana acepta el trato","Dana entra en la sala de pruebas","Lucha contra el fuego y un dragón","El caballo de fuego la acaricia"]},
      {type:"tf", title:"Verdadero o falso", items:[["Kai sube con ellas a la Torre",false,"Se queda en la cocina"],["El Maestro encierra a Kai en una botella verde",true],["Dana rechaza el trato",false,"Lo acepta por Kai"],["La prueba dura dos horas",true],["Dana mata al caballo alado de fuego",false,"El caballo la reconoce"],["Al final Dana es inmune al fuego",true]]},
      {type:"pick", title:"Seres de fuego", prompt:"Toca contra qué luchó Dana en la prueba", items:[["Bolas de fuego",true],["Círculos de llamas",true],["Pequeños demonios",true],["Un dragón",true],["Un caballo alado",true],["Lobos de hielo",false],["Un unicornio",false],["Fantasmas",false]]}
    ]
  },
  {
    id:"cap14", title:"Cap. 14: El adiós", icon:"💔",
    body:`
    <div class="card"><h3><span class="chip">1</span>El pacto y la muerte</h3>
      <p>Dana recibe la túnica <b>roja</b>. El Maestro hace el conjuro: <b>libera a Kai</b> y controla la mente de Dana.</p>
      <p>Dana despierta en el mundo de los espíritus: ¡está <b>muerta</b>! Por primera vez puede <b>abrazar</b> a Kai.</p>
      <p>Aonia le explica que era la <b>única forma</b> de salvarla del conjuro. Pero puede <b>volver</b>. Kai le pide: «<b>Vuelve. Vive</b>».</p>
      <p>Mientras, Fenris llora por primera vez en <b>150 años</b> y decide irse de la Torre.</p></div>
    <div class="card"><h3><span class="chip">2</span>El final del Maestro</h3>
      <p>Dana <b>revive</b> y finge seguir muerta. Maritta llama a la puerta con «un recado». Dana ataca al Maestro y Fenris ya <b>no lo protege</b> de los lobos.</p>
      <p>El Maestro invoca una <b>serpiente</b> gigante, pero <b>Maritta</b> (ella sola) le clava un <b>puñal</b>. El Maestro huye escaleras abajo y los <b>lobos</b> lo alcanzan. La <b>maldición</b> se cumple.</p>
      <p>Los lobos volverán a ser lobos normales. Maritta dice: «<b>Nunca dejé de ser yo</b>»: dejó entrar a Aonia porque la estaba esperando.</p></div>
    <div class="card"><h3><span class="chip">3</span>El adiós de Kai</h3>
      <p>Aonia y Kai deben marcharse. Kai le hace <b>prometer</b> a Dana: «<b>Vive</b>. Vive muchos años, vive por mí la vida que yo no pude vivir».</p>
      <p>Dana debe recibir el <b>poder del unicornio</b>. Aonia le dice que puede ayudar a <b>Fenris</b> a controlar su lado lobo.</p>
      <p>Kai desaparece. Fenris abraza a Dana y miran el <b>amanecer</b>: empieza una <b>nueva etapa</b> en el Valle de los Lobos.</p></div>`,
    quiz:[
      {q:"¿Qué le pasa a Dana después del conjuro del Maestro?", opts:["Se convierte en loba","Muere","Se queda dormida un año entero","Huye a la granja"], a:1, fb:"Aonia y Kai se la llevaron para salvarla del conjuro."},
      {q:"¿Qué le pide Kai a Dana en el mundo de los espíritus?", opts:["Que vuelva y viva","Que se quede con él","Que mate al Maestro","Que olvide a Fenris"], a:0, fb:"«Vuelve. Vive.» Todavía no ha llegado su hora."},
      {q:"¿Quién hiere de muerte al Maestro?", opts:["Dana","Fenris, el elfo","Maritta","Aonia"], a:2, fb:"«Aquel que no mira nunca hacia abajo es hombre muerto»."},
      {q:"¿Cómo muere el Maestro?", opts:["Cae al pozo","Quemado por el fuego del dragón","Dormido","Lo alcanzan los lobos"], a:3, fb:"La maldición de Aonia se cumple."},
      {q:"¿Qué le hace prometer Kai a Dana?", opts:["Que viva intensamente","Que nunca use la magia","Que vuelva a la granja","Que se case con Fenris"], a:0, fb:"Que viva por él la vida que él no pudo vivir."}
    ],
    hard:[
      {q:"¿Qué puede hacer Dana por primera vez al estar muerta?", ans:"Abrazar a Kai", ok:["abraz","tocar"]},
      {q:"¿Cuántos años hacía que Fenris no lloraba?", ans:"150 años", ok:["150","ciento cincuenta"]},
      {q:"¿Qué les pasará ahora a los lobos?", ans:"Volverán a ser lobos normales", ok:["normal","montana"]},
      {q:"¿Qué le promete Dana a Kai?", ans:"Que vivirá", ok:["viv"]}
    ],
    games:[
      {type:"order", title:"El adiós", prompt:"Ordena el final de la historia", items:["El Maestro libera a Kai","Dana despierta en el mundo de los espíritus","Kai le pide que vuelva y viva","Dana revive y finge estar muerta","Maritta le clava un puñal al Maestro","Los lobos alcanzan al Maestro","Kai y Aonia se marchan"]},
      {type:"tf", title:"Verdadero o falso", items:[["Dana puede abrazar a Kai en el mundo de los espíritus",true],["Dana se queda para siempre en el mundo de los muertos",false,"Vuelve a la vida"],["Fenris llora por primera vez en 150 años",true],["El Maestro gana la pelea final",false,"Muere"],["Aonia entró en Maritta sin pedirle permiso",false,"Maritta la dejó entrar"],["Kai le hace prometer a Dana que vivirá",true]]},
      {type:"match", title:"¿Quién dijo qué?", pairs:[["Kai","Vuelve. Vive."],["Maritta","Nunca dejé de ser yo"],["Aonia","Era la única forma de salvarte"],["Fenris","Los lobos vienen por ti"],["Dana","La Torre es nuestra"]]}
    ]
  },
  {
    id:"epilogo", title:"Epílogo", icon:"🐉",
    body:`
    <div class="card"><h3><span class="chip">1</span>La Señora de la Torre</h3>
      <p>Ha pasado el tiempo. Dana es ahora la <b>Señora de la Torre</b>, que protege a todos los habitantes del valle. Fenris vive con ella.</p>
      <p>Dos hombres llegan con una mula. Uno es <b>Nicolás</b>, el niño pelirrojo del pueblo, ya joven. El otro es un viejo desconfiado.</p></div>
    <div class="card"><h3><span class="chip">2</span>El dragón azul</h3>
      <p>Traen los <b>huesos de un dragón azul</b>. Entre las costillas encontraron un <b>puñal</b> viejo y oxidado, un cuchillo de cocina normal.</p>
      <p>El dragón cayó del cielo de repente. Así Dana sabe que <b>Kai mató al dragón</b>. Besa el puñal con mucha ternura.</p></div>
    <div class="card"><h3><span class="chip">3</span>El final</h3>
      <p>En el cielo brilla una <b>luna creciente</b> con una estrella entre sus picos, como el <b>amuleto</b> de la madre de Dana.</p>
      <p><b>Fenris</b> aúlla y los lobos de las montañas le <b>responden</b>. Dana y Fenris sonríen y vuelven juntos a la Torre.</p></div>`,
    quiz:[
      {q:"¿Quién es ahora la Señora de la Torre?", opts:["Maritta","Dana","Aonia","Sara"], a:1, fb:"Dana es la nueva Señora de la Torre."},
      {q:"¿Qué traen Nicolás y el viejo?", opts:["Huesos de dragón y un puñal","Un unicornio","Una carta de la familia de Dana","Comida para Maritta"], a:0, fb:"Los restos del dragón que mató Kai."},
      {q:"¿Dónde estaba el puñal?", opts:["En el Pozo de los Reflejos del templo","En la granja","Entre las costillas del dragón","En la Torre"], a:2, fb:"Clavado entre las costillas del dragón."},
      {q:"¿Qué descubre Dana con el puñal?", opts:["Que el Maestro sigue vivo","Que hay más dragones","Que Nicolás es un mago","Que Kai mató al dragón"], a:3, fb:"Así responde a la pregunta que se hacía Kai."},
      {q:"¿Qué hace Fenris al final?", opts:["Aúlla con los lobos","Se va del valle","Se convierte en humano para siempre","Rompe la Torre"], a:0, fb:"Ahora es un Señor de los Lobos."}
    ],
    hard:[
      {q:"¿Cómo se llama el joven que trae los huesos?", ans:"Nicolás", ok:["nicolas"]},
      {q:"¿De qué color era el dragón?", ans:"Azul", ok:["azul"]},
      {q:"¿A qué se parece la luna del final?", ans:"Al amuleto de la madre de Dana: luna con una estrella", ok:["amuleto","colgante","estrella"]}
    ],
    games:[
      {type:"tf", title:"Verdadero o falso", items:[["Dana es la Señora de la Torre",true],["Nicolás sigue siendo un niño",false,"Ya es un joven"],["El puñal era un arma de oro con joyas",false,"Era un cuchillo de cocina oxidado"],["Kai mató al dragón",true],["La luna del final se parece al amuleto",true],["Los lobos ya no responden a Fenris",false,"Le responden"]]},
      {type:"hangman", title:"Palabra oculta", words:[["Puñal","Arma encontrada en las costillas del dragón"],["Dragón","Animal azul de hace 500 años"],["Nicolás","Joven pelirrojo del pueblo"],["Creciente","Cómo está la luna del final"]]},
      {type:"memory", title:"Memoria del final", pairs:[["Dana","Señora de la Torre"],["Nicolás","Joven pelirrojo"],["Puñal","Entre las costillas"],["Dragón","Azul"],["Luna creciente","Como el amuleto"],["Fenris","Aúlla con los lobos"]]}
    ]
  },
  {
    id:"repaso", title:"Repaso: todo el libro", icon:"🏆",
    body:`
    <div class="card"><h3><span class="chip">1</span>Infancia en la granja (cap. 1-2)</h3>
      <p>Dana nace en una noche de viento y a los <b>seis años</b> conoce a <b>Kai</b>, un amigo que solo ve ella. Las niñas la llaman <b>bruja</b>. Tras un invierno duro y una <b>sequía</b>, llega al pozo el <b>hombre de la túnica gris</b>, que predice la lluvia.</p></div>
    <div class="card"><h3><span class="chip">2</span>Aprendiza en la Torre (cap. 3-5)</h3>
      <p>El <b>Maestro</b> se la lleva a la <b>Torre</b>, en el Valle de los Lobos, y Kai va con ella. Conoce a <b>Fenris</b> y a <b>Maritta</b> y estudia los libros de la <b>Tierra</b>, el <b>Aire</b> y el <b>Agua</b>. A los quince años se le aparece la dama de la <b>túnica dorada</b>: «Busca al unicornio».</p></div>
    <div class="card"><h3><span class="chip">3</span>El unicornio y los lobos (cap. 6-10)</h3>
      <p>Con la <b>luna llena</b> Dana ve al <b>unicornio</b>, pero los <b>lobos</b> la atacan y Fenris la salva. Un año después descubre que Fenris es <b>licántropo</b>, que ella es una <b>Kin-Shannay</b>, que la dama es <b>Aonia</b> y que Kai es un <b>fantasma</b> que murió luchando contra un <b>dragón</b>.</p></div>
    <div class="card"><h3><span class="chip">4</span>El templo y la venganza (cap. 11-14)</h3>
      <p>En el <b>templo de la Madre Tierra</b> está el <b>Pozo de los Reflejos</b>, que solo refleja el <b>alma</b>. Dana trae a <b>Aonia</b> al cuerpo de <b>Maritta</b>. Acepta el trato del Maestro para liberar a Kai, supera la <b>Prueba del Fuego</b> y muere, pero <b>vuelve a la vida</b>. Maritta hiere al Maestro y los <b>lobos</b> acaban con él. Kai se despide: «<b>Vive</b>».</p></div>
    <div class="card"><h3><span class="chip">5</span>Final (epílogo)</h3>
      <p>Dana es la <b>Señora de la Torre</b>. Un puñal entre los huesos de un dragón azul demuestra que <b>Kai mató al dragón</b>.</p></div>`,
    quiz:[
      {q:"¿Quién ve a Kai además de Dana?", opts:["Toda su familia","Solo ella","Sara y sus amigas","Maritta, la cocinera de la Torre"], a:1, fb:"El Maestro solo siente dónde está; ver, solo lo ve Dana."},
      {q:"¿Qué cambia cada vez que Dana aprueba un libro?", opts:["El color de su túnica","Su nombre","Su habitación en la Torre, que sube un piso","Su caballo"], a:0, fb:"Blanca, verde, azul, violeta y roja."},
      {q:"¿Por qué los lobos no atacan a Fenris?", opts:["Porque les da comida todas las noches desde las almenas","Porque es invisible","Porque él también es lobo","Porque lleva el amuleto de Dana"], a:2, fb:"Fenris es licántropo y tiene poder sobre los lobos."},
      {q:"¿Quién era la dama de la túnica dorada?", opts:["La madre de Dana","Una niña del pueblo","Una bruja de las montañas del norte","Aonia, la antigua Señora de la Torre"], a:3, fb:"Aonia fue asesinada por su aprendiz, el Maestro."},
      {q:"¿Por qué trajo el Maestro a Dana a la Torre?", opts:["Para llegar al unicornio","Para que fuera su cocinera","Porque se lo pidió su madre llorando","Para casarse con ella"], a:0, fb:"Sabía que Aonia hablaría con una Kin-Shannay."},
      {q:"¿Qué hay en el fondo del Pozo de los Reflejos?", opts:["Monedas de oro","El reflejo del alma","Una figurilla de cristal con el alma del unicornio","Agua envenenada"], a:1, fb:"Solo refleja el alma de quien se asoma."},
      {q:"¿Qué cambia Dana por la libertad de Kai?", opts:["Su yegua Lunaestrella","Su túnica roja","Su voluntad","El amuleto que le regaló su madre"], a:2, fb:"Acepta ser la esclava del Maestro para liberar a Kai."},
      {q:"¿Quién acaba de verdad con el Maestro?", opts:["Dana con un rayo","Fenris convertido en lobo","El unicornio","Los lobos, tras el puñal de Maritta"], a:3, fb:"Maritta lo hiere y los lobos lo alcanzan: se cumple la maldición."},
      {q:"¿Por qué Kai insiste tanto en que Dana viva?", opts:["Porque él murió joven","Porque quiere quedarse con la Torre","Porque se lo manda Aonia","Porque odia el Otro Lado y no quiere que ella vaya"], a:0, fb:"Murió a los 16 años luchando contra un dragón."},
      {q:"¿Cuántos años pasan desde que nace Dana hasta el capítulo 14?", opts:["Diez años","Dieciséis","Cincuenta años más o menos","Dos años"], a:1, fb:"Dana tiene 16 años al final de la historia."},
      {q:"¿Qué objeto aparece al principio y al final del libro?", opts:["Una espada","Una botella verde","La luna y la estrella","Un libro de hechizos antiguos de la Torre"], a:2, fb:"El amuleto de su madre y la luna creciente del epílogo."},
      {q:"¿Cuál es el mensaje más importante del libro?", opts:["Que hay que obedecer siempre al Maestro","Que la magia es mala","Que los lobos son peligrosos","Que hay que vivir la vida"], a:3, fb:"«Vive», le pide Kai a Dana."}
    ],
    hard:[
      {q:"¿Cómo se llama el Amo de la Torre en realidad?", ans:"Suren", ok:["suren"]},
      {q:"¿Qué es Dana, según los elfos?", ans:"Una Kin-Shannay, una puerta entre los vivos y los muertos", ok:["kin","shannay","puerta"]},
      {q:"¿Qué significa Kai en élfico?", ans:"Compañero", ok:["companer"]},
      {q:"¿A qué edad murió Kai?", ans:"A los 16 años", ok:["16","dieciseis"]},
      {q:"¿Cómo se llama la última prueba para ser maga?", ans:"La Prueba del Fuego", ok:["fuego"]},
      {q:"¿Quién es la Señora de la Torre al final?", ans:"Dana", ok:["dana"]}
    ],
    games:[
      {type:"order", title:"Toda la historia", prompt:"Ordena los grandes momentos del libro", items:["Dana conoce a Kai","El hombre de la túnica gris llega al pozo","Dana entra en la Torre","Aparece la dama de la túnica dorada","Los lobos atacan a Dana","Kai cuenta cómo murió","Dana trae a Aonia","Dana supera la Prueba del Fuego","Kai se despide"]},
      {type:"match", title:"¿En qué capítulo pasa?", pairs:[["Cap. 1","Dana conoce a Kai"],["Cap. 2","Llega el hombre de la túnica gris"],["Cap. 7","La noche de los lobos"],["Cap. 10","La historia de Kai"],["Cap. 13","La Prueba del Fuego"],["Epílogo","Los huesos del dragón"]]},
      {type:"classify", title:"¿Bueno o malo?", bins:["😇 Ayuda a Dana","😈 Va contra Dana"], items:[["Kai",0],["Maritta",0],["Aonia",0],["Fenris al final",0],["El unicornio",0],["El Maestro",1],["Sara y sus amigas",1],["La madre de Nicolás",1]]}
    ]
  }
  ]
});

/* Preguntas para ENTENDER y razonar.
   Formato: [pregunta, respuesta corta, palabras clave válidas, por qué] */
addQA("galego", {
  libro: [
    ["¿Por qué es una novela de fantasía?", "Tiene magos, elfos y magia", ["mag","elf","unicornio"], "En la fantasía aparecen seres y poderes que no existen."],
    ["Si el narrador sabe lo que piensan todos, es...", "Omnisciente", ["omniscient"], "El narrador omnisciente conoce los pensamientos de los personajes."],
    ["¿Quién hace el papel de «malo» en la historia?", "El Maestro", ["maestro"], "El Maestro es el antagonista."],
    ["¿De qué color es la túnica de quien ya es mago?", "Roja", ["roja"], "Después de la Prueba del Fuego, la túnica es roja."],
    ["¿Por qué solo Dana puede ver a Kai?", "Porque es Kin-Shannay", ["kin","shannay","puerta"], "Los Kin-Shannay ven a los espíritus."]
  ],
  cap1: [
    ["¿Por qué la familia cree que Dana miente?", "Porque no ven a Kai", ["no ven","ver","existe"], "Solo Dana puede ver a Kai."],
    ["¿Por qué Kai aparece solo cuando Dana está sola?", "Para que no la crean loca", ["loca","sola","problema"], "Kai sabe que nadie más puede verlo."],
    ["¿Cuántos años pasan desde que conoce a Kai hasta lo del granero?", "Dos años", ["dos","2"], "Lo conoce a los 6 y tiene 8 en el granero."],
    ["¿Por qué la comadrona calló lo que vio?", "Porque era algo extraño", ["extran","raro","miedo"], "Vio algo especial en los ojos de Dana: sus poderes."],
    ["¿Por qué Kai no deja que lo toquen?", "Porque no tiene cuerpo", ["cuerpo","plano","espiritu"], "Kai existe en otro plano."]
  ],
  cap2: [
    ["¿Por qué las niñas desconfían de Dana?", "Porque es diferente", ["diferent","rara","sola","habla sola"], "Siempre iba sola y «hablaba sola»."],
    ["¿Por qué Kai no quiere que Dana desee ser bruja?", "Porque es peligroso", ["peligros"], "Desear el mal a los demás es peligroso."],
    ["¿Por qué la familia pasó de 12 a 9?", "Por la epidemia", ["epidemia","enfermedad"], "Murieron una hermana, un hermano y el abuelo."],
    ["¿Qué demuestra que el viejo es especial?", "Que llovió como dijo", ["llov","lluvia"], "Predijo la lluvia en un día sin nubes."],
    ["¿Por qué se asusta Dana cuando el viejo mira a Kai?", "Porque parece que lo ve", ["ve","kai"], "Hasta entonces nadie más podía verlo."]
  ],
  cap3: [
    ["¿Por qué cree Dana que la van a casar?", "Porque negocian con sus padres", ["negoci","padres","dinero"], "Era lo habitual cuando se pactaban matrimonios."],
    ["¿Por qué el Maestro deja que Kai vaya?", "Porque sabe que está allí", ["sabe","ve","kai"], "El Maestro siente dónde está Kai."],
    ["¿Qué le recuerda a Dana el nombre de la yegua?", "El amuleto de su madre", ["amuleto","madre","colgante"], "Lunaestrella: la luna y la estrella del amuleto."],
    ["¿Por qué la gente del pueblo desconfía del Maestro?", "Le tienen miedo a su magia", ["miedo","magia","mago"], "La gente sencilla teme lo que no comprende."],
    ["¿Por qué Dana se alegra al llegar a la Torre?", "No tiene que casarse", ["casar"], "Va a ser aprendiza, no esposa."]
  ],
  cap4: [
    ["¿Por qué la Torre parece menos laberíntica después?", "Los pisos se repiten", ["repit","igual","escalera"], "La escalera de caracol vertebra todos los pisos."],
    ["¿Por qué Maritta desconfía de la magia?", "Porque es enana", ["enana","enano"], "Los enanos solo creen en lo que pueden tocar."],
    ["¿Por qué estaba enfermo el árbol?", "Por una plaga de termitas", ["termita","plaga"], "Dana lo descubrió escuchándolo."],
    ["¿Por qué no debe salir de noche al bosque?", "Por los lobos", ["lobo"], "La noche es la hora de los lobos."],
    ["¿Por qué hay tantas camas vacías?", "Malos tiempos para la magia", ["malos tiempos","magia"], "Solo quedan dos aprendices."]
  ],
  cap5: [
    ["¿Por qué Dana evita a Kai?", "Está enamorada y tiene miedo", ["enamor","miedo"], "No puede tocar a quien quiere."],
    ["¿Por qué Maritta piensa en el elfo?", "No puede ver a Kai", ["no puede ver","kai"], "Para Maritta, Kai no existe."],
    ["¿Por qué Dana puede ver a través de la dama?", "Porque es una imagen", ["imagen","espiritu","fantasma"], "Solo es una imagen enviada desde lejos."],
    ["¿Por qué Dana sale chamuscada del estudio?", "No se concentra", ["concentr","dama","vision"], "Las visiones de la dama la distraen."],
    ["¿Por qué el Maestro podría descubrir el secreto?", "Lee los pensamientos", ["pensamiento","mente","mentalista"], "Es mentalista."]
  ],
  cap6: [
    ["¿Por qué Dana piensa en otra cosa al pedir el día libre?", "Para engañar al Maestro", ["engan","maestro","ocult"], "El Maestro lee la mente."],
    ["¿Por qué la gente del pueblo huye de Dana?", "Piensa que es bruja", ["bruja","torre"], "Temen a los habitantes de la Torre."],
    ["¿Por qué Nicolás cree que Dana está loca?", "Habla con un banco vacío", ["banco","nadie","sola"], "No podía ver a la anciana ciega."],
    ["¿Por qué el Maestro sonríe al ver a Dana hablando sola?", "Espera que busque al unicornio", ["unicornio","plan","busca"], "Él también quiere el secreto del unicornio."],
    ["Si Dana se pregunta si está loca, ¿está loca?", "No", ["no"], "Los locos no son conscientes de su locura."]
  ],
  cap7: [
    ["¿Por qué Dana pierde al unicornio?", "Por su imprudencia", ["imprudenc","corre","prisa"], "Corre sin pensar y deja atrás a sus amigos."],
    ["¿Por qué los hechizos no vencen a los lobos?", "Están hechizados", ["hechiz","maldic"], "Son lobos de una maldición."],
    ["¿Por qué el Maestro manda a Fenris?", "Porque los lobos no lo atacan", ["lobo","control"], "Fenris tiene poder sobre los lobos."],
    ["¿Qué demuestra que Kai es real?", "Salvó a Dana", ["salv","rescat"], "Un invento no podría rescatarla."],
    ["¿Por qué Fenris no vuelve a la Torre con Dana?", "Se va a transformar", ["transform","lobo","luna"], "Era noche de luna llena."]
  ],
  cap8: [
    ["¿Por qué el Maestro no castiga a Dana?", "Ya tiene bastante castigo", ["castigo","remordim","culpa"], "El susto y los remordimientos son el castigo."],
    ["¿Por qué Dana tiene lagunas en la memoria?", "Se la borraron", ["borr","maestro"], "Alguien no quería que recordara."],
    ["¿Por qué Kai no quiere volver al bosque?", "No vale la pena morir", ["morir","vida","peligr"], "Nada vale tanto como dar la vida."],
    ["¿Por qué está Fenris tan cansado?", "Por la noche de luna llena", ["luna","transform","lobo"], "La transformación le quitó las fuerzas."],
    ["¿Por qué Dana decide esperar?", "Quiere estar preparada", ["prepar","maga"], "Quiere ser maga antes de volver."]
  ],
  cap9: [
    ["¿Por qué Dana recuerda ahora lo que olvidó?", "El hechizo se pasó", ["hechizo","eterno","paso"], "Los hechizos no son eternos."],
    ["¿Por qué Kai no quiere que Fenris hable?", "No quiere que sepa que es un fantasma", ["fantasma","secreto"], "Le duele que Dana conozca su secreto."],
    ["¿Por qué el Maestro trajo a Dana a la Torre?", "Por ser Kin-Shannay", ["kin","shannay","poder","puerta"], "Sus poderes le eran útiles para su plan."],
    ["¿Por qué Fenris hace un círculo de purificación?", "Para retrasar la transformación", ["transform","retras","lobo"], "Retrasa los efectos de la luna llena."],
    ["¿Cómo deduce Dana que Kai es un fantasma?", "Habla con muertos como Aonia", ["aonia","muert","kin"], "Si ve a Aonia, que está muerta, también ve a Kai."]
  ],
  cap10: [
    ["¿Por qué los lobos obedecen a Fenris?", "Es un hombre lobo", ["hombre lobo","lobo","jefe","licantrop"], "Fenris se convierte en el jefe de la manada."],
    ["¿Por qué Kai dice que la vida es preciosa?", "La perdió muy joven", ["perd","muri","joven"], "Murió a los 16 por una imprudencia."],
    ["¿Por qué Kai pudo ir a la Torre?", "Se lo permitió el Maestro", ["maestro"], "Sin él, se habría quedado atado a la granja."],
    ["¿Por qué Dana se asusta con el plazo de Kai?", "Ya tiene 16 años", ["16","dieciseis"], "El tiempo de Kai se está acabando."],
    ["¿Por qué la trampilla no se abre a la primera?", "Es mágica", ["magic"], "Dana usa una runa de apertura."]
  ],
  cap11: [
    ["¿Cómo llegó el Maestro al templo?", "Usó a Fenris como espía", ["fenris","espia","sigui"], "Los siguió a través de Fenris."],
    ["¿Por qué Fenris obedece al Maestro?", "Para controlar su lado lobo", ["lobo","transform","protec"], "La Torre lo protege de las transformaciones."],
    ["¿Por qué Kai puede salir de la prisión?", "No tiene cuerpo", ["cuerpo","espiritu","material"], "No está sujeto a las leyes de la materia."],
    ["¿Por qué le cuesta a Kai coger el colgante?", "Pierde fuerzas", ["fuerza","plazo"], "Se acerca la hora de su partida."],
    ["¿Por qué Maritta resiste el hechizo?", "Los enanos son inmunes", ["inmun","voluntad","enan"], "Tienen una voluntad muy fuerte."]
  ],
  cap12: [
    ["¿Por qué Aonia maldijo al Maestro?", "Porque la traicionó", ["traic","mato"], "Un aprendiz jamás debe rebelarse contra su Maestro."],
    ["¿Por qué Aonia necesita el cuerpo de Maritta?", "Para luchar entre los vivos", ["luchar","cuerpo","vivos"], "Un espíritu necesita un cuerpo."],
    ["¿Por qué grita el Maestro al mirar en el pozo?", "Ve su alma oscura", ["alma"], "El pozo refleja el alma de quien mira."],
    ["¿Por qué Dana ve cosas bonitas en el pozo?", "Tiene un alma buena", ["alma","buena"], "El pozo muestra lo que hay dentro de cada uno."],
    ["¿Por qué va Dana a la Torre?", "Para salvar a Fenris", ["fenris"], "No quiere matar, pero sí ayudar a su amigo."]
  ],
  cap13: [
    ["¿Por qué Kai se queda en la cocina?", "El Maestro sentiría su presencia", ["sent","presenc"], "El Maestro puede notar dónde está Kai."],
    ["¿Por qué suben a pie sin hechizos?", "Para no ser descubiertas", ["descub","ocult","notar"], "Cualquier hechizo las delataría."],
    ["¿Por qué acepta Dana el trato?", "Para liberar a Kai", ["kai","liber"], "Kai habría hecho lo mismo por ella."],
    ["¿Por qué el Maestro quiere que Dana sea maga?", "Para tener más poder", ["poder","maga"], "Controlar a una maga es mejor que a una aprendiza."],
    ["¿Por qué el caballo de fuego no la ataca?", "Dana ya domina el fuego", ["domin","doblega","inmun"], "No había que destruir el fuego, sino doblegarlo."]
  ],
  cap14: [
    ["¿Por qué Aonia y Kai llevan a Dana a la muerte?", "Para salvarla del conjuro", ["salv","conjuro","maestro"], "Era la única forma de liberarla."],
    ["¿Por qué Dana vuelve a la vida?", "Kai se lo pide", ["kai","vive","vuelve"], "Todavía no había llegado su hora."],
    ["¿Por qué el Maestro no ve a Maritta?", "No mira hacia abajo", ["abajo","baja"], "Quien no mira nunca hacia abajo es hombre muerto."],
    ["¿Por qué los lobos alcanzan al Maestro?", "Se cumple la maldición", ["maldic"], "La maldición de Aonia lo perseguía."],
    ["¿Por qué Kai le pide a Dana que viva?", "Porque él no pudo", ["no pudo","muri","vida"], "Kai murió muy joven."]
  ],
  epilogo: [
    ["¿Por qué Dana besa el puñal?", "Era de Kai", ["kai"], "Era el cuchillo con el que Kai hirió al dragón."],
    ["¿Qué responde el puñal a la pregunta de Kai?", "Que mató al dragón", ["mat","dragon"], "Kai se preguntaba si había matado al dragón."],
    ["¿Por qué Fenris ya no sufre tanto con la luna?", "Aprendió a controlarse", ["control","domin","dana"], "Dana lo ayudó a controlar su lado lobo."],
    ["¿Por qué es especial la luna del final?", "Se parece al amuleto", ["amuleto","colgante"], "Luna y estrella, como el regalo de su madre."]
  ],
  repaso: [
    ["¿Qué tienen en común Kai, Aonia y la anciana ciega?", "Son espíritus", ["espiritu","fantasma","muert"], "Dana puede verlos porque es Kin-Shannay."],
    ["¿Qué tienen en común Fenris y Dana con el Maestro?", "Los dos los utilizó", ["utiliz","uso","engan"], "El Maestro usó a Fenris contra los lobos y a Dana para encontrar el pozo."],
    ["¿Por qué el título es El valle de los lobos?", "Por la maldición de los lobos", ["lobo","maldic","valle"], "Los lobos guardan el valle por la maldición de Aonia."],
    ["¿Quién cumple al final la maldición de Aonia?", "Los lobos", ["lobo"], "Alcanzan al Maestro, el aprendiz traidor."],
    ["¿Cómo cambia Dana desde el principio hasta el final?", "De niña sola a Señora de la Torre", ["senora","maga","torre","fuerte"], "Pasa de campesina rechazada a hechicera poderosa."]
  ]
});

addFrases("galego", {
  libro: ["El valle de los lobos es una novela de fantasía de Laura Gallego.", "Dana es una Kin-Shannay y puede ver a los espíritus.", "El Maestro es el Amo de la Torre y lee los pensamientos."],
  cap1: ["Dana nació en una noche de viento muy fuerte.", "A los seis años conoció a Kai, un niño rubio de ojos verdes.", "Nadie puede ver a Kai, solo Dana."],
  cap2: ["Las niñas la llamaron bruja y le tiraron piedras.", "Un viejo de túnica gris llegó al pozo en un caballo blanco.", "El viejo dijo que esa noche llovería, y llovió."],
  cap3: ["Su madre le dio un amuleto con una luna y una estrella.", "Dana llamó Lunaestrella a su yegua baya.", "La Torre es una Escuela de Alta Hechicería en el Valle de los Lobos."],
  cap4: ["En la biblioteca Dana conoció a Fenris, un elfo.", "Maritta es la enana cocinera de la Torre.", "Dana nunca debe estar en el bosque de noche."],
  cap5: ["Dana aprobó el Libro del Agua y llevó la túnica violeta.", "Una dama de túnica dorada le pidió que buscara al unicornio.", "Dana está enamorada de Kai pero no puede tocarlo."],
  cap6: ["Todos los magos buscan un unicornio por su cuerno.", "La dama le dio una pista: plenilunio.", "Los locos no son conscientes de su locura."],
  cap7: ["Con la luna llena Dana vio al unicornio bebiendo en un arroyo.", "Los lobos volvían a la vida después de los hechizos.", "Fenris salvó a Dana con unos espectros de perros."],
  cap8: ["Dana durmió cinco días después de la noche de los lobos.", "Si el unicornio es el guía, los lobos son los centinelas.", "Nada vale tanto como para dar la vida por ello."],
  cap9: ["Kai es una palabra élfica que significa compañero.", "Aonia era la antigua Señora de la Torre.", "Dana descubrió que Kai es un fantasma."],
  cap10: ["Fenris se convierte en lobo con la luna llena.", "Kai murió a los dieciséis años luchando contra un dragón.", "Bajo la cabaña había una trampilla que llevaba a un templo."],
  cap11: ["En el templo había un árbol de oro y un pozo.", "El Maestro los encerró en una prisión mágica.", "La Torre es el refugio de Fenris pero también su prisión."],
  cap12: ["El Maestro traicionó y mató a Aonia.", "La Puerta eres tú, le dijo Kai a Dana.", "En el Pozo de los Reflejos Dana vio su propia alma."],
  cap13: ["El Maestro atrapó a Kai en una botella verde.", "Dana aceptó el trato para liberar a Kai.", "En la Prueba del Fuego había que doblegar el fuego, no destruirlo."],
  cap14: ["Kai le pidió a Dana que volviera y viviera.", "Maritta le clavó un puñal al Maestro.", "Los lobos alcanzaron al Maestro y se cumplió la maldición."],
  epilogo: ["Dana es ahora la Señora de la Torre.", "Nicolás trajo los huesos de un dragón azul.", "Fenris aulló y los lobos le respondieron."],
  repaso: ["Dana es una Kin-Shannay que llega a ser Señora de la Torre.", "Kai es el espíritu de un chico que murió luchando contra un dragón.", "El Maestro traicionó a Aonia y los lobos cumplieron su maldición."]
});
