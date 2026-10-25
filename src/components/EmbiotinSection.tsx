import React from "react";
import embiotin2 from "../assets/embiotin_2.webp";
import FormulaPanel from "./FormulaPanel";
import FormulaTable, { type FormulaRow } from "./FormulaTable";
import ProductStandard from "./ProductStandard";
import Eyebrow from "./Eyebrow";
import {
  container,
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
  subheading,
} from "./productLayout";

// Hair growth is Embiotin's primary claim (copy restored from the hair-era build, 9595f97);
// the Vitamin B5 / peripheral neuropathy points follow the formula as a secondary note.

const accent = productAccent.embiotin;

const ingredients: FormulaRow[] = [
  { id: "pantothenate", name: "Calcium Pantothenate", amount: "100 mg", role: "The Follicle Nourisher" },
  { id: "nac", name: "N-Acetylcysteine (NAC)", amount: "50 mg", role: "The Cellular Guardian" },
  { id: "zinc", name: "Zinc Oxide (Elemental Zinc)", amount: "22.5 mg", role: "Growth & Repair Catalyst" },
  { id: "biotin", name: "Biotin", amount: "10 mg / 10,000 mcg", role: "The Keratin Architect" },
  { id: "copper", name: "Cupric Oxide (Elemental Copper)", amount: "3 mg", role: "Structural & Pigment Anchor" },
  { id: "selenium", name: "Sodium Selenite (Elemental Selenium)", amount: "65 mcg", role: "Scalp Health Regulator" },
];

const pillars = [
  {
    letter: "B",
    word: "Build",
    text: "Providing the essential raw materials necessary for construction of strong keratin structures and rapid cellular division that fuels the Anagen growth phase.",
  },
  {
    letter: "P",
    word: "Protect",
    text: "Deploying a powerful antioxidant shield to defend the delicate hair follicle cells from damaging effects of oxidative stress, preserving their function and extending the growth cycle.",
  },
  {
    letter: "N",
    word: "Nourish",
    text: "Delivering key nutrients that support the health of the scalp, improve moisture retention within the hair shaft, and ensure optimal blood flow to the follicle.",
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
  return (
    <section id="embiotin" aria-labelledby="embiotin-title">
      {/* ─── Product spotlight ─── */}
      <div className={`${spotlightBand} ${sectionPad}`}>
        <div className={`${container} ${spotlightGrid}`}>
          <div>
            <Eyebrow tone={spotlightLabel}>Product Spotlight</Eyebrow>
            <h1 id="embiotin-title" className="mt-6 font-display font-normal">
              <span className={spotlightName}>EMBIOTIN</span>
            </h1>
            <div className={spotlightCopy}>
              <p>
                In the landscape of hair health supplements, one ingredient has achieved unparalleled recognition: Biotin.
                Its reputation as a cornerstone nutrient for hair is well-deserved, forming an essential part of the keratin
                production process.
              </p>
              <p>
                Developed by Emporis Health Care—alongside our specialized formulation Emprotino whey protein—Embiotin
                honours this legacy by offering a complete six-pillar approach to hair health.
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
              decoding="async"
              className="absolute inset-0 size-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* ─── The Embiotin philosophy ─── */}
      <div className={`bg-white ${sectionPad}`}>
        <div className={container}>
          <h2 className={`max-w-4xl text-ink-deep ${subheading}`}>The Embiotin Philosophy</h2>
          <p className="mt-4 max-w-[65ch] text-lg leading-[1.6] text-ink-soft">
            Comprehensive care targeting three critical domains of hair vitality
          </p>
          <ul className={`${pillarList} md:grid-cols-3`}>
            {pillars.map((p) => (
              <li key={p.word} className={pillarItem}>
                <span aria-hidden className={`${pillarRule} ${accent.fill}`} />
                <span aria-hidden className="block font-display text-5xl leading-none font-normal text-purple-brand/20">
                  {p.letter}
                </span>
                <h3 className={`mt-4 ${pillarTitle}`}>{p.word}</h3>
                <p className={pillarText}>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ─── Formula at a glance ─── */}
      <FormulaPanel
        heading="EMBIOTIN"
        count={`${ingredients.length} Active Ingredients`}
        surface="lavender"
      >
        <FormulaTable
          headings={["Ingredient", "Dosage per Tablet", "Primary Role in Hair Revitalization"]}
          rows={ingredients}
        />
      </FormulaPanel>

      {/* ─── Secondary benefit: Vitamin B5 in peripheral neuropathy ─── */}
      <div className="bg-white py-[clamp(3.5rem,7vw,5.5rem)]">
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow>Clinical Focus</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.85rem,3.4vw,2.6rem)] leading-tight font-normal text-ink-deep">
              In Peripheral Neuropathy
            </h2>
            <p className="mt-4 max-w-[65ch] text-lg leading-[1.6] text-ink-soft">
              How Embiotin&apos;s high-potency Vitamin B5 (Calcium Pantothenate) powers neurological resilience and protects structural nerve health:
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
            {clinicalPoints.map(({ label, title, text }) => (
              <div key={label} className="border-t border-purple-brand/10 pt-6">
                <p className="text-sm font-medium text-muted-plum">{label}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight font-semibold text-ink-deep">{title}</h3>
                <p className="mt-3 max-w-[60ch] leading-[1.6] text-ink-soft">{text}</p>
              </div>
            ))}
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
