import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        onAnimationComplete={(definition) => {
          if ((definition as { opacity?: number }).opacity === 0) {
            onComplete();
          }
        }}
      >
        <motion.h1
          className="font-display text-2xl md:text-3xl tracking-[0.15em] text-foreground select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 3.5,
            times: [0, 0.25, 0.65, 1],
            ease: "easeInOut",
          }}
          onAnimationComplete={() => onComplete()}
        >
          Tony Hardy
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
