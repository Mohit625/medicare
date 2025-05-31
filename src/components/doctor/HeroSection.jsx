import { Button } from "./../ui/button";
import { UserPlus, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
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

          {/* Right Illustration */}
          <div className="relative">
            <div className="bg-blue-100 rounded-3xl p-8 h-80 flex items-center justify-center">
              {/* Medical professionals illustration placeholder */}
              <div className="grid grid-cols-3 gap-4">
                {/* Row 1 */}
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
                </div>
                <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                </div>
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
                </div>
                
                {/* Row 2 */}
                <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                </div>
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center relative -mt-2">
                  <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
                  {/* Stethoscope representation */}
                  <div className="absolute -bottom-1 w-8 h-1 bg-blue-700 rounded-full"></div>
                </div>
                <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                </div>
                
                {/* Row 3 */}
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
                </div>
                <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                </div>
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;