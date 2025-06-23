import { useState,useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  CalendarDays,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  Star,
  Users,
  Video,
  User,
  DollarSign,
  DollarSignIcon
} from "lucide-react";

const DoctorDetail = () => {
  const [appointmentType, setAppointmentType] = useState("video");
  const [allDoctors, setAllDoctors] = useState([]);
const [relatedDoctors, setRelatedDoctors] = useState([]);
  const { id } = useParams(); // 👈 Gets "3" from the URL
  const [doctor, setDoctor] = useState(null);
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

  useEffect(() => {
    const fetchDoctorAndRelated = async () => {
      const res1 = await fetch(`http://localhost:3000/api/doctors/${id}`);
      const currentDoctor = await res1.json();
      setDoctor(currentDoctor);
  
      const res2 = await fetch("http://localhost:3000/api/doctors");
      const doctorsList = await res2.json();
      setAllDoctors(doctorsList);
  
      // Filter related doctors (same specialty, exclude current)
      const related = doctorsList.filter(
        (doc) =>
          doc.specialty.trim().toLowerCase() === currentDoctor.specialty.trim().toLowerCase() &&
          doc.id !== currentDoctor.id
      );
      setRelatedDoctors(related);
    };
  
    fetchDoctorAndRelated();
  }, [id]);
  const fullName = doctor?.name || "";
  const surname = fullName.trim().split(" ").pop();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div >
          {/* Main Content */}
          <div className="space-y-8">
            {/* Doctor Profile */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 ">
                <div className="flex flex-col sm:flex-row gap-6">
                  <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
                    <AvatarImage src={doctor?.image}/>
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex justify-between flex-wrap space-y-4 w-full">
                  <div className="flex-1 space-y-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">
                      {doctor?.name}
                      </h1>
                      
                      <p className="text-blue-600 font-medium">{doctor?.speciality}</p>
                      <p className="text-sm text-gray-600 mt-1">
                      {doctor?.experience}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{doctor?.hospital} Hospital</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>MD, {doctor?.education}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <DollarSignIcon className="w-4 h-4" />
                        <span>CF, {doctor?.consultationFee}.00</span>
                      </div>
                      
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                      {renderStars(doctor?.rating)}
                      </div>
                      <span className="text-sm font-medium">
                      {doctor?.rating} ({doctor?.reviewCount} reviews)
                      </span>
                      <div className="flex items-center gap-1 ml-4">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          New York, NY
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 align-middle">
                      <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold"> <Calendar className="w-4 h-4"/> Book Appointment</Button>
                      <Button className="font-semibold" > <Video className="w-4 h-4" /> Video</Button>
                      </div>
                </div>
                  </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">
                      Patients Treated
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">Available</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Dr. Johnson */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <h2 className="text-lg font-semibold text-gray-900">
                  About Dr. {surname}
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                {doctor?.name} is a board-certified {doctor?.speciality} with over {doctor?.experience} in treating cardiovascular diseases.
                  {doctor?.description}
                </p>
              </CardContent>
            </Card>

            {/* Patient Reviews */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <h2 className="text-lg font-semibold text-gray-900">
                  Patient Reviews
                </h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                    <AvatarFallback>MT</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">
                        Michael Thompson
                      </h4>
                      <span className="text-sm text-gray-500">
                        March 15, 2024
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      {renderStars(doctor?.rating)}
                    </div>
                    <p className="text-gray-600 text-sm">
                      Excellent care and very thorough examination. Dr. {surname} explained everything clearly and made me feel comfortable
                      throughout the entire process.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">
                        Lisa Rodriguez
                      </h4>
                      <span className="text-sm text-gray-500">
                        March 8, 2024
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">
                      Professional and knowledgeable. The video consultation was
                      smooth and Dr. {surname} provided excellent advice for my
                      heart condition.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                    <AvatarFallback>DW</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">
                        David Wilson
                      </h4>
                      <span className="text-sm text-gray-500">
                        February 28, 2024
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      {[1, 2, 3, 4].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <p className="text-gray-600 text-sm">
                      Great experience overall. Dr. {surname} is very patient and
                      takes time to answer all questions. Highly recommend for
                      cardiac care.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* More Cardiologists */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  More Cardiologists
                </h2>
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700"
                >
                  View All →
                </Button>
              </CardHeader>
              <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedDoctors.map((doctor) => (
                  <Card className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={doctor?.image} />
                          <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-gray-900">
                          {doctor?.name}
                          </h4>
                          <p className="text-sm text-blue-600">{doctor?.speciality}</p>
                          <p className="text-xs text-gray-500">{doctor?.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-3 h-3 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                          <span className="text-xs text-gray-600 ml-1">
                            4.8
                          </span>
                        </div>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-green-100 text-green-700"
                        >
                          Available
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">
                        Specializes in heart surgery and preventive cardiology
                        care.
                      </p>
                        <a href={`/Doctors/${doctor.id}`} className="cursor-pointer">
                      <Button className="w-full bg-blue-600 text-white hover:bg-blue-500" size="sm">
                        View Profile
                      </Button>
                        </a>
                    </CardContent>
                  </Card>
              ))}
                </div>
              </CardContent>
            </Card>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
