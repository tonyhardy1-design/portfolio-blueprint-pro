import { Link } from "react-router-dom";
import img1 from "@/assets/street/3-DSC02082.jpg";
import img2 from "@/assets/architecture/11-DSC06524.jpg";
import img3 from "@/assets/daily/7-DSCF8997.jpg";
import img4 from "@/assets/street/4-DSC00283.jpg";
import img5 from "@/assets/architecture/1-DSCF1193.jpg";
import img6 from "@/assets/daily/16-DSCF1567.jpg";

const images = [
  { src: img1, alt: "Figures seen through a passing train window" },
  { src: img2, alt: "St Paul's Cathedral dome at golden hour" },
  { src: img3, alt: "An older man's hands clasped behind his back" },
  { src: img4, alt: "Man in yellow jacket, building reflected in a van window" },
  { src: img5, alt: "Figure walking through a colonnaded arcade" },
  { src: img6, alt: "Two people relaxing in deckchairs on Brighton Pier" },
];

const PortfolioGrid = () => {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="container mx-auto">
        <div className="mb-16">
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-3">Selected work</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Recent photographs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {images.map((item, i) => (
            <div key={i} className="group">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover transition-opacity duration-500 group-hover:opacity-90"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            to="/portfolio"
            className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground border-b border-muted-foreground/30 pb-1 hover:text-foreground hover:border-foreground transition-all duration-300"
          >
            View all work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
