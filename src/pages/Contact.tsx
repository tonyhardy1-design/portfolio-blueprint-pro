import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:tonyhardy1@hotmail.com?subject=${encodeURIComponent(formData.subject || "Photography Inquiry")}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
  };

  const inputClass = "w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-foreground transition-colors duration-300";

  return (
    <main>
      <Navbar />
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-xl">
          <div className="py-16 md:py-24">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">Contact</h1>
            <p className="font-body text-sm text-muted-foreground">
              For commissions, prints, or just to say hello.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={inputClass}
            />
            <textarea
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${inputClass} resize-none`}
              required
            />

            <button
              type="submit"
              className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground border-b border-muted-foreground/30 pb-1 hover:text-foreground hover:border-foreground transition-all duration-300"
            >
              Send message
            </button>
          </form>

          <p className="font-body text-[11px] text-muted-foreground/50 mt-16">
            Or email directly — <a href="mailto:tonyhardy1@hotmail.com" className="hover:text-foreground transition-opacity duration-300">tonyhardy1@hotmail.com</a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
