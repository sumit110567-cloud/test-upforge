// components/chatbot.tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, Send, Loader2, ChevronDown, Minimize2, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Message {
  role: "user" | "assistant";
  content: string;
}

// ─── Rich Message Renderer ────────────────────────────────────────────────────
// Parses assistant messages into bold, numbered lists, bullets, line breaks

function RichText({ text }: { text: string }) {
  const lines = text.split("\n").filter((l, i, arr) => {
    // Collapse more than 2 consecutive blank lines
    if (l.trim() === "" && i > 0 && arr[i - 1].trim() === "") return false;
    return true;
  });

  const renderInline = (str: string) => {
    // Bold: **text** or *text*
    const parts = str.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold text-[#1C1C1C]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <em key={i} className="italic text-[#444]">
            {part.slice(1, -1)}
          </em>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Empty line → spacer
    if (trimmed === "") {
      elements.push(<div key={`space-${i}`} className="h-2" />);
      i++;
      continue;
    }

    // Numbered list: "1. text" or "1) text"
    const numMatch = trimmed.match(/^(\d+)[.)]\s+(.+)$/);
    if (numMatch) {
      const listItems: { num: string; text: string }[] = [];
      while (i < lines.length) {
        const m = lines[i].trim().match(/^(\d+)[.)]\s+(.+)$/);
        if (!m) break;
        listItems.push({ num: m[1], text: m[2] });
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-1.5 my-2">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span
                className="flex-shrink-0 w-5 h-5 bg-[#1C1C1C] text-[#E8C547] text-[9px] font-black flex items-center justify-center mt-0.5"
                style={{ fontFamily: "system-ui, sans-serif", lineHeight: 1 }}
              >
                {item.num}
              </span>
              <span className="flex-1 text-[12px] leading-relaxed text-[#1C1C1C]">
                {renderInline(item.text)}
              </span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Bullet: "- text" or "• text"
    const bulletMatch = trimmed.match(/^[-•]\s+(.+)$/);
    if (bulletMatch) {
      const bullets: string[] = [];
      while (i < lines.length) {
        const m = lines[i].trim().match(/^[-•]\s+(.+)$/);
        if (!m) break;
        bullets.push(m[1]);
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-1.5 my-2">
          {bullets.map((b, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#E8C547] mt-1.5" />
              <span className="flex-1 text-[12px] leading-relaxed text-[#1C1C1C]">
                {renderInline(b)}
              </span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Heading: "### text" or "## text" or "# text"
    const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      elements.push(
        <p
          key={`h-${i}`}
          className={`font-bold text-[#1C1C1C] mt-2 mb-1 ${
            level === 1 ? "text-[14px]" : level === 2 ? "text-[13px]" : "text-[12px]"
          }`}
          style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.01em" }}
        >
          {renderInline(headingMatch[2])}
        </p>
      );
      i++;
      continue;
    }

    // Divider: "---"
    if (trimmed === "---") {
      elements.push(
        <div key={`hr-${i}`} className="border-t border-[#E2DDD5] my-2" />
      );
      i++;
      continue;
    }

    // Default paragraph
    elements.push(
      <p key={`p-${i}`} className="text-[12.5px] leading-relaxed text-[#1C1C1C]">
        {renderInline(trimmed)}
      </p>
    );
    i++;
  }

  return <div className="space-y-0.5">{elements}</div>;
}

// ─── Typing Indicator ─────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#AAA]"
          style={{ animation: `typingBounce 1.2s ${i * 0.2}s ease-in-out infinite` }}
        />
      ))}
    </div>
  );
}

// ─── Message Bubble ───────────────────────────────────────────────────────────

function Bubble({ msg, isNew }: { msg: Message; isNew: boolean }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={isNew ? { opacity: 0, y: 10 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} items-end gap-2`}
    >
      {!isUser && (
        <div
          className="w-6 h-6 bg-[#1C1C1C] text-[#E8C547] flex items-center justify-center text-[9px] font-black flex-shrink-0 mb-0.5"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          F
        </div>
      )}
      <div
        className={`max-w-[85%] px-3.5 py-2.5 ${
          isUser
            ? "bg-[#1C1C1C] text-white text-[12.5px] leading-relaxed"
            : "bg-white border border-[#E2DDD5] text-[#1C1C1C]"
        }`}
        style={{ fontFamily: isUser ? "system-ui, sans-serif" : undefined }}
      >
        {isUser ? (
          <span className="text-[12.5px] leading-relaxed">{msg.content}</span>
        ) : (
          <RichText text={msg.content} />
        )}
      </div>
    </motion.div>
  );
}

// ─── Animated Forge Button ────────────────────────────────────────────────────

function ForgeButton({ isOpen, newMsgCount, onClick }: {
  isOpen: boolean;
  newMsgCount: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center"
      style={{ width: 56, height: 56 }}
      aria-label="Open Forge AI assistant"
    >
      {/* Outer rotating ring */}
      <span
        className="absolute inset-0 border border-[#E8C547]/40"
        style={{ animation: "spinRing 8s linear infinite" }}
      />
      {/* Pulsing ring */}
      <span
        className="absolute inset-[-4px] border border-[#E8C547]/15"
        style={{ animation: "pulseRing 2.5s ease-in-out infinite" }}
      />

      {/* Core button */}
      <motion.div
        animate={isOpen ? { backgroundColor: "#2a2a2a" } : { backgroundColor: "#1C1C1C" }}
        className="w-full h-full flex flex-col items-center justify-center gap-0.5 relative z-10"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.3)" }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              <X className="w-5 h-5 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="forge"
              initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col items-center gap-0"
            >
              <span
                className="text-[#E8C547] font-black text-[15px] leading-none"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                F
              </span>
              <span
                className="text-[7px] text-white/35 tracking-[0.15em] uppercase leading-none"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                forge
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Unread badge */}
      <AnimatePresence>
        {!isOpen && newMsgCount > 0 && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-500 text-white text-[8px] font-black flex items-center justify-center rounded-full z-20 border-2 border-[#F7F5F0]"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            {newMsgCount}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

// ─── Tooltip on first load ────────────────────────────────────────────────────

function ForgeTooltip({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 12, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 12, scale: 0.95 }}
          transition={{ delay: 1.8, duration: 0.3 }}
          className="absolute right-[68px] bottom-3 pointer-events-none"
        >
          <div
            className="relative bg-[#1C1C1C] text-white px-3.5 py-2.5 shadow-xl whitespace-nowrap"
          >
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E8C547]" />
            <div className="flex items-center gap-2">
              <Zap className="w-3 h-3 text-[#E8C547]" />
              <div>
                <div className="text-[10px] font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>
                  Ask <span className="text-[#E8C547]">Forge</span>
                </div>
                <div className="text-[9px] text-white/40" style={{ fontFamily: "system-ui, sans-serif" }}>
                  Startup AI · Always on
                </div>
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-t-transparent border-b-transparent border-l-[#1C1C1C]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Quick Prompt Chips ───────────────────────────────────────────────────────

const QUICK_PROMPTS = [
  "How do I list my startup?",
  "Hottest sectors in India 2026?",
  "How is SaaS valuation calculated?",
  "What's a soonicorn?",
];

// ─── Main Chatbot ─────────────────────────────────────────────────────────────

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [newMsgCount, setNewMsgCount] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey — I'm **Forge**, UpForge's AI analyst.\n\nI know India's startup ecosystem inside out:\n- Funding rounds & valuations\n- Hot sectors & market trends\n- How to list your startup\n- Investor landscape\n\nWhat would you like to know?",
    },
  ]);
  const [justAdded, setJustAdded] = useState<Set<number>>(new Set());

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const showTooltip = !isOpen && messages.length === 1;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    if (isOpen) setNewMsgCount(0);
  }, [isOpen]);

  const send = useCallback(async (text?: string) => {
    const messageText = (text || input).trim();
    if (!messageText || isLoading) return;

    const userMsg: Message = { role: "user", content: messageText };
    const newIndex = messages.length + 1;

    setMessages((p) => [...p, userMsg]);
    setJustAdded((p) => new Set(p).add(messages.length));
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      const reply =
        data.message || data.error || "I couldn't process that — please try again.";

      setMessages((p) => [...p, { role: "assistant", content: reply }]);
      setJustAdded((p) => new Set(p).add(newIndex));
      if (!isOpen) setNewMsgCount((c) => c + 1);
    } catch {
      setMessages((p) => [
        ...p,
        { role: "assistant", content: "Network issue — please try again in a moment." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages, isOpen]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <style>{`
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes spinRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseRing {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.04); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .forge-scroll::-webkit-scrollbar { width: 3px; }
        .forge-scroll::-webkit-scrollbar-track { background: transparent; }
        .forge-scroll::-webkit-scrollbar-thumb { background: #D5D0C8; border-radius: 2px; }
        .chip-hover:hover { background: #1C1C1C; color: white; border-color: #1C1C1C; }
        .chip-hover:hover .chip-arrow { opacity: 1; }
      `}</style>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">

        {/* ── CHAT WINDOW ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 w-[94vw] max-w-[390px] bg-[#F7F5F0] border border-[#C8C3BC] overflow-hidden flex flex-col"
              style={{
                height: isMinimized ? "auto" : "min(620px, 80vh)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.1)",
              }}
            >

              {/* ── HEADER ── */}
              <div className="flex-shrink-0 relative overflow-hidden" style={{ background: "#111" }}>
                {/* Subtle scanline effect */}
                <div
                  className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8C547]/20 to-transparent pointer-events-none"
                  style={{ animation: "scanline 4s linear infinite", top: 0 }}
                />

                {/* Gold accent bar */}
                <div className="h-[2px] w-full bg-gradient-to-r from-[#E8C547] via-[#F5D55A] to-[#C8A83A]" />

                <div className="px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-9 h-9 bg-[#E8C547] flex items-center justify-center font-black text-[14px] text-[#1C1C1C]"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        F
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#111] rounded-full" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[15px] font-bold text-white tracking-tight"
                          style={{ fontFamily: "'Georgia', serif" }}
                        >
                          Forge
                        </span>
                        <span
                          className="text-[8px] bg-[#E8C547] text-[#1C1C1C] px-1.5 py-0.5 font-black uppercase tracking-[0.15em]"
                          style={{ fontFamily: "system-ui, sans-serif" }}
                        >
                          AI
                        </span>
                      </div>
                      <div
                        className="text-[9px] text-white/35 uppercase tracking-[0.2em]"
                        style={{ fontFamily: "system-ui, sans-serif" }}
                      >
                        UpForge Intelligence
                      </div>
                    </div>
                  </div>

                  {/* Header actions */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="p-2 text-white/30 hover:text-white/70 transition-colors"
                      title={isMinimized ? "Expand" : "Minimize"}
                    >
                      {isMinimized ? (
                        <ChevronDown className="w-3.5 h-3.5 rotate-180" />
                      ) : (
                        <Minimize2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 text-white/30 hover:text-white/70 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Status bar */}
                <div
                  className="px-4 py-1.5 border-t border-white/5 flex items-center gap-2"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" style={{ animation: "pulseRing 2s ease-in-out infinite" }} />
                  <span className="text-[9px] text-white/25 uppercase tracking-[0.18em]" style={{ fontFamily: "system-ui, sans-serif" }}>
                    Online · India Startup Expert · Powered by Llama 3.3
                  </span>
                </div>
              </div>

              {/* ── BODY ── */}
              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col flex-1 overflow-hidden"
                  >

                    {/* ── MESSAGES ── */}
                    <div
                      ref={scrollRef}
                      className="flex-1 overflow-y-auto px-4 py-4 space-y-3 forge-scroll"
                      style={{ background: "#F7F5F0" }}
                    >
                      {messages.map((msg, idx) => (
                        <Bubble key={idx} msg={msg} isNew={justAdded.has(idx)} />
                      ))}

                      {isLoading && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-end gap-2"
                        >
                          <div
                            className="w-6 h-6 bg-[#1C1C1C] text-[#E8C547] flex items-center justify-center text-[9px] font-black flex-shrink-0"
                            style={{ fontFamily: "'Georgia', serif" }}
                          >
                            F
                          </div>
                          <div className="bg-white border border-[#E2DDD5]">
                            <TypingDots />
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* ── QUICK PROMPTS (only on first message) ── */}
                    {messages.length === 1 && (
                      <div className="px-4 pt-3 pb-2 border-t border-[#E8E4DC]" style={{ background: "#F7F5F0" }}>
                        <p
                          className="text-[8px] text-[#BBB] uppercase tracking-[0.22em] mb-2 font-bold"
                          style={{ fontFamily: "system-ui, sans-serif" }}
                        >
                          Suggested
                        </p>
                        <div className="flex flex-col gap-1.5">
                          {QUICK_PROMPTS.map((q, idx) => (
                            <button
                              key={idx}
                              onClick={() => send(q)}
                              className="chip-hover text-left text-[11px] border border-[#D5D0C8] bg-white px-3 py-2 text-[#555] transition-all duration-150 flex items-center justify-between group"
                              style={{ fontFamily: "system-ui, sans-serif" }}
                            >
                              <span>{q}</span>
                              <span className="chip-arrow opacity-0 text-[#E8C547] transition-opacity text-[10px]">→</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ── INPUT ── */}
                    <div
                      className="px-4 py-3 border-t border-[#D5D0C8] flex-shrink-0"
                      style={{ background: "white" }}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          ref={inputRef}
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyDown={handleKey}
                          placeholder="Ask Forge anything about Indian startups…"
                          className="flex-1 bg-[#F7F5F0] border border-[#D5D0C8] py-2.5 px-3 text-[12px] text-[#1C1C1C] placeholder-[#BBB] focus:outline-none focus:border-[#1C1C1C] transition-colors"
                          style={{ fontFamily: "system-ui, sans-serif" }}
                          disabled={isLoading}
                        />
                        <button
                          onClick={() => send()}
                          disabled={isLoading || !input.trim()}
                          className={`w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-150 ${
                            input.trim() && !isLoading
                              ? "bg-[#1C1C1C] text-white hover:bg-[#E8C547] hover:text-[#1C1C1C]"
                              : "bg-[#EEEAE3] text-[#CCC] cursor-not-allowed"
                          }`}
                        >
                          {isLoading ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <Send className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      {/* Footer branding */}
                      <div className="flex items-center justify-between mt-2">
                        <p
                          className="text-[8px] text-[#CCC]"
                          style={{ fontFamily: "system-ui, sans-serif" }}
                        >
                          Forge · UpForge AI · India's startup expert
                        </p>
                        <p
                          className="text-[8px] text-[#CCC]"
                          style={{ fontFamily: "system-ui, sans-serif" }}
                        >
                          Press ⏎ to send
                        </p>
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          )}
        </AnimatePresence>

        {/* ── TOOLTIP ── */}
        <ForgeTooltip show={showTooltip} />

        {/* ── FLOATING BUTTON ── */}
        <ForgeButton
          isOpen={isOpen}
          newMsgCount={newMsgCount}
          onClick={() => {
            setIsOpen(!isOpen);
            setIsMinimized(false);
          }}
        />

      </div>
    </>
  );
}
