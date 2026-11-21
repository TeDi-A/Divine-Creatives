import React, { useState } from 'react';
import { ArrowUpRight, Layers, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function CampaignCard({ campaign, index = 0, onSelectArtboard }) {
  const [selectedArtboardIndex, setSelectedArtboardIndex] = useState(0);
  const activeArtboard = campaign.artboards[selectedArtboardIndex];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.1, 0.25), ease: PREMIUM_EASE }}
      className="bg-teal-900/30 border border-teal-800/80 hover:border-gold-500/40 rounded-lg p-6 sm:p-7 transition-colors"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: 4:5 Design Showcase */}
        <div className="lg:col-span-5 space-y-3">
          <div
            className="relative aspect-[4/5] rounded overflow-hidden bg-teal-950 border border-teal-800/80 cursor-pointer group/image"
            onClick={() => onSelectArtboard(campaign, selectedArtboardIndex)}
          >
            <img
              src={activeArtboard.image}
              alt={activeArtboard.title}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-teal-950/60 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-3 py-1.5 rounded bg-gold-500 text-teal-950 text-xs font-bold uppercase flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                <span>Open View</span>
              </span>
            </div>

            <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-teal-950/85 text-gold-400 font-mono text-[11px] font-medium">
              Design {selectedArtboardIndex + 1} of {campaign.artboards.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {campaign.artboards.map((artboard, idx) => (
              <button
                key={artboard.id}
                onClick={() => setSelectedArtboardIndex(idx)}
                className={`relative flex-shrink-0 w-11 sm:w-12 aspect-[4/5] rounded overflow-hidden border transition-all ${
                  selectedArtboardIndex === idx
                    ? 'border-gold-500 scale-105'
                    : 'border-teal-800/80 opacity-60 hover:opacity-100'
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

        {/* Right: Meta & Concept */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-5">
          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded bg-teal-800/80 text-offwhite-200 text-xs font-semibold uppercase">
                {campaign.brand}
              </span>
              <span className="px-2.5 py-0.5 rounded bg-teal-900 text-offwhite-300 text-xs uppercase">
                {campaign.industry}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-teal-950 text-gold-400 text-xs">
                <Layers className="w-3 h-3" />
                <span>{campaign.assetCount} Designs</span>
              </span>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl text-offwhite-100 font-bold">
                {campaign.title}
              </h3>
              <p className="text-xs text-gold-400 font-medium mt-0.5">
                "{campaign.tagline}"
              </p>
            </div>

            <p className="text-sm text-offwhite-300 leading-relaxed font-normal">
              {campaign.concept}
            </p>

            {/* Current Design Callout */}
            <div className="p-3.5 rounded bg-teal-950/60 border border-teal-800/80 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gold-400 font-medium">
                  Design {activeArtboard.order} of {campaign.artboards.length}
                </span>
                <span className="text-offwhite-400">
                  {activeArtboard.theme}
                </span>
              </div>
              <p className="font-display text-sm text-offwhite-100 font-medium">
                "{activeArtboard.headline}"
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-teal-800/60 flex items-center justify-between">
            <button
              onClick={() => onSelectArtboard(campaign, selectedArtboardIndex)}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors"
            >
              <span>View All {campaign.assetCount} Designs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </motion.article>
  );
}
