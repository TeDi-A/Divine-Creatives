import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function CampaignCard({ campaign, index = 0, onSelectArtboard }) {
  const [selectedArtboardIndex, setSelectedArtboardIndex] = useState(0);
  const activeArtboard = campaign.artboards[selectedArtboardIndex] || campaign.artboards[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.08, 0.25), ease: PREMIUM_EASE }}
      className="group bg-teal-900/25 border border-teal-800/70 hover:border-gold-500/60 hover:bg-teal-900/35 rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/5 flex flex-col justify-between"
    >
      <div className="space-y-6">
        {/* Featured Project Image (4:5 Aspect Ratio) */}
        <div
          className="relative aspect-[4/5] rounded-xl overflow-hidden bg-teal-950 border border-teal-800/80 cursor-pointer group/img shadow-xl"
          onClick={() => onSelectArtboard(campaign, selectedArtboardIndex)}
        >
          <img
            src={activeArtboard.image}
            alt={activeArtboard.title || campaign.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-[1.02]"
            loading="lazy"
          />
          
          <div className="absolute inset-0 bg-teal-950/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-4 py-2 rounded-md bg-gold-500 text-teal-950 text-xs font-bold uppercase flex items-center gap-1.5 shadow-lg">
              <Eye className="w-3.5 h-3.5" />
              <span>Open Full View</span>
            </span>
          </div>
        </div>

        {/* Project Information & Hierarchy */}
        <div className="space-y-4">
          {/* A. Project Tags */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gold-400">
            <span>{campaign.industry}</span>
            <span className="text-teal-700 font-bold">•</span>
            <span>{campaign.assetCount} DESIGNS</span>
          </div>

          {/* B. Brand Name */}
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-offwhite-100 uppercase group-hover:text-gold-300 transition-colors">
              {campaign.brand}
            </h3>

            {/* C. Campaign Headline */}
            <h4 className="font-display text-base sm:text-lg font-semibold text-offwhite-200 mt-1">
              {campaign.title}
            </h4>
          </div>

          {/* D. Campaign Description */}
          <p className="text-sm text-offwhite-300 leading-relaxed font-normal">
            {campaign.concept}
          </p>

          {/* E. Design Indicator & F. Interactive Design Gallery */}
          <div className="pt-3 border-t border-teal-800/60 space-y-2.5">
            <div className="flex items-center justify-between text-[11px] font-mono font-semibold uppercase tracking-wider text-gold-400">
              <span>DESIGN {selectedArtboardIndex + 1} OF {campaign.artboards.length}</span>
              <span className="text-offwhite-400 font-sans normal-case text-xs truncate max-w-[200px]">
                {activeArtboard.title}
              </span>
            </div>

            {/* Thumbnails Gallery */}
            <div className="flex flex-wrap gap-2.5 pt-0.5">
              {campaign.artboards.map((artboard, idx) => (
                <button
                  key={artboard.id}
                  onClick={() => setSelectedArtboardIndex(idx)}
                  aria-label={`Select design ${idx + 1}`}
                  className={`relative w-12 sm:w-14 aspect-[4/5] rounded overflow-hidden border-2 transition-all duration-200 ${
                    selectedArtboardIndex === idx
                      ? 'border-gold-500 scale-105 shadow-md shadow-gold-500/20 opacity-100 ring-1 ring-gold-400/50'
                      : 'border-teal-800/80 opacity-60 hover:opacity-100 hover:border-teal-700'
                  }`}
                >
                  <img
                    src={artboard.image}
                    alt={artboard.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Action Trigger */}
      <div className="pt-5 mt-4 border-t border-teal-900/50">
        <button
          onClick={() => onSelectArtboard(campaign, selectedArtboardIndex)}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors group/btn"
        >
          <span>Open Full View</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>
    </motion.article>
  );
}
