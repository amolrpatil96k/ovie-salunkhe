"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Camera, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact-section" className="relative py-24 sm:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[var(--color-brand-orange)]/5 blur-[120px] rounded-full w-full h-full mix-blend-screen pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-foreground">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Open for media inquiries, brand partnerships, and sponsorship opportunities. Connect with the team to be part of the journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:contact@oviesalunkhe.com"
              className="group relative px-8 py-4 bg-foreground text-background rounded-full font-bold overflow-hidden transition-transform hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-14 h-14 rounded-full bg-[var(--color-panel-bg)] border border-[var(--color-panel-border)] flex items-center justify-center text-foreground hover:text-pink-500 hover:border-pink-500 transition-all hover:-translate-y-1">
                <Camera size={24} />
              </a>
              <a href="#" className="w-14 h-14 rounded-full bg-[var(--color-panel-bg)] border border-[var(--color-panel-border)] flex items-center justify-center text-foreground hover:text-blue-400 hover:border-blue-400 transition-all hover:-translate-y-1">
                <MessageSquare size={24} />
              </a>
              <a href="#" className="w-14 h-14 rounded-full bg-[var(--color-panel-bg)] border border-[var(--color-panel-border)] flex items-center justify-center text-foreground hover:text-[var(--color-neon-green)] hover:border-[var(--color-neon-green)] transition-all hover:-translate-y-1">
                <MessageSquare size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
