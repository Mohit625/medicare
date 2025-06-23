const API_KEY = "AIzaSyCKtLrl6cZQocOlrNSwjAqcIcTHS8P3jL4";
export const generateHealthTipsForDisease = async (diseaseName) => {
  const prompt = `Give me 3 short, practical health tips for someone dealing with "${diseaseName}". Keep them friendly, clear, and helpful. Return in bullet points.`;
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await res.json();
    const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return raw;
  } catch (err) {
    console.error("❌ Failed to fetch or parse Gemini result:", err);
    return null;
  }
};
