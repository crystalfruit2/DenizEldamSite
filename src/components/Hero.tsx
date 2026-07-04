"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { author, heroQuote } from "@/lib/site";

// Staggered entrance: each element fades up a beat after the previous one,
// so the hero "arrives" on load rather than just appearing.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="grid items-center gap-12 py-20 sm:grid-cols-[1fr_300px] sm:py-28">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="text-sm uppercase tracking-[0.25em] text-muted"
        >
          {author.tagline}
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-4 font-serif text-6xl leading-[1.05] text-foreground sm:text-7xl"
        >
          {author.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-8 max-w-md font-serif text-2xl italic leading-snug text-accent"
        >
          “{heroQuote}”
        </motion.p>
        <motion.div variants={item}>
          <Link
            href="/kitaplar"
            className="group mt-10 inline-flex items-center gap-2 border border-accent px-6 py-2.5 text-sm text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Kitapları keşfet
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-64 sm:w-full"
      >
        {/* Soft offset frame behind the portrait for depth. */}
        <div className="absolute -inset-3 -z-10 border border-line" />
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={author.portrait}
            alt={author.name}
            fill
            sizes="(max-width: 640px) 16rem, 300px"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
