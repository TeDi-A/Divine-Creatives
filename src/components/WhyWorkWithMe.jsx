import React from 'react';
import { Target, Lightbulb, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function WhyWorkWithMe() {
  const pillars = [
    {
      icon: Target,
      title: "Strategic Design Thinking",
      desc: "Every design begins with purpose. I take time to understand your brand, your audience and what you want to achieve, ensuring each creative decision serves a clear objective."
    },
    {
      icon: Lightbulb,
      title: "Distinctive Visual Storytelling",
      desc: "I translate your brand's identity and message into compelling visuals, using thoughtful compositions, colour and typography to create designs that capture attention and leave an impression."
    },
    {
      icon: Compass,
      title: "Clear & Effective Communication",
      desc: "A beautiful design should also communicate effectively. I combine strong headlines, purposeful layouts and visual hierarchy to make your message easy to understand and difficult to overlook."
    }
  ];

  return (
    <section id="why-work-with-me" className="relative py-24 bg-teal-950/80 border-t border-teal-900/80">
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
            Why Work With Me?
          </h2>
          <p className="text-base text-offwhite-300 font-normal leading-relaxed">
            Every flyer and campaign is approached with purpose to ensure real commercial impact.
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: PREMIUM_EASE }}
                className="bg-teal-900/30 border border-teal-800/80 hover:border-gold-500/50 rounded-lg p-8 sm:p-9 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-sm bg-teal-800 border border-teal-700 flex items-center justify-center text-gold-400 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-offwhite-100 mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-offwhite-300 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
