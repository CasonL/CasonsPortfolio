"use client";

import { motion } from "framer-motion";

const stack = [
  {
    category: "Core languages",
    items: [
      { name: "Python", used: "Backend services, orchestration, training logic" },
      { name: "TypeScript / JavaScript", used: "Next.js frontend, Netlify Functions, React UI" },
    ],
  },
  {
    category: "Backend & frameworks",
    items: [
      { name: "Flask", used: "PitchIQ main API on Render" },
      { name: "Next.js 16 (App Router)", used: "Resume Builder frontend and API routes" },
      { name: "React 19", used: "Component UI for both products" },
      { name: "SQLAlchemy + Flask-Migrate", used: "ORM and migrations for PitchIQ" },
    ],
  },
  {
    category: "Data & auth",
    items: [
      { name: "PostgreSQL", used: "Production database for PitchIQ" },
      { name: "SQLite", used: "Local dev and in-memory testing for PitchIQ" },
      { name: "Supabase", used: "Auth, Postgres, and user data for Resume Builder" },
      { name: "crypto-js", used: "Encrypts stored resume data" },
    ],
  },
  {
    category: "AI / LLMs",
    items: [
      { name: "OpenAI GPT-4o", used: "Persona generation, resume writing, chat, vision trimming" },
      { name: "Anthropic Claude", used: "Alternative LLM in PitchIQ; resume chat assistant" },
    ],
  },
  {
    category: "Voice pipeline",
    items: [
      { name: "Deepgram", used: "STT and voice agent for PitchIQ" },
      { name: "Cartesia", used: "TTS for PitchIQ buyer/coach voices" },
    ],
  },
  {
    category: "Deployment & infra",
    items: [
      { name: "Render", used: "PitchIQ Flask app hosting" },
      { name: "Netlify", used: "Portfolio site and serverless key proxies" },
      { name: "Vercel", used: "Resume Builder deployment" },
    ],
  },
  {
    category: "Payments & parsing",
    items: [
      { name: "Stripe", used: "Resume Builder credits and billing" },
      { name: "pdfjs-dist, unpdf, mammoth", used: "PDF and DOCX parsing" },
      { name: "html2canvas + @napi-rs/canvas", used: "Resume preview generation" },
    ],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="relative z-10 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
            Stack
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-cream-100 md:text-5xl">
            Only what is actually running.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="grid gap-6 md:grid-cols-2"
        >
          {stack.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border/40 bg-forest-900/60 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-amber-400">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="flex flex-col gap-1">
                    <span className="font-medium text-cream-100">{item.name}</span>
                    <span className="text-sm text-sage-500">{item.used}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
