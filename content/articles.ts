export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  coverImage: string;
  substackUrl?: string;
}

export const articles: Article[] = [
  {
    slug: "why-effort",
    title: `为什么我很少建议家庭"再努力一点"`,
    subtitle: `AI 时代，顶尖大学到底在"选什么"`,
    excerpt: `当一个近乎完美的履历换来意外的拒绝，真正值得追问的不是"哪里出了问题"，而是：我们熟悉的那套努力模型，正在被时代悄悄改写。`,
    date: "2026-02-20",
    coverImage: "/articles/why-effort/image1.jpg",
    substackUrl:
      "https://zhaoacademy.substack.com/p/why-effort-alone-is-not-enough",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
