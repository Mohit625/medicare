import { diseaseToSpecialty } from "./diseaseSpecialtyMap";

export async function getTopDoctorsByDiseases(diseases) {
  const formattedDiseases = diseases.map(d => `- ${d}`).join("\n");
  const prompt = `
You are a medical AI assistant. Given a list of diseases, return the medical specialty best suited to treat each one.

Format your response as valid JSON like:
[
  {
    "specialty": "Relevant Specialty"
  }
]

Diseases:
${formattedDiseases}
`;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-pro:generateContent?key=YOUR_API_KEY`,
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
    const clean = raw?.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(clean);
  } catch (err) {
    console.error("❌ Error fetching specialties:", err);
    return [];
  }
}
