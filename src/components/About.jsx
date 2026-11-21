import React from 'react';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function About() {
  const pillars = [
    {
      title: "Strategic Thinking",
      desc: "I take time to understand your brand, your audience and what you want to achieve before deciding how the design should look.",
    },
    {
      title: "Creative Visuals",
      desc: "Give your brand a look people notice and remember. I create story telling designs that help your products and services stand out.",
    },
    {
      title: "Clear Communication",
      desc: "Make it easy for customers to understand what you offer. I present your message clearly, so the important details don't get lost.",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-teal-950 border-t border-teal-900/80">
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header: Centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="max-w-3xl mx-auto mb-14 text-center space-y-3"
        >
          <h2 className="font-display text-3xl sm:text-5xl text-offwhite-100 font-bold tracking-tight">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-offwhite-300 font-normal leading-relaxed">
            I create visuals that help brands communicate clearly, sell effectively and get noticed.
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: PREMIUM_EASE }}
              className="bg-teal-900/30 border border-teal-800/80 hover:border-gold-500/40 rounded-lg p-7 sm:p-8 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-gold-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-offwhite-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
