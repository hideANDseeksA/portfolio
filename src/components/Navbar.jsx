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
  const [active, setActive] = useState(() => {
    // If the page loads with a hash that matches one of our links
    // (e.g. visiting /#experience directly), start active immediately
    // instead of waiting for the observer to catch up.
    if (typeof window !== "undefined") {
      const match = links.find(l => l.href === window.location.hash)
      if (match) return match.href
    }
    return links[0].href
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map(l => document.querySelector(l.href))
      .filter(Boolean)

    if (sections.length === 0) return

    // Tracks the latest known intersection ratio for every section, not just
    // the ones that changed in the most recent callback batch. This fixes the
    // bug where a section stays the most-visible one on screen but never gets
    // marked active because IntersectionObserver stopped reporting it.
    const ratios = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let bestId = null
        let bestRatio = 0
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })

        if (bestId) {
          setActive(`#${bestId}`)
        }
      },
      {
        // Trigger when a section is roughly in the upper half of the viewport.
        // Widened from the original "-20% 0px -60% 0px" because that narrow
        // band could miss a section that's scrolled to sit right at the top
        // (e.g. right after a hash-link jump to #experience).
        rootMargin: "-10% 0px -70% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
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
          {links.map(l => {
            const isActive = active === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative px-2.5 lg:px-3 py-2 text-sm transition-colors rounded-lg hover:bg-white/5",
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute left-2.5 right-2.5 lg:left-3 lg:right-3 -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                />
              </a>
            )
          })}
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
          {links.map((l, i) => {
            const isActive = active === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "true" : undefined}
                style={{ animation: `revealUp 0.3s ease ${i * 0.05}s backwards` }}
                className={cn(
                  "block py-3 text-sm hover:translate-x-1 transition-all border-b border-white/5",
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                )}
              >
                {l.label}
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}