/* Asignatura: Tecnología
   - body: teoría (las palabras en <b> se pueden tapar/destapar)
   - quiz: test fácil (a = índice de la correcta)
   - hard: test difícil y jefe final (ok = palabras clave válidas)
   - games: 3 minijuegos por tema */
registerSubject({
  id:"tecnologia", name:"Tecnología", icon:"🔧", color:"var(--blue)", colorD:"var(--blue-d)",
  sections:[
  {
    id:"intro", title:"Introducción", icon:"💭", body:`
  <div class="card">
    <h3><span class="chip">1</span>Dos tipos de problemas</h3>
    <p>A lo largo de la vida resolvemos muchos problemas. Algunos, como los de matemáticas, tienen <b>una única solución</b> y solo hacen falta papel y bolígrafo.</p>
    <p>Pero hay otro tipo que tiene <b>varias soluciones posibles</b> y se resuelve <b>construyendo algo</b>: son los <b>problemas técnicos</b>, y son los que se resuelven en Tecnología.</p>
  </div>
  <div class="card">
    <h3><span class="chip">2</span>Qué necesitamos para resolverlos</h3>
    <p>Para resolver un problema tecnológico hacen falta varias cosas a la vez:</p>
    <ul>
      <li><b>Conocimientos</b> sobre el tema.</li>
      <li>Saber manejar <b>herramientas</b>.</li>
      <li>Conocer los <b>materiales</b> disponibles.</li>
    </ul>
  </div>`,
    quiz:[
      {q:"¿Cómo se llaman los problemas que tienen varias soluciones posibles y se resuelven construyendo algo?", opts:["Problemas matemáticos","Problemas técnicos","Problemas imposibles","Problemas teóricos"], a:1, fb:"Los problemas técnicos se resuelven en Tecnología, construyendo un objeto."},
      {q:"Un problema de matemáticas normalmente tiene...", opts:["Varias soluciones distintas","Una única solución","Ninguna solución posible","Soluciones construidas"], a:1, fb:"Tienen una solución única; basta con papel y bolígrafo."},
      {q:"¿Qué tres cosas hacen falta para resolver un problema tecnológico?", opts:["Dinero, mucho tiempo y bastante suerte","Conocimientos, herramientas y materiales","Ordenadores, impresoras y mucha paciencia","Imaginación, pegamento y muchos colores"], a:1, fb:"Conocimientos, saber manejar herramientas y conocer los materiales."}
    ],
    hard:[
      {q:"¿Cómo se llaman los problemas que tienen varias soluciones y se resuelven construyendo algo?", ans:"Problemas técnicos", ok:["tecnic","tecnolog"]},
      {q:"Nombra las tres cosas que hacen falta para resolver un problema tecnológico.", ans:"Conocimientos, herramientas y materiales", ok:[["conocimiento"],["herramienta"],["material"]]},
      {q:"¿Cuántas soluciones tiene normalmente un problema de matemáticas?", ans:"Una única solución", ok:["una","1","unica"]}
    ],
    games:[
      {type:"pick", title:"¿Qué necesito?", prompt:"Toca solo lo que hace falta para resolver un problema tecnológico", items:[["Conocimientos",true],["Herramientas",true],["Materiales",true],["Suerte",false],["Un mago",false],["Copiar",false],["Dormir",false],["Papel de regalo",false]]},
      {type:"classify", title:"¿Mates o Tecno?", bins:["🧮 Problema matemático","🔧 Problema técnico"], items:[["Tiene una única solución",0],["Tiene varias soluciones",1],["Basta con papel y bolígrafo",0],["Se resuelve construyendo algo",1],["Calcular 25 × 4",0],["Diseñar una estantería",1],["Hacer un puente con palillos",1],["Resolver una ecuación",0]]},
      {type:"hangman", title:"Palabra oculta", words:[["Tecnico","Problema con varias soluciones posibles que se resuelve construyendo algo"],["Matematico","Problema con una única solución que se resuelve con papel y bolígrafo"],["Tecnologia","Asignatura en la que se resuelven problemas técnicos construyendo objetos"]]}
    ]
  },
  {
    id:"proceso", title:"El proceso tecnológico", icon:"⚙️", body:`
  <div class="card">
    <h3><span class="chip">1</span>¿Qué es?</h3>
    <p>Al aplicar la tecnología no se actúa de forma improvisada: se sigue un método de trabajo ordenado llamado <b>proceso tecnológico</b> (o método de proyectos).</p>
    <p>El <b>proceso tecnológico</b> es el conjunto de operaciones necesarias para <b>idear, diseñar y construir</b> de forma ordenada, lógica y funcional un producto tecnológico que resuelva un problema o satisfaga una necesidad.</p>
    <p>Se usa tanto para objetos pequeños como para grandes construcciones.</p>
  </div>
  <div class="card">
    <h3><span class="chip">2</span>Las 6 fases</h3>
    <div class="phase-flow">
      <div class="phase-row"><div class="n">1</div><div class="body"><strong>Planteamiento del problema</strong><span>Se define claramente la necesidad, y a continuación se hace una búsqueda de información (productos parecidos, internet, brainstorming con compañeros).</span></div></div>
      <div class="phase-row"><div class="n">2</div><div class="body"><strong>Diseño: propuesta y elección de la solución</strong><span>Se proponen varias soluciones posibles y se elige la mejor según cómo se construye, el coste y la sostenibilidad.</span></div></div>
      <div class="phase-row"><div class="n">3</div><div class="body"><strong>Planificación (hoja de procesos)</strong><span>Se eligen materiales, herramientas y procesos de fabricación; se hacen planos y diagramas (como el de Gantt) y se elabora el presupuesto, comparando costes con los beneficios esperados.</span></div></div>
      <div class="phase-row"><div class="n">4</div><div class="body"><strong>Construcción</strong><span>Se fabrican las piezas según lo planificado y se montan, cumpliendo siempre las normas de seguridad y salud del taller.</span></div></div>
      <div class="phase-row"><div class="n">5</div><div class="body"><strong>Evaluación</strong><span>Se comprueba si el objeto resuelve el problema inicial. Si no, se revisan las fases anteriores (desde el diseño) para corregir errores: defectos de diseño, materiales inadecuados, piezas mal ensambladas o problemas en los circuitos.</span></div></div>
      <div class="phase-row"><div class="n">6</div><div class="body"><strong>Presentación, difusión y comercialización</strong><span>Se presenta el objeto terminado mostrando su funcionalidad, con creatividad e innovación, y se comercializa según el tipo de producto (hoy en día, aprovechando el e-commerce).</span></div></div>
    </div>
  </div>
  <div class="card example">
    <h3><span class="chip">★</span>Documentación: la memoria técnica</h3>
    <p>Todo lo que se estudia y concluye durante el proceso se recoge en un documento llamado <b>memoria técnica</b>, que incluye:</p>
    <ul>
      <li><b>Anteproyecto</b> (documentos 1 a 7): descripción del producto, bocetos, planos, listado de materiales y herramientas, esquemas eléctricos, hoja de procesos/Gantt y hoja de presupuestos.</li>
      <li><b>Documentos posteriores a la construcción</b> (8 a 12): diseño final y funcionamiento, pliego de condiciones, hoja de evaluación, conclusiones y propuestas de mejora.</li>
    </ul>
  </div>`,
    quiz:[
      {q:"¿Qué es el proceso tecnológico?", opts:["Una herramienta para cortar madera en el taller","Método ordenado para idear, diseñar y construir","Un examen final que se hace en Tecnología","La fase en la que se fabrican las piezas"], a:1, fb:"Es el método de trabajo ordenado para resolver un problema técnico."},
      {q:"¿En qué fase se eligen los materiales, se hace la hoja de procesos y se calcula el presupuesto?", opts:["1ª Fase: Planteamiento del problema","2ª Fase: Diseño","3ª Fase: Planificación","5ª Fase: Evaluación"], a:2, fb:"La planificación incluye materiales, herramientas, diagramas y presupuesto."},
      {q:"En la evaluación se descubre que el objeto no funciona bien. ¿Qué se hace?", opts:["Se abandona el proyecto y se empieza otro","Se revisan las fases anteriores y se corrige","Se vende igualmente y se espera que funcione","Se pasa directamente a la comercialización"], a:1, fb:"Se revisan las fases anteriores desde el diseño y se corrige."},
      {q:"¿Cuáles son los tres criterios para elegir la mejor solución en el diseño?", opts:["Color, tamaño y peso del objeto","Cómo se construye, coste y sostenibilidad","Lo que esté de moda y la marca","La rapidez de fabricación, la belleza y la moda"], a:1, fb:"Cómo se construye, el coste y la sostenibilidad."},
      {q:"¿Qué documentos forman el 'anteproyecto' de la memoria técnica?", opts:["Solo las conclusiones y las propuestas de mejora","Los documentos 1 al 7, antes de construir","Los documentos 8 al 12, tras construir","Solo la hoja de presupuestos final"], a:1, fb:"El anteproyecto son los documentos 1 a 7, antes de construir."},
      {q:"¿Qué documento planifica el tiempo de cada tarea con barras?", opts:["Pliego de condiciones","Diagrama de Gantt","Memoria técnica","Hoja de evaluación"], a:1, fb:"El diagrama de Gantt muestra la duración de cada tarea."}
    ],
    hard:[
      {q:"¿Cómo se llama el método ordenado para idear, diseñar y construir un producto?", ans:"Proceso tecnológico (o método de proyectos)", ok:["proceso tecnolog","metodo de proyecto"]},
      {q:"¿Cuál es la 1ª fase del proceso tecnológico?", ans:"Planteamiento del problema", ok:["planteamiento","plantear"]},
      {q:"¿En qué fase se eligen materiales y herramientas y se hace el presupuesto?", ans:"Planificación", ok:["planifica"]},
      {q:"¿En qué fase se comprueba si el objeto resuelve el problema?", ans:"Evaluación", ok:["evalua"]},
      {q:"¿Cuál es la última fase del proceso tecnológico?", ans:"Presentación, difusión y comercialización", ok:["presenta","difusi","comercializ"]},
      {q:"¿Qué diagrama organiza el tiempo de cada tarea con barras?", ans:"Diagrama de Gantt", ok:["gantt","gant"]},
      {q:"¿Cómo se llama el documento que recoge todo lo estudiado durante el proceso?", ans:"Memoria técnica", ok:["memoria"]}
    ],
    games:[
      {type:"order", title:"Ordena las 6 fases", prompt:"Toca las fases en orden, de la primera a la última", items:["Planteamiento del problema","Diseño","Planificación","Construcción","Evaluación","Presentación y comercialización"]},
      {type:"match", title:"¿Qué se hace en cada fase?", pairs:[["Planteamiento","Definir la necesidad y buscar información"],["Diseño","Proponer soluciones y elegir la mejor"],["Planificación","Materiales, Gantt y presupuesto"],["Construcción","Fabricar y montar las piezas"],["Evaluación","Comprobar si resuelve el problema"],["Presentación","Mostrarlo y comercializarlo"]]},
      {type:"classify", title:"La memoria técnica", prompt:"¿Antes o después de construir?", bins:["📝 Anteproyecto (1-7)","🏁 Después (8-12)"], items:[["Bocetos",0],["Planos",0],["Hoja de presupuestos",0],["Diagrama de Gantt",0],["Listado de materiales",0],["Esquemas eléctricos",0],["Pliego de condiciones",1],["Hoja de evaluación",1],["Conclusiones",1],["Propuestas de mejora",1]]}
    ]
  },
  {
    id:"sost", title:"Tecnología y sostenibilidad", icon:"🌱", body:`
  <div class="card">
    <h3><span class="chip">1</span>El problema</h3>
    <p>El desarrollo tecnológico ha cambiado la sociedad, pero en ocasiones esta desconoce sus consecuencias sobre el medio ambiente. Entre esas consecuencias están:</p>
    <ul>
      <li>Contribución al <b>efecto invernadero</b>.</li>
      <li>Destrucción de la <b>capa de ozono</b>.</li>
      <li>Contaminación del <b>agua</b>.</li>
      <li>Agotamiento de recursos naturales y <b>deforestación</b> de los bosques.</li>
    </ul>
  </div>
  <div class="card">
    <h3><span class="chip">2</span>La tecnología también ayuda</h3>
    <p>Por otro lado, los avances tecnológicos mejoran el bienestar de las personas y permiten reducir ese impacto, por ejemplo con:</p>
    <ul>
      <li>Mejora de los <b>procesos de reciclaje</b> de residuos.</li>
      <li>Energías más limpias: <b>biomasa, solar o eólica</b>.</li>
      <li>Transporte más respetuoso: <b>coches y bicicletas eléctricos</b>.</li>
      <li>Sistemas que eliminan <b>desechos químicos</b> respetando el medioambiente.</li>
      <li>Sistemas de <b>control del consumo energético</b>.</li>
    </ul>
  </div>`,
    quiz:[
      {q:"¿Cuál de estas NO es una consecuencia negativa del desarrollo tecnológico?", opts:["Efecto invernadero","Destrucción de la capa de ozono","Mejora del reciclaje","Contaminación del agua"], a:2, fb:"Mejorar el reciclaje es un beneficio, no un problema."},
      {q:"¿Qué energías se citan como más respetuosas?", opts:["Carbón, petróleo y gasolina","Biomasa, solar y eólica","Nuclear y gas natural","Gasolina y gasóleo"], a:1, fb:"Biomasa, solar y eólica."},
      {q:"Los coches y bicicletas eléctricos ayudan al medioambiente...", opts:["Porque son más baratos que cualquier otro","Porque contaminan menos que otros transportes","Porque van muchísimo más rápido por la autopista","Porque nunca necesitan ningún mantenimiento"], a:1, fb:"Reducen el uso de transportes que contaminan más."}
    ],
    hard:[
      {q:"Escribe dos consecuencias negativas de la tecnología en el medio ambiente.", ans:"Efecto invernadero, capa de ozono, contaminación del agua, deforestación…", ok:["invernadero","ozono","contamina","deforesta","agotamiento"]},
      {q:"Nombra una energía limpia que aparezca en el tema.", ans:"Biomasa, solar o eólica", ok:["biomasa","solar","eolica"]},
      {q:"Escribe un medio de transporte respetuoso con el medio ambiente.", ans:"Coches o bicicletas eléctricos", ok:["electric"]}
    ],
    games:[
      {type:"classify", title:"¿Problema o solución?", bins:["😟 Problema ambiental","🌱 Solución tecnológica"], items:[["Efecto invernadero",0],["Capa de ozono destruida",0],["Agua contaminada",0],["Deforestación",0],["Agotar recursos naturales",0],["Mejorar el reciclaje",1],["Energía solar",1],["Energía eólica",1],["Biomasa",1],["Bici eléctrica",1],["Controlar el consumo de energía",1]]},
      {type:"pick", title:"Caza las energías limpias", prompt:"Toca solo las energías limpias del tema", items:[["Solar",true],["Eólica",true],["Biomasa",true],["Carbón",false],["Petróleo",false],["Gasolina",false],["Gasóleo",false]]},
      {type:"tf", title:"Verdadero o falso", items:[["La tecnología solo tiene efectos negativos en el medio ambiente",false,"También ayuda a reducir el impacto"],["La deforestación es una consecuencia del desarrollo tecnológico",true],["Los coches eléctricos son un transporte más respetuoso",true],["La biomasa es una energía limpia",true],["Mejorar el reciclaje es una consecuencia negativa",false,"Es una solución"],["La sociedad siempre conoce las consecuencias de la tecnología",false,"A veces las desconoce"],["Hay sistemas que controlan el consumo de energía",true]]}
    ]
  },
  {
    id:"obso", title:"La obsolescencia", icon:"📱", body:`
  <div class="card">
    <h3><span class="chip">1</span>Obsolescencia funcional</h3>
    <p>Ocurre cuando los productos ven mermadas sus prestaciones en comparación con los nuevos que salen al mercado. Ejemplo: los teléfonos móviles, que van quedando por detrás de los modelos nuevos.</p>
  </div>
  <div class="card">
    <h3><span class="chip">2</span>Obsolescencia tecnológica</h3>
    <p>Se da cuando una máquina o producto queda anticuado por <b>no cumplir las nuevas necesidades del mercado</b>, aunque no haya llegado al final de su vida útil.</p>
  </div>
  <div class="card">
    <h3><span class="chip">3</span>Obsolescencia programada</h3>
    <p>Los productos se diseñan para una <b>duración concreta</b> y quedan inservibles al completarse ese período.</p>
    <p>El problema surge cuando se diseñan con la intención de precipitar esa obsolescencia de forma forzada, para obligar a consumir nuevos modelos: aunque técnicamente se podrían fabricar productos duraderos, se fomenta el diseño de productos desechables.</p>
  </div>`,
    quiz:[
      {q:"Un móvil que funciona pero tiene peores prestaciones que los nuevos es un ejemplo de...", opts:["Obsolescencia programada","Obsolescencia funcional","Obsolescencia tecnológica","Ninguna obsolescencia"], a:1, fb:"Funcional: prestaciones mermadas frente a los nuevos."},
      {q:"Un producto queda anticuado por no cumplir las nuevas necesidades del mercado, aunque no ha acabado su vida útil:", opts:["Obsolescencia tecnológica","Obsolescencia programada","Obsolescencia funcional","Sostenibilidad del producto"], a:0, fb:"Es la obsolescencia tecnológica."},
      {q:"¿Qué caracteriza a la obsolescencia programada?", opts:["Que el producto dura para siempre sin romperse","Que se diseña para durar un tiempo concreto","Que solo les ocurre a los coches antiguos","Que ayuda a cuidar mucho el medioambiente"], a:1, fb:"Se diseña con una vida útil concreta."},
      {q:"¿Por qué es un problema forzar la obsolescencia?", opts:["Porque hace que los productos sean muy baratos","Porque se fomentan productos de usar y tirar","Porque hace los productos mucho más seguros","No es ningún problema para nadie"], a:1, fb:"Se fomentan productos desechables aunque podrían durar más."}
    ],
    hard:[
      {q:"Obsolescencia en la que el producto se diseña para durar un tiempo concreto:", ans:"Obsolescencia programada", ok:["programada"]},
      {q:"Obsolescencia en la que un móvil tiene peores prestaciones que los nuevos:", ans:"Obsolescencia funcional", ok:["funcional"]},
      {q:"Obsolescencia en la que el producto no cumple las nuevas necesidades del mercado:", ans:"Obsolescencia tecnológica", ok:["tecnolog"]}
    ],
    games:[
      {type:"classify", title:"¿Qué obsolescencia es?", bins:["Funcional","Tecnológica","Programada"], items:[["Mi móvil va peor que los nuevos",0],["Lento comparado con los modelos nuevos",0],["Ya no sirve para lo que pide el mercado",1],["Anticuado aunque aún funciona",1],["Diseñado para durar un tiempo concreto",2],["Se estropea justo al acabar su plazo",2],["Obliga a comprar modelos nuevos",2]]},
      {type:"match", title:"Une los conceptos", pairs:[["Programada","Duración decidida al diseñarlo"],["Funcional","Peores prestaciones que los nuevos"],["Tecnológica","No cumple lo que pide el mercado"],["Desechable","De usar y tirar"],["Duradero","Se podría fabricar, pero no se fomenta"]]},
      {type:"hangman", title:"Palabra oculta", words:[["Programada","Obsolescencia con fecha de caducidad"],["Funcional","Pierde prestaciones frente a los nuevos"],["Tecnologica","No cumple las necesidades del mercado"],["Desechable","Producto de usar y tirar"]]}
    ]
  },
  {
    id:"analisis", title:"Análisis de objetos", icon:"🔎", body:`
  <div class="card">
    <h3><span class="chip">1</span>¿Para qué sirve analizar un objeto?</h3>
    <p>Estamos rodeados de objetos que «alguien» ha inventado para facilitarnos la vida. Hoy se suele decir que «todo está inventado», así que cualquier objeto nuevo suele basarse en otro que ya existe, al que se le añaden mejoras.</p>
    <p><b>Ejemplo:</b> los nuevos móviles no reinventan el teléfono, ofrecen mejoras respecto a los modelos anteriores manteniendo la funcionalidad original. Los fabricantes se fijan en los modelos del mercado y los analizan para encontrar posibles mejoras.</p>
    <p>Analizar un objeto tecnológico consiste en fijarse en su forma, los materiales de los que está hecho, su funcionamiento, las piezas que lo componen, etc. Antes hace falta saber de: análisis de objetos, diseño de objetos, dibujo técnico, materiales de construcción, manejo de herramientas y funcionamiento de máquinas.</p>
  </div>
  <div class="card">
    <h3><span class="chip">2</span>Los 4 tipos de análisis</h3>
    <div class="analysis-grid">
      <div class="analysis-card"><div class="k">1. Anatómico</div><div class="q">¿Qué forma y dimensiones tiene? ¿Cuántas piezas lo componen? Se dibuja el objeto con medidas y sus piezas separadas (despiece), numeradas y con nombre.</div></div>
      <div class="analysis-card"><div class="k">2. Funcional</div><div class="q">¿Cómo funciona? ¿Para qué sirve cada pieza? ¿Qué fallos puede tener? ¿Qué accidentes puede causar un mal uso?</div></div>
      <div class="analysis-card"><div class="k">3. Técnico</div><div class="q">¿De qué materiales está hecho? ¿Cómo crees que se ha fabricado?</div></div>
      <div class="analysis-card"><div class="k">4. Socio-económico</div><div class="q">¿Qué problema resuelve? ¿Cómo era esta herramienta hace años? ¿Qué precio puede tener en el mercado?</div></div>
    </div>
  </div>
  <div class="card example">
    <h3><span class="chip">★</span>Ejemplo real: el sacapuntas</h3>
    <p><b>Anatómico:</b> forma de cuña, 24 mm de largo, 9 mm de alto y 14 mm de ancho; 3 piezas: cuerpo, tornillo y cuchilla.</p>
    <p><b>Funcional:</b> se introduce la punta del lápiz por el agujero y se gira para ir cortando con la cuchilla; puede aflojarse el tornillo, atrancarse un trozo de punta o perder el filo.</p>
    <p><b>Técnico:</b> el cuerpo es de aluminio, la cuchilla y el tornillo de acero; se fabrica fundiendo el metal y dándole forma en un molde.</p>
    <p><b>Socio-económico:</b> permite sacar punta a los lápices; antiguamente se usaba una navaja; hoy cuesta alrededor de 1,50 €.</p>
  </div>`,
    quiz:[
      {q:"¿Qué análisis responde a '¿qué forma y dimensiones tiene?'", opts:["Análisis funcional","Análisis anatómico","Análisis técnico","Análisis socio-económico"], a:1, fb:"El anatómico estudia forma, medidas y piezas."},
      {q:"'¿De qué materiales está hecho y cómo se fabricó?' es el análisis...", opts:["Anatómico","Funcional","Técnico","Socio-económico"], a:2, fb:"El técnico: materiales y fabricación."},
      {q:"¿Qué pregunta pertenece al análisis funcional?", opts:["¿Qué precio puede tener en el mercado?","¿Qué fallos puede tener al usarlo?","¿Cuántas piezas lo componen en total?","¿De qué materiales está fabricado?"], a:1, fb:"El funcional estudia cómo funciona y sus fallos."},
      {q:"En el ejemplo del sacapuntas, ¿de qué está hecho el cuerpo?", opts:["Acero","Plástico","Aluminio","Madera"], a:2, fb:"Cuerpo de aluminio; cuchilla y tornillo de acero."},
      {q:"¿Qué análisis pregunta cómo era una herramienta hace años o qué problema resuelve?", opts:["Análisis anatómico del objeto","Análisis técnico","Análisis funcional de piezas","Análisis socio-económico"], a:3, fb:"El socio-económico: problema, historia y precio."}
    ],
    hard:[
      {q:"¿Qué análisis estudia la forma, las medidas y las piezas de un objeto?", ans:"Análisis anatómico", ok:["anatomic"]},
      {q:"¿Qué análisis estudia cómo funciona un objeto y sus posibles fallos?", ans:"Análisis funcional", ok:["funcional"]},
      {q:"¿Qué análisis estudia los materiales y cómo se fabricó?", ans:"Análisis técnico", ok:["tecnic"]},
      {q:"¿Qué análisis estudia el precio y la historia de un objeto?", ans:"Análisis socio-económico", ok:["socio","economic"]},
      {q:"¿De qué material es el cuerpo del sacapuntas del ejemplo?", ans:"Aluminio", ok:["aluminio"]}
    ],
    games:[
      {type:"classify", title:"¿Qué análisis es?", bins:["Anatómico","Funcional","Técnico","Socio-económico"], items:[["¿Qué forma tiene?",0],["¿Cuántas piezas tiene?",0],["Dibujar el despiece",0],["¿Cómo funciona?",1],["¿Qué fallos puede tener?",1],["¿Para qué sirve cada pieza?",1],["¿De qué material es?",2],["¿Cómo se fabricó?",2],["¿Qué precio tiene?",3],["¿Qué problema resuelve?",3],["¿Cómo era hace años?",3]]},
      {type:"memory", title:"Memoria del sacapuntas", pairs:[["Cuerpo","Aluminio"],["Cuchilla","Corta la punta"],["Antes se usaba","Una navaja"],["Precio","1,50 €"],["Forma","De cuña"],["Nº de piezas","3"]]},
      {type:"pick", title:"Piezas del sacapuntas", prompt:"Toca las 3 piezas del sacapuntas", items:[["Cuerpo",true],["Tornillo",true],["Cuchilla",true],["Muelle",false],["Pila",false],["Mango",false],["Tapa",false],["Goma",false]]}
    ]
  },
  {
    id:"proyecto", title:"Proyecto de ejemplo", icon:"🎮", body:`
  <div class="card">
    <h3><span class="chip">1</span>Planteamiento del problema</h3>
    <p>La necesidad se debe plantear de forma clara, igual que las condiciones que debe cumplir la solución.</p>
    <p><b>Ejemplo:</b> «Necesitamos diseñar un soporte para mantener ordenados los mandos de la videoconsola» (porque normalmente aparecen tirados y desordenados).</p>
  </div>
  <div class="card">
    <h3><span class="chip">2</span>Búsqueda de información</h3>
    <p>Para encontrar ideas se pueden usar varias fuentes:</p>
    <ul>
      <li>Productos que ya solucionen necesidades similares.</li>
      <li>Internet: páginas web, foros o vídeos sobre el tema.</li>
      <li>Tormenta de ideas (brainstorming) con los compañeros.</li>
    </ul>
  </div>
  <div class="card">
    <h3><span class="chip">3</span>Elección de la solución y diseño</h3>
    <p>La puesta en común entre los miembros del equipo permite evaluar cada propuesta y llegar a la elección de la solución más adecuada, igual que vimos en el tema del proceso tecnológico: valorando cómo se construye, el coste y la sostenibilidad.</p>
  </div>`,
    quiz:[
      {q:"En el proyecto de ejemplo, ¿cuál es el problema?", opts:["Los mandos se quedan sin pilas cada semana","Tener ordenados los mandos de la consola","El mando no enciende la videoconsola","Falta espacio para jugar en el salón"], a:1, fb:"Diseñar un soporte para ordenar los mandos."},
      {q:"¿Cuál NO es una fuente de información del proyecto?", opts:["Productos que resuelven algo parecido","Internet: webs, foros y vídeos","Tormenta de ideas con los compañeros","Adivinarlo sin buscar nada"], a:3, fb:"Fuentes: productos similares, internet y tormenta de ideas."},
      {q:"¿Para qué sirve la puesta en común del equipo?", opts:["Para repartir las tareas de limpieza","Para evaluar las propuestas y elegir una","Para decidir quién dibuja los planos","Para ir todos juntos a comprar los materiales"], a:1, fb:"Para evaluar las propuestas y elegir la más adecuada."}
    ],
    hard:[
      {q:"¿Cómo se llama la técnica de juntar ideas en grupo?", ans:"Tormenta de ideas (brainstorming)", ok:["tormenta","brainstorm","lluvia de ideas"]},
      {q:"En el proyecto de ejemplo, ¿qué había que diseñar?", ans:"Un soporte para los mandos de la videoconsola", ok:[["soporte"],["mando"]]},
      {q:"Escribe una fuente para buscar información en un proyecto.", ans:"Productos parecidos, internet (webs, foros, vídeos) o tormenta de ideas", ok:["producto","internet","web","foro","video","tormenta","brainstorm"]}
    ],
    games:[
      {type:"order", title:"Ordena el proyecto", prompt:"Ordena los pasos del soporte de mandos", items:["Plantear la necesidad","Buscar información","Proponer ideas en equipo","Elegir la mejor solución","Planificar materiales y presupuesto","Construir el soporte","Evaluar si funciona"]},
      {type:"pick", title:"Fuentes de información", prompt:"Toca las fuentes de información válidas", items:[["Productos parecidos",true],["Internet",true],["Foros",true],["Vídeos",true],["Tormenta de ideas",true],["Adivinarlo",false],["Horóscopo",false],["Tirar una moneda",false]]},
      {type:"tf", title:"Verdadero o falso", items:[["El problema era ordenar los mandos de la videoconsola",true],["La necesidad se plantea de forma clara",true],["La solución la elige una persona sin hablar con nadie",false,"Se hace una puesta en común"],["Brainstorming significa tormenta de ideas",true],["Para elegir solo importa el color",false,"Importan construcción, coste y sostenibilidad"],["Buscar en foros es una fuente válida",true]]}
    ]
  }
  ]
});
