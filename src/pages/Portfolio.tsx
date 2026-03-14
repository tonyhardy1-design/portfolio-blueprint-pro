import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { streetThumbnail } from "@/data/street";
import { architectureThumbnail } from "@/data/architecture";
import { dailyThumbnail } from "@/data/daily";
import { handsThumbnail } from "@/data/hands";

const categories = [
  {
    label: "Street Photography",
    description: "People, movement, and the unexpected moments cities offer.",
    path: "/portfolio/street",
    image: streetThumbnail,
    alt: "Skateboarder at the Southbank undercroft",
  },
  {
    label: "Architecture",
    description: "Form, structure, and the geometry of built space.",
    path: "/portfolio/architecture",
    image: architectureThumbnail,
    alt: "Top of the London Eye rising into a clear sky",
  },
  {
    label: "Hands",
    description: "Studies in gesture, labour, and the language of hands.",
    path: "/portfolio/hands",
    image: handsThumbnail,
    alt: "An older man's hands clasped behind his back",
  },
  {
    label: "Daily Perspectives",
    description: "Quiet observations from ordinary life.",
    path: "/portfolio/daily",
    image: dailyThumbnail,
    alt: "Newborn baby sleeping with a small bow",
  },
];

const Portfolio = () => {
  return (
    <main>
      <Navbar />

      {/* Page header */}
      <section className="pt-24 px-6">
        <div className="container mx-auto py-16 md:py-24">
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-4">
            Work
          </p>
          <h1
            className="text-foreground leading-[1.06]"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
            }}
          >
            The work
          </h1>
        </div>
      </section>

      {/* Category panels — full-width alternating layout */}
      <section className="pb-24">
        {categories.map((cat, i) => (
          <RevealOnScroll key={cat.path} delay={0}>
            <Link
              to={cat.path}
              className="group block border-t border-border"
              aria-label={`View ${cat.label}`}
            >
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image — 60% */}
                <div className="w-full md:w-3/5 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                </div>

                {/* Text — 40% */}
                <div className="w-full md:w-2/5 flex flex-col justify-center px-8 py-10 md:px-14 md:py-16">
                  <p className="font-body text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2
                    className="text-foreground mb-4 leading-[1.12]"
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontWeight: 400,
                      fontSize: "clamp(1.75rem, 3vw, 2.8rem)",
                    }}
                  >
                    {cat.label}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-[1.8] mb-8 max-w-xs">
                    {cat.description}
                  </p>
                  <span className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground group-hover:text-accent transition-colors duration-300">
                    View collection →
                  </span>
                </div>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
        <div className="border-t border-border" />
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;
