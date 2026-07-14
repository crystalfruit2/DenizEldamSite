// CV content — mirrors Deniz_Eldam_CV_Harvard.docx (the Harvard-format CV),
// restructured as data so the /cv page can render it in the site's own
// literary style rather than as an embedded document. Dates are language-
// neutral (numerals), so only the English/Turkish prose needs a pair.
//
// The English text below is the CV as drafted; the Turkish text is a draft
// translation — worth a read-through from Deniz before this goes out, same
// as the bio.

import type { Localized } from "./language-context";

export type CvEntry = {
  title: Localized<string>;
  date?: string;
  body?: Localized<string>;
  bullets?: Localized<string[]>;
};

export const cvHeader = {
  name: "Deniz Eldam",
  tagline: { en: "Fiction Writer — Turkey", tr: "Öykü Yazarı — Türkiye" } satisfies Localized<string>,
  email: "denizsaatkayaeldam@hotmail.com",
  site: "denizeldam.com",
};

export const cvProfile: Localized<string> = {
  en: "Turkish fiction writer and author of two short story collections published by Notos Kitap. Her fiction explores the hidden lives of families, the relationship between humans and the natural world, and the quiet ways in which guilt, memory, and folklore shape ordinary lives. She is currently working on her first novel, The Things We See.",
  tr: "Notos Kitap tarafından yayımlanan iki öykü kitabının yazarı. Kurmacası; ailelerin gizli yaşamlarını, insan ile doğa arasındaki ilişkiyi ve suçluluğun, hafızanın ve folklorun sıradan hayatları nasıl sessizce şekillendirdiğini konu alıyor. Şu sıralar ilk romanı The Things We See üzerinde çalışıyor.",
};

export const cvBooks: CvEntry[] = [
  {
    title: {
      en: "Gözlerin Karanlığa Alışınca — Short story collection, Notos Kitap",
      tr: "Gözlerin Karanlığa Alışınca — Öykü kitabı, Notos Kitap",
    },
    date: "2025",
  },
  {
    title: {
      en: "Bunu Kimseye Anlatma — Short story collection, Notos Kitap",
      tr: "Bunu Kimseye Anlatma — Öykü kitabı, Notos Kitap",
    },
    date: "2022",
  },
];

export const cvAwards: CvEntry[] = [
  {
    title: {
      en: "AltKitap Short Story Award — for “Musa'nın Eli”",
      tr: "AltKitap Öykü Ödülü — “Musa'nın Eli” öyküsüyle",
    },
    date: "2021",
  },
];

export const cvSelectedPublications: Localized<string> = {
  en: "Short fiction published in Notos, Sözcükler, Öykü Gazetesi, Trendeki Yabancı, and Oggito.",
  tr: "Notos, Sözcükler, Öykü Gazetesi, Trendeki Yabancı ve Oggito'da yayımlanan öyküler.",
};

export const cvLiteraryExperience: CvEntry[] = [
  {
    title: {
      en: "Creative Writing Workshop with Semih Gümüş",
      tr: "Semih Gümüş ile Yaratıcı Yazarlık Atölyesi",
    },
    date: "2019 – Present",
    body: {
      en: "Ongoing participant in an intensive literary fiction workshop.",
      tr: "Yoğun bir edebi kurmaca atölyesinin sürekli katılımcısı.",
    },
  },
  {
    title: {
      en: "René Yazıevi",
      tr: "René Yazıevi",
    },
    bullets: {
      en: [
        "Interviewed contemporary Turkish authors.",
        "Published literary reviews.",
        "Facilitated a six-week creative writing workshop.",
      ],
      tr: [
        "Çağdaş Türk yazarlarla söyleşiler gerçekleştirdi.",
        "Edebiyat eleştirileri yayımladı.",
        "Altı haftalık bir yaratıcı yazarlık atölyesi yürüttü.",
      ],
    },
  },
];

export const cvCurrentProjects: CvEntry[] = [
  {
    title: {
      en: "The Things We See — Literary novel in progress.",
      tr: "The Things We See — Yazım aşamasında bir roman.",
    },
  },
  {
    title: {
      en: "Alp Para Biriktiriyor — Children's book (forthcoming).",
      tr: "Alp Para Biriktiriyor — Çocuk kitabı (yakında).",
    },
  },
];

export const cvEducation: CvEntry[] = [
  {
    title: {
      en: "Yıldız Technical University",
      tr: "Yıldız Teknik Üniversitesi",
    },
    body: {
      en: "B.Sc. in Chemistry",
      tr: "Kimya Lisans",
    },
  },
];

export const cvLanguages: Localized<string> = {
  en: "Turkish (Native)  •  English (Working proficiency)",
  tr: "Türkçe (Ana dil)  •  İngilizce (Çalışma düzeyinde)",
};

export const cvReferences: Localized<string> = {
  en: "Available upon request.",
  tr: "Talep üzerine sağlanabilir.",
};

export const cvSectionHeadings = {
  profile: { en: "Profile", tr: "Profil" } satisfies Localized<string>,
  books: { en: "Books", tr: "Kitaplar" } satisfies Localized<string>,
  awards: { en: "Awards", tr: "Ödüller" } satisfies Localized<string>,
  selectedPublications: { en: "Selected Publications", tr: "Seçili Yayınlar" } satisfies Localized<string>,
  literaryExperience: { en: "Literary Experience", tr: "Edebiyat Deneyimi" } satisfies Localized<string>,
  currentProjects: { en: "Current Projects", tr: "Devam Eden Projeler" } satisfies Localized<string>,
  education: { en: "Education", tr: "Eğitim" } satisfies Localized<string>,
  languages: { en: "Languages", tr: "Diller" } satisfies Localized<string>,
  references: { en: "References", tr: "Referanslar" } satisfies Localized<string>,
};
