// components/chatbot.tsx
"use client";

/**
 * Forge — UpForge AI Chatbot
 * Robot image: /public/robot.jpg
 * Drop robot.jpg in /public — Next.js <Image> handles everything.
 */

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { X, Send, Loader2, ChevronDown, Minimize2, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// ─── RICH TEXT RENDERER ───────────────────────────────────────────────────────

function RichText({ text }: { text: string }) {
  const lines = text.split("\n").reduce<string[]>((acc, line, i, arr) => {
    if (line.trim() === "" && i > 0 && arr[i - 1].trim() === "") return acc;
    acc.push(line);
    return acc;
  }, []);

  const renderInline = (str: string): React.ReactNode[] =>
    str.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**"))
        return <strong key={i} className="font-bold text-[#111]">{part.slice(2, -2)}</strong>;
      if (part.startsWith("*") && part.endsWith("*"))
        return <em key={i} className="italic text-[#555]">{part.slice(1, -1)}</em>;
      if (part.startsWith("`") && part.endsWith("`"))
        return <code key={i} className="bg-[#F0EDE8] text-[#333] px-1 py-0.5 text-[10px] font-mono">{part.slice(1, -1)}</code>;
      return <span key={i}>{part}</span>;
    });

  const els: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const t = lines[i].trim();
    if (!t) { els.push(<div key={`s${i}`} className="h-2" />); i++; continue; }

    if (/^(\d+)[.)]\s/.test(t)) {
      const items: { n: string; text: string }[] = [];
      while (i < lines.length) {
        const m = lines[i].trim().match(/^(\d+)[.)]\s+(.+)$/);
        if (!m) break;
        items.push({ n: m[1], text: m[2] }); i++;
      }
      els.push(
        <ol key={`ol${i}`} className="space-y-2 my-2">
          {items.map((it, ix) => (
            <li key={ix} className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-[18px] h-[18px] bg-[#111] text-[#E8C547] text-[8px] font-black flex items-center justify-center mt-[2px]" style={{ fontFamily: "system-ui" }}>{it.n}</span>
              <span className="flex-1 text-[12.5px] leading-relaxed">{renderInline(it.text)}</span>
            </li>
          ))}
        </ol>
      ); continue;
    }

    if (/^[-•]\s/.test(t)) {
      const items: string[] = [];
      while (i < lines.length) {
        const m = lines[i].trim().match(/^[-•]\s+(.+)$/);
        if (!m) break;
        items.push(m[1]); i++;
      }
      els.push(
        <ul key={`ul${i}`} className="space-y-1.5 my-2">
          {items.map((b, ix) => (
            <li key={ix} className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#E8C547] mt-[5px]" />
              <span className="flex-1 text-[12.5px] leading-relaxed">{renderInline(b)}</span>
            </li>
          ))}
        </ul>
      ); continue;
    }

    const hm = t.match(/^(#{1,3})\s+(.+)$/);
    if (hm) {
      const lvl = hm[1].length;
      els.push(<p key={`h${i}`} className={`font-bold text-[#111] mt-3 mb-1 ${lvl===1?"text-[14px]":lvl===2?"text-[13px]":"text-[12px]"}`} style={{ fontFamily: "'Georgia', serif" }}>{renderInline(hm[2])}</p>);
      i++; continue;
    }

    if (t === "---") { els.push(<div key={`hr${i}`} className="border-t border-[#E2DDD5] my-2" />); i++; continue; }

    els.push(<p key={`p${i}`} className="text-[12.5px] leading-relaxed text-[#1C1C1C]">{renderInline(t)}</p>);
    i++;
  }
  return <div className="space-y-[3px]">{els}</div>;
}

// ─── TYPING DOTS ──────────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      {[0,1,2].map(i => (
        <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#C8C3BC]"
          style={{ animation: `tBounce 1.2s ${i*0.18}s ease-in-out infinite` }} />
      ))}
    </div>
  );
}

// ─── MESSAGE BUBBLE ───────────────────────────────────────────────────────────

function Bubble({ msg, isNew }: { msg: Message; isNew: boolean }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={isNew ? { opacity: 0, y: 8 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} items-end gap-2.5`}
    >
      {!isUser && (
        <div className="w-8 h-8 flex-shrink-0 mb-0.5 overflow-hidden rounded-none bg-[#1C1C1C] border border-[#2a2a2a] flex items-center justify-center">
          <Image
            src="/robot.jpg"
            alt="Forge AI"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className={`max-w-[83%] px-3.5 py-2.5 ${isUser ? "bg-[#1C1C1C] text-white" : "bg-white border border-[#E2DDD5]"}`}>
        {isUser
          ? <span className="text-[12.5px] leading-relaxed" style={{ fontFamily: "system-ui" }}>{msg.content}</span>
          : <RichText text={msg.content} />
        }
      </div>
    </motion.div>
  );
}

// ─── FLOATING BUTTON ─────────────────────────────────────────────────────────

function ForgeButton({ isOpen, badge, onClick }: { isOpen: boolean; badge: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open Forge — UpForge AI startup assistant"
      title="Ask Forge anything about Indian startups"
      className="relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C547]"
      style={{ width: 64, height: 64 }}
    >
      {/* Outer slow-rotating gold square */}
      <span className="absolute inset-0 border-2 border-[#E8C547]/30"
        style={{ animation: "spinRing 12s linear infinite" }} />
      {/* Inner counter-rotating */}
      <span className="absolute inset-[7px] border border-[#E8C547]/15"
        style={{ animation: "spinRing 7s linear infinite reverse" }} />
      {/* Pulse halo */}
      <span className="absolute inset-[-8px] border border-[#E8C547]/08"
        style={{ animation: "pulseHalo 3s ease-in-out infinite" }} />

      {/* Core */}
      <motion.div
        animate={{ backgroundColor: isOpen ? "#222" : "#111" }}
        transition={{ duration: 0.18 }}
        className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.38), 0 2px 8px rgba(0,0,0,0.24)" }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x"
              initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.16 }}
            >
              <X className="w-5 h-5 text-white" />
            </motion.div>
          ) : (
            <motion.div key="robot"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.16 }}
              className="w-full h-full"
            >
              <Image
                src="/robot.jpg"
                alt="Forge AI"
                width={64}
                height={64}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Gold label strip at bottom when closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-0 left-0 right-0 z-20 bg-[#E8C547] flex items-center justify-center"
            style={{ height: "14px" }}
          >
            <span className="text-[7px] font-black text-[#111] tracking-[0.22em] uppercase leading-none"
              style={{ fontFamily: "system-ui" }}>FORGE AI</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unread badge */}
      <AnimatePresence>
        {!isOpen && badge > 0 && (
          <motion.span
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 bg-emerald-500 text-white text-[8px] font-black px-1 flex items-center justify-center rounded-full z-30 border-2 border-[#F7F5F0]"
            style={{ fontFamily: "system-ui" }}
          >
            {badge > 9 ? "9+" : badge}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

// ─── TOOLTIP ─────────────────────────────────────────────────────────────────

function ForgeTooltip({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 16, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 16, scale: 0.92 }}
          transition={{ delay: 2.2, duration: 0.26, ease: "easeOut" }}
          className="absolute right-[78px] bottom-[16px] pointer-events-none"
        >
          <div className="relative bg-[#111] shadow-2xl overflow-hidden">
            <div className="h-[2px] bg-gradient-to-r from-[#C8A83A] via-[#E8C547] to-[#F5D55A]" />
            <div className="flex items-center gap-0 pr-4">
              {/* Big robot preview */}
              <div className="w-14 h-14 flex-shrink-0 overflow-hidden">
                <Image
                  src="/robot.jpg"
                  alt="Forge AI assistant"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pl-3">
                <div className="text-[12px] font-bold text-white leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                  Ask <span className="text-[#E8C547]">Forge</span>
                </div>
                <div className="text-[9px] text-white/35 mt-0.5" style={{ fontFamily: "system-ui" }}>
                  India Startup AI · Always on
                </div>
              </div>
            </div>
            <div className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[7px] border-transparent border-l-[#111]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── QUICK PROMPTS ────────────────────────────────────────────────────────────

const PROMPTS = [
  "How to list my startup free?",
  "Hottest sectors in India 2026?",
  "How is SaaS valuation calculated?",
  "What's a soonicorn?",
];

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [badge, setBadge] = useState(0);
  const [msgs, setMsgs] = useState<Message[]>([{
    role: "assistant",
    content: "Hey — I'm **Forge**, UpForge's AI analyst.\n\nI know India's startup ecosystem inside out:\n- Funding rounds & valuations\n- Hot sectors & market trends\n- How to list your startup free\n- Investor landscape & deal flow\n\nWhat would you like to know?",
  }]);
  const [justAdded, setJustAdded] = useState<Set<number>>(new Set());

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, loading]);

  useEffect(() => {
    if (isOpen && !minimized)
      setTimeout(() => inputRef.current?.focus(), 160);
  }, [isOpen, minimized]);

  useEffect(() => { if (isOpen) setBadge(0); }, [isOpen]);

  const send = useCallback(async (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || loading) return;

    const userMsg: Message = { role: "user", content: msg };
    const nextIdx = msgs.length + 1;
    setMsgs(p => [...p, userMsg]);
    setJustAdded(p => new Set(p).add(msgs.length));
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...msgs, userMsg] }),
      });
      const data = await res.json();
      const reply = data.message ?? data.error ?? "Couldn't process that — please try again.";
      setMsgs(p => [...p, { role: "assistant", content: reply }]);
      setJustAdded(p => new Set(p).add(nextIdx));
      if (!isOpen) setBadge(c => c + 1);
    } catch {
      setMsgs(p => [...p, { role: "assistant", content: "Network issue — please try again." }]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, msgs, isOpen]);

  const reset = () => {
    setMsgs([{
      role: "assistant",
      content: "Hey — I'm **Forge**, UpForge's AI analyst.\n\nI know India's startup ecosystem inside out:\n- Funding rounds & valuations\n- Hot sectors & market trends\n- How to list your startup free\n- Investor landscape & deal flow\n\nWhat would you like to know?",
    }]);
    setJustAdded(new Set());
    setInput("");
  };

  return (
    <>
      {/* SEO structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPageElement",
        "cssSelector": "#forge-chatbot",
        "name": "Forge — UpForge AI Startup Assistant",
        "description": "AI-powered assistant for India's startup ecosystem. Ask about funding, valuations, sectors, and how to list on UpForge.",
        "isPartOf": { "@type": "WebSite", "name": "UpForge", "url": "https://upforge.in" },
      }) }} />

      <style>{`
        @keyframes tBounce{0%,60%,100%{transform:translateY(0);opacity:.3}30%{transform:translateY(-5px);opacity:1}}
        @keyframes spinRing{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        @keyframes pulseHalo{0%,100%{opacity:.06;transform:scale(1)}50%{opacity:.2;transform:scale(1.08)}}
        @keyframes scanBar{0%{transform:translateY(-100%)}100%{transform:translateY(500%)}}
        .forge-scroll::-webkit-scrollbar{width:3px}
        .forge-scroll::-webkit-scrollbar-thumb{background:#D5D0C8}
        .pchip:hover{background:#1C1C1C!important;color:white!important;border-color:#1C1C1C!important}
        .pchip:hover .arr{opacity:1!important;color:#E8C547!important}
      `}</style>

      <div id="forge-chatbot" className="fixed bottom-5 right-5 z-50 flex flex-col items-end">

        {/* CHAT WINDOW */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              role="dialog" aria-modal="true" aria-label="Forge UpForge AI Startup Assistant"
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.94 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 w-[94vw] max-w-[400px] bg-[#F7F5F0] border border-[#C5C0B8] flex flex-col overflow-hidden"
              style={{
                height: minimized ? "auto" : "min(640px, 82vh)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.24), 0 6px 20px rgba(0,0,0,0.14)",
              }}
            >

              {/* HEADER */}
              <div className="flex-shrink-0 bg-[#111] relative overflow-hidden">
                {/* Gold bar */}
                <div className="h-[3px] bg-gradient-to-r from-[#B8941E] via-[#E8C547] to-[#F5D55A]" />
                {/* Scan line */}
                <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8C547]/12 to-transparent pointer-events-none"
                  style={{ animation: "scanBar 8s linear infinite" }} />

                {/* Robot hero banner — BIG image at top */}
                <div className="relative w-full overflow-hidden" style={{ height: minimized ? 0 : 88 }}>
                  <Image
                    src="/robot.jpg"
                    alt="Forge — UpForge AI startup analyst"
                    fill
                    className="object-cover object-center"
                    style={{ objectPosition: "center 20%" }}
                    priority
                  />
                  {/* Dark gradient overlay so text reads clearly */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#111]/20 via-transparent to-[#111]/90" />
                  {/* Bottom label on image */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-2.5 flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[18px] font-bold text-white leading-none drop-shadow-lg" style={{ fontFamily: "'Georgia', serif" }}>
                          Forge
                        </span>
                        <span className="text-[7px] bg-[#E8C547] text-[#111] px-1.5 py-0.5 font-black uppercase tracking-[0.18em] leading-none" style={{ fontFamily: "system-ui" }}>AI</span>
                      </div>
                      <div className="text-[8px] text-white/50 uppercase tracking-[0.2em] mt-0.5" style={{ fontFamily: "system-ui" }}>
                        UpForge Intelligence
                      </div>
                    </div>
                    {/* Online dot */}
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "pulseHalo 2s ease-in-out infinite" }} />
                      <span className="text-[8px] text-white/40 uppercase tracking-wider" style={{ fontFamily: "system-ui" }}>Online</span>
                    </div>
                  </div>
                </div>

                {/* Header controls row */}
                <div className="px-3 py-2 flex items-center justify-between">
                  <span className="text-[8px] text-white/20 uppercase tracking-[0.2em]" style={{ fontFamily: "system-ui" }}>
                    Llama 3.3 · India Startup Expert
                  </span>
                  <div className="flex items-center gap-0">
                    <button onClick={reset} title="New conversation" aria-label="Reset conversation"
                      className="p-2 text-white/20 hover:text-white/60 transition-colors">
                      <RotateCcw className="w-3 h-3" />
                    </button>
                    <button onClick={() => setMinimized(v => !v)} aria-label={minimized ? "Expand" : "Minimize"}
                      className="p-2 text-white/20 hover:text-white/60 transition-colors">
                      {minimized ? <ChevronDown className="w-3 h-3 rotate-180" /> : <Minimize2 className="w-3 h-3" />}
                    </button>
                    <button onClick={() => setIsOpen(false)} aria-label="Close Forge"
                      className="p-2 text-white/20 hover:text-white/60 transition-colors">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* BODY */}
              <AnimatePresence initial={false}>
                {!minimized && (
                  <motion.div key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col flex-1 overflow-hidden"
                  >

                    {/* Messages */}
                    <div ref={scrollRef} aria-live="polite" aria-label="Conversation"
                      className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 forge-scroll"
                      style={{ background: "#F7F5F0" }}>
                      {msgs.map((m, idx) => (
                        <Bubble key={idx} msg={m} isNew={justAdded.has(idx)} />
                      ))}
                      {loading && (
                        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                          className="flex items-end gap-2.5">
                          <div className="w-8 h-8 flex-shrink-0 overflow-hidden bg-[#111] border border-[#2a2a2a] flex items-center justify-center">
                            <Image src="/robot.jpg" alt="Forge is typing" width={32} height={32} className="w-full h-full object-cover" />
                          </div>
                          <div className="bg-white border border-[#E2DDD5]"><TypingDots /></div>
                        </motion.div>
                      )}
                    </div>

                    {/* Quick prompts */}
                    {msgs.length === 1 && (
                      <div className="px-4 pt-3 pb-3 border-t border-[#E8E4DC] flex-shrink-0 bg-[#F7F5F0]">
                        <p className="text-[8px] text-[#BBBBBB] uppercase tracking-[0.24em] mb-2 font-bold" style={{ fontFamily: "system-ui" }}>
                          Try asking
                        </p>
                        <div className="grid gap-1.5">
                          {PROMPTS.map((q, idx) => (
                            <button key={idx} onClick={() => send(q)}
                              className="pchip text-left text-[11px] border border-[#D5D0C8] bg-white px-3 py-2 text-[#555] transition-all duration-150 flex items-center justify-between"
                              style={{ fontFamily: "system-ui" }}>
                              <span>{q}</span>
                              <span className="arr opacity-0 transition-opacity font-bold text-[12px]">→</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Input */}
                    <div className="px-4 py-3 border-t border-[#D5D0C8] flex-shrink-0 bg-white">
                      <div className="flex items-center gap-2">
                        <input
                          ref={inputRef} value={input} disabled={loading}
                          onChange={e => setInput(e.target.value)}
                          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
                          placeholder="Ask about Indian startups, funding, sectors…"
                          aria-label="Message Forge AI"
                          className="flex-1 bg-[#F7F5F0] border border-[#D5D0C8] py-2.5 px-3 text-[12px] text-[#1C1C1C] placeholder-[#BBB] focus:outline-none focus:border-[#1C1C1C] transition-colors"
                          style={{ fontFamily: "system-ui" }}
                        />
                        <button onClick={() => send()} disabled={loading || !input.trim()} aria-label="Send"
                          className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-150 bg-[#1C1C1C] text-white hover:bg-[#E8C547] hover:text-[#111] disabled:bg-[#EEEAE3] disabled:text-[#CCC] disabled:cursor-not-allowed">
                          {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                      {/* Footer */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 overflow-hidden bg-[#111] flex-shrink-0">
                            <Image src="/robot.jpg" alt="Forge" width={16} height={16} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-[8px] text-[#C0BAB0]" style={{ fontFamily: "system-ui" }}>Forge · UpForge AI</span>
                        </div>
                        <span className="text-[8px] text-[#C0BAB0]" style={{ fontFamily: "system-ui" }}>⏎ to send</span>
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          )}
        </AnimatePresence>

        {/* TOOLTIP */}
        <ForgeTooltip show={!isOpen && msgs.length === 1} />

        {/* FLOATING BUTTON */}
        <ForgeButton isOpen={isOpen} badge={badge} onClick={() => { setIsOpen(v => !v); setMinimized(false); }} />

      </div>
    </>
  );
}
