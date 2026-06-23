import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { Reveal } from "./Reveal"
import { getToolColor } from "@/lib/techColors"
import { Layout, Server, Database, Wrench, Network, Sparkles } from "lucide-react"

const categories = [
  {
    label: "Frontend",
    icon: Layout,
    accent: "#818cf8",
    skills: ["React", "Vite", "Tailwind CSS", "JavaScript", "JSX", "HTML/CSS", "Mantine UI", "shadcn/ui"],
  },
  {
    label: "Backend",
    icon: Server,
    accent: "#34d399",
    skills: ["Node.js", "Express.js", "FastAPI", "Python", "TypeScript", "REST APIs"],
  },
  {
    label: "Database & ORM",
    icon: Database,
    accent: "#38bdf8",
    skills: ["PostgreSQL", "Prisma ORM", "MySQL","Firebase", "Supabase"],
  },
  {
    label: "Tools & DevOps",
    icon: Wrench,
    accent: "#fb923c",
    skills: ["Git", "GitHub", "Vercel", "Render", "Cloudflare", "VSCode", "Android Studio"],
  },
  {
    label: "Architecture",
    icon: Network,
    accent: "#a78bfa",
    skills: ["RBAC", "Multi-schema DB", "Design Science Research"],
  },
  {
    label: "Currently learning",
    icon: Sparkles,
    accent: "#fb7185",
    skills: ["Docker", "CI/CD", "Data Analysis", "Self-hosted deployment"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 px-5 sm:px-6 bg-white/1">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-indigo-400 text-sm mb-3">// skills &amp; tools</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            What I work <span className="text-gradient">with</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(({ label, icon: Icon, accent, skills }, i) => (
            <Reveal key={label} direction="up" delay={i * 80}>
              <Card
                accent={accent}
                className="p-5 h-full"
                style={{ borderColor: `color-mix(in srgb, ${accent} 22%, transparent)` }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span
                    className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                    style={{ backgroundColor: `color-mix(in srgb, ${accent} 16%, transparent)`, color: accent }}
                  >
                    <Icon size={16} />
                  </span>
                  <h3 className="font-display font-semibold text-sm text-white uppercase tracking-wider">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, j) => (
                    <Badge
                      key={skill}
                      color={getToolColor(skill, accent)}
                      style={{ animation: `badgePop 0.4s ease ${0.05 * j}s backwards` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
