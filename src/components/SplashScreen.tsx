import { useEffect } from "react";
import { motion } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

const words = ["Tony", "Hardy"];

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 2.5, times: [0, 0.72, 1], ease: "easeInOut" }}
    >
      {words.map((word, i) => (
        <div key={word} className="overflow-hidden leading-[0.88]">
          <motion.span
            className="block font-display italic select-none text-foreground text-5xl md:text-7xl lg:text-8xl"
            initial={{ y: "108%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
              delay: i * 0.13,
            }}
          >
            {word}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
};

export default SplashScreen;
