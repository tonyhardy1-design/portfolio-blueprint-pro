import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { streetThumbnail } from "@/data/street";
import { architectureThumbnail } from "@/data/architecture";
import { dailyThumbnail } from "@/data/daily";

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
    alt: "Figure walking through a colonnaded arcade",
  },
  {
    label: "Daily Perspectives",
    description: "Quiet observations from ordinary life.",
    path: "/portfolio/daily",
    image: dailyThumbnail,
    alt: "Families eating at Frank's Hot Dogs diner",
  },
];

interface TiltCardProps {
  children: React.ReactNode;
}

const TiltCard = ({ children }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  );
  const [easing, setEasing] = useState("transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)");

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setEasing("transform 0.08s linear");
    setTransform(
      `perspective(1000px) rotateX(${y * -9}deg) rotateY(${x * 9}deg) scale3d(1.02,1.02,1.02)`
    );
  };

  const onLeave = () => {
    setEasing("transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)");
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform, transition: easing, transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

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
              <TiltCard key={cat.path}>
                <Link to={cat.path} className="group cursor-pointer block">
                  <div className="overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.alt}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Portfolio;
