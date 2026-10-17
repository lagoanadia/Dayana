# Estudiar Jugando

Web de repaso con gamificación (XP, niveles, estrellas, logros, minijuegos). Sin instalar nada: HTML + CSS + JS.

- **Vercel:** importa el repo, Framework "Other", sin comando de build.
- **Asignaturas:** cada una es un archivo en `subjects/` (`tecnologia.js`, `bioloxia.js`). Para añadir otra, copia uno, cambia el contenido y añade su `<script>` en `index.html`.
- Cada tema tiene: `body` (teoría; lo que va en `<b>` se puede tapar), `quiz` (test fácil), `hard` (test difícil y jefe final, de escribir) y `games` (3 minijuegos: `order`, `match`, `classify`, `tf`, `hangman`, `pick`, `memory`).
- La Zona Arcade (5 juegos mezclados) se genera sola con los datos de los temas.

## Variedad de preguntas
- Cada tema tiene un banco pregunta → respuesta en `subjects/qa_*.js`. Tests y minijuegos cogen cada vez las preguntas que hace más tiempo que no salen.

## Login con Google (guardar el progreso)
1. Google Cloud Console → activa **Google Drive API**.
2. Pantalla de consentimiento OAuth: añade los permisos `drive.appdata` y `userinfo.email`, y su correo como usuaria de prueba.
3. Credenciales → ID de cliente OAuth (Aplicación web) → en *Orígenes de JavaScript autorizados* pon la URL de Vercel (`https://TU-APP.vercel.app`). No hace falta URI de redirección.
4. Pega el ID en `js/config.js`.

## App instalable (PWA)
- iPhone/iPad: abrir en Safari → Compartir → «Añadir a pantalla de inicio».
- Android: Chrome → menú → «Instalar aplicación».
- Si cambias archivos, sube `VERSION` en `sw.js`.
