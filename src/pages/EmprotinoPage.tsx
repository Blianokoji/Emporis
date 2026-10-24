import React from "react";
import EmprotinoSection from "../components/EmprotinoSection";
import { usePageMeta } from "../hooks/usePageMeta";
import { useScrollReveal } from "../hooks/useScrollReveal";

const EmprotinoPage: React.FC = () => {
  usePageMeta({
    title: "Emprotino | Emporis Health Care",
    description:
      "Emporis Emprotino is a scientifically developed whey protein supplement designed to meet increased protein requirements in special populations.",
    path: "/emprotino",
  });
  useScrollReveal();
  return <EmprotinoSection />;
};

export default EmprotinoPage;
