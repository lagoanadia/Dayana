# Estudiar Jugando

Web de repaso con gamificación (XP, niveles, estrellas, logros, minijuegos). Sin instalar nada: HTML + CSS + JS.

- **Vercel:** importa el repo, Framework "Other", sin comando de build.
- **Asignaturas:** cada una es un archivo en `subjects/` (`tecnologia.js`, `bioloxia.js`). Para añadir otra, copia uno, cambia el contenido y añade su `<script>` en `index.html`.
- Cada tema tiene: `body` (teoría; lo que va en `<b>` se puede tapar), `quiz` (test fácil), `hard` (test difícil y jefe final, de escribir) y `games` (3 minijuegos: `order`, `match`, `classify`, `tf`, `hangman`, `pick`, `memory`).
- La Zona Arcade (5 juegos mezclados) se genera sola con los datos de los temas.
