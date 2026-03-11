import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Cursor from "@/components/Cursor";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import StreetPhotography from "./pages/StreetPhotography";
import Architecture from "./pages/Architecture";
import DailyPerspectives from "./pages/DailyPerspectives";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Needs to be inside BrowserRouter to use useLocation
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }}
        exit={{ opacity: 0, y: -6, transition: { duration: 0.18, ease: "easeIn" } }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/street" element={<StreetPhotography />} />
          <Route path="/portfolio/architecture" element={<Architecture />} />
          <Route path="/portfolio/daily" element={<DailyPerspectives />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Cursor />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
