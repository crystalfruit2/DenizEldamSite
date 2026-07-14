"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { author, heroQuote, currentStatus } from "@/lib/site";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/ui-strings";

// Staggered entrance: each element fades up a beat after the previous one,
// so the hero "arrives" on load rather than just appearing.
const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

// The quote arrives word by word, like ink being set down.
const quoteLine = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
};

const quoteWord = {
  hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease },
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const words = heroQuote[language].split(" ");

  return (
    <section className="grid items-center gap-12 py-20 sm:grid-cols-[1fr_300px] sm:py-28">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="text-sm uppercase tracking-[0.25em] text-muted"
        >
          {author.tagline[language]}
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-4 font-serif text-6xl leading-[1.05] text-foreground sm:text-7xl"
        >
          {author.name}
        </motion.h1>
        <motion.p
          variants={quoteLine}
          className="mt-8 max-w-md font-serif text-2xl italic leading-snug text-accent"
        >
          “
          {words.map((word, i) => (
            <motion.span key={i} variants={quoteWord} className="inline-block">
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          ))}
          ”
        </motion.p>
        <motion.div variants={item}>
          <Link
            href="/kitaplar"
            className="group mt-10 inline-flex items-center gap-2 border border-accent px-6 py-2.5 text-sm text-accent transition-colors hover:bg-accent hover:text-background"
          >
            {ui.hero.cta[language]}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
        {/* A quiet sign of life: what she's working on right now. */}
        <motion.p
          variants={item}
          className="mt-8 flex items-center gap-2.5 text-sm text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 [animation-duration:2.5s]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent/80" />
          </span>
          {currentStatus[language]}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease }}
        className="group relative mx-auto w-64 sm:w-full"
      >
        {/* Soft offset frame behind the portrait for depth; it drifts on hover. */}
        <div className="absolute -inset-3 -z-10 border border-line transition-transform duration-500 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5" />
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={author.portrait}
            alt={author.name}
            fill
            sizes="(max-width: 640px) 16rem, 300px"
            className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
