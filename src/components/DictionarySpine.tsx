"use client";

import { useLanguage } from "@/lib/language-context";
import { dictionaryCaption } from "@/lib/site";

// A CSS-drawn homage to the navy, gold-lettered Shorter Oxford English
// Dictionary from Deniz's bio — the first book she "read" before she could
// read. Entirely typographic (no copyrighted image), used as a quiet motif
// beside the "About" section.
export default function DictionarySpine() {
  const { language } = useLanguage();

  return (
    <figure className="flex flex-col items-center gap-4">
      <div className="relative">
        {/* the closed book */}
        <div className="relative flex aspect-[3/4] w-44 flex-col items-center justify-between bg-gradient-to-br from-accent to-[#1a2338] px-4 py-6 text-center shadow-[0_18px_40px_-14px_rgba(32,31,28,0.6)]">
          {/* gold inner frame */}
          <div className="pointer-events-none absolute inset-2.5 border border-[#c8a24a]/60" />

          <p className="mt-2 font-serif text-[0.68rem] uppercase leading-relaxed tracking-[0.18em] text-[#d8b25e]">
            Shorter
            <br />
            Oxford
            <br />
            English
            <br />
            Dictionary
          </p>

          {/* small emblem */}
          <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full border border-[#c8a24a]/60">
            <span className="font-serif text-[0.6rem] tracking-widest text-[#d8b25e]">
              OX
            </span>
          </div>
        </div>
        {/* page-edge on the right for a hint of 3D */}
        <div className="absolute -right-1 top-1 h-[calc(100%-0.5rem)] w-1 bg-[#efe9dc]" />
      </div>

      <figcaption className="max-w-[11rem] text-center text-xs italic leading-relaxed text-muted">
        {dictionaryCaption[language]}
      </figcaption>
    </figure>
  );
}
