const retroHardware = {
  "en-US": [
    {
      id: 1,
      title: "Commodore 64",
      priceInCents: 14999,
      imageUrl: "commodore-64.jpg",
      publishedAt: "2024-06-01T10:00:00Z",
      condition: "likeNew",
      description:
        "Classic Commodore 64 in working condition. Comes with original power supply and a few game cartridges. Perfect for retro computing enthusiasts.",
    },
    {
      id: 2,
      title: "Virtual Boy",
      priceInCents: 22900,
      imageUrl: "virtual-boy.jpg",
      condition: "veryGood",
      publishedAt: "2024-06-05T12:00:00Z",
      description:
        "Nintendo Virtual Boy in excellent condition. Includes original box and a couple of games. A rare find for collectors!",
    },
    {
      id: 3,
      title: "Sony Walkman",
      priceInCents: 19900,
      imageUrl: "walkman.jpg",
      condition: "acceptable",
      publishedAt: "2024-06-10T14:30:00Z",
      description:
        "Original Sony Walkman, headphones included, good condition. Perfect for reliving the 80s and enjoying cassette tapes on the go.",
    },
  ],
  "ar-EG": [
    {
      id: 1,
      title: "كومودور 64",
      priceInCents: 14999,
      imageUrl: "commodore-64.jpg",
      publishedAt: "2024-06-01T10:00:00Z",
      condition: "likeNew",
      description:
        "كومودور 64 الكلاسيكي في حالة عمل جيدة. يأتي مع مصدر الطاقة الأصلي وعدد قليل من خراطيش الألعاب. مثالي لعشاق الحوسبة الرجعية.",
    },
    {
      id: 2,
      title: "فيرتشوال بوي",
      priceInCents: 22900,
      imageUrl: "virtual-boy.jpg",
      publishedAt: "2024-06-05T12:00:00Z",
      condition: "veryGood",
      description:
        "نينتندو فيرتشوال بوي في حالة ممتازة. يشمل الصندوق الأصلي وبضعة ألعاب. اكتشاف نادر للمجمعين!",
    },
    {
      id: 3,
      title: "سوني ووكمان",
      priceInCents: 19900,
      imageUrl: "walkman.jpg",
      publishedAt: "2024-06-10T14:30:00Z",
      condition: "acceptable",
      description:
        "سوني ووكمان الأصلي، يشمل سماعات الرأس، في حالة جيدة. مثالي لاستعادة أجواء الثمانينات والاستمتاع بأشرطة الكاسيت أثناء التنقل.",
    },
  ],
} as const;

export default retroHardware;

export type Product = {
  id: number;
  title: string;
  priceInCents: number;
  imageUrl: string;
  publishedAt: string;
  condition: "likeNew" | "veryGood" | "good" | "acceptable";
  description: string;
};
