"use client";

import Link from "next/link";
import { bio } from "@/lib/site";
import { books } from "@/lib/books";
import { media } from "@/lib/media";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/ui-strings";
import BookCard from "@/components/BookCard";
import VideoCard from "@/components/VideoCard";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import DictionarySpine from "@/components/DictionarySpine";
import DictionaryWord from "@/components/DictionaryWord";
import SectionDivider from "@/components/SectionDivider";

const featuredMedia = media.slice(0, 3);

// Wherever her invented word appears in the bio, it becomes a living
// dictionary entry (hover/tap reveals the definition). The word itself
// stays "çikoçiki" in both languages — only its gloss translates.
function withDictionaryWords(text: string) {
  return text
    .split(/(çikoçiki)/i)
    .map((part, i) =>
      part.toLowerCase() === "çikoçiki" ? (
        <DictionaryWord key={i}>{part}</DictionaryWord>
      ) : (
        part
      ),
    );
}

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-6">
      <Hero />

      {/* Bio — text reveals paragraph by paragraph, dictionary motif alongside */}
      <SectionDivider />
      <section className="py-20">
        <Reveal>
          <h2 className="font-serif text-sm uppercase tracking-[0.25em] text-muted">
            {ui.about.heading[language]}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 sm:grid-cols-[1fr_11rem]">
          <div className="max-w-2xl space-y-5 font-serif text-lg leading-relaxed text-foreground/90">
            {bio[language].map((paragraph, i) => (
              <Reveal key={i} delay={i === 0 ? 0 : 0.05}>
                <p
                  className={
                    i === 0
                      ? // Book-style drop cap on the opening paragraph.
                        "first-letter:float-left first-letter:pr-3 first-letter:font-serif first-letter:text-[3.4rem] first-letter:leading-[0.85] first-letter:text-accent"
                      : undefined
                  }
                >
                  {withDictionaryWords(paragraph)}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="hidden sm:block">
            <div className="sticky top-24">
              <DictionarySpine />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured books */}
      <SectionDivider />
      <section className="py-20">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-sm uppercase tracking-[0.25em] text-muted">
              {ui.books.heading[language]}
            </h2>
            <Link
              href="/kitaplar"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {ui.books.viewAll[language]}
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

      {/* Featured video/podcast appearances */}
      <SectionDivider />
      <section className="py-20">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-sm uppercase tracking-[0.25em] text-muted">
              {ui.media.heading[language]}
            </h2>
            <Link
              href="/medya"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {ui.media.viewAll[language]}
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-3">
          {featuredMedia.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <VideoCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
