import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./../ui/avatar";

const testimonials = [
  {
    id: "1",
    patientName: "John D.",
    patientImage: "/placeholder.svg",
    doctorName: "Dr. Sarah Johnson",
    rating: 5.0,
    review: "I was struggling to find a neurologist who could help with my migraines. Through Medicare AI, I found Dr. Sarah Johnson who correctly diagnosed my condition and provided effective treatment. The platform made booking appointments so easy!",
  },
  {
    id: "2",
    patientName: "Michael S.",
    patientImage: "/placeholder.svg",
    doctorName: "Dr. Michael Chen",
    rating: 4.5,
    review: "Dr. Michael Chen is an exceptional orthopedic surgeon. After years of knee pain, he recommended a minimally invasive procedure that has completely changed my life. I'm now back to hiking and enjoying activities I thought were behind me.",
  },
];

const Testimonials = () => {
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

  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real experiences from patients who found the right healthcare professionals through
            our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-gray-300 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {testimonial.review}
                  </p>
                </div>

                {/* Patient Info */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.patientImage} alt={testimonial.patientName} />
                    <AvatarFallback className="bg-gray-200 text-gray-700">
                      {testimonial.patientName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.patientName}</p>
                    <p className="text-sm text-gray-600">Patient of {testimonial.doctorName}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;