import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import ScheduleSection from './components/ScheduleSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import RVLoader from './components/RVLoader';

export default function App() {
  const [showRVLoader, setShowRVLoader] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  // Quick 2.2s intro for the RV loader so the user gets to see their idea in action immediately!
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-bb-dark text-gray-200 selection:bg-bb-neon selection:text-black">
      
      {/* Initial 2D Animated RV Loader */}
      {initialLoading && (
        <RVLoader
          isIntro={true}
          onClose={() => setInitialLoading(false)}
        />
      )}

      {/* On-Demand RV Loader (triggered by user via Navbar button) */}
      {showRVLoader && (
        <RVLoader
          isIntro={false}
          onClose={() => setShowRVLoader(false)}
        />
      )}

      {/* Navigation Header */}
      <Navbar onOpenRVLoader={() => setShowRVLoader(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <AboutSection />
        <EventsSection />
        <ScheduleSection />
        <ContactSection />
        <FAQSection />
      </main>

      {/* Legacy Structure Global Footer */}
      <Footer />
    </div>
  );
}
