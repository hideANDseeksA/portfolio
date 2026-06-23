import { cn } from "@/lib/utils"

export function Button({ children, className, variant = "default", size = "default", asChild, ...props }) {
  const variants = {
    default: "bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg shadow-indigo-500/20",
    outline: "border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5",
    secondary: "bg-white/5 text-slate-300 hover:bg-white/10",
  }
  const sizes = {
    default: "px-5 py-2.5 text-sm",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-7 py-3.5 text-base",
  }
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
