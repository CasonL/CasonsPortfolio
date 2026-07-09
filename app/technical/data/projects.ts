import { Mic2, FileText } from "lucide-react";

export const projects = [
  {
    slug: "plimsoll",
    title: "Plimsoll",
    tagline: "See exactly where your reps lose deals. Live AI buyer calls, then a precise diagnosis of every missed moment.",
    description:
      "A multi-agent voice system where separate models handle the live buyer persona, the coach, scenario generation, and post-call feedback. The call generates the signal; the feedback engine turns that signal into a specific, actionable diagnosis. Built with Python/Flask, orchestrated on Render, and proxied through Netlify serverless functions.",
    link: "https://plimsoll.ai",
    icon: Mic2,
    image: "/plimsoll-screenshot.png",
    stats: [
      { label: "Stack", value: "Python, Flask, Postgres" },
      { label: "Voice", value: "Deepgram + Cartesia" },
      { label: "LLMs", value: "GPT-4o + Claude" },
      { label: "Cost", value: "~¢10 per coached call" },
    ],
  },
  {
    slug: "ai-resume-builder",
    title: "AI Resume Builder",
    tagline: "Resume-to-job matching via structured LLM reasoning and document generation.",
    description:
      "A Next.js app that parses PDFs and DOCX, extracts job requirements, and rewrites resumes to fit. Stripe billing, encrypted Supabase storage, and a chat interface for iterative refinement.",
    link: "https://resume-builder-six-kohl.vercel.app/",
    icon: FileText,
    image: "/resume-screenshot.png",
    stats: [
      { label: "Stack", value: "Next.js 16, React 19" },
      { label: "Backend", value: "Next.js API Routes" },
      { label: "Data", value: "Supabase + crypto-js" },
      { label: "Billing", value: "Stripe" },
    ],
  },
] as const;

export type Project = (typeof projects)[number];
