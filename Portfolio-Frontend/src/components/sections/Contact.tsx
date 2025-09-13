import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const services = [
    "Android App Development",
    "Flutter App Development",
    "Website Development",
    "AI & ML Solutions",
    "Custom Development",
    "Consultation",
  ];
  const role = [
    "Technical Lead",
    "Non-Technical Lead",
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "vyoomtech@gmail.com",
      href: "mailto:info@vyoomtech.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 74703-79829",
      href: "tel:+1234567890",
      description: "Mon-Sat from 8am to 10pm",
    },
    {
      icon: MapPin,
      title: "Global Services",
      value: "Worldwide",
      href: "#",
      description: "We serve clients globally",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-12 bg-dark-section relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-3xl md:text-5xl font-bold font-sora text-card-dark-foreground mb-6"
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can help
            bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="glass-card bg-card-dark/50 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-sora text-card-dark-foreground mb-2">
                        {info.title}
                      </h3>
                      <a
                        href={info.href}
                        className="text-primary hover:text-primary-glow font-medium transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                      <p className="text-gray-400 text-sm mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button
                variant="glass"
                className="w-full justify-start"
                aria-label="Schedule a consultation call"
              >
                <Calendar className="mr-3 w-4 h-4" />
                Schedule a Call
              </Button>

              <Button
                variant="glass"
                className="w-full justify-start"
                aria-label="Start a live chat"
              >
                <MessageCircle className="mr-3 w-4 h-4" />
                Live Chat
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="glass-card bg-card-dark/50 border border-white/10"
            >
              <h3 className="text-2xl font-bold font-sora text-card-dark-foreground mb-6">
                Send us a Message
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-card-dark-foreground mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-card-dark-foreground placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-card-dark-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-card-dark-foreground placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-card-dark-foreground mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-card-dark-foreground placeholder-gray-400"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-card-dark-foreground mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-card-dark-foreground"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-card-dark text-card-dark-foreground"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-card-dark-foreground mb-2"
                  >
                    Role
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-card-dark-foreground"
                  >
                    <option value="">Select a role</option>
                    {role.map((role) => (
                      <option
                        key={role}
                        value={role}
                        className="bg-card-dark text-card-dark-foreground"
                      >
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-card-dark-foreground mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-card-dark-foreground placeholder-gray-400 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
