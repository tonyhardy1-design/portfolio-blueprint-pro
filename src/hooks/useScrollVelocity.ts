import { useMotionValue, useVelocity, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";

export function useScrollVelocitySkew(maxSkew = 3) {
  const scrollY = useMotionValue(0);
  const scrollVelocity = useVelocity(scrollY);
  const skewRaw = useTransform(scrollVelocity, [-3000, 0, 3000], [-maxSkew, 0, maxSkew]);
  const skew = useSpring(skewRaw, { stiffness: 300, damping: 30, mass: 0.5 });

  useEffect(() => {
    const onScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);

  return skew;
}
