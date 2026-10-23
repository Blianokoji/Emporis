import React, { useState, type CSSProperties } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import EmbiotinSection from "./components/EmbiotinSection";
import About from "./components/About";
import Edge from "./components/Edge";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const INTRO_KEY = "emporis-intro-seen";

/** The brand intro plays once per browser session. */
function shouldPlayIntro(): boolean {
  try {
    return !sessionStorage.getItem(INTRO_KEY);
  } catch {
    return true; // Storage blocked (private mode); still show the intro.
  }
}

function markIntroSeen(): void {
  try {
    sessionStorage.setItem(INTRO_KEY, "1");
  } catch {
    // Storage blocked; the intro simply plays again next visit.
  }
}

const App: React.FC = () => {
  const [introPlaying, setIntroPlaying] = useState(shouldPlayIntro);
  // Hero entrance waits for the intro veil only on the first visit of a session.
  const [introDelay] = useState(introPlaying ? "1s" : "0s");

  const handleIntroDone = () => {
    markIntroSeen();
    setIntroPlaying(false);
  };

  return (
    <div style={{ "--intro": introDelay } as CSSProperties}>
      {introPlaying && <Preloader onDone={handleIntroDone} />}
      <Navbar />
      <main>
        <Hero />
        <Products />
        <EmbiotinSection />
        <About />
        <Edge />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
