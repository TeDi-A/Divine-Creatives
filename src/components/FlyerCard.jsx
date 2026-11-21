import React from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function FlyerCard({ flyer, index = 0, onSelectFlyer }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: PREMIUM_EASE }}
      className="bg-teal-900/30 border border-teal-800/80 hover:border-gold-500/40 rounded-lg p-5 transition-colors flex flex-col justify-between"
    >
      <div className="space-y-3">
        {/* Flyer Image Container (4:5 Aspect Ratio) */}
        <div
          className="relative aspect-[4/5] rounded overflow-hidden bg-teal-950 border border-teal-800/80 cursor-pointer group/image"
          onClick={() => onSelectFlyer(flyer)}
        >
          <img
            src={flyer.image}
            alt={flyer.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-teal-950/60 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-3 py-1.5 rounded bg-gold-500 text-teal-950 text-xs font-bold uppercase flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>Open View</span>
            </span>
          </div>

          <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-teal-950/85 text-gold-400 text-xs font-semibold uppercase">
            {flyer.brand}
          </div>
        </div>

        {/* Flyer Metadata */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-offwhite-400">
            <span className="text-gold-400 font-medium">{flyer.industry}</span>
            <span className="font-mono text-[11px]">1080 × 1350 px</span>
          </div>

          <h3 className="font-display text-lg text-offwhite-100 font-semibold leading-snug">
            "{flyer.headline}"
          </h3>

          <p className="text-xs text-offwhite-300 leading-relaxed font-normal">
            {flyer.description}
          </p>
        </div>
      </div>

      <div className="pt-3 mt-3 border-t border-teal-800/60 flex items-center justify-between">
        <button
          onClick={() => onSelectFlyer(flyer)}
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors"
        >
          <span>View Full</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
        <span className="text-[11px] font-medium text-offwhite-300">
          {flyer.cta}
        </span>
      </div>
    </motion.article>
  );
}
