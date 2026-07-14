// Video appearances — interviews, podcast episodes, workshops on YouTube.
// Titles and channel names are kept verbatim (they're the actual published
// titles, mostly Turkish — same principle as book titles: don't translate
// what was never written in English). Add new appearances here; the page
// and homepage teaser both read from this one array.

export type MediaItem = {
  id: string; // YouTube video ID
  title: string;
  channel: string;
  url: string;
  thumbnail: string;
  kind: "video" | "playlist";
};

export const media: MediaItem[] = [
  {
    id: "anKI0xgyrbs",
    title: "Deniz Eldam ile Gözlerin Karanlığa Alışınca",
    channel: "René Yazı Evi",
    url: "https://youtu.be/anKI0xgyrbs",
    thumbnail: "https://i.ytimg.com/vi/anKI0xgyrbs/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "JhPnhZtDh4c",
    title: "Deniz Eldam, Bunu Kimseye Anlatma — 13 Kasım 2022",
    channel: "Zorba Kültür",
    url: "https://youtu.be/JhPnhZtDh4c",
    thumbnail: "https://i.ytimg.com/vi/JhPnhZtDh4c/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "j7ZmF62VFnA",
    title: "Kitap Söyleşileri — Deniz Eldam — Bunu Kimseye Anlatma",
    channel: "Gokce Haner",
    url: "https://youtu.be/j7ZmF62VFnA",
    thumbnail: "https://i.ytimg.com/vi/j7ZmF62VFnA/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "XxGIt8uFQI4",
    title: "BAYKUŞUN GÜNCESİ — Bunu Kimseye Anlatma ile Deniz Eldam",
    channel: "Radyo Gedik",
    url: "https://youtu.be/XxGIt8uFQI4",
    thumbnail: "https://i.ytimg.com/vi/XxGIt8uFQI4/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "DL0MES_5pFg",
    title:
      "Sonrası Kalır — Deniz Saatkaya Eldam ile Sonrası Öykü: Bon Jovi Posteri Sende Kalsın (Bunu Kimseye Anlatma)",
    channel: "Basak Canda",
    url: "https://youtu.be/DL0MES_5pFg",
    thumbnail: "https://i.ytimg.com/vi/DL0MES_5pFg/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "mQboAHvKfRk",
    title: "Bunu Kimseye Anlatma I Deniz Eldam (Yazar)",
    channel: "KALİBRE EDEBİYAT",
    url: "https://youtu.be/mQboAHvKfRk",
    thumbnail: "https://i.ytimg.com/vi/mQboAHvKfRk/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "gRmovJKWvtY",
    title: "Bunu Kimseye Anlatma | Deniz Eldam",
    channel: "Mikroscope",
    url: "https://youtu.be/gRmovJKWvtY",
    thumbnail: "https://i.ytimg.com/vi/gRmovJKWvtY/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "osLSHXVTKhA",
    title: "Raymond Carver 1. Bölüm / Deniz Eldam",
    channel: "Holon Akademi",
    url: "https://youtu.be/osLSHXVTKhA",
    thumbnail: "https://i.ytimg.com/vi/osLSHXVTKhA/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "YjaP5xU4toM",
    title: "Bunu Kimseye Anlatma | Deniz Eldam",
    channel: "Medyascope TV",
    url: "https://youtu.be/YjaP5xU4toM",
    thumbnail: "https://i.ytimg.com/vi/YjaP5xU4toM/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "D3mXPLTWCd0",
    title: "Jale Sancak Söyleşisi / Deniz Eldam - Başak Arslan",
    channel: "Holon Akademi",
    url: "https://youtu.be/D3mXPLTWCd0",
    thumbnail: "https://i.ytimg.com/vi/D3mXPLTWCd0/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "TOZ-p154tN4",
    title: "Raymond Carver 3. Bölüm / Deniz Eldam - Doğuş Benli",
    channel: "Holon Akademi",
    url: "https://youtu.be/TOZ-p154tN4",
    thumbnail: "https://i.ytimg.com/vi/TOZ-p154tN4/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "4g_NscmE4ug",
    title: "Raymond Carver 2. Bölüm / Deniz Eldam",
    channel: "Holon Akademi",
    url: "https://youtu.be/4g_NscmE4ug",
    thumbnail: "https://i.ytimg.com/vi/4g_NscmE4ug/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "hFu2sZhodNM",
    title: "Oylum Yılmaz ve Hülya Balcı ile Doğa Yürüyüşleri",
    channel: "René Yazı Evi",
    url: "https://youtu.be/hFu2sZhodNM",
    thumbnail: "https://i.ytimg.com/vi/hFu2sZhodNM/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "obyVRW7PTlc",
    title: "Everest Yayınları yazarı Abdullah Ataşçı ile Meryem'in Çiçekleri",
    channel: "René Yazı Evi",
    url: "https://youtu.be/obyVRW7PTlc",
    thumbnail: "https://i.ytimg.com/vi/obyVRW7PTlc/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "2sxNHziAmCU",
    title: "Can Yayınları çevirmeni Duygu Akın ile Mrs. Dalloway",
    channel: "René Yazı Evi",
    url: "https://youtu.be/2sxNHziAmCU",
    thumbnail: "https://i.ytimg.com/vi/2sxNHziAmCU/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "CYHPS1aFDkQ",
    title:
      "İthaki Yayınları yazarı Uğur Deveci ve editör Bilal Acarözmen ile ATEŞTEN GÖLGE — 24.01.2025",
    channel: "René Yazı Evi",
    url: "https://youtu.be/CYHPS1aFDkQ",
    thumbnail: "https://i.ytimg.com/vi/CYHPS1aFDkQ/hqdefault.jpg",
    kind: "video",
  },
  {
    id: "PLO8t63dNdTIrTEec082r1Ym1pGEAw_99p",
    title: "MİKROFON Söyleşileri — full playlist",
    channel: "René Yazı Evi",
    url: "https://youtube.com/playlist?list=PLO8t63dNdTIrTEec082r1Ym1pGEAw_99p",
    thumbnail: "https://i.ytimg.com/vi/rT6ADuYR3yg/hqdefault.jpg",
    kind: "playlist",
  },
];
