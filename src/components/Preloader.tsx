import React from "react";
import logo from "../assets/emporis_logo.webp";

interface PreloaderProps {
  onDone: () => void;
}

/** Brand intro: the mark settles, a magenta rule draws, then the veil lifts off the hero. */
const Preloader: React.FC<PreloaderProps> = ({ onDone }) => (
  <div
    aria-hidden="true"
    className="fixed inset-0 z-[100] flex animate-veil flex-col items-center justify-center bg-purple-brand"
    onAnimationEnd={(e) => {
      if (e.animationName === "veil") onDone();
    }}
  >
    <div className="flex animate-rise items-center gap-4">
      <img src={logo} alt="" width={44} height={52} className="h-12 w-auto" />
      <span className="font-display text-3xl font-normal text-lavender-white md:text-4xl">Emporis Health Care</span>
    </div>
    <span className="mt-6 block h-px w-40 origin-left animate-draw bg-magenta-vibrant" />
  </div>
);

export default Preloader;
