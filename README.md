# Estudiar Jugando

Web de repaso con gamificación (XP, niveles, estrellas, logros, minijuegos). Sin instalar nada: HTML + CSS + JS.

- **Vercel:** importa el repo, Framework "Other", sin comando de build.
- **Asignaturas:** cada una es un archivo en `subjects/` (`tecnologia.js`, `bioloxia.js`, `ingles.js`). Los bancos de preguntas para razonar y las frases del modo chapar están en `qa_*.js` (o al final de `ingles.js`). Para añadir otra, copia uno, cambia el contenido y añade su `<script>` en `index.html`.
- Cada tema tiene: `body` (teoría; lo que va en `<b>` se puede tapar), `quiz` (test fácil), `hard` (test difícil y jefe final, de escribir) y `games` (3 minijuegos: `order`, `match`, `classify`, `tf`, `hangman`, `pick`, `memory`).
- La Zona Arcade (5 juegos mezclados) se genera sola con los datos de los temas.

## Variedad de preguntas
- Cada tema tiene un banco pregunta → respuesta en `subjects/qa_*.js`. Tests y minijuegos cogen cada vez las preguntas que hace más tiempo que no salen.

## Login con Google (guardar el progreso)
Como en Synaptic: login normal con `/callback` (solo nombre y correo, entra cualquier cuenta) y el progreso se guarda en una base de datos de Vercel.

1. **Google Cloud Console → Credenciales → tu cliente OAuth**
   - Orígenes de JavaScript: `https://day-study.vercel.app`
   - URI de redirección: `https://day-study.vercel.app/callback`
2. **Vercel → Settings → Environment Variables**: `GOOGLE_CLIENT_SECRET` = el secreto del cliente.
3. **Vercel → Storage → Create → Upstash for Redis** (gratis) y conéctalo a este proyecto. Crea solas las variables `KV_REST_API_URL` y `KV_REST_API_TOKEN`.
4. Vuelve a desplegar (Deployments → Redeploy).

Código: `api/auth/login.js`, `api/auth/callback.js`, `api/auth/logout.js`, `api/progress.js`, `js/cloud.js`.

## App instalable (PWA)
- iPhone/iPad: abrir en Safari → Compartir → «Añadir a pantalla de inicio».
- Android: Chrome → menú → «Instalar aplicación».
- Si cambias archivos, sube `VERSION` en `sw.js`.
