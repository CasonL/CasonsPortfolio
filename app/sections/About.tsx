"use client";

import { motion } from "framer-motion";

const highlights = [
  "Product designer with systems-level AI architecture skills",
  "Led teams as franchisee, club president, and project owner",
  "Management degree with entrepreneurship minor",
  "Builder of multi-agent LLM products that feel human",
  "Obsessive about feedback loops, product impact, and people",
];

export function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
              About
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-cream-100 md:text-5xl">
              A brain built for problems, people, and product.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="mb-6 text-lg leading-relaxed text-cream-300">
              I'm deeply introspective, always thinking about how my work
              lands, how it affects people, and how to make it better. That
              loop is my superpower. It makes me a strong designer, a thoughtful
              architect, and a leader who actually listens.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-cream-300">
              When I lock in, I'm unstoppable. I take the intensity of deep
              focus and aim it at building things that matter.
            </p>

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta-500" />
                  <span className="text-cream-200">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
