"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

export function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          poster="/hero-fallback.jpg"
        >
          <source src="/1000064635.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#050505]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-0 dark:opacity-100" />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-20">
        <div className="flex flex-wrap justify-center gap-x-[3vw] sm:gap-x-6 md:gap-x-8 overflow-hidden">
          {["Ovie", "Salunkhe"].map((word, wordIndex) => (
            <div key={wordIndex} className="flex flex-nowrap">
              {word.split("").map((char, charIndex) => {
                const totalIndex = wordIndex === 0 ? charIndex : 4 + charIndex;
                return (
                  <motion.span
                    key={charIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.2, 0.65, 0.3, 0.9],
                      delay: totalIndex * 0.05,
                    }}
                    className={`text-[12vw] sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none ${
                      wordIndex === 1 ? "text-gradient" : "text-white"
                    }`}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-6 text-xl md:text-2xl font-bold tracking-widest text-[var(--color-brand-orange)] uppercase flex items-center justify-center gap-4 drop-shadow-md"
        >
          <span>Top-Order Batter</span>
          <span className="w-2 h-2 rounded-full bg-[var(--color-neon-green)]"></span>
          <span>MCA West Zone U-17</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-12 animate-pulse-glow rounded-full"
        >
          <MagneticButton
            onClick={scrollToNext}
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full font-bold text-neon border border-neon transition-all duration-300 hover:bg-[var(--color-neon-green)] hover:text-black flex items-center gap-2"
          >
            Explore The Journey
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>

      {/* Marquee Tape */}
      <div className="absolute bottom-10 w-full overflow-hidden z-20 whitespace-nowrap opacity-60">
        <div className="inline-block animate-[marquee_30s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="text-sm md:text-base font-mono uppercase tracking-[0.2em] text-white mx-4">
              • U-17 CIRCUIT • MCA WEST ZONE SQUAD • ELITE TRAINING • MUMBAI CRICKET • POWER STROKES • NEXT GEN TALENT
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
