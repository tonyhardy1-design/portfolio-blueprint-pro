import { forwardRef, useCallback, useEffect, useRef, useState, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const RevealOnScroll = forwardRef<HTMLDivElement, RevealOnScrollProps>(
  ({ children, delay = 0, className = "" }, forwardedRef) => {
    const localRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const el = localRef.current;
      if (!el || typeof IntersectionObserver === "undefined") {
        setVisible(true);
        return;
      }

      let revealed = false;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            revealed = true;
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
      );

      observer.observe(el);

      const failSafeTimer = window.setTimeout(() => {
        if (!revealed) {
          setVisible(true);
          observer.disconnect();
        }
      }, 1200);

      return () => {
        window.clearTimeout(failSafeTimer);
        observer.disconnect();
      };
    }, []);

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        localRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef]
    );

    return (
      <div
        ref={setRefs}
        className={className}
        style={{
          clipPath: visible ? "inset(0% 0 0% 0)" : "inset(100% 0 0% 0)",
          transition: `clip-path 0.9s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }
);

RevealOnScroll.displayName = "RevealOnScroll";

export default RevealOnScroll;
