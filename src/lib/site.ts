// Author info and biography — the "content layer".
// Keeping text here (not hard-coded in pages) means Deniz's words live in one
// place, and every page just reads from it. Preserve her voice verbatim.

export const author = {
  name: "Deniz Eldam",
  tagline: "Öykü yazarı",
  portrait: "/photos/deniz-portrait-4.jpeg",
  notosUrl: "https://notoskitap.com",
};

// Her "About Me" text, split into paragraphs so each renders with book-like spacing.
export const bio: string[] = [
  "Önce uydurmaya başladım, sonra okumaya. Yazmaksa çok sonra geldi.",
  "Okumayı bilmezken okuduğum ilk kitap, babamın Shorter Oxford English Dictionary'siydi. Beni okuma koltuğuna oturtur, neredeyse benim kadar ağır sözlüğü kucağıma bırakır ve istediğim sayfayı açmama izin verirdi. Cılız bacaklarım sözlüğün altında ezilirdi ama bundan asla şikayet etmezdim.",
  "“Bu, sözcüklerle ilgili bir kitap,” derdi babam. “Sözcüklerin ne anlama geldiğini anlatıyor.”",
  "Bu fikre bayılmıştım. Sözcükleri anlatan bir kitap… Vay be. Dünyada bu kadar çok sözcük olması harika bir şeydi. Ben de büyüyünce sözcükleri açıklayan bir kitap yazacaktım. İlk kelimesi çikoçiki. Çikoçiki hiç bitmeyen çikolata demek. Nasıl yapıldığına dair uzun gizli bir tarifim bile vardı. Çocuklar artık asla çikolatasız kalmayacaktı.",
  "Sonra okula başladım. Okul berbat bir yer, sözcüklerle ilgili kitap yazacağınızı, bitmeyen çikolata tarifinizi unutturan türden bir yer.",
  "Okulda öğrendiklerimi unutmam, bir kitap yazmak istediğimi hatırlamam kırk beş yılımı aldı. Kafam epey karışmıştı. Bale yapmayı denedim, piyano çalmayı. İşte müdür olmayı. Çok para kazanmayı. Onlar da eğlenceliydi ama sözcükleri anlatmam gerektiği aklıma gelince kendime bir sürü kalem aldım ve bir sürü defter. Babamın okuma koltuğuna benzer bir de koltuk. Şimdilerde öyküler yazıyorum. Yazmak tıpkı o sözlüğü kucağıma aldığım anlarda hayal ettiğim kadar güzel. Ve bunca yıl sonra, üçüncü kitabımı hazırlarken bile, yazdıklarını yayımlatmaya çalışmak hiç bitmeyen bir çikolata olmayacağını kabul etmek kadar zor.",
];

// A short pull-quote drawn from the bio, used on the hero.
export const heroQuote = "Şimdilerde öyküler yazıyorum.";
