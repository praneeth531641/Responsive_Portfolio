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

function App() {
  useEffect(() => {
    // Set page metadata
    document.title = "Praneeth | Full Stack Engineer – Cloud & AI Focus";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Full Stack Engineer building scalable applications with Angular, React, ASP.NET. Learning platform engineering, DevOps, and AI systems.");
    }
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
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
