import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    "Home",
    "Services",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-zinc-800"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-8">
        
        {/* Logo */}
        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold uppercase">
          rr
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex mx-auto items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-full p-1">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollToSection(link)}
                className="px-4 py-2 text-sm text-zinc-400 rounded-full hover:bg-zinc-800 hover:text-white transition"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollToSection("Contact")}
          className="hidden md:block px-5 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:opacity-80 transition"
        >
          Let's Talk
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-auto flex flex-col gap-1.5"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-20 left-5 right-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-3">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="w-full text-left px-4 py-3 text-zinc-300 hover:bg-zinc-800 rounded-lg transition"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;