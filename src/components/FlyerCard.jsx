import React from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function FlyerCard({ flyer, index = 0, onSelectFlyer }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.1, 0.25), ease: PREMIUM_EASE }}
      className="bg-teal-900/30 border border-teal-800/80 hover:border-gold-500/40 rounded-lg p-6 sm:p-8 lg:p-10 transition-colors"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Large Featured Project Image */}
        <div className="md:col-span-5">
          <div
            className="relative aspect-[4/5] rounded overflow-hidden bg-teal-950 border border-teal-800/80 cursor-pointer group shadow-xl"
            onClick={() => onSelectFlyer(flyer)}
          >
            <img
              src={flyer.image}
              alt={flyer.title || flyer.headline}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-teal-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-3.5 py-2 rounded bg-gold-500 text-teal-950 text-xs font-bold uppercase flex items-center gap-1.5 shadow-lg">
                <Eye className="w-3.5 h-3.5" />
                <span>Open View</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Project Information */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-6">
          
          {/* A. Project Tag: Category */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gold-400">
            <span>{flyer.category || flyer.industry}</span>
          </div>

          {/* B. Brand Name: Largest & Most Prominent Element */}
          <div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-offwhite-100 uppercase">
              {flyer.brand}
            </h3>

            {/* C. Headline: Directly Underneath Brand Name */}
            <h4 className="font-display text-xl sm:text-2xl font-semibold text-offwhite-200 mt-2">
              "{flyer.headline}"
            </h4>
          </div>

          {/* D. Description */}
          <p className="text-sm text-offwhite-300 leading-relaxed font-normal max-w-xl">
            {flyer.description}
          </p>

          {/* Lightbox / Action Trigger */}
          <div className="pt-2">
            <button
              onClick={() => onSelectFlyer(flyer)}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors group"
            >
              <span>Open Full View</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

      </div>
    </motion.article>
  );
}
