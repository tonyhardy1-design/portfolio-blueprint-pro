import { useState } from "react";
import { Link } from "react-router-dom";
import RevealOnScroll from "@/components/RevealOnScroll";

// Curated cross-series selection — fixed corrected paths
import imgStreet1   from "@/assets/street/bw-portrait-1.jpg";
import imgArch1     from "@/assets/architecture/11-DSC06524.jpg";
import imgHands1    from "@/assets/Hands/7-DSCF8997.jpg";
import imgStreet2   from "@/assets/street/3-DSC02082.jpg";
import imgDaily1    from "@/assets/daily/15-DSCF2527.jpg";
import imgArch2     from "@/assets/architecture/2-DSC02159.jpg";

// Editorial layout: 12-column grid with intentional asymmetry
// Row 1: full-width landscape
// Row 2: 7/5 cols (landscape + portrait tension)
// Row 3: single "plate" centred at 6 cols
// Row 4: 5/7 cols (mirrored from row 2)

const images = [
  {
    src: imgStreet1,
    alt: "Skateboarder at the Southbank undercroft",
    // Row 1: full width
    grid: "col-span-12",
    aspect: "",
  },
  {
    src: imgArch1,
    alt: "St Paul's Cathedral dome at golden hour",
    // Row 2: left column, wider
    grid: "col-span-12 md:col-span-7",
    aspect: "",
  },
  {
    src: imgHands1,
    alt: "An older man's hands clasped behind his back",
    // Row 2: right column, narrower — portrait aspect creates contrast
    grid: "col-span-12 md:col-span-5",
    aspect: "",
  },
  {
    src: imgStreet2,
    alt: "Figures seen through a passing train window",
    // Row 3: centred plate
    grid: "col-span-12 md:col-span-6 md:col-start-4",
    aspect: "",
  },
  {
    src: imgDaily1,
    alt: "Newborn baby sleeping with a small bow",
    // Row 4: left, narrower
    grid: "col-span-12 md:col-span-5",
    aspect: "",
  },
  {
    src: imgArch2,
    alt: "Top of the London Eye rising into a clear sky",
    // Row 4: right, wider — mirrors row 2 in reverse
    grid: "col-span-12 md:col-span-7",
    aspect: "",
  },
];

const PortfolioGrid = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-36 px-6 border-t border-border">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="mb-14 md:mb-20">
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
            Selected work
          </p>
        </div>

        {/* Editorial 12-column grid */}
        <div className="grid grid-cols-12 gap-1 md:gap-1.5">
          {images.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 60} className={item.grid}>
              <div
                className={`overflow-hidden ${item.aspect}`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  opacity: hoveredIdx !== null && hoveredIdx !== i ? 0.2 : 1,
                  transition: "opacity 0.55s ease",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20">
          <Link
            to="/portfolio"
            className="font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground pb-px border-b border-muted-foreground/25 hover:text-accent hover:border-accent transition-all duration-300"
          >
            View all work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
