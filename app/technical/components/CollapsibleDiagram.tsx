"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function CollapsibleDiagram({
  title,
  src,
  alt,
}: {
  title: string;
  src: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border/40 bg-forest-900/60 backdrop-blur-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-semibold text-cream-100">{title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="text-sage-500" size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="relative overflow-hidden rounded-xl border border-border/60">
                <div
                  className="pointer-events-none absolute inset-0 -z-10 opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, rgba(243, 233, 217, 0.6), rgba(193, 122, 75, 0.15) 40%, transparent 75%)",
                  }}
                />
                <img
                  src={src}
                  alt={alt}
                  className="relative z-10 w-full"
                />
              </div>
              <p className="mt-4 text-sm text-sage-500">
                Full call lifecycle for PitchIQ: user setup, WebSocket connection, Deepgram voice agent, model routing, state tracking, and post-call feedback.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
