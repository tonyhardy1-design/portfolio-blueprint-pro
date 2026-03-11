import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import AboutTeaser from "@/components/AboutTeaser";
import Footer from "@/components/Footer";

function getSplashShown(): boolean {
  try {
    return !!sessionStorage.getItem("splashShown");
  } catch {
    return true; // skip splash if sessionStorage unavailable
  }
}

function setSplashShown(): void {
  try {
    sessionStorage.setItem("splashShown", "true");
  } catch {
    // sessionStorage unavailable
  }
}

const Index = () => {
  const [showSplash, setShowSplash] = useState(() => !getSplashShown());

  useEffect(() => {
    if (!showSplash) {
      setSplashShown();
    }
  }, [showSplash]);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <SplashScreen onComplete={() => setShowSplash(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <main>
          <Navbar />
          <HeroSection />
          <PortfolioGrid />
          <AboutTeaser />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
