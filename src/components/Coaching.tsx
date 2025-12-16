"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    title: "Productivity Systems",
    description: "Build systems that actually work for your brain and lifestyle, not against them.",
    icon: "⚡",
  },
  {
    title: "Mental Performance",
    description: "Work through the mental blocks that hold entrepreneurs back from their potential.",
    icon: "🧠",
  },
  {
    title: "Business Growth",
    description: "Leverage my decade of experience scaling online businesses from zero to millions.",
    icon: "📈",
  },
  {
    title: "Personal Leverage",
    description: "Identify your unique strengths and build systems that multiply your output.",
    icon: "🎯",
  },
];

export default function Coaching() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="coaching" className="py-24 sm:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wide uppercase mb-4 block">
            Performance Coaching
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Unlock your next level
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            I work with entrepreneurs, executives, and creators who are ready to
            break through plateaus and achieve sustainable peak performance.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-6 sm:p-8 rounded-2xl bg-background border border-border hover:border-accent/30 transition-colors group"
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Ready to transform your performance?
            </h3>
            <p className="text-muted mb-6 max-w-md mx-auto">
              Limited spots available. Apply now to see if we&apos;re a good fit.
            </p>
            <a
              href="mailto:sam@sammatla.com?subject=Coaching Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent-light transition-colors"
            >
              Apply for Coaching
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
