import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorVariant = "default" | "hover" | "zoom";

// Accent colour token — terracotta, matches CSS var --accent: 28 45% 52%
const ACCENT = "hsl(28, 45%, 52%)";

const Cursor = () => {
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 600, damping: 35, mass: 0.3 });
  const y = useSpring(rawY, { stiffness: 600, damping: 35, mass: 0.3 });

  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('[class*="cursor-zoom-in"]')) {
        setVariant("zoom");
      } else if (el.closest("a, button, [role='button']")) {
        setVariant("hover");
      } else {
        setVariant("default");
      }
    };

    const onOut = () => setVariant("default");

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [rawX, rawY, visible]);

  if (typeof window !== "undefined" && !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      aria-hidden="true"
    >
      <motion.div
        className="rounded-full"
        style={{
          backgroundColor: variant === "zoom" ? "transparent" : "hsl(0 0% 9%)",
          border: variant === "zoom" ? `1px solid ${ACCENT}` : "none",
        }}
        animate={{
          width:   variant === "zoom" ? 36 : variant === "hover" ? 7 : 5,
          height:  variant === "zoom" ? 36 : variant === "hover" ? 7 : 5,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 22, mass: 0.4 }}
      />
    </motion.div>
  );
};

export default Cursor;
