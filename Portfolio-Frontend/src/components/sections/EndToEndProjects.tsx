"use client";
import React, { useEffect, useRef } from "react";
import { Sparkles, CheckCircle2, Award } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

interface ProjectFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  tagline: string;
  description: string;
  features: ProjectFeature[];
}

const GradientTextHeading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2
    className="text-3xl md:text-5xl font-extrabold font-sora mb-6 leading-tight 
               text-transparent bg-clip-text gradient-text"
  >
    {children}
  </h2>
);

const projectData = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1556740758-94420824b010?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "E-commerce Platform Project",
    title: "NextGen E-commerce Platform",
    tagline: "Retail & Consumer Goods",
    description:
      "Robust and scalable e-commerce platform with seamless shopping and inventory management.",
    features: [
      { icon: CheckCircle2, title: "Intuitive UX", description: "Effortless navigation." },
      { icon: Sparkles, title: "AI Recommendations", description: "Personalized suggestions." },
      { icon: Award, title: "Scalable Cloud", description: "Resilient architecture." },
    ],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1519389950473-47ba0fd0e158?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "FinTech Solution Project",
    title: "Secure FinTech Portal",
    tagline: "Financial Services",
    description:
      "Secure and compliant portal for seamless transactions and data management.",
    features: [
      { icon: CheckCircle2, title: "Bank-Grade Security", description: "MFA & encryption." },
      { icon: Sparkles, title: "Real-time Analytics", description: "Interactive dashboards." },
      { icon: Award, title: "Compliance", description: "Industry standards adherence." },
    ],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1521737711867-ee1d8841a4a6?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "Healthcare Management System",
    title: "Digital Health Platform",
    tagline: "Healthcare & Wellness",
    description:
      "Integrated platform to streamline patient management, appointments, and records.",
    features: [
      { icon: CheckCircle2, title: "Patient-Centric", description: "Easy access to health info." },
      { icon: Sparkles, title: "Telemedicine", description: "Virtual consultations." },
      { icon: Award, title: "HIPAA Compliant", description: "Secure patient data." },
    ],
  },
];

const EndToEndProjects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const totalWidth = scrollRef.current?.scrollWidth || 0;
    const containerWidth = scrollRef.current?.offsetWidth || 0;
    const distance = totalWidth - containerWidth;

    const loopAnimation = async () => {
      while (true) {
        await controls.start({
          x: -distance,
          transition: { duration: 30, ease: "linear" },
        });
        await controls.set({ x: 0 });
      }
    };
    loopAnimation();
  }, [controls]);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* 🔹 Same gradient as About section */}
        <GradientTextHeading>From Vision to Reality</GradientTextHeading>

        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Discover how we transform ideas into successful digital realities,
          from concept to deployment and beyond.
        </p>

        <motion.div
          ref={scrollRef}
          animate={controls}
          drag="x"
          dragElastic={0.1}
          dragConstraints={{ left: -scrollRef.current?.scrollWidth! / 2, right: 0 }}
          onDragStart={() => controls.stop()}
          onDragEnd={() => {
            const totalWidth = scrollRef.current?.scrollWidth || 0;
            const containerWidth = scrollRef.current?.offsetWidth || 0;
            const distance = totalWidth - containerWidth;
            controls.start({
              x: -distance,
              transition: { duration: 30, ease: "linear" },
            });
          }}
          className="flex items-center gap-6 cursor-grab"
        >
          {projectData.concat(projectData).map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
              }}
              className="w-72 flex-shrink-0 bg-card-dark/80 border border-white/10 shadow-lg rounded-2xl p-5 flex flex-col justify-between transition-all duration-300"
            >
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="rounded-xl object-cover w-full h-44 shadow-md mb-3"
              />
              <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
                {project.tagline}
              </span>
              <h3 className="text-lg font-extrabold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-3 line-clamp-3">{project.description}</p>

              <div className="space-y-1 text-left">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <feature.icon className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-0.5">{feature.title}</h4>
                      <p className="text-xs text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EndToEndProjects;
