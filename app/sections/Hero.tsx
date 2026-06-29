"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { VideoText } from "../components/VideoText";

export function Hero({ setBackgroundPaused }: { setBackgroundPaused?: (paused: boolean) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v < 0.030)      setStage(0);
      else if (v < 0.243)  setStage(1);
      else if (v < 0.456) setStage(2);
      else if (v < 0.701)  setStage(3);
      else                 setStage(4);
      setBackgroundPaused?.(v > 0 && v < 1);
    });
  }, [scrollYProgress, setBackgroundPaused]);

  function scrollToWork() {
    const work = document.getElementById("work");
    if (!work) return;

    if (window.innerWidth < 768) {
      setTimeout(() => work.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      return;
    }

    const scrollEl = document.scrollingElement || document.documentElement;
    const start = scrollEl.scrollTop;
    const target = work.getBoundingClientRect().top + start;
    const distance = target - start;
    const duration = 13875;
    let startTime: number | null = null;

    function easeInOut(t: number) {
      const ramp = 0.15;
      if (t < ramp) {
        const p = t / ramp;
        return ramp * (-p * p * p + 2 * p * p);
      }
      return t;
    }

    function animate(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      scrollEl.scrollTop = start + distance * easeInOut(progress);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  // Scroll-driven opacity + slide for the active stage.
  const introOpacity   = useTransform(scrollYProgress, [0,     0.020, 0.030],            [1, 1, 0]);
  const introY         = useTransform(scrollYProgress, [0,     0.020, 0.030],            [0, 0, -40]);
  const depthInOpacity = useTransform(scrollYProgress, [0.030, 0.045, 0.686, 0.701],     [0, 1, 1, 0]);
  const systemsOpacity = useTransform(scrollYProgress, [0.030, 0.045, 0.228, 0.243],     [0, 1, 1, 0]);
  const systemsY       = useTransform(scrollYProgress, [0.030, 0.045, 0.228, 0.243],     [40, 0, 0, -40]);
  const peopleOpacity  = useTransform(scrollYProgress, [0.243, 0.258, 0.441, 0.456],     [0, 1, 1, 0]);
  const peopleY        = useTransform(scrollYProgress, [0.243, 0.258, 0.441, 0.456],     [40, 0, 0, -40]);
  const problemOpacity = useTransform(scrollYProgress, [0.456, 0.471, 0.686, 0.701],     [0, 1, 1, 0]);
  const problemY       = useTransform(scrollYProgress, [0.456, 0.471, 0.686, 0.701],     [40, 0, 0, -40]);
  const closingOpacity = useTransform(scrollYProgress, [0.701, 0.716, 0.985, 1.000],     [0, 1, 1, 0]);
  const closingY       = useTransform(scrollYProgress, [0.701, 0.716, 0.985, 1.000],     [40, 0, 0, -40]);
  const headshotScale  = useTransform(scrollYProgress, [0.025, 0.080],                   [1, 0.85]);
  const headshotOpacity = useTransform(scrollYProgress, [0,    0.430, 0.456],            [1, 1, 0]);
  const promptOpacity  = useTransform(scrollYProgress, [0.020, 0.050],                   [1, 0]);
  const promptY        = useTransform(scrollYProgress, [0.020, 0.050],                   [0, 20]);

  const wrap  = "pointer-events-none absolute inset-0 flex flex-col items-start justify-center";
  const introWrap = "pointer-events-none absolute inset-0 flex flex-col items-start justify-start pt-[4.5vh] md:pt-[15vh]";
  const label = "flex flex-col items-start text-7xl font-semibold leading-[1.05] tracking-tight text-cream-100 md:text-8xl lg:text-9xl";
  const body  = "text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-cream-100 md:text-5xl lg:text-6xl";

  const depthButtonDesktop = (
    <span className="relative inline-block align-bottom">
      <motion.span
        onClick={scrollToWork}
        className="pointer-events-auto inline-block cursor-pointer text-cream-100"
        style={{ textShadow: "0 4px 0 #c17a4b" }}
        whileHover={{ y: 2, textShadow: "0 2px 0 #c17a4b" }}
        whileTap={{ y: 4, textShadow: "0 0 0 #c17a4b" }}
      >
        depth
      </motion.span>
      <motion.span
        className="absolute left-1/2 top-full block -translate-x-1/2 pt-1 text-terracotta-500"
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </motion.span>
    </span>
  );

  const depthButtonMobile = (
    <span className="inline text-cream-100" style={{ textShadow: "0 4px 0 #c17a4b" }}>depth</span>
  );

  return (
    <div ref={ref} className="relative h-[1000vh]">
      <section className="sticky top-0 flex h-screen w-full flex-col items-center justify-center px-6 md:px-12">
        <div className="relative z-10 mx-auto h-[60vh] w-full max-w-5xl overflow-hidden">

          {stage === 0 && (
            <motion.div style={{ opacity: introOpacity, y: introY }} className={introWrap}>
              <p className={`${body} max-w-3xl md:hidden`}>
                <span className="text-5xl">A Builder</span><br />
                Who Lives and<br />
                Breathes {depthButtonMobile}.
              </p>
              <p className={`${body} max-w-3xl hidden md:block`}>
                A builder who lives and breathes {depthButtonDesktop}.
              </p>
            </motion.div>
          )}

          {stage >= 1 && stage <= 3 && (
            <motion.div style={{ opacity: depthInOpacity }} className={wrap}>
              <div className={`${label} md:-translate-y-0 -translate-y-12`}>
                <span className="relative z-10">Depth in</span>
                <div className="relative">
                  {/* invisible spacer keeps the row height equal to the longest label */}
                  <span className="invisible text-[4.5rem] font-semibold tracking-tight leading-[1em] md:text-[4.5rem] lg:text-[5.4rem]" aria-hidden="true">Problem<br/>Solving</span>
                  {stage === 1 && (
                    <motion.div style={{ opacity: systemsOpacity, y: systemsY }} className="absolute inset-0">
                      <VideoText text="Systems" src="/Systems10.mp4" playing />
                    </motion.div>
                  )}
                  {stage === 2 && (
                    <motion.div style={{ opacity: peopleOpacity, y: peopleY }} className="absolute inset-0">
                      <VideoText text="People" src="/People3.mp4" playing playbackRate={1} />
                    </motion.div>
                  )}
                  {stage === 3 && (
                    <motion.div style={{ opacity: problemOpacity, y: problemY }} className="absolute inset-0">
                      <VideoText
                        text={`Problem\nSolving`}
                        src="/ProblemSolving2.mp4"
                        playing
                        textClassName="text-[3.6rem] font-semibold tracking-tight md:text-[4.5rem] lg:text-[5.4rem]"
                        align="left"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {stage === 4 && (
            <motion.div style={{ opacity: closingOpacity, y: closingY }} className={wrap}>
              <div className="max-w-4xl -translate-y-12 md:translate-y-0">
                <p className="text-balance text-5xl font-semibold leading-[1.1] tracking-tight text-cream-100 md:text-5xl lg:text-6xl">With the focus <br/>of a monk.</p>
                <p className="mt-6 text-lg leading-relaxed text-sage-500 md:text-xl">
                  Or an ant. Depending on the task.
                </p>
              </div>
            </motion.div>
          )}

        </div>

        <motion.img
          src="/headshot.png"
          alt="Cason Lamothe"
          style={{ scale: headshotScale, opacity: headshotOpacity }}
          className="pointer-events-none absolute bottom-0 right-[-5%] z-0 max-h-[50vh] w-auto origin-bottom object-contain object-bottom md:right-[7%] md:max-h-[75vh]"
        />

        <motion.div
          style={{ opacity: promptOpacity, y: promptY }}
          className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2 text-center"
        >
          <p className="mb-2 text-sm text-sage-500">Keep scrolling</p>
          <div className="mx-auto h-10 w-px bg-gradient-to-b from-cream-300/60 to-transparent" />
        </motion.div>
      </section>
    </div>
  );
}
