import React from 'react';
import { portfolioManifest } from '../data/portfolioData';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function Services() {
  const { services } = portfolioManifest;

  return (
    <section id="services" className="relative py-24 bg-teal-950 border-t border-teal-900/80">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="max-w-2xl mb-14 space-y-3"
        >
          <h2 className="font-display text-3xl sm:text-5xl text-offwhite-100 font-bold tracking-tight">
            Services
          </h2>
          <p className="text-base text-offwhite-300 font-normal leading-relaxed">
            Here is what I design for brands.
          </p>
        </motion.div>

        {/* Services Grid (4 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="bg-teal-900/30 border border-teal-800/80 hover:border-gold-500/50 rounded-lg p-7 sm:p-8 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-teal-800/60 pb-4">
                  <span className="font-display text-2xl font-bold text-gold-500">
                    {service.number}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-offwhite-400 font-medium">
                    {service.tagline}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-offwhite-100 font-semibold">
                  {service.title}
                </h3>

                <p className="text-sm text-offwhite-300 leading-relaxed font-normal">
                  {service.description}
                </p>

                <div className="pt-2 grid grid-cols-2 gap-2">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-offwhite-300">
                      <Check className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
