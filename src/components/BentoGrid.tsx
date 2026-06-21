"use client";

import { motion, Variants } from "framer-motion";
import { Dumbbell, Target, Trophy, Activity, Zap } from "lucide-react";
import { Counter } from "./ui/Counter";

export function BentoGrid() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="stats-section" className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 z-20 relative">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground"
        >
          By the <span className="text-gradient">Numbers</span>
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          The rigorous breakdown of what it takes to perform at the elite Under-17 level. Every statistic represents sweat, discipline, and an unwavering commitment to the sport.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto md:auto-rows-[250px]"
      >
        {/* Large Stat Panel */}
        <motion.div variants={itemVariants} className="glass-panel glass-panel-hover rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group md:col-span-2 md:row-span-2 flex flex-col justify-end transition-transform hover:-translate-y-2 min-h-[250px] md:min-h-0">
          <div className="absolute inset-0 z-0 flex">
            <div className="w-1/2 h-full bg-gray-200 dark:bg-[#111] relative">
               <img src="/1000064636.jpg" alt="Gym 1" className="absolute inset-0 w-full h-full object-cover opacity-100 dark:opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
            </div>
            <div className="w-1/2 h-full bg-gray-300 dark:bg-[#1a1a1a] relative">
               <img src="/1000064637.jpg" alt="Gym 2" className="absolute inset-0 w-full h-full object-cover opacity-100 dark:opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
            </div>
            <div className="absolute inset-0 bg-transparent dark:bg-gradient-to-t dark:from-[#050505] dark:via-[#050505]/80 dark:to-transparent z-10"></div>
          </div>
          
          <div className="relative z-20">
            <div className="w-14 h-14 bg-[var(--color-brand-orange)]/10 rounded-2xl flex items-center justify-center mb-6 border border-[var(--color-brand-orange)]/30 backdrop-blur-md">
              <Dumbbell className="text-[var(--color-brand-orange)] w-7 h-7" />
            </div>
            <h3 className="text-6xl font-black mb-2 flex items-baseline gap-2 text-white">
              <Counter value={1200} suffix="+" />
            </h3>
            <p className="text-xl font-bold mb-2 text-white">Hours of Intensive Training</p>
            <p className="text-gray-200 text-sm leading-relaxed max-w-sm drop-shadow-md">
              Combining strength conditioning, endurance drills, and mobility work to ensure peak physical readiness for grueling tournaments.
            </p>
          </div>
        </motion.div>

        {/* Video Panel */}
        <motion.div variants={itemVariants} className="glass-panel glass-panel-hover rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group md:col-span-2 md:row-span-2 flex flex-col justify-end transition-transform hover:-translate-y-2 min-h-[250px] md:min-h-0">
          <div className="absolute inset-0 z-0">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-100 dark:opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
               <source src="/1000064626.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-transparent dark:bg-gradient-to-t dark:from-[#050505] dark:via-[#050505]/60 dark:to-transparent z-10"></div>
          </div>

          <div className="relative z-20">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20 backdrop-blur-md">
              <Zap className="text-white w-7 h-7" />
            </div>
            <h3 className="text-5xl font-black mb-2 flex items-baseline gap-2 text-white">
              <Counter value={5000} suffix="+" />
            </h3>
            <p className="text-xl font-bold mb-2 text-white">Deliveries Faced in Nets</p>
            <p className="text-gray-200 text-sm leading-relaxed max-w-sm drop-shadow-md">
              From searing pace to deceptive spin, adapting to every condition through relentless repetition and tactical preparation.
            </p>
          </div>
        </motion.div>

        {/* Achievement Panel */}
        <motion.div variants={itemVariants} className="glass-panel glass-panel-hover rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group md:col-span-2 flex flex-col justify-center transition-transform hover:-translate-y-2 min-h-[250px] md:min-h-0">
          <div className="absolute inset-0 z-0 flex">
            <div className="w-1/2 h-full bg-gray-200 dark:bg-[#111] relative">
               <img src="/1000064638.jpg" alt="Medals" className="absolute inset-0 w-full h-full object-cover opacity-100 dark:opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
            </div>
            <div className="w-1/2 h-full bg-gray-300 dark:bg-[#0a0a0a] relative">
               <img src="/1000064639.jpg" alt="Trophies" className="absolute inset-0 w-full h-full object-cover opacity-100 dark:opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
            </div>
            <div className="absolute inset-0 bg-transparent dark:bg-gradient-to-r dark:from-[#050505] dark:via-[#050505]/80 dark:to-[#050505] z-10"></div>
          </div>

          <div className="relative z-20 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
            <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-brand-yellow)] to-[var(--color-brand-orange)] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_30px_var(--color-brand-yellow)]">
              <Trophy className="text-black w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2 text-white">Championship Mentality</h3>
              <p className="text-gray-200 text-sm drop-shadow-md">
                Consistent performer across multiple high-pressure tournaments, anchoring innings and turning matches single-handedly.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
