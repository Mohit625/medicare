import { Button } from "./../components/ui/button";
import { Card, CardContent, CardHeader } from "./../components/ui/card";
import { Textarea } from "./../components/ui/textarea";
import ActionCard from "./../components/user/ActionCard";
import HealthMetric from "./../components/user/HealthMetric";
import DoctorCard from "./../components/user/DoctorCard";
import AppointmentCard from "./../components/user/AppointmentCard";
import { GeminiResult } from "@/components/GeminiResult";
import { useUser } from "@clerk/clerk-react";
import { useState,useEffect } from "react";
import { getGeminiFlashResponse } from "./../../utils/geminiApi";
import {extractDiseasesFromText} from "./../../utils/extractDiseases"
import { extractDiseasesFromGeminiJson } from "./../../utils/geminiApi";
import {getTopDoctorsByDiseases} from "./../../utils/getTopDoctors"
import BookingModal from "@/components/appointment/BookingModal";
import UserProfileDialog from "@/components/user/UserProfileDialog";
import HealthTips from "@/components/user/HealthTips";
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
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import UploadImageButton from "@/components/user/UploadImageButton";

const Dashboard = () => {
  const { user } = useUser();
  const [showProfileDialog, setShowProfileDialog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/user-profile?userId=${user.id}`);
        if (res.status === 404) {
          setShowProfileDialog(true);
        }
      } catch (err) {
        console.error("Error checking profile", err);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [user]);
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
const [sorted, setsorted] = useState({});
const [showModal, setShowModal] = useState(false);
const [selectedDoctor, setSelectedDoctor] = useState(null);  
const [symptomText, setSymptomText] = useState("");
const [loading, setLoading] = useState(false);
const [imageFile, setImageFile] = useState(null);
const [diseases, setdiseases] = useState([]);
const handleAnalyze = async () => {
  setLoading(true);
  try {
    const response = await getGeminiFlashResponse(symptomText);
    if (!response) throw new Error("Empty response from Gemini");

    const parsed = extractDiseasesFromGeminiJson(response);
    setdiseases(parsed);

    const res = await fetch(`http://localhost:3000/api/doctors`);
    const allDoctors = await res.json();
    const specialtyToDoctors = {};

    for (const disease of parsed) {
      const specialty = disease.specialty;
      if (specialty && !specialtyToDoctors[specialty]) {
        specialtyToDoctors[specialty] = allDoctors.filter(doc => doc.specialty.toLowerCase() === specialty.toLowerCase()).slice(0, 4);
      }
    }
    setsorted(specialtyToDoctors);

    await fetch("http://localhost:3000/api/disease-predictions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.id, diseases: parsed }),
    });

    toast.success("AI Analysis completed!");
  } catch (err) {
    toast.error("Failed to analyze symptoms.");
    console.error("Gemini Error:", err);
  }
  setLoading(false);
};
  return (
    <div className="min-h-screen bg-gray-50 z-0">
      <UserProfileDialog
    open={showProfileDialog}
    onClose={() => setShowProfileDialog(false)}
    onSave={() => console.log("Profile saved")}
    userId={user?.id}
  />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome Back, <span className="text-teal-700">{user?.firstName || "U"}!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              AI-powered health at your fingertips. Let's find solutions together.
            </p>
            <div className="flex items-center space-x-2 text-teal-600">
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

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-teal-50/50 border-teal-100">
              <CardContent className="p-6 text-center">
                <div className="text-4xl text-teal-600 mb-4">"</div>
                <p className="text-gray-700 font-medium mb-4">{testimonial.quote}</p>
                {testimonial.author && (
                  <p className="text-sm text-gray-500">{testimonial.author}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </section>

        
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
                  <feature.icon className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
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

        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Describe Your Problem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enter your symptoms, upload an image, or ask your health question. Medicare AI will 
              analyze and suggest possible related diseases.
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-white border-0">
            <CardContent className="p-6">
              <Textarea
                value={symptomText}
                onChange={(e) => setSymptomText(e.target.value)}
                placeholder="E.g. I have a mild fever and joint pain..."
                className="min-h-32 mb-4 text-base"
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <UploadImageButton/>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
        disabled={loading}
        onClick={handleAnalyze}>
                  <Search className="h-4 w-4 mr-2 text-white" />
                  {loading ? "Analyzing..." : "Analyze"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        {diseases.length > 0 && (
          <Card className="bg-white rounded-lg shadow space-y-4 max-w-4xl mx-auto border-0">
            <CardHeader>
              <h3 className="text-lg font-bold text-blue-600">AI-Predicted Diseases</h3>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6 " >
              {diseases.slice(0,3).map((d, i) => (
                <Card ket={i} className="cursor-pointer hover:shadow-md transition-shadow duration-200 bg-teal-50/50 border-teal-100 flex flex-col items-center gap-1 text-center" >
                  <div className="p-3 bg-blue-100 rounded-full mb-3">
          <FileText className="h-6 w-6 text-teal-700" />
        </div>
                  <h4 className="font-semibold text-gray-900">{d.disease}</h4>
                  <span className="text-sm text-gray-600">Confidence: {d.confidence}</span>
                  <p className="text-sm text-gray-700">{d.why}</p>
                </Card>
              ))}
            </CardContent>
          </Card>
        )}


<section>
  <Card className="border-0 bg-white shadow" >

  <CardHeader className="sm:flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-gray-900">Doctors Who Can Help</h2>
    <Button variant="link" className="text-blue-600">
      View all doctors
    </Button>
  </CardHeader>
<CardContent>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
    {Object.keys(sorted).length > 0 ? (
      Object.entries(sorted)
        .slice(0, 1) // Only top 4 specialties
        .flatMap(([specialty, doctors]) =>
          doctors.slice(0, 4).map((doctor, index) => (
            <DoctorCard
              key={`${specialty}-${index}`}
              name={doctor.name}
              specialty={doctor.specialty || specialty}
              rating={doctor.rating}
              experience={doctor.experience}
              image={doctor.image}
              onBookAppointment={() => {
                setSelectedDoctor(doctor);
                setShowModal(true);
              }}
            />
          ))
        )
    ) : (
      doctors.map((doctor, index) => (
        <DoctorCard
          key={index}
          name={doctor.name}
          specialty={doctor.specialty}
          rating={doctor.rating}
          experience={doctor.experience}
          image={doctor.image}
          onBookAppointment={() => {
            setSelectedDoctor(doctor);
            setShowModal(true);
          }}
        />
      ))
    )}
  </div>
  {diseases.length > 0 && (
  <HealthTips disease={diseases[0].disease} />
)}
  {selectedDoctor && (
    <BookingModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      doctor={selectedDoctor}
      user={user}
      onBookingSuccess={() => toast.success("Appointment booked!")}
    />
  )}
</CardContent>
  </Card>
</section>


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