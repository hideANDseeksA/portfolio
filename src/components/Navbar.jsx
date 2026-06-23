import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "bg-[#0A0F1E]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display font-bold text-lg text-white tracking-tight">
          <span className="text-gradient">JB</span>
          <span className="text-slate-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="px-2.5 lg:px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-2">
            <Button size="sm">Hire me</Button>
          </a>
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-white transition-transform duration-200 active:scale-90"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden bg-[#0A0F1E]/95 backdrop-blur-md border-b border-white/5 px-6 pb-4"
          style={{ animation: "revealUp 0.25s ease" }}
        >
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ animation: `revealUp 0.3s ease ${i * 0.05}s backwards` }}
              className="block py-3 text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all border-b border-white/5">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
