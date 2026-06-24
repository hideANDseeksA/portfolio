import { useState } from "react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Reveal } from "./Reveal"
import { ImageLightbox } from "./ImageLightBox"
import { getToolColor } from "@/lib/techColors"
import { ExternalLink, GitBranch, Star, ImageOff, Maximize2, Globe } from "lucide-react"
import ApimsImage from "../assets/Apims.png";
import CloudLibraryImage from "../assets/Cloud-Library.png";
import EasyDocsImage from "../assets/image.png";

// Set `image` to an actual image file (png/jpg/webp) when you have a
// screenshot. Leave it null/empty if you don't — as long as `live` is set,
// the card will show a clickable "visit live site" tile instead of a
// broken image. If neither is set, it falls back to a plain placeholder.
const projects = [
  {
    name: "SmartBarangay",
    tagline: "Unified e-governance for Barangay Lag-on",
    description:
      "A full-stack web system that digitizes barangay operations — resident records, document requests, complaint tracking, blotter management, and health monitoring. Built across 3 Agile sprints covering 23 user stories.",
    image: null,
    tech: ["React", "Vite", "Express.js", "Prisma", "PostgreSQL", "Supabase", "Vercel","TypeScript","JavaScript"],
    github: "https://github.com/mc-ccs-batch-25-26/system-repository-ths-25-26-fork-force",
    live: "https://mc-ccs-batch-25-26.github.io/documentation-repository-ths-25-26-fork-force/",
    featured: true,
    tag: "Capstone",
    role: "Full Stack Developer",
    accent: "#818cf8",
  },
    {
    name: "RAEL",
    tagline: "Regional Assembly of Education Leaders (2026) — web system",
    description:"A web-based system for the Regional Assembly of Education Leaders (RAEL) 2026 event. Features Registration, ID generation, QR code-based attendance scanning, certificate generation, and real-time participant management.",
    image: null,
    tech: ["React", "Vite", "Express.js",  "PostgreSQL", "Supabase", "Vercel"],
       github: null,
    live: "https://rael.depedcamnorte.ph/",
    featured: true,
    tag: "Internship",
    role: "Backend/Mobile Developer",
    accent: "#1d50db",
  },
  {
    name: "APIMS",
    tagline: "Automated Personnel Information Management System (HR system)",
    description:
      "A production-grade HR system with FastAPI, SQLAlchemy async, and multi-schema PostgreSQL. Features role-based access (Super Admin, HR Manager, Dept Head) and feature-based vertical slice architecture.",
    image: ApimsImage,
    tech: ["FastAPI", "Python", "Vite","React","Supabase","Vercel","Railway","PostgreSQL"],
    github: null,
    live: null,
    featured: false,
    
    role: "Backend Developer",
    accent: "#34d399",
  },
  {
    name: "Barangay Easy Docs",
    tagline: "Certificate generation and resident management.",
    description:
      "A web-based system that allows residents to request certificates online. Features resident management, certificate generation.",
    image: EasyDocsImage,
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript","Express.js","Supabase","Vercel"],
    github: null,
    live: null,
    featured: false,
    tag: "Documentation",
    role: "Full Stack Developer",
    accent: "#38bdf8",
  },
  {
    name: "Cloud Library",
    tagline: "Digital library for Mabini Colleges, Inc.",
    description:
      "A digital library system for Mabini Colleges, Inc. that allows students and faculty to browse, search, and access digital resources online. Features user authentication, resource categorization, and a responsive design.",
    image: CloudLibraryImage,
    tech: ["React", "Vite", "Django", "Vercel", "Supabase"],
    github: null,
    live: null,
    featured: false,
    role: "Full Stack Developer",
    accent: "#818cf8",
  },

  {
    name: "MC Saliksik",
    tagline: "Android app library for Mabini Colleges, Inc.",
    description:
      "An Android app library for Mabini Colleges, Inc. that provides a seamless experience for students and faculty to access educational resources and information.",
    image: null,
    tech: ["Java", "PostgreSQL", "Firebase"],
    github: null,
    live: "https://download-page-psi.vercel.app/",
    featured: false,
    role: "Mobile Developer",
    accent: "#fb923c",
  }
]

const tagColor = {
  Capstone: "default",
  "In Progress": "success",
  Documentation: "secondary",
}

function ProjectMedia({ p, onExpand }) {
  const [imgFailed, setImgFailed] = useState(false)
  const hasImage = Boolean(p.image) && !imgFailed

  if (hasImage) {
    return (
      <button
        type="button"
        onClick={onExpand}
        className="relative w-full aspect-[16/10] overflow-hidden bg-[#11162a] cursor-zoom-in block"
        aria-label={`View full image of ${p.name}`}
      >
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          onError={() => setImgFailed(true)}
        />

        {/* Gradient wash so badges stay readable regardless of image content */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/10 to-black/30" />

        {/* Expand affordance, appears on hover/focus */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono font-medium backdrop-blur-md border translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            style={{
              backgroundColor: "rgba(10,15,30,0.7)",
              borderColor: `color-mix(in srgb, ${p.accent} 50%, transparent)`,
              color: p.accent,
            }}
          >
            <Maximize2 size={13} /> View full image
          </span>
        </div>

        <MediaBadges p={p} />
      </button>
    )
  }

  if (p.live) {
    // No image available (or it failed to load) — show a clickable
    // "visit live site" tile instead of a broken/empty image box.
    return (
      <a
        href={p.live}
        target="_blank"
        rel="noopener noreferrer"
        className="group/media relative w-full aspect-[16/10] overflow-hidden flex flex-col items-center justify-center gap-3 block"
        style={{
          background: `radial-gradient(circle at 50% 30%, color-mix(in srgb, ${p.accent} 20%, transparent), #11162a 70%)`,
        }}
        aria-label={`Visit live site for ${p.name}`}
      >
        <span
          className="flex items-center justify-center w-12 h-12 rounded-full border transition-transform duration-300 group-hover/media:scale-110"
          style={{
            borderColor: `color-mix(in srgb, ${p.accent} 45%, transparent)`,
            backgroundColor: `color-mix(in srgb, ${p.accent} 14%, transparent)`,
            color: p.accent,
          }}
        >
          <Globe size={20} />
        </span>
        <span
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-full border transition-colors"
          style={{ borderColor: `color-mix(in srgb, ${p.accent} 40%, transparent)`, color: p.accent }}
        >
          <ExternalLink size={12} /> Visit live site
        </span>
        <span className="text-[11px] text-slate-600 font-mono">No screenshot yet — preview the real thing</span>

        <MediaBadges p={p} />
      </a>
    )
  }

  // Neither an image nor a live link — plain placeholder.
  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#11162a] flex flex-col items-center justify-center gap-2 text-slate-600">
      <ImageOff size={28} />
      <span className="text-xs font-mono">No image</span>
      <MediaBadges p={p} />
    </div>
  )
}

function MediaBadges({ p }) {
  return (
    <div className="absolute top-3 left-3 flex flex-wrap gap-2 max-w-[calc(100%-1.5rem)]">
      <Badge variant={tagColor[p.tag]}>{p.tag}</Badge>
      {p.featured && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">
          <Star size={10} className="fill-amber-400" /> Featured
        </span>
      )}
    </div>
  )
}

export function Projects() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <section id="projects" className="py-20 sm:py-24 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-indigo-400 text-sm mb-3">// selected work</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Things I've <span className="text-gradient">built</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {projects.map((p, i) => (
            <Reveal key={p.name} direction="up" delay={i * 110} className="h-full">
              <div
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm lift-card"
                style={{
                  "--card-accent": p.accent,
                  background: "linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-70 z-10"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
                />

                <ProjectMedia p={p} onExpand={() => setActiveImage(p)} />

                {/* Content */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">{p.name}</h3>
                    <p className="text-xs font-mono mt-0.5" style={{ color: p.accent }}>{p.tagline}</p>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed flex-1">{p.description}</p>

                  <div className="text-xs font-mono text-slate-600 px-2 py-1 rounded-md bg-white/3 w-fit">
                    {p.role}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map(t => (
                      <Badge key={t} color={getToolColor(t, p.accent)}>{t}</Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <GitBranch size={13} /> Code
                        </Button>
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer">
                        <Button size="sm">
                          <ExternalLink size={13} /> Live
                        </Button>
                      </a>
                    )}
                    {!p.github && !p.live && (
                      <span className="text-xs font-mono text-slate-600 pt-1">Private repository</span>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {activeImage && (
        <ImageLightbox
          image={activeImage.image}
          alt={activeImage.name}
          accent={activeImage.accent}
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  )
}
