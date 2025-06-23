import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";


const DoctorCard = ({
  name,
  specialty,
  rating,
  experience,
  image,
  onBookAppointment,
}) => {
  return (
    <Card className="bg-teal-50/50 border-teal-100">
      <CardContent className="p-6 text-center">
        <Avatar className="h-16 w-16 mx-auto mb-4">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-teal-100 text-teal-700 text-lg">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-teal-600 mb-2">{specialty}</p>

        <div className="flex items-center justify-center mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium text-gray-900">
            {rating}
          </span>
        </div>

        <p className="text-xs text-gray-600 mb-4">{experience}</p>

        <Button
          className="w-full bg-teal-600 text-white hover:bg-teal-700 cursor-pointer"
          onClick={onBookAppointment}
        >
          Book Appointment
        </Button>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
