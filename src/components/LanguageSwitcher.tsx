"use client";

import { useLanguage } from "@/lib/language-context";

// A tiny EN | TR toggle. Whichever language is active is bold/ink; the other
// is muted and clickable — reads like a simple label, not a dropdown.
export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm" aria-label="Language">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={
          language === "en"
            ? "text-foreground"
            : "text-muted transition-colors hover:text-accent"
        }
      >
        EN
      </button>
      <span className="text-muted/50">/</span>
      <button
        type="button"
        onClick={() => setLanguage("tr")}
        aria-pressed={language === "tr"}
        className={
          language === "tr"
            ? "text-foreground"
            : "text-muted transition-colors hover:text-accent"
        }
      >
        TR
      </button>
    </div>
  );
}
