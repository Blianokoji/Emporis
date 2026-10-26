import React from "react";
import emproteinImg from "../assets/emprotein.webp";
import Eyebrow from "./Eyebrow";
import FormulaPanel from "./FormulaPanel";
import FormulaTable, { type FormulaRow } from "./FormulaTable";
import ProductStandard, { type Credential } from "./ProductStandard";
import {
  container,
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

const packFacts = [
  { label: "Flavour", value: "Rabbadi Flavour" },
  { label: "Net weight", value: "200 g" },
];

const nutrients: FormulaRow[] = [
  { id: "protein", name: "Protein (Whey Isolate)", amount: "9 g", role: "Muscle strength & repair" },
  { id: "palatinose", name: "Palatinose (Carbs)", amount: "14.31 g", role: "Slow, sustained energy" },
  { id: "mct", name: "MCT (Fat)", amount: "2.7 g", role: "Easily used energy" },
  { id: "leucine", name: "L-Leucine", amount: "276.54 mg", role: "Muscle recovery" },
  { id: "valine", name: "L-Valine", amount: "184.36 mg", role: "Muscle support" },
  { id: "isoleucine", name: "L-Isoleucine", amount: "141.82 mg", role: "Muscle energy" },
  { id: "potassium", name: "Potassium", amount: "540 mg", role: "Electrolyte balance" },
  { id: "zinc", name: "Zinc", amount: "4.5 mg", role: "Immunity support" },
  { id: "vitamin-d", name: "Vitamin D", amount: "180 IU", role: "Bone & immune health" },
];

/** Set to the licence number once confirmed; the FSSAI row renders only when present. */
const FSSAI_LICENCE: string | null = null;

const credentials: Credential[] = [
  { label: "Marketed by", value: "EMPORIS HEALTH CARE" },
  { label: "Manufactured by", value: "BodyScience Nutrition" },
  ...(FSSAI_LICENCE ? [{ label: "FSSAI Lic. No.", value: FSSAI_LICENCE }] : []),
];

const EmprotinoSection: React.FC = () => {
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
                branched-chain amino acids and the added advantage of <strong className="font-semibold">palatinose</strong>. It is designed to help adults
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
              alt="Emprotino Whey Isolate canister with Amino Acids on studio reflection surface"
              width={853}
              height={1052}
              decoding="async"
              className="absolute inset-0 size-full object-cover object-[50%_40%]"
            />
          </div>
        </div>
      </div>

      {/* ─── Formula at a glance ─── */}
      <FormulaPanel
        heading="EMPROTINO"
        count={`${nutrients.length} Core Actives`}
      >
        <FormulaTable
          headings={["Nutrients", "Per serving", "Primary role"]}
          rows={nutrients}
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
