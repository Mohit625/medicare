import { Button } from "./../ui/button";

export function HeroSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Health, Powered by{" "}
              <span className="text-teal-600">AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with top doctors, find trusted hospitals, get real-world
              reviews, and stay informed with the latest disease trends & insights.
              All powered by Medicare AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/doctor-login">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8">
                Doctor Login
              </Button>
              </a>
              <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-xl transform rotate-3">
                <div className="w-48 h-32 bg-gradient-to-br from-teal-200 to-blue-200 rounded-lg flex items-center justify-center">
                  <div className="text-teal-600">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 8h2v8H4V8zm3 0h2v8H7V8zm3 0h2v8h-2V8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 