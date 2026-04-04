"use client"

import Image from "next/image"
import { useState, useEffect, useRef, useCallback } from "react"
import { X, Send, Loader2, Minus, RotateCcw, ChevronRight, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  role: "user" | "assistant"
  content: string
}

// ─── RICH TEXT ────────────────────────────────────────────────────────────────

function RichText({ text }: { text: string }) {
  const lines = text.split("\n").reduce<string[]>((acc, line, i, arr) => {
    if (line.trim() === "" && i > 0 && arr[i - 1].trim() === "") return acc
    acc.push(line)
    return acc
  }, [])

  const inline = (str: string): React.ReactNode[] =>
    str.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).map((p, i) => {
      if (p.startsWith("**") && p.endsWith("**"))
        return <strong key={i} style={{ fontWeight: 700, color: "#0D0D0D" }}>{p.slice(2, -2)}</strong>
      if (p.startsWith("*") && p.endsWith("*"))
        return <em key={i} style={{ color: "#555" }}>{p.slice(1, -1)}</em>
      if (p.startsWith("`") && p.endsWith("`"))
        return <code key={i} style={{ background: "#F0EBE3", color: "#0D0D0D", padding: "1px 5px", fontSize: 10, fontFamily: "monospace", border: "1px solid #E2DDD4" }}>{p.slice(1, -1)}</code>
      return <span key={i}>{p}</span>
    })

  const els: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const t = lines[i].trim()
    if (!t) { els.push(<div key={`s${i}`} style={{ height: 6 }} />); i++; continue }

    if (/^(\d+)[.)]\s/.test(t)) {
      const items: { n: string; text: string }[] = []
      while (i < lines.length) {
        const m = lines[i].trim().match(/^(\d+)[.)]\s+(.+)$/)
        if (!m) break
        items.push({ n: m[1], text: m[2] }); i++
      }
      els.push(
        <ol key={`ol${i}`} style={{ margin: "8px 0", display: "flex", flexDirection: "column", gap: 6 }}>
          {items.map((it, ix) => (
            <li key={ix} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <span style={{ flexShrink: 0, width: 16, height: 16, background: "#0D0D0D", color: "white", fontSize: 8, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2, fontFamily: "system-ui" }}>
                {it.n}
              </span>
              <span style={{ fontSize: 12, lineHeight: 1.7, color: "#333", fontFamily: "'Georgia', serif" }}>{inline(it.text)}</span>
            </li>
          ))}
        </ol>
      )
      continue
    }

    if (/^[-•]\s/.test(t)) {
      const items: string[] = []
      while (i < lines.length) {
        const m = lines[i].trim().match(/^[-•]\s+(.+)$/)
        if (!m) break
        items.push(m[1]); i++
      }
      els.push(
        <ul key={`ul${i}`} style={{ margin: "6px 0", display: "flex", flexDirection: "column", gap: 5 }}>
          {items.map((b, ix) => (
            <li key={ix} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <span style={{ flexShrink: 0, marginTop: 7, width: 4, height: 4, background: "#C59A2E", transform: "rotate(45deg)", display: "inline-block" }} />
              <span style={{ fontSize: 12, lineHeight: 1.7, color: "#333", fontFamily: "'Georgia', serif" }}>{inline(b)}</span>
            </li>
          ))}
        </ul>
      )
      continue
    }

    const hm = t.match(/^(#{1,3})\s+(.+)$/)
    if (hm) {
      els.push(
        <p key={`h${i}`} style={{ fontSize: 9, fontWeight: 800, color: "#0D0D0D", textTransform: "uppercase", letterSpacing: "0.18em", fontFamily: "system-ui", marginTop: 12, marginBottom: 4, borderBottom: "1px solid #E2DDD4", paddingBottom: 4 }}>
          {inline(hm[2])}
        </p>
      )
      i++; continue
    }

    if (t === "---") {
      els.push(<div key={`hr${i}`} style={{ height: 1, background: "#E2DDD4", margin: "10px 0" }} />)
      i++; continue
    }

    els.push(
      <p key={`p${i}`} style={{ fontSize: 12, lineHeight: 1.8, color: "#333", fontFamily: "'Georgia', serif" }}>
        {inline(t)}
      </p>
    )
    i++
  }

  return <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>{els}</div>
}

// ─── TYPING INDICATOR ─────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "10px 12px" }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{
          width: 4, height: 4,
          background: "#C59A2E",
          display: "inline-block",
          borderRadius: 2,
          animation: `ufBounce 1.1s ${i * 0.16}s ease-in-out infinite`,
        }} />
      ))}
    </div>
  )
}

// ─── BUBBLE ───────────────────────────────────────────────────────────────────

function Bubble({ msg, isNew }: { msg: Message; isNew: boolean }) {
  const isUser = msg.role === "user"
  return (
    <motion.div
      initial={isNew ? { opacity: 0, y: 8 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      style={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start", alignItems: "flex-end", gap: 8 }}
    >
      {!isUser && (
        <div style={{ width: 22, height: 22, flexShrink: 0, overflow: "hidden", border: "1px solid #E2DDD4", marginBottom: 2 }}>
          <Image src="/robot.jpg" alt="Atlas" width={22} height={22} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
        </div>
      )}
      {isUser ? (
        <div style={{ maxWidth: "80%", padding: "8px 12px", background: "#0D0D0D", borderLeft: "2px solid #C59A2E" }}>
          <span style={{ fontSize: 12, color: "#F0EBE0", fontFamily: "'Georgia', serif", lineHeight: 1.6 }}>{msg.content}</span>
        </div>
      ) : (
        <div style={{ maxWidth: "82%", padding: "10px 12px", background: "#FFFFFF", border: "1px solid #E8E3DB", borderLeft: "2px solid #C59A2E" }}>
          <RichText text={msg.content} />
        </div>
      )}
    </motion.div>
  )
}

// ─── QUICK PROMPTS ────────────────────────────────────────────────────────────

const PROMPTS = [
  { q: "Top global AI startups 2026?", cat: "Global" },
  { q: "How to list my startup free?", cat: "Registry" },
  { q: "Hottest sectors worldwide?", cat: "Trends" },
  { q: "What's a UFRN number?", cat: "Verify" },
]

// ─── MAIN CHATBOT ─────────────────────────────────────────────────────────────

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [badge, setBadge] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)
  const [msgs, setMsgs] = useState<Message[]>([{
    role: "assistant",
    content: "Hello — I'm **Atlas**, UpForge's global intelligence AI.\n\nI cover:\n- Verified startup data across 40+ countries\n- Unicorn founders & funding intelligence\n- Sector trends and market analysis\n- How to list or verify your startup\n\nWhat would you like to explore?",
  }])
  const [justAdded, setJustAdded] = useState<Set<number>>(new Set())

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(true), 3000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [msgs, loading])

  useEffect(() => {
    if (isOpen && !minimized) {
      setShowTooltip(false)
      setTimeout(() => inputRef.current?.focus(), 120)
    }
  }, [isOpen, minimized])

  useEffect(() => { if (isOpen) setBadge(0) }, [isOpen])

  const send = useCallback(async (text?: string) => {
    const msg = (text ?? input).trim()
    if (!msg || loading) return
    const userMsg: Message = { role: "user", content: msg }
    const nextIdx = msgs.length + 1
    setMsgs(p => [...p, userMsg])
    setJustAdded(p => new Set(p).add(msgs.length))
    setInput("")
    setLoading(true)
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...msgs, userMsg] }),
      })
      const data = await res.json()
      const reply = data.message ?? data.error ?? "Couldn't process that — please try again."
      setMsgs(p => [...p, { role: "assistant", content: reply }])
      setJustAdded(p => new Set(p).add(nextIdx))
      if (!isOpen) setBadge(c => c + 1)
    } catch {
      setMsgs(p => [...p, { role: "assistant", content: "Network issue — please try again." }])
    } finally {
      setLoading(false)
    }
  }, [input, loading, msgs, isOpen])

  const reset = () => {
    setMsgs([{
      role: "assistant",
      content: "Hello — I'm **Atlas**, UpForge's global intelligence AI.\n\nI cover:\n- Verified startup data across 40+ countries\n- Unicorn founders & funding intelligence\n- Sector trends and market analysis\n- How to list or verify your startup\n\nWhat would you like to explore?",
    }])
    setJustAdded(new Set())
    setInput("")
  }

  return (
    <>
      <style>{`
        @keyframes ufBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes ufPulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.06); }
        }
        @keyframes ufSpin { to { transform: rotate(360deg); } }
        .uf-chat-scroll::-webkit-scrollbar { width: 2px; }
        .uf-chat-scroll::-webkit-scrollbar-thumb { background: #E2DDD4; }
        .uf-prompt:hover { background: #0D0D0D !important; border-color: #0D0D0D !important; }
        .uf-prompt:hover .pcat { color: #C59A2E !important; }
        .uf-prompt:hover .plabel { color: #F0EBE0 !important; }
        .uf-prompt:hover .parrow { opacity: 1 !important; }
        .uf-send:not([disabled]):hover { background: #C59A2E !important; border-color: #C59A2E !important; }
        .uf-input:focus { outline: none; border-color: #0D0D0D !important; box-shadow: inset 0 0 0 1px #0D0D0D; }
      `}</style>

      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

        {/* Chat window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Atlas — UpForge Global Intelligence"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                marginBottom: 12,
                width: "min(92vw, 368px)",
                height: minimized ? "auto" : "min(560px, 80vh)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                background: "#FFFCF7",
                border: "1px solid #E2DDD4",
                borderTop: "3px solid #C59A2E",
                boxShadow: "0 24px 64px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              {/* Header */}
              <div style={{ background: "#0D0D0D", flexShrink: 0 }}>
                {/* Gold rule */}
                <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #C59A2E 30%, #E8C547 50%, #C59A2E 70%, transparent)" }} />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px 10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {/* Avatar */}
                    <div style={{ position: "relative", flexShrink: 0 }}>
                      <div style={{ width: 32, height: 32, overflow: "hidden", border: "1.5px solid #C59A2E" }}>
                        <Image src="/robot.jpg" alt="Atlas" width={32} height={32} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} priority />
                      </div>
                      <span style={{ position: "absolute", bottom: -1, right: -1, width: 8, height: 8, background: "#22C55E", borderRadius: "50%", border: "1.5px solid #0D0D0D" }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Georgia', serif", fontSize: 13, fontWeight: 700, color: "#F0EBE0", lineHeight: 1 }}>
                        Atlas
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 3 }}>
                        <Globe size={8} style={{ color: "#C59A2E" }} />
                        <span style={{ fontSize: 9, color: "#555", letterSpacing: "0.12em", fontFamily: "system-ui", textTransform: "uppercase" }}>
                          UpForge Global Intelligence
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {[
                      { Icon: RotateCcw, label: "Reset", action: reset },
                      { Icon: Minus, label: minimized ? "Expand" : "Minimise", action: () => setMinimized(v => !v) },
                      { Icon: X, label: "Close", action: () => setIsOpen(false) },
                    ].map(({ Icon, label, action }) => (
                      <button
                        key={label}
                        onClick={action}
                        aria-label={label}
                        style={{ padding: 6, color: "rgba(255,255,255,0.25)", cursor: "pointer", background: "none", border: "none", transition: "color 0.15s", display: "flex" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#C59A2E")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
                      >
                        <Icon style={{ width: 12, height: 12 }} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Collapsible body */}
              <AnimatePresence initial={false}>
                {!minimized && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden", minHeight: 0 }}
                  >
                    {/* Messages */}
                    <div
                      ref={scrollRef}
                      aria-live="polite"
                      className="uf-chat-scroll"
                      style={{ flex: 1, overflowY: "auto", padding: "16px 14px", display: "flex", flexDirection: "column", gap: 12, background: "#FDFAF5" }}
                    >
                      {/* Date stamp */}
                      <div style={{ textAlign: "center", fontSize: 9, color: "#CCC", letterSpacing: "0.18em", fontFamily: "system-ui", textTransform: "uppercase", marginBottom: 4 }}>
                        {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} · Global Edition
                      </div>

                      {msgs.map((m, idx) => (
                        <Bubble key={idx} msg={m} isNew={justAdded.has(idx)} />
                      ))}

                      {loading && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
                          <div style={{ width: 22, height: 22, overflow: "hidden", border: "1px solid #E2DDD4", flexShrink: 0 }}>
                            <Image src="/robot.jpg" alt="" width={22} height={22} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                          </div>
                          <div style={{ background: "#FFFFFF", border: "1px solid #E8E3DB", borderLeft: "2px solid #C59A2E" }}>
                            <TypingDots />
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Quick prompts */}
                    {msgs.length === 1 && (
                      <div style={{ padding: "12px 14px", borderTop: "1px solid #E8E3DB", background: "#F5F1EA", flexShrink: 0 }}>
                        <div style={{ fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: "#AAA", fontFamily: "system-ui", fontWeight: 700, marginBottom: 8 }}>
                          Explore —
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          {PROMPTS.map((p, idx) => (
                            <button
                              key={idx}
                              onClick={() => send(p.q)}
                              className="uf-prompt"
                              style={{
                                textAlign: "left",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "8px 10px",
                                background: "white",
                                border: "1px solid #E2DDD4",
                                cursor: "pointer",
                                transition: "all 0.15s",
                              }}
                            >
                              <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
                                <span className="pcat" style={{ fontSize: 7.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: "#C59A2E", fontFamily: "system-ui", flexShrink: 0, transition: "color 0.15s" }}>
                                  {p.cat}
                                </span>
                                <span className="plabel" style={{ fontSize: 11.5, color: "#333", fontFamily: "'Georgia', serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", transition: "color 0.15s" }}>
                                  {p.q}
                                </span>
                              </div>
                              <ChevronRight className="parrow" style={{ width: 10, height: 10, color: "#C59A2E", opacity: 0, flexShrink: 0, transition: "opacity 0.15s" }} />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Input */}
                    <div style={{ padding: "12px 14px", borderTop: "1px solid #E2DDD4", background: "#FFFCF7", flexShrink: 0 }}>
                      <div style={{ display: "flex", alignItems: "stretch", gap: 8 }}>
                        <input
                          ref={inputRef}
                          value={input}
                          disabled={loading}
                          onChange={e => setInput(e.target.value)}
                          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send() } }}
                          placeholder="Ask about global startups…"
                          aria-label="Message Atlas"
                          className="uf-input"
                          style={{
                            flex: 1,
                            padding: "9px 12px",
                            fontSize: 12,
                            fontFamily: "'Georgia', serif",
                            background: "#FDFAF5",
                            border: "1px solid #E2DDD4",
                            color: "#0D0D0D",
                            outline: "none",
                            transition: "border-color 0.15s",
                          }}
                        />
                        <button
                          onClick={() => send()}
                          disabled={loading || !input.trim()}
                          aria-label="Send"
                          className="uf-send"
                          style={{
                            width: 38,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: loading || !input.trim() ? "#F0EBE3" : "#0D0D0D",
                            color: loading || !input.trim() ? "#CCC" : "white",
                            border: `1px solid ${loading || !input.trim() ? "#E2DDD4" : "#0D0D0D"}`,
                            cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                            transition: "all 0.15s",
                            flexShrink: 0,
                          }}
                        >
                          {loading
                            ? <Loader2 style={{ width: 13, height: 13, animation: "ufSpin 1s linear infinite" }} />
                            : <Send style={{ width: 13, height: 13 }} />
                          }
                        </button>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 7 }}>
                        <span style={{ fontSize: 9, color: "#CCC", fontFamily: "system-ui", letterSpacing: "0.1em" }}>
                          Atlas · UpForge · No paid placements
                        </span>
                        <span style={{ fontSize: 9, color: "#CCC", fontFamily: "system-ui" }}>⏎ send</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && showTooltip && msgs.length === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.2 }}
              style={{ position: "absolute", right: 62, bottom: 12, pointerEvents: "none" }}
            >
              <div style={{
                background: "#0D0D0D",
                border: "1px solid #2A2520",
                padding: "8px 14px",
                whiteSpace: "nowrap",
                boxShadow: "3px 3px 0 #2A2520",
                borderTop: "2px solid #C59A2E",
                position: "relative",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Globe size={10} style={{ color: "#C59A2E" }} />
                  <div>
                    <div style={{ fontFamily: "'Georgia', serif", fontSize: 11, fontWeight: 700, color: "#F0EBE0" }}>
                      Ask <span style={{ color: "#C59A2E" }}>Atlas</span>
                    </div>
                    <div style={{ fontSize: 8, color: "#555", letterSpacing: "0.1em", fontFamily: "system-ui", marginTop: 2 }}>
                      Global Startup Intelligence · Free
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <div style={{
                  position: "absolute",
                  right: -6, top: "50%", transform: "translateY(-50%)",
                  width: 0, height: 0,
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                  borderLeft: "6px solid #0D0D0D",
                }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAB */}
        <button
          onClick={() => { setIsOpen(v => !v); setMinimized(false); setShowTooltip(false) }}
          aria-label="Open Atlas — UpForge Global Intelligence"
          style={{ position: "relative", width: 52, height: 52, flexShrink: 0 }}
        >
          {/* Pulse ring */}
          <span style={{
            position: "absolute",
            inset: -6,
            border: "1px solid rgba(197,154,46,0.2)",
            animation: "ufPulse 3s ease-in-out infinite",
            pointerEvents: "none",
          }} />

          {/* Face */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "#0D0D0D",
            border: "1.5px solid #C59A2E",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3), 2px 2px 0 #C59A2E",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}>
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.15 }}
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <X style={{ width: 16, height: 16, color: "white" }} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <div style={{ flex: 1, overflow: "hidden" }}>
                    <Image src="/robot.jpg" alt="Atlas AI" width={52} height={44} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} priority />
                  </div>
                  <div style={{ height: 12, background: "#C59A2E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 6, fontWeight: 900, color: "#0D0D0D", letterSpacing: "0.22em", fontFamily: "system-ui" }}>ATLAS</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Badge */}
          <AnimatePresence>
            {!isOpen && badge > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                style={{
                  position: "absolute", top: -4, right: -4, zIndex: 10,
                  minWidth: 16, height: 16,
                  background: "#C59A2E", color: "#0D0D0D",
                  fontSize: 8, fontFamily: "system-ui", fontWeight: 900,
                  border: "1.5px solid white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "0 3px",
                }}
              >
                {badge > 9 ? "9+" : badge}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </>
  )
}
