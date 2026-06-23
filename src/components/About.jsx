import { Card } from "./ui/card"
import { Reveal } from "./Reveal"
import { GraduationCap, MapPin, Code2, Layers } from "lucide-react"

const stats = [
  { label: "Projects built", value: "8+", accent: "#818cf8" },
  { label: "Modules shipped", value: "7", accent: "#34d399" },
  { label: "Sprints completed", value: "3", accent: "#38bdf8" },
  { label: "Tech stack depth", value: "Full", accent: "#fb923c" },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal direction="left">
            <p className="font-mono text-indigo-400 text-sm mb-3">// about me</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              I build things for the <span className="text-gradient">web</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a Computer Science student at <span className="text-slate-300">Mabini Colleges, Inc.</span>,
              currently in my final year. My capstone project, SmartBarangay, is a full-stack web system that
              digitizes barangay governance operations — from resident management to blotter records,complaints and health tracking.
            </p>
      
            <p className="text-slate-400 leading-relaxed">
              I'm have knowledgeable in designing and implementing databases, building RESTful APIs, and crafting intuitive user interfaces. I enjoy working on projects that require end-to-end problem solving, and I'm always eager to learn new technologies and best practices in web development. 
            </p>

            <div className="flex flex-col gap-2 mt-6">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={14} className="text-indigo-400 shrink-0" />
                San Vicente, Camarines Norte, Philippines
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <GraduationCap size={14} className="text-indigo-400 shrink-0" />
                BS Computer Science — AY 2022–2026
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Layers size={14} className="text-indigo-400 shrink-0" />
                Team Fork Force · SmartBarangay
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Code2 size={14} className="text-indigo-400 shrink-0" />
                Prefer Backend Development, Database Design, and Quality Assurance
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map(({ label, value, accent }, i) => (
              <Card
                key={label}
                accent={accent}
                className="p-5 sm:p-6 text-center group cursor-default"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div
                  className="font-display text-3xl sm:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-200"
                  style={{ color: accent }}
                >
                  {value}
                </div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">{label}</div>
              </Card>
            ))}

            <Card className="col-span-2 p-4 font-mono text-xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-slate-600">~/portfolio</span>
              </div>
              <div className="space-y-1 text-slate-400">
                <div><span className="text-indigo-400">$</span> whoami</div>
                <div className="text-slate-300">Jhon Brayn Rafer — Software developer</div>
                <div><span className="text-indigo-400">$</span> cat interests.txt</div>
                <div className="text-slate-300">Problem solving,Database Design,Web Development</div>
                <div className="flex items-center gap-1">
                  <span className="text-indigo-400">$</span>
                  <span className="cursor-blink text-indigo-400">_</span>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
