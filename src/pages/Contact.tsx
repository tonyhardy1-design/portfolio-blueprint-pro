import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-xl">
          <div className="py-16 md:py-24">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">Get in touch</h1>
            <p className="font-body text-sm text-muted-foreground">
              For commissions, prints, or just to say hello.
            </p>
          </div>

          <div className="space-y-8 pb-20">
            <div>
              <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-3">Email</p>
              <a
                href="mailto:tonyhardy1@hotmail.com"
                className="font-display text-2xl md:text-3xl text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                tonyhardy1@hotmail.com
              </a>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-3">Instagram</p>
              <a
                href="https://www.instagram.com/t.r.h.85/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl md:text-3xl text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                @t.r.h.85
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
