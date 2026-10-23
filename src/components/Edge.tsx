import React from "react";
import Eyebrow from "./Eyebrow";
import edgeImg from "../assets/emporis_edge.webp";

const standards = [
  "Developed under certified WHO-GMP standard facilities",
  "Rigorous batch validation ensuring maximum purity",
  "Consistent therapeutic release profiling",
  "Uncompromised bio-equivalence value",
];

const Edge: React.FC = () => (
  <section id="edge" aria-labelledby="edge-title" className="grid bg-purple-brand text-lavender-white lg:grid-cols-2">
    <div className="flex items-center px-5 pt-[clamp(4.5rem,10vw,8rem)] pb-12 sm:px-8 md:px-12 lg:pb-[clamp(4.5rem,10vw,8rem)] xl:px-20">
      <div className="max-w-xl">
        <Eyebrow tone="text-lavender-white/60">Corporate Distinction</Eyebrow>
        <h2 id="edge-title" className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] font-normal tracking-[-0.01em]">
          The Emporis Edge
        </h2>
        <p className="mt-6 leading-relaxed text-lavender-white/85">
          At Emporis, we don’t just manufacture formulations — we build long-term trust through absolute scientific
          integrity, transparency, and ethical standards.
        </p>
        <p className="mt-4 leading-relaxed text-lavender-white/70">
          We are steadily expanding our portfolio across therapeutic areas, focusing on nutritional, gastrointestinal,
          and general wellness segments to serve every phase of care.
        </p>
        <ul className="mt-10 border-t border-lavender-white/15">
          {standards.map((s) => (
            <li key={s} className="border-b border-lavender-white/15 py-4 leading-snug">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Portrait source (4:5): framed at its natural ratio when stacked, full-bleed beside the copy on desktop,
        anchored low so the analyst stays in frame */}
    <div className="relative px-5 pb-[clamp(4.5rem,10vw,8rem)] sm:px-8 md:px-12 lg:p-0">
      <div
        data-reveal="image"
        className="relative aspect-[4/5] max-w-lg overflow-hidden rounded-xl lg:absolute lg:inset-0 lg:aspect-auto lg:max-w-none lg:rounded-none"
      >
        <img
          src={edgeImg}
          alt="A pharmacist sorting formulations in an Emporis quality-control lab"
          width={1400}
          height={1750}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover object-[50%_70%]"
        />
      </div>
    </div>
  </section>
);

export default Edge;
