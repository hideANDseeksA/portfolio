import { cn } from "@/lib/utils"

export function Badge({ children, className, variant = "default", color, style, ...props }) {
  const variants = {
    default: "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30",
    secondary: "bg-white/5 text-slate-400 border border-white/10",
    success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  }

  // When a `color` is supplied (e.g. a per-tool accent), render a chip whose
  // text/border tint comes from that color instead of the fixed variants.
  const colorStyle = color
    ? {
        color,
        borderColor: `color-mix(in srgb, ${color} 45%, transparent)`,
        backgroundColor: `color-mix(in srgb, ${color} 14%, transparent)`,
        "--tool-color": color,
        ...style,
      }
    : style

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-mono",
        color ? "tool-chip border" : variants[variant],
        className
      )}
      style={colorStyle}
      {...props}
    >
      {children}
    </span>
  )
}
