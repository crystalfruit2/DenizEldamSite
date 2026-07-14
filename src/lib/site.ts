// Author info and biography — the "content layer".
// Keeping text here (not hard-coded in pages) means Deniz's words live in one
// place, and every page just reads from it. Preserve her Turkish voice
// verbatim. The English text is a draft translation for her international
// applications — she should read it over and adjust anything that doesn't
// sound like her before it goes out.

import type { Localized } from "./language-context";

export const author = {
  name: "Deniz Eldam",
  tagline: {
    en: "Fiction Writer",
    tr: "Öykü yazarı",
  } satisfies Localized<string>,
  portrait: "/photos/deniz-portrait-4.jpeg",
  notosUrl: "https://notoskitap.com",
};

// Her "About Me" text, split into paragraphs so each renders with book-like spacing.
export const bio: Localized<string[]> = {
  tr: [
    "Önce uydurmaya başladım, sonra okumaya. Yazmaksa çok sonra geldi.",
    "Okumayı bilmezken okuduğum ilk kitap, babamın Shorter Oxford English Dictionary'siydi. Beni okuma koltuğuna oturtur, neredeyse benim kadar ağır sözlüğü kucağıma bırakır ve istediğim sayfayı açmama izin verirdi. Cılız bacaklarım sözlüğün altında ezilirdi ama bundan asla şikayet etmezdim.",
    "“Bu, sözcüklerle ilgili bir kitap,” derdi babam. “Sözcüklerin ne anlama geldiğini anlatıyor.”",
    "Bu fikre bayılmıştım. Sözcükleri anlatan bir kitap… Vay be. Dünyada bu kadar çok sözcük olması harika bir şeydi. Ben de büyüyünce sözcükleri açıklayan bir kitap yazacaktım. İlk kelimesi çikoçiki. Çikoçiki hiç bitmeyen çikolata demek. Nasıl yapıldığına dair uzun gizli bir tarifim bile vardı. Çocuklar artık asla çikolatasız kalmayacaktı.",
    "Sonra okula başladım. Okul berbat bir yer, sözcüklerle ilgili kitap yazacağınızı, bitmeyen çikolata tarifinizi unutturan türden bir yer.",
    "Okulda öğrendiklerimi unutmam, bir kitap yazmak istediğimi hatırlamam kırk beş yılımı aldı. Kafam epey karışmıştı. Bale yapmayı denedim, piyano çalmayı. İşte müdür olmayı. Çok para kazanmayı. Onlar da eğlenceliydi ama sözcükleri anlatmam gerektiği aklıma gelince kendime bir sürü kalem aldım ve bir sürü defter. Babamın okuma koltuğuna benzer bir de koltuk. Şimdilerde öyküler yazıyorum. Yazmak tıpkı o sözlüğü kucağıma aldığım anlarda hayal ettiğim kadar güzel. Ve bunca yıl sonra, üçüncü kitabımı hazırlarken bile, yazdıklarını yayımlatmaya çalışmak hiç bitmeyen bir çikolata olmayacağını kabul etmek kadar zor.",
  ],
  en: [
    "I started making things up before I started reading. Writing came much later.",
    "The first book I “read” before I could read was my father's Shorter Oxford English Dictionary. He'd sit me in the reading chair, lower the dictionary — almost as heavy as I was — into my lap, and let me open it to whatever page I liked. My skinny legs would go numb under its weight, but I never once complained.",
    "“This is a book about words,” my father would say. “It tells you what words mean.”",
    "I loved this idea. A book that explains words… Wow. It seemed wonderful that the world held so many words. When I grew up, I decided, I would write a book that explained words too. Its first word would be çikoçiki. Çikoçiki means chocolate that never runs out. I even had a long, secret recipe for how to make it. Children would never again be left without chocolate.",
    "Then I started school. School is a terrible place — the kind of place that makes you forget you were going to write a book about words, forget your recipe for never-ending chocolate.",
    "It took me forty-five years to unlearn what school taught me, and to remember that I wanted to write a book. I was thoroughly confused in the meantime. I tried ballet, then piano. Becoming a manager. Making a lot of money. Those were fun too, but once it occurred to me again that I needed to explain words, I bought myself a great many pens and a great many notebooks — and a chair, not unlike my father's reading chair. These days, I write stories. Writing is exactly as beautiful as I imagined it would be, back when that dictionary sat in my lap. And even now, all these years later, preparing my third book, accepting that trying to get your writing published will never be an endless bar of chocolate is still just as hard.",
  ],
};

// A short pull-quote drawn from the bio, used on the hero.
export const heroQuote: Localized<string> = {
  tr: "Şimdilerde öyküler yazıyorum.",
  en: "These days, I write stories.",
};

// The "living" status line — from the bio's closing lines. Update as life moves.
export const currentStatus: Localized<string> = {
  tr: "Şu sıralar üçüncü kitabını hazırlıyor",
  en: "Currently preparing her third book",
};

// The dictionary-tooltip entry for her invented word "çikoçiki".
export const dictionaryEntry: Localized<{ label: string; entry: string }> = {
  tr: {
    label: "isim, çocukluk icadı",
    entry: "Hiç bitmeyen çikolata. Yapımına dair uzun ve gizli bir tarifi vardır.",
  },
  en: {
    label: "noun, childhood invention",
    entry: "Chocolate that never runs out. Has a long, secret recipe for how it's made.",
  },
};

// Caption under the dictionary-spine illustration.
export const dictionaryCaption: Localized<string> = {
  tr: "Okumayı bilmeden okuduğu ilk kitap.",
  en: "The first book she read before she could read.",
};
