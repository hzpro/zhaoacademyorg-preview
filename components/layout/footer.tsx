import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site";
import { navigation } from "@/content/navigation";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt={`${siteConfig.name} Logo`}
                width={36}
                height={36}
                className="rounded-md"
              />
              <h3 className="font-serif text-xl font-bold">{siteConfig.name}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              专业留学咨询服务，助力学生实现名校梦想。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold">快速链接</h4>
            <nav className="mt-4 flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold">联系方式</h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4" />
                {siteConfig.address}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          {siteConfig.copyright}
        </div>
      </Container>
    </footer>
  );
}
