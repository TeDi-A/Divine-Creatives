import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 4-pointed brand star icon (matching the star sparkle in the Divine Creatives logo)
function FourPointStar({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2Z" />
    </svg>
  );
}

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function MobileNavDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const dockRef = useRef(null);

  // Active section detection during manual scrolling
  useEffect(() => {
    let rafId;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        // Scrolled near top
        if (scrollY < 160) {
          setActiveSection('home');
          return;
        }

        // Scrolled near bottom
        if (windowHeight + scrollY >= docHeight - 120) {
          setActiveSection('contact');
          return;
        }

        // Midpoint detection accounting for sections of varying heights
        const detectionLine = windowHeight * 0.38;
        let matched = null;

        for (const sec of SECTIONS) {
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= detectionLine && rect.bottom > detectionLine) {
              matched = sec.id;
              break;
            }
          }
        }

        if (matched) {
          setActiveSection(matched);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close on tap outside or Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e) => {
      if (dockRef.current && !dockRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleNavigate = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentLabel = SECTIONS.find((s) => s.id === activeSection)?.label || 'Menu';

  return (
    <>
      {/* Subtle backdrop overlay when dock is expanded */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-[2px] md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Floating Navigation Dock: Bottom Center on Mobile Only (Enhanced 2x Size) */}
      <div
        ref={dockRef}
        style={{ bottom: 'max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 1rem))' }}
        className="fixed left-1/2 -translate-x-1/2 z-40 md:hidden flex flex-col items-center pointer-events-auto select-none"
      >
        {/* Expanded Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.95 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3 w-72 sm:w-80 max-w-[calc(100vw-2rem)] rounded-3xl bg-teal-950/98 backdrop-blur-2xl border border-teal-700/90 shadow-2xl shadow-black/95 overflow-hidden p-3 flex flex-col gap-1.5"
            >
              <div className="px-4 py-2 text-xs font-bold tracking-widest uppercase text-offwhite-400 border-b border-teal-900/80 flex items-center justify-between">
                <span>Jump To Section</span>
                <span className="text-gold-400/90 font-mono text-[10px] uppercase font-bold flex items-center gap-1.5">
                  <FourPointStar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>{currentLabel}</span>
                </span>
              </div>

              <nav className="flex flex-col gap-1 py-1.5">
                {SECTIONS.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleNavigate(sec.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm tracking-wide transition-all ${
                        isActive
                          ? 'bg-gold-500/20 text-gold-400 font-bold border border-gold-500/40 shadow-sm'
                          : 'text-offwhite-200 hover:text-offwhite-100 hover:bg-teal-900/50'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {isActive ? (
                          <FourPointStar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        ) : (
                          <span className="w-3.5 h-3.5 shrink-0" />
                        )}
                        <span className="font-semibold">{sec.label}</span>
                      </span>
                      {isActive && (
                        <span className="text-[11px] uppercase font-mono text-gold-400/90 tracking-wider">
                          Active
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Collapsed Pill Button Trigger (2x Bigger with 4-Sided Logo Star) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle mobile section navigation dock"
          className="group flex items-center gap-3.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-teal-950/95 backdrop-blur-2xl border-2 border-teal-600/80 hover:border-gold-400 text-offwhite-100 shadow-2xl shadow-black/90 cursor-pointer active:scale-95 transition-all"
        >
          <FourPointStar className="w-4 h-4 text-gold-400 animate-pulse drop-shadow-[0_0_8px_rgba(212,175,55,0.7)] shrink-0" />
          <span className="text-sm sm:text-base font-bold font-mono tracking-widest uppercase text-offwhite-100 group-hover:text-gold-300 transition-colors">
            {currentLabel}
          </span>
          <ChevronUp
            className={`w-5 h-5 text-offwhite-200 group-hover:text-gold-400 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-gold-400' : ''
            }`}
          />
        </button>
      </div>
    </>
  );
}
