"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/ui-strings";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SiteHeader() {
  const { language } = useLanguage();

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
        >
          Deniz Eldam
        </Link>
        <div className="flex items-center gap-8">
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
      </div>
    </header>
  );
}
