import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote: "Tony sees what most people walk past. His portraits have a weight and honesty that colour could never achieve.",
    name: "Marcus Chen",
    context: "Portrait Client",
  },
  {
    quote: "The prints he delivered are gallery-quality. There's a timelessness to his black and white work that makes every image feel like it could hang in a museum.",
    name: "Sarah Mitchell",
    context: "Art Collector",
  },
  {
    quote: "Working with Tony was effortless. He captured my personality in a way I didn't think was possible — raw, real, and striking.",
    name: "David Okoye",
    context: "Portrait Session",
  },
];

const snappy = [0.76, 0, 0.24, 1] as const;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-14"
        >
          Kind Words
        </motion.p>

        <div className="min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: snappy as unknown as number[] }}
            >
              <blockquote className="font-display text-2xl md:text-4xl text-foreground italic leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </blockquote>
              <p className="font-body text-foreground text-sm tracking-widest uppercase">
                {testimonials[current].name}
              </p>
              <p className="font-body text-muted-foreground text-xs tracking-wider uppercase mt-1">
                {testimonials[current].context}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] transition-all duration-500 ${
                i === current ? "bg-foreground w-10" : "bg-muted-foreground/20 w-6 hover:bg-muted-foreground/40"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
