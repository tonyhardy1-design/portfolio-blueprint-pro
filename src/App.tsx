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

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
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
  <BrowserRouter>
    <Cursor />
    <AnimatedRoutes />
  </BrowserRouter>
);

export default App;
