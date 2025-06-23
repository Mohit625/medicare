import { ChevronLeft, ChevronRight, Star, Building2, GraduationCap, Clock, DollarSign } from "lucide-react";
import { Button } from "./../ui/button";
import { Card, CardContent } from "./../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./../ui/avatar";

const featuredDoctors = [
  {
    id: "1",
    name: "Dr. James Wilson",
    specialty: "Cardiologist",
    image: "/placeholder.svg",
    rating: 4.8,
    hospital: "City General Hospital",
    education: "Harvard Medical School",
    experience: "15+ Years Experience",
    consultationFee: 150,
  },
  {
    id: "2",
    name: "Dr. Sarah Johnson",
    specialty: "Neurologist",
    image: "/placeholder.svg",
    rating: 5.0,
    hospital: "Memorial Medical Center",
    education: "Johns Hopkins University",
    experience: "12+ Years Experience",
    consultationFee: 180,
  },
  {
    id: "3",
    name: "Dr. Michael Chen",
    specialty: "Orthopedic Surgeon",
    image: "/placeholder.svg",
    rating: 4.2,
    hospital: "University Medical Center",
    education: "Stanford Medical School",
    experience: "18+ Years Experience",
    consultationFee: 200,
  },
  {
    id: "4",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image: "/placeholder.svg",
    rating: 4.7,
    hospital: "St. Mary's Hospital",
    education: "UCLA Medical School",
    experience: "10+ Years Experience",
    consultationFee: 140,
  },
];

const FeaturedDoctors = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />);
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <section className="bg-gray-50 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Doctors</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDoctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200 border-0">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-32 relative">
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <Avatar className="h-16 w-16 border-4 border-white">
                    <AvatarImage src={doctor.image} alt={doctor.name} />
                    <AvatarFallback className="bg-gray-200 text-gray-700">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <CardContent className="pt-12 pb-6 text-center">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{doctor.specialty}</p>

                <div className="flex items-center justify-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(doctor.rating)}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{doctor.rating}</span>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-center">
                    <Building2 className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{doctor.hospital}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{doctor.education}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <DollarSign className="h-4 w-4 mr-2 text-blue-500" />
                    <span>${doctor.consultationFee} per consultation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;