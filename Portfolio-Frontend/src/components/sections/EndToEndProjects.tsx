"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  link?: string;
}

const GradientTextHeading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2 className="text-3xl md:text-5xl font-extrabold font-sora mb-6 leading-tight text-transparent bg-clip-text gradient-text">
    {children}
  </h2>
);

const projectData: ProjectCardProps[] = [
  {
    title: "Heystallers",
    tagline: "Food Discovery",
    description:
      "A food-first discovery platform that helps users find hidden gems, local food stalls, and trending dishes. Unlike traditional delivery apps, Heystallers focuses on food exploration, ratings, and authentic local experiences.",
    link: "https://play.google.com/store/apps/details?id=com.appiwaystudios.heystallers&hl=en_IN",
  },
  {
    title: "FlimaxAds",
    tagline: "Smart Advertising",
    description:
      "A smart advertising solution designed for businesses to maximize their reach and engagement. FlimaxAds enables targeted campaigns, audience insights, and interactive ad formats, ensuring higher ROI for marketers.",
  },
  {
    title: "CampusWay",
    tagline: "Campus Networking",
    description:
      "A campus networking and management app built to connect students, clubs, and institutions in one ecosystem. From event management to community building, CampusWay fosters collaboration and enhances student life.",
    link: "https://play.google.com/store/apps/details?id=com.appiwaystudio.campusway&hl=en_IN",
  },
  {
    title: "Travault",
    tagline: "Travel Companion",
    description:
      "A travel companion app that lets users save spots, explore hidden destinations, and plan trips effortlessly. With features like personal notes, galleries, and community tips, Travault makes travel smarter and more memorable.",
    link: "https://travault-web.vercel.app/",
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
          className="flex items-stretch gap-6 cursor-grab"
        >
          {projectData.concat(projectData).map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.04,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
              }}
              className="w-72 flex-shrink-0 bg-card-dark/90 border border-white/10 shadow-xl rounded-2xl p-6 flex flex-col justify-between transition-all duration-300"
            >
              {/* tagline pill */}
              <span className="inline-block gradient-text text-xs font-semibold px-3 py-1 rounded-full border border-white/20 mb-3">
                {project.tagline}
              </span>

              <h3 className="text-lg font-extrabold text-white mb-3">{project.title}</h3>
              
              {/* Description with fixed height to keep uniform cards */}
              <p className="text-sm text-gray-300 mb-5 line-clamp-6 min-h-[90px]">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-blue-400 font-semibold text-sm hover:underline"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EndToEndProjects;
