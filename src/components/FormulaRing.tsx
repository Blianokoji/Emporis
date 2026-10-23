import React from "react";
import type { FormulaRow } from "./FormulaTable";

interface FormulaRingProps {
  ingredients: readonly FormulaRow[];
  activeId: string;
  onActivate: (id: string) => void;
}

// Flat-top hexagon ring geometry, in percent of container width.
const HEX_W = 30;
const HEX_H = HEX_W * 0.866;
const GAP = 1.07;
const RING: ReadonlyArray<readonly [number, number]> = [
  [0, -1],
  [0.75, -0.5],
  [0.75, 0.5],
  [0, 1],
  [-0.75, 0.5],
  [-0.75, -0.5],
];
const CENTER_Y = HEX_H * GAP + HEX_H / 2;
const BOX_H = 2 * CENTER_Y; // container height, in % of width

function hexStyle(dx: number, dy: number): React.CSSProperties {
  const cx = 50 + dx * HEX_W * GAP;
  const cy = CENTER_Y + dy * HEX_H * GAP;
  return {
    left: `${cx - HEX_W / 2}%`,
    top: `${((cy - HEX_H / 2) / BOX_H) * 100}%`,
    width: `${HEX_W}%`,
    height: `${(HEX_H / BOX_H) * 100}%`,
  };
}

/**
 * The six Embiotin actives as a hexagonal ring, echoing the pack artwork.
 * Each cell carries its table row number and dosage; pointing at one highlights the
 * matching row. The table holds the full data, so the ring is hidden from assistive tech.
 */
const FormulaRing: React.FC<FormulaRingProps> = ({ ingredients, activeId, onActivate }) => (
  <div aria-hidden className="relative mx-auto w-full max-w-[30rem] select-none" style={{ aspectRatio: `100 / ${BOX_H}` }}>
    <div
      className="hex absolute grid place-items-center bg-purple-brand font-display text-[clamp(0.8rem,2.3vw,1.15rem)] tracking-[0.02em] text-lavender-white"
      style={hexStyle(0, 0)}
    >
      EMBIOTIN
    </div>

    {ingredients.map((ing, i) => {
      const [dx, dy] = RING[i % RING.length];
      const isActive = ing.id === activeId;
      return (
        <div
          key={ing.id}
          onPointerEnter={() => onActivate(ing.id)}
          onClick={() => onActivate(ing.id)}
          className={`hex absolute grid cursor-pointer place-items-center text-center transition-[background-color,scale] duration-500 ease-out-expo ${
            isActive ? `${ing.tone} scale-[1.07] text-white` : "bg-white text-ink-deep hover:bg-purple-brand/[0.06]"
          }`}
          style={hexStyle(dx, dy)}
        >
          <span>
            <span className="block text-[clamp(0.75rem,1.8vw,0.875rem)] tabular-nums opacity-60">
              {String(i + 1).padStart(2, "0")}
            </span>
            {ing.amount.split(" / ").map((part, j) => (
              <span
                key={part}
                className={`block font-medium tabular-nums ${
                  j === 0 ? "mt-0.5 text-[clamp(0.75rem,2.2vw,1.05rem)]" : "text-[clamp(0.75rem,1.5vw,0.8rem)] opacity-75"
                }`}
              >
                {part}
              </span>
            ))}
          </span>
        </div>
      );
    })}
  </div>
);

export default FormulaRing;
