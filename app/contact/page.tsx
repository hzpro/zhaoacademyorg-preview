import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "联系硅谷赵老师，获取专业留学咨询服务。通过邮件或微信与我们取得联系。",
};

const contactCards = [
  {
    icon: Mail,
    title: "电子邮件",
    description: "发送邮件给我们，我们将在24小时内回复。",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    actionText: "发送邮件",
  },
  {
    icon: MessageCircle,
    title: "微信",
    description: "添加我们的微信，获取一对一咨询服务。",
    value: siteConfig.social.wechat,
    actionText: "微信号",
  },
  {
    icon: MapPin,
    title: "地址",
    description: "欢迎预约线下咨询。",
    value: siteConfig.address,
    actionText: "查看地址",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary-dark pt-32 pb-16">
        <Container>
          <h1 className="text-center font-serif text-3xl font-bold text-white sm:text-4xl">
            联系我们
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-white/70">
            期待与您沟通，开启留学之旅
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-border bg-white p-6 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-text">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-text-light">
                  {card.description}
                </p>
                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-4 inline-block font-semibold text-accent transition-colors hover:text-accent-light"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-4 font-semibold text-primary">
                    {card.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-2xl rounded-2xl bg-primary/5 p-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-primary">
              预约免费咨询
            </h2>
            <p className="mt-4 text-text-light">
              无论您是刚开始考虑留学，还是已经在准备申请材料，我们都欢迎您与我们联系。发送邮件至{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-accent hover:text-accent-light"
              >
                {siteConfig.email}
              </a>
              ，我们将尽快与您取得联系。
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
