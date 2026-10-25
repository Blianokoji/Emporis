import React from "react";
import EmprotinoSection from "../components/EmprotinoSection";
import { usePageMeta } from "../hooks/usePageMeta";
import { useScrollReveal } from "../hooks/useScrollReveal";

const EmprotinoPage: React.FC = () => {
  usePageMeta({
    title: "Emprotino | Emporis Health Care",
    description:
      "Emprotino is a premium whey isolate supplement (30 g whey isolate per 100 g) with essential branched-chain amino acids and the added advantage of palatinose. It is designed to help adults recovering from illness, older adults and those with weakened health regain strength, maintain muscle mass and improve overall nutrition.",
    path: "/emprotino",
  });
  useScrollReveal();
  return <EmprotinoSection />;
};

export default EmprotinoPage;
