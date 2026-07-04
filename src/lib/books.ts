// Book data. Each book is a plain object; pages map over this array so adding
// her third book later is a one-object edit here — no page changes needed.

export type Book = {
  slug: string;
  title: string;
  year: number;
  pages: number;
  isbn: string;
  cover: string; // path under /public
  buyUrl: string;
  description: string;
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
    // NOTE: partial blurb — get the full Notos description text and complete this.
    description:
      "Gözleriniz karanlığa alışınca orada neler göreceğinizi bilemezsiniz. Deniz Eldam'ın bilinmeyenin perdesini araladığı Gözlerin Karanlığa Alışınca'da karanlığa adım atan karakterlerle karşılaşıyoruz.",
  },
  {
    slug: "bunu-kimseye-anlatma",
    title: "Bunu Kimseye Anlatma",
    year: 2022,
    pages: 132,
    isbn: "978-605-7643-84-1",
    cover: "/covers/bunu-kimseye-anlatma.webp",
    buyUrl: "https://notoskitap.com/kitap/deniz-eldam-bunu-kimseye-anlatma/",
    description:
      "Farklı kesimlerden kadınların türlü hallerini anlatan on beş öykü. Çocuğunu kaybetmiş annenin acısı, kanserin pençesinde yaşam mücadelesi veren kardeşin çaresizliği, erken menopoza girmiş kadının bocaladığı anlar, şehir yaşamı içinde köşeye sıkışmış kadınların saf iyilik ve saf kötülük arasındaki gelgitleri. Deniz Eldam Bunu Kimseye Anlatma'da öfkeli, protest kadınların var olma çabalarına odaklanıyor; yıkıcı tutkulara, kadın erkek ilişkilerine, aile kurumuna yönelen, sonunda gene de umuda yer açan etkileyici bir sorgulama.",
  },
];
