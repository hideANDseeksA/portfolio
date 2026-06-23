/**
 * useContactGuard — client-side abuse protection for the contact form.
 *
 * Layers:
 *  1. Cooldown  — 60 s between submissions (localStorage timestamp)
 *  2. Daily cap — max 3 sends per calendar day (localStorage counter + date)
 *  3. Honeypot  — a hidden <input> field; bots fill it, humans don't
 *  4. Min-time  — form must be open ≥ 3 s before submit (bot speed check)
 *  5. Cache     — last successful send is cached; surfaced to caller
 *
 * Returns:
 *  { canSubmit, cooldownLeft, reason, validate, recordSend, lastSent }
 */

import { useState, useEffect, useRef } from "react"

const STORAGE_KEY  = "contact_meta"   // { lastSent, dailyCount, dailyDate }
const COOLDOWN_MS  = 60_000           // 60 seconds between sends
const DAILY_LIMIT  = 3               // max sends per day
const MIN_OPEN_MS  = 3_000           // form must be visible ≥ 3 s

function readMeta() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")
  } catch {
    return {}
  }
}

function writeMeta(meta) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(meta)) } catch {}
}

export function useContactGuard() {
  const openedAt = useRef(Date.now())
  const [now, setNow]           = useState(Date.now())
  const [meta, setMeta]         = useState(readMeta)

  // Tick every second so cooldown countdown updates live
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1_000)
    return () => clearInterval(id)
  }, [])

  const today        = new Date().toISOString().slice(0, 10)  // "YYYY-MM-DD"
  const lastSent     = meta.lastSent ? new Date(meta.lastSent) : null
  const cooldownLeft = meta.lastSent
    ? Math.max(0, Math.ceil((meta.lastSent + COOLDOWN_MS - now) / 1000))
    : 0

  const dailyCount = meta.dailyDate === today ? (meta.dailyCount || 0) : 0
  const dailyLeft  = DAILY_LIMIT - dailyCount

  // Derive reason string for UI
  let reason = ""
  if (cooldownLeft > 0) reason = `Please wait ${cooldownLeft}s before sending again.`
  else if (dailyLeft <= 0) reason = "You've reached the daily message limit (3). Try again tomorrow."

  const canSubmit = cooldownLeft === 0 && dailyLeft > 0

  /**
   * validate({ honeypot })
   * Call before emailjs.send(). Throws a string error message on failure.
   */
  function validate({ honeypot = "" } = {}) {
    if (honeypot.trim() !== "") throw "Bot detected."
    const openMs = Date.now() - openedAt.current
    if (openMs < MIN_OPEN_MS) throw "Submitted too fast. Please try again."
    if (!canSubmit) throw reason
  }

  /**
   * recordSend()
   * Call after a successful send to update localStorage counters.
   */
  function recordSend() {
    const newMeta = {
      lastSent:   Date.now(),
      dailyDate:  today,
      dailyCount: dailyCount + 1,
    }
    writeMeta(newMeta)
    setMeta(newMeta)
  }

  return { canSubmit, cooldownLeft, dailyLeft, reason, validate, recordSend, lastSent }
}
