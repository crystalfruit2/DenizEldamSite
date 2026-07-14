// Book data. Each book is a plain object; pages map over this array so adding
// her third book later is a one-object edit here — no page changes needed.
// Titles stay in Turkish (the actual published titles); descriptions are
// bilingual so the same catalogue reads naturally in English or Turkish.

import type { Localized } from "./language-context";

export type Book = {
  slug: string;
  title: string;
  year: number;
  pages: number;
  isbn: string;
  cover: string; // path under /public
  buyUrl: string;
  description: Localized<string>;
};

export const books: Book[] = [
  {
    slug: "gozlerin-karanliga-alisinca",
    title: "Gözlerin Karanlığa Alışınca",
    year: 2025,
    pages: 144,
    isbn: "978-625-6469-37-2",
    cover: "/covers/gozlerin-karanliga-alisinca.avif",
    buyUrl: "https://notoskitap.com/kitap/deniz-eldam-gozlerin-karanliga-alisinca/",
    description: {
      // NOTE: partial blurb — get the full Notos description text and complete this.
      tr: "Gözleriniz karanlığa alışınca orada neler göreceğinizi bilemezsiniz. Deniz Eldam'ın bilinmeyenin perdesini araladığı Gözlerin Karanlığa Alışınca'da karanlığa adım atan karakterlerle karşılaşıyoruz.",
      en: "You never know what you'll see once your eyes adjust to the dark. In Gözlerin Karanlığa Alışınca, Deniz Eldam draws back the curtain on the unknown, introducing us to characters who step into the darkness.",
    },
  },
  {
    slug: "bunu-kimseye-anlatma",
    title: "Bunu Kimseye Anlatma",
    year: 2022,
    pages: 132,
    isbn: "978-605-7643-84-1",
    cover: "/covers/bunu-kimseye-anlatma.webp",
    buyUrl: "https://notoskitap.com/kitap/deniz-eldam-bunu-kimseye-anlatma/",
    description: {
      tr: "Farklı kesimlerden kadınların türlü hallerini anlatan on beş öykü. Çocuğunu kaybetmiş annenin acısı, kanserin pençesinde yaşam mücadelesi veren kardeşin çaresizliği, erken menopoza girmiş kadının bocaladığı anlar, şehir yaşamı içinde köşeye sıkışmış kadınların saf iyilik ve saf kötülük arasındaki gelgitleri. Deniz Eldam Bunu Kimseye Anlatma'da öfkeli, protest kadınların var olma çabalarına odaklanıyor; yıkıcı tutkulara, kadın erkek ilişkilerine, aile kurumuna yönelen, sonunda gene de umuda yer açan etkileyici bir sorgulama.",
      en: "Fifteen stories about women from all walks of life, in all their many states. The grief of a mother who has lost her child, the desperation of a sister fighting cancer for her life, the disorientation of a woman entering early menopause, the tidal pull between pure kindness and pure cruelty among women boxed in by city life. In Bunu Kimseye Anlatma, Deniz Eldam focuses on the struggle of angry, defiant women simply to exist — a compelling interrogation of destructive passions, relationships between men and women, and the institution of family, that in the end still leaves room for hope.",
    },
  },
];
