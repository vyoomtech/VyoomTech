import { Mail, Phone, MapPin, ArrowUp } from "lucide-react"; 
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"; 
import { Button } from "@/components/ui/button"; 
// Replaced Twitter with X

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
    { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/vyoomtech", color: "hover:text-pink-600" }, 
    { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/vyoom-tech-24a936383/", color: "hover:text-blue-600" }, 
    { name: "X", icon: FaXTwitter, href: "https://www.x.com/vyoomtech", color: "hover:text-black" }, 
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="bg-white text-gray-700 relative overflow-hidden pt-16" 
      role="contentinfo"
      itemScope 
      itemType="https://schema.org/WPFooter"
    > 
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/path/to/subtle-light-pattern.png')] opacity-10" 
        aria-hidden="true"
      ></div> 
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8 pb-16 border-b border-gray-200"> 

          {/* Company Info */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <a href="#home" className="mb-6" aria-label="Vyoom Tech Homepage">
              <img
                src="/logo.png" 
                alt="Vyoom Tech - Future-Ready Digital Solutions Logo"
                className="h-12 w-auto object-contain" 
              />
            </a>
            
            <p className="mb-6 leading-relaxed max-w-md text-gray-600" itemProp="description"> 
              Building Future-Ready Digital Solutions. We specialize in creating innovative mobile apps, 
              websites, and AI solutions that transform businesses and deliver exceptional user experiences.
            </p>

            <address className="not-italic space-y-4" itemScope itemType="https://schema.org/Organization">
              <div className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 mr-3 text-primary" /> 
                <a 
                  href="mailto:vyoomtech@gmail.com" 
                  className="hover:text-primary transition-colors" 
                  itemProp="email"
                >
                  vyoomtech@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-3 text-primary" /> 
                <a 
                  href="tel:+917470379829" 
                  className="hover:text-primary transition-colors" 
                  itemProp="telephone"
                >
                  +91 74703 79829
                </a>
              </div>
              <div className="flex items-center text-gray-700" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="w-5 h-5 mr-3 text-primary" /> 
                <span itemProp="addressLocality">Global Services Available</span>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h2 className="text-xl font-bold font-sora text-gray-900 mb-6">Quick Links</h2>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-200 text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <section aria-label="Our Services">
            <h2 className="text-xl font-bold font-sora text-gray-900 mb-6">Services</h2>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-600 text-lg">{service}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Newsletter */}
          <section aria-label="Stay Connected">
            <h2 className="text-xl font-bold font-sora text-gray-900 mb-6">Stay Connected</h2>
            <p className="text-gray-600 mb-6">Subscribe for updates or reach out for a consultation.</p>
            <form className="space-y-4" aria-label="Newsletter Subscription">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary" 
                aria-label="Email address for newsletter"
                required
              />
              <Button variant="hero" className="w-full py-3 text-lg font-semibold" aria-label="Subscribe to newsletter">
                Subscribe
              </Button>
            </form>
            <Button 
              variant="outline" 
              className="w-full mt-4 py-3 text-lg font-semibold text-primary border-primary hover:bg-primary hover:text-white" 
              aria-label="Book a call with Vyoom Tech"
            >
              <Phone className="w-4 h-4 mr-2" /> Book a Call
            </Button>
          </section>
        </div>

        {/* Bottom Bar */}
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
                  rel="noopener noreferrer nofollow"
                  className={`text-gray-600 hover:text-primary transition-colors duration-300 ${social.color}`} 
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

      {/* Animation for Back to Top */}
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
