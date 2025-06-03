import { Button } from "./../ui/button";

export function CTASection() {
  return (
    <section className="bg-teal-600 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready for AI-powered healthcare?
        </h2>
        <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands who trust Medicare AI to improve their health journey.
          Find doctors, read reviews, and stay informed today.
        </p>
        <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg">
          Get Started Now
        </Button>
      </div>
    </section>
  );
}