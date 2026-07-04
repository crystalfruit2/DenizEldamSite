import Image from "next/image";
import Link from "next/link";
import { author, bio, heroQuote } from "@/lib/site";
import { books } from "@/lib/books";
import BookCard from "@/components/BookCard";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Hero */}
      <section className="grid items-center gap-10 py-16 sm:grid-cols-[1fr_260px] sm:py-24">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            {author.tagline}
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-tight text-foreground sm:text-6xl">
            {author.name}
          </h1>
          <p className="mt-6 max-w-md font-serif text-2xl italic text-accent">
            “{heroQuote}”
          </p>
          <Link
            href="/kitaplar"
            className="mt-8 inline-block border border-accent px-6 py-2.5 text-sm text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Kitapları keşfet →
          </Link>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-56 overflow-hidden sm:w-full">
          <Image
            src={author.portrait}
            alt={author.name}
            fill
            sizes="(max-width: 640px) 14rem, 260px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Bio */}
      <section className="border-t border-line py-16">
        <h2 className="font-serif text-sm uppercase tracking-[0.2em] text-muted">
          Hakkında
        </h2>
        <div className="mt-8 max-w-2xl space-y-5 font-serif text-lg leading-relaxed text-foreground/90">
          {bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Featured books */}
      <section className="border-t border-line py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-sm uppercase tracking-[0.2em] text-muted">
            Kitaplar
          </h2>
          <Link
            href="/kitaplar"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Tümü →
          </Link>
        </div>
        <div className="mt-10 grid gap-12 sm:grid-cols-2">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
