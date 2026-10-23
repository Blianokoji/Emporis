import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";

export interface Ingredient {
  id: string;
  name: string;
  short: string;
  dosage: string;
  role: string;
  /** Tailwind background class for the active hexagon. */
  tone: string;
}

interface FormulaExplorerProps {
  ingredients: readonly Ingredient[];
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
 * The six Embiotin™ actives arranged as a hexagonal ring, echoing the pack artwork.
 * Built on Radix Tabs, so arrow keys move around the ring and the panel is announced.
 */
const FormulaExplorer: React.FC<FormulaExplorerProps> = ({ ingredients }) => {
  const [active, setActive] = useState(ingredients[3]?.id ?? ingredients[0].id);

  return (
    <Tabs.Root
      value={active}
      onValueChange={setActive}
      orientation="horizontal"
      className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16"
    >
      <div className="relative mx-auto w-full max-w-[34rem]" style={{ aspectRatio: `100 / ${BOX_H}` }}>
        <div
          aria-hidden
          className="hex absolute grid place-items-center bg-lavender-white text-center text-purple-brand"
          style={hexStyle(0, 0)}
        >
          <span>
            <span className="block font-display text-[clamp(1.1rem,3.2vw,1.6rem)] leading-none">Embiotin™</span>
            <span className="mt-1 block font-tech text-[clamp(0.6rem,1.6vw,0.75rem)] text-muted-plum">per tablet</span>
          </span>
        </div>

        <Tabs.List aria-label="Embiotin active ingredients" loop className="absolute inset-0">
          {ingredients.map((ing, i) => {
            const [dx, dy] = RING[i % RING.length];
            const isActive = ing.id === active;
            return (
              <Tabs.Trigger
                key={ing.id}
                value={ing.id}
                className={`hex absolute grid cursor-pointer place-items-center px-[6%] text-center transition-[background-color,transform] duration-500 ease-out-expo focus-visible:outline-none focus-visible:[&>span]:underline focus-visible:[&>span]:underline-offset-4 ${
                  isActive ? `${ing.tone} scale-[1.06] text-white` : "bg-white/[0.07] text-lavender-white/85 hover:bg-white/[0.14]"
                }`}
                style={hexStyle(dx, dy)}
              >
                <span>
                  <span
                    aria-hidden
                    className={`mx-auto mb-1.5 block size-1.5 rounded-full ${isActive ? "bg-white" : ing.tone}`}
                  />
                  <span className="block text-[clamp(0.7rem,2vw,0.95rem)] leading-tight font-medium">{ing.short}</span>
                  <span className="mt-1 block font-tech text-[clamp(0.6rem,1.6vw,0.75rem)] opacity-80">{ing.dosage.split(" / ")[0]}</span>
                </span>
              </Tabs.Trigger>
            );
          })}
        </Tabs.List>
      </div>

      {ingredients.map((ing) => (
        <Tabs.Content key={ing.id} value={ing.id} className="focus-visible:outline-none lg:min-h-[17rem]">
          <p className="font-tech text-sm text-lavender-white/60">Active ingredient</p>
          <h4 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-normal text-lavender-white">
            {ing.name}
          </h4>
          <p className="mt-6 font-tech text-[clamp(2.5rem,6vw,4rem)] leading-none font-medium tracking-tight text-gradient-vitality">
            {ing.dosage.split(" / ")[0]}
          </p>
          {ing.dosage.includes(" / ") && (
            <p className="mt-2 font-tech text-lavender-white/60">= {ing.dosage.split(" / ")[1]}</p>
          )}
          <p className="mt-6 border-l-2 border-magenta-vibrant pl-4 font-display text-2xl text-lavender-white/90 italic">
            {ing.role}
          </p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default FormulaExplorer;
