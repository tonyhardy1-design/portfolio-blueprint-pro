import { motion } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ backgroundColor: "hsl(0 0% 0%)" }}
      animate={{ backgroundColor: ["hsl(0 0% 0%)", "hsl(0 0% 0%)", "hsl(0 0% 97%)"] }}
      transition={{ duration: 4, times: [0, 0.5, 1], ease: "easeInOut" }}
    >
      <motion.h1
        className="font-display italic text-4xl md:text-6xl lg:text-7xl select-none"
        initial={{ opacity: 0, color: "hsl(0 0% 97%)" }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          color: ["hsl(0 0% 97%)", "hsl(0 0% 97%)", "hsl(0 0% 97%)", "hsl(0 0% 8%)", "hsl(0 0% 8%)"],
        }}
        transition={{
          duration: 4,
          times: [0, 0.2, 0.5, 0.75, 1],
          ease: "easeInOut",
        }}
        onAnimationComplete={() => onComplete()}
      >
        Tony Hardy
      </motion.h1>
    </motion.div>
  );
};

export default SplashScreen;
