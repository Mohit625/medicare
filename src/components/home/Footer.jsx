import { Stethoscope, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "#" }
  ],
  services: [
    { name: "Find Doctors", href: "#" },
    { name: "Hospital Directory", href: "#" },
    { name: "Symptom Checker", href: "#" },
    { name: "Health Articles", href: "#" },
    { name: "Telemedicine", href: "#" }
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" }
  ]
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Stethoscope className="h-8 w-8 text-teal-600" />
              <span className="text-xl font-bold text-gray-900">Medicare AI</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Transforming healthcare with AI to make it more accessible, efficient, and personalized for everyone.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-teal-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-teal-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-teal-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Medicare AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">SSL Secured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}