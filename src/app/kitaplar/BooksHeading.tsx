"use client";

import { useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/ui-strings";

// Split out from the page so the page itself can stay a server component
// (and keep its static `metadata` export) while this one small piece reacts
// to the language toggle.
export default function BooksHeading() {
  const { language } = useLanguage();
  return (
    <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
      {ui.books.heading[language]}
    </h1>
  );
}
