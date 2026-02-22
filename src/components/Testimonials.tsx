import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote: "Elena didn't just photograph our wedding — she captured the feeling of it. Every image transports us right back to that magical day.",
    couple: "Sarah & James",
    location: "Tuscany Elopement",
  },
  {
    quote: "We were so nervous about being in front of the camera, but Elena made us forget it was even there. The result is the most authentic version of us.",
    couple: "Maya & Leo",
    location: "Brooklyn Wedding",
  },
  {
    quote: "Looking through our gallery feels like watching a film of the best day of our lives. Her eye for light and emotion is truly unmatched.",
    couple: "Clara & Noah",
    location: "Mountain Elopement",
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
          className="font-body text-sm tracking-[0.35em] uppercase text-primary mb-12"
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
          <p className="font-body text-primary text-sm tracking-widest uppercase">
            {testimonials[current].couple}
          </p>
          <p className="font-body text-muted-foreground text-xs tracking-wider uppercase mt-1">
            {testimonials[current].location}
          </p>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
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
