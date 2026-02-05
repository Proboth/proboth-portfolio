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
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero/>
      <SectionDivider/>
      <Projects/>
      <SectionDivider/>
      <Skills />
      <SectionDivider/>
      <About/>
      <SectionDivider/>
      <Contact/>
      <SectionDivider/>
      <Footer/>
    </div>
  );
}

export default App;
