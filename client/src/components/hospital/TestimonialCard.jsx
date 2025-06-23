import { Avatar, AvatarFallback, AvatarImage } from "./../../components/ui/avatar";
import { Card, CardContent } from "./../../components/ui/card";
import { Quote } from "lucide-react";

export function TestimonialCard({ quote, name, location, avatar }) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card className="h-full bg-white border-0 hover:shadow-lg transition-shadow duration-200 ">
      <CardContent className="p-8 space-y-6">
        <Quote className="w-8 h-8 text-blue-400" />
        
        <blockquote className="text-gray-700 text-lg leading-relaxed">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{location}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
