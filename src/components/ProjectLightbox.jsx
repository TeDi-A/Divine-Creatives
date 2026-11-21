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
      className="fixed inset-0 z-50 flex items-center justify-center bg-teal-950/95 backdrop-blur-md p-4 sm:p-6 lg:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-teal-900/90 border border-teal-700 rounded-lg shadow-2xl flex flex-col lg:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-teal-950/80 border border-teal-700 text-offwhite-200 hover:text-gold-400 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image (4:5 native) */}
        <div className="relative flex-1 bg-teal-950 flex items-center justify-center p-4 sm:p-6 min-h-[350px] lg:min-h-[520px]">
          <div className="relative h-full max-h-[75vh] aspect-[4/5] rounded overflow-hidden border border-teal-800">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full h-full object-contain bg-black/40"
            />
          </div>

          {/* Navigation Controls */}
          {isCampaign && onNavigate && (
            <>
              <button
                onClick={() => onNavigate(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-teal-950/80 border border-teal-700 text-offwhite-100 hover:text-gold-400 transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-teal-950/80 border border-teal-700 text-offwhite-100 hover:text-gold-400 transition-all"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Right: Info Panel */}
        <div className="w-full lg:w-80 p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-teal-800 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded bg-teal-800 text-offwhite-100 text-xs font-semibold uppercase">
                {activeItem.brand}
              </span>
              <span className="px-2 py-0.5 rounded bg-teal-950 text-gold-400 text-xs font-mono">
                {isCampaign ? `Design ${activeItem.order} of ${activeItem.totalInCampaign}` : 'Flyer'}
              </span>
            </div>

            {isCampaign && (
              <div>
                <p className="text-[11px] uppercase tracking-wider text-offwhite-400">Campaign</p>
                <p className="text-sm font-semibold text-gold-400">{activeItem.campaignTitle}</p>
              </div>
            )}

            <div>
              <h3 className="font-display text-xl text-offwhite-100 font-bold leading-snug">
                "{activeItem.headline || activeItem.title}"
              </h3>
              {activeItem.theme && (
                <p className="text-xs text-gold-400 mt-1 font-medium">
                  {activeItem.theme}
                </p>
              )}
            </div>

            <p className="text-xs text-offwhite-300 leading-relaxed font-normal">
              {activeItem.copy || activeItem.description}
            </p>

            <div className="pt-3 border-t border-teal-800/60 space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-offwhite-400">Dimensions</span>
                <span className="text-offwhite-200 font-mono">1080 × 1350 px (4:5)</span>
              </div>
              {activeItem.cta && (
                <div className="flex justify-between">
                  <span className="text-offwhite-400">CTA</span>
                  <span className="text-gold-400 font-semibold">{activeItem.cta}</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-5 mt-5 border-t border-teal-800/80">
            <a
              href="#contact"
              onClick={onClose}
              className="w-full flex items-center justify-center py-2.5 rounded-sm bg-gold-500 hover:bg-gold-400 text-teal-950 font-bold text-xs tracking-wider uppercase transition-colors"
            >
              <span>Get Similar Design</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
