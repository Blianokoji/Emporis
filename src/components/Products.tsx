import React from "react";
import { LuArrowRight } from "react-icons/lu";
import embiotinImg from "../assets/embiotin.webp";
import emflatImg from "../assets/emflat.webp";
import emproteinImg from "../assets/emprotein.webp";

type Category = "Nutraceutical" | "Gastrointestinal" | "Nutritional";

interface Product {
  name: string;
  tagline: string;
  desc: string;
  image: string;
  category: Category;
  width?: number;
  height?: number;
}

const CATEGORY_DOT: Record<Category, string> = {
  Nutraceutical: "bg-green-health",
  Gastrointestinal: "bg-cyan-bright",
  Nutritional: "bg-blue-health",
};

const featured: Product = {
  name: "Embiotin™",
  tagline: "Advanced Hair Growth Supplement by Emporis",
  desc: "Emporis Embiotin™ is a premium clinical biotin formulation fortified with essential vitamins and minerals. Embiotin™ strengthens hair from the root, enhances shine, and promotes healthy regrowth — helping restore confidence naturally.",
  image: embiotinImg,
  category: "Nutraceutical",
  width: 853,
  height: 1052,
};

const upcoming: Product[] = [
  {
    name: "Emflat™",
    tagline: "Simethicone Syrup for Abdominal Discomfort by Emporis",
    desc: "Emporis Emflat™ provides fast, gentle relief from gas, bloating, and abdominal discomfort. Its premium simethicone-based formula is safe for all age groups, ensuring effective digestive comfort for the whole family.",
    image: emflatImg,
    category: "Gastrointestinal",
    width: 2560,
    height: 1707,
  },
  {
    name: "Emprotino™",
    tagline: "Advanced Whey Protein Formula by Emporis",
    desc: "Emporis Emprotino™ is a scientifically developed whey protein supplement designed to meet increased protein requirements in special populations.",
    image: emproteinImg,
    category: "Nutritional",
    width: 2560,
    height: 1792,
  },
];

const CategoryTag: React.FC<{ category: Category }> = ({ category }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-purple-brand/10 bg-lavender-white px-3 py-1 font-tech text-xs text-ink-deep">
    <span className={`size-2 rounded-full ${CATEGORY_DOT[category]}`} aria-hidden />
    {category}
  </span>
);

const Products: React.FC = () => (
  <section id="products" className="bg-lavender-white py-[clamp(4.5rem,10vw,8rem)]">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <header className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 className="font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-none font-light tracking-[-0.02em] text-ink-deep">
          Our products
        </h2>
        <p className="max-w-[38ch] text-muted-plum">
          Three formulations across nutraceutical, gastrointestinal and nutritional care. Embiotin™ is available now.
        </p>
      </header>

      <div className="mt-12 grid gap-5 lg:grid-cols-12">
        {/* Featured: the product on shelves today */}
        <article className="group flex flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-purple-brand/8 lg:col-span-7 lg:row-span-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e9ec] lg:aspect-auto lg:flex-1">
            <img
              src={featured.image}
              alt={`Emporis ${featured.name} tablets packaging`}
              width={featured.width}
              height={featured.height}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover object-[center_35%] transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
            />
            <span className="absolute top-5 left-5 rounded-full bg-green-health px-3 py-1 font-tech text-xs font-medium text-white">
              Available now
            </span>
          </div>
          <div className="p-7 md:p-10">
            <CategoryTag category={featured.category} />
            <h3 className="mt-5 font-display text-[clamp(2.5rem,4.5vw,3.5rem)] leading-none font-normal text-ink-deep">
              {featured.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-purple-brand">{featured.tagline}</p>
            <p className="mt-5 max-w-[56ch] leading-relaxed text-muted-plum">{featured.desc}</p>
            <a
              href="#embiotin"
              className="group/link mt-7 inline-flex min-h-11 items-center gap-2 font-medium text-magenta-vibrant"
            >
              View the formula
              <LuArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden />
            </a>
          </div>
        </article>

        {upcoming.map((p) => (
          <article
            key={p.name}
            className="grid overflow-hidden rounded-[2rem] bg-white ring-1 ring-purple-brand/8 sm:grid-cols-[2fr_3fr] lg:col-span-5"
          >
            <div className="relative aspect-[16/10] sm:aspect-auto">
              <img
                src={p.image}
                alt={`Emporis ${p.name} — ${p.tagline}`}
                width={p.width}
                height={p.height}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover saturate-[0.7]"
              />
              <span className="absolute top-4 left-4 rounded-full border border-magenta-vibrant/60 bg-purple-brand/85 px-3 py-1 font-tech text-xs text-white backdrop-blur">
                Launching soon
              </span>
            </div>
            <div className="p-6 md:p-7">
              <CategoryTag category={p.category} />
              <h3 className="mt-4 font-display text-[2.25rem] leading-none text-ink-deep">{p.name}</h3>
              <p className="mt-2 text-sm font-medium text-purple-brand">{p.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-plum">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
