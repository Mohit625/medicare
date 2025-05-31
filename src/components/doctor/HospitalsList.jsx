import { Star, MapPin, Phone, Users } from "lucide-react";
import { Button } from "./../ui/button";
import { Card, CardContent } from "./../ui/card";
import { Badge } from "./../ui/badge";

const hospitals = [
  {
    id: "1",
    name: "City General Hospital",
    image: "/placeholder.svg",
    rating: 4.6,
    address: "123 Medical Center Blvd, Boston, MA 02115",
    phone: "(617) 555-1234",
    doctorCount: 68,
    specialties: ["Emergency Care", "Cardiology", "Orthopedics"],
  },
  {
    id: "2",
    name: "Memorial Medical Center",
    image: "/placeholder.svg",
    rating: 4.9,
    address: "456 Healthcare Ave, New York, NY 10001",
    phone: "(212) 555-5678",
    doctorCount: 92,
    specialties: ["Oncology", "Neurology", "Pediatrics"],
  },
  {
    id: "3",
    name: "University Medical Center",
    image: "/placeholder.svg",
    rating: 4.2,
    address: "789 Research Parkway, Chicago, IL 60601",
    phone: "(312) 555-9012",
    doctorCount: 105,
    specialties: ["Research", "Transplant", "Surgery"],
  },
];

const HospitalsList = () => {
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
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Associated Hospitals</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {hospitals.map((hospital) => (
            <Card key={hospital.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {/* Purple gradient header with geometric shape */}
              <div className="bg-gradient-to-br from-purple-200 to-purple-300 h-32 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Geometric blue shape */}
                  <div className="w-24 h-16 bg-blue-600 transform rotate-12 rounded-lg"></div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{hospital.name}</h3>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(hospital.rating)}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{hospital.rating}</span>
                </div>

                {/* Hospital Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{hospital.address}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{hospital.phone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{hospital.doctorCount} Doctors</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {hospital.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                {/* View Hospital Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  View Hospital
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Hospitals Link */}
        <div className="text-center">
          <Button variant="link" className="text-blue-600 hover:text-blue-700 font-medium">
            View All Hospitals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HospitalsList;