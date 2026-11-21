import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectLightbox({ activeItem, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onNavigate) onNavigate(-1);
      if (e.key === 'ArrowRight' && onNavigate) onNavigate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!activeItem) return null;

  const isCampaign = !!activeItem.campaignTitle;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-teal-950/95 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] bg-teal-900/95 border border-teal-700/80 rounded-lg shadow-2xl flex flex-col items-center overflow-hidden p-5 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar: Clean Brand & Campaign Context */}
        <div className="w-full flex items-center justify-between pb-3.5 border-b border-teal-800/80 mb-3">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-teal-800 text-offwhite-100 text-xs font-semibold uppercase">
              {activeItem.brand}
            </span>
            {isCampaign ? (
              <span className="text-sm font-semibold text-gold-400 font-display">
                {activeItem.campaignTitle}
              </span>
            ) : (
              <span className="text-sm font-semibold text-gold-400 font-display">
                {activeItem.headline || activeItem.title}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            {isCampaign && (
              <span className="text-xs text-offwhite-300 font-mono">
                {activeItem.order} / {activeItem.totalInCampaign}
              </span>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-teal-950/80 border border-teal-700 text-offwhite-200 hover:text-gold-400 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center: Full Visual Display with Clean Navigation */}
        <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden my-auto py-2">
          <div className="relative max-h-[68vh] aspect-[4/5] rounded overflow-hidden shadow-2xl border border-teal-800">
            <img
              src={activeItem.image}
              alt={activeItem.title || activeItem.brand}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation Controls */}
          {isCampaign && onNavigate && (
            <>
              <button
                onClick={() => onNavigate(-1)}
                className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-teal-950/90 border border-teal-700 text-offwhite-100 hover:text-gold-400 hover:scale-105 transition-all shadow-lg"
                aria-label="Previous Design"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate(1)}
                className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-teal-950/90 border border-teal-700 text-offwhite-100 hover:text-gold-400 hover:scale-105 transition-all shadow-lg"
                aria-label="Next Design"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Bottom Bar: Keyboard Hint & Contact CTA */}
        <div className="w-full pt-3.5 border-t border-teal-800/80 flex items-center justify-between text-xs text-offwhite-400">
          <span className="hidden sm:inline">
            {isCampaign ? 'Use arrow keys or click buttons to browse all designs' : 'Promotional flyer design'}
          </span>
          <a
            href="#contact"
            onClick={onClose}
            className="px-4 py-2 rounded-sm bg-gold-500 hover:bg-gold-400 text-teal-950 font-bold uppercase tracking-wider transition-colors ml-auto sm:ml-0"
          >
            Start a Project
          </a>
        </div>
      </div>
    </div>
  );
}
