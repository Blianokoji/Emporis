import React, { useEffect, useState } from "react";
import logo from '../assets/emporis_logo.webp';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(10, 22, 40, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200, 169, 110, 0.12)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-8 py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Emporis logo" className="w-8 h-8 object-contain" />
          <h1
            className="text-lg sm:text-xl font-medium tracking-wide text-[#F2F0EB] transition-colors duration-300"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.04em',
            }}
          >
            Emporis Health Care
          </h1>
        </div>

        <ul className="hidden md:flex space-x-8">
          {["Home", "Products", "About", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="transition-colors duration-300 text-sm tracking-widest uppercase text-[#F2F0EB] hover:text-[#C8A96E]"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
