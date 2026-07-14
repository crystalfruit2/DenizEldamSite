"use client";

import Image from "next/image";
import type { Book } from "@/lib/books";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/ui-strings";

// A reusable book display. `detailed` switches between the compact home-page
// version (cover + title) and the full books-page version (with description).
// Hover: the cover lifts and the image gently zooms — pure CSS, no JS.
export default function BookCard({
  book,
  detailed = false,
}: {
  book: Book;
  detailed?: boolean;
}) {
  const { language } = useLanguage();

  return (
    <article
      className={
        detailed
          ? "grid gap-8 sm:grid-cols-[210px_1fr] sm:gap-12"
          : "flex flex-col gap-5"
      }
    >
      <a
        href={book.buyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        aria-label={`${book.title} — ${ui.books.onNotos[language]}`}
      >
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-line/40 shadow-[0_12px_32px_-14px_rgba(32,31,28,0.5)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_48px_-16px_rgba(32,31,28,0.6)]">
          <Image
            src={book.cover}
            alt={`${book.title} — ${ui.books.coverAlt[language]}`}
            fill
            sizes="(max-width: 640px) 60vw, 210px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      </a>

      <div className={detailed ? "" : "text-center"}>
        <h3 className="font-serif text-2xl text-foreground">{book.title}</h3>
        <p className="mt-1.5 text-sm text-muted">
          {book.year} · {book.pages} {ui.books.pages[language]} · Notos Kitap
        </p>

        {detailed && (
          <>
            <p className="mt-5 max-w-prose leading-relaxed text-foreground/85">
              {book.description[language]}
            </p>
            <p className="mt-4 text-xs tracking-wide text-muted">
              ISBN {book.isbn}
            </p>
            <a
              href={book.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 border border-accent px-5 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-background"
            >
              {ui.books.buy[language]}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </>
        )}
      </div>
    </article>
  );
}
