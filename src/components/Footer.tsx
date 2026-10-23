import React from "react";
import { LuArrowUp } from "react-icons/lu";
import logo from "../assets/emporis_logo.webp";

const links = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Embiotin™", href: "#embiotin" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const Footer: React.FC = () => (
  <footer className="border-t border-magenta-vibrant/20 bg-purple-brand text-lavender-white">
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-10">
      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={40} height={44} loading="lazy" className="h-10 w-auto" />
            <p className="font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-light">Emporis Health Care</p>
          </div>
          <p className="mt-4 max-w-[38ch] leading-relaxed font-light text-lavender-white/70">
            Advancing modern wellness through clinical precision, scientific integrity, and uncompromised care.
          </p>
        </div>

        <nav aria-label="Footer" className="flex items-start gap-10">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:grid-cols-1">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="text-lavender-white/70 transition-colors hover:text-magenta-vibrant">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#home"
            aria-label="Back to top"
            className="group grid size-12 shrink-0 place-items-center rounded-full border border-lavender-white/25 transition-colors hover:border-magenta-vibrant hover:bg-magenta-vibrant"
          >
            <LuArrowUp className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden />
          </a>
        </nav>
      </div>

      <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-lavender-white/55 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Emporis Health Care. All rights reserved.</p>
        <p>Edappally, Kochi, Kerala, India</p>
      </div>
    </div>
  </footer>
);

export default Footer;
