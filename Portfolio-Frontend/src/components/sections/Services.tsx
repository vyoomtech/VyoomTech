"use client";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaChartLine,
  FaShoppingCart,
  FaSearch,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "End-to-End Software Solutions",
    tagline: "Your all-in-one digital partner",
    description:
      "We deliver scalable software solutions from concept to deployment, designed to transform businesses.",
    hero: true,
  },
  {
    icon: FaMobileAlt,
    title: "Android App Development",
    tagline: "Native Android applications",
    description:
      "Native Android applications with powerful features, smooth performance, and stunning designs that delight users and help businesses grow.\n\nKey Features:\n- Tailor-made apps for your business needs\n- Seamless performance & reliability\n- Engaging, user-friendly design\n- Hassle-free Play Store launch & support",
  },
  {
    icon: FaChartLine,
    title: "Flutter App Development",
    tagline: "Cross-platform mobile apps",
    description:
      "Cross-platform mobile apps built with a single codebase for iOS and Android, saving time and cost without compromising on quality.\n\nKey Features:\n- One app for both iOS & Android\n- Faster development, quicker launch\n- Cost-effective without losing quality\n- Consistent and smooth user experience",
  },
  {
    icon: FaShoppingCart,
    title: "Website Development",
    tagline: "Modern & responsive websites",
    description:
      "Modern, responsive websites that not only look amazing but also rank well on search engines and drive customer engagement.\n\nKey Features:\n- Custom designs that reflect your brand\n- Fast, secure, and mobile-friendly\n- SEO-ready to boost visibility\n- Scalable tech for future growth",
  },
  {
    icon: FaSearch,
    title: "AI & ML Solutions (Coming Soon)",
    tagline: "Intelligent automation & analytics",
    description:
      "Smart AI & ML solutions that automate processes, uncover insights, and give your business a competitive edge in the digital age.\n\nKey Features:\n- Intelligent automation for efficiency\n- Data-driven insights & predictions\n- Advanced analytics for better decisions\n- Scalable AI models tailored to your goals",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden bg-black"
      aria-labelledby="services-heading"
    >
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Our Services | Scalable Software & App Development</title>
        <meta
          name="description"
          content="Explore our services: end-to-end software development, Android apps, Flutter apps, responsive websites, and AI/ML solutions to grow your business."
        />
        <meta
          name="keywords"
          content="software solutions, android app development, flutter apps, website development, AI, ML, digital solutions"
        />
        <meta property="og:title" content="Our Services | Software Solutions" />
        <meta
          property="og:description"
          content="We provide end-to-end digital services including software, mobile apps, websites, and AI solutions."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-14">
          <h2
            id="services-heading"
            className="text-5xl md:text-6xl font-extrabold mb-4 text-[#3b82f6]"
          >
            Our Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From concept to execution, we design and build digital solutions
            that transform businesses and delight users.
          </p>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHero = service.hero;

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                  isHero
                    ? "lg:col-span-2 p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "p-6 flex flex-col bg-white/10 backdrop-blur-md text-gray-200"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl mb-5 ${
                    isHero
                      ? "bg-gradient-to-r from-blue-500 to-purple-600"
                      : "bg-gradient-to-r from-indigo-500 to-cyan-500"
                  }`}
                  role="img"
                  aria-label={service.title + " icon"}
                >
                  <Icon className="text-white w-7 h-7" />
                </div>

                {/* Text */}
                <h3
                  className={`font-bold ${
                    isHero ? "text-2xl mb-4" : "text-xl mb-2"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-sm italic mb-3">{service.tagline}</p>
                <p className="text-sm leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
