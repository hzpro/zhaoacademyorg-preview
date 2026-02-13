"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  FileText,
  Users,
  Award,
  Globe,
  BookOpen,
} from "lucide-react";
import { servicesContent } from "@/content/home";
import { Container } from "@/components/ui/container";

const iconMap = {
  GraduationCap,
  FileText,
  Users,
  Award,
  Globe,
  BookOpen,
} as const;

export function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-bold text-primary sm:text-4xl">
            {servicesContent.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            {servicesContent.subtitle}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesContent.services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-bg-white p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-text">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
