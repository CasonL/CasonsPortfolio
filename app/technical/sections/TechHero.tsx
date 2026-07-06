"use client";

export function TechHero() {
  return (
    <div className="relative h-[105vh]">
      <section className="sticky top-0 flex h-[105vh] w-full flex-col items-center justify-center px-6 md:px-12">
        <div className="relative z-10 mx-auto h-[60vh] w-full max-w-5xl overflow-hidden">
          <div className="flex h-full w-full flex-col items-end justify-center text-right">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
              Technical profile
            </p>
            <h1 className="mb-8 max-w-3xl text-4xl font-medium leading-tight text-cream-100 md:text-5xl lg:text-6xl">
              I build AI systems that reason, speak, and ship.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-cream-300 md:text-xl">
              Fast live interaction. Background reasoning. Multi-model orchestration. Tight feedback loops.
              I design products where the model choices, state management, and voice pipelines are first-class decisions.
            </p>
          </div>
        </div>

        <img
          src="/headshot.png"
          alt="Cason Lamothe"
          className="pointer-events-none absolute bottom-8 left-[-5%] z-10 max-h-[50vh] w-auto origin-bottom object-contain object-bottom md:left-[7%] md:max-h-[75vh]"
        />

        <div className="absolute bottom-0 left-0 right-0 z-0 h-8 w-full bg-terracotta-500/15" />
      </section>
    </div>
  );
}
