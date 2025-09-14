"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Helmet } from "react-helmet-async";

interface ProjectBannerProps {
  title: string;
  tagline: string;
  description: string;
  link?: string;
  image?: string; // optional banner illustration if needed
}

const GradientTextHeading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2
    className="text-3xl md:text-5xl font-extrabold font-sora mb-6 leading-tight text-transparent bg-clip-text gradient-text"
    id="projects-heading"
  >
    {children}
  </h2>
);

const projectData: ProjectBannerProps[] = [
  {
    title: "Heystallers",
    tagline: "Food Discovery",
    description:
      "Build connections and share stories in a vibrant social media community.",
    link: "https://play.google.com/store/apps/details?id=com.appiwaystudios.heystallers&hl=en_IN",
    image: "/heystallers.png",
  },
  {
    title: "FlimaxAds",
    tagline: "Smart Advertising",
    description:
      "A smart advertising solution designed for businesses to maximize their reach and engagement.",
    image: "/flimaxads.png",
  },
  {
    title: "CampusWay",
    tagline: "Campus Networking",
    description:
      "Connect, collaborate, and thrive with a campus networking and management app.",
    link: "https://play.google.com/store/apps/details?id=com.appiwaystudio.campusway&hl=en_IN",
    image: "/campusway.png",
  },
  {
    title: "Travault",
    tagline: "Travel Companion",
    description:
      "Explore hidden destinations, save spots, and plan trips effortlessly.",
    link: "https://travault-web.vercel.app/",
    image: "/travault.png",
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
    <section
      className="py-20 bg-gray-50 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Our Projects | From Vision to Reality</title>
        <meta
          name="description"
          content="Discover our successful projects including Heystallers, FlimaxAds, CampusWay, and Travault. Transforming ideas into digital realities."
        />
        <meta
          name="keywords"
          content="projects, portfolio, case studies, Heystallers, FlimaxAds, CampusWay, Travault, app development, software solutions"
        />
        <meta property="og:title" content="Our Projects | From Vision to Reality" />
        <meta
          property="og:description"
          content="Showcasing our end-to-end projects like Heystallers, FlimaxAds, CampusWay, and Travault."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 text-center">
        <header>
          <GradientTextHeading>From Vision to Reality</GradientTextHeading>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            Discover how we transform ideas into successful digital realities,
            from concept to deployment and beyond.
          </p>
        </header>

        <motion.div
          ref={scrollRef}
          animate={controls}
          drag="x"
          dragElastic={0.1}
          dragConstraints={{
            left: -scrollRef.current?.scrollWidth! / 2,
            right: 0,
          }}
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
            <motion.article
              key={idx}
              whileHover={{
                scale: 1.02,
                y: -3,
                boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
              }}
              className="w-80 flex-shrink-0 bg-white dark:bg-card-dark/90 border border-white/10 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300"
              aria-label={project.title}
            >
              {/* Optional banner illustration */}
              {project.image && (
                <div className="mb-4">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.tagline}`}
                    className="w-full h-40 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              )}

              <h3 className="text-lg font-extrabold text-black dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-4">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-blue-500 font-semibold text-sm hover:underline"
                >
                  View Project →
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EndToEndProjects;
