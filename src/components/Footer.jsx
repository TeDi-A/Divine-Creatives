import React from 'react';
import { ArrowUp, Instagram } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/30 border-t border-teal-900/60 py-12 text-offwhite-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-teal-900/80">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-teal-900 border border-teal-700 flex items-center justify-center p-1">
              <img
                src="/logo-transparent.png"
                alt="Divine Creatives"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display tracking-wider text-base font-bold text-offwhite-100">
              DIVINE CREATIVES
            </span>
          </div>

          {/* Social / Contact Icons: WhatsApp (Green) & Instagram (Purple) */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/2349059977796"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 flex items-center justify-center transition-colors shadow-sm"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-purple-500/10 border border-purple-500/40 hover:border-purple-400 text-purple-400 hover:text-purple-300 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-offwhite-400">
          <p>
            &copy; {new Date().getFullYear()} Divine Creatives. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-gold-400 transition-colors uppercase tracking-wider font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
