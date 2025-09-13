import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Journey from "@/components/sections/Journey";
import EndToEndProjects from "@/components/sections/EndToEndProjects";

const Index = () => {
  useEffect(() => {
    // Update document title and meta description for SEO
    document.title =
      "Vyoom Tech - Building Future-Ready Digital Solutions | Mobile Apps & Web Development";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Vyoom Tech specializes in Android app development, Flutter development, website creation, and AI/ML solutions. Transform your business with our cutting-edge digital services."
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vyoom Tech",
      description: "Building Future-Ready Digital Solutions",
      url: window.location.origin,
      logo: `${window.location.origin}/favicon.ico`,
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-234-567-8900",
        contactType: "customer service",
        email: "info@vyoomtech.com",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Global",
        addressCountry: "Worldwide",
      },
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Android App Development",
            description: "Native Android application development services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flutter App Development",
            description: "Cross-platform mobile app development using Flutter",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description:
              "Modern responsive website and web application development",
          },
        },
      ],
    };

    // Add structured data to document head
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data on unmount
      const existingScript = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <EndToEndProjects />
      <Journey />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
