"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt={`${siteConfig.name} Logo`}
                width={40}
                height={40}
                className="rounded-md sm:h-10 sm:w-10"
              />
              <span
                className={`font-serif text-xl font-bold transition-colors sm:text-2xl ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                {siteConfig.name}
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    scrolled ? "text-text" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden ${scrolled ? "text-primary" : "text-white"}`}
              aria-label="打开菜单"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
