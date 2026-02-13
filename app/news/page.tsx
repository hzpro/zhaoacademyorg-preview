import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "教育资讯",
  description: "硅谷赵老师教育资讯，了解最新留学动态、名校录取趋势和申请攻略。",
};

export default function NewsPage() {
  return (
    <>
      <section className="bg-primary-dark pt-32 pb-16">
        <Container>
          <h1 className="text-center font-serif text-3xl font-bold text-white sm:text-4xl">
            教育资讯
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-white/70">
            最新留学动态与申请攻略
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-md text-center">
            <Newspaper className="mx-auto h-16 w-16 text-text-lighter" />
            <h2 className="mt-6 font-serif text-2xl font-bold text-text">
              即将上线
            </h2>
            <p className="mt-4 text-text-light">
              我们正在精心准备教育资讯栏目，将为您带来最新的留学动态、名校录取趋势分析和实用申请攻略。敬请期待！
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
