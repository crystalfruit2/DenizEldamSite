import type { Metadata } from "next";
import { books } from "@/lib/books";
import BookCard from "@/components/BookCard";

export const metadata: Metadata = {
  title: "Kitaplar",
};

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-serif text-4xl text-foreground">Kitaplar</h1>
      <div className="mt-14 space-y-16">
        {books.map((book) => (
          <BookCard key={book.slug} book={book} detailed />
        ))}
      </div>
    </div>
  );
}
