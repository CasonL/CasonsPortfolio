"use client";

import { motion } from "framer-motion";

const highlights = [
  "Built PitchIQ from zero to launch while running a franchise and finishing a degree",
  "Turned one cold email into $2K in sponsorship",
  "Found one onboarding pattern across 60+ interviews that rewrote the product",
  "Grew MacEwan Speechleaders from 20 to 90+ members in two weeks as president",
  "BCom in Management and Entrepreneurship, MacEwan University",
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
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
              About
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-cream-100 md:text-5xl">
              Hyperfocus as leverage.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col justify-center"
          >
            <p className="mb-6 text-lg leading-relaxed text-cream-300">
              When I lock in, timelines compress. At 23, I ran a window cleaning
              franchise solo for 4 months and hit $42K in revenue. Then I turned
              that same intensity toward building PitchIQ from scratch, while
              leading a club and finishing my degree. One cold email landed $2K
              in sponsorship. One pattern across 60+ interviews rewrote the
              onboarding.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-cream-300">
              I don't just move fast; I move fast in the right direction. The
              feedback loop is the product.
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
