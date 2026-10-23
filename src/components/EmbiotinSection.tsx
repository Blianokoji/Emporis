import React from "react";
import embiotin2 from "../assets/embiotin_2.webp";
import FormulaExplorer, { type Ingredient } from "./FormulaExplorer";

const ingredients: Ingredient[] = [
  { id: "pantothenate", name: "Calcium Pantothenate", short: "Calcium Pantothenate", dosage: "100 mg", role: "The Follicle Nourisher", tone: "bg-green-health" },
  { id: "nac", name: "N-Acetylcysteine (NAC)", short: "NAC", dosage: "50 mg", role: "The Cellular Guardian", tone: "bg-cyan-bright" },
  { id: "zinc", name: "Zinc Oxide (Elemental Zinc)", short: "Zinc", dosage: "22.5 mg", role: "Growth & Repair Catalyst", tone: "bg-blue-health" },
  { id: "biotin", name: "Biotin", short: "Biotin", dosage: "10 mg / 10,000 mcg", role: "The Keratin Architect", tone: "bg-magenta-vibrant" },
  { id: "copper", name: "Cupric Oxide (Elemental Copper)", short: "Copper", dosage: "3 mg", role: "Structural & Pigment Anchor", tone: "bg-green-health" },
  { id: "selenium", name: "Sodium Selenite (Elemental Selenium)", short: "Selenium", dosage: "65 mcg", role: "Scalp Health Regulator", tone: "bg-cyan-bright" },
];

const pillars = [
  {
    letter: "B",
    word: "Build",
    accent: "border-blue-health text-blue-health",
    text: "Providing the essential raw materials necessary for construction of strong keratin structures and rapid cellular division that fuels the Anagen growth phase.",
  },
  {
    letter: "P",
    word: "Protect",
    accent: "border-magenta-vibrant text-magenta-vibrant",
    text: "Deploying a powerful antioxidant shield to defend the delicate hair follicle cells from damaging effects of oxidative stress, preserving their function and extending the growth cycle.",
  },
  {
    letter: "N",
    word: "Nourish",
    accent: "border-green-health text-green-health",
    text: "Delivering key nutrients that support the health of the scalp, improve moisture retention within the hair shaft, and ensure optimal blood flow to the follicle.",
  },
];

const EmbiotinSection: React.FC = () => (
  <section id="embiotin" aria-labelledby="embiotin-title">
    {/* ─── Spotlight + formula: one immersive purple chapter ─── */}
    <div className="bg-linear-to-b from-purple-brand to-purple-deep py-[clamp(4.5rem,10vw,8rem)] text-lavender-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-end gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
          <div>
            <p className="text-sm tracking-[0.18em] text-cyan-bright">Product spotlight</p>
            <h2 id="embiotin-title" className="mt-5 font-display text-[clamp(3.5rem,9vw,7rem)] leading-[0.9] font-light tracking-[-0.03em]">
              Embiotin™
            </h2>
            <p className="mt-4 font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-light italic text-gradient-vitality">
              Six-pillar approach to hair revitalisation
            </p>
            <div className="mt-8 space-y-4 leading-relaxed font-light text-lavender-white/80">
              <p>
                In the landscape of hair health supplements, one ingredient has achieved unparalleled recognition: Biotin.
                Its reputation as a cornerstone nutrient for hair is well-deserved, forming an essential part of the keratin
                production process.
              </p>
              <p className="text-lavender-white/65">
                Developed by Emporis Health Care—alongside our specialized formulations like Emflat™ digestive syrup and
                Emprotino™ whey protein—Embiotin™ honours this legacy by offering a complete six-pillar approach to hair
                health.
              </p>
            </div>
          </div>
          <img
            src={embiotin2}
            alt="A specialist applying a scalp treatment, illustrating Embiotin hair care"
            width={397}
            height={597}
            loading="lazy"
            decoding="async"
            className="mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] object-cover md:mx-0 md:justify-self-end"
          />
        </div>

        {/* Pillars */}
        <div className="mt-[clamp(4.5rem,9vw,7rem)] border-t border-white/10 pt-12">
          <h3 className="max-w-[24ch] font-display text-[clamp(1.9rem,3.6vw,2.75rem)] leading-[1.1] font-light">
            Comprehensive care targeting three critical domains of hair vitality
          </h3>
          <ul className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {pillars.map((p) => (
              <li key={p.word} className="flex gap-5">
                <span
                  className={`grid size-14 shrink-0 place-items-center rounded-full border-2 bg-lavender-white font-display text-3xl font-medium ${p.accent}`}
                  aria-hidden
                >
                  {p.letter}
                </span>
                <div>
                  <h4 className="font-display text-2xl font-medium">{p.word}</h4>
                  <p className="mt-2 text-[0.95rem] leading-relaxed font-light text-lavender-white/70">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Formula explorer — the signature moment */}
        <div className="mt-[clamp(4.5rem,9vw,7rem)] border-t border-white/10 pt-12">
          <div className="mb-12 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h3 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] leading-[1.1] font-light">Formula at a glance</h3>
            <p className="text-lavender-white/65">{ingredients.length} active ingredients. Select one to see its role.</p>
          </div>
          <FormulaExplorer ingredients={ingredients} />
        </div>
      </div>
    </div>

    {/* ─── The Embiotin standard: full label + purity promise ─── */}
    <div className="bg-lavender-white py-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:px-10">
        <div>
          <h3 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-light text-ink-deep">The Embiotin standard</h3>
          <blockquote className="mt-6 border-l-2 border-green-health pl-5 font-display text-[clamp(1.15rem,2vw,1.4rem)] leading-relaxed text-ink-deep/85 italic">
            The Emporis Embiotin™ standard dictates the use of only high-grade, premium raw materials to ensure maximum
            bioavailability and effectiveness. Like all clinical solutions by Emporis Health Care—including Emflat™ and
            Emprotino™—Embiotin™ contains precisely the ingredients listed on the label, in the exact therapeutic dosages
            specified in the formulation, without deviation.
          </blockquote>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white ring-1 ring-purple-brand/8">
          <table className="w-full text-left">
            <caption className="px-6 pt-6 pb-4 text-left font-display text-2xl text-ink-deep md:px-8">
              Composition per tablet
            </caption>
            <thead className="bg-purple-brand text-sm text-lavender-white">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium md:px-8">Ingredient</th>
                <th scope="col" className="px-4 py-3 font-medium">Dosage</th>
                <th scope="col" className="hidden px-6 py-3 font-medium md:table-cell md:px-8">Primary role in hair revitalisation</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((ing) => (
                <tr key={ing.id} className="align-top even:bg-lavender-white">
                  <th scope="row" className="px-6 py-4 font-medium text-ink-deep md:px-8">
                    {ing.name}
                    <span className="mt-1 block text-sm font-normal text-muted-plum md:hidden">{ing.role}</span>
                  </th>
                  <td className="px-4 py-4 font-tech whitespace-nowrap text-purple-brand">{ing.dosage}</td>
                  <td className="hidden px-6 py-4 text-muted-plum md:table-cell md:px-8">{ing.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default EmbiotinSection;
