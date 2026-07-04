import type { Metadata } from "next";
import { books } from "@/lib/books";
import BookCard from "@/components/BookCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Kitaplar",
};

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
          Kitaplar
        </h1>
      </Reveal>
      <div className="mt-16 space-y-20">
        {books.map((book, i) => (
          <Reveal key={book.slug} delay={i * 0.08}>
            <BookCard book={book} detailed />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
