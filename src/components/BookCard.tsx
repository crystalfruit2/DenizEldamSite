import Image from "next/image";
import type { Book } from "@/lib/books";

// A reusable book display. `detailed` switches between the compact home-page
// version (cover + title) and the full books-page version (with description).
export default function BookCard({
  book,
  detailed = false,
}: {
  book: Book;
  detailed?: boolean;
}) {
  return (
    <article
      className={
        detailed
          ? "grid gap-8 sm:grid-cols-[200px_1fr] sm:gap-10"
          : "flex flex-col gap-4"
      }
    >
      <a
        href={book.buyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-line/40 shadow-[0_10px_30px_-12px_rgba(32,31,28,0.45)] transition-transform duration-300 group-hover:-translate-y-1">
          <Image
            src={book.cover}
            alt={`${book.title} — kapak`}
            fill
            sizes="(max-width: 640px) 60vw, 200px"
            className="object-cover"
          />
        </div>
      </a>

      <div className={detailed ? "" : "text-center"}>
        <h3 className="font-serif text-2xl text-foreground">{book.title}</h3>
        <p className="mt-1 text-sm text-muted">
          {book.year} · {book.pages} sayfa · Notos Kitap
        </p>

        {detailed && (
          <>
            <p className="mt-5 leading-relaxed text-foreground/85">
              {book.description}
            </p>
            <p className="mt-4 text-xs text-muted">ISBN {book.isbn}</p>
            <a
              href={book.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block border border-accent px-5 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-background"
            >
              Satın al →
            </a>
          </>
        )}
      </div>
    </article>
  );
}
