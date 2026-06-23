import { cn } from "@/lib/utils"

/**
 * accent: optional hex/CSS color string. When provided, the card's hover
 * border and glow shift to that color instead of the default indigo,
 * so different tool/project categories read as visually distinct.
 */
export function Card({ children, className, accent, style, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white/3 border-white/8 lift-card",
        !accent && "transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/5",
        className
      )}
      style={accent ? { "--card-accent": accent, ...style } : style}
      {...props}
    >
      {children}
    </div>
  )
}
