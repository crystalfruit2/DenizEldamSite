import { author } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Deniz Eldam</p>
        <a
          href={author.notosUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          Notos Kitap
        </a>
      </div>
    </footer>
  );
}
