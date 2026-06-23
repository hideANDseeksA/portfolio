import { useState, useRef } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Reveal } from "./Reveal"
import { useContactGuard } from "../hooks/useContactGuard"
import { Mail, GitBranch, Link2, Send, CheckCircle, Loader2, ShieldAlert, Clock } from "lucide-react"
import emailjs from "@emailjs/browser"

const links = [
  { icon: Mail,      label: "Email",    value: "jhonbraynrafer@gmail.com",      href: "mailto:jhonbraynrafer@gmail.com",    accent: "#818cf8" },
  { icon: GitBranch, label: "GitHub",   value: "github.com",       href: "https://github.com/hideANDseeksA",       accent: "#34d399" },
  { icon: Link2,     label: "LinkedIn", value: "linkedin.com",  href: "https://www.linkedin.com/in/jhon-brayn-rafer-a82b22362/?skipRedirect=true",     accent: "#38bdf8" },
]

/* ── Spinner shown during send ── */
function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20" />
        <div className="absolute inset-0 rounded-full border-2 border-t-indigo-400 animate-spin" />
      </div>
      <p className="text-slate-400 text-sm font-mono">Sending your message…</p>
    </div>
  )
}

/* ── Guard status banner ── */
function GuardBanner({ cooldownLeft, dailyLeft, reason }) {
  if (!reason) return null
  const isDaily  = dailyLeft <= 0
  return (
    <div className={`flex items-start gap-3 px-4 py-3 rounded-lg border text-sm mb-4 ${
      isDaily
        ? "bg-red-500/10 border-red-500/30 text-red-400"
        : "bg-amber-500/10 border-amber-500/30 text-amber-400"
    }`}>
      {isDaily ? <ShieldAlert size={16} className="shrink-0 mt-0.5" /> : <Clock size={16} className="shrink-0 mt-0.5" />}
      <span className="font-mono text-xs leading-relaxed">{reason}</span>
    </div>
  )
}

export function Contact() {
  const [sent, setSent]     = useState(false)
  const [error, setError]   = useState("")
  const [sending, setSending] = useState(false)
  const [form, setForm]     = useState({ name: "", email: "", message: "" })
  const honeypotRef         = useRef(null)   // hidden field — bots fill this

  const { canSubmit, cooldownLeft, dailyLeft, reason, validate, recordSend, lastSent } =
    useContactGuard()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // ── Layer check ──────────────────────────────────────────────
    try {
      validate({ honeypot: honeypotRef.current?.value || "" })
    } catch (msg) {
      setError(typeof msg === "string" ? msg : "Validation failed.")
      return
    }

    setSending(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      recordSend()                          // update localStorage counters
      setSent(true)
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      console.error("EmailJS error:", err)
      setError("Failed to send. Please try again or email me directly.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 bg-white/1">
      <div className="max-w-4xl mx-auto">

        <Reveal className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-indigo-400 text-sm mb-3">// contact</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Open to internship roles, freelance projects, or just a chat about building things on the web.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-6 sm:gap-8">

          {/* ── Info column ─────────────────────────────────────── */}
          <Reveal direction="left" className="md:col-span-2 flex flex-col gap-3 sm:gap-4">
            {links.map(({ icon: Icon, label, value, href, accent }) => (
              <Card key={label} className="p-4 group">
                <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <div className="p-2 rounded-lg shrink-0 transition-colors"
                    style={{ backgroundColor: `${accent}22`, color: accent }}>
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-600 font-mono">{label}</div>
                    <div className="text-sm text-slate-300 truncate transition-colors"
                      style={{ "--hover-color": accent }}
                      onMouseEnter={e => e.currentTarget.style.color = accent}
                      onMouseLeave={e => e.currentTarget.style.color = ""}>
                      {value}
                    </div>
                  </div>
                </a>
              </Card>
            ))}

            {/* Status */}
            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Status: Available
              </div>
              <p className="text-xs text-slate-500 mt-1">Actively looking for opportunities</p>
            </div>

            {/* Cache: show last sent time if any */}
            {lastSent && (
              <div className="px-3 py-2 rounded-lg border border-white/5 bg-white/3">
                <p className="text-xs font-mono text-slate-600">
                  Last message sent:{" "}
                  <span className="text-slate-500">
                    {lastSent.toLocaleString("en-PH", { dateStyle: "medium", timeStyle: "short" })}
                  </span>
                </p>
                {dailyLeft > 0 && (
                  <p className="text-xs font-mono text-slate-600 mt-0.5">
                    {dailyLeft} of 3 daily sends remaining
                  </p>
                )}
              </div>
            )}
          </Reveal>

          {/* ── Form column ─────────────────────────────────────── */}
          <Reveal direction="right" className="md:col-span-3">
            <Card className="p-5 sm:p-6 h-full">

              {/* Sending state */}
              {sending && <Spinner />}

              {/* Success state */}
              {!sending && sent && (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-8">
                  <CheckCircle size={48} className="text-emerald-400" />
                  <div className="text-center">
                    <div className="font-display font-bold text-white text-lg">Message sent!</div>
                    <div className="text-slate-400 text-sm mt-1">I'll get back to you soon.</div>
                  </div>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs font-mono text-slate-600 hover:text-indigo-400 transition-colors underline underline-offset-2 mt-2">
                    Send another message
                  </button>
                </div>
              )}

              {/* Form state */}
              {!sending && !sent && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

                  {/* Guard banner (cooldown / daily cap) */}
                  <GuardBanner cooldownLeft={cooldownLeft} dailyLeft={dailyLeft} reason={reason} />

                  {/* Error banner */}
                  {error && (
                    <div className="flex items-start gap-2 px-3 py-2.5 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-mono">
                      <ShieldAlert size={13} className="shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  {/* Honeypot — hidden from humans, invisible trap for bots */}
                  <input
                    ref={honeypotRef}
                    type="text"
                    name="website"
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ display: "none" }}
                  />

                  <div>
                    <label className="block text-xs font-mono text-slate-500 mb-1.5">Name</label>
                    <input type="text" required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      disabled={!canSubmit}
                      className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 mb-1.5">Email</label>
                    <input type="email" required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      disabled={!canSubmit}
                      className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 mb-1.5">Message</label>
                    <textarea rows={4} required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="What's on your mind?"
                      disabled={!canSubmit}
                      className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all resize-none disabled:opacity-40 disabled:cursor-not-allowed"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full justify-center"
                    disabled={!canSubmit || sending}>
                    {cooldownLeft > 0
                      ? <><Clock size={14} /> Wait {cooldownLeft}s</>
                      : <><Send size={14} /> Send message</>
                    }
                  </Button>

                  {/* Shield note */}
                  <p className="text-center text-[10px] font-mono text-slate-700 flex items-center justify-center gap-1">
                    <ShieldAlert size={10} />
                    Protected · max 3 messages per day · 60 s cooldown
                  </p>
                </form>
              )}

            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
