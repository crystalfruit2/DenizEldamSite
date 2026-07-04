import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// EB Garamond = the literary serif for headings & her prose.
// Inter = a clean sans for UI/secondary text.
// "latin-ext" subset is essential — it carries Turkish glyphs (ş ğ ı ç ö ü).
const garamond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Deniz Eldam",
    template: "%s · Deniz Eldam",
  },
  description:
    "Yazar Deniz Eldam'ın resmî web sitesi — öyküler, kitaplar ve yazarın kendi sesinden.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${garamond.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
