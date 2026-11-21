import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function Hero() {
  const heroShowcase = [
    {
      brand: "GBAMBITES",
      category: "Campaign",
      tag: "Snacks",
      image: "/Portfolio Assets/Campaigns/GBAMBITES/Artboard4.png",
      title: "Spice up snack time",
    },
    {
      brand: "Relaya",
      category: "Campaign",
      tag: "Logistics",
      image: "/Portfolio Assets/Campaigns/Relaya/Artboard1.png",
      title: "Packages closer to people",
    },
    {
      brand: "BrightHomes",
      category: "Campaign",
      tag: "Cleaning",
      image: "/Portfolio Assets/Campaigns/BrightHomes/Artboard1.png",
      title: "A Cleaner Home. A Lighter You.",
    },
    {
      brand: "EasyWash",
      category: "Campaign",
      tag: "Laundry",
      image: "/Portfolio Assets/Campaigns/EasyWash/Artboard2.png",
      title: "Show up sharp. Every time.",
    },
    {
      brand: "Banana Bliss",
      category: "Flyer",
      tag: "Bakery",
      image: "/Portfolio Assets/Flyers/Banana_Bliss.png",
      title: "Every Slice, A Little Bliss",
    },
  ];

  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-teal-700/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: PREMIUM_EASE }}
              className="font-display text-4xl sm:text-6xl lg:text-[64px] leading-[1.1] text-offwhite-100 font-bold tracking-tight"
            >
              Designs that <br />
              Communicate, <br />
              Engage and <span className="text-gold-400">Sell.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: PREMIUM_EASE }}
              className="text-base sm:text-lg text-offwhite-300 font-normal leading-relaxed max-w-xl"
            >
              I create clean, purposeful graphic design and visual marketing campaigns that help brands stand out, connect with customers, and drive sales.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease: PREMIUM_EASE }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-gold-500 hover:bg-gold-400 text-teal-950 font-bold text-xs tracking-wider uppercase transition-colors shadow-lg"
              >
                <span>View Services</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm border border-teal-700 hover:border-gold-500 bg-teal-900/60 hover:bg-teal-900 text-offwhite-100 font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400" />
              </a>
            </motion.div>

            {/* Concise Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4, ease: PREMIUM_EASE }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-teal-800/80 max-w-md"
            >
              <div>
                <p className="font-display text-2xl sm:text-3xl text-gold-400 font-bold">28+</p>
                <p className="text-xs text-offwhite-400 tracking-wide mt-0.5 uppercase font-medium">
                  Designs Made
                </p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl text-offwhite-100 font-bold">5</p>
                <p className="text-xs text-offwhite-400 tracking-wide mt-0.5 uppercase font-medium">
                  Campaigns
                </p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl text-gold-400 font-bold">100%</p>
                <p className="text-xs text-offwhite-400 tracking-wide mt-0.5 uppercase font-medium">
                  Original Work
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Preview Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: PREMIUM_EASE }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-lg p-3 bg-teal-900/40 border border-teal-800 shadow-xl">
                
                {/* Active Showcase Artboard */}
                <div className="relative aspect-[4/5] rounded overflow-hidden shadow-inner group">
                  <img
                    src={heroShowcase[activeCard].image}
                    alt={heroShowcase[activeCard].title}
                    className="w-full h-full object-cover"
                  />

                  {/* Top tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded bg-teal-950/85 backdrop-blur-md text-gold-400 text-xs font-semibold uppercase">
                      {heroShowcase[activeCard].brand}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 text-offwhite-200 text-[11px] font-medium">
                      {heroShowcase[activeCard].category}
                    </span>
                  </div>

                  {/* Bottom bar */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-teal-950 via-teal-950/80 to-transparent flex items-end justify-between">
                    <div>
                      <p className="text-[11px] text-gold-400 uppercase tracking-wider font-medium">
                        {heroShowcase[activeCard].tag}
                      </p>
                      <h4 className="text-sm font-semibold text-offwhite-100 font-display">
                        {heroShowcase[activeCard].title}
                      </h4>
                    </div>
                    <a
                      href="#work"
                      className="p-1.5 rounded bg-gold-500 hover:bg-gold-400 text-teal-950 transition-colors"
                      title="View in portfolio"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {heroShowcase.map((item, idx) => (
                    <button
                      key={item.brand}
                      onClick={() => setActiveCard(idx)}
                      className={`relative aspect-[4/5] rounded overflow-hidden border-2 transition-all ${
                        activeCard === idx
                          ? 'border-gold-500 scale-105'
                          : 'border-teal-800/80 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.brand}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
