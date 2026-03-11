// App.jsx
import { useEffect } from "react";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import FlagshipPlatform from "./components/FlagshipPlatform";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AIAssistant from "./components/AIAssistant";
import AnalyticsSection from "./components/AnalyticsSection";
import { useAnalytics } from "./hooks/useAnalytics";
import { useSectionTracking, trackScrollDepth } from "./components/Analytics";

function App() {
  // Initialize Google Analytics with your Measurement ID
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
  useAnalytics(GA_MEASUREMENT_ID);
  
  // Track section views and scroll depth
  useSectionTracking();
  
  useEffect(() => {
    // Set page metadata
    document.title = "Praneeth | AI Data Platform Engineer – MLOps & Cloud Focus";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "AI Data Platform Engineer specializing in Snowflake, Kubernetes, LLMs, and cloud-native architecture. 2.4+ years building production systems at scale.");
    }

    // Track scroll depth
    trackScrollDepth();
  }, []);

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 font-sans">
      <Navbar />
      <AIAssistant />

      {/* Offset to prevent content being hidden behind fixed navbar */}
      <main className="pt-24">
        <Hero />
        <WhatIDo />
        <FlagshipPlatform />
        <section className="max-w-6xl mx-auto px-6">
          <TechStack />
          <Projects />
          <Experience />
          <AnalyticsSection />
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
