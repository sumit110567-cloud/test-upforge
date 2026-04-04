"use client"

import Image from "next/image"
import { useState, useEffect, useRef, useCallback } from "react"
import { X, Send, Loader2, Minus, RotateCcw, Globe } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

// ─── RICH TEXT ─────────────────────────────────────────────────────────────

function RichText({ text }: { text: string }) {
  const lines = text.split("\n").reduce<string[]>((acc, line, i, arr) => {
    if (line.trim() === "" && i > 0 && arr[i - 1].trim() === "") return acc
    acc.push(line)
    return acc
  }, [])

  const inline = (str: string): React.ReactNode[] =>
    str.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).map((p, i) => {
      if (p.startsWith("**") && p.endsWith("**"))
        return <strong key={i} style={{ fontWeight: 700, color: "#111" }}>{p.slice(2, -2)}</strong>
      if (p.startsWith("*") && p.endsWith("*"))
        return <em key={i} style={{ color: "#555", fontStyle: "italic" }}>{p.slice(1, -1)}</em>
      if (p.startsWith("`") && p.endsWith("`"))
        return (
          <code key={i} style={{
            background: "#F2EFE9", color: "#111", padding: "1px 5px",
            fontSize: 10.5, fontFamily: "monospace", border: "1px solid #E5E0D8",
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
    if (!t) { els.push(<div key={`s${i}`} style={{ height: 5 }} />); i++; continue }

    if (/^(\d+)[.)]\s/.test(t)) {
      const items: { n: string; text: string }[] = []
      while (i < lines.length) {
        const m = lines[i].trim().match(/^(\d+)[.)]\s+(.+)$/)
        if (!m) break
        items.push({ n: m[1], text: m[2] }); i++
      }
      els.push(
        <div key={`ol${i}`} style={{ display: "flex", flexDirection: "column", gap: 5, margin: "6px 0" }}>
          {items.map((it, ix) => (
            <div key={ix} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
              <span style={{ flexShrink: 0, fontFamily: "system-ui", fontSize: 9, fontWeight: 800, color: "#C59A2E", minWidth: 14, paddingTop: 3 }}>
                {it.n}.
              </span>
              <span style={{ fontSize: 12, lineHeight: 1.7, color: "#2A2520", fontFamily: "'Georgia', serif" }}>
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
        <div key={`ul${i}`} style={{ display: "flex", flexDirection: "column", gap: 4, margin: "5px 0" }}>
          {items.map((b, ix) => (
            <div key={ix} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
              <span style={{ flexShrink: 0, marginTop: 8, width: 3, height: 3, background: "#C59A2E", display: "inline-block" }} />
              <span style={{ fontSize: 12, lineHeight: 1.7, color: "#2A2520", fontFamily: "'Georgia', serif" }}>
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
        <p key={`h${i}`} style={{ fontSize: 9, fontWeight: 800, color: "#999", textTransform: "uppercase", letterSpacing: "0.18em", fontFamily: "system-ui", marginTop: 10, marginBottom: 2 }}>
          {inline(hm[2])}
        </p>
      )
      i++; continue
    }

    if (t === "---") {
      els.push(<div key={`hr${i}`} style={{ height: 1, background: "#EDE9E0", margin: "8px 0" }} />)
      i++; continue
    }

    els.push(
      <p key={`p${i}`} style={{ fontSize: 12.5, lineHeight: 1.75, color: "#2A2520", fontFamily: "'Georgia', serif", margin: 0 }}>
        {inline(t)}
      </p>
    )
    i++
  }

  return <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>{els}</div>
}

// ─── TYPING DOTS ─────────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 0" }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{
          width: 4, height: 4, background: "#D5CFC4", display: "inline-block",
          animation: `forgeDot 1.2s ${i * 0.18}s ease-in-out infinite`,
        }} />
      ))}
    </div>
  )
}

// ─── QUICK PROMPTS ────────────────────────────────────────────────────────────

const PROMPTS = [
  { q: "Top global AI startups 2026?",    cat: "Global"   },
  { q: "How do I list my startup?",        cat: "Registry" },
  { q: "What sectors are growing fastest?", cat: "Trends"  },
  { q: "What is a UFRN number?",           cat: "Verify"   },
]

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export function Chatbot() {
  const [isOpen, setIsOpen]       = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [input, setInput]         = useState("")
  const [loading, setLoading]     = useState(false)
  const [badge, setBadge]         = useState(0)
  const [showTip, setShowTip]     = useState(false)
  const [msgs, setMsgs]           = useState<Message[]>([{
    role: "assistant",
    content: "I'm **forge** — UpForge's global intelligence AI.\n\nAsk me about:\n- Verified startups across 40+ countries\n- Funding data, unicorns, sector trends\n- How to list or verify a startup\n\nWhat would you like to know?",
  }])
  const [newIdxs, setNewIdxs] = useState<Set<number>>(new Set())

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 3500)
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
      const res  = await fetch("/api/chat", {
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
      setMsgs(p => [...p, { role: "assistant", content: "Network issue — please try again." }])
    } finally {
      setLoading(false)
    }
  }, [input, loading, msgs, isOpen])

  const reset = () => {
    setMsgs([{
      role: "assistant",
      content: "I'm **forge** — UpForge's global intelligence AI.\n\nAsk me about:\n- Verified startups across 40+ countries\n- Funding data, unicorns, sector trends\n- How to list or verify a startup\n\nWhat would you like to know?",
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
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes forgeSpin { to { transform:rotate(360deg); } }
        .asc::-webkit-scrollbar{width:2px}
        .asc::-webkit-scrollbar-thumb{background:#E5E0D8}
        .ap:hover{background:#F7F3EC!important;border-color:#D5C88A!important;}
        .ai:focus{outline:none;border-color:#C59A2E!important;}
        .ab:not([disabled]):hover{background:#C59A2E!important;border-color:#C59A2E!important;}
        .ac:hover{color:#C59A2E!important;}
      `}</style>

      <div style={{ position:"fixed", bottom:24, right:24, zIndex:9999, display:"flex", flexDirection:"column", alignItems:"flex-end" }}>

        {/* ── PANEL ─────────────────────────────────────────────── */}
        {isOpen && (
          <div style={{
            marginBottom: 12,
            width: "min(92vw, 356px)",
            height: minimized ? "auto" : "min(530px, 76vh)",
            display: "flex", flexDirection: "column", overflow: "hidden",
            background: "#FFFCF8",
            border: "1px solid #E0DBD2",
            boxShadow: "0 12px 40px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.04)",
            animation: "forgeIn 0.18s ease forwards",
          }}>

            {/* Header */}
            <div style={{ background:"#111", flexShrink:0 }}>
              <div style={{ height:2, background:"linear-gradient(90deg,#8B6914,#C59A2E 40%,#E8C547 50%,#C59A2E 60%,#8B6914)" }} />
              <div style={{ display:"flex", alignItems:"center", padding:"10px 14px", gap:10 }}>
                <div style={{ position:"relative", flexShrink:0 }}>
                  <div style={{ width:28, height:28, overflow:"hidden", border:"1px solid #2A2520" }}>
                    <Image src="/robot.jpg" alt="forge" width={28} height={28} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }} priority />
                  </div>
                  <span style={{ position:"absolute", bottom:-1, right:-1, width:7, height:7, background:"#22C55E", borderRadius:"50%", border:"1.5px solid #111" }} />
                </div>

                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontFamily:"'Georgia',serif", fontSize:13, fontWeight:700, color:"#F5F0E8", lineHeight:1 }}>forge</div>
                  <div style={{ display:"flex", alignItems:"center", gap:4, marginTop:3 }}>
                    <Globe size={8} style={{ color:"#C59A2E" }} />
                    <span style={{ fontSize:9, color:"#666", letterSpacing:"0.12em", fontFamily:"system-ui", textTransform:"uppercase" }}>
                      UpForge Global Intelligence
                    </span>
                  </div>
                </div>

                <div style={{ display:"flex" }}>
                  {([
                    ["Reset",     <RotateCcw key="r" style={{ width:10, height:10 }} />, reset],
                    [minimized?"Expand":"Minimise", <Minus key="m" style={{ width:10, height:10 }} />, () => setMinimized(v => !v)],
                    ["Close",     <X key="x" style={{ width:10, height:10 }} />,         () => setIsOpen(false)],
                  ] as [string, React.ReactNode, () => void][]).map(([label, icon, fn]) => (
                    <button key={label} onClick={fn} aria-label={label} className="ac"
                      style={{ padding:"4px 5px", background:"none", border:"none", cursor:"pointer", color:"#444", display:"flex", alignItems:"center", transition:"color .12s" }}>
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
                <div ref={scrollRef} aria-live="polite" className="asc"
                  style={{ flex:1, overflowY:"auto", padding:"14px 14px", display:"flex", flexDirection:"column", gap:10, background:"#FDFAF5" }}>

                  <div style={{ textAlign:"center", fontSize:9, color:"#D5CFC4", letterSpacing:"0.16em", fontFamily:"system-ui", marginBottom:2 }}>
                    {new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"}).toUpperCase()}
                  </div>

                  {msgs.map((m, idx) => {
                    const isUser = m.role === "user"
                    return (
                      <div key={idx} style={{
                        display:"flex", justifyContent:isUser?"flex-end":"flex-start", alignItems:"flex-end", gap:8,
                        animation: newIdxs.has(idx) ? "forgeIn 0.16s ease forwards" : "none",
                        opacity: newIdxs.has(idx) ? 0 : 1,
                      }}>
                        {!isUser && (
                          <div style={{ width:18, height:18, overflow:"hidden", flexShrink:0, border:"1px solid #E5E0D8", marginBottom:1 }}>
                            <Image src="/robot.jpg" alt="" width={18} height={18} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }} />
                          </div>
                        )}
                        {isUser ? (
                          <div style={{ maxWidth:"78%", padding:"8px 11px", background:"#111", borderLeft:"2px solid #C59A2E" }}>
                            <span style={{ fontSize:12.5, color:"#F0EBE0", fontFamily:"'Georgia',serif", lineHeight:1.65 }}>{m.content}</span>
                          </div>
                        ) : (
                          <div style={{ maxWidth:"85%", padding:"9px 11px", background:"#FFF", border:"1px solid #EDE9E0", borderLeft:"2px solid #C59A2E" }}>
                            <RichText text={m.content} />
                          </div>
                        )}
                      </div>
                    )
                  })}

                  {loading && (
                    <div style={{ display:"flex", alignItems:"flex-end", gap:8 }}>
                      <div style={{ width:18, height:18, overflow:"hidden", flexShrink:0, border:"1px solid #E5E0D8" }}>
                        <Image src="/robot.jpg" alt="" width={18} height={18} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }} />
                      </div>
                      <div style={{ background:"#FFF", border:"1px solid #EDE9E0", borderLeft:"2px solid #C59A2E", padding:"0 10px" }}>
                        <TypingDots />
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick prompts */}
                {msgs.length === 1 && (
                  <div style={{ padding:"9px 14px", borderTop:"1px solid #EDE9E0", background:"#F7F3EC", flexShrink:0 }}>
                    <div style={{ fontSize:8, letterSpacing:"0.2em", textTransform:"uppercase", color:"#BBB", fontFamily:"system-ui", fontWeight:700, marginBottom:7 }}>Try asking</div>
                    <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
                      {PROMPTS.map((p, idx) => (
                        <button key={idx} onClick={() => send(p.q)} className="ap"
                          style={{ textAlign:"left", display:"flex", alignItems:"center", gap:8, padding:"7px 10px", background:"#FFF", border:"1px solid #EDE9E0", cursor:"pointer", transition:"background .12s, border-color .12s" }}>
                          <span style={{ fontSize:7.5, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.18em", color:"#C59A2E", fontFamily:"system-ui", flexShrink:0 }}>{p.cat}</span>
                          <span style={{ fontSize:11.5, color:"#444", fontFamily:"'Georgia',serif", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{p.q}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div style={{ padding:"10px 14px", borderTop:"1px solid #EDE9E0", background:"#FFFCF8", flexShrink:0 }}>
                  <div style={{ display:"flex", gap:7 }}>
                    <input
                      ref={inputRef}
                      value={input}
                      disabled={loading}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={e => { if (e.key==="Enter" && !e.shiftKey){ e.preventDefault(); send() } }}
                      placeholder="Ask about global startups…"
                      aria-label="Message forge"
                      className="ai"
                      style={{
                        flex:1, padding:"9px 11px", fontSize:12.5,
                        fontFamily:"'Georgia',serif", background:"#FFF",
                        border:"1px solid #E5E0D8", color:"#111", outline:"none",
                        transition:"border-color .15s",
                      }}
                    />
                    <button onClick={() => send()} disabled={loading || !input.trim()} aria-label="Send" className="ab"
                      style={{
                        width:37, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center",
                        background: loading || !input.trim() ? "#F2EFE9" : "#111",
                        color:      loading || !input.trim() ? "#CCC"     : "#FFF",
                        border:"1px solid", borderColor: loading || !input.trim() ? "#E5E0D8" : "#111",
                        cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                        transition:"background .12s, border-color .12s",
                      }}>
                      {loading
                        ? <Loader2 style={{ width:13, height:13, animation:"forgeSpin 1s linear infinite" }} />
                        : <Send style={{ width:13, height:13 }} />
                      }
                    </button>
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", marginTop:6 }}>
                    <span style={{ fontSize:9, color:"#CCC", fontFamily:"system-ui", letterSpacing:"0.08em" }}>forge · UpForge · No paid placements</span>
                    <span style={{ fontSize:9, color:"#DDD", fontFamily:"system-ui" }}>⏎ send</span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* ── TOOLTIP ───────────────────────────────────────────── */}
        {!isOpen && showTip && msgs.length === 1 && (
          <div style={{ position:"absolute", right:58, bottom:13, pointerEvents:"none", animation:"forgeIn 0.18s ease forwards" }}>
            <div style={{ background:"#111", border:"1px solid #222", borderTop:"2px solid #C59A2E", padding:"8px 13px", whiteSpace:"nowrap", boxShadow:"0 4px 14px rgba(0,0,0,0.16)", position:"relative" }}>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <Globe size={10} style={{ color:"#C59A2E" }} />
                <div>
                  <div style={{ fontFamily:"'Georgia',serif", fontSize:11.5, fontWeight:700, color:"#F0EBE0" }}>
                    Ask <span style={{ color:"#C59A2E" }}>forge</span>
                  </div>
                  <div style={{ fontSize:8.5, color:"#666", letterSpacing:"0.1em", fontFamily:"system-ui", marginTop:1 }}>
                    Global startup intelligence · Free
                  </div>
                </div>
              </div>
              <div style={{ position:"absolute", right:-6, top:"50%", transform:"translateY(-50%)", width:0, height:0, borderTop:"5px solid transparent", borderBottom:"5px solid transparent", borderLeft:"6px solid #111" }} />
            </div>
          </div>
        )}

        {/* ── FAB ───────────────────────────────────────────────── */}
        <button
          onClick={() => { setIsOpen(v => !v); setMinimized(false); setShowTip(false) }}
          aria-label="Open forge"
          style={{
            width:48, height:48, flexShrink:0, cursor:"pointer", overflow:"hidden",
            background:"#111", border:"1.5px solid #C59A2E",
            boxShadow:"0 4px 14px rgba(0,0,0,0.2), 2px 2px 0 #C59A2E",
            display:"flex", flexDirection:"column", position:"relative",
            transition:"box-shadow .15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.2), 2px 2px 0 #C59A2E, 0 0 0 4px rgba(197,154,46,0.12)")}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.2), 2px 2px 0 #C59A2E")}
        >
          {isOpen ? (
            <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <X style={{ width:15, height:15, color:"#FFF" }} />
            </div>
          ) : (
            <>
              <div style={{ flex:1, overflow:"hidden" }}>
                <Image src="/robot.jpg" alt="forge" width={48} height={39} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }} priority />
              </div>
              <div style={{ height:10, background:"#C59A2E", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:5.5, fontWeight:900, color:"#111", letterSpacing:"0.22em", fontFamily:"system-ui" }}>forge</span>
              </div>
            </>
          )}

          {/* Unread badge */}
          {!isOpen && badge > 0 && (
            <span style={{
              position:"absolute", top:-3, right:-3, minWidth:15, height:15,
              background:"#C59A2E", color:"#111", fontSize:8, fontFamily:"system-ui", fontWeight:900,
              border:"1.5px solid white", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 3px",
            }}>
              {badge > 9 ? "9+" : badge}
            </span>
          )}
        </button>
      </div>
    </>
  )
}
