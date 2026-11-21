import React from 'react';
import { Target, Lightbulb, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function About() {
  const steps = [
    {
      num: "01",
      icon: Target,
      title: "Strategic Thinking",
      desc: "Understanding the product, the audience, and the exact action the design needs to trigger."
    },
    {
      num: "02",
      icon: Lightbulb,
      title: "Visual Storytelling",
      desc: "Developing a clear visual idea and color language that feels authentic to your brand."
    },
    {
      num: "03",
      icon: Compass,
      title: "Effective Communication",
      desc: "Structuring clean layouts and clear headlines so your message is understood in seconds."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-teal-950 border-t border-teal-900/80">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Asymmetrical Intro: Editorial Text (Left) & Brand Visual (Right) - Reveal Independently */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="lg:col-span-7 space-y-4"
          >
            <h2 className="font-display text-3xl sm:text-5xl text-offwhite-100 font-bold tracking-tight">
              About Divine Creatives
            </h2>
            <p className="text-base sm:text-lg text-offwhite-300 font-normal leading-relaxed">
              I create visual assets that help brands communicate clearly and sell effectively. Rather than using generic templates, every flyer and advertising campaign is crafted with intention to ensure your message is seen, trusted, and acted upon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.18, ease: PREMIUM_EASE }}
            className="lg:col-span-5"
          >
            <div className="bg-teal-900/40 border border-teal-800 rounded-lg p-6 sm:p-7 flex items-center gap-5">
              <div className="w-16 h-16 rounded-sm bg-teal-950 border border-teal-700/80 p-3 flex-shrink-0 flex items-center justify-center">
                <img
                  src="/logo-transparent.png"
                  alt="Divine Creatives Monogram"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-400">
                  Creative Philosophy
                </span>
                <p className="text-sm font-display font-semibold text-offwhite-100">
                  Crafted with Precision. Delivered with Purpose.
                </p>
                <p className="text-xs text-offwhite-400">
                  Graphic design & visual marketing tailored to your market.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Process Flowchart */}
        <div className="pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: PREMIUM_EASE }}
                  className="relative"
                >
                  <div className="h-full bg-teal-900/30 border border-teal-800/80 hover:border-gold-500/50 rounded-lg p-7 transition-colors flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-10 h-10 rounded-sm bg-teal-800 border border-teal-700 flex items-center justify-center text-gold-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-display text-xs font-bold text-gold-500 font-mono">
                          STEP {step.num}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-bold text-offwhite-100 mb-2">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-offwhite-300 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Flowchart Arrow for Desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-teal-800 border border-teal-700 items-center justify-center text-gold-400">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
