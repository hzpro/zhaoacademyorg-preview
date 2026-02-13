import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "硅谷赵老师 | ZhaoAcademy - 专业留学咨询",
    template: "%s | 硅谷赵老师 ZhaoAcademy",
  },
  description:
    "硅谷赵老师提供专业的美国留学咨询服务，帮助学生实现名校梦想。资深顾问团队，100%录取成功率。",
  keywords: ["留学咨询", "美国留学", "名校申请", "硅谷赵老师", "ZhaoAcademy"],
  metadataBase: new URL("https://zhaoacademy.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${notoSansSC.variable} ${notoSerifSC.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
