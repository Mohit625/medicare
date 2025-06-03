import { Card, CardContent } from "./../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./../ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5.0,
    text: "The AI recommendations saved me so much time finding the right doctor. The app interface is intuitive and user friendly!",
    timeAgo: "2 days ago",
    avatar: "/placeholder.svg"
  },
  {
    name: "Rahul Mehta",
    rating: 4.8,
    text: "Got my hospital appointment instantly. Loved the transparency and verified reviews!",
    timeAgo: "5 days ago",
    avatar: "/placeholder.svg"
  },
  {
    name: "Aisha Khan",
    rating: 4.9,
    text: "Up-to-date disease blog keeps me informed and helps me take precautions early. Highly recommended!",
    timeAgo: "1 week ago",
    avatar: "/placeholder.svg"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            What Our Users Say
          </h2>
          <button className="text-teal-600 hover:text-teal-700 font-medium">
            All reviews
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{testimonial.rating}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {testimonial.text}
                </p>
                
                <p className="text-sm text-gray-400">
                  {testimonial.timeAgo}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 