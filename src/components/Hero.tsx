import React from "react";
import { LuArrowDown } from "react-icons/lu";
import labImg from "../assets/lab_img.webp";
import BrandWave from "./BrandWave";

// Entrance delays stack on top of --intro, which is 1s while the preloader veil lifts.
const rise = (ms: number) => ({ animationDelay: `calc(var(--intro, 0s) + ${ms}ms)` });

const Hero: React.FC = () => (
  <section id="home" className="relative isolate flex min-h-svh flex-col overflow-hidden bg-purple-deep text-lavender-white">
    <img
      src={labImg}
      alt=""
      width={2560}
      height={1435}
      fetchPriority="high"
      className="absolute inset-0 -z-20 size-full object-cover object-[60%_center]"
    />
    {/* Directional scrim in the deepest brand purple: dense behind the copy, thin over the lab so the photo keeps its own colour */}
    <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-purple-deep/85 via-purple-deep/55 to-purple-deep/15" />

    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 pb-12 sm:px-8 lg:px-10">
      <p className="animate-rise text-base text-lavender-white/70" style={rise(0)}>
        Emporis Health Care
      </p>
      <h1
        className="mt-4 animate-rise font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] font-normal tracking-[-0.02em]"
        style={rise(80)}
      >
        Redefining Wellness.
        <span className="block text-lavender-white/70">Restoring Trust.</span>
      </h1>
      <p
        className="mt-7 max-w-[46ch] animate-rise text-[clamp(1.05rem,1.6vw,1.2rem)] leading-relaxed text-lavender-white/85"
        style={rise(160)}
      >
        We are driven by science and compassion, committed to building a healthier tomorrow through innovation,
        integrity, and excellence.
      </p>
      <div className="mt-10 animate-rise" style={rise(240)}>
        <a
          href="#products"
          className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-magenta-vibrant px-7 text-sm font-medium text-white transition-colors duration-150 hover:bg-magenta-vibrant/85"
        >
          Explore Our Products
          <LuArrowDown className="size-4" aria-hidden />
        </a>
      </div>
    </div>

    <BrandWave fill="#F7F3FA" className="-mb-px text-lavender-white" />
  </section>
);

export default Hero;
