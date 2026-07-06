"use client";

import { motion } from "framer-motion";

export function TechBuilt() {
  return (
    <section className="relative z-10 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
              Ownership
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-cream-100 md:text-5xl">
              What I actually built.
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
              I used AI-assisted development heavily, but I owned the system architecture, product logic,
              debugging, implementation decisions, and shipping. I did not hand this off to a model and hope.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-cream-300">
              For PitchIQ specifically: I designed and built the core product flow, AI orchestration logic,
              prompt/state system, feedback structure, voice pipeline integration, and deployment workflow.
            </p>
            <ul className="space-y-4">
              {[
                "Voice-to-voice orchestration and state management",
                "Multi-model routing and cost control",
                "Persona generation, scenario design, and coaching feedback",
                "Database schema, migrations, and auth flow",
                "Deployment, CI/CD, and production debugging",
              ].map((item) => (
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
