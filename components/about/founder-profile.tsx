"use client";

import { motion } from "framer-motion";
import { User, CheckCircle } from "lucide-react";
import { founderContent } from "@/content/about";
import { Container } from "@/components/ui/container";

export function FounderProfile() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-10 md:flex-row md:items-start"
          >
            {/* Avatar placeholder */}
            <div className="flex h-56 w-56 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <User className="h-28 w-28 text-primary/40" />
            </div>

            <div>
              <h1 className="font-serif text-3xl font-bold text-primary sm:text-4xl">
                {founderContent.title}
              </h1>
              <p className="mt-2 text-xl font-semibold text-gold">
                {founderContent.name}
              </p>
              <p className="text-text-light">{founderContent.role}</p>

              <div className="mt-6 space-y-4">
                {founderContent.bio.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-text-light">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Credentials */}
              <div className="mt-8">
                <h3 className="font-semibold text-text">资质与成就</h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {founderContent.credentials.map((cred) => (
                    <li key={cred} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span className="text-text-light">{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
