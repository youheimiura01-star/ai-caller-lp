"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  className,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const offsets = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: offsets[direction].y,
        x: offsets[direction].x,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : {
              opacity: 0,
              y: offsets[direction].y,
              x: offsets[direction].x,
            }
      }
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
