export async function getComfortMessageFromGemini(emotion, reason) {
  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

  // const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const prompt = `
You're an emotional wellness AI. A user feels "${emotion}" because "${reason}".
Give them a kind, emotionally intelligent 3-4 sentence message to comfort them.
Make it warm, friendly, and in a supportive tone.
`;

  const body = {
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ]
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "You are strong, and your emotions are valid. I'm here for you."
    );
  } catch (err) {
    console.error("Gemini API error", err);
    return "You're not alone. Everything you're feeling is completely okay.";
  }
}
