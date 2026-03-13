import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import aboutPhoto from "@/assets/about-tony.jpg";

const disciplines = [
  { title: "Street",       subtitle: "Documentary",   path: "/portfolio/street" },
  { title: "Architecture", subtitle: "Built Form",    path: "/portfolio/architecture" },
  { title: "Hands",        subtitle: "Studies",       path: "/portfolio/hands" },
  { title: "Daily",        subtitle: "Observational", path: "/portfolio/daily" },
];

const About = () => {
  return (
    <main>
      <Navbar />

      {/* Full-width portrait photograph */}
      <section className="pt-24">
        <div className="w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <img
            src={aboutPhoto}
            alt="Tony Hardy"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto">

          {/* Two-column: large pullquote left, bio paragraphs right */}
          <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start mb-20 md:mb-28">
              <blockquote
                className="text-foreground leading-[1.22]"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(1.7rem, 3vw, 2.8rem)",
                }}
              >
                "To record things as they are,
                <br />
                before they disappear
                <br />
                or pass unnoticed."
              </blockquote>

              <div className="space-y-5 md:pt-3">
                <p className="font-body text-sm text-foreground leading-[1.88]">
                  I am Tony Hardy. My work focuses on the built environment and the people
                  moving through it, often in situations that are easily overlooked.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-[1.88]">
                  I am interested in ordinary scenes, quiet details and the brief intersections
                  between place, light and daily life. I work in both colour and black and white,
                  choosing whichever best serves the subject.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-[1.88]">
                  Sometimes that is the clarity and restraint of architectural form. Other times
                  it is the immediacy of a street scene or a portrait caught without performance.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Disciplines — 4 columns, larger scale */}
          <RevealOnScroll delay={120}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border mb-20 md:mb-28">
              {disciplines.map((d) => (
                <div key={d.title}>
                  <p
                    className="text-foreground mb-2"
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontWeight: 400,
                      fontSize: "clamp(1.35rem, 2vw, 1.75rem)",
                    }}
                  >
                    {d.title}
                  </p>
                  <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                    {d.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Contact CTA */}
          <RevealOnScroll delay={180}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border gap-6">
              <p className="font-body text-sm text-muted-foreground">
                Available for commissions and print enquiries.
              </p>
              <Link
                to="/contact"
                className="font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground pb-px border-b border-muted-foreground/25 hover:text-accent hover:border-accent transition-all duration-300"
              >
                Get in touch →
              </Link>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
