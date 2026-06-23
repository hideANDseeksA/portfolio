import { useEffect, useRef } from "react"

/**
 * Attaches an IntersectionObserver to the returned ref and adds the
 * `is-visible` class once the element scrolls into view. Pairs with the
 * [data-reveal] CSS in index.css. Unobserves after first reveal so it
 * never re-triggers on scroll-up (keeps things calm, not jumpy).
 */
export function useReveal({ threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible")
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
