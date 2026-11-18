# 🎮 Estudiar Jugando

A gamified study web app for secondary school (1.º ESO): theory cards, quizzes, mini-games, XP, levels, stars, achievements and an AI study buddy. No install and no build: plain **HTML + CSS + JavaScript**, with **Vercel** serverless functions for login, progress and the assistant. Installable as a **PWA**.

## 📁 Project Structure

```
├── index.html               → Loads, in order: engine → subjects → qa → minerais_fotos → config → cloud → assistant
├── css/game.css             → Warm kid-friendly style (Lilita One + Nunito, 3D buttons)
├── js/
│   ├── engine.js            → The whole game engine: hash router, player, XP + 15 levels, achievements, map,
│   │                          theory, quizzes, mini-games, arcade, final boss, "chapar" (memorise) mode
│   ├── cloud.js             → Google login + cloud progress sync
│   ├── assistant.js         → "Pío 🐥", the AI chat buddy
│   └── config.js            → Public Google client ID
├── subjects/
│   ├── tecnologia.js, bioloxia.js, ingles.js, frances.js, historia.js, castellano.js → One file per subject
│   ├── qa_*.js              → Reasoning question banks and sentences for each subject
│   └── minerais_fotos.js    → 28 minerals and rocks with photos (img/minerais/)
├── api/
│   ├── auth/login.js, callback.js, logout.js → Google OAuth code flow
│   ├── progress.js          → Save / load progress in Upstash Redis
│   ├── ask.js               → Assistant endpoint (Groq), 80 questions/day limit
│   └── _lib/util.js         → Shared helpers
├── sw.js + manifest.webmanifest → PWA (offline cache, installable)
├── vercel.json              → Rewrites (/callback)
└── HANDOFF.md               → Detailed instructions for whoever continues the project
```

## 🚀 How It Works

### Subjects are just data

Each subject registers its topics with `registerSubject({ sections: [...] })`. A topic has:

- `body` — theory as HTML cards; anything in `<b>` can be hidden and revealed to self-test
- `quiz` — easy multiple choice `[{q, opts, a, fb}]`
- `hard` — written answers for the hard test and the final boss `[{q, ans, ok}]`, checked by keywords (ignoring accents and case)
- `games` — 3 hand-made mini-games: `order`, `match`, `classify`, `tf`, `hangman`, `pick`, `memory`, `clock`, `mohs`, `specimen`, `photosort`

The engine also generates `fill`, `scramble` and `odd` games, and the **Arcade Zone** mixes 5 games from all topics.

### Spaced variety

Each topic has a question → answer bank in `qa_*.js` (`addQA`) with *reasoning* questions. Tests and games always pick the questions that haven't appeared for the longest time.

### Progress in the cloud

Login with Google (OAuth code flow, only `openid email profile`, redirect to `/callback`). Progress is stored in **Upstash Redis** through `api/progress.js`.

### Pío 🐥, the AI buddy

An open chat powered by **Groq** (`api/ask.js`). It's hidden during tests, the final boss and the mistakes box, and limited to 80 questions per day.

## 🧠 Key Concepts

- **Data-driven design** — adding a subject means adding a data file
- **Gamification** — XP, levels, streaks, achievements, boss fights
- **Hash-based routing** without a framework
- **OAuth 2.0 code flow** with serverless functions
- **Serverless KV storage** — Upstash Redis on Vercel
- **LLM integration** with rate limiting
- **PWA** — service worker with versioned cache, web manifest

## 🛠️ How To Run

Open `index.html` in a browser to play locally (login and assistant need the Vercel functions):

```bash
npx vercel dev
```

### Deploy on Vercel

Import the repo with Framework **Other** and no build command. Then:

1. **Google Cloud Console → Credentials → OAuth client**: add the site as JavaScript origin and `<site>/callback` as redirect URI
2. **Vercel → Environment Variables**: `GOOGLE_CLIENT_SECRET`, `GROQ_API_KEY` (optional `GROQ_MODEL`)
3. **Vercel → Storage → Upstash for Redis**: connect it (creates `KV_REST_API_URL` and `KV_REST_API_TOKEN`)
4. Redeploy

### Adding a subject

Copy a file in `subjects/`, change its content, add its `<script>` in `index.html` and its path to `FILES` in `sw.js`.

### Install as an app

- iPhone/iPad: Safari → Share → *Add to Home Screen*
- Android: Chrome → menu → *Install app*

After changing files, bump `VERSION` in `sw.js` so installed apps update.
