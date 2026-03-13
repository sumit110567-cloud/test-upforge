"use client"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { Shield, Eye, EyeOff, Lock } from "lucide-react"

const TYPEWRITER_TEXT = "Entering UpForge Startup Database..."

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const router = useRouter()
  const typeIndexRef = useRef(0)
  const typeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTypewriter = () => {
    setIsTyping(true)
    setTypedText("")
    typeIndexRef.current = 0

    typeIntervalRef.current = setInterval(() => {
      typeIndexRef.current++
      setTypedText(TYPEWRITER_TEXT.slice(0, typeIndexRef.current))
      if (typeIndexRef.current >= TYPEWRITER_TEXT.length) {
        clearInterval(typeIntervalRef.current!)
      }
    }, 38)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)
    startTypewriter()

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      setLoginSuccess(true)
      setTimeout(() => router.push("/admin"), 1400)
    } catch (error: unknown) {
      setIsTyping(false)
      setTypedText("")
      clearInterval(typeIntervalRef.current!)
      setError(error instanceof Error ? error.message : "Invalid credentials")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      if (typeIntervalRef.current) clearInterval(typeIntervalRef.current)
    }
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=Geist:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .login-root {
          min-height: 100svh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          font-family: 'Geist', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Subtle grid background */
        .login-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* Radial glow center */
        .login-root::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        .login-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 420px;
          background: #111111;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 2.5rem 2rem;
          animation: cardReveal 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }

        @media (min-width: 480px) {
          .login-card { padding: 3rem 2.5rem; }
        }

        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Corner accents */
        .login-card::before,
        .login-card::after {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          border-color: #D4AF37;
          border-style: solid;
        }
        .login-card::before {
          top: -1px; left: -1px;
          border-width: 2px 0 0 2px;
        }
        .login-card::after {
          bottom: -1px; right: -1px;
          border-width: 0 2px 2px 0;
        }

        /* Logo */
        .logo-mark {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #D4AF37 0%, #B8962A 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Serif Display', serif;
          font-size: 1.1rem;
          color: #0a0a0a;
          font-weight: 400;
          letter-spacing: 0.5px;
          margin: 0 auto 1.5rem;
        }

        .login-title {
          font-family: 'DM Serif Display', serif;
          font-size: 2rem;
          color: #f0ece0;
          text-align: center;
          letter-spacing: -0.5px;
          margin: 0 0 0.4rem;
          line-height: 1.1;
        }

        .login-subtitle {
          font-size: 0.8rem;
          color: #555;
          text-align: center;
          margin: 0 0 1.25rem;
          letter-spacing: 0.01em;
        }

        .secure-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          color: #444;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin-bottom: 2rem;
        }

        /* Form */
        .field-group { margin-bottom: 1.25rem; }

        .field-label {
          display: block;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #555;
          margin-bottom: 0.5rem;
          font-family: 'DM Mono', monospace;
        }

        .field-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: #0d0d0d;
          border: 1px solid rgba(255,255,255,0.08);
          color: #e8e4d8;
          font-size: 0.875rem;
          font-family: 'Geist', sans-serif;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          -webkit-appearance: none;
        }

        .field-input::placeholder { color: #333; }

        .field-input:focus {
          border-color: rgba(212,175,55,0.4);
          background: #0f0f0f;
        }

        .password-wrap {
          position: relative;
        }

        .password-wrap .field-input {
          padding-right: 3rem;
        }

        .eye-btn {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #444;
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          transition: color 0.15s;
        }
        .eye-btn:hover { color: #888; }

        /* Typewriter area */
        .typewriter-bar {
          height: 2rem;
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          overflow: hidden;
        }

        .typewriter-text {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          color: #D4AF37;
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .typewriter-cursor {
          display: inline-block;
          width: 7px;
          height: 13px;
          background: #D4AF37;
          animation: blink 0.8s step-end infinite;
          vertical-align: middle;
          flex-shrink: 0;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        /* Error */
        .error-box {
          padding: 0.75rem 1rem;
          background: rgba(220,38,38,0.08);
          border: 1px solid rgba(220,38,38,0.2);
          margin-bottom: 1.25rem;
          font-size: 0.8rem;
          color: #f87171;
          animation: errorShake 0.35s cubic-bezier(0.36,0.07,0.19,0.97);
        }

        @keyframes errorShake {
          10%, 90% { transform: translateX(-2px); }
          20%, 80% { transform: translateX(3px); }
          30%, 50%, 70% { transform: translateX(-3px); }
          40%, 60% { transform: translateX(3px); }
        }

        /* Submit button */
        .submit-btn {
          width: 100%;
          padding: 0.875rem 1rem;
          background: linear-gradient(135deg, #D4AF37 0%, #b8962a 100%);
          border: none;
          color: #0a0a0a;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: 'Geist', sans-serif;
          transition: opacity 0.2s, transform 0.15s;
          position: relative;
          overflow: hidden;
        }

        .submit-btn:hover:not(:disabled) {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        .submit-btn:active:not(:disabled) { transform: translateY(0); }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Success overlay pulse */
        .login-card.success {
          border-color: rgba(212,175,55,0.3);
          transition: border-color 0.5s;
        }

        .footer-note {
          text-align: center;
          font-size: 0.65rem;
          color: #333;
          margin-top: 1.75rem;
          letter-spacing: 0.06em;
          font-family: 'DM Mono', monospace;
        }
      `}</style>

      <div className="login-root">
        <div className={`login-card${loginSuccess ? " success" : ""}`}>
          {/* Logo */}
          <div className="logo-mark">UF</div>

          {/* Heading */}
          <h1 className="login-title">Admin Access</h1>
          <p className="login-subtitle">Sign in to manage the startup registry</p>

          <div className="secure-badge">
            <Shield size={11} />
            <span>Secure · Authorized only</span>
          </div>

          <div className="divider" />

          {/* Form */}
          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="field-group">
              <label htmlFor="email" className="field-label">Email</label>
              <input
                id="email"
                type="email"
                placeholder="admin@upforge.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field-input"
              />
            </div>

            {/* Password */}
            <div className="field-group">
              <label htmlFor="password" className="field-label">Password</label>
              <div className="password-wrap">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="field-input"
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Typewriter area */}
            <div className="typewriter-bar">
              {isTyping && (
                <span className="typewriter-text">
                  <Lock size={10} style={{ marginRight: 6, opacity: 0.7, flexShrink: 0 }} />
                  {typedText}
                  <span className="typewriter-cursor" />
                </span>
              )}
            </div>

            {/* Error */}
            {error && (
              <div className="error-box">{error}</div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading || loginSuccess}
              className="submit-btn"
            >
              {loginSuccess ? "Access Granted" : isLoading ? "Verifying..." : "Sign In"}
            </button>
          </form>

          <p className="footer-note">Authorized personnel only · UpForge Registry</p>
        </div>
      </div>
    </>
  )
}
