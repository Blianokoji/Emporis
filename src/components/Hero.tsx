import React from "react";
import { LuArrowRight, LuShieldCheck, LuFlaskConical, LuScale } from "react-icons/lu";
import labImg from "../assets/lab_img.webp";

const assurances = [
  { icon: LuShieldCheck, text: "Made in WHO-GMP certified facilities" },
  { icon: LuFlaskConical, text: "Every batch validated for purity" },
  { icon: LuScale, text: "Exact label dosages, without deviation" },
] as const;

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
    {/* Deep purple vignette with a cyan flare where the lab lights sit */}
    <div
      aria-hidden
      className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_75%_15%,rgba(21,153,208,0.35),transparent_70%),linear-gradient(100deg,rgba(42,9,51,0.95)_0%,rgba(66,16,79,0.82)_45%,rgba(66,16,79,0.45)_100%)]"
    />

    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 pb-12 sm:px-8 lg:px-10">
      <p className="animate-rise text-sm tracking-[0.18em] text-cyan-bright" style={rise(0)}>
        Emporis Health Care
      </p>
      <h1
        className="mt-5 animate-rise font-display text-[clamp(3rem,8.5vw,6.75rem)] leading-[0.98] font-light tracking-[-0.02em]"
        style={rise(80)}
      >
        Redefining Wellness.
        <span className="block text-magenta-vibrant">Restoring Trust.</span>
      </h1>
      <p
        className="mt-7 max-w-[46ch] animate-rise text-[clamp(1.05rem,1.6vw,1.2rem)] leading-relaxed font-light text-lavender-white/85"
        style={rise(180)}
      >
        We are driven by science and compassion, committed to building a healthier tomorrow through innovation,
        integrity, and excellence.
      </p>
      <div className="mt-10 flex animate-rise flex-wrap gap-3" style={rise(260)}>
        <a
          href="#products"
          className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-magenta-vibrant px-7 text-sm font-medium text-white shadow-lg shadow-magenta-vibrant/25 transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-xl hover:shadow-magenta-vibrant/35"
        >
          Explore our products
          <LuArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </a>
        <a
          href="#about"
          className="inline-flex min-h-12 items-center rounded-full border border-lavender-white/30 px-7 text-sm font-medium text-lavender-white transition-colors duration-300 hover:border-lavender-white hover:bg-blue-health"
        >
          About Emporis
        </a>
      </div>
    </div>

    <div className="border-t border-lavender-white/15 bg-purple-deep/40 backdrop-blur-sm">
      <ul className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-3 sm:px-8 lg:px-10">
        {assurances.map(({ icon: Icon, text }, i) => (
          <li key={text} className="flex animate-rise items-center gap-3 text-sm text-lavender-white/85" style={rise(360 + i * 70)}>
            <Icon className="size-5 shrink-0 text-cyan-bright" aria-hidden />
            {text}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
