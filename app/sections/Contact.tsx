"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
            Contact
          </p>
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-cream-100 md:text-6xl">
            Let&apos;s build something that sticks.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-cream-300">
            I'm always open to conversations about product, AI architecture,
            leadership, or the next thing we should ship together.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:casonlamothe@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-terracotta-500 px-8 py-4 text-base font-semibold text-forest-950 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-terracotta-500/20"
            >
              <Mail size={20} />
              Say hello
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/cason-lamothe-7b1531302"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream-300/30 px-8 py-4 text-base font-medium text-cream-100 transition-all hover:border-cream-100 hover:bg-cream-100/5"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
