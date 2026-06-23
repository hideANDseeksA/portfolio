export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-5 sm:px-6 text-center">
      <p className="text-xs font-mono text-slate-600 leading-relaxed">
        © {new Date().getFullYear()} · Built with React + Vite + Tailwind <br className="sm:hidden" />
        <span className="hidden sm:inline"> · </span>Designed with intent
      </p>
    </footer>
  )
}
