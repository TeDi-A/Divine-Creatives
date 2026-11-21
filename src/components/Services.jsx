import React from 'react';
import { portfolioManifest } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function Services() {
  const { services } = portfolioManifest;

  return (
    <section id="services" className="relative py-24 bg-teal-950 border-t border-teal-900/80">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header: Centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="max-w-2xl mx-auto mb-14 text-center space-y-3"
        >
          <h2 className="font-display text-3xl sm:text-5xl text-offwhite-100 font-bold tracking-tight">
            Services
          </h2>
          <p className="text-base text-offwhite-300 font-normal leading-relaxed">
            Here is what I design for brands.
          </p>
        </motion.div>

        {/* Services Grid: Spacious 2-Column Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: PREMIUM_EASE,
              }}
              className="bg-teal-900/30 border border-teal-800/80 hover:border-gold-500/50 rounded-lg p-8 sm:p-10 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 01 — UNDERSTATED NUMBERED LABEL */}
                <span className="block font-mono text-xs uppercase tracking-wider text-gold-500 font-semibold">
                  {service.label}
                </span>

                {/* DOMINANT SERVICE TITLE */}
                <h3 className="font-display text-2xl sm:text-3xl text-offwhite-100 font-bold tracking-tight">
                  {service.title}
                </h3>

                {/* CONCISE DESCRIPTION */}
                <p className="text-sm text-offwhite-300 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* COMPACT OFFERINGS LINE SEPARATED BY DOTS */}
                <div className="pt-2">
                  <p className="text-xs sm:text-sm text-offwhite-400 font-medium tracking-wide">
                    {service.offerings}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
