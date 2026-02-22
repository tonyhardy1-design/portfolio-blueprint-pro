import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bw.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dramatic black and white street scene with lone figure in rain"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-sm tracking-[0.4em] uppercase text-silver mb-6"
        >
          Black & White Photography
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight max-w-4xl"
        >
          Seeing in
          <span className="italic"> monochrome</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body text-muted-foreground text-lg mt-6 max-w-xl"
        >
          Street. Portrait. Architecture. Life stripped down to light and shadow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10"
        >
          <Link
            to="/portfolio"
            className="inline-block border border-foreground text-foreground px-10 py-4 font-body text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-500"
          >
            View Portfolio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-transparent via-foreground/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
