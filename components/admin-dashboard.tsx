"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Startup } from "@/types/startup"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Plus, Pencil, Trash2, LogOut, X, Star, Check } from "lucide-react"

interface AdminDashboardProps {
  startups: Startup[]
  userEmail: string
}

interface StartupForm {
  name: string
  slug: string
  description: string
  website: string
  logo_url: string
  founders: string
  founded_year: string
  category: string
  is_featured: boolean
}

const emptyForm: StartupForm = {
  name: "", slug: "", description: "", website: "",
  logo_url: "", founders: "", founded_year: "", category: "", is_featured: false,
}

// ── Black → Gold checkbox replacing Switch ──────────────────────────────────
function GoldCheckbox({ checked, onCheckedChange }: { checked: boolean; onCheckedChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onCheckedChange(!checked)}
      aria-checked={checked}
      role="checkbox"
      style={{
        width: 22,
        height: 22,
        border: checked ? "1.5px solid #C8A84B" : "1.5px solid #C8C2B4",
        background: checked ? "#1A1208" : "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.22s cubic-bezier(0.16,1,0.3,1)",
        boxShadow: checked ? "inset 0 0 0 10px #1A1208, 0 0 0 2px rgba(200,168,75,0.25)" : "none",
        flexShrink: 0,
        outline: "none",
        borderRadius: 0,
      }}
    >
      {checked && (
        <Check size={12} style={{ color: "#C8A84B", strokeWidth: 3 }} />
      )}
    </button>
  )
}

export function AdminDashboard({ startups, userEmail }: AdminDashboardProps) {
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<StartupForm>(emptyForm)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  const handleAdd = () => { setEditingId(null); setForm(emptyForm); setShowForm(true) }

  const handleEdit = (startup: Startup) => {
    setEditingId(startup.id)
    setForm({
      name: startup.name || "",
      slug: startup.slug || "",
      description: startup.description || "",
      website: startup.website || "",
      logo_url: startup.logo_url || "",
      founders: Array.isArray(startup.founders) ? startup.founders.join(", ") : startup.founders || "",
      founded_year: startup.founded_year?.toString() || "",
      category: startup.category || "",
      is_featured: startup.is_featured ?? false,
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this startup?")) return
    await supabase.from("startups").delete().eq("id", id)
    router.refresh()
  }

  const generateSlug = (name: string) =>
    name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const payload = {
      name: form.name,
      slug: form.slug || generateSlug(form.name),
      description: form.description,
      website: form.website || null,
      logo_url: form.logo_url || null,
      founders: form.founders || null,
      founded_year: form.founded_year ? parseInt(form.founded_year) : null,
      category: form.category || null,
      is_featured: form.is_featured ?? false,
      updated_at: new Date().toISOString(),
    }
    try {
      const { error } = editingId
        ? await supabase.from("startups").update(payload).eq("id", editingId)
        : await supabase.from("startups").insert([payload])
      if (error) throw error
      setShowForm(false); setForm(emptyForm); setEditingId(null)
      router.refresh()
    } catch (err: any) {
      alert("Error saving: " + err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap');

        .dash-root {
          min-height: 100svh;
          background: #F3EFE5;
          font-family: 'DM Sans', system-ui, sans-serif;
          color: #1A1208;
        }

        /* Ruled paper texture */
        .dash-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: repeating-linear-gradient(
            0deg, transparent, transparent 47px,
            rgba(26,18,8,0.03) 47px, rgba(26,18,8,0.03) 48px
          );
          pointer-events: none;
          z-index: 0;
        }

        /* ── HEADER ── */
        .dash-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #FFFFFF;
          border-bottom: 3px solid #1A1208;
          padding: 0.9rem 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 1px 12px rgba(26,18,8,0.06);
        }
        @media (min-width: 640px) {
          .dash-header { padding: 1rem 2rem; }
        }

        .dash-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .dash-logo-mark {
          width: 36px;
          height: 36px;
          background: #1A1208;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 0.85rem;
          font-weight: 900;
          color: #F3EFE5;
          flex-shrink: 0;
        }

        .dash-header-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1rem;
          font-weight: 900;
          color: #1A1208;
          letter-spacing: -0.01em;
        }

        .dash-header-email {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          color: #AAA09A;
          margin-top: 1px;
        }

        .sign-out-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.8rem;
          background: transparent;
          border: 1px solid #C8C2B4;
          color: #8A7A68;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
          cursor: pointer;
          font-family: 'DM Sans', system-ui, sans-serif;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          border-radius: 0;
        }
        .sign-out-btn:hover {
          border-color: #1A1208;
          color: #1A1208;
          background: rgba(26,18,8,0.04);
        }

        /* ── MAIN ── */
        .dash-main {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 1.25rem;
        }
        @media (min-width: 640px) {
          .dash-main { padding: 2.5rem 2rem; }
        }

        .dash-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.75rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid #C8C2B4;
        }

        .dash-section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          font-weight: 900;
          color: #1A1208;
          letter-spacing: -0.02em;
        }

        .count-badge {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          color: #AAA09A;
          margin-left: 0.4rem;
        }

        .add-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1rem;
          background: #1A1208;
          border: none;
          color: #F3EFE5;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: 'DM Sans', system-ui, sans-serif;
          transition: background 0.2s, transform 0.15s;
          border-radius: 0;
        }
        .add-btn:hover { background: #2C1F0F; transform: translateY(-1px); }

        /* ── FORM PANEL ── */
        .form-panel {
          background: #FFFFFF;
          border: 1.5px solid #C8C2B4;
          border-top: 2px solid #1A1208;
          padding: 1.75rem 1.25rem;
          margin-bottom: 1.75rem;
          position: relative;
          animation: formSlide 0.3s cubic-bezier(0.16,1,0.3,1) both;
          box-shadow: 0 2px 16px rgba(26,18,8,0.06);
        }
        @media (min-width: 640px) {
          .form-panel { padding: 2rem; }
        }
        @keyframes formSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .form-close {
          position: absolute;
          top: 1rem; right: 1rem;
          background: none;
          border: none;
          color: #B0A898;
          cursor: pointer;
          padding: 0.25rem;
          transition: color 0.15s;
        }
        .form-close:hover { color: #1A1208; }

        .form-grid-2 {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: 1fr;
          margin-bottom: 1.25rem;
        }
        @media (min-width: 540px) {
          .form-grid-2 { grid-template-columns: 1fr 1fr; }
        }

        /* Override shadcn components for warm theme */
        .dash-root input,
        .dash-root textarea {
          background: #FAFAF8 !important;
          border-color: #D8D2C4 !important;
          color: #1A1208 !important;
          font-family: 'DM Sans', system-ui, sans-serif !important;
          font-size: 0.84rem !important;
          border-radius: 0 !important;
        }
        .dash-root input:focus,
        .dash-root textarea:focus {
          border-color: #1A1208 !important;
          background: #FFFFFF !important;
          box-shadow: 0 0 0 2px rgba(26,18,8,0.06) !important;
          outline: none !important;
        }
        .dash-root input::placeholder,
        .dash-root textarea::placeholder { color: #C0B8AC !important; }
        .dash-root label {
          color: #8A7A68 !important;
          font-size: 0.6rem !important;
          text-transform: uppercase !important;
          letter-spacing: 0.18em !important;
          font-weight: 600 !important;
        }

        /* Featured toggle box */
        .featured-box {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.55rem 0.9rem;
          border: 1.5px solid #D8D2C4;
          background: #FAFAF8;
          cursor: pointer;
          transition: border-color 0.22s, background 0.22s, box-shadow 0.22s;
          user-select: none;
        }
        .featured-box:hover { border-color: #C8C2B4; }
        .featured-box.active {
          border-color: #C8A84B;
          background: rgba(200,168,75,0.06);
          box-shadow: 0 0 0 2px rgba(200,168,75,0.12);
        }

        .featured-label {
          font-size: 0.62rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-weight: 700;
          color: #B0A898;
          transition: color 0.22s;
        }
        .featured-box.active .featured-label { color: #8A6A18; }

        .star-icon {
          transition: opacity 0.2s, transform 0.25s;
          transform: scale(0);
          opacity: 0;
        }
        .featured-box.active .star-icon {
          transform: scale(1);
          opacity: 1;
        }

        /* Save button */
        .save-btn {
          padding: 0.65rem 1.5rem;
          background: #1A1208;
          border: none;
          color: #F3EFE5;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: 'DM Sans', system-ui, sans-serif;
          transition: background 0.2s;
          border-radius: 0;
          margin-top: 1.5rem;
        }
        .save-btn:disabled { opacity: 0.45; cursor: not-allowed; }
        .save-btn:hover:not(:disabled) { background: #2C1F0F; }

        /* ── TABLE ── */
        .table-wrap {
          background: #FFFFFF;
          border: 1.5px solid #C8C2B4;
          border-top: 2px solid #1A1208;
          overflow: hidden;
          overflow-x: auto;
          box-shadow: 0 1px 12px rgba(26,18,8,0.05);
        }

        table { width: 100%; border-collapse: collapse; min-width: 480px; }

        thead { background: #F3EFE5; border-bottom: 1px solid #C8C2B4; }

        th {
          padding: 0.7rem 1.25rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: #AAA09A;
          text-align: left;
          font-weight: 400;
          white-space: nowrap;
        }

        tbody tr {
          border-bottom: 1px solid #EDE9E0;
          transition: background 0.12s;
        }
        tbody tr:last-child { border-bottom: none; }
        tbody tr:hover { background: #FAFAF8; }

        td { padding: 0.875rem 1.25rem; font-size: 0.82rem; color: #6B5C40; vertical-align: middle; }

        .startup-name {
          font-size: 0.84rem;
          font-weight: 600;
          color: #1A1208;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        .logo-img {
          width: 30px;
          height: 30px;
          object-fit: contain;
          border: 1px solid #D8D2C4;
          background: #FAFAF8;
          flex-shrink: 0;
        }

        .category-tag {
          display: inline-block;
          padding: 0.18rem 0.55rem;
          background: #F3EFE5;
          border: 1px solid #D8D2C4;
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          color: #8A7A68;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .action-btn {
          padding: 0.35rem;
          background: none;
          border: 1px solid transparent;
          color: #C8C2B4;
          cursor: pointer;
          transition: color 0.15s, border-color 0.15s;
          display: inline-flex;
          align-items: center;
          border-radius: 0;
        }
        .action-btn:hover { color: #5A4A30; border-color: #D8D2C4; }
        .action-btn.danger:hover { color: #B91C1C; border-color: #FCA5A5; }

        .empty-state {
          text-align: center;
          padding: 4rem 1rem;
          color: #C8C2B4;
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* ── FEATURED STAR IN TABLE ── */
        .featured-star {
          color: #C8A84B;
          fill: #C8A84B;
        }
      `}</style>

      <div className="dash-root">
        {/* HEADER */}
        <header className="dash-header">
          <div className="dash-logo">
            <div className="dash-logo-mark">UF</div>
            <div>
              <div className="dash-header-title">UpForge Admin</div>
              <div className="dash-header-email">{userEmail}</div>
            </div>
          </div>
          <button className="sign-out-btn" onClick={handleSignOut}>
            <LogOut size={12} />
            Sign Out
          </button>
        </header>

        <div className="dash-main">
          {/* Top Bar */}
          <div className="dash-topbar">
            <h2 className="dash-section-title">
              Startups
              <span className="count-badge">({startups.length})</span>
            </h2>
            <button className="add-btn" onClick={handleAdd}>
              <Plus size={13} />
              Add Startup
            </button>
          </div>

          {/* FORM */}
          {showForm && (
            <div className="form-panel">
              <button className="form-close" onClick={() => setShowForm(false)}>
                <X size={14} />
              </button>

              <form onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div>
                    <Label>Name</Label>
                    <Input required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value, slug: editingId ? form.slug : generateSlug(e.target.value) })} />
                  </div>
                  <div>
                    <Label>Slug</Label>
                    <Input required value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
                  </div>
                </div>

                <div style={{ marginBottom: "1.25rem" }}>
                  <Label>Description</Label>
                  <Textarea required rows={3} value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })} />
                </div>

                <div className="form-grid-2">
                  <div>
                    <Label>Logo URL</Label>
                    <Input value={form.logo_url} onChange={(e) => setForm({ ...form, logo_url: e.target.value })} />
                  </div>
                  <div>
                    <Label>Category</Label>
                    <Input required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
                  </div>
                </div>

                <div className="form-grid-2" style={{ marginTop: "1.25rem" }}>
                  <div>
                    <Label>Founders</Label>
                    <Input required value={form.founders} onChange={(e) => setForm({ ...form, founders: e.target.value })} />
                  </div>
                  <div>
                    <Label>Website</Label>
                    <Input type="url" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
                  </div>
                </div>

                <div className="form-grid-2" style={{ marginTop: "1.25rem", alignItems: "end" }}>
                  <div>
                    <Label>Founded Year</Label>
                    <Input type="number" value={form.founded_year}
                      onChange={(e) => setForm({ ...form, founded_year: e.target.value })} />
                  </div>

                  {/* Featured: black box → gold tick on check */}
                  <div style={{ paddingBottom: "2px" }}>
                    <div
                      className={`featured-box${form.is_featured ? " active" : ""}`}
                      onClick={() => setForm({ ...form, is_featured: !form.is_featured })}
                    >
                      <GoldCheckbox
                        checked={form.is_featured}
                        onCheckedChange={(v) => setForm({ ...form, is_featured: v })}
                      />
                      <span className="featured-label">Featured</span>
                      <Star
                        size={12}
                        className="star-icon"
                        style={{ color: "#C8A84B", fill: "#C8A84B" }}
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="save-btn">
                  {isSubmitting ? "Saving..." : editingId ? "Update Startup" : "Add Startup"}
                </button>
              </form>
            </div>
          )}

          {/* TABLE */}
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Startup</th>
                  <th>Category</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {startups.map((s) => (
                  <tr key={s.id}>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                        {s.logo_url && <img src={s.logo_url} className="logo-img" alt="" />}
                        <div className="startup-name">
                          {s.name}
                          {s.is_featured && (
                            <Star size={11} className="featured-star" />
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      {s.category
                        ? <span className="category-tag">{s.category}</span>
                        : <span style={{ color: "#D8D2C4" }}>—</span>}
                    </td>
                    <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                      <button className="action-btn" onClick={() => handleEdit(s)} style={{ marginRight: "0.25rem" }}>
                        <Pencil size={13} />
                      </button>
                      <button className="action-btn danger" onClick={() => handleDelete(s.id)}>
                        <Trash2 size={13} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {startups.length === 0 && (
              <div className="empty-state">No startups yet · Add one above ✦</div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
