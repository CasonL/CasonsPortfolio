"use client";

import { useState } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Philosophy } from "./sections/Philosophy";
import { Projects } from "./sections/Projects";

export default function Home() {
  const [bgPaused, setBgPaused] = useState(false);

  return (
    <>
      <AnimatedBackground paused={bgPaused} />
      <Navigation />
      <main className="relative z-10 flex-1">
        <Hero setBackgroundPaused={setBgPaused} />
        <Projects />
        <Philosophy />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
