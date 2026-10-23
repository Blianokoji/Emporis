import React from "react";
import img1 from "../assets/grid_img_1.webp";
import img2 from "../assets/grid_img_2.webp";
import img3 from "../assets/grid_img_3.webp";

const values = [
  {
    title: "Uncompromising Quality",
    desc: "Every formulation is manufactured under stringent quality standards and scientific precision.",
  },
  {
    title: "Cost-Effective Access",
    desc: "We believe healthcare should be equitable and affordable for all.",
  },
  {
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

// Laboratory photographs and value words, set as two slowly drifting strips.
type Tile = { img: string; alt: string } | string;
const lab1 = { img: img1, alt: "A scientist pipetting samples beside a microscope" };
const lab2 = { img: img2, alt: "A researcher examining a sample under a microscope" };
const lab3 = { img: img3, alt: "Test tubes and a flask of green solution in a laboratory" };
const STRIPS: ReadonlyArray<{ tiles: Tile[]; reverse: boolean }> = [
  { tiles: [lab1, "Quality", "Care", lab2, "Innovation", "Integrity", lab3, "Excellence"], reverse: false },
  { tiles: ["Access", lab3, "Trust", "Health", lab1, "Science", "Safety", lab2, "Affordability"], reverse: true },
];

/** Small hexagon (echoing the pack artwork) set between two adjacent words. */
const Glyph: React.FC = () => (
  <li aria-hidden className="flex shrink-0 items-center">
    <span className="hex block size-2 bg-purple-brand/25" />
  </li>
);

const Strip: React.FC<{ tiles: Tile[] }> = ({ tiles }) => (
  <>
    {tiles.map((tile, i) => {
      // Look past the end so the glyph also appears where the strip wraps onto its duplicate copy.
      const next = tiles[(i + 1) % tiles.length];
      if (typeof tile !== "string") {
        return (
          <li key={i} className="aspect-[3/2] h-full shrink-0 overflow-hidden rounded-xl">
            <img src={tile.img} alt={tile.alt} width={1800} height={1200} loading="lazy" decoding="async" className="size-full object-cover" />
          </li>
        );
      }
      return (
        <React.Fragment key={i}>
          <li className="flex shrink-0 items-center font-display text-[clamp(2rem,4vw,3.25rem)] leading-none font-normal text-ink-deep/85">
            {tile}
          </li>
          {typeof next === "string" && <Glyph />}
        </React.Fragment>
      );
    })}
  </>
);

const About: React.FC = () => (
  <section id="about" className="overflow-hidden bg-white py-[clamp(4.5rem,10vw,8rem)]">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-20">
        <h2 className="font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-none font-normal tracking-[-0.02em] text-ink-deep">
          Where Quality Meets Care
        </h2>
        <p className="max-w-[52ch] text-[clamp(1.05rem,1.5vw,1.2rem)] leading-relaxed text-ink-soft">
          Emporis Health Care — a pharmaceutical company established with a vision to deliver high-quality,
          cost-effective, and accessible healthcare products that enhance everyday wellness.
        </p>
      </div>
    </div>

    {/* Full-bleed drifting strips; the aria-hidden second copy makes each loop seamless */}
    <div className="pause-on-hover mt-16 space-y-4 md:space-y-6">
      {STRIPS.map(({ tiles, reverse }, s) => (
        <div key={s} className="h-28 md:h-40">
          <div
            className="flex h-full w-max animate-marquee"
            style={reverse ? { animationDirection: "reverse" } : undefined}
          >
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1 || undefined} className="flex h-full shrink-0 gap-8 pr-8 md:gap-12 md:pr-12">
                <Strip tiles={tiles} />
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      {/* Editorial columns: a hairline over each, its opening segment drawn in brand purple */}
      <ul className="mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-12">
        {values.map(({ title, desc }) => (
          <li key={title} className="relative border-t border-purple-brand/10 pt-6">
            <span aria-hidden className="absolute -top-px left-0 h-0.5 w-10 bg-purple-brand" />
            <h3 className="font-display text-[clamp(1.4rem,2vw,1.6rem)] leading-tight font-semibold text-ink-deep">{title}</h3>
            <p className="mt-3 max-w-[40ch] leading-relaxed text-ink-soft">{desc}</p>
          </li>
        ))}
      </ul>

      <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h3 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] leading-none font-normal text-ink-deep">Vision</h3>
          <p className="mt-6 max-w-[65ch] leading-[1.7] text-ink-soft">
            To be a trusted name in global healthcare, known for unmatched quality, innovation, and ethical excellence —
            improving lives with accessible and effective wellness products. We aim to set new benchmarks in safety and
            transparency, foster enduring partnerships with clinicians and communities, and continually invest in research
            to bring science-backed solutions to everyday health. Guided by empathy and integrity, our vision is a
            healthier world where better outcomes are within reach for everyone.
          </p>
        </div>
        <div>
          <h3 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] leading-none font-normal text-ink-deep">Mission</h3>
          <ul className="mt-6 max-w-[60ch] space-y-4">
            {mission.map((item) => (
              <li key={item} className="flex gap-4 leading-relaxed text-ink-soft">
                {/* Square marker centred on the first line (26px line box) */}
                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-purple-brand/40" />
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
