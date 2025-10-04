export async function POST(req) {
  try {
    const r = await fetch("https://api.openai.com/v1/realtime/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-realtime-preview",
        voice: "sage",
        instructions: "You are our website's voice agent. If it’s about our services, answer concisely in our brand tone; otherwise behave like ChatGPT.",
      }),
    });

    if (!r.ok) {
      const text = await r.text();
      return new Response(JSON.stringify({ error: text }), { status: 500 });
    }
    const session = await r.json();
    return Response.json(session);
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
