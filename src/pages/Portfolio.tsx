import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import bwStreet1 from "@/assets/bw-street-1.jpg";
import bwArch1 from "@/assets/bw-arch-1.jpg";
import bwCandid1 from "@/assets/bw-candid-1.jpg";

const categories = [
  {
    label: "Street Photography",
    description: "People, movement, and the unexpected moments cities offer.",
    path: "/portfolio/street",
    image: bwStreet1,
    alt: "Pedestrian crossing in rain",
  },
  {
    label: "Architecture",
    description: "Form, structure, and the geometry of built space.",
    path: "/portfolio/architecture",
    image: bwArch1,
    alt: "Architectural lines and shadow",
  },
  {
    label: "Daily Perspectives",
    description: "Quiet observations from ordinary life.",
    path: "/portfolio/daily",
    image: bwCandid1,
    alt: "Café scene, candid moment",
  },
];

const Portfolio = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div className="py-16 md:py-24 mb-8">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">The work</h1>
            <p className="font-body text-sm text-muted-foreground max-w-md">
              A collection of street photography, architecture, and daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {categories.map((cat) => (
              <Link key={cat.path} to={cat.path} className="group cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:-translate-y-2"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <p className="font-body text-[11px] tracking-[0.15em] uppercase text-foreground mb-1">
                    {cat.label}
                  </p>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Portfolio;
