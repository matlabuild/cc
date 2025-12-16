"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 rounded-full">
            Writer • Entrepreneur • Coach
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Helping you achieve{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
            peak performance
          </span>{" "}
          in work & life
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I write about productivity, personal leverage, and building audience-first
          businesses. Join thousands of entrepreneurs leveling up every week.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#newsletter"
            className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-all hover:scale-105"
          >
            Subscribe to Work Notes
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 border border-border rounded-full font-medium hover:bg-card-hover transition-all hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted mb-4">Trusted by readers from</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted/60">
            <span className="text-lg font-semibold">Google</span>
            <span className="text-lg font-semibold">Meta</span>
            <span className="text-lg font-semibold">Stripe</span>
            <span className="text-lg font-semibold">Shopify</span>
            <span className="text-lg font-semibold">Notion</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-muted rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
