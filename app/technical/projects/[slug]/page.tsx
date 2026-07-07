import { AnimatedBackground } from "../../../components/AnimatedBackground";
import { Footer } from "../../../components/Footer";
import { TechnicalNavigation } from "../../../components/TechnicalNavigation";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { projects } from "../../data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project not found" };
    return {
      title: `${project.title} | Cason Lamothe`,
      description: project.tagline,
    };
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const Icon = project.icon;

  return (
    <>
      <AnimatedBackground paused={false} />
      <TechnicalNavigation />
      <main className="relative z-10 flex-1 px-6 pt-28 pb-20 md:px-12 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/technical"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-sage-500 transition-colors hover:text-cream-100"
          >
            <ArrowLeft size={16} /> Back to technical profile
          </Link>

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta-500/10 text-terracotta-500">
            <Icon size={28} strokeWidth={1.5} />
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-cream-100 md:text-5xl">
            {project.title}
          </h1>
          <p className="mb-8 text-lg font-medium text-amber-400">
            {project.tagline}
          </p>

          {project.image && (
            <div className="relative mb-8 overflow-hidden rounded-2xl border border-border/40">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full object-cover"
              />
            </div>
          )}

          <p className="mb-10 text-lg leading-relaxed text-cream-300">
            {project.description}
          </p>

          <div className="mb-10 grid grid-cols-1 gap-4 border-y border-border/60 py-6 sm:grid-cols-2">
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

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-terracotta-500/10 px-6 py-3 text-sm font-medium text-terracotta-500 transition-colors hover:bg-terracotta-500/20 hover:text-amber-400"
          >
            Visit live site <ExternalLink size={16} />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
