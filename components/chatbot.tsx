"use client"

// components/chatbot.tsx — GLOBAL AUTHORITY v5
// Redesigned: editorial magazine aesthetic, matches UpForge brand perfectly
// Floating panel with serif typography, maroon accent, global intelligence look
// Messages: clean cards, not bubbles — editorial style

import Image from "next/image"
import { useState, useEffect, useRef, useCallback } from "react"
import { X, Send, Loader2, Minus, RotateCcw, Globe, ChevronRight, Sparkles } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

// ─── RICH TEXT ───────────────────────────────────────────────────────────────

function RichText({ text }: { text: string }) {
  const lines = text.split("\n").reduce<string[]>((acc, line, i, arr) => {
    if (line.trim() === "" && i > 0 && arr[i - 1].trim() === "") return acc
    acc.push(line)
    return acc
  }, [])

  const inline = (str: string): React.ReactNode[] =>
    str.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).map((p, i) => {
      if (p.startsWith("**") && p.endsWith("**"))
        return <strong key={i} style={{ fontWeight: 700, color: "#1a0a0a" }}>{p.slice(2, -2)}</strong>
      if (p.startsWith("*") && p.endsWith("*"))
        return <em key={i} style={{ color: "#5a4040", fontStyle: "italic" }}>{p.slice(1, -1)}</em>
      if (p.startsWith("`") && p.endsWith("`"))
        return (
          <code key={i} style={{
            background: "#f5f0e8", color: "#8b1a1a", padding: "1px 5px",
            fontSize: 10, fontFamily: "monospace", border: "1px solid #e8ddd0",
          }}>
            {p.slice(1, -1)}
          </code>
        )
      return <span key={i}>{p}</span>
    })

  const els: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const t = lines[i].trim()
    if (!t) { els.push(<div key={`s${i}`} style={{ height: 4 }} />); i++; continue }

    if (/^(\d+)[.)]\s/.test(t)) {
      const items: { n: string; text: string }[] = []
      while (i < lines.length) {
        const m = lines[i].trim().match(/^(\d+)[.)]\s+(.+)$/)
        if (!m) break
        items.push({ n: m[1], text: m[2] }); i++
      }
      els.push(
        <div key={`ol${i}`} style={{ display: "flex", flexDirection: "column", gap: 4, margin: "5px 0" }}>
          {items.map((it, ix) => (
            <div key={ix} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{
                flexShrink: 0, fontFamily: "system-ui", fontSize: 8, fontWeight: 800,
                color: "#8b1a1a", minWidth: 14, paddingTop: 3,
              }}>
                {it.n}.
              </span>
              <span style={{ fontSize: 12, lineHeight: 1.7, color: "#2a1a10", fontFamily: "'Times New Roman', Georgia, serif" }}>
                {inline(it.text)}
              </span>
            </div>
          ))}
        </div>
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
        <div key={`ul${i}`} style={{ display: "flex", flexDirection: "column", gap: 3, margin: "5px 0" }}>
          {items.map((b, ix) => (
            <div key={ix} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, marginTop: 7, width: 3, height: 3, background: "#8b1a1a" }} />
              <span style={{ fontSize: 12, lineHeight: 1.7, color: "#2a1a10", fontFamily: "'Times New Roman', Georgia, serif" }}>
                {inline(b)}
              </span>
            </div>
          ))}
        </div>
      )
      continue
    }

    const hm = t.match(/^(#{1,3})\s+(.+)$/)
    if (hm) {
      els.push(
        <p key={`h${i}`} style={{
          fontSize: 8, fontWeight: 800, color: "#8b6a6a",
          textTransform: "uppercase", letterSpacing: "0.18em",
          fontFamily: "system-ui", marginTop: 10, marginBottom: 2,
        }}>
          {inline(hm[2])}
        </p>
      )
      i++; continue
    }

    if (t === "---") {
      els.push(<div key={`hr${i}`} style={{ height: 1, background: "#e8ddd0", margin: "8px 0" }} />)
      i++; continue
    }

    els.push(
      <p key={`p${i}`} style={{
        fontSize: 12.5, lineHeight: 1.78, color: "#2a1a10",
        fontFamily: "'Times New Roman', Georgia, serif", margin: 0,
      }}>
        {inline(t)}
      </p>
    )
    i++
  }

  return <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>{els}</div>
}

// ─── TYPING INDICATOR ────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "6px 0" }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{
          width: 5, height: 5, background: "#c9b99a",
          display: "inline-block",
          animation: `forgeDot 1.2s ${i * 0.18}s ease-in-out infinite`,
        }} />
      ))}
    </div>
  )
}

// ─── QUICK PROMPTS ───────────────────────────────────────────────────────────

const PROMPTS = [
  { q: "Top global AI startups 2026?", cat: "Global" },
  { q: "How do I list my startup on UpForge?", cat: "Registry" },
  { q: "What sectors are growing fastest globally?", cat: "Trends" },
  { q: "What is a UFRN number and why do I need it?", cat: "Verify" },
]

// ─── MAIN ────────────────────────────────────────────────────────────────────

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [badge, setBadge] = useState(0)
  const [showTip, setShowTip] = useState(false)
  const [msgs, setMsgs] = useState<Message[]>([{
    role: "assistant",
    content: "I'm **forge** — UpForge's global startup intelligence.\n\nAsk me about:\n- Verified startups across 50+ countries\n- Funding data, unicorns, sector trends\n- How to list or verify a startup via UFRN\n\nWhat would you like to explore?",
  }])
  const [newIdxs, setNewIdxs] = useState<Set<number>>(new Set())

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 4000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [msgs, loading])

  useEffect(() => {
    if (isOpen && !minimized) {
      setShowTip(false)
      setTimeout(() => inputRef.current?.focus(), 80)
    }
  }, [isOpen, minimized])

  useEffect(() => { if (isOpen) setBadge(0) }, [isOpen])

  const send = useCallback(async (text?: string) => {
    const msg = (text ?? input).trim()
    if (!msg || loading) return
    const userMsg: Message = { role: "user", content: msg }
    const nextIdx = msgs.length + 1
    setMsgs(p => [...p, userMsg])
    setNewIdxs(p => new Set(p).add(msgs.length))
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
      setNewIdxs(p => new Set(p).add(nextIdx))
      if (!isOpen) setBadge(c => c + 1)
    } catch {
      setMsgs(p => [...p, { role: "assistant", content: "Network issue — please try again shortly." }])
    } finally {
      setLoading(false)
    }
  }, [input, loading, msgs, isOpen])

  const reset = () => {
    setMsgs([{
      role: "assistant",
      content: "I'm **forge** — UpForge's global startup intelligence.\n\nAsk me about:\n- Verified startups across 50+ countries\n- Funding data, unicorns, sector trends\n- How to list or verify a startup via UFRN\n\nWhat would you like to explore?",
    }])
    setNewIdxs(new Set())
    setInput("")
  }

  return (
    <>
      <style>{`
        @keyframes forgeDot {
          0%,60%,100% { opacity:.3; transform:translateY(0); }
          30% { opacity:1; transform:translateY(-3px); }
        }
        @keyframes forgeIn {
          from { opacity:0; transform:translateY(10px) scale(0.98); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes forgePulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(139,26,26,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(139,26,26,0); }
        }
        @keyframes forgeSpin { to { transform:rotate(360deg); } }
        .forge-scroll::-webkit-scrollbar { width: 2px; }
        .forge-scroll::-webkit-scrollbar-thumb { background: #e8ddd0; }
        .forge-prompt:hover { background: #f5f0e8 !important; border-color: #8b1a1a !important; }
        .forge-input:focus { outline: none; border-color: #8b1a1a !important; }
        .forge-send:not([disabled]):hover { background: #6b1212 !important; }
        .forge-ctrl:hover { color: #8b1a1a !important; }
      `}</style>

      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

        {/* ── PANEL ─── */}
        {isOpen && (
          <div style={{
            marginBottom: 12,
            width: "min(94vw, 380px)",
            height: minimized ? "auto" : "min(560px, 78vh)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            background: "#faf7f2",
            border: "1px solid #e8ddd0",
            borderTop: "3px solid #8b1a1a",
            boxShadow: "0 20px 60px rgba(26,10,10,0.18), 0 4px 12px rgba(26,10,10,0.08)",
            animation: "forgeIn 0.2s cubic-bezier(0.16,1,0.3,1) forwards",
          }}>

            {/* Header */}
            <div style={{ background: "#1a0a0a", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", padding: "10px 14px", gap: 10 }}>
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div style={{ width: 30, height: 30, overflow: "hidden", border: "1px solid #3d1515" }}>
                    <Image src="/robot.jpg" alt="forge" width={30} height={30} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} priority />
                  </div>
                  <span style={{ position: "absolute", bottom: -1, right: -1, width: 8, height: 8, background: "#22C55E", border: "1.5px solid #1a0a0a" }} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontFamily: "'Times New Roman', Georgia, serif", fontSize: 14, fontWeight: 700, color: "#faf7f2" }}>forge</span>
                    <span style={{ fontSize: 7, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#c9b99a", fontFamily: "system-ui", border: "1px solid #3d1515", padding: "1px 5px" }}>AI</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                    <Globe size={8} style={{ color: "#c9b99a", flexShrink: 0 }} />
                    <span style={{ fontSize: 8.5, color: "#8b6a6a", letterSpacing: "0.1em", fontFamily: "system-ui", textTransform: "uppercase" }}>
                      UpForge Global Intelligence
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 2 }}>
                  {([
                    ["Reset", <RotateCcw key="r" style={{ width: 10, height: 10 }} />, reset],
                    [minimized ? "Expand" : "Minimise", <Minus key="m" style={{ width: 10, height: 10 }} />, () => setMinimized(v => !v)],
                    ["Close", <X key="x" style={{ width: 10, height: 10 }} />, () => setIsOpen(false)],
                  ] as [string, React.ReactNode, () => void][]).map(([label, icon, fn]) => (
                    <button
                      key={label}
                      onClick={fn}
                      aria-label={label}
                      className="forge-ctrl"
                      style={{ padding: "4px 5px", background: "none", border: "none", cursor: "pointer", color: "#5a4040", display: "flex", alignItems: "center", transition: "color .12s" }}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Body */}
            {!minimized && (
              <>
                {/* Messages */}
                <div
                  ref={scrollRef}
                  aria-live="polite"
                  className="forge-scroll"
                  style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "16px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    background: "#fdfaf5",
                  }}
                >
                  {/* Date divider */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 0 4px" }}>
                    <div style={{ flex: 1, height: 1, background: "#e8ddd0" }} />
                    <span style={{ fontSize: 8, color: "#c9b99a", letterSpacing: "0.18em", fontFamily: "system-ui", textTransform: "uppercase" }}>
                      {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <div style={{ flex: 1, height: 1, background: "#e8ddd0" }} />
                  </div>

                  {msgs.map((m, idx) => {
                    const isUser = m.role === "user"
                    return (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: isUser ? "flex-end" : "flex-start",
                          animation: newIdxs.has(idx) ? "forgeIn 0.18s ease forwards" : "none",
                        }}
                      >
                        {/* Role label */}
                        <span style={{
                          fontSize: 7.5,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.18em",
                          color: isUser ? "#8b6a6a" : "#8b1a1a",
                          fontFamily: "system-ui",
                          marginBottom: 3,
                          paddingLeft: isUser ? 0 : 0,
                        }}>
                          {isUser ? "You" : "Forge"}
                        </span>

                        {isUser ? (
                          // User message — dark card, right aligned
                          <div style={{
                            maxWidth: "82%",
                            padding: "9px 12px",
                            background: "#1a0a0a",
                            borderLeft: "3px solid #8b1a1a",
                          }}>
                            <span style={{ fontSize: 12.5, color: "#f0ebe0", fontFamily: "'Times New Roman', Georgia, serif", lineHeight: 1.68 }}>
                              {m.content}
                            </span>
                          </div>
                        ) : (
                          // Assistant message — parchment card, left aligned
                          <div style={{
                            maxWidth: "90%",
                            padding: "10px 12px",
                            background: "#fff",
                            border: "1px solid #e8ddd0",
                            borderLeft: "3px solid #c9b99a",
                          }}>
                            <RichText text={m.content} />
                          </div>
                        )}
                      </div>
                    )
                  })}

                  {loading && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      <span style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#8b1a1a", fontFamily: "system-ui", marginBottom: 3 }}>Forge</span>
                      <div style={{ background: "#fff", border: "1px solid #e8ddd0", borderLeft: "3px solid #c9b99a", padding: "0 12px" }}>
                        <TypingDots />
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick prompts — only on first message */}
                {msgs.length === 1 && (
                  <div style={{ padding: "10px 14px 6px", borderTop: "1px solid #e8ddd0", background: "#f5f0e8", flexShrink: 0 }}>
                    <div style={{ fontSize: 7.5, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b6a6a", fontFamily: "system-ui", fontWeight: 700, marginBottom: 6, display: "flex", alignItems: "center", gap: 4 }}>
                      <Sparkles size={8} color="#8b1a1a" />
                      Try asking
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                      {PROMPTS.map((p, idx) => (
                        <button
                          key={idx}
                          onClick={() => send(p.q)}
                          className="forge-prompt"
                          style={{
                            textAlign: "left",
                            padding: "7px 10px",
                            background: "#fff",
                            border: "1px solid #e8ddd0",
                            cursor: "pointer",
                            transition: "background .12s, border-color .12s",
                          }}
                        >
                          <span style={{ fontSize: 7, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: "#8b1a1a", fontFamily: "system-ui", display: "block", marginBottom: 2 }}>
                            {p.cat}
                          </span>
                          <span style={{ fontSize: 10.5, color: "#3d2b2b", fontFamily: "'Times New Roman', Georgia, serif", lineHeight: 1.4, display: "block" }}>
                            {p.q}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div style={{ padding: "10px 14px", borderTop: "1px solid #e8ddd0", background: "#faf7f2", flexShrink: 0 }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <input
                      ref={inputRef}
                      value={input}
                      disabled={loading}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send() } }}
                      placeholder="Ask about startups, unicorns, UFRN…"
                      aria-label="Message forge"
                      className="forge-input"
                      style={{
                        flex: 1, padding: "9px 11px", fontSize: 12.5,
                        fontFamily: "'Times New Roman', Georgia, serif",
                        background: "#fff", border: "1px solid #e8ddd0",
                        color: "#1a0a0a", outline: "none",
                        transition: "border-color .15s",
                      }}
                    />
                    <button
                      onClick={() => send()}
                      disabled={loading || !input.trim()}
                      aria-label="Send"
                      className="forge-send"
                      style={{
                        width: 38, flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: loading || !input.trim() ? "#f5f0e8" : "#8b1a1a",
                        color: loading || !input.trim() ? "#c9b99a" : "#faf7f2",
                        border: "1px solid",
                        borderColor: loading || !input.trim() ? "#e8ddd0" : "#8b1a1a",
                        cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                        transition: "background .12s, border-color .12s",
                      }}
                    >
                      {loading
                        ? <Loader2 style={{ width: 13, height: 13, animation: "forgeSpin 1s linear infinite" }} />
                        : <Send style={{ width: 13, height: 13 }} />}
                    </button>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
                    <span style={{ fontSize: 8.5, color: "#c9b99a", fontFamily: "system-ui", letterSpacing: "0.06em" }}>
                      forge · UpForge · No paid placements
                    </span>
                    <span style={{ fontSize: 8.5, color: "#c9b99a", fontFamily: "system-ui" }}>⏎ send</span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* ── TOOLTIP ─── */}
        {!isOpen && showTip && msgs.length === 1 && (
          <div style={{ position: "absolute", right: 60, bottom: 14, pointerEvents: "none", animation: "forgeIn 0.2s ease forwards" }}>
            <div style={{
              background: "#1a0a0a",
              border: "1px solid #3d1515",
              borderTop: "2px solid #8b1a1a",
              padding: "8px 14px",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              position: "relative",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Globe size={10} style={{ color: "#c9b99a" }} />
                <div>
                  <div style={{ fontFamily: "'Times New Roman', Georgia, serif", fontSize: 12, fontWeight: 700, color: "#faf7f2" }}>
                    Ask <span style={{ color: "#c9b99a" }}>forge</span>
                  </div>
                  <div style={{ fontSize: 8.5, color: "#5a4040", letterSpacing: "0.1em", fontFamily: "system-ui", marginTop: 1 }}>
                    Global startup intelligence · Free
                  </div>
                </div>
              </div>
              {/* Arrow */}
              <div style={{ position: "absolute", right: -6, top: "50%", transform: "translateY(-50%)", width: 0, height: 0, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: "6px solid #1a0a0a" }} />
            </div>
          </div>
        )}

        {/* ── FAB ─── */}
        <button
          onClick={() => { setIsOpen(v => !v); setMinimized(false); setShowTip(false) }}
          aria-label="Open forge AI"
          style={{
            width: 52,
            height: 52,
            flexShrink: 0,
            cursor: "pointer",
            overflow: "hidden",
            background: "#1a0a0a",
            border: "2px solid #8b1a1a",
            boxShadow: "0 4px 20px rgba(139,26,26,0.3), 3px 3px 0 #8b1a1a",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            transition: "box-shadow .15s, transform .15s",
            animation: !isOpen ? "forgePulse 3s ease infinite" : "none",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = "0 6px 24px rgba(139,26,26,0.4), 3px 3px 0 #8b1a1a"
            e.currentTarget.style.transform = "translateY(-1px)"
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(139,26,26,0.3), 3px 3px 0 #8b1a1a"
            e.currentTarget.style.transform = "translateY(0)"
          }}
        >
          {isOpen ? (
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <X style={{ width: 16, height: 16, color: "#faf7f2" }} />
            </div>
          ) : (
            <>
              <div style={{ flex: 1, overflow: "hidden" }}>
                <Image
                  src="/robot.jpg"
                  alt="forge AI"
                  width={52}
                  height={40}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  priority
                />
              </div>
              <div style={{
                height: 11,
                background: "#8b1a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
              }}>
                <span style={{ fontSize: 5.5, fontWeight: 900, color: "#faf7f2", letterSpacing: "0.22em", fontFamily: "system-ui" }}>
                  forge
                </span>
              </div>
            </>
          )}

          {/* Unread badge */}
          {!isOpen && badge > 0 && (
            <span style={{
              position: "absolute", top: -4, right: -4,
              minWidth: 16, height: 16,
              background: "#8b1a1a", color: "#faf7f2",
              fontSize: 8, fontFamily: "system-ui", fontWeight: 900,
              border: "2px solid white",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "0 3px",
            }}>
              {badge > 9 ? "9+" : badge}
            </span>
          )}
        </button>
      </div>
    </>
  )
}
