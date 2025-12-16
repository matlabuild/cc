"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image/Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent p-1">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-5xl font-bold text-white">
                    SM
                  </div>
                  <p className="text-muted text-sm">Based in New Zealand 🇳🇿</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-accent font-medium text-sm tracking-wide uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              From teenage blogger to building million-dollar businesses
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I started my first blog at 14, wrote 90 articles in a year, and made
                exactly zero dollars. I thought online business was a scam.
              </p>
              <p>
                A few years later, I made a decision that changed everything: instead of
                going to university to study business, I decided to just start one. Even
                if I failed, I figured I&apos;d learn more than any degree could teach me.
              </p>
              <p>
                That decision led to EDMProd, an online course company that&apos;s now generated
                millions in revenue. Five years ago, I wrote an ebook in 30 days that made
                $100k+ profit and became the launchpad for everything.
              </p>
              <p>
                Now I&apos;m focused on helping other entrepreneurs, solopreneurs, and knowledge
                workers unlock their peak performance through my writing, newsletter, and
                coaching.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted">Years in business</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">$M+</div>
                <div className="text-sm text-muted">Revenue generated</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">1000s</div>
                <div className="text-sm text-muted">Students helped</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
