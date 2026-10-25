import React from "react";
import Eyebrow from "./Eyebrow";
import { container, formulaCount, formulaHeader, formulaSurface, sectionPad, subheading } from "./productLayout";

interface FormulaPanelProps {
  /** Product name shown as the panel heading. */
  heading: string;
  /** Count line on the right of the header, e.g. "6 Active Ingredients". */
  count: string;
  /** Band surface. */
  surface?: keyof typeof formulaSurface;
  /** The product's FormulaTable. */
  children: React.ReactNode;
}

/** "Formula at a Glance" band shared by every product page: heading, count and the composition table. */
const FormulaPanel: React.FC<FormulaPanelProps> = ({ heading, count, surface = "white", children }) => {
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

        <div className="mt-12">{children}</div>
      </div>
    </div>
  );
};

export default FormulaPanel;
