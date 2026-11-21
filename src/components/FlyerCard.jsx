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
      transition={{ duration: 0.7, delay: Math.min(index * 0.08, 0.25), ease: PREMIUM_EASE }}
      className="group bg-teal-900/25 border border-teal-800/70 hover:border-gold-500/60 hover:bg-teal-900/35 rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/5 flex flex-col justify-between"
    >
      <div className="space-y-5">
        {/* Featured Project Image (4:5 Aspect Ratio) */}
        <div
          className="relative aspect-[4/5] rounded-xl overflow-hidden bg-teal-950 border border-teal-800/80 cursor-pointer group/img shadow-xl"
          onClick={() => onSelectFlyer(flyer)}
        >
          <img
            src={flyer.image}
            alt={flyer.title || flyer.headline}
            className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-[1.02]"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-teal-950/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-3.5 py-1.5 rounded-md bg-gold-500 text-teal-950 text-xs font-bold uppercase flex items-center gap-1.5 shadow-lg">
              <Eye className="w-3.5 h-3.5" />
              <span>Open Full View</span>
            </span>
          </div>
        </div>

        {/* Project Information */}
        <div className="space-y-3.5">
          {/* A. Project Tag: Category / Industry */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-gold-400">
            <span>{flyer.category || flyer.industry}</span>
          </div>

          {/* B. Brand Name */}
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-offwhite-100 uppercase group-hover:text-gold-300 transition-colors">
              {flyer.brand}
            </h3>

            {/* C. Headline */}
            <h4 className="font-display text-sm sm:text-base font-semibold text-offwhite-200 mt-0.5">
              "{flyer.headline}"
            </h4>
          </div>

          {/* D. Description */}
          <p className="text-xs sm:text-sm text-offwhite-300 leading-relaxed font-normal">
            {flyer.description}
          </p>
        </div>
      </div>

      {/* Lightbox / Action Trigger */}
      <div className="pt-4 mt-4 border-t border-teal-900/50">
        <button
          onClick={() => onSelectFlyer(flyer)}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors group/btn"
        >
          <span>Open Full View</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>
    </motion.article>
  );
}
