import React, { Suspense, lazy, useEffect, useState, type CSSProperties } from "react";
import { Redirect, Route, Switch, useLocation } from "wouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import { scrollToTop } from "./lib/lenis";

// Product pages are split out so the home page ships without their tables and visualisers.
const EmbiotinPage = lazy(() => import("./pages/EmbiotinPage"));
const EmprotinoPage = lazy(() => import("./pages/EmprotinoPage"));

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
  const [location] = useLocation();

  // A new page opens at the top, unless the URL targets a section ("/#contact").
  useEffect(() => {
    if (!window.location.hash) scrollToTop();
  }, [location]);

  const handleIntroDone = () => {
    markIntroSeen();
    setIntroPlaying(false);
  };

  return (
    <div style={{ "--intro": introDelay } as CSSProperties}>
      {introPlaying && <Preloader onDone={handleIntroDone} />}
      <Navbar />
      <main>
        {/* Fallback keeps the footer below the fold while a product page chunk loads */}
        <Suspense fallback={<div className="min-h-svh" />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/embiotin" component={EmbiotinPage} />
            <Route path="/emprotino" component={EmprotinoPage} />
            <Route>
              <Redirect to="/" replace />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
