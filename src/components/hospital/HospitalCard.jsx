import { Badge } from "./../../components/ui/badge";
import { Button } from "./../../components/ui/button";
import { Card, CardContent } from "./../../components/ui/card";
import { MapPin, Star } from "lucide-react";

export function HospitalCard({
  name,
  address,
  rating,
  reviewCount,
  description,
  specialties,
  doctorCount,
  image
}) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-200 text-yellow-400" />
      );
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }
    
    return stars;
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 max-h-[500px] flex flex-col">
      <div className="h-40 w-full overflow-hidden">
    <img
      src={image}
      alt={name}
      className="object-cover w-full h-full rounded-t-sm"
    />
  </div>
      
      <CardContent className=" space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
          
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center space-x-1">
              {renderStars(rating)}
            </div>
            <span className="text-sm font-medium text-gray-900">{rating}</span>
            {reviewCount && (
              <span className="text-sm text-gray-500">({reviewCount})</span>
            )}
          </div>
          
          <div className="flex items-start space-x-2 mb-3">
            <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-blue-600">{address}</span>
          </div>
          
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {description}
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-700">
              <span className="font-medium text-blue-600">{doctorCount} Doctors</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100"
                >
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
