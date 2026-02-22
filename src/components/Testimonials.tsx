import { motion } from "framer-motion";
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

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm tracking-[0.35em] uppercase text-muted-foreground mb-12"
        >
          Kind Words
        </motion.p>

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed mb-8">
            "{testimonials[current].quote}"
          </blockquote>
          <p className="font-body text-foreground text-sm tracking-widest uppercase">
            {testimonials[current].name}
          </p>
          <p className="font-body text-muted-foreground text-xs tracking-wider uppercase mt-1">
            {testimonials[current].context}
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-foreground w-6" : "bg-muted-foreground/30"
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
