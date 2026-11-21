import React, { useState } from 'react';
import { portfolioManifest, FLYER_CATEGORIES } from '../data/portfolioData';
import CampaignCard from './CampaignCard';
import FlyerCard from './FlyerCard';
import ProjectLightbox from './ProjectLightbox';
import { Layers, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFlyerCategory, setSelectedFlyerCategory] = useState('all');
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    item: null,
    campaign: null,
    currentIndex: 0,
  });

  const { campaigns, flyers } = portfolioManifest;

  const displayedFlyers = selectedFlyerCategory === 'all'
    ? flyers
    : flyers.filter((f) => f.category === selectedFlyerCategory);

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
    <section id="work" className="relative py-24 bg-teal-950/70 border-t border-teal-900/80">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header: Centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="max-w-2xl mx-auto mb-12 text-center space-y-3"
        >
          <h2 className="font-display text-3xl sm:text-5xl text-offwhite-100 font-bold tracking-tight">
            Portfolio
          </h2>
          <p className="text-base text-offwhite-300 font-normal leading-relaxed">
            A collection of my work for brands.
          </p>
        </motion.div>

        {/* Filter Buttons: Centered */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: PREMIUM_EASE }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12 border-b border-teal-800/80 pb-5"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase transition-colors ${
              activeCategory === 'all'
                ? 'bg-gold-500 text-teal-950 shadow-md'
                : 'bg-teal-900/50 hover:bg-teal-900 text-offwhite-300 hover:text-offwhite-100 border border-teal-800'
            }`}
          >
            All Work ({campaigns.length + flyers.length})
          </button>

          <button
            onClick={() => setActiveCategory('campaigns')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase transition-colors flex items-center gap-1.5 ${
              activeCategory === 'campaigns'
                ? 'bg-gold-500 text-teal-950 shadow-md'
                : 'bg-teal-900/50 hover:bg-teal-900 text-offwhite-300 hover:text-offwhite-100 border border-teal-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Campaigns ({campaigns.length})</span>
          </button>

          <button
            onClick={() => setActiveCategory('flyers')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase transition-colors flex items-center gap-1.5 ${
              activeCategory === 'flyers'
                ? 'bg-gold-500 text-teal-950 shadow-md'
                : 'bg-teal-900/50 hover:bg-teal-900 text-offwhite-300 hover:text-offwhite-100 border border-teal-800'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Flyers ({flyers.length})</span>
          </button>
        </motion.div>

        {/* Portfolio Content */}
        <div className="space-y-16">
          {/* Section: Campaigns */}
          {(activeCategory === 'all' || activeCategory === 'campaigns') && (
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                className="flex items-center justify-between border-b border-teal-800/60 pb-3"
              >
                <h3 className="font-display text-2xl text-offwhite-100 font-bold">
                  Campaigns
                </h3>
              </motion.div>

              <div className="space-y-8">
                {campaigns.map((campaign, index) => (
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
          {(activeCategory === 'all' || activeCategory === 'flyers') && (
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                className="space-y-4 border-b border-teal-800/60 pb-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl text-offwhite-100 font-bold">
                    Flyers
                  </h3>
                  <span className="text-xs text-gold-400 font-semibold tracking-wide uppercase">
                    {selectedFlyerCategory === 'all'
                      ? `${flyers.length} DESIGNS`
                      : `${displayedFlyers.length} IN ${selectedFlyerCategory.toUpperCase()}`}
                  </span>
                </div>

                {/* Category Pills: Real Estate, Fitness & Gym, Bakery, Grill, Event Decor, Skincare, Fastfood, Event Catering, Restaurant */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    onClick={() => setSelectedFlyerCategory('all')}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                      selectedFlyerCategory === 'all'
                        ? 'bg-gold-500 text-teal-950 shadow-sm font-bold'
                        : 'bg-teal-900/60 hover:bg-teal-900 text-offwhite-300 hover:text-offwhite-100 border border-teal-800'
                    }`}
                  >
                    All ({flyers.length})
                  </button>
                  {FLYER_CATEGORIES.map((category) => {
                    const count = flyers.filter((f) => f.category === category).length;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedFlyerCategory(category)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          selectedFlyerCategory === category
                            ? 'bg-gold-500 text-teal-950 font-bold shadow-sm'
                            : 'bg-teal-900/40 hover:bg-teal-900 text-offwhite-300 hover:text-offwhite-100 border border-teal-800/80 hover:border-teal-700'
                        }`}
                      >
                        {category} ({count})
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              <div className="space-y-8">
                {displayedFlyers.map((flyer, index) => (
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
