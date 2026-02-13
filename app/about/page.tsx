import type { Metadata } from "next";
import { FounderProfile } from "@/components/about/founder-profile";
import { ExpertiseGrid } from "@/components/about/expertise-grid";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "了解硅谷赵老师创始人及团队，超过十年美国留学咨询经验，帮助250+学生成功入读理想学府。",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary-dark pt-32 pb-16">
        <Container>
          <h1 className="text-center font-serif text-3xl font-bold text-white sm:text-4xl">
            关于我们
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-white/70">
            专业团队，用心服务每一位学生
          </p>
        </Container>
      </section>

      <FounderProfile />
      <ExpertiseGrid />
    </>
  );
}
