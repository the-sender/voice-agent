export async function POST(req) {
  const r = await fetch("https://api.openai.com/v1/realtime/sessions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-realtime-preview",
      voice: "alloy",
      turn_detection: { type: "server" },
      instructions: "You are our website's voice agent. Keep answers short, natural, and friendly. If it’s about our services, prioritise our info; otherwise answer normally.",
    }),
  });

  if (!r.ok) {
    const text = await r.text();
    return new Response(JSON.stringify({ error: text }), { status: 500 });
  }
  const session = await r.json();
  return Response.json(session);
}
