import { Button } from "./../../components/ui/button";
import { Building2, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Top Hospitals & Healthcare Centers
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our curated list of hospitals providing world-class care,
              advanced technology, and compassionate service for every patient.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                <Building2 className="w-5 h-5 mr-2" />
                Find a Hospital
              </Button>
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium">
                <MapPin className="w-5 h-5 mr-2" />
                Nearby Hospitals
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 relative overflow-hidden">
              {/* Hospital building illustration placeholder */}
              <div className="relative z-10">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-center h-48">
                    <div className="text-center space-y-4">
                      <Building2 className="w-16 h-16 text-blue-600 mx-auto" />
                      <div className="space-y-2">
                        <div className="w-24 h-3 bg-blue-200 rounded mx-auto"></div>
                        <div className="w-16 h-3 bg-blue-100 rounded mx-auto"></div>
                      </div>
                      <div className="flex justify-center space-x-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                        </div>
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                        </div>
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/2 right-8 w-6 h-6 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}