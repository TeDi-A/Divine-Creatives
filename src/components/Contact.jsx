import React, { useState } from 'react';
import { ArrowUpRight, Instagram, Send } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    service: 'Flyer Design',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Divine Creatives! My name is ${formData.name || 'a client'} from ${formData.brand || 'my brand'}. I need ${formData.service}. Details: ${formData.message}`
    );
    const waUrl = `https://wa.me/2349059977796?text=${text}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 bg-transparent border-t border-teal-900/40">
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Centered Header Focal Point */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="text-center max-w-2xl mx-auto space-y-4 mb-10"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight reflective-heading">
            Have a design project?
          </h2>
          <p className="text-base text-offwhite-300 font-normal leading-relaxed">
            Send a message on WhatsApp or Instagram, or fill out the brief form below to get started.
          </p>
        </motion.div>

        {/* Centered Direct Contact Channels: WhatsApp & Instagram with Micro-interactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.12, ease: PREMIUM_EASE }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10"
        >
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/2349059977796?text=Hello%20Divine%20Creatives!%20I%20would%20like%20to%20discuss%20a%20design%20project%20for%20my%20brand."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-teal-900/35 border border-teal-800/80 hover:border-emerald-500/70 hover:bg-teal-900/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-offwhite-400 uppercase tracking-wider font-medium">WhatsApp</p>
                <p className="text-sm font-semibold text-offwhite-100 group-hover:text-emerald-400 transition-colors">
                  +234 905 997 7796
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Instagram Button */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-teal-900/35 border border-teal-800/80 hover:border-pink-500/70 hover:bg-teal-900/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-pink-500/20 text-pink-400 flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-offwhite-400 uppercase tracking-wider font-medium">Instagram</p>
                <p className="text-sm font-semibold text-offwhite-100 group-hover:text-pink-400 transition-colors">
                  @divinecreatives.ng
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-pink-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Centered Clean Project Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.22, ease: PREMIUM_EASE }}
          className="max-w-xl mx-auto bg-teal-900/30 border border-teal-800/80 rounded-lg p-7 sm:p-8"
        >
          <h3 className="font-display text-xl text-offwhite-100 font-bold mb-1">
            Send a Message
          </h3>
          <p className="text-xs text-offwhite-400 font-normal mb-5">
            Fill in your details below and it will open directly on WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-offwhite-300 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Tega"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-sm bg-teal-950 border border-teal-800 text-offwhite-100 text-sm focus:border-gold-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-offwhite-300 font-medium mb-1">
                Brand or Business Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. BrightHomes"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-sm bg-teal-950 border border-teal-800 text-offwhite-100 text-sm focus:border-gold-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-offwhite-300 font-medium mb-1">
                Service Needed
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-sm bg-teal-950 border border-teal-800 text-offwhite-100 text-sm focus:border-gold-500 focus:outline-none transition-colors"
              >
                <option value="Flyer Design">Flyer Design</option>
                <option value="Campaign Design">Campaign Design</option>
                <option value="Design Bundles">Design Bundles</option>
                <option value="Monthly Content Packages">Monthly Content Packages</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-offwhite-300 font-medium mb-1">
                Brief Details
              </label>
              <textarea
                rows={3}
                required
                placeholder="What are you looking to design?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-sm bg-teal-950 border border-teal-800 text-offwhite-100 text-sm focus:border-gold-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-sm bg-gold-500 hover:bg-gold-400 text-teal-950 font-bold text-xs tracking-wider uppercase transition-colors shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send via WhatsApp</span>
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
