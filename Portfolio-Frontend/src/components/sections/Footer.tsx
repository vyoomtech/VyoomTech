import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Android Development",
    "Flutter Development",
    "Website Development",
    "AI & ML Solutions",
    "Custom Development",
    "Consultation",
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-900" }, // Adjusted hover color
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" }, // Adjusted hover color
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-500" }, // Adjusted hover color
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-700 relative overflow-hidden pt-16" role="contentinfo"> 
      {/* Changed background and default text color */}

      {/* Subtle background overlay/texture - adjust or remove if not suitable for white background */}
      {/* If your pattern is dark, you might need to adjust its opacity or use a light pattern. */}
      <div className="absolute inset-0 bg-[url('/path/to/subtle-light-pattern.png')] opacity-10" aria-hidden="true"></div> 
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8 pb-16 border-b border-gray-200"> 
          {/* Adjusted border color */}

          {/* Company Info - Logo and Description */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <a href="#home" className="mb-6">
              <img
                src="/logo.png" 
                alt="Vyoom Tech Logo"
                className="h-12 w-auto object-contain" 
              />
            </a>
            
            <p className="mb-6 leading-relaxed max-w-md text-gray-600"> 
              {/* Adjusted text color */}
              Building Future-Ready Digital Solutions. We specialize in creating innovative mobile apps, 
              websites, and AI solutions that transform businesses and deliver exceptional user experiences.
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 mr-3 text-primary" /> 
                {/* Adjusted icon color */}
                <a href="mailto:info@vyoomtech.com" className="hover:text-primary transition-colors"> 
                  {/* Adjusted hover color */}
                  info@vyoomtech.com
                </a>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-3 text-primary" /> 
                {/* Adjusted icon color */}
                <a href="tel:+1234567890" className="hover:text-primary transition-colors"> 
                  {/* Adjusted hover color */}
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-3 text-primary" /> 
                {/* Adjusted icon color */}
                <span>Global Services Available</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-sora text-gray-900 mb-6"> 
              {/* Adjusted heading color */}
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {/* Adjusted text and hover colors */}
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-200 text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold font-sora text-gray-900 mb-6"> 
              {/* Adjusted heading color */}
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-600 text-lg"> 
                    {/* Adjusted text color */}
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact CTA */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-sora text-gray-900 mb-6"> 
              {/* Adjusted heading color */}
              Stay Connected
            </h3>
            <p className="text-gray-600 mb-6"> 
              {/* Adjusted text color */}
              Subscribe for updates or reach out for a consultation.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary" 
                // Adjusted input styling for white background
                aria-label="Email address for newsletter"
              />
              <Button variant="hero" className="w-full py-3 text-lg font-semibold">
                Subscribe
              </Button>
            </form>
            <Button variant="outline" className="w-full mt-4 py-3 text-lg font-semibold text-primary border-primary hover:bg-primary hover:text-white"> 
              {/* Adjusted colors for outline button */}
              <Phone className="w-4 h-4 mr-2" /> Book a Call
            </Button>
          </div>
        </div>

        {/* Bottom Bar - Copyright and Social Links */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} Vyoom Tech. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 hover:text-primary transition-colors duration-300 ${social.color}`} 
                  // Adjusted text and hover colors
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        variant="hero"
        size="icon"
        className="fixed bottom-6 right-6 shadow-lg hover:shadow-xl z-50 rounded-full w-12 h-12 flex items-center justify-center animate-bounce-slow"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      {/* Animation for Back to Top Button */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
