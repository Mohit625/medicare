import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Phone } from "lucide-react";

export function NextAppointment() {
  return (
    <Card className="bg-white border-0">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Next Appointment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face" />
            <AvatarFallback>MC</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">Dr. Michael Chen</h4>
            <p className="text-sm text-gray-600">Cardiologist</p>
            <p className="text-xs text-gray-500">Today, 2:30 PM</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
            <Phone className="w-4 h-4 mr-2" />
            Join Call
          </Button>
          <Button variant="outline" size="icon">
            <Calendar className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
