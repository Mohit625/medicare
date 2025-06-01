import { Card, CardContent } from "./../ui/card";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "Rising Flu Cases: What You Should Know",
    description: "This season has seen an unexpected spike in flu cases. Learn symptoms, prevention, and when to seek help...",
    date: "May 20, 2025",
    image: "https://i.pinimg.com/736x/ee/72/73/ee72733ad88320ab09215d3b1fe90c5b.jpg",
    category: "Disease Trends"
  },
  {
    title: "AI in Early Disease Detection",
    description: "Discover how AI models are now identifying disease outbreaks faster than ever and what this means for public health.",
    date: "May 18, 2025",
    image: "https://i.pinimg.com/736x/63/34/ab/6334aba8652067b2dbf1ccaeb59297d0.jpg",
    category: "AI Healthcare"
  },
  {
    title: "Dengue Prevention: Tips & Myths",
    description: "As dengue cases rise, understand the best ways to protect your family and debunk common myths circulating online.",
    date: "May 10, 2025",
    image: "https://i.pinimg.com/736x/80/8d/14/808d14d0c0ccdd105e4a34c40da37591.jpg",
    category: "Prevention"
  }
];

export function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Latest Disease Insights
          </h2>
          <button className="text-teal-600 hover:text-teal-700 font-medium">
            View all blogs
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
            <div className="relative h-48 w-full">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </CardContent>
          </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 