"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

// A tiny reusable wrapper: whatever you put inside fades + rises into view
// the first time it scrolls onto screen. This one component is the whole
// "motion" story — used everywhere so the site feels alive but consistent.
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
