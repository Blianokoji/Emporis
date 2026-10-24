import React from "react";
import { Link } from "wouter";
import embiotinImg from "../assets/embiotin.webp";
import emproteinImg from "../assets/emprotein.webp";
import Eyebrow from "./Eyebrow";

type Category = "Nutraceutical" | "Nutritional";

interface Product {
  name: string;
  tagline: string;
  desc: string;
  image: string;
  width: number;
  height: number;
  category: Category;
  /** Product page that "View Formula" opens. */
  href: string;
  /** Crop focus inside the shared 4:5 frame. */
  focus: string;
}

const CATEGORY_DOT: Record<Category, string> = {
  Nutraceutical: "bg-magenta-vibrant",
  Nutritional: "bg-blue-health",
};

const products: Product[] = [
  {
    name: "Embiotin",
    tagline: "Advanced Hair Growth Supplement by Emporis",
    desc: "Emporis Embiotin is a premium clinical biotin formulation fortified with essential vitamins and minerals. Embiotin strengthens hair from the root, enhances shine, and promotes healthy regrowth — helping restore confidence naturally.",
    image: embiotinImg,
    width: 853,
    height: 1052,
    category: "Nutraceutical",
    href: "/embiotin",
    focus: "object-[50%_40%]",
  },
  {
    name: "Emprotino",
    tagline: "Advanced Whey Protein Formula by Emporis",
    desc: "Emporis Emprotino is a scientifically developed whey protein supplement designed to meet increased protein requirements in special populations.",
    image: emproteinImg,
    width: 1600,
    height: 1120,
    category: "Nutritional",
    href: "/emprotino",
    focus: "object-[60%_50%]",
  },
];

const CategoryLabel: React.FC<{ category: Category }> = ({ category }) => (
  <p className="flex items-center gap-2 text-sm font-medium text-muted-plum">
    <span className={`size-2 rounded-full ${CATEGORY_DOT[category]}`} aria-hidden />
    Emporis &bull; {category}
  </p>
);

/** One product row: photo and copy side by side on the canvas, mirrored on alternate rows from tablet up. */
const ProductRow: React.FC<{ product: Product; flip: boolean }> = ({ product, flip }) => (
  <article
    className={`grid items-center gap-8 py-12 md:gap-16 md:py-16 ${
      flip ? "md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]" : "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    }`}
  >
    <div
      data-reveal="image"
      className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-lavender-tint md:aspect-[4/5] ${flip ? "md:order-2" : ""}`}
    >
      <img
        src={product.image}
        alt={`Emporis ${product.name} - ${product.tagline}`}
        width={product.width}
        height={product.height}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 size-full object-cover ${product.focus}`}
      />
    </div>
    <div className="flex flex-col justify-center">
      <CategoryLabel category={product.category} />
      <h3 className="mt-4 font-display text-[clamp(2.75rem,5vw,4.25rem)] leading-none font-normal text-ink-deep">
        {product.name}
      </h3>
      <p className="mt-3 font-medium text-ink-deep">{product.tagline}</p>
      <p className="mt-6 max-w-[60ch] leading-[1.6] text-ink-soft">{product.desc}</p>
      <Link
        href={product.href}
        className="mt-6 inline-flex min-h-11 w-fit items-center font-medium text-magenta-vibrant underline decoration-magenta-vibrant/30 decoration-1 underline-offset-[6px] transition-colors duration-200 hover:decoration-magenta-vibrant"
      >
        View Formula
      </Link>
    </div>
  </article>
);

const Products: React.FC = () => (
  <section id="products" className="bg-lavender-white pt-[clamp(3rem,7vw,5rem)] pb-[clamp(3rem,7vw,5rem)]">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <header className="flex flex-col justify-between gap-4 border-b border-purple-brand/10 pb-10 md:flex-row md:items-end">
        <div>
          <Eyebrow>Product Portfolio</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-none font-normal tracking-[-0.02em] text-ink-deep">
            Our Products
          </h2>
        </div>
        <p className="text-sm text-muted-plum tabular-nums">{products.length} Formulations</p>
      </header>

      <div className="divide-y divide-purple-brand/10">
        {products.map((product, i) => (
          <ProductRow key={product.href} product={product} flip={i % 2 === 1} />
        ))}
      </div>
    </div>
  </section>
);

export default Products;
