import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        if (windowHeight + scrollY >= docHeight - 120) {
          setActiveSection('contact');
          return;
        }

        const sectionIds = ['services', 'work', 'about', 'contact'];
        const detectionLine = windowHeight * 0.38;
        let matched = '';

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= detectionLine && rect.bottom > detectionLine) {
              matched = id;
              break;
            }
          }
        }
        setActiveSection(matched);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{ backgroundColor: isScrolled || mobileMenuOpen ? '#001A24' : 'transparent' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'py-4 border-b border-teal-800/60 shadow-xl shadow-teal-950/50'
          : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo with User Uploaded Monogram Mark */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-teal-900/90 border border-teal-700/80 flex items-center justify-center p-1.5 group-hover:border-gold-500 transition-colors">
            <img
              src="/logo-transparent.png"
              alt="Divine Creatives Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-display tracking-wider text-base sm:text-lg font-bold text-offwhite-100 group-hover:text-gold-400 transition-colors">
            DIVINE CREATIVES
          </span>
        </a>

        {/* Desktop Navigation Links with Active Scroll Highlighting */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const linkId = link.href.replace('#', '');
            const isActive = activeSection === linkId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? 'text-gold-400 font-bold'
                    : 'text-offwhite-300 hover:text-gold-400 font-medium'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 rounded-full shadow-sm" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-gold-500 hover:bg-gold-400 text-teal-950 font-bold text-xs tracking-wider uppercase transition-colors shadow-md"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-offwhite-200 hover:text-gold-400 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{ backgroundColor: '#001A24' }}
          className="md:hidden w-full border-t border-b border-teal-800 px-6 py-6 shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium tracking-wide text-offwhite-200 hover:text-gold-400 py-2 border-b border-teal-900/60"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-gold-500 text-teal-950 font-bold text-xs tracking-wider uppercase"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
