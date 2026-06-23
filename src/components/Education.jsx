import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Reveal } from "./Reveal"
import { GraduationCap, Award, ExternalLink } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Mabini Colleges, Inc.",
    location: "Daet, Camarines Norte, Philippines",
    period: "2022 — 2026",
    status: "Completed",
    honor: "Dean's Special Academic Merit Award",
    description:
      "Focus in developing problem-solving skills, software development, and database management. Completed a capstone project, SmartBarangay, which is a full-stack web system that digitizes barangay governance operations.",
    achievements: [
      "Thesis: SmartBarangay — Unified E-Governance Web System",
      "Team Leader · Fork Force (5-member capstone team)",
      "Engineering Excellence Award — Thesis (2026)",
      "Hackathon Champion - Expo 2026",
      "Best in technical Implementation - Expo 2026",
    ],
    image: "https://placehold.co/80x80/1E2640/6366F1?text=MC&font=montserrat",
    accent: "#818cf8",
  },
  {
    degree: "Senior High School — TVL Strand",
    school: "Froilan Lopez D. High School",
    location: "San Vicente, Camarines Norte, Philippines",
    period: "2018 — 2020",
    status: "Completed",
    honor: "With Honors",
    description:
    "Completed the Technology, Vocational, and Livelihood (TVL) strand with a focus on technical skills and practical applications.",
    achievements: [
      "TVL strand — Technology, Vocational, and Livelihood",
      "Graduated with honors",
    ],
    image: "https://placehold.co/80x80/1E2640/818cf8?text=SHS&font=montserrat",
    accent: "#38bdf8",
  },
]

const certificates = [
  {
    name: "Computer Systems Servicing NC II",
    issuer: "TESDA",
    year: "2025",
    type: "Technical Skills",
    badge: "https://placehold.co/48x48/1E2640/6366F1?text=fCC&font=montserrat",
    link: "#",
    accent: "#818cf8",
  },
  {
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    type: "Programming",
    badge: "https://placehold.co/48x48/1E2640/6366F1?text=fCC&font=montserrat",
    link: "#",
    accent: "#facc15",
  },
  {
    name: "React — The Complete Guide",
    issuer: "Udemy",
    year: "2024",
    type: "Frontend",
    badge: "https://placehold.co/48x48/1E2640/818cf8?text=Udm&font=montserrat",
    link: "#",
    accent: "#61dafb",
  },
  {
    name: "Python for Everybody",
    issuer: "Coursera",
    year: "2024",
    type: "Backend",
    badge: "https://placehold.co/48x48/1E2640/a5b4fc?text=Crs&font=montserrat",
    link: "#",
    accent: "#34d399",
  },
  {
    name: "Database Management Essentials",
    issuer: "Coursera",
    year: "2023",
    type: "Database",
    badge: "https://placehold.co/48x48/1E2640/a5b4fc?text=Crs&font=montserrat",
    link: "#",
    accent: "#38bdf8",
  },
  {
    name: "Git & GitHub Bootcamp",
    issuer: "Udemy",
    year: "2023",
    type: "DevOps",
    badge: "https://placehold.co/48x48/1E2640/818cf8?text=Udm&font=montserrat",
    link: "#",
    accent: "#fb923c",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Education */}
        <Reveal className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-indigo-400 text-sm mb-3">// education</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Academic <span className="text-gradient">background</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6 mb-20 sm:mb-24">
          {education.map((edu, i) => (
            <Reveal key={i} direction="up" delay={i * 100}>
              <Card accent={edu.accent} className="p-5 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-5 sm:gap-6">
                  {/* School logo */}
                  <div className="shrink-0">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border"
                      style={{ borderColor: `color-mix(in srgb, ${edu.accent} 30%, transparent)` }}
                    >
                      <img src={edu.image} alt={edu.school} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <GraduationCap size={15} style={{ color: edu.accent }} className="shrink-0" />
                          <h3 className="font-display font-bold text-white">{edu.degree}</h3>
                        </div>
                        <p className="font-mono text-sm" style={{ color: edu.accent }}>{edu.school}</p>
                        <p className="text-slate-600 text-xs mt-0.5">{edu.location}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <Badge variant={edu.status === "Graduating" ? "default" : "secondary"}>{edu.status}</Badge>
                        {edu.honor && (
                          <span className="inline-flex items-center gap-1 text-xs font-mono text-amber-400">
                            <Award size={11} /> {edu.honor}
                          </span>
                        )}
                        <span className="text-xs text-slate-600 font-mono whitespace-nowrap">{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{edu.description}</p>

                    <ul className="space-y-1.5">
                      {edu.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                          <span className="mt-0.5 shrink-0" style={{ color: edu.accent }}>▸</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Certificates */}
        <Reveal className="text-center mb-12">
          <p className="font-mono text-indigo-400 text-sm mb-3">// certifications</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Certificates & <span className="text-gradient">credentials</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <Reveal key={i} direction="up" delay={i * 60}>
              <Card
                accent={cert.accent}
                className="p-4 flex items-center gap-4 group"
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-lg overflow-hidden border"
                  style={{ borderColor: `color-mix(in srgb, ${cert.accent} 30%, transparent)` }}
                >
                  <img src={cert.badge} alt={cert.issuer} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{cert.name}</p>
                  <p className="text-xs font-mono" style={{ color: cert.accent }}>{cert.issuer} · {cert.year}</p>
                  <Badge color={cert.accent} className="mt-1.5 text-[10px]">{cert.type}</Badge>
                </div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer"
                  className="shrink-0 text-slate-600 hover:text-indigo-400 transition-colors opacity-0 group-hover:opacity-100">
                  <ExternalLink size={14} />
                </a>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
