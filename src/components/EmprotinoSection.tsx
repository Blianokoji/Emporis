import React, { useState } from "react";
import { LuArrowDown, LuArrowUp } from "react-icons/lu";
import emproteinImg from "../assets/emprotein.webp";
import Eyebrow from "./Eyebrow";
import FormulaTable, { type FormulaRow } from "./FormulaTable";
import ProductStandard, { type Credential } from "./ProductStandard";
import {
  container,
  formulaBand,
  formulaCount,
  formulaGrid,
  formulaHeader,
  pillarItem,
  pillarList,
  pillarRule,
  pillarText,
  pillarTitle,
  productAccent,
  sectionPad,
  spotlightBand,
  spotlightCopy,
  spotlightFrame,
  spotlightGrid,
  spotlightLabel,
  spotlightName,
  spotlightSubtitle,
  subheading,
  visualCard,
} from "./productLayout";

// Copy and figures are transcribed from the Emprotino brochure.

const accent = productAccent.emprotino;

const packFacts = [
  { label: "Flavour", value: "Rabbadi Flavour" },
  { label: "Net weight", value: "200 g" },
];

const benefits = [
  { word: "Strengthen", text: "Rebuild muscle mass and strength" },
  { word: "Nourish", text: "Supports gut health" },
  { word: "Revitalize", text: "Sustained energy and support" },
  { word: "Maintain", text: "Supports immunity" },
] as const;

const comparison = [
  { claim: "Protein", result: "More Protein", up: true },
  { claim: "Lactose", result: "Less Lactose", up: false },
  { claim: "Leucine", result: "More Leucine", up: true },
] as const;

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
            <h2 id="emprotino-title" className="mt-6 font-display font-normal">
              <span className={spotlightName}>EMPROTINO</span>
              <span className={spotlightSubtitle}>Whey Isolate with Amino Acids</span>
            </h2>
            <div className={spotlightCopy}>
              <p className="font-display text-[clamp(1.25rem,2vw,1.5rem)] leading-snug font-semibold text-lavender-white">
                Empower Your Health with EMPROTINO
              </p>
              <p className="text-lavender-white/90">
                Emprotino is a premium whey isolate supplement (30 g whey isolate per 100 g) with essential
                branched-chain amino acids and the added advantage of palatinose. It is designed to help adults
                recovering from illness, older adults and those with weakened health regain strength, maintain muscle
                mass and improve overall nutrition.
              </p>
            </div>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
              {packFacts.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-sm text-lavender-white/65">{label}</dt>
                  <dd className="mt-1 text-lg tabular-nums">{value}</dd>
                </div>
              ))}
            </dl>
            {/* Pack claims from the brochure, set as plain text */}
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-lavender-white/70">
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
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover object-[60%_50%]"
            />
          </div>
        </div>
      </div>

      {/* ─── Benefits ─── */}
      <div className={`bg-white ${sectionPad}`}>
        <div className={container}>
          <h3 className={`text-ink-deep ${subheading}`}>Benefits</h3>
          <ul className={`${pillarList} sm:grid-cols-2 lg:grid-cols-4`}>
            {benefits.map(({ word, text }) => (
              <li key={word} className={pillarItem}>
                <span aria-hidden className={`${pillarRule} ${accent.fill}`} />
                <h4 className={pillarTitle}>{word}</h4>
                <p className={pillarText}>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ─── Whey isolate comparison + palatinose ─── */}
      <div className={`bg-lavender-white ${sectionPad}`}>
        <div className={`${container} grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]`}>
          <div className="min-w-0 rounded-xl border border-purple-brand/10 bg-white p-6 sm:p-10">
            <table className="w-full text-left">
              <caption className="text-left font-display text-[clamp(1.6rem,3vw,2.25rem)] leading-tight text-ink-deep">
                <strong className="font-semibold">WHEY ISOLATE</strong> Vs. Whey Concentrate or Soya Protein
              </caption>
              <thead className="text-sm text-muted-plum">
                <tr className="border-b border-purple-brand/10">
                  <th scope="col" className="pt-8 pb-3 font-medium">Claim</th>
                  <th scope="col" className="pt-8 pb-3 font-medium">Comparison</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(({ claim, result, up }) => (
                  <tr key={claim} className="border-b border-purple-brand/8 last:border-0">
                    <th scope="row" className="py-5 pr-4 font-medium text-ink-deep">{claim}</th>
                    <td className="py-5">
                      <span className="inline-flex items-center gap-3 text-lg text-ink-deep">
                        {up ? (
                          <LuArrowUp className={`size-5 shrink-0 ${accent.text}`} aria-hidden />
                        ) : (
                          <LuArrowDown className={`size-5 shrink-0 ${accent.text}`} aria-hidden />
                        )}
                        {result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-purple-brand/10 bg-white p-6 text-ink-deep sm:p-10">
            <h3 className="text-sm font-medium text-muted-plum">PALATINOSE</h3>
            <p className="mt-8 font-display text-2xl font-normal">
              Low GI:{" "}
              <span className={`block text-[clamp(4.5rem,10vw,6.5rem)] leading-none font-normal tracking-[-0.02em] tabular-nums ${accent.text}`}>
                32
              </span>
            </p>
            <p className="mt-8 max-w-[34ch] leading-[1.6] text-ink-soft">
              Slow, steady energy unlike glucose, sucrose or maltodextrin.
            </p>
          </div>
        </div>
      </div>

      {/* ─── Formula at a glance ─── */}
      <div className={`${formulaBand} ${sectionPad}`}>
        <div className={container}>
          <div className={formulaHeader}>
            <div>
              <Eyebrow>Formula at a Glance</Eyebrow>
              <h3 className={`mt-4 text-ink-deep ${subheading}`}>EMPROTINO</h3>
            </div>
            <p className={formulaCount}>{nutrients.length} Core Actives</p>
          </div>

          <div className={formulaGrid}>
            {/* Serving visualiser; the table holds the full data, so the marks are hidden from assistive tech */}
            <div className={`${visualCard} space-y-8`}>
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

            <div className="min-w-0">
              <FormulaTable
                headings={["Nutrients", "Per serving", "Primary role"]}
                rows={nutrients}
                activeId={activeId}
                onActivate={setActiveId}
                footnote="+ 11 more vitamins & 4 more minerals"
              />
            </div>
          </div>
        </div>
      </div>

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
