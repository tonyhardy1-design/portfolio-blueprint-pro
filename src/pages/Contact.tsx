import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticWrap from "@/components/MagneticWrap";

const steps = [
  { key: "name", prompt: "Hi, my name is", placeholder: "Your name" },
  { key: "email", prompt: "You can reach me at", placeholder: "your@email.com" },
  { key: "subject", prompt: "I'd like to talk about", placeholder: "Portraits, prints, collaboration…" },
  { key: "message", prompt: "Here's a bit more detail", placeholder: "Tell me everything…" },
];

const snappy = [0.76, 0, 0.24, 1] as const;

const Contact = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const currentStep = steps[step];
  const isLast = step === steps.length - 1;
  const value = formData[currentStep.key as keyof typeof formData];

  const handleNext = () => {
    if (isLast) {
      window.location.href = `mailto:tonyhardy1@hotmail.com?subject=${encodeURIComponent(formData.subject || "Photography Inquiry")}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    } else {
      setStep(step + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) handleNext();
    }
  };

  return (
    <main>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-3xl">
          {/* Progress */}
          <div className="flex gap-2 mb-16">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-[2px] flex-1 transition-all duration-500 ${
                  i <= step ? "bg-foreground" : "bg-border"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: snappy as unknown as number[] }}
            >
              {/* Prompt label */}
              <p className="font-display text-3xl md:text-5xl text-foreground mb-8 leading-tight">
                {currentStep.prompt}
              </p>

              {/* Input */}
              {currentStep.key === "message" ? (
                <textarea
                  autoFocus
                  rows={4}
                  value={value}
                  onChange={(e) => setFormData({ ...formData, [currentStep.key]: e.target.value })}
                  onKeyDown={handleKeyDown}
                  placeholder={currentStep.placeholder}
                  className="w-full bg-transparent border-b-2 border-border focus:border-foreground py-4 font-body text-xl md:text-2xl text-foreground placeholder:text-muted-foreground/30 outline-none transition-colors duration-300 resize-none"
                />
              ) : (
                <input
                  autoFocus
                  type={currentStep.key === "email" ? "email" : "text"}
                  value={value}
                  onChange={(e) => setFormData({ ...formData, [currentStep.key]: e.target.value })}
                  onKeyDown={handleKeyDown}
                  placeholder={currentStep.placeholder}
                  className="w-full bg-transparent border-b-2 border-border focus:border-foreground py-4 font-body text-xl md:text-2xl text-foreground placeholder:text-muted-foreground/30 outline-none transition-colors duration-300"
                />
              )}

              {/* Actions */}
              <div className="flex items-center justify-between mt-10">
                <div className="flex gap-4">
                  {step > 0 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                    >
                      ← Back
                    </button>
                  )}
                </div>

                <MagneticWrap strength={0.2}>
                  <button
                    onClick={handleNext}
                    disabled={!value.trim()}
                    className="bg-foreground text-background px-8 py-3 font-body text-sm tracking-widest uppercase disabled:opacity-20 hover:bg-muted-foreground transition-all duration-300"
                  >
                    {isLast ? "Send" : "Continue →"}
                  </button>
                </MagneticWrap>
              </div>

              <p className="font-body text-xs text-muted-foreground/50 mt-6">
                Press Enter to continue
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Email fallback */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          href="mailto:tonyhardy1@hotmail.com"
          className="absolute bottom-16 font-body text-xs tracking-widest uppercase text-muted-foreground/40 hover:text-foreground transition-colors"
        >
          or email directly → tonyhardy1@hotmail.com
        </motion.a>
      </section>
    </main>
  );
};

export default Contact;
