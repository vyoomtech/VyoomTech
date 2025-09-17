import { Helmet } from "react-helmet-async";
import { Target, Eye, Heart, Users, Award, Rocket } from "lucide-react";
import { GradientTextHeading } from "../ui/gradient-text-heading";
import { GradientText } from "../ui/gradient-text";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To empower businesses with innovative and scalable digital solutions that accelerate growth, strengthen customer engagement, and create a competitive advantage in the global marketplace.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To be the most trusted partner for digital transformation, delivering future-ready solutions that redefine how businesses connect, operate, and succeed.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "Values",
      description:
        "We believe in Innovation, Quality, and Transparency. Our commitment to customer success is at the heart of everything we do, ensuring every partnership leads to long-lasting results.",
      gradient: "from-red-500 to-orange-500",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "5+",
      label: "Happy Clients",
      color: "text-blue-500",
    },
    {
      icon: Award,
      value: "10+",
      label: "Projects Delivered",
      color: "text-green-500",
    },
    {
      icon: Rocket,
      value: "3+",
      label: "Years Experience",
      color: "text-purple-500",
    },
    {
      icon: Target,
      value: "2+",
      label: "Countries Served",
      color: "text-orange-500",
    },
  ];

  return (
    <>
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>About Us - Vyoom Tech</title>
        <meta
          name="description"
          content="Discover Vyoom Tech – our mission, vision, and values in building future-ready mobile apps, websites, and AI/ML solutions for global businesses."
        />
        <meta
          name="keywords"
          content="Vyoom Tech, About Vyoom Tech, Mobile App Development, Web Development, AI Solutions, Flutter Development"
        />
        <link rel="canonical" href="https://vyoomtech.in/about" />
      </Helmet>

      {/* ✅ Structured Data (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Vyoom Tech",
          "description":
            "Vyoom Tech builds future-ready mobile apps, websites, and AI solutions. Learn about our mission, vision, values, and impact.",
          "publisher": {
            "@type": "Organization",
            "name": "Vyoom Tech",
            "url": "https://vyoomtech.in",
            "logo": "https://vyoomtech.in/logo.png",
          },
        })}
      </script>

      {/* ✅ Main Section */}
      <main
        id="about"
        className="py-20 bg-background relative overflow-hidden"
        aria-labelledby="about-heading"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-accent/5 rounded-full blur-2xl animate-pulse-slow" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <header className="text-center mb-10">
            <h1
              id="about-heading"
              className="text-5xl md:text-7xl font-extrabold font-sora mb-8 leading-tight 
                       text-transparent bg-clip-text gradient-text animate-fade-in"
            >
              Innovation. Growth. VyoomTech.
            </h1>

            <GradientText>
              <p className="leading-relaxed text-gray-600 max-w-3xl mx-auto">
                We are passionate about building digital solutions that create
                real impact. At Vyoom Tech, we blend creativity, technical
                expertise, and business insight to help companies achieve
                growth, efficiency, and long-term success.
              </p>
            </GradientText>
          </header>

          {/* Mission, Vision, Values */}
          <section
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            aria-label="Mission, Vision and Values"
          >
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="glass-card text-center group hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                    role="img"
                    aria-label={`${item.title} icon`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-2xl font-bold font-sora text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </section>

          {/* Stats Section */}
          <section
            className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl"
            aria-label="Company Statistics"
          >
            <div className="text-center mb-12">
              <GradientTextHeading>
                <h2 className="text-2xl md:text-3xl font-bold font-sora mb-4">
                  Our Impact in Numbers
                </h2>
              </GradientTextHeading>
              <p className="text-gray-600">
                Trusted by businesses worldwide to deliver exceptional digital
                solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center group hover:scale-110 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300"
                      role="img"
                      aria-label={`${stat.label} icon`}
                    >
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>

                    <div className="text-3xl md:text-4xl font-bold font-sora gradient-text mb-2">
                      {stat.value}
                    </div>

                    <div className="text-gray-600 text-sm md:text-base font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
