import React from "react";
import { LuArrowUp } from "react-icons/lu";
import logo from "../assets/emporis_logo.webp";
import { lenis } from "../lib/lenis";
import { useGoToSection } from "../lib/navigation";
import BrandWave from "./BrandWave";

const links = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const Footer: React.FC = () => {
  const goToSection = useGoToSection();
  const sectionLink = (hash: string) => ({
    href: `/${hash}`,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      goToSection(hash);
    },
  });

  return (
    <footer className="bg-purple-brand text-lavender-white">
      <BrandWave fill="#42104F" className="-mt-px bg-lavender-white text-purple-brand" />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" width={40} height={44} loading="lazy" className="h-10 w-auto" />
              <p className="font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-normal">Emporis Health Care</p>
            </div>
            <p className="mt-4 max-w-[38ch] leading-relaxed font-normal text-lavender-white/70">
              Advancing modern wellness through clinical precision, scientific integrity, and uncompromised care.
            </p>
          </div>

          <nav aria-label="Footer" className="flex items-start gap-10">
            <ul className="grid grid-cols-2 gap-x-10 text-sm sm:grid-cols-1">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a
                    {...sectionLink(href)}
                    className="inline-flex min-h-11 items-center text-lavender-white/70 transition-colors duration-150 hover:text-lavender-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => (lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0 }))}
              aria-label="Back to top"
              className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-lg border border-white/20 text-lavender-white/80 transition-colors duration-150 hover:bg-white/10 hover:text-lavender-white"
            >
              <LuArrowUp className="size-5" aria-hidden />
            </button>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-lavender-white/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Emporis Health Care. All rights reserved.</p>
          <p>Luxury Clinical formulation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
