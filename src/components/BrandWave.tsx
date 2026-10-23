import React from "react";

// One wave period spans 1440 units; the path repeats it twice so a -50% drift loops seamlessly.
const crest = (y: number, amp: number) =>
  `M0 ${y} C240 ${y - amp} 480 ${y - amp} 720 ${y} S1200 ${y + amp} 1440 ${y} S1920 ${y - amp} 2160 ${y} S2640 ${y + amp} 2880 ${y}`;

// The brochure's flowing ribbons, drawn in one tone (currentColor) at stepped opacities.
const RIBBONS = [
  { d: crest(46, 30), opacity: 0.45, duration: "28s" },
  { d: crest(56, 24), opacity: 0.3, duration: "36s" },
  { d: crest(64, 34), opacity: 0.2, duration: "46s" },
  { d: crest(72, 20), opacity: 0.12, duration: "54s" },
] as const;

interface BrandWaveProps {
  /** Colour of the section the wave flows into. */
  fill: string;
  /** Include a text-* class: the ribbons stroke in currentColor. */
  className?: string;
}

const svgClass = "absolute inset-y-0 left-0 h-full w-[200%] animate-drift";

/** Animated tonal wave that hands one section over to the next. */
const BrandWave: React.FC<BrandWaveProps> = ({ fill, className = "" }) => (
  <div aria-hidden className={`pointer-events-none relative h-16 overflow-hidden md:h-24 ${className}`}>
    {RIBBONS.map(({ d, opacity, duration }) => (
      <svg
        key={duration}
        viewBox="0 0 2880 120"
        preserveAspectRatio="none"
        className={svgClass}
        style={{ animationDuration: duration }}
      >
        <path d={d} fill="none" stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" opacity={opacity} />
      </svg>
    ))}
    <svg viewBox="0 0 2880 120" preserveAspectRatio="none" className={svgClass} style={{ animationDuration: "40s" }}>
      <path d={`${crest(80, 22)} V120 H0 Z`} fill={fill} />
    </svg>
  </div>
);

export default BrandWave;
