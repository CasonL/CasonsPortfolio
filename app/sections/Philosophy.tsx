"use client";

import { motion } from "framer-motion";
import { Brain, Layers, Users, Zap } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Deep thinking is the product.",
    hook: "I let users reshape the product in real time.",
    body: "60+ customer discovery interviews run alongside development. Each one sharpened what to cut, which models to use, and where the feedback loops needed to live.",
    stat: { value: "60+", label: "discovery interviews" },
    image: "/DeepThinking.png",
  },
  {
    icon: Layers,
    title: "Affordable models, multiplied.",
    hook: "The right model for each job.",
    body: "PitchIQ orchestrates specialized models for scenario generation, persona simulation, and real-time coaching, all in parallel. No single expensive model. The roleplay is just the input; the output is a precise diagnosis of where a rep needs to improve.",
    stat: { value: "¢10", label: "per coached call" },
    image: "/AffordableCard.png",
  },
  {
    icon: Users,
    title: "Leadership through empathy.",
    hook: "People perform when they feel seen.",
    body: "I grew MacEwan Speechleaders from 20 to 90+ members in two weeks by designing something worth returning to. Same principle ran my franchise: knowing whose energy goes where.",
    stat: { value: "450%", label: "membership growth" },
    image: "/LeadershipCard.png",
  },
  {
    icon: Zap,
    title: "Hyperfocus as leverage.",
    hook: "When I lock in, timelines compress.",
    body: "Ran a $42K franchise solo in 4 months, then built PitchIQ from zero to launch while running a club and finishing a degree. One cold email landed $2K in sponsorship. One pattern across interviews rewrote the onboarding.",
    stat: { value: "$42K", label: "franchise revenue, solo" },
    image: "/FocusCard.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Philosophy() {
  return (
    <section id="philosophy" className="relative z-10 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
              Philosophy
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-cream-100 md:text-5xl">
              My real education has been building.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-cream-300">
              Management degree, entrepreneurship minor. But what actually taught
              me how products work was doing it. I obsess over the pieces fitting:
              technical, human, strategic. I ship until it earns its place.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {principles.map((principle) => {
            const Icon = principle.icon;
            const hasImage = !!principle.image;
            return (
              <motion.div
                key={principle.title}
                variants={itemVariants}
                className={`relative overflow-hidden rounded-2xl border border-border p-8 transition-colors hover:border-terracotta-500/20 ${
                  hasImage
                    ? "bg-cover bg-center"
                    : "bg-forest-800/40 hover:bg-forest-800/60"
                }`}
                style={hasImage ? { backgroundImage: `url('${principle.image}')` } : undefined}
              >
                {hasImage && (
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/70 to-forest-900/50" />
                )}
                <div className="relative z-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-700 text-amber-400">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-1 text-xl font-semibold text-cream-100">
                    {principle.title}
                  </h3>
                  <p className="mb-4 text-base font-medium text-amber-400">
                    {principle.hook}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-cream-300">
                    {principle.body}
                  </p>
                  {principle.stat && (
                    <div className="inline-flex flex-col border-l-2 border-terracotta-500/60 pl-3">
                      <span className="text-2xl font-semibold text-cream-100">{principle.stat.value}</span>
                      <span className="text-xs text-sage-500">{principle.stat.label}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
