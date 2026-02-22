import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    alert("Thank you! Your inquiry has been sent.");
  };

  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-sm tracking-[0.35em] uppercase text-primary mb-4">Contact</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">Let's Talk</h1>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Tell me about your wedding plans and I'll be in touch within 48 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                Wedding Date
              </label>
              <input
                type="text"
                placeholder="MM/DD/YYYY or TBD"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-foreground placeholder:text-muted-foreground/40 focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                Location / Venue
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary outline-none transition-colors"
              />
            </div>
            <div className="md:col-span-2">
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                Tell Me About Your Day
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary outline-none transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="inline-block bg-primary text-primary-foreground px-12 py-4 font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
              >
                Send Inquiry
              </button>
            </div>
          </motion.form>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
