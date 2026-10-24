import React from "react";
import EmbiotinSection from "../components/EmbiotinSection";
import { usePageMeta } from "../hooks/usePageMeta";
import { useScrollReveal } from "../hooks/useScrollReveal";

const EmbiotinPage: React.FC = () => {
  usePageMeta({
    title: "Embiotin | Emporis Health Care",
    description:
      "Emporis Embiotin is a premium clinical biotin formulation fortified with essential vitamins and minerals. Embiotin strengthens hair from the root, enhances shine, and promotes healthy regrowth — helping restore confidence naturally.",
    path: "/embiotin",
  });
  useScrollReveal();
  return <EmbiotinSection />;
};

export default EmbiotinPage;
