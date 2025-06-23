import { Button } from "./../ui/button";
import { UserPlus, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our Medical Professionals
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover our network of experienced doctors across various
              specialties, ready to provide you with exceptional healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                <UserPlus className="w-4 h-4 mr-2" />
                Find a Doctor
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>

          <img src="https://i.pinimg.com/736x/23/3f/77/233f77fb2a64534fb7c7fd54935cbfb7.jpg" className="sm:h-80 relative rounded-3xl w-full"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;