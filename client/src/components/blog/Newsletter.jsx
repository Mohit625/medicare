import { Input } from "./../ui/input";
import { Button } from "./../ui/button";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated With Medicare AI
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Subscribe to our newsletter for a monthly roundup of top stories,
              health tips, and medical innovation updates straight to your
              inbox.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md lg:max-w-none">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/4 lg:pl-8">
            <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600">
              📧 newsletter, email, healthcare, clean, digital painting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;