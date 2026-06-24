import { useState } from "react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Reveal } from "./Reveal"
import { GraduationCap, Award, ExternalLink, X } from "lucide-react"
import Csscert from "../assets/Css.png"
import Epascert from "../assets/Epas.png"
import Jscert from "../assets/Jscert.png"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Mabini Colleges, Inc.",
    location: "Daet, Camarines Norte, Philippines",
    period: "2022 — 2026",
    status: "Completed",
    description:
      "Focus in developing problem-solving skills, software development, and database management. Completed a capstone project, SmartBarangay, which is a full-stack web system that digitizes barangay governance operations.",
    achievements: [
      "Thesis: SmartBarangay — Unified E-Governance Web System",
      "Team Leader · Fork Force (5-member capstone team)",
      "Engineering Excellence Award — Thesis (2026)",
      "Hackathon Champion - Expo 2026",
      "Best in technical Implementation - Expo 2026",
      "Dean's Special Academic Merit Award (2026)",
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
    badge: "https://placehold.co/48x48/1E2640/6366F1?text=CSS&font=montserrat",
    // Full-size certificate image shown in the modal when the card is clicked.
    // Swap this for the actual certificate scan/photo URL.
    image: Csscert,
    link: "#",
    accent: "#818cf8",
  },
  {
    name: "Electronic Products Assembly and Servicing NC II",
    issuer: "TESDA",
    year: "2023",
    type: "Technical Skills",
    badge: "https://placehold.co/48x48/1E2640/6366F1?text=EPAS&font=montserrat",
    image: Epascert,
    link: "#",
    accent: "#facc15",
  },
  {
    name: "JavaScript Essentials ",
    issuer: "Cisco Networking Academy",
    year: "2025",
    type: "Frontend",
    badge: "https://placehold.co/48x48/1E2640/818cf8?text=CNA&font=montserrat",
    image: Jscert,
    link: "#",
    accent: "#61dafb",
  },
]

export function Education() {
  const [activeCert, setActiveCert] = useState(null)

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
                className="p-4 flex items-center gap-4 group cursor-pointer transition-transform hover:-translate-y-0.5"
                onClick={() => setActiveCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setActiveCert(cert)
                  }
                }}
                aria-label={`View ${cert.name} certificate`}
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
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="shrink-0 text-slate-600 hover:text-indigo-400 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ExternalLink size={14} />
                </a>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Certificate image modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#10162c] rounded-2xl border overflow-hidden"
            style={{ borderColor: `color-mix(in srgb, ${activeCert.accent} 30%, transparent)` }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 p-4 sm:p-5 border-b border-white/10 shrink-0">
              <div className="min-w-0">
                <p className="text-sm sm:text-base font-medium text-white truncate">{activeCert.name}</p>
                <p className="text-xs font-mono mt-0.5" style={{ color: activeCert.accent }}>
                  {activeCert.issuer} · {activeCert.year}
                </p>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                aria-label="Close"
                className="shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image */}
            <div className="flex-1 overflow-auto flex items-center justify-center bg-black/20 p-3 sm:p-5">
              <img
                src={activeCert.image || activeCert.badge}
                alt={activeCert.name}
                className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg"
              />
            </div>

            {/* Footer */}
            {activeCert.link && activeCert.link !== "#" && (
              <div className="p-4 sm:p-5 border-t border-white/10 shrink-0">
                <a
                  href={activeCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono hover:underline"
                  style={{ color: activeCert.accent }}
                >
                  View original credential <ExternalLink size={12} />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}