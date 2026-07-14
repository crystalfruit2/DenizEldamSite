// Small recurring UI strings (nav labels, buttons, section headings) that
// aren't really "content" but still need an English/Turkish pair. Keeping
// them here (rather than inline in every component) means one place to
// check when a label needs to change.

import type { Localized } from "./language-context";

export const ui = {
  nav: {
    home: { en: "Home", tr: "Ana Sayfa" } satisfies Localized<string>,
    books: { en: "Books", tr: "Kitaplar" } satisfies Localized<string>,
    media: { en: "Media", tr: "Medya" } satisfies Localized<string>,
    cv: { en: "CV", tr: "Özgeçmiş" } satisfies Localized<string>,
  },
  languageSwitcher: {
    label: { en: "Language", tr: "Dil" } satisfies Localized<string>,
  },
  hero: {
    cta: { en: "Discover her books", tr: "Kitapları keşfet" } satisfies Localized<string>,
  },
  about: {
    heading: { en: "About", tr: "Hakkında" } satisfies Localized<string>,
  },
  books: {
    heading: { en: "Books", tr: "Kitaplar" } satisfies Localized<string>,
    viewAll: { en: "View all →", tr: "Tümü →" } satisfies Localized<string>,
    pages: { en: "pages", tr: "sayfa" } satisfies Localized<string>,
    buy: { en: "Buy", tr: "Satın al" } satisfies Localized<string>,
    coverAlt: { en: "cover", tr: "kapak" } satisfies Localized<string>,
    onNotos: { en: "on Notos Kitap", tr: "Notos Kitap'ta" } satisfies Localized<string>,
  },
  cv: {
    downloadLabel: { en: "Download CV (.docx)", tr: "CV'yi indir (.docx)" } satisfies Localized<string>,
  },
  media: {
    heading: { en: "Watch & Listen", tr: "İzle & Dinle" } satisfies Localized<string>,
    viewAll: { en: "View all →", tr: "Tümü →" } satisfies Localized<string>,
    watchOnYoutube: { en: "Watch on YouTube", tr: "YouTube'da izle" } satisfies Localized<string>,
    playlist: { en: "Playlist", tr: "Oynatma Listesi" } satisfies Localized<string>,
  },
} as const;
