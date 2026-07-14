"use client";

import Image from "next/image";
import type { MediaItem } from "@/lib/media";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/ui-strings";

// A YouTube appearance card — thumbnail with a play glyph that appears on
// hover/focus, title, and channel. Same lift-and-shadow hover language as
// BookCard, so the two catalogues (books, appearances) read as one family.
export default function VideoCard({ item }: { item: MediaItem }) {
  const { language } = useLanguage();

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      aria-label={`${item.title} — ${ui.media.watchOnYoutube[language]}`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-line/40 shadow-[0_12px_32px_-14px_rgba(32,31,28,0.5)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_48px_-16px_rgba(32,31,28,0.6)]">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Play glyph — a quiet navy circle, brightens on hover. */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#201f1c]/0 transition-colors duration-500 group-hover:bg-[#201f1c]/15">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 shadow-[0_6px_16px_-4px_rgba(32,31,28,0.5)] transition-transform duration-500 group-hover:scale-110">
            <svg
              viewBox="0 0 24 24"
              className="ml-0.5 h-5 w-5 fill-accent"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {item.kind === "playlist" && (
          <span className="absolute right-2 top-2 bg-accent px-2 py-0.5 text-[0.65rem] uppercase tracking-wide text-background">
            {ui.media.playlist[language]}
          </span>
        )}
      </div>

      <div className="mt-3">
        <h3 className="font-serif text-base leading-snug text-foreground">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{item.channel}</p>
      </div>
    </a>
  );
}
