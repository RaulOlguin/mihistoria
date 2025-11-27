export async function GET() {
  try {
    const res = await fetch(
      "https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php",
      {
        headers: { "User-Agent": "Mozilla/5.0" },
        cache: "no-store"
      }
    );

    // Enviar el resultado como texto (el MINSAL no entrega JSON real)
    const text = await res.text();

    return new Response(text, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (e) {
    return new Response("Error interno: " + e.message, {
      status: 500,
    });
  }
}
