import React from "react";
import Eyebrow from "./Eyebrow";
import { container, sectionPad, subheading } from "./productLayout";

export interface Credential {
  label: string;
  value: string;
}

interface ProductStandardProps {
  title: string;
  children: React.ReactNode;
  /** Regulatory details (marketed by, manufactured by, licence); rendered only when provided. */
  credentials?: readonly Credential[];
}

/** "Purity & Potency" closing block shared by every product chapter. */
const ProductStandard: React.FC<ProductStandardProps> = ({ title, children, credentials = [] }) => (
  <div className={`bg-lavender-white ${sectionPad}`}>
    <div className={`${container} grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16`}>
      <div>
        <Eyebrow>Purity &amp; Potency</Eyebrow>
        <h3 className={`mt-4 text-ink-deep ${subheading}`}>{title}</h3>
      </div>
      <div>
        <blockquote className="max-w-[60ch] border-l border-purple-brand/20 pl-6 font-display text-[clamp(1.15rem,1.9vw,1.375rem)] leading-[1.6] text-ink-deep md:pl-8">
          {children}
        </blockquote>
        {credentials.length > 0 && (
          <dl className="mt-10 grid max-w-[60ch] gap-6 border-t border-purple-brand/10 pt-6 text-sm sm:grid-cols-2">
            {credentials.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-muted-plum">{label}</dt>
                <dd className="mt-1 font-medium text-ink-deep">{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  </div>
);

export default ProductStandard;
