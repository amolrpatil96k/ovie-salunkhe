"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over an interactive element
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.glass-panel-hover')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300"
      animate={{
        background: `radial-gradient(${isHovering ? '600px' : '400px'} circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(57, 255, 20, 0.04), transparent 80%)`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    />
  );
}
