import { useState, useEffect } from "react";

function Header({ toggleDarkMode, darkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll position for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll ONLY for navigation clicks
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close mobile menu
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white dark:bg-gray-900 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <h1
          onClick={() => scrollToSection("top")}
          className="text-lg font-bold tracking-wide cursor-pointer
                     text-gray-900 dark:text-gray-100" >
          PROBOTH
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-700 dark:text-gray-300
                       hover:text-indigo-600 transition-colors">
            Projects
          </button>

          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-700 dark:text-gray-300
                       hover:text-indigo-600 transition-colors">
            Skills
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 dark:text-gray-300
                       hover:text-indigo-600 transition-colors">
            About
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 dark:text-gray-300
                       hover:text-indigo-600 transition-colors">
            Contact
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 text-lg text-gray-700 dark:text-gray-300
                       hover:text-indigo-600 transition"aria-label="Toggle Dark Mode">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-lg text-gray-900 dark:text-gray-100"
            aria-label="Toggle Dark Mode">
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-900 dark:text-gray-100">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-sm">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 dark:text-gray-300 text-left">
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 dark:text-gray-300 text-left">
              Skills
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-gray-300 text-left">
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 dark:text-gray-300 text-left">
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
