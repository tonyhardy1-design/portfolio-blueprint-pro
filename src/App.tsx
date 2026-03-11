import { Component, ReactNode } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Cursor from "@/components/Cursor";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import StreetPhotography from "./pages/StreetPhotography";
import Architecture from "./pages/Architecture";
import DailyPerspectives from "./pages/DailyPerspectives";
import Hands from "./pages/Hands";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: "2rem", fontFamily: "monospace", fontSize: "0.875rem" }}>
          <strong>Something went wrong:</strong>
          <pre style={{ marginTop: "1rem", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {(this.state.error as Error).message}
            {"\n\n"}
            {(this.state.error as Error).stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/street" element={<StreetPhotography />} />
          <Route path="/portfolio/architecture" element={<Architecture />} />
          <Route path="/portfolio/daily" element={<DailyPerspectives />} />
          <Route path="/portfolio/hands" element={<Hands />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Cursor />
      <AnimatedRoutes />
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
