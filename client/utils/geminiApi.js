const API_KEY = "AIzaSyCKtLrl6cZQocOlrNSwjAqcIcTHS8P3jL4";
export async function getGeminiFlashResponse(symptomText) {
  const prompt = `
You are an AI medical assistant. Given the symptoms below, return only this exact JSON (no markdown, no explanation):

{
  "diseases": [
    {
      "disease": "Disease Name",
      "confidence": "High | Medium | Low",
      "why": "Short explanation why this disease matches."
      "specialty": "Relevant medical specialty (e.g. Cardiology, Dermatology, etc.)"
    }
  ]
}

Symptoms: "${symptomText}"
select speciality from the following: Neurologist, Psychiatrist, Cardiologist, Dermatologist, Endocrinologist, General Physician, ENT Specialist, Ophthalmologist, 
Orthopedic Surgeon, Gynecologist, Pediatrician.
`;

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

    if (!raw) throw new Error("No response from Gemini");

    const cleanText = raw
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleanText);
    return parsed; // returns { diseases: [...] }
  } catch (err) {
    console.error("❌ Failed to fetch or parse Gemini result:", err);
    return null;
  }
}


export function extractDiseasesFromGeminiJson(parsedResponse) {
  if (!parsedResponse || !Array.isArray(parsedResponse.diseases)) {
    console.warn("⚠️ No valid diseases found.");
    return [];
  }

  return parsedResponse.diseases.map((d) => ({
    disease: d.disease || "Unknown",
    confidence: d.confidence || "Unknown",
    why: d.why || "No explanation provided.",
    specialty: d.specialty || "General Physician"
  }));
}



