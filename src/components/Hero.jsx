import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { ArrowDown, GitBranch, Link2, Mail } from "lucide-react"

const roles = [
  "Full-Stack Developer",
  "Backend Developer",
  "Database Designer",
  "Quality Assurance",
  "User Experience Enthusiast",
]

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = roles[roleIdx]
    let timeout
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-6 grid-bg overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[280px] sm:w-[420px] md:w-[600px] h-[280px] sm:h-[420px] md:h-[600px] rounded-full bg-indigo-600/10 blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none animate-float" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[150px] sm:w-[220px] md:w-[300px] h-[150px] sm:h-[220px] md:h-[300px] rounded-full bg-violet-600/8 blur-[60px] sm:blur-[80px] md:blur-[100px] pointer-events-none animate-float" style={{ animationDuration: "6s", animationDelay: "1s" }} />

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Profile image */}
        <div className="mb-6 sm:mb-8 animate-fade-up">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-indigo-500 p-[2px] animate-spin-slow" />
            <div className="absolute inset-[2px] rounded-full overflow-hidden bg-[#1E2640]">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocKznN_mE-aEV4KarC11gGi1RZwyPABkIR2j6rlFMVWSnCZpBC6S=s288-c-no"
                alt="JB - Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-[#0A0F1E] animate-pulse-ring" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-5 sm:mb-6 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-indigo-300">Available for opportunities</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-fade-up leading-tight" style={{ animationDelay: "0.1s" }}>
          Hi, I'm <span className="text-gradient">Jhon Brayn</span>
        </h1>

        <div className="h-9 sm:h-10 flex items-center justify-center mb-5 sm:mb-6 animate-fade-up px-2" style={{ animationDelay: "0.2s" }}>
          <span className="font-mono text-base sm:text-xl md:text-2xl text-indigo-300">
            {displayed}
            <span className="cursor-blink text-indigo-400">|</span>
          </span>
        </div>

        <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Building web systems that actually solve problems. Developed{" "}
          <span className="text-indigo-300 font-medium">SmartBarangay</span> — a unified e-governance
          platform for local communities in the Philippines.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a href="#projects" className="w-full sm:w-auto"><Button size="lg" className="w-full sm:w-auto justify-center">View my work</Button></a>
          <a href="#contact" className="w-full sm:w-auto"><Button size="lg" variant="outline" className="w-full sm:w-auto justify-center">Get in touch</Button></a>
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {[
            { icon: GitBranch, href: "https://github.com/hideANDseeksA", label: "GitHub" },
            { icon: Link2, href: "https://www.linkedin.com/in/jhon-brayn-rafer-a82b22362/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:jhonbrayn@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 text-slate-500 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/5 hover:-translate-y-0.5 transition-all duration-200">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <a href="#about"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400 transition-colors animate-float">
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
