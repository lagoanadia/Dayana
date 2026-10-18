/* POST /api/ask → Pío, el pollito asistente, responde dudas con Groq.
   Variables en Vercel: GROQ_API_KEY (obligatoria) y GROQ_MODEL (opcional). */
const {redis} = require('./_lib/util');

const MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';
const LIMIT = 80;   // preguntas por día y por dispositivo/red

const SYSTEM = `Eres Pío, un pollito amarillo con gafas, la mascota de la app "Estudiar Jugando".
Ayudas a una niña de 11 años a entender lo que estudia para sus exámenes (1º ESO).
Reglas:
- Responde en el MISMO idioma en que te pregunta (castellano o gallego). Si practica inglés, explica en castellano y pon los ejemplos en inglés.
- Sé breve: 2 a 6 frases cortas o una lista corta. Lenguaje sencillo, cercano y animado, con algún emoji (sin abusar).
- Usa como fuente principal el CONTENIDO DEL TEMA que te paso. No contradigas sus apuntes: si algo no aparece, puedes explicarlo de forma general pero dilo.
- Explica el porqué de las cosas y pon ejemplos de la vida real.
- Si te pide la respuesta de un ejercicio, ayúdale a razonarla paso a paso en vez de dársela sin más.
- Si la pregunta no tiene nada que ver con estudiar, reconduce con cariño hacia el tema.
- Nunca pidas ni guardes datos personales. Nada de contenido inapropiado para una niña.`;

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if(req.method !== 'POST') return res.status(405).end();
  if(!process.env.GROQ_API_KEY) return res.status(500).json({error: 'Falta GROQ_API_KEY en Vercel'});
  try{
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const question = String(body.question || '').slice(0, 600).trim();
    if(!question) return res.status(400).json({error: 'Pregunta vacía'});

    // Límite diario sencillo para que nadie gaste la clave
    const ip = String(req.headers['x-forwarded-for'] || 'x').split(',')[0].trim();
    try{
      const k = 'ask:' + new Date().toISOString().slice(0, 10) + ':' + ip;
      const n = await redis('INCR', k);
      if(n === 1) await redis('EXPIRE', k, 90000);
      if(n > LIMIT) return res.status(429).json({error: 'Hoy ya has preguntado muchísimo. ¡Mañana más! 🐥'});
    }catch(e){ /* sin base de datos: sin límite */ }

    const context = String(body.context || '').slice(0, 7000);
    const where = [body.subject, body.topic].filter(Boolean).join(' → ');
    const history = (Array.isArray(body.history) ? body.history : []).slice(-6)
      .filter(m => m && (m.role === 'user' || m.role === 'assistant'))
      .map(m => ({role: m.role, content: String(m.content || '').slice(0, 1200)}));

    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {'Authorization': 'Bearer ' + process.env.GROQ_API_KEY, 'Content-Type': 'application/json'},
      body: JSON.stringify({
        model: MODEL, temperature: 0.4, max_tokens: 450,
        messages: [
          {role: 'system', content: SYSTEM + (where ? `\n\nEstá estudiando: ${where}` : '') + (context ? `\n\nCONTENIDO DEL TEMA:\n${context}` : '')},
          ...history,
          {role: 'user', content: question}
        ]
      })
    });
    const j = await r.json();
    if(!r.ok) return res.status(502).json({error: (j.error && j.error.message) || 'Groq no respondió'});
    res.status(200).json({answer: j.choices && j.choices[0] && j.choices[0].message.content || ''});
  }catch(e){
    console.error(e);
    res.status(500).json({error: 'Algo falló, prueba otra vez'});
  }
};
