import Link from "next/link";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/kitaplar", label: "Kitaplar" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-sm">
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
              className="relative text-muted transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-accent hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
