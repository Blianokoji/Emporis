import React from "react";
import { LuShieldCheck, LuHandHeart, LuFlaskConical, LuCheck } from "react-icons/lu";
import labPortrait from "../assets/grid_img_1.webp";

const values = [
  {
    icon: LuShieldCheck,
    accent: "text-blue-health bg-blue-health/10",
    bar: "bg-blue-health",
    title: "Uncompromising Quality",
    desc: "Every formulation is manufactured under stringent quality standards and scientific precision.",
  },
  {
    icon: LuHandHeart,
    accent: "text-green-health bg-green-health/10",
    bar: "bg-green-health",
    title: "Cost-Effective Access",
    desc: "We believe healthcare should be equitable and affordable for all.",
  },
  {
    icon: LuFlaskConical,
    accent: "text-magenta-vibrant bg-magenta-vibrant/10",
    bar: "bg-magenta-vibrant",
    title: "Continuous Innovation",
    desc: "Our R&D-driven approach ensures modern, safe, and effective solutions for evolving health needs.",
  },
] as const;

const mission = [
  "Develop and deliver scientifically proven, safe, and effective healthcare solutions.",
  "Bridge the gap between quality and affordability in pharma and nutraceutical markets.",
  "Empower individuals and healthcare professionals through trust and transparency.",
  "Expand globally through innovation and sustainable partnerships.",
];

const About: React.FC = () => (
  <section id="about" className="bg-white py-[clamp(4.5rem,10vw,8rem)]">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-none font-light tracking-[-0.02em] text-ink-deep">
            Where quality meets care
          </h2>
          <p className="mt-6 max-w-[52ch] text-[clamp(1.05rem,1.5vw,1.2rem)] leading-relaxed font-light text-muted-plum">
            Emporis Health Care — a pharmaceutical company established with a vision to deliver high-quality,
            cost-effective, and accessible healthcare products that enhance everyday wellness.
          </p>
        </div>
        <img
          src={labPortrait}
          alt="An Emporis scientist preparing samples in the laboratory"
          width={6016}
          height={4016}
          loading="lazy"
          decoding="async"
          className="aspect-[3/2] w-full rounded-[2rem] object-cover"
        />
      </div>

      <ul className="mt-16 grid gap-5 md:grid-cols-3">
        {values.map(({ icon: Icon, accent, bar, title, desc }) => (
          <li key={title} className="relative overflow-hidden rounded-3xl bg-lavender-white p-7">
            <span className={`absolute inset-x-0 top-0 h-1 ${bar}`} aria-hidden />
            <span className={`grid size-11 place-items-center rounded-full ${accent}`}>
              <Icon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink-deep">{title}</h3>
            <p className="mt-2 leading-relaxed text-muted-plum">{desc}</p>
          </li>
        ))}
      </ul>

      <div className="mt-20 grid gap-12 border-t border-purple-brand/10 pt-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h3 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] leading-none font-light text-ink-deep">Vision</h3>
          <p className="mt-5 leading-[1.8] text-muted-plum">
            To be a trusted name in global healthcare, known for unmatched quality, innovation, and ethical excellence —
            improving lives with accessible and effective wellness products. We aim to set new benchmarks in safety and
            transparency, foster enduring partnerships with clinicians and communities, and continually invest in research
            to bring science-backed solutions to everyday health. Guided by empathy and integrity, our vision is a
            healthier world where better outcomes are within reach for everyone.
          </p>
        </div>
        <div>
          <h3 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] leading-none font-light text-ink-deep">Mission</h3>
          <ul className="mt-5 space-y-4">
            {mission.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-muted-plum">
                <LuCheck className="mt-1 size-5 shrink-0 text-green-health" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
