"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/lib/language-context";
import { dictionaryEntry } from "@/lib/site";

// "Çikoçiki" — the word Deniz invented as a child, from her bio. Hovering it
// reveals a tiny dictionary entry, closing the loop with the Oxford dictionary
// motif: the site itself becomes the book that explains her word. The
// invented word itself stays the same in both languages; only its gloss
// translates.
export default function DictionaryWord({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const entry = dictionaryEntry[language];

  return (
    <span className="group relative inline-block">
      <button
        type="button"
        className="cursor-help border-b border-dotted border-accent/70 font-serif italic text-accent"
      >
        {children}
      </button>

      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-64 -translate-x-1/2 translate-y-1 border border-line bg-background p-4 text-left opacity-0 shadow-[0_14px_35px_-12px_rgba(32,31,28,0.35)] transition-all duration-300 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <span className="block font-serif text-base text-foreground">
          çi·ko·çi·ki
        </span>
        <span className="mt-0.5 block text-xs italic text-muted">
          {entry.label}
        </span>
        <span className="mt-2 block text-sm leading-relaxed text-foreground/85">
          {entry.entry}
        </span>
      </span>
    </span>
  );
}
