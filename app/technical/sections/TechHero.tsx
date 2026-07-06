"use client";

import { motion } from "framer-motion";

export function TechHero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-20 md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative">
            <img
              src="/headshot.png"
              alt="Cason Lamothe"
              className="relative z-10 max-h-[55vh] w-auto rounded-2xl object-contain md:max-h-[65vh]"
            />
            <div className="absolute -inset-4 -z-0 rounded-3xl bg-terracotta-500/10 blur-2xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center lg:text-left"
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
            Technical profile
          </p>
          <h1 className="mb-8 text-5xl font-semibold leading-[1.05] tracking-tight text-cream-100 md:text-6xl lg:text-7xl">
            I build AI systems that reason, speak, and ship.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-cream-300 md:text-xl lg:mx-0">
            Fast live interaction. Background reasoning. Multi-model orchestration. Tight feedback loops.
            I design products where the model choices, state management, and voice pipelines are first-class decisions — not afterthoughts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
