"use client";

import { motion } from "framer-motion";
import { contactCtaContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function ContactCta() {
  return (
    <section className="bg-primary py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            {contactCtaContent.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            {contactCtaContent.description}
          </p>
          <div className="mt-8">
            <Button href={contactCtaContent.ctaLink} variant="primary">
              {contactCtaContent.ctaText}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
