"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function TechProjects() {
  return (
    <section id="projects" className="relative z-10 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
            Projects
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-cream-100 md:text-5xl">
            Live systems, not slide decks.
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
              >
                <Link
                  href={`/technical/projects/${project.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/40 bg-forest-900/80 p-6 backdrop-blur-sm transition-all hover:border-terracotta-500/40 md:p-8"
                >
                  {project.image && (
                    <>
                      <div
                        className="absolute -inset-6 bg-cover bg-center blur-xs opacity-70 transition-transform duration-700 ease-out group-hover:scale-110"
                        style={{ backgroundImage: `url('${project.image}')` }}
                      />
                      <div className="absolute inset-0 bg-forest-900/92 transition-colors duration-500 group-hover:bg-forest-900/88" />
                    </>
                  )}
                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta-500/10 text-terracotta-500">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="relative z-10 mb-3 text-2xl font-semibold text-cream-100 md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="relative z-10 text-lg font-medium text-amber-400">
                    {project.tagline}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
