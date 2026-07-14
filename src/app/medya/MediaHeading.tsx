"use client";

import { useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/ui-strings";

export default function MediaHeading() {
  const { language } = useLanguage();
  return (
    <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
      {ui.media.heading[language]}
    </h1>
  );
}
