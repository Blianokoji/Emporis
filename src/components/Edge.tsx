import React from "react";
import { LuCircleCheck, LuShieldCheck } from "react-icons/lu";
import SpotlightCard from "./SpotlightCard";
import edgeImg from "../assets/emporis_edge.webp";

const standards = [
  "Developed under certified WHO-GMP standard facilities",
  "Rigorous batch validation ensuring maximum purity",
  "Consistent therapeutic release profiling",
  "Uncompromised bio-equivalence value",
];

const Edge: React.FC = () => (
  <section id="edge" aria-labelledby="edge-title" className="grid bg-purple-brand md:grid-cols-2">
    <SpotlightCard className="flex items-center px-5 py-[clamp(4.5rem,9vw,7rem)] text-lavender-white sm:px-8 md:px-12 lg:px-20">
      <div className="relative max-w-xl">
        <h2 id="edge-title" className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none font-light tracking-[-0.01em]">
          The Emporis Edge
        </h2>
        <p className="mt-6 leading-[1.8] font-light text-lavender-white/85">
          At Emporis, we don’t just manufacture formulations — we build long-term trust through absolute scientific
          integrity, transparency, and ethical standards.
        </p>
        <p className="mt-4 leading-[1.8] font-light text-lavender-white/65">
          We are steadily expanding our portfolio across therapeutic areas, focusing on nutritional, gastrointestinal,
          and general wellness segments to serve every phase of care.
        </p>
        <ul className="mt-9 space-y-3.5">
          {standards.map((s) => (
            <li key={s} className="flex items-start gap-3 text-[0.95rem] text-lavender-white">
              <LuCircleCheck className="mt-0.5 size-5 shrink-0 text-cyan-bright" aria-hidden />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </SpotlightCard>

    <div className="relative min-h-[22rem] md:min-h-full">
      <img
        src={edgeImg}
        alt="A pharmacist sorting formulations in an Emporis quality-control lab"
        width={2048}
        height={2560}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-purple-deep/70 via-transparent to-transparent md:bg-linear-to-r md:from-purple-brand/50" />
      <p className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-purple-brand backdrop-blur">
        <LuShieldCheck className="size-4 text-blue-health" aria-hidden />
        WHO-GMP certified manufacturing
      </p>
    </div>
  </section>
);

export default Edge;
