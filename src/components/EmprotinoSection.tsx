import React, { useState } from "react";
import emproteinImg from "../assets/emprotein.webp";
import Eyebrow from "./Eyebrow";
import FormulaPanel from "./FormulaPanel";
import FormulaTable, { type FormulaRow } from "./FormulaTable";
import ProductStandard, { type Credential } from "./ProductStandard";
import {
  container,
  productAccent,
  sectionPad,
  spotlightBand,
  spotlightCopy,
  spotlightFrame,
  spotlightGrid,
  spotlightLabel,
  spotlightName,
  spotlightSubtitle,
} from "./productLayout";

// Copy and figures are transcribed from the Emprotino brochure.

const accent = productAccent.emprotino;

const packFacts = [
  { label: "Flavour", value: "Rabbadi Flavour" },
  { label: "Net weight", value: "200 g" },
];

// The serving bar is the one categorical chart: a mid brand blue, cyan and green (validated for CVD on lavender-white,
// each with a direct label). Every other row marks in the Emprotino accent.
const protein: FormulaRow = { id: "protein", name: "Protein (Whey Isolate)", amount: "9 g", role: "Muscle strength & repair", tone: "bg-[#4560C4]" };
const palatinose: FormulaRow = { id: "palatinose", name: "Palatinose (Carbs)", amount: "14.31 g", role: "Slow, sustained energy", tone: "bg-cyan-bright" };
const mct: FormulaRow = { id: "mct", name: "MCT (Fat)", amount: "2.7 g", role: "Easily used energy", tone: "bg-green-health" };
const leucine: FormulaRow = { id: "leucine", name: "L-Leucine", amount: "276.54 mg", role: "Muscle recovery", tone: accent.fill };
const valine: FormulaRow = { id: "valine", name: "L-Valine", amount: "184.36 mg", role: "Muscle support", tone: accent.fill };
const isoleucine: FormulaRow = { id: "isoleucine", name: "L-Isoleucine", amount: "141.82 mg", role: "Muscle energy", tone: accent.fill };

const nutrients: FormulaRow[] = [
  protein,
  palatinose,
  mct,
  leucine,
  valine,
  isoleucine,
  { id: "potassium", name: "Potassium", amount: "540 mg", role: "Electrolyte balance", tone: accent.fill },
  { id: "zinc", name: "Zinc", amount: "4.5 mg", role: "Immunity support", tone: accent.fill },
  { id: "vitamin-d", name: "Vitamin D", amount: "180 IU", role: "Bone & immune health", tone: accent.fill },
];

const SERVING_G = 30;
const MACROS = [
  { nutrient: protein, grams: 9 },
  { nutrient: palatinose, grams: 14.31 },
  { nutrient: mct, grams: 2.7 },
] as const;
const AMINO_ACIDS = [
  { nutrient: leucine, mg: 276.54 },
  { nutrient: valine, mg: 184.36 },
  { nutrient: isoleucine, mg: 141.82 },
] as const;
const AMINO_MAX = Math.max(...AMINO_ACIDS.map((a) => a.mg));

/** Set to the licence number once confirmed; the FSSAI row renders only when present. */
const FSSAI_LICENCE: string | null = null;

const credentials: Credential[] = [
  { label: "Marketed by", value: "EMPORIS HEALTH CARE" },
  { label: "Manufactured by", value: "BodyScience Nutrition" },
  ...(FSSAI_LICENCE ? [{ label: "FSSAI Lic. No.", value: FSSAI_LICENCE }] : []),
];

/** Nutrition-facts strip: value on top, label beneath, a hairline between facts. */
const factCell = "flex flex-col-reverse justify-end gap-1 px-4 py-3 first:pl-0 last:pr-0 sm:px-6";
const factValue = "text-lg font-medium whitespace-nowrap text-ink-deep tabular-nums";

const EmprotinoSection: React.FC = () => {
  const [activeId, setActiveId] = useState(protein.id);
  const emphasis = (id: string) => (id === activeId ? "opacity-100" : "opacity-55");

  return (
    <section id="emprotino" aria-labelledby="emprotino-title">
      {/* ─── Product spotlight ─── */}
      <div className={`${spotlightBand} ${sectionPad}`}>
        <div className={`${container} ${spotlightGrid}`}>
          <div>
            <Eyebrow tone={spotlightLabel}>Product Spotlight</Eyebrow>
            <h1 id="emprotino-title" className="mt-6 font-display font-normal">
              <span className={spotlightName}>EMPROTINO</span>
              <span className={spotlightSubtitle}>Whey Isolate with Amino Acids</span>
            </h1>
            <div className={spotlightCopy}>
              <p className="font-display text-[clamp(1.25rem,2vw,1.5rem)] leading-snug font-semibold text-ink-deep">
                Empower Your Health with EMPROTINO
              </p>
              <p>
                Emprotino is a premium whey isolate supplement (30 g whey isolate per 100 g) with essential
                branched-chain amino acids and the added advantage of palatinose. It is designed to help adults
                recovering from illness, older adults and those with weakened health regain strength, maintain muscle
                mass and improve overall nutrition.
              </p>
            </div>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-purple-brand/10 pt-6">
              {packFacts.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-sm text-muted-plum">{label}</dt>
                  <dd className="mt-1 text-lg text-ink-deep tabular-nums">{value}</dd>
                </div>
              ))}
            </dl>
            {/* Pack claims from the brochure, set as plain text */}
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink-soft">
              <li>Nutraceutical Supplement</li>
              <li>No Added Sugar</li>
            </ul>
          </div>
          <div data-reveal="image" className={spotlightFrame}>
            <img
              src={emproteinImg}
              alt="A tub of Emprotino whey protein beside a shaker bottle"
              width={1600}
              height={1120}
              decoding="async"
              className="absolute inset-0 size-full object-cover object-[60%_50%]"
            />
          </div>
        </div>
      </div>

      {/* ─── Formula at a glance (serving visualiser; the table holds the full data) ─── */}
      <FormulaPanel
        heading="EMPROTINO"
        count={`${nutrients.length} Core Actives`}
        visual={
          <div className="space-y-8">
            <dl className="grid grid-cols-[auto_auto_auto] justify-start divide-x divide-purple-brand/10 border-y border-purple-brand/10">
              <div className={factCell}>
                <dt className="text-sm text-muted-plum">Energy</dt>
                <dd className={factValue}>120.5 kcal</dd>
              </div>
              <div className={factCell}>
                <dt className="sr-only">Sugar</dt>
                <dd className="text-sm text-muted-plum">
                  <span className={`block ${factValue}`}>0 g</span> sugar
                </dd>
              </div>
              <div className={factCell}>
                <dt className="sr-only">Fibre</dt>
                <dd className="text-sm text-muted-plum">
                  <span className={`block ${factValue}`}>1.5 g</span> fibre
                </dd>
              </div>
            </dl>

            <figure>
              <figcaption className="text-sm text-ink-soft">Serving size: 2 scoops (30 g)</figcaption>
              <div aria-hidden className="mt-4 flex h-3 gap-0.5 overflow-hidden rounded-sm bg-purple-brand/10">
                {MACROS.map(({ nutrient, grams }) => (
                  <span
                    key={nutrient.id}
                    onPointerEnter={() => setActiveId(nutrient.id)}
                    className={`h-full transition-opacity duration-300 ${nutrient.tone} ${emphasis(nutrient.id)}`}
                    style={{ width: `${(grams / SERVING_G) * 100}%` }}
                  />
                ))}
              </div>
              <ul aria-hidden className="mt-4 space-y-2 text-sm">
                {MACROS.map(({ nutrient }) => (
                  <li
                    key={nutrient.id}
                    onPointerEnter={() => setActiveId(nutrient.id)}
                    className={`flex items-center gap-3 transition-opacity duration-300 ${emphasis(nutrient.id)}`}
                  >
                    <span className={`size-2.5 rounded-full ${nutrient.tone}`} />
                    <span className="text-ink-soft">{nutrient.name}</span>
                    <span className="ml-auto tabular-nums">{nutrient.amount}</span>
                  </li>
                ))}
              </ul>
            </figure>

            <ul aria-hidden className="space-y-3">
              {AMINO_ACIDS.map(({ nutrient, mg }) => (
                <li
                  key={nutrient.id}
                  onPointerEnter={() => setActiveId(nutrient.id)}
                  className={`transition-opacity duration-300 ${emphasis(nutrient.id)}`}
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-ink-soft">{nutrient.name}</span>
                    <span className="tabular-nums">{nutrient.amount}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-sm bg-purple-brand/10">
                    <div className={`h-full rounded-sm ${nutrient.tone}`} style={{ width: `${(mg / AMINO_MAX) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <FormulaTable
          headings={["Nutrients", "Per serving", "Primary role"]}
          rows={nutrients}
          activeId={activeId}
          onActivate={setActiveId}
          footnote="+ 11 more vitamins & 4 more minerals"
        />
      </FormulaPanel>

      <ProductStandard title="The Emprotino Standard" credentials={credentials}>
        The Emporis Emprotino standard dictates the use of only high-grade, premium raw materials to ensure maximum
        bioavailability and effectiveness. Like all clinical solutions by Emporis Health Care—including
        Embiotin—Emprotino contains precisely the ingredients listed on the label, in the exact dosages specified in
        the formulation, without deviation.
      </ProductStandard>
    </section>
  );
};

export default EmprotinoSection;
