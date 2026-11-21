import React, { useState, useEffect, useRef } from 'react';
import { portfolioManifest, INDUSTRIES } from '../data/portfolioData';
import CampaignCard from './CampaignCard';
import FlyerCard from './FlyerCard';
import ProjectLightbox from './ProjectLightbox';
import { Layers, Image as ImageIcon, Filter, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function Portfolio() {
  const [activeType, setActiveType] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    item: null,
    campaign: null,
    currentIndex: 0,
  });

  const { campaigns, flyers } = portfolioManifest;

  // Filter campaigns and flyers by industry
  const filteredCampaigns = campaigns.filter((c) =>
    selectedIndustry === 'all' ? true : c.industry === selectedIndustry
  );

  const filteredFlyers = flyers.filter((f) =>
    selectedIndustry === 'all' ? true : f.industry === selectedIndustry
  );

  const totalFiltered = filteredCampaigns.length + filteredFlyers.length;

  // Close dropdown on outside click or Escape
  useEffect(() => {
    if (!isDropdownOpen) return;
    const handlePointerDown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsDropdownOpen(false);
    };
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen]);

  const handleSelectArtboard = (campaign, artboardIndex) => {
    const artboard = campaign.artboards[artboardIndex];
    setLightboxState({
      isOpen: true,
      campaign,
      currentIndex: artboardIndex,
      item: {
        ...artboard,
        brand: campaign.brand,
        campaignTitle: campaign.title,
        totalInCampaign: campaign.artboards.length,
      },
    });
  };

  const handleSelectFlyer = (flyer) => {
    setLightboxState({
      isOpen: true,
      campaign: null,
      currentIndex: 0,
      item: {
        ...flyer,
        campaignTitle: null,
      },
    });
  };

  const handleLightboxNavigate = (direction) => {
    if (!lightboxState.campaign) return;
    const { campaign, currentIndex } = lightboxState;
    const newIndex = (currentIndex + direction + campaign.artboards.length) % campaign.artboards.length;
    const nextArtboard = campaign.artboards[newIndex];

    setLightboxState({
      ...lightboxState,
      currentIndex: newIndex,
      item: {
        ...nextArtboard,
        brand: campaign.brand,
        campaignTitle: campaign.title,
        totalInCampaign: campaign.artboards.length,
      },
    });
  };

  const closeLightbox = () => {
    setLightboxState({ isOpen: false, item: null, campaign: null, currentIndex: 0 });
  };

  return (
    <section id="work" className="relative py-24 bg-transparent border-t border-teal-900/40">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header: Centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="max-w-2xl mx-auto mb-12 text-center space-y-3"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight reflective-heading">
            Portfolio
          </h2>
          <p className="text-base text-offwhite-300 font-normal leading-relaxed">
            A collection of my work for brands.
          </p>
        </motion.div>

        {/* Filter Controls: Tabs + Industry Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: PREMIUM_EASE }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12 border-b border-teal-800/80 pb-5"
        >
          {/* Tab: All Work */}
          <button
            onClick={() => setActiveType('all')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase transition-colors ${
              activeType === 'all'
                ? 'bg-gold-500 text-teal-950 shadow-md'
                : 'bg-teal-900/50 hover:bg-teal-900 text-offwhite-300 hover:text-offwhite-100 border border-teal-800'
            }`}
          >
            All Work ({totalFiltered})
          </button>

          {/* Tab: Campaigns */}
          <button
            onClick={() => setActiveType('campaigns')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase transition-colors flex items-center gap-1.5 ${
              activeType === 'campaigns'
                ? 'bg-gold-500 text-teal-950 shadow-md'
                : 'bg-teal-900/50 hover:bg-teal-900 text-offwhite-300 hover:text-offwhite-100 border border-teal-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Campaigns ({filteredCampaigns.length})</span>
          </button>

          {/* Tab: Flyers */}
          <button
            onClick={() => setActiveType('flyers')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase transition-colors flex items-center gap-1.5 ${
              activeType === 'flyers'
                ? 'bg-gold-500 text-teal-950 shadow-md'
                : 'bg-teal-900/50 hover:bg-teal-900 text-offwhite-300 hover:text-offwhite-100 border border-teal-800'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Flyers ({filteredFlyers.length})</span>
          </button>

          {/* Industry Dropdown in the Same Filter Bar */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 border ${
                selectedIndustry !== 'all'
                  ? 'bg-gold-500 text-teal-950 border-gold-400 shadow-md'
                  : 'bg-teal-900/50 hover:bg-teal-900 text-offwhite-200 hover:text-offwhite-100 border-teal-800'
              }`}
              aria-expanded={isDropdownOpen}
              aria-label="Filter by industry"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>
                {selectedIndustry === 'all' ? 'All Industries' : selectedIndustry}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: PREMIUM_EASE }}
                  className="absolute right-0 sm:left-0 mt-2 w-80 sm:w-96 rounded-xl bg-teal-950/98 backdrop-blur-2xl border border-teal-700/80 shadow-2xl shadow-black/80 z-50 p-2 flex flex-col gap-1 max-h-[85vh] overflow-y-auto"
                >
                  <div className="px-3 py-2 text-[10px] font-bold tracking-widest uppercase text-offwhite-400 border-b border-teal-900/80 flex items-center justify-between">
                    <span>Filter by Industry</span>
                    {selectedIndustry !== 'all' && (
                      <button
                        onClick={() => {
                          setSelectedIndustry('all');
                          setIsDropdownOpen(false);
                        }}
                        className="text-gold-400 hover:text-gold-300 text-[10px] font-mono lowercase underline"
                      >
                        clear filter
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedIndustry('all');
                      setIsDropdownOpen(false);
                    }}
                    className={`text-left px-3.5 py-2.5 rounded-lg transition-colors flex flex-col ${
                      selectedIndustry === 'all'
                        ? 'bg-gold-500/15 text-gold-400 font-bold border border-gold-500/30'
                        : 'text-offwhite-200 hover:bg-teal-900/50'
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      All Industries ({campaigns.length + flyers.length})
                    </span>
                    <span className="text-[11px] text-offwhite-400 mt-0.5">
                      Show all campaigns and flyers across all industries.
                    </span>
                  </button>

                  {INDUSTRIES.map((ind) => {
                    const matchCount =
                      campaigns.filter((c) => c.industry === ind.name).length +
                      flyers.filter((f) => f.industry === ind.name).length;
                    const isSelected = selectedIndustry === ind.name;
                    return (
                      <button
                        key={ind.name}
                        onClick={() => {
                          setSelectedIndustry(ind.name);
                          setIsDropdownOpen(false);
                        }}
                        className={`text-left px-3.5 py-2.5 rounded-lg transition-colors flex flex-col ${
                          isSelected
                            ? 'bg-gold-500/15 text-gold-400 font-bold border border-gold-500/30'
                            : 'text-offwhite-200 hover:bg-teal-900/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-offwhite-100">
                            {ind.name}
                          </span>
                          <span className="text-[10px] font-mono text-gold-400">
                            ({matchCount})
                          </span>
                        </div>
                        <span className="text-[11px] text-offwhite-400 mt-0.5 leading-snug">
                          {ind.desc}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Portfolio Content */}
        <div className="space-y-16">
          {/* Section: Campaigns */}
          {(activeType === 'all' || activeType === 'campaigns') && filteredCampaigns.length > 0 && (
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                className="flex items-center justify-between border-b border-teal-800/60 pb-3"
              >
                <h3 className="font-display text-2xl font-bold reflective-heading">
                  Campaigns
                </h3>
                <span className="text-xs text-gold-400 font-semibold tracking-wide uppercase">
                  {filteredCampaigns.length} {filteredCampaigns.length === 1 ? 'Campaign' : 'Campaigns'}
                </span>
              </motion.div>

              <div className="space-y-8">
                {filteredCampaigns.map((campaign, index) => (
                  <CampaignCard
                    key={campaign.id}
                    campaign={campaign}
                    index={index}
                    onSelectArtboard={handleSelectArtboard}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Section: Flyers */}
          {(activeType === 'all' || activeType === 'flyers') && filteredFlyers.length > 0 && (
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                className="flex items-center justify-between border-b border-teal-800/60 pb-3"
              >
                <h3 className="font-display text-2xl font-bold reflective-heading">
                  Flyers
                </h3>
                <span className="text-xs text-gold-400 font-semibold tracking-wide uppercase">
                  {filteredFlyers.length} {filteredFlyers.length === 1 ? 'Design' : 'Designs'}
                </span>
              </motion.div>

              <div className="space-y-8">
                {filteredFlyers.map((flyer, index) => (
                  <FlyerCard
                    key={flyer.id}
                    flyer={flyer}
                    index={index}
                    onSelectFlyer={handleSelectFlyer}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Empty Filter State */}
          {totalFiltered === 0 && (
            <div className="py-16 text-center space-y-4">
              <p className="text-offwhite-300 text-base">
                No designs found in <span className="text-gold-400 font-semibold">{selectedIndustry}</span>.
              </p>
              <button
                onClick={() => setSelectedIndustry('all')}
                className="px-4 py-2 rounded-sm bg-teal-900 border border-teal-700 text-offwhite-100 hover:text-gold-400 text-xs font-semibold uppercase transition-colors"
              >
                Reset Industry Filter
              </button>
            </div>
          )}
        </div>
      </div>

      {lightboxState.isOpen && (
        <ProjectLightbox
          activeItem={lightboxState.item}
          onClose={closeLightbox}
          onNavigate={lightboxState.campaign ? handleLightboxNavigate : null}
        />
      )}
    </section>
  );
}
