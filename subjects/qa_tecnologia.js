/* Banco de preguntas para ENTENDER (no solo memorizar) de Tecnología.
   Formato: [pregunta, respuesta corta, palabras clave válidas al escribir, por qué]
   Se usan en tests y minijuegos y cambian en cada partida. */
addQA("tecnologia", {
  intro: [
    ["Quieres un mueble para guardar tus zapatillas. ¿Qué tipo de problema es?", "Problema técnico", ["tecnic"], "Tiene varias soluciones posibles y se resuelve construyendo algo."],
    ["Calcular cuántas baldas caben en un armario, ¿qué tipo de problema es?", "Problema matemático", ["matematic"], "Tiene una única respuesta y se resuelve con papel y bolígrafo."],
    ["Dos compañeros resuelven el mismo problema técnico y construyen objetos distintos. ¿Alguno está mal?", "No, hay varias soluciones", ["no","varias"], "Los problemas técnicos tienen varias soluciones válidas."],
    ["Tienes buenas ideas pero no sabes usar la sierra. ¿Qué te falta para resolver el problema?", "Saber manejar herramientas", ["herramienta"], "Hacen falta conocimientos, herramientas y materiales a la vez."],
    ["Diseñas una caja de papel para guardar agua. ¿Qué has olvidado conocer?", "Los materiales", ["material"], "Hay que conocer qué materiales sirven para cada uso."],
    ["¿Por qué un problema técnico no se resuelve solo con papel y bolígrafo?", "Porque hay que construir algo", ["constru"], "La solución de un problema técnico es un objeto que hay que fabricar."],
    ["Sabes usar herramientas y tienes materiales, pero no sabes nada del tema. ¿Qué te falta?", "Conocimientos", ["conocimiento"], "Sin conocimientos sobre el tema no sabrás qué construir."]
  ],
  proceso: [
    ["Antes de construir nada, ¿por qué hay que definir bien el problema?", "Para saber qué necesidad resolver", ["necesidad","saber","problema"], "Si no sabes bien qué necesitas, puedes construir algo que no sirve."],
    ["El objeto terminado no funciona. ¿A qué fase hay que volver?", "Al diseño", ["diseno"], "En la evaluación, si hay errores, se revisan las fases anteriores desde el diseño."],
    ["Quieres saber cuánto dinero costará el proyecto. ¿En qué fase lo calculas?", "Planificación", ["planifica"], "En la planificación se hace el presupuesto, antes de construir."],
    ["Tienes tres ideas buenas y debes quedarte con una. ¿En qué fase estás?", "Diseño", ["diseno"], "En el diseño se proponen soluciones y se elige la mejor."],
    ["¿Por qué se planifica ANTES de construir?", "Para no improvisar ni malgastar", ["improvis","malgast","orden","materiales","tiempo"], "Planificar evita errores, retrasos y gastos al construir."],
    ["Quieres ver de un vistazo cuánto dura cada tarea del proyecto. ¿Qué usas?", "Diagrama de Gantt", ["gantt","gant"], "El Gantt muestra con barras la duración de cada tarea."],
    ["Un equipo construye primero y piensa después. ¿Qué método no está siguiendo?", "El proceso tecnológico", ["proceso"], "El proceso tecnológico es un método ordenado, no improvisado."],
    ["¿Qué tres cosas miras para elegir la mejor solución?", "Construcción, coste y sostenibilidad", ["coste","sostenib","constru"], "No basta con que guste: hay que poder fabricarla, que no sea cara y que cuide el planeta."],
    ["Al construir te cortas por no usar guantes. ¿Qué no has cumplido?", "Las normas de seguridad", ["seguridad"], "En la construcción siempre hay que cumplir las normas de seguridad del taller."],
    ["¿Dónde dejas por escrito todo lo que has hecho en el proyecto?", "En la memoria técnica", ["memoria"], "La memoria técnica recoge todo el proceso para que otros lo entiendan."],
    ["Los bocetos y el presupuesto se hacen antes de construir. ¿En qué parte de la memoria van?", "Anteproyecto", ["anteproyecto"], "El anteproyecto (documentos 1 a 7) se hace antes de construir."],
    ["Las conclusiones y propuestas de mejora, ¿antes o después de construir?", "Después", ["despues"], "Solo puedes sacar conclusiones cuando ya has construido y evaluado."]
  ],
  sost: [
    ["Una fábrica expulsa mucho humo. ¿Qué problema ambiental empeora?", "Efecto invernadero", ["invernadero"], "Los gases contaminantes calientan el planeta."],
    ["¿Por qué la energía solar es más limpia que el carbón?", "No expulsa gases al producirse", ["gas","humo","contamin"], "El sol no se quema: produce energía sin contaminar el aire."],
    ["Si cortamos muchos árboles para fabricar productos, ¿qué ocurre?", "Deforestación", ["deforesta"], "Destruir bosques es una consecuencia del desarrollo tecnológico."],
    ["¿Cómo ayuda el reciclaje a no agotar los recursos naturales?", "Se reutilizan los materiales", ["reutiliz","usar de nuevo","otra vez","material"], "Si reciclamos, no hace falta sacar tanta materia nueva de la naturaleza."],
    ["¿Por qué una bici eléctrica cuida más el planeta que un coche de gasolina?", "Contamina menos", ["contamina menos","menos"], "No quema combustible ni expulsa gases contaminantes."],
    ["¿La tecnología solo daña el medio ambiente?", "No, también ayuda a cuidarlo", ["no","ayuda"], "Crea soluciones como energías limpias o reciclaje."],
    ["Un sistema apaga las luces que nadie usa. ¿Qué tipo de solución es?", "Control del consumo energético", ["consumo","energ"], "Ahorrar energía también reduce el impacto ambiental."],
    ["Una energía que aprovecha restos de plantas es...", "Biomasa", ["biomasa"], "La biomasa usa restos orgánicos como fuente de energía."]
  ],
  obso: [
    ["Tu móvil funciona, pero los nuevos hacen muchas más cosas. ¿Qué obsolescencia es?", "Funcional", ["funcional"], "Sus prestaciones han quedado por detrás de los modelos nuevos."],
    ["Una impresora se estropea justo al acabar la garantía, como si estuviera preparada. ¿Qué obsolescencia es?", "Programada", ["programada"], "Se diseñó para durar un tiempo concreto."],
    ["Un reproductor de DVD funciona, pero ya nadie usa DVD. ¿Qué obsolescencia es?", "Tecnológica", ["tecnolog"], "Ya no cumple lo que necesita el mercado, aunque todavía funcione."],
    ["¿Por qué la obsolescencia programada perjudica al planeta?", "Genera más basura", ["basura","residu","desech","tirar"], "Obliga a tirar productos y comprar otros nuevos."],
    ["¿A quién beneficia la obsolescencia programada?", "A los fabricantes", ["fabricante","empresa","vender"], "Venden más productos porque la gente tiene que comprar otro."],
    ["Si un producto se podría hacer duradero, pero se hace para tirar, se fomenta un producto...", "Desechable", ["desechable"], "Es lo contrario de un producto duradero."],
    ["¿Qué puedes hacer tú contra la obsolescencia programada?", "Reparar en vez de tirar", ["repar","arreglar"], "Reparar alarga la vida de los productos y genera menos residuos."]
  ],
  analisis: [
    ["Mides el sacapuntas y cuentas sus piezas. ¿Qué análisis haces?", "Anatómico", ["anatomic"], "El anatómico estudia forma, medidas y piezas."],
    ["Te preguntas qué pasa si se afloja el tornillo. ¿Qué análisis es?", "Funcional", ["funcional"], "El funcional estudia cómo funciona y qué fallos puede tener."],
    ["Averiguas que la cuchilla es de acero y cómo se fabricó. ¿Qué análisis es?", "Técnico", ["tecnic"], "El técnico estudia materiales y fabricación."],
    ["Comparas el precio actual del sacapuntas con lo que se usaba antes. ¿Qué análisis es?", "Socio-económico", ["socio","economic"], "Estudia el problema que resuelve, su historia y su precio."],
    ["¿Por qué la cuchilla es de acero y no de aluminio?", "El acero es más duro y corta mejor", ["duro","corta","resist"], "La cuchilla necesita un material duro para cortar la madera del lápiz."],
    ["¿Para qué analizan las empresas los objetos que ya existen?", "Para mejorarlos", ["mejora"], "Casi todo está inventado: los nuevos objetos mejoran los anteriores."],
    ["Dibujas las piezas del objeto separadas y numeradas. ¿Cómo se llama ese dibujo?", "Despiece", ["despiece"], "El despiece forma parte del análisis anatómico."],
    ["¿Qué problema resuelve el sacapuntas?", "Sacar punta a los lápices", ["punta"], "Antes se hacía con una navaja, que era más peligroso."]
  ],
  proyecto: [
    ["¿Por qué es buena idea mirar productos parecidos antes de diseñar?", "Para coger ideas y mejorarlas", ["idea","mejor"], "Ver lo que ya existe ayuda a no empezar de cero."],
    ["En una tormenta de ideas, ¿se critican las ideas mientras se dicen?", "No, primero se apuntan todas", ["no"], "Primero se recogen muchas ideas; después se evalúan."],
    ["El equipo no se pone de acuerdo con el diseño. ¿Qué hacen?", "Una puesta en común", ["puesta en comun","comun","votar","hablar"], "Se evalúan juntos las propuestas y se elige la más adecuada."],
    ["Los mandos aparecen siempre tirados por el salón. ¿Qué necesidad hay?", "Mantenerlos ordenados", ["orden"], "Esa necesidad es el punto de partida del proyecto."],
    ["¿Por qué hay que plantear el problema de forma clara?", "Para saber qué condiciones debe cumplir", ["condicion","saber","claro"], "Si el problema está claro, sabes qué tiene que hacer la solución."],
    ["Busca información en webs, foros y vídeos. ¿De dónde la saca?", "De internet", ["internet"], "Internet es una de las fuentes de información del proyecto."]
  ]
});

/* Frases clave para el modo chapar (leer y escribirla entera) */
addFrases("tecnologia", {
  intro: [
    "Los problemas técnicos tienen varias soluciones y se resuelven construyendo algo.",
    "Los problemas matemáticos tienen una única solución.",
    "Para resolver un problema tecnológico hacen falta conocimientos, herramientas y materiales."
  ],
  proceso: [
    "El proceso tecnológico es un método ordenado para idear, diseñar y construir un producto.",
    "Las fases son planteamiento, diseño, planificación, construcción, evaluación y presentación.",
    "En el diseño se elige la mejor solución según construcción, coste y sostenibilidad.",
    "En la planificación se eligen materiales y herramientas y se hace el presupuesto.",
    "Si el objeto no funciona, se revisan las fases anteriores desde el diseño.",
    "La memoria técnica recoge todo lo que se hace durante el proceso."
  ],
  sost: [
    "La tecnología puede causar efecto invernadero, destruir la capa de ozono y contaminar el agua.",
    "Las energías solar, eólica y biomasa son más respetuosas con el medio ambiente.",
    "El reciclaje y los coches eléctricos ayudan a reducir el impacto ambiental."
  ],
  obso: [
    "La obsolescencia funcional ocurre cuando un producto tiene peores prestaciones que los nuevos.",
    "La obsolescencia tecnológica ocurre cuando un producto no cumple las nuevas necesidades del mercado.",
    "La obsolescencia programada diseña productos para durar un tiempo concreto."
  ],
  analisis: [
    "El análisis anatómico estudia la forma, las medidas y las piezas de un objeto.",
    "El análisis funcional estudia cómo funciona y qué fallos puede tener.",
    "El análisis técnico estudia los materiales y cómo se fabricó.",
    "El análisis socio-económico estudia el problema que resuelve, su historia y su precio."
  ],
  proyecto: [
    "Primero se plantea la necesidad de forma clara.",
    "Para buscar ideas se usan productos parecidos, internet y la tormenta de ideas.",
    "La puesta en común sirve para evaluar las propuestas y elegir la mejor."
  ]
});
