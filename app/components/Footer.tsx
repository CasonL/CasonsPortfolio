export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-cream-300/70">
          © {year} Cason Lamothe. Built with intention.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#work"
            className="text-sm text-cream-300/70 transition-colors hover:text-cream-100"
          >
            Work
          </a>
          <a
            href="#philosophy"
            className="text-sm text-cream-300/70 transition-colors hover:text-cream-100"
          >
            Philosophy
          </a>
          <a
            href="#contact"
            className="text-sm text-cream-300/70 transition-colors hover:text-cream-100"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
