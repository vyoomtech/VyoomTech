import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-20 bg-black text-white"
      aria-labelledby="journey-heading"
    >
      {/* SEO Metadata */}
      <Helmet>
        <title>Our Journey | Vyoom Tech</title>
        <meta
          name="description"
          content="Discover Vyoom Tech's journey from a small passionate team to a global technology partner. We deliver mobile apps, responsive websites, and AI-powered solutions."
        />
        <meta
          name="keywords"
          content="Vyoom Tech Journey, digital transformation, mobile apps, AI solutions, business technology"
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <header>
          <motion.h2
            id="journey-heading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            📖 Our <span className="text-blue-500">Journey</span>
          </motion.h2>
        </header>

        <article>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg leading-relaxed mb-6"
          >
            Vyoom Tech started with a vision: to bridge the gap between
            technology and business needs. From a small team of passionate
            developers, we’ve grown into a global partner for businesses
            worldwide.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base leading-relaxed"
          >
            We specialize in mobile apps, responsive websites, and AI-powered
            solutions that don’t just solve today’s challenges but also
            anticipate tomorrow’s opportunities. Our relentless focus on
            excellence and client satisfaction drives us to keep innovating,
            evolving, and leading with technology.
          </motion.p>
        </article>
      </div>
    </section>
  );
}
