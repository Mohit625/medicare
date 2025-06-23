import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  VideoIcon,
  UserIcon,
} from "lucide-react";

export function AppointmentCard({ appointment, className }) {
  const {
    doctor,
    date,
    time,
    type,
    location,
    description,
    status = "upcoming",
  } = appointment;

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50";
      case "cancelled":
        return "text-red-600 bg-red-50";
      default:
        return "text-blue-600 bg-blue-50";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "cancelled":
        return "Cancelled";
      default:
        return type === "video" ? "Video Call" : "In-Person";
    }
  };

  const renderPrimaryButton = () => {
    if (status === "upcoming") {
      return type === "video" ? (
        <Button
          size="sm"
          className="bg-medical-500 hover:bg-medical-600 text-white flex items-center gap-2"
        >
          <VideoIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Join Call</span>
          <span className="sm:hidden">Join</span>
        </Button>
      ) : (
        <Button
          size="sm"
          className="bg-medical-500 hover:bg-medical-600 text-white flex items-center gap-2"
        >
          <MapPinIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Get Directions</span>
          <span className="sm:hidden">Directions</span>
        </Button>
      );
    } else {
      return (
        <Button
          size="sm"
          variant="outline"
          className="text-medical-600 border-medical-200"
        >
          Rebook
        </Button>
      );
    }
  };

  const renderSecondaryButton = () => {
    if (status === "upcoming") {
      return (
        <Button variant="ghost" size="sm" className="text-gray-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </Button>
      );
    }
    return null;
  };

  return (
    <Card className={cn("p-4 sm:p-6 hover:shadow-md transition-shadow", className)}>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start space-x-4 flex-1 mb-4 sm:mb-0">
          {/* Doctor Avatar */}
          <Avatar className="h-12 w-12 flex-shrink-0">
            <AvatarImage src={doctor.image} alt={doctor.name} />
            <AvatarFallback className="bg-medical-100 text-medical-600">
              {doctor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          {/* Appointment Details */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {doctor.name}
              </h3>
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium mt-1 sm:mt-0 w-fit",
                  getStatusColor(status)
                )}
              >
                {getStatusText(status)}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3">{doctor.specialty}</p>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <CalendarIcon className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                <span className="break-words">{date}</span>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <ClockIcon className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                <span>{time}</span>
              </div>

              {location && (
                <div className="flex items-center text-sm text-gray-600">
                  <MapPinIcon className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                  <span className="break-words">{location}</span>
                </div>
              )}

              {description && (
                <div className="flex items-center text-sm text-gray-600">
                  <UserIcon className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                  <span className="break-words">{description}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end space-x-2 sm:ml-4">
          {renderPrimaryButton()}
          {renderSecondaryButton()}
        </div>
      </div>
    </Card>
  );
}
