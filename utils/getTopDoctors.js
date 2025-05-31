import doctors from "../data/doctors_list.json";
import { diseaseToSpecialty } from "./diseaseSpecialtyMap";

export function getTopDoctorsByDiseases(diseases) {
  const matchedSpecialties = diseases
    .map(disease => diseaseToSpecialty[disease.toLowerCase()])
    .filter(Boolean);

  const uniqueSpecialties = [...new Set(matchedSpecialties)];

  const matchingDoctors = doctors.filter(doctor =>
    uniqueSpecialties.includes(doctor.specialty)
  );

  const sortedDoctors = matchingDoctors
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4); // Top 4 by rating

  return sortedDoctors;
}
