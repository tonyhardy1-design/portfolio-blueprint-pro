import { motion } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <motion.h1
        className="font-display italic text-5xl md:text-7xl lg:text-8xl select-none text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 5,
          times: [0, 0.25, 0.65, 1],
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
