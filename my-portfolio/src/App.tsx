// App.jsx (updated layout)
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 font-sans">
      <DarkModeToggle />
      <Hero />
      <section className="max-w-6xl mx-auto px-6">
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
