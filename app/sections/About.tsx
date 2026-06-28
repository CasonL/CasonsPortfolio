"use client";

import { motion } from "framer-motion";

const highlights = [
  "Founder of PitchIQ: built a multi-agent AI sales trainer from zero to launch",
  "Ran a College Pro window cleaning franchise solo, hitting $42K in revenue at 23",
  "Grew MacEwan Speechleaders from 20 to 90+ members in two weeks as president",
  "Secured $2,000 in sponsorship from a single cold outreach",
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
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
              About
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-cream-100 md:text-5xl">
              Builder. Operator. The guy who actually ships.
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
              I didn't start as a developer. I started by running a window
              cleaning franchise at 23, knocking ~100 doors a day and figuring
              out what makes people say yes. That experience taught me more
              about products than any course did: if it doesn't create real
              value for a real person, it doesn't matter how elegant the code is.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-cream-300">
              Now I build AI products that compress what used to take a team
              into something one person can run. While building PitchIQ I ran
              60+ customer discovery interviews in parallel, letting real user
              feedback reshape the product as it was being built. I study the
              problem until the solution feels obvious, then I move fast.
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
