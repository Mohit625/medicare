import { Heart, Brain, Baby, Bone, Stethoscope, Eye } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const specialties = [
  {
    id: "cardiology",
    name: "Cardiology",
    doctorCount: 42,
    icon: Heart,
    color: "text-blue-600 bg-blue-100",
  },
  {
    id: "neurology",
    name: "Neurology",
    doctorCount: 28,
    icon: Brain,
    color: "text-blue-600 bg-blue-100",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    doctorCount: 38,
    icon: Baby,
    color: "text-blue-600 bg-blue-100",
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    doctorCount: 31,
    icon: Bone,
    color: "text-blue-600 bg-blue-100",
  },
  {
    id: "general",
    name: "General Medicine",
    doctorCount: 54,
    icon: Stethoscope,
    color: "text-blue-600 bg-blue-100",
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    doctorCount: 25,
    icon: Eye,
    color: "text-blue-600 bg-blue-100",
  },
];

const SpecialtyGrid = () => {
  return (
    <section className="bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Specialty</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {specialties.map((specialty) => {
            const IconComponent = specialty.icon;
            return (
              <Card
                key={specialty.id}
                className="hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-gray-200 hover:border-blue-300"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${specialty.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{specialty.name}</h3>
                  <p className="text-sm text-gray-600">{specialty.doctorCount} Doctors</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialtyGrid;