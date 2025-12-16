"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const articles = [
  {
    title: "How to Do The Work That Matters",
    description: "A framework for identifying and focusing on high-leverage activities that actually move the needle.",
    category: "Productivity",
    readTime: "8 min read",
    href: "/the-work-that-matters/",
  },
  {
    title: "How to KILL Stagnation and Experience Personal HYPERGROWTH",
    description: "The three deficiencies holding you back and how to overcome them for exponential personal growth.",
    category: "Peak Performance",
    readTime: "12 min read",
    href: "/the-three-deficiencies/",
  },
  {
    title: "When in Doubt: Explore, Experiment & Build Capacity",
    description: "Why uncertainty is your greatest asset and how to use it to accelerate your growth.",
    category: "Mindset",
    readTime: "6 min read",
    href: "/explore-experiment-capacity/",
  },
];

export default function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="writing" className="py-24 sm:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-accent font-medium text-sm tracking-wide uppercase mb-4 block">
              Featured Writing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ideas worth reading
            </h2>
          </div>
          <a
            href="/blog/"
            className="text-accent hover:text-accent-light font-medium inline-flex items-center gap-2 transition-colors"
          >
            View all articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group block p-6 sm:p-8 rounded-2xl bg-background border border-border hover:border-accent/30 transition-all hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted">{article.description}</p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-card-hover flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
