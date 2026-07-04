import Link from "next/link";
import { bio } from "@/lib/site";
import { books } from "@/lib/books";
import BookCard from "@/components/BookCard";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import DictionarySpine from "@/components/DictionarySpine";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <Hero />

      {/* Bio — text reveals paragraph by paragraph, dictionary motif alongside */}
      <section className="border-t border-line py-20">
        <Reveal>
          <h2 className="font-serif text-sm uppercase tracking-[0.25em] text-muted">
            Hakkında
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 sm:grid-cols-[1fr_11rem]">
          <div className="max-w-2xl space-y-5 font-serif text-lg leading-relaxed text-foreground/90">
            {bio.map((paragraph, i) => (
              <Reveal key={i} delay={i === 0 ? 0 : 0.05}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="hidden sm:block">
            <div className="sticky top-16">
              <DictionarySpine />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured books */}
      <section className="border-t border-line py-20">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-sm uppercase tracking-[0.25em] text-muted">
              Kitaplar
            </h2>
            <Link
              href="/kitaplar"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              Tümü →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 sm:grid-cols-2">
          {books.map((book, i) => (
            <Reveal key={book.slug} delay={i * 0.1}>
              <BookCard book={book} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
