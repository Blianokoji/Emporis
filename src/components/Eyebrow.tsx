import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  /** Text colour class; keep it neutral (muted ink on light, lavender/60 on dark). */
  tone?: string;
  className?: string;
}

/** Quiet section label: plain small text that orients the reader without template chrome. */
const Eyebrow: React.FC<EyebrowProps> = ({ children, tone = "text-muted-plum", className = "" }) => (
  <p className={`text-sm font-medium ${tone} ${className}`}>{children}</p>
);

export default Eyebrow;
