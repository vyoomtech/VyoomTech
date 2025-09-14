import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Journey from "@/components/sections/Journey";
import EndToEndProjects from "@/components/sections/EndToEndProjects";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vyoom Tech",
    description: "Building Future-Ready Digital Solutions",
    url: "https://vyoomtech.com", // ✅ put your real domain here
    logo: "https://vyoomtech.com/favicon.ico",
    sameAs: [
      "https://www.linkedin.com/company/vyoomtech",
      "https://www.instagram.com/vyoomtech",
    ],
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
          description: "Modern responsive website and web application development",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>
          Vyoom Tech - Building Future-Ready Digital Solutions | Mobile Apps & Web Development
        </title>
        <meta
          name="description"
          content="Vyoom Tech specializes in Android app development, Flutter development, website creation, and AI/ML solutions. Transform your business with our cutting-edge digital services."
        />
        <meta property="og:title" content="Vyoom Tech - Building Future-Ready Digital Solutions" />
        <meta
          property="og:description"
          content="Transform your business with Android, Flutter, Web, and AI/ML development services from Vyoom Tech."
        />
        <meta property="og:image" content="https://vyoomtech.com/og-image.jpg" />
        <meta property="og:url" content="https://vyoomtech.com" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Sections */}
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
