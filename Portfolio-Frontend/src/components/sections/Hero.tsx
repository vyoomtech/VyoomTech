"use client";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "/logo.png"; // Ensure this path is correct
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async"; // ✅ SEO meta tags

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Vyoom Tech | Digital Innovation & AI Solutions</title>
        <meta
          name="description"
          content="Vyoom Tech specializes in mobile apps, modern websites, and AI-powered solutions. Transform your business with innovation and scale globally."
        />
        <meta
          name="keywords"
          content="Vyoom Tech, mobile app development, website development, AI solutions, digital innovation, Flutter, Android development"
        />
        <meta property="og:title" content="Vyoom Tech | Digital Innovation" />
        <meta
          property="og:description"
          content="Future-ready mobile apps, websites, and AI solutions to help your business scale globally."
        />
        <meta property="og:image" content={logoImage} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.vyoomtech.com/" />
      </Helmet>

      <section
        id="home"
        className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden py-8 md:py-16"
        aria-labelledby="hero-heading"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob" />
          <div className="absolute top-[30%] right-[10%] w-80 h-80 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-[20%] left-[20%] w-64 h-64 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000" />
        </div>

        {/* Content */}
        <div className="relative mt-12 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
            {/* Tagline */}
            <div
              className="inline-flex mt-6 items-center justify-center w-full max-w-sm px-3 py-2 rounded-full mb-6 animate-fade-in border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-md"
              role="note"
              aria-label="Tagline: Building Future-Ready Digital Solutions"
            >
              <Sparkles
                className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-2"
                aria-hidden="true"
              />
              <span className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200">
                Building Future-Ready Digital Solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="w-full text-6xl md:text-7xl lg:text-8xl font-extrabold font-sora mb-4 leading-tight animate-fade-in bg-gradient-to-r from-blue-500 via-purple-500 to-gray-700 text-transparent bg-clip-text"
            >
              Digital Innovation
            </h1>

            {/* Subtitle */}
            <p
              className="w-full max-w-3xl text-base md:text-lg mb-6 mx-auto leading-relaxed animate-fade-in bg-gradient-to-r from-gray-700 via-purple-500 to-blue-500 dark:from-gray-300 dark:via-purple-300 dark:to-blue-300 text-transparent bg-clip-text"
              style={{ animationDelay: "0.4s" }}
            >
              We create cutting-edge mobile apps, modern websites, and powerful
              AI solutions. Our mission is to transform businesses with
              innovation, helping you scale globally with digital-first
              strategies.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in mb-6"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                variant="hero"
                size="default"
                className="text-base px-6 py-3 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                aria-label="Start your project with Vyoom Tech"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>

              <Button
                variant="outline"
                size="default"
                className="text-base px-6 py-3 h-auto border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 shadow-md"
                aria-label="Watch demo video"
              >
                <Play className="mr-2 w-4 h-4" aria-hidden="true" />
                Watch Demo
              </Button>
            </div>

            {/* Stats Section */}
            <div
              ref={ref}
              className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 mt-8 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
              role="list"
              aria-label="Business statistics"
            >
              {[
                { value: 10, suffix: "+", label: "Projects Delivered" },
                { value: 5, suffix: "+", label: "Happy Clients" },
                { value: 3, suffix: "+", label: "Years Experience" },
                { value: 2, suffix: "+", label: "Countries Served" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group"
                  role="listitem"
                  aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                >
                  <div className="text-3xl md:text-4xl font-extrabold font-sora mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-300 group-hover:scale-110 transition-transform duration-300">
                    {inView ? (
                      <CountUp
                        end={stat.value}
                        duration={2}
                        suffix={stat.suffix}
                      />
                    ) : (
                      "0"
                    )}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce-custom"
          aria-hidden="true"
        >
          <div className="w-5 h-8 border-2 border-indigo-500 dark:border-indigo-400 rounded-full flex justify-center p-0.5">
            <div className="w-1 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-scroll-dot" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
