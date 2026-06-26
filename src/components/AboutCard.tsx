"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutCard() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <section id="about-section" className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 md:pt-24 z-30 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel p-8 md:p-12 lg:p-16 rounded-[2.5rem] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-orange)]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* Text Content - Spans 7 columns on large screens */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              The Genesis of <br />
              <span className="text-gradient">Ovie Salunkhe</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-yellow)] mb-10 rounded-full"></div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                  <span className="text-[var(--color-neon-green)]">01.</span> Early Beginnings
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Born with an innate passion for the sport, Ovie Salunkhe's journey started on the bustling maidans of Mumbai. What began as a childhood fascination quickly transformed into a rigorous pursuit of excellence. Her early coaches recognized a rare blend of natural timing and an unshakable temperament—traits that are notoriously difficult to teach.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                  <span className="text-[var(--color-neon-green)]">02.</span> Competitive Ascent
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Currently making waves in the Under-17 circuit, Ovie has cemented her place in the prestigious MCA U 17 squad. Known for her fierce passion and sharp on-field instincts, she balances intense academy training with high-stakes competitive matches. Her approach to the game is methodical; she deconstructs bowlers' strategies while maintaining an aggressive, run-scoring intent.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                  <span className="text-[var(--color-neon-green)]">03.</span> The Ultimate Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Beyond the statistics and the trophies, Ovie's philosophy is rooted in continuous evolution. Every grueling fitness session and every hour spent perfecting her cover drive in the nets is a calculated step toward her ultimate dream: representing the nation on the grandest stage. She isn't just playing to win; she's playing to leave a legacy.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image Content - Spans 5 columns on large screens */}
          <div ref={ref} className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,123,0,0.15)] group sticky top-24">
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent z-10"></div>
            <div className="w-full h-full bg-gray-200 dark:bg-[#111] flex items-center justify-center absolute inset-0">
               <span className="text-gray-500 font-mono">/1000064605.jpg</span>
            </div>
            <motion.img 
              style={{ y }}
              src="/1000064605.jpg" 
              alt="Ovie Salunkhe Portrait" 
              className="absolute -top-10 -bottom-10 w-full h-[calc(100%+80px)] object-cover transition-transform duration-700 group-hover:scale-105 z-0"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            
            {/* Floating Stat Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-8 right-8 z-20 glass-panel px-6 py-4 rounded-2xl border-l-4 border-[var(--color-neon-green)]"
            >
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Current Status</p>
              <p className="text-xl font-black text-foreground">MCA U 17</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 
