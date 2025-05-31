import { Button } from "./../components/ui/button";
import { Card, CardContent } from "./../components/ui/card";
import { Textarea } from "./../components/ui/textarea";
import ActionCard from "./../components/user/ActionCard";
import HealthMetric from "./../components/user/HealthMetric";
import DoctorCard from "./../components/user/DoctorCard";
import AppointmentCard from "./../components/user/AppointmentCard";
import { GeminiResult } from "@/components/GeminiResult";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { getGeminiFlashResponse } from "./../../utils/geminiApi";
import {
  Stethoscope,
  Users,
  Building2,
  Calendar,
  FileText,
  Headphones,
  Heart,
  Droplet,
  Thermometer,
  Footprints,
  Upload,
  Search,
  Video,
  Pill,
  MessageSquare,
  Bell,
  Phone,
  CheckCircle,
} from "lucide-react";

const Dashboard = () => {
  const { user } = useUser();
  const actionCards = [
    { icon: Stethoscope, title: "Check Symptoms" },
    { icon: Users, title: "Find Doctor" },
    { icon: Calendar, title: "Book Appointment" },
    { icon: Building2, title: "Hospitals" },
    { icon: FileText, title: "Health Records" },
    { icon: Headphones, title: "Support" },
  ];

  const healthMetrics = [
    { icon: Heart, value: "76", label: "Heart Rate", iconColor: "text-red-500" },
    { icon: Droplet, value: "118/78", label: "Blood Pressure", iconColor: "text-blue-500" },
    { icon: Thermometer, value: "98.2°F", label: "Body Temp", iconColor: "text-orange-500" },
    { icon: Footprints, value: "6,390", label: "Steps Today", iconColor: "text-green-500" },
  ];

  const doctors = [
    {
      name: "Dr. Sarah Lee",
      specialty: "General Physician",
      rating: 5.0,
      experience: "7 yrs exp • Kids Care",
    },
    {
      name: "Dr. Alan Smith",
      specialty: "Internal Medicine",
      rating: 4.9,
      experience: "9 yrs exp • Prime Clinic",
    },
    {
      name: "Dr. Maya Gupta",
      specialty: "Infectious Diseases",
      rating: 4.7,
      experience: "12 yrs exp • City Hospital",
    },
    {
      name: "Dr. Aisha Khan",
      specialty: "Family Medicine",
      rating: 4.8,
      experience: "8 yrs exp • Family Health",
    },
  ];

  const appointments = [
    {
      doctorName: "Dr. Maya Gupta",
      specialty: "Infectious Diseases",
      date: "Mon, June 2",
      time: "10:30 AM",
      location: "City Hospital, Room 214",
    },
    {
      doctorName: "Dr. Aisha Khan",
      specialty: "Family Medicine",
      date: "Thu, June 5",
      time: "4:45 PM",
      location: "Family Health Clinic, Block B",
    },
  ];

  const testimonials = [
    {
      quote: "Health is the greatest gift, contentment the greatest wealth.",
      author: "",
    },
    {
      quote: "Take care of your body. It's the only place you have to live.",
      author: "",
    },
    {
      quote: "A healthy outside starts from the inside.",
      author: "– Robert Urich",
    },
  ];

  const devices = [
    "Blood Pressure Monitors",
    "ECG-enabled Smartwatches",
    "Bluetooth Glucometers",
    "Pulse Oximeters",
  ];

  const telemedicineFeatures = [
    { icon: Video, text: "HD Video Consultations" },
    { icon: Pill, text: "e-Prescriptions" },
    { icon: MessageSquare, text: "Secure Chat with Doctors" },
    { icon: Bell, text: "Instant Appointment Reminders" },
  ];
  const [symptomText, setSymptomText] = useState("");
const [analysisResult, setAnalysisResult] = useState("");
const [loading, setLoading] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Welcome Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome Back, <span className="text-blue-600">{user?.firstName || "U"}</span>!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              AI-powered health at your fingertips. Let's find solutions together.
            </p>
            <div className="flex items-center space-x-2 text-blue-600">
              <Heart className="h-5 w-5" />
              <span className="font-medium">Stay positive. Stay healthy. We're here for you.</span>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://i.pinimg.com/736x/1f/50/ff/1f50ff26f906ce127ad8bf255466ad30.jpg" 
              alt="Medical device illustration" 
              className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Action Cards */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {actionCards.map((card, index) => (
              <ActionCard
                key={index}
                icon={card.icon}
                title={card.title}
                onClick={() => console.log(`Clicked ${card.title}`)}
              />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-blue-50/50 border-blue-100">
              <CardContent className="p-6 text-center">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-gray-700 font-medium mb-4">{testimonial.quote}</p>
                {testimonial.author && (
                  <p className="text-sm text-gray-500">{testimonial.author}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </section>

        
        {/* Telemedicine Services */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">24/7 Telemedicine Services</h2>
            <p className="text-gray-600 mb-6">
              Connect instantly with certified doctors from the comfort of your home. 
              Enjoy secure video consultations, electronic prescriptions, and instant 
              follow-ups—all within a click.
            </p>
            <div className="space-y-3 mb-6">
              {telemedicineFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <feature.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              Start Consultation
            </Button>
          </div>
          <div>
            <img 
              src="https://i.pinimg.com/736x/ff/7a/9b/ff7a9bcd253e5b688894821b2e7588cd.jpg" 
              alt="Telemedicine consultation" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Symptom Checker */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Describe Your Problem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enter your symptoms, upload an image, or ask your health question. Medicare AI will 
              analyze and suggest possible related diseases.
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <Textarea
                value={symptomText}
                onChange={(e) => setSymptomText(e.target.value)}
                placeholder="E.g. I have a mild fever and joint pain..."
                className="min-h-32 mb-4 text-base"
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <Button variant="outline" className="flex items-center">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Image
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-progress"
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          const response = await getGeminiFlashResponse(symptomText);
          setAnalysisResult(response);
          setLoading(false);
        }}>
                  <Search className="h-4 w-4 mr-2 text-white" />
                  {loading ? "Analyzing..." : "Analyze"}
                </Button>
              </div>
              {analysisResult && (
      // <div className="mt-6 bg-blue-50 p-4 rounded-md text-gray-800">
      //   <h3 className="font-semibold mb-2">Gemini AI Suggestion:</h3>
      //   <p>{analysisResult}</p>
      // </div>
      <GeminiResult response={analysisResult}/>
    )}
            </CardContent>
          </Card>
        </section>


        {/* Doctors Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Doctors Who Can Help</h2>
            <Button variant="link" className="text-blue-600">
              View all doctors
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {doctors.map((doctor, index) => (
              <DoctorCard
                key={index}
                name={doctor.name}
                specialty={doctor.specialty}
                rating={doctor.rating}
                experience={doctor.experience}
                onBookAppointment={() => console.log(`Book appointment with ${doctor.name}`)}
              />
            ))}
          </div>
        </section>

        {/* Upcoming Appointments */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Appointments</h2>
            <Button variant="link" className="text-blue-600">
              View all
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {appointments.map((appointment, index) => (
              <AppointmentCard
                key={index}
                doctorName={appointment.doctorName}
                specialty={appointment.specialty}
                date={appointment.date}
                time={appointment.time}
                location={appointment.location}
                onReschedule={() => console.log(`Reschedule appointment with ${appointment.doctorName}`)}
              />
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm">
            Need to change or cancel? Visit Your Appointments page.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;