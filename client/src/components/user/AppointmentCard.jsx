import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, MapPin } from "lucide-react";


const AppointmentCard = ({
  doctorName,
  specialty,
  date,
  time,
  location,
  imageUrl = "/placeholder.svg",
  onReschedule,
}) => {
  return (
    <Card className="bg-white border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={imageUrl} alt={doctorName} />
              <AvatarFallback className="bg-blue-100 text-blue-600">
                {doctorName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{doctorName}</h3>
              <p className="text-sm text-blue-600 mb-3">{specialty}</p>

              <div className="space-y-1">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  {date}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  {time}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {location}
                </div>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
            onClick={onReschedule}
          >
            Reschedule
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
