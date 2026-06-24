import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Reveal } from "./Reveal"
import { getToolColor } from "@/lib/techColors"
import { Briefcase } from "lucide-react"

const experiences = [

  {
    role: "Lead Developer — SmartBarangay",
    company: "Mabini Colleges, Inc. · Team Fork Force",
    period: "2025 — 2026",
    type: "Academic",
    description:
      "Led development of SmartBarangay, a unified e-governance web system for Barangay Lag-on, Daet under the Design Science Research framework. Coordinated a team of 5 across 3 Agile sprints.",
    highlights: [
      "Architected full-stack system covering 7 modules and 23 user stories",
      "Implemented Cloudflare tunnel and rate-limiting middleware",
      "PHT (UTC+8) date handling in certificate generation logic",
      "Conducted ISO 25010 UAT with 9 participants",
    ],
    tech: ["React", "Vite", "Express.js", "Prisma", "Supabase", "Vercel"],
    current: false,
    accent: "#818cf8",
  },
  {
    role: "Web Developer (Intern)",
    company: "DepED (SDO) · Daet, Camarines Norte",
    period: "2025",
    type: "Internship",
    description:
      "Assisted in developing and maintaining web applications. Gained hands-on experience with backend development, REST API integration, and database management. and mobile development. Collaborated with a team of developers to deliver high-quality solutions.",
    highlights: [
      "Built Backend APIs using Node.js and Express.js for RAEL and DepEd SDO systems",
      "Implement Containerization with Docker for deployment of express and python scripts",
      "Develop Mobile App using React Native and Expo for Attendance Scanning and QR Code Generation",
      "RAEL SYSTEM: its web-based system to register to Regional Assembly of Education Leaders its has id generation and certificate generation with QR code and attendance scanning using mobile app",
    ],
    tech: ["React", "JavaScript", "Node.js", "Supabase", "Git","Python","React Native","Docker"],
    current: false,
    accent: "#fb923c",
  },
]

const typeColor = {
  Freelance: "default",
  Academic: "success",
  Internship: "secondary",
}

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 px-5 sm:px-6 bg-white/1">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-indigo-400 text-sm mb-3">// work experience</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Where I've <span className="text-gradient">worked</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Timeline line — sits on the left on mobile, centered from md up */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent" />

          <div className="flex flex-col gap-8 sm:gap-10">
            {experiences.map((exp, i) => (
              <Reveal
                key={i}
                direction={i % 2 === 0 ? "right" : "left"}
                delay={i * 100}
                className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div
                  className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#0A0F1E] mt-6 z-10"
                  style={{ backgroundColor: exp.accent }}
                >
                  {exp.current && (
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-75"
                      style={{ backgroundColor: exp.accent }}
                    />
                  )}
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 sm:ml-12 md:ml-0 md:w-1/2 md:px-8 min-w-0">
                  <Card
                    accent={exp.accent}
                    className="p-5 sm:p-6"
                    style={exp.current ? { borderColor: `color-mix(in srgb, ${exp.accent} 35%, transparent)` } : undefined}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} style={{ color: exp.accent }} className="shrink-0" />
                          <span className="font-display font-bold text-white">{exp.role}</span>
                        </div>
                        <div className="text-sm font-mono break-words" style={{ color: exp.accent }}>{exp.company}</div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge variant={typeColor[exp.type]}>{exp.type}</Badge>
                        <span className="text-xs text-slate-600 font-mono whitespace-nowrap">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{exp.description}</p>

                    <ul className="space-y-1.5 mb-4">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                          <span className="mt-0.5 shrink-0" style={{ color: exp.accent }}>▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map(t => (
                        <Badge key={t} color={getToolColor(t, exp.accent)}>{t}</Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
