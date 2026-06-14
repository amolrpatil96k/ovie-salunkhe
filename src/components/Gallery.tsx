"use client";

import { motion, Variants } from "framer-motion";

const media = [
  { id: 1, src: "/1000064627.mp4", caption: "Straight Drive Execution" },
  { id: 2, src: "/1000064629.mp4", caption: "Match Day Focus" },
  { id: 3, src: "/1000064630.mp4", caption: "Agility Training" },
  { id: 4, src: "/1000064631.mp4", caption: "Team Huddle" },
  { id: 5, src: "/1000064632.mp4", caption: "Victory Moment" },
  { id: 6, src: "/1000064633.mp4", caption: "Post Match Analysis" },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export function Gallery() {
  return (
    <section id="gallery-section" className="relative py-32 bg-background overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">The <span className="text-gradient">Journey</span> in Frames</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">Swipe to explore the defining moments on and off the field.</p>
        </motion.div>
      </div>
      
      {/* Scroll Container */}
      <div className="w-full overflow-x-auto pb-12 pt-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide">
        <div className="flex gap-6 w-max mx-auto lg:mx-0">
          {media.map((item, index) => (
            <motion.div 
              key={item.id}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px -50px" }}
              className="relative w-[85vw] sm:w-[400px] lg:w-[500px] h-[400px] sm:h-[500px] lg:h-[600px] shrink-0 rounded-[2rem] overflow-hidden group shadow-2xl snap-center"
            >
              <div className="absolute inset-0 bg-[#111] z-0 flex items-center justify-center">
                <span className="text-gray-600 font-mono text-sm">{item.src}</span>
              </div>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
              >
                 <source src={item.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <div className="glass-panel backdrop-blur-md bg-white/10 px-4 py-3 sm:px-6 sm:py-4 rounded-xl border-l-4 border-[var(--color-neon-green)] inline-block max-w-[90%]">
                  <p className="text-white font-bold text-base sm:text-lg tracking-wide truncate">{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
