import { Card, CardContent } from "./../ui/card";
import { Button } from "./../ui/button";
import { Building2, Star, Users, Heart, Baby, Bone } from "lucide-react";

const hospitals = [
  {
    name: "City General Hospital",
    specialty: "Multi-specialty • 24×7 Emergency",
    rating: 4.8,
    icon: Building2
  },
  {
    name: "Prime Medical Center",
    specialty: "Advanced Cardiology & Surgery",
    rating: 4.7,
    icon: Heart
  },
  {
    name: "Sunrise Children's Hospital",
    specialty: "Pediatrics & Neonatal Care",
    rating: 4.9,
    icon: Baby
  },
  {
    name: "OrthoPlus Hospital",
    specialty: "Orthopedics & Trauma Care",
    rating: 4.6,
    icon: Bone
  }
];

export function HospitalsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Trusted Hospitals
          </h2>
          <Button variant="link" className="text-teal-600">
            View all hospitals
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hospitals.map((hospital, index) => (
            <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <hospital.icon className="w-8 h-8 text-teal-600" />
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">
                  {hospital.name}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {hospital.specialty}
                </p>
                
                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{hospital.rating}</span>
                </div>
                
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}