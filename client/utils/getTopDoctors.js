import { diseaseToSpecialty } from "./diseaseSpecialtyMap";

export async function getTopDoctorsByDiseases(diseases) {
  try {
    const res = await fetch("http://localhost:3000/api/doctors");
    const allDoctors = await res.json();

    const matchedSpecialties = diseases
      .map(disease => diseaseToSpecialty[disease.toLowerCase()])
      .filter(Boolean);

    const uniqueSpecialties = [...new Set(matchedSpecialties)];

    const matchingDoctors = allDoctors.filter(doctor =>
      uniqueSpecialties.includes(doctor.specialty)
    );

    const sortedDoctors = matchingDoctors
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);

    return sortedDoctors;
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return [];
  }
}
