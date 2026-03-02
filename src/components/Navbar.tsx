import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MagneticWrap from "./MagneticWrap";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <MagneticWrap strength={0.15}>
          <button
            onClick={() => setOpen(!open)}
            className="relative flex items-center gap-3 bg-foreground/10 backdrop-blur-xl border border-border px-6 py-3 group hover:bg-foreground/15 transition-colors duration-300"
            aria-label="Toggle navigation"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-foreground">
              {open ? "Close" : "Menu"}
            </span>
            <div className="flex flex-col gap-[3px]">
              <motion.span
                animate={open ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease }}
                className="block w-4 h-[1px] bg-foreground"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="block w-4 h-[1px] bg-foreground"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease }}
                className="block w-4 h-[1px] bg-foreground"
              />
            </div>
          </button>
        </MagneticWrap>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <Link to="/" className="absolute top-8 left-8 font-display text-xl text-foreground">
              Tony Hardy
            </Link>

            <ul className="flex flex-col items-center gap-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease }}
                >
                  <MagneticWrap strength={0.2}>
                    <Link
                      to={item.path}
                      className={`font-display text-5xl md:text-7xl transition-colors duration-300 ${
                        location.pathname === item.path
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </MagneticWrap>
                </motion.li>
              ))}
            </ul>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              href="mailto:tonyhardy1@hotmail.com"
              className="absolute bottom-8 font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              tonyhardy1@hotmail.com
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
