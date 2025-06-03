import { Card, CardContent } from "./../ui/card";
import { Button } from "./../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./../ui/avatar";
import { Star } from "lucide-react";

const doctors = [
  {
    name: "Dr. Maya Gupta",
    specialty: "Cardiologist",
    rating: 4.9,
    experience: "12 yrs exp",
    hospital: "City Hospital",
    image: "https://i.pinimg.com/736x/6c/59/95/6c599523460f54ddeba81f3cd689ae04.jpg"
  },
  {
    name: "Dr. Alan Smith",
    specialty: "Dermatologist",
    rating: 4.8,
    experience: "9 yrs exp",
    hospital: "Prime Clinic",
    image: "https://i.pinimg.com/736x/c9/ef/a2/c9efa22d3d889cc91f5d988bedbe1430.jpg"
  },
  {
    name: "Dr. Sarah Lee",
    specialty: "Pediatrician",
    rating: 5.0,
    experience: "7 yrs exp",
    hospital: "Kids Care",
    image: "https://i.pinimg.com/736x/bf/0c/76/bf0c7651ee5d65b983eed068bbbba1c8.jpg"
  },
  {
    name: "Dr. Rohan Patel",
    specialty: "Orthopedic",
    rating: 4.7,
    experience: "10 yrs exp",
    hospital: "OrthoPlus",
    image: "https://i.pinimg.com/736x/28/90/51/28905133f922c06fd8a2c8a72ea3266a.jpg"
  }
];

export function DoctorsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Top Rated Doctors
          </h2>
          <Button variant="link" className="text-teal-600">
            View all doctors
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 object-center">
                  <AvatarImage src={doctor.image} alt={doctor.name} />
                  <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <h3 className="font-semibold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 mb-3">
                  {doctor.specialty}
                </p>
                
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{doctor.rating}</span>
                </div>
                
                <p className="text-sm text-gray-500 mb-4">
                  {doctor.experience} • {doctor.hospital}
                </p>
                
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


