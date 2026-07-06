"use client";

export function TechHero() {
  return (
    <div className="relative md:h-[105vh]">
      <section className="flex w-full flex-col items-center justify-start px-6 pt-28 md:sticky md:top-0 md:h-[105vh] md:justify-center md:pt-0 md:px-12">
        {/* Desktop: text right, headshot left, no overlap */}
        <div className="relative z-10 mx-auto hidden h-[60vh] w-full max-w-5xl overflow-hidden md:block">
          <div className="flex h-full w-full flex-col items-end justify-center text-right">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
              Technical profile
            </p>
            <h1 className="mb-8 max-w-3xl text-4xl font-medium leading-tight text-cream-100 md:text-5xl lg:text-6xl">
              I build AI systems that reason, speak, and ship.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-cream-300 md:text-xl">
              I built a voice-to-voice AI sales trainer solo — sub-¢5 per call, six models orchestrated in parallel,
              live in production. I care about the layer most people skip: state management, model routing, and latency.
            </p>
          </div>
        </div>

        <img
          src="/headshot.png"
          alt="Cason Lamothe"
          className="pointer-events-none absolute bottom-16 left-[7%] z-10 hidden max-h-[75vh] w-auto origin-bottom object-contain object-bottom md:block"
        />

        <div className="absolute bottom-0 left-0 right-0 z-0 hidden h-8 w-full bg-terracotta-500/15 md:block" />

        {/* Mobile: text near top, image+bar adaptively pinned to the bottom of the viewport */}
        <div className="relative z-10 flex min-h-[calc(100dvh-112px)] w-full flex-col items-center md:hidden">
          <div className="mx-auto w-full max-w-md">
            <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
              Technical profile
            </p>
            <h1 className="mb-4 text-center text-3xl font-medium leading-tight text-cream-100">
              I build AI systems that reason, speak, and ship.
            </h1>
            <p className="text-center text-base leading-relaxed text-cream-300">
              I built a voice-to-voice AI sales trainer solo — sub-¢5 per call, six models orchestrated in parallel,
              live in production. I care about the layer most people skip: state management, model routing, and latency.
            </p>
          </div>

          <div className="mt-auto flex w-full flex-col items-center pt-8">
            <img
              src="/headshot.png"
              alt="Cason Lamothe"
              className="max-h-[38vh] w-auto object-contain"
            />
            <div className="-mx-6 h-8 w-[calc(100%+3rem)] bg-terracotta-500/15" />
          </div>
        </div>
      </section>
    </div>
  );
}
