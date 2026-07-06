"use client";

import { motion } from "framer-motion";

export function TechHero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-20 md:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
            Technical profile
          </p>
          <h1 className="mb-8 text-5xl font-semibold leading-[1.05] tracking-tight text-cream-100 md:text-7xl lg:text-8xl">
            I build AI systems that reason, speak, and ship.
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-cream-300 md:text-xl">
            Fast live interaction. Background reasoning. Multi-model orchestration. Tight feedback loops.
            I design products where the model choices, state management, and voice pipelines are first-class decisions — not afterthoughts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
