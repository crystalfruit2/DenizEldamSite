"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/ui-strings";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SiteHeader() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "/", label: ui.nav.home[language] },
    { href: "/kitaplar", label: ui.nav.books[language] },
    { href: "/medya", label: ui.nav.media[language] },
    { href: "/cv", label: ui.nav.cv[language] },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-foreground"
          onClick={() => setOpen(false)}
        >
          Deniz Eldam
        </Link>

        {/* Desktop nav — hidden below sm, where it gets cramped with 4 links + switcher. */}
        <div className="hidden items-center gap-8 sm:flex">
          <nav className="flex gap-8 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-muted transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-accent hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile menu toggle — a simple hamburger / close glyph, no icon library needed. */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-px w-5 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-line bg-background px-6 py-6 sm:hidden">
          <nav className="flex flex-col gap-5 text-base">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-foreground/90 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 border-t border-line pt-6">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
