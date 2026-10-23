import React, { useState } from "react";
import embiotin2 from "../assets/embiotin_2.webp";
import FormulaRing from "./FormulaRing";
import FormulaTable, { type FormulaRow } from "./FormulaTable";
import ProductStandard from "./ProductStandard";
import Eyebrow from "./Eyebrow";
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

const accent = productAccent.embiotin;

const ingredients: FormulaRow[] = [
  {
    id: "pantothenate",
    name: "Calcium Pantothenate (Vitamin B5)",
    amount: "100 mg",
    role: "Precursor to Coenzyme A (CoA) for myelin sheath synthesis & cellular energy; prevents deficiency neuropathies & 'burning feet syndrome'",
    tone: accent.fill,
  },
  { id: "nac", name: "N-Acetylcysteine (NAC)", amount: "50 mg", role: "The Cellular Guardian & Master Antioxidant", tone: accent.fill },
  { id: "zinc", name: "Zinc Oxide (Elemental Zinc)", amount: "22.5 mg", role: "Growth & Repair Catalyst", tone: accent.fill },
  { id: "biotin", name: "Biotin", amount: "10 mg / 10,000 mcg", role: "Keratin Architect & Essential Metabolic Cofactor", tone: accent.fill },
  { id: "copper", name: "Cupric Oxide (Elemental Copper)", amount: "3 mg", role: "Structural & Pigment Anchor", tone: accent.fill },
  { id: "selenium", name: "Sodium Selenite (Elemental Selenium)", amount: "65 mcg", role: "Scalp Health & Cellular Protection", tone: accent.fill },
];

const pillars = [
  {
    letter: "B",
    word: "Build",
    text: "Supplying essential substrates and micronutrients required for myelin sheath maintenance, rapid cellular division, and healthy tissue structural integrity.",
  },
  {
    letter: "P",
    word: "Protect",
    text: "Deploying a potent antioxidant shield to defend delicate neural pathways and cellular membranes from oxidative damage and neuro-degenerative stress.",
  },
  {
    letter: "N",
    word: "Nourish",
    text: "Converting into Coenzyme A (CoA) to fuel cellular bioenergetics, mitochondrial ATP synthesis, and microvascular circulation across sensitive nerve endings.",
  },
];

const clinicalPoints = [
  {
    label: "Neuro-Protection",
    title: "Prevents Deficiency-Induced Damage",
    text: (
      <>
        A severe lack of vitamin B5 causes &ldquo;burning feet syndrome&rdquo; and nerve degeneration; adequate levels prevent these specific deficiency-related neuropathies.
      </>
    ),
  },
  {
    label: "Cellular Bioenergetics",
    title: "Precursor to Coenzyme A",
    text: (
      <>
        It converts into Coenzyme A (CoA), a vital molecule for cellular energy production, myelin sheath synthesis, and the maintenance of structural nerve health.
      </>
    ),
  },
];

const EmbiotinSection: React.FC = () => {
  const [activeId, setActiveId] = useState("biotin");

  return (
    <section id="embiotin" aria-labelledby="embiotin-title">
      {/* ─── Product spotlight ─── */}
      <div className={`${spotlightBand} ${sectionPad}`}>
        <div className={`${container} ${spotlightGrid}`}>
          <div>
            <Eyebrow tone={spotlightLabel}>Product Spotlight</Eyebrow>
            <h2 id="embiotin-title" className="mt-6 font-display font-normal">
              <span className={spotlightName}>EMBIOTIN</span>
              <span className={spotlightSubtitle}>Neuro-Cellular Vitality &amp; Tissue Revitalisation</span>
            </h2>
            <div className={spotlightCopy}>
              <p className="text-lavender-white/90">
                While Biotin has achieved widespread recognition as a cornerstone metabolic cofactor, Embiotin is
                engineered with a targeted neuroscientific imperative: driving cellular bioenergetics, structural
                nerve integrity, and tissue revitalization.
              </p>
              <p className="text-lavender-white/75">
                Developed by Emporis Health Care—alongside our specialized formulation Emprotino whey protein—Embiotin
                supplies therapeutic concentrations of Calcium Pantothenate (Vitamin B5) and bioactive cofactors to protect
                against peripheral neuropathy while fueling systemic cellular health.
              </p>
            </div>
          </div>
          {/* Portrait source (2:3): framed at its own ratio so neither face is cropped */}
          <div data-reveal="image" className={spotlightFrame}>
            <img
              src={embiotin2}
              alt="A specialist applying a scalp treatment, illustrating Embiotin hair care"
              width={397}
              height={597}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* ─── Neuroscientific Advantage: In Peripheral Neuropathy ─── */}
      <div className="bg-white py-[clamp(3.5rem,7vw,5.5rem)]">
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow>Clinical Focus</Eyebrow>
            <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-tight font-normal text-ink-deep">
              In Peripheral Neuropathy
            </h3>
            <p className="mt-4 max-w-[65ch] text-lg leading-[1.6] text-ink-soft">
              How Embiotin&apos;s high-potency Vitamin B5 (Calcium Pantothenate) powers neurological resilience and protects structural nerve health:
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
            {clinicalPoints.map(({ label, title, text }) => (
              <div key={label} className="border-t border-purple-brand/10 pt-6">
                <p className="text-sm font-medium text-muted-plum">{label}</p>
                <h4 className="mt-2 font-display text-2xl leading-tight font-semibold text-ink-deep">{title}</h4>
                <p className="mt-3 max-w-[60ch] leading-[1.6] text-ink-soft">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── The Embiotin philosophy ─── */}
      <div className={`bg-lavender-white ${sectionPad}`}>
        <div className={container}>
          <Eyebrow>The Embiotin Philosophy</Eyebrow>
          <h3 className={`mt-4 max-w-[28ch] text-ink-deep ${subheading}`}>
            Comprehensive care targeting three critical domains of neuro-cellular vitality
          </h3>
          <ul className={`${pillarList} md:grid-cols-3`}>
            {pillars.map((p) => (
              <li key={p.word} className={pillarItem}>
                <span aria-hidden className={`${pillarRule} ${accent.fill}`} />
                <span aria-hidden className="block font-display text-5xl leading-none font-normal text-purple-brand/20">
                  {p.letter}
                </span>
                <h4 className={`mt-4 ${pillarTitle}`}>{p.word}</h4>
                <p className={pillarText}>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ─── Formula at a glance ─── */}
      <div className={`${formulaBand} ${sectionPad}`}>
        <div className={container}>
          <div className={formulaHeader}>
            <div>
              <Eyebrow>Formula at a Glance</Eyebrow>
              <h3 className={`mt-4 text-ink-deep ${subheading}`}>EMBIOTIN</h3>
            </div>
            <p className={formulaCount}>{ingredients.length} Active Ingredients</p>
          </div>

          <div className={formulaGrid}>
            <div className={visualCard}>
              <FormulaRing ingredients={ingredients} activeId={activeId} onActivate={setActiveId} />
            </div>

            <div className="min-w-0">
              <FormulaTable
                headings={["Ingredient", "Dosage per Tablet", "Primary Role in Neuro-Cellular Vitality"]}
                rows={ingredients}
                activeId={activeId}
                onActivate={setActiveId}
              />
            </div>
          </div>
        </div>
      </div>

      <ProductStandard title="The Embiotin Standard">
        The Emporis Embiotin standard dictates the use of only high-grade, premium raw materials to ensure maximum
        bioavailability and effectiveness. Like all clinical solutions by Emporis Health Care—including Emprotino—Embiotin
        contains precisely the ingredients listed on the label, in the exact therapeutic dosages specified in the
        formulation, without deviation.
      </ProductStandard>
    </section>
  );
};

export default EmbiotinSection;
