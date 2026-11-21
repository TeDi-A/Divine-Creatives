import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'why-work-with-me', label: 'Why Work With Me' },
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

      {/* Floating Navigation Dock: Bottom Center on Mobile Only */}
      <div
        ref={dockRef}
        style={{ bottom: 'max(1.25rem, calc(env(safe-area-inset-bottom, 0px) + 0.75rem))' }}
        className="fixed left-1/2 -translate-x-1/2 z-40 md:hidden flex flex-col items-center pointer-events-auto select-none"
      >
        {/* Expanded Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mb-2.5 w-64 max-w-[calc(100vw-2.5rem)] rounded-2xl bg-teal-950/95 backdrop-blur-2xl border border-teal-700/80 shadow-2xl shadow-black/80 overflow-hidden p-2 flex flex-col gap-1"
            >
              <div className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-offwhite-400 border-b border-teal-900/80 flex items-center justify-between">
                <span>Jump To Section</span>
                <span className="text-gold-400/90 font-mono text-[9px] uppercase">
                  ● {currentLabel}
                </span>
              </div>

              <nav className="flex flex-col gap-0.5 py-1">
                {SECTIONS.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleNavigate(sec.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs tracking-wide transition-all ${
                        isActive
                          ? 'bg-gold-500/15 text-gold-400 font-bold border border-gold-500/30 shadow-sm'
                          : 'text-offwhite-200 hover:text-offwhite-100 hover:bg-teal-900/50'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            isActive ? 'bg-gold-400' : 'bg-transparent'
                          }`}
                        />
                        <span>{sec.label}</span>
                      </span>
                      {isActive && (
                        <span className="text-[10px] uppercase font-mono text-gold-400/90 tracking-wider">
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

        {/* Collapsed Pill Button Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle mobile section navigation dock"
          className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-950/90 backdrop-blur-xl border border-teal-700/80 hover:border-gold-500/70 text-offwhite-100 shadow-2xl shadow-black/80 cursor-pointer active:scale-95 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-xs font-bold font-mono tracking-wider uppercase text-offwhite-100 group-hover:text-gold-300 transition-colors">
            {currentLabel}
          </span>
          <ChevronUp
            className={`w-3.5 h-3.5 text-offwhite-300 group-hover:text-gold-400 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-gold-400' : ''
            }`}
          />
        </button>
      </div>
    </>
  );
}
