import { useEffect, useState } from "react";
import SectionDivider from "./components/SectionDivider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;

      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return next;
    });
  };

  return (
    <div className="relative flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">

      {/* Premium scroll indicator */}
 

      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <Hero />

     
      <Projects />

    
      <Skills />

   
      <About />


      <Contact />

   
      <Footer />

    </div>
  );
}

export default App;
