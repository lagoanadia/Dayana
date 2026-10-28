# Instrucciones para seguir con el proyecto

Eres el desarrollador que continúa «Estudiar Jugando» (day-study.vercel.app), una web app de estudio gamificada para Dayana, una niña de 11 años (1º ESO, Galicia). Quien te escribe es Nadia, su hermana. Háblale en castellano, con frases cortas y claras.

## Regla principal
NO cambies nada de lo que ya existe (diseño, estructura, motor, datos, textos, nombres de archivos o ids) salvo que Nadia lo pida expresamente. Añade, no reescribas. Si algo te parece mejorable, propónlo y espera su respuesta.

## Repositorio y despliegue
- GitHub: lagoanadia/Dayana. Trabaja SIEMPRE en la rama `claude/gifted-carson-bjid2i`; es la única rama y la que publica Vercel en producción.
- Antes de tocar nada: `git fetch origin` y `git pull`. Nadia sube archivos desde la web de GitHub.
- Haz commit y push al terminar cada cambio. Vercel despliega solo.
- En cada cambio, sube +1 la `VERSION` de `sw.js` para que la app instalada (PWA) se actualice. Cada archivo nuevo de `subjects/` o `js/` va también en la lista `FILES` de `sw.js` y con su `<script>` en `index.html`.
- No crees pull requests salvo que te lo pidan.

## Tecnología
HTML, CSS y JavaScript sin frameworks ni build. Funciones serverless de Vercel en `api/` (CommonJS, sin dependencias).
- `index.html`: carga en este orden engine → asignaturas → qa → minerais_fotos → config → cloud → assistant.
- `css/game.css`: estilo cálido tipo app infantil (crema, amarillo, naranja, azul), fuentes Lilita One y Nunito, botones con sombra 3D.
- `js/engine.js`: todo el motor (router por hash, jugadora, XP y 15 niveles, logros, mapa, teoría, tests, minijuegos, arcade, jefe final, modo chapar). Mascota: blob amarillo con gafas, `mascot(mood)`.
- `js/cloud.js` + `api/auth/{login,callback,logout}.js` + `api/progress.js` + `api/_lib/util.js`: login con Google mediante OAuth code flow con redirección a `/callback` (reescrito en `vercel.json`). Solo pide openid/email/profile. El progreso se guarda en Upstash Redis.
- `js/assistant.js` + `api/ask.js`: «Pío 🐥», chat abierto con IA (Groq). Elige solo un modelo activo de Groq (no fijes uno). Se oculta en tests, jefe final y caja de fallos. Límite de 80 preguntas al día por red.
- `js/config.js`: ID de cliente de Google (público).
- Variables de Vercel (ya configuradas; nunca pongas secretos en el código): GOOGLE_CLIENT_SECRET, KV_REST_API_URL, KV_REST_API_TOKEN, GROQ_API_KEY. Opcional: GROQ_MODEL.

## Asignaturas (`subjects/`)
- `tecnologia.js` (castellano, 6 temas) + `qa_tecnologia.js`
- `bioloxia.js` (en GALLEGO, como sus apuntes; 10 temas) + `qa_bioloxia.js` + `minerais_fotos.js` (28 minerales y rocas con fotos en `img/minerais/<id>-N.jpg`, sacadas del PDF «VISU minerais e rochas.pdf»; galería en el tema «rochas» y juegos specimen, photosort y memory de fotos)
- `ingles.js` (explicaciones en castellano y ejemplos en inglés; 8 temas, con el juego del reloj)
- `frances.js` (explicaciones en castellano y ejemplos en francés; 10 temas)

Formato de cada tema dentro de `registerSubject({...sections:[...]})`:
- `id`, `title`, `icon`.
- `body`: HTML de tarjetas `<div class="card">` con `<h3><span class="chip">N</span>Título</h3>`. Lo que va en `<b>` se puede tapar y destapar. Las tarjetas `.card.gallery` no entran en el modo chapar.
- `quiz`: test fácil, `[{q, opts, a, fb}]`. La respuesta correcta NO debe ser siempre la opción más larga.
- `hard`: test difícil y jefe final, `[{q, ans, ok}]`. `ok` es una lista de palabras clave, o una lista de grupos donde hace falta al menos una de cada grupo; se ignoran tildes y mayúsculas.
- `games`: 3 juegos hechos a mano. Tipos: order, match, classify, tf, hangman, pick, memory, clock, mohs, specimen, photosort. Además, el motor añade solos fill, scramble y odd.
- `addQA(sid, {temaId: [[pregunta, respuesta, claves, porqué], ...]})`: preguntas para RAZONAR (casos prácticos, «¿por qué…?»), no de memoria tonta. Alimentan tests y juegos.
- `addFrases(sid, {temaId: [...]})`: frases para Completa la frase y Ordena la frase.

## Comportamiento que hay que mantener
- Tests y juegos cambian en cada partida (`pickFresh` elige lo que hace más tiempo que no sale).
- Estrellas por tema: teoría leída, test fácil aprobado, test difícil aprobado.
- Modo chapar: elige partes de la TEORÍA del tema, las lee igual que en «Teoría» y las escribe palabra por palabra, con pistas.
- Memory: 3 segundos para memorizar al empezar y puntuación por intentos.
- Caja de fallos y «Nueva vuelta» (reinicia estrellas, mantiene XP, nivel y logros).
- La interfaz de la app está en castellano; el contenido, en el idioma de cada asignatura.
- En la caja de fallos, los fallos se guardan por la POSICIÓN del tema (`q:si:k`), así que no reordenes temas existentes: añade los nuevos al final.
- Los 4 temas nuevos de Francés (salut, questions, etre, pluriel) están al final del mapa aunque en el libro van primero. Nadia aún no ha decidido si reordenarlos; no lo hagas sin que lo pida.

## Cómo trabajar
- Cuando Nadia mande fotos o PDF de apuntes: lee TODO el contenido, crea o amplía temas siguiendo el mismo formato, fiel a los apuntes y en el idioma de la asignatura. Si algo no está claro, pregunta en vez de inventar.
- Antes de subir, prueba con Playwright (Chromium ya está instalado): abre `index.html`, recorre todas las asignaturas, temas, tests, juegos, arcade, jefe final y chapar a 390 px de ancho, y comprueba que no hay errores de consola ni scroll horizontal. Haz capturas de lo nuevo y míralas.
- No conviertas el proyecto a React ni a ningún framework, no cambies el estilo visual y no toques el login ni Pío salvo que te lo pidan.
- Al terminar, explica a Nadia en pocas líneas qué hay nuevo, dónde lo encuentra en la app y si ella tiene que hacer algo.
