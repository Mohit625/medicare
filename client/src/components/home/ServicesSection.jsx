import { Card, CardContent } from "./../ui/card";
import { Users, Calendar, Activity, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Doctor Matching",
    description: "Our AI analyzes your symptoms and medical history to connect you with the most suitable specialists."
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Book appointments instantly with our AI optimization that reduces wait times and matches your availability."
  },
  {
    icon: Activity,
    title: "Health Tracking",
    description: "Monitor your vitals, medications, and progress with personalized dashboards and timely insights."
  },
  {
    icon: Stethoscope,
    title: "Symptom Checker",
    description: "Get preliminary assessments and guidance on your symptoms before consulting a doctor."
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our AI-Powered Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience healthcare reimagined with our cutting-edge AI solutions designed to make
            healthcare more accessible, personalized, and efficient.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                  <service.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}