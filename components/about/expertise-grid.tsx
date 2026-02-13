"use client";

import { motion } from "framer-motion";
import {
  School,
  GraduationCap,
  ArrowRightLeft,
  Sun,
  BookOpen,
  Briefcase,
} from "lucide-react";
import { expertiseContent } from "@/content/about";
import { Container } from "@/components/ui/container";

const iconMap = {
  School,
  GraduationCap,
  ArrowRightLeft,
  Sun,
  BookOpen,
  Briefcase,
} as const;

export function ExpertiseGrid() {
  return (
    <section className="bg-white py-20">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-serif text-3xl font-bold text-primary sm:text-4xl"
        >
          {expertiseContent.title}
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseContent.areas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-gold/10 p-3 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-text">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-text-light">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
