import React from "react";
import styled from "styled-components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect,useState } from "react";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  VideoIcon,
  UserIcon,
  TrashIcon
} from "lucide-react";

export function AppointmentCard({ appointment , stats , onCancel = () => {} , onRebook = () => {}}) {
  const {
    userId,
    userName,
    userEmail,
    doctorId,
    doctorName,
    specialty,
    videoLink,
    date,
    time,
    type,
    location,
    description,
    status,
  } = appointment;
  const dates = new Date(date);
  const apptDate = new Date(`${date} ${time}`);
  const now = new Date();
  const fullDate = dates.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }); 
  const getStatusText = () => {
    if (apptDate < now && status === "upcoming" ) return "Completed";
    if (status === "Cancelled") return "Cancelled";
    return "Video Call";
  };
  const [imageurl, setimageurl] = useState("")
  const statusColor =
  (apptDate < now && status === "upcoming" )
        ? "bg-green-100 text-green-700"
        : status === "Cancelled"
        ? "bg-red-100 text-red-700"
        : "bg-blue-100 text-blue-700";
        const handleAnalyze = async () => {
          const res =  await fetch(`https://medicare-ired.onrender.com/api/doctors/${doctorId}`);
          const data = await res.json();
          setimageurl(data?.image);
        }
        useEffect(() => {
          handleAnalyze();
        }, [doctorId])
        
    return (
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between">
        <div className="flex gap-4">
          <img
            src={imageurl}
            alt={doctorName}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h3 className="font-semibold text-lg">{doctorName}</h3>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor}`}>
                {getStatusText()}
              </span>
            </div>
            <p className="text-gray-500 text-sm">{specialty}</p>
  
            <div className="mt-2 text-sm text-gray-600 space-y-1">
              <div className="flex items-center gap-2">
                <CalendarIcon size={16} />
                <span>{fullDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon size={16} />
                <span>{time} PM</span>
              </div>
              {location && (
                <div className="flex items-center gap-2">
                  <MapPinIcon size={16} />
                  <span>{location}</span>
                </div>
              )}
              {(
                <div className="flex items-center gap-2">
                  <UserIcon size={16} />
                  <span>Annual Checkup</span>
                </div>
              )}
            </div>
          </div>
        </div>
  
        <div className="flex items-center gap-2  mt-4 sm:mt-auto">
          {stats === "upcoming" ? (
            <>
            <Button 
            variant="outline"
            className="text-blue-600 border-blue-300 hover:bg-blue-50">
              <a href={videoLink} className="flex items-center gap-2">
              {<VideoIcon size={16} /> }
              {"Join Call"}
              </a>
            </Button>
            <Button
        variant="outline"
        className="text-red-600 border-red-300 hover:bg-red-50 cursor-pointer"
        onClick={() => onCancel(appointment._id)}
      >
        Cancel
      </Button>
            </>
          ) : (
            <>
            <Button variant="outline" className="text-green-600 border-green-300 hover:bg-green-50 cursor-pointer">Rebook</Button>
            <Button
        variant="outline"
        className="text-red-600 border-red-300 hover:bg-red-50 cursor-pointer"
        onClick={() => onCancel(appointment._id)}
      >
        <TrashIcon className="w-4 h-4" />
      </Button>
            </>
          )}
        </div>
      </div>
    );
}
