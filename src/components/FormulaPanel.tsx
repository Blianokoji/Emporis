import React from "react";
import Eyebrow from "./Eyebrow";
import { container, formulaCount, formulaGrid, formulaHeader, formulaSurface, sectionPad, subheading, visualCard } from "./productLayout";

interface FormulaPanelProps {
  /** Product name shown as the panel heading. */
  heading: string;
  /** Count line on the right of the header, e.g. "6 Active Ingredients". */
  count: string;
  /** Band surface; the visual card takes the opposite tone. */
  surface?: keyof typeof formulaSurface;
  /** Left column: the product's visualiser (hex ring, serving chart). */
  visual: React.ReactNode;
  /** Right column: the product's FormulaTable. */
  children: React.ReactNode;
}

/** "Formula at a Glance" band shared by every product page: visualiser card beside the composition table. */
const FormulaPanel: React.FC<FormulaPanelProps> = ({ heading, count, surface = "white", visual, children }) => {
  const tone = formulaSurface[surface];
  return (
    <div className={`${tone.band} text-ink-deep ${sectionPad}`}>
      <div className={container}>
        <div className={formulaHeader}>
          <div>
            <Eyebrow>Formula at a Glance</Eyebrow>
            <h2 className={`mt-4 text-ink-deep ${subheading}`}>{heading}</h2>
          </div>
          <p className={formulaCount}>{count}</p>
        </div>

        <div className={formulaGrid}>
          <div className={`${visualCard} ${tone.card}`}>{visual}</div>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FormulaPanel;
