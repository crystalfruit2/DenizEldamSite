import Link from "next/link";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/kitaplar", label: "Kitaplar" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-foreground"
        >
          Deniz Eldam
        </Link>
        <nav className="flex gap-8 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
