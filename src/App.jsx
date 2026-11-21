import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-teal-950 text-offwhite-100 flex flex-col selection:bg-gold-500 selection:text-teal-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* Services placed before Portfolio as requested */}
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
