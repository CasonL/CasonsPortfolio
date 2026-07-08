"use client";

import { AnimatedBackground } from "../components/AnimatedBackground";
import { Footer } from "../components/Footer";
import { TechnicalNavigation } from "../components/TechnicalNavigation";
import { TechBuilt } from "./sections/TechBuilt";
import { TechContact } from "./sections/TechContact";
import { TechHero } from "./sections/TechHero";
import { TechProjects } from "./sections/TechProjects";
import { TechStack } from "./sections/TechStack";

export default function Technical() {
  return (
    <>
      <AnimatedBackground paused={false} />
      <TechnicalNavigation />
      <main className="relative z-10 flex-1">
        <TechHero />
        <TechProjects />
        <TechStack />
        <TechBuilt />
        <TechContact />
      </main>
      <Footer />
    </>
  );
}
