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
    document.title = "Praneeth | AI Data Platform Engineer - MLOps & Cloud Focus";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "AI Data Platform Engineer specializing in Snowflake, Kubernetes, and cloud-native architecture. 2.4+ years building production systems at scale."
      );
    }
  }, []);

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 font-sans">
      <Navbar />
      <AIAssistant />

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
