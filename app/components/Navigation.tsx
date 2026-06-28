"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border bg-forest-900/70 px-6 py-3 backdrop-blur-md">
        <a href="#" className="text-sm font-semibold tracking-tight text-cream-100">
          Cason Lamothe
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-cream-300 transition-colors hover:text-cream-100"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-terracotta-500 px-4 py-2 text-sm font-medium text-forest-950 transition-colors hover:bg-amber-400"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>

        <button
          className="flex items-center justify-center p-2 text-cream-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute left-6 right-6 top-full mt-3 rounded-2xl border border-border bg-forest-800/95 p-6 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-lg text-cream-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
