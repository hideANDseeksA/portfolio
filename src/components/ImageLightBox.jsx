import { useEffect } from "react"
import { X } from "lucide-react"

/**
 * Full-screen image viewer. Click any project thumbnail to inspect it
 * properly instead of being stuck with a cropped card-sized preview.
 */
export function ImageLightbox({ image, alt, accent, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
      style={{ animation: "fadeUp 0.25s ease backwards, revealScale 0.25s ease" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
      >
        <X size={20} />
      </button>

      <div
        className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden border"
        style={{ borderColor: `color-mix(in srgb, ${accent} 35%, transparent)`, boxShadow: `0 30px 80px -20px color-mix(in srgb, ${accent} 45%, transparent)` }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image} alt={alt} className="w-full h-full object-contain max-h-[85vh] bg-[#0A0F1E]" />
      </div>
    </div>
  )
}
