import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const RevealOnScroll = ({ children, delay = 0, className = "" }: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        clipPath: visible ? "inset(0% 0 0% 0)" : "inset(100% 0 0% 0)",
        transition: `clip-path 0.9s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
