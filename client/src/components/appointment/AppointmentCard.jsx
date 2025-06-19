import { Button } from "../ui/button";
import { Calendar, Video, XCircle } from "lucide-react";

const AppointmentCard = ({
  doctorName,
  specialty,
  date,
  time,
  location,
  videoLink,
   onReschedule,
   onCancel,
   onJoinCall,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md space-y-2 border border-gray-100">
      <div className="font-semibold text-lg text-blue-600">{doctorName}</div>
      <div className="text-sm text-gray-600">{specialty}</div>
      <div className="text-sm text-gray-600">{date} at {time}</div>
      <div className="text-sm text-gray-500">{location}</div>

       <div className="flex gap-2 mt-3 flex-wrap">
        {videoLink && (
          <Button size="sm" variant="outline" onClick={onJoinCall}>
            <Video className="w-4 h-4 mr-2" /> Join Call
          </Button>
        )}
        <Button size="sm" variant="outline" onClick={onReschedule}>
          <Calendar className="w-4 h-4 mr-2" /> Reschedule
        </Button>
        <Button size="sm" variant="destructive" onClick={onCancel}>
          <XCircle className="w-4 h-4 mr-2" /> Cancel
        </Button>
      </div> 
    </div>
  );
};

export default AppointmentCard;
