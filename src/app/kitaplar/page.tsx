import type { Metadata } from "next";
import { books } from "@/lib/books";
import BookCard from "@/components/BookCard";
import Reveal from "@/components/Reveal";
import BooksHeading from "./BooksHeading";

export const metadata: Metadata = {
  title: "Books",
};

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <BooksHeading />
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
