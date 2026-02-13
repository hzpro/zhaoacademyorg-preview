"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutPreviewContent } from "@/content/home";
import { Container } from "@/components/ui/container";

export function AboutPreview() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8 md:flex-row"
          >
            {/* Founder photo */}
            <div className="h-48 w-48 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/teacher-zhao.webp"
                alt={aboutPreviewContent.name}
                width={192}
                height={192}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-primary">
                {aboutPreviewContent.title}
              </h2>
              <p className="mt-2 text-lg font-semibold text-gold">
                {aboutPreviewContent.name}
              </p>
              <p className="mt-4 leading-relaxed text-text-light">
                {aboutPreviewContent.description}
              </p>
              <Link
                href={aboutPreviewContent.link}
                className="mt-4 inline-block font-semibold text-accent transition-colors hover:text-accent-light"
              >
                {aboutPreviewContent.linkText}
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
