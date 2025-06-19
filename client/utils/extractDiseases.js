const knownDiseases = [
    "migraine", "stroke", "epilepsy", "parkinson's disease",
    "depression", "anxiety", "insomnia", "ptsd", "bipolar disorder",
    "heart disease", "hypertension", "arrhythmia", "heart failure",
    "skin rash", "acne", "eczema", "psoriasis", "fungal infection",
    "diabetes", "thyroid", "hormonal imbalance", "pcos",
    "fever", "cold", "flu", "sore throat", "body ache", "nausea",
    "ear pain", "ear infection", "sinusitis", "throat pain", "nosebleed",
    "eye strain", "glaucoma", "cataract", "dry eyes", "conjunctivitis",
    "back pain", "joint pain", "arthritis", "osteoporosis", "fractures",
    "pregnancy", "menstrual cramps", "vaginal infection", "pelvic pain",
    "child fever", "measles", "chickenpox", "vomiting in child",
  ];

export function extractDiseasesFromText(text) {
  if (!text) return [];

  const lowerText = text.toLowerCase();

  const matched = knownDiseases.filter(disease =>
    lowerText.includes(disease.toLowerCase())
  );

  return [...new Set(matched)]; 
}