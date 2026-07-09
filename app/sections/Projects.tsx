"use client";

import { motion } from "framer-motion";
import { Mic2, FileText } from "lucide-react";

const projects = [
  {
    title: "Plimsoll",
    tagline: "See exactly where your reps lose deals. Live AI buyer calls, then a precise diagnosis of every missed moment.",
    description:
      "Built a multi-agent system where specialized LLMs handle scenario generation, persona simulation, real-time coaching feedback, and progress tracking. The roleplay is just the vehicle; the value is the diagnosis, delivered at a fraction of the cost of human coaching.",
    link: "https://plimsoll.ai",
    icon: Mic2,
    image: "/plimsoll-screenshot.png",
    stats: [
      { label: "Focus", value: "Sales diagnosis via AI roleplay" },
      { label: "Architecture", value: "Multi-agent LLM orchestration" },
      { label: "Outcome", value: "Scalable, human-like training" },
    ],
  },
  {
    title: "AI Resume Builder",
    tagline: "Tailored resumes for any job description in under a minute.",
    description:
      "An AI-native workflow that parses a job description, extracts what actually matters, and rewrites a resume to match. Not by stuffing keywords, but by telling a coherent story. Designed for speed, precision, and human confidence.",
    link: "https://resume-builder-six-kohl.vercel.app/",
    icon: FileText,
    image: "/resume-screenshot.png",
    stats: [
      { label: "Focus", value: "AI-powered job matching" },
      { label: "Architecture", value: "Document generation + LLM reasoning" },
      { label: "Outcome", value: "Minute-level turnaround" },
    ],
  },
];

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

export function Projects() {
  return (
    <section id="work" className="relative z-10 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
            Selected work
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-cream-100 md:text-5xl">
            Products built at the intersection of design and systems.
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
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
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
                <p className="relative z-10 mb-4 text-lg font-medium text-amber-400">
                  {project.tagline}
                </p>
                <p className="relative z-10 mb-8 leading-relaxed text-cream-300">
                  {project.description}
                </p>

                <div className="relative z-10 mb-8 grid grid-cols-1 gap-4 border-y border-border/60 py-6 sm:grid-cols-3">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="mb-1 text-xs uppercase tracking-wider text-sage-500">
                        {stat.label}
                      </p>
                      <p className="text-sm font-medium text-cream-100">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
