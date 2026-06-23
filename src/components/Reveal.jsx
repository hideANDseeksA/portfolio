import { useReveal } from "@/lib/useReveal"

/**
 * Declarative scroll-reveal wrapper.
 *   <Reveal as="div" direction="up" delay={120}>...</Reveal>
 * direction: "up" | "left" | "right" | "scale"
 * delay: ms, staggers children when mapped over a list
 */
export function Reveal({ as: Tag = "div", direction = "up", delay = 0, className = "", style, children, ...props }) {
  const ref = useReveal()
  return (
    <Tag
      ref={ref}
      data-reveal={direction}
      className={className}
      style={{ ...style, "--reveal-delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
