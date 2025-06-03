import { Button } from "./../ui/button";
import { Edit, Mail } from "lucide-react";

const BlogHero = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Medicare Insights & Stories
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Read the latest articles, expert healthcare tips, patient stories,
              and medical innovation news from our trusted team and guest
              authors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                <Edit className="h-4 w-4 mr-2" />
                Submit Your Story
              </Button>
              <Button variant="outline" className="px-6 py-3">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-gray-100 rounded-lg p-6 text-sm text-gray-600">
              🏥 healthcare blog, modern illustration, doctors writing, digital
              magazine, blue white, digital painting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;