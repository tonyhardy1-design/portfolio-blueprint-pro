import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import closingImg from "@/assets/street/DSCF4933.JPG";

const Contact = () => {
  return (
    <main>
      <Navbar />

      {/* Header — editorial statement */}
      <section className="pt-24 px-6">
        <div className="container mx-auto max-w-2xl py-16 md:py-24">
          <RevealOnScroll>
            <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-10">
              Contact
            </p>

            <h1
              className="text-foreground leading-[1.04] mb-16"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
              }}
            >
              Let's work
              <br />
              together.
            </h1>

            <div className="space-y-10 pb-16">
              <div>
                <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-4">
                  Email
                </p>
                <a
                  href="mailto:tonyhardy1@hotmail.com"
                  className="font-display text-2xl md:text-3xl text-foreground transition-colors duration-300 hover:text-accent"
                >
                  tonyhardy1@hotmail.com
                </a>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-4">
                  Instagram
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/t.r.h.85/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl md:text-3xl text-foreground transition-colors duration-300 hover:text-accent"
                  >
                    @t.r.h.85
                  </a>
                  <a
                    href="https://www.instagram.com/tonyrh85/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl md:text-3xl text-foreground transition-colors duration-300 hover:text-accent"
                  >
                    @tonyrh85
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="font-body text-sm text-muted-foreground leading-[1.85] max-w-sm">
                  Available for commissions, print enquiries, and editorial work.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Closing image — atmospheric sign-off */}
      <div className="w-full overflow-hidden" style={{ height: "50vh" }}>
        <img
          src={closingImg}
          alt="Movement through a street market"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
          loading="lazy"
        />
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
