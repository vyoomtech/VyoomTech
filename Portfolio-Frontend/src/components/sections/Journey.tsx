"use client";
import React from "react";
import { CheckCircle2, Sparkles, Award } from "lucide-react";

interface JourneyFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface JourneyCardProps {
  year: string;
  title: string;
  description: string;
  features: JourneyFeature[];
}

const journeyData: JourneyCardProps[] = [
  {
    year: "2018",
    title: "Foundation",
    description: "VyoomTech was founded with a vision to deliver innovative digital solutions.",
    features: [
      { icon: CheckCircle2, title: "Core Team", description: "A small, passionate tech team." },
      { icon: Sparkles, title: "First Ideas", description: "Exploring web & app possibilities." },
    ],
  },
  {
    year: "2020",
    title: "Expansion",
    description: "Expanded service offerings and onboarded multiple clients globally.",
    features: [
      { icon: Award, title: "Recognitions", description: "Acknowledged in tech circles." },
      { icon: Sparkles, title: "AI Solutions", description: "Started integrating AI & ML services." },
    ],
  },
  {
    year: "2023",
    title: "Innovation",
    description: "Developed end-to-end digital platforms with cutting-edge technologies.",
    features: [
      { icon: CheckCircle2, title: "Enterprise Clients", description: "Handled large-scale projects." },
      { icon: Award, title: "Excellence", description: "Delivered scalable & secure solutions." },
    ],
  },
];

const VyoomTechStory = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold font-sora mb-6 leading-tight bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
          VyoomTech Story
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Explore our journey from inception to becoming a trusted digital solutions provider.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {journeyData.map((item, idx) => (
            <div
              key={idx}
              className="w-72 bg-card-dark/80 border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="text-sm font-medium text-blue-400 mb-2">{item.year}</span>
              <h3 className="text-lg font-extrabold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 mb-4 line-clamp-3">{item.description}</p>

              <div className="space-y-2 text-left">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <feature.icon className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-0.5">{feature.title}</h4>
                      <p className="text-xs text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VyoomTechStory;
