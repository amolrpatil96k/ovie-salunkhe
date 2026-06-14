"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about-section" },
  { name: "Stats", href: "#stats-section" },
  { name: "Gallery", href: "#gallery-section" },
  { name: "Contact", href: "#contact-section" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Add glass background when scrolled past 50px
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide navbar on scroll down, show on scroll up (smart scroll)
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActive(name);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-[100] w-full flex justify-center transition-all duration-300`}
      >
        <div 
          className={`flex items-center justify-between px-6 sm:px-8 py-3 lg:px-12 transition-all duration-500 w-full ${
            isScrolled 
              ? "bg-white/70 dark:bg-black/50 backdrop-blur-xl border-b border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.04)]" 
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, "#hero", "Home")}
            className="text-xl font-black tracking-tighter text-foreground hover:scale-105 transition-transform"
          >
            Ovie<span className="text-[var(--color-brand-orange)]">.</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-2 relative">
            {navLinks.map((link) => (
              <li
                key={link.name}
                onMouseEnter={() => setHovered(link.name)}
                onMouseLeave={() => setHovered(null)}
                className="relative px-4 py-2"
              >
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href, link.name)}
                  className={`relative z-20 text-sm font-semibold transition-colors duration-300 ${
                    active === link.name 
                      ? "text-black dark:text-white" 
                      : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </a>

                {/* Hover Pill */}
                {hovered === link.name && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 z-10 bg-black/5 dark:bg-white/10 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Active Pill Indicator */}
                {active === link.name && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--color-neon-green)] rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground relative z-50 rounded-full bg-black/5 dark:bg-white/10"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-white/80 dark:bg-[#050505]/90 flex flex-col justify-center items-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href, link.name)}
                    className={`text-4xl font-black tracking-tight transition-colors ${
                      active === link.name ? "text-gradient" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4, ease: "easeOut" }}
                className="mt-8"
              >
                <ThemeToggle />
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
