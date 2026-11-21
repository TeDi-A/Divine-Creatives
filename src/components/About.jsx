import React from 'react';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-teal-950 border-t border-teal-900/80">
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="space-y-4"
        >
          <h2 className="font-display text-3xl sm:text-5xl text-offwhite-100 font-bold tracking-tight">
            About Divine Creatives
          </h2>
          <p className="text-base sm:text-lg text-offwhite-300 font-normal leading-relaxed">
            I create visual assets that help brands communicate clearly and sell effectively. Rather than using generic templates, every flyer and advertising campaign is crafted with intention to ensure your message is seen, trusted, and acted upon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
