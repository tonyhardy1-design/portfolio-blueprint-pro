const testimonials = [
  {
    quote: "Tony sees what most people walk past. His portraits have a weight and honesty that colour could never achieve.",
    name: "Marcus Chen",
    context: "Portrait Client",
  },
  {
    quote: "The prints he delivered are gallery-quality. There's a timelessness to his black and white work that makes every image feel like it belongs in a museum.",
    name: "Sarah Mitchell",
    context: "Art Collector",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 px-6 border-t border-border">
      <div className="container mx-auto max-w-2xl">
        <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-12">Kind words</p>

        <div className="space-y-16">
          {testimonials.map((t, i) => (
            <div key={i}>
              <blockquote className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed mb-4">
                "{t.quote}"
              </blockquote>
              <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                {t.name} — {t.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
