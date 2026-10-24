import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import Edge from "../components/Edge";
import Contact from "../components/Contact";
import { scrollToHash } from "../lib/lenis";
import { usePageMeta } from "../hooks/usePageMeta";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Home: React.FC = () => {
  usePageMeta({
    title: "Emporis Health Care | Embiotin & Emprotino Formulations",
    description:
      "Emporis Health Care (Emporis) is a clinical pharmaceutical brand delivering premium formulations: Embiotin hair supplement and Emprotino whey protein.",
    path: "/",
  });
  useScrollReveal();

  // Arriving from a product page via "/#section": scroll once the sections exist.
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;
    const frame = requestAnimationFrame(() => scrollToHash(hash));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <Hero />
      <Products />
      <About />
      <Edge />
      <Contact />
    </>
  );
};

export default Home;
