"use client";

import { motion } from "framer-motion";
import { statsContent } from "@/content/home";
import { Container } from "@/components/ui/container";

export function StatsBar() {
  return (
    <section className="relative -mt-12 z-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-xl sm:p-8 md:grid-cols-4"
        >
          {statsContent.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-text-light">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
