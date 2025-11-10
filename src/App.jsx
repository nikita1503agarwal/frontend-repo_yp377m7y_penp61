import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400/70 to-violet-500/70 ring-1 ring-white/20 shadow-inner" />
          <span className="font-semibold text-white/90 text-lg">Nebula</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#blog" className="hover:text-white transition">Blog</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg text-white/80 hover:text-white">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/20">Create account</button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white/80">☰</button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 text-white/80 space-y-2">
          <a href="#features" className="block">Features</a>
          <a href="#pricing" className="block">Pricing</a>
          <a href="#blog" className="block">Blog</a>
          <a href="#contact" className="block">Contact</a>
          <div className="pt-2 flex gap-2">
            <button className="flex-1 px-4 py-2 rounded-lg text-white/80 hover:text-white ring-1 ring-white/10">Sign in</button>
            <button className="flex-1 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/20">Create account</button>
          </div>
        </div>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.35),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.35),transparent_35%)]" />
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 py-24">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 ring-1 ring-white/20 backdrop-blur"> 
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live for fintech teams
            </span>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-md">
              Build trust with modern, glassmorphic finance UIs
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              Launch a polished SaaS with 3D micro-interactions, dark gradients, and conversion-ready flows.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white ring-1 ring-white/20 text-center">Start free</a>
              <a href="#demo" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400/80 to-fuchsia-500/80 text-black font-semibold ring-1 ring-white/30 text-center">Book a demo</a>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={`https://i.pravatar.cc/48?img=${i+10}`} className="w-8 h-8 rounded-full ring-2 ring-white/20" />
                ))}
              </div>
              <span>Trusted by 1,200+ product teams</span>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const [plans, setPlans] = useState([])
  useEffect(() => {
    fetch(`${API_URL}/api/pricing`).then(r => r.json()).then(d => setPlans(d.plans || [])).catch(() => {})
  }, [])
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, transparent pricing</h2>
          <p className="text-white/60 mt-2">Scale as you grow. Cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className={`rounded-2xl p-6 backdrop-blur-xl bg-white/5 ring-1 ring-white/10 ${p.highlight ? 'shadow-[0_0_0_1px_rgba(255,255,255,0.15)]' : ''}`}>
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl text-white">{p.name}</h3>
                {p.highlight && <span className="px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-cyan-400/40 to-fuchsia-500/40 text-black ring-1 ring-white/20">Popular</span>}
              </div>
              <div className="text-white"><span className="text-4xl font-semibold">${p.price}</span>/<span className="text-white/60">{p.period}</span></div>
              <ul className="mt-6 space-y-2 text-white/80">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />{f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/20">{p.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [items, setItems] = useState([])
  useEffect(() => { fetch(`${API_URL}/api/testimonials`).then(r => r.json()).then(d => setItems(d.testimonials||[])) }, [])
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.15),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl p-6 backdrop-blur-xl bg-white/5 ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <img src={t.avatar} className="w-10 h-10 rounded-full ring-2 ring-white/20" />
                <div>
                  <div className="text-white">{t.name}</div>
                  <div className="text-white/60 text-sm">{t.role}</div>
                </div>
              </div>
              <p className="text-white/80 mt-4">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Blog() {
  const [posts, setPosts] = useState([])
  useEffect(() => { fetch(`${API_URL}/api/blog`).then(r=>r.json()).then(d=>setPosts(d.posts||[])) }, [])
  return (
    <section id="blog" className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-3xl text-white font-semibold">From the blog</h3>
            <p className="text-white/60">Insights on product, design, and growth</p>
          </div>
          <a className="text-cyan-300/80 hover:text-cyan-200" href="#">View all</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.id} className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 ring-1 ring-white/10">
              <div className="h-40 bg-gradient-to-br from-white/10 to-white/0" />
              <div className="p-6">
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-white/70">{p.tag}</span>
                <h4 className="text-xl text-white mt-3">{p.title}</h4>
                <p className="text-white/70 mt-2">{p.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [state, setState] = useState({ loading: false, success: null, error: null })

  const submit = async (e) => {
    e.preventDefault()
    setState({ loading: true, success: null, error: null })
    try {
      const res = await fetch(`${API_URL}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setState({ loading: false, success: 'Thanks! We will get back to you soon.', error: null })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setState({ loading: false, success: null, error: err.message })
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.18),transparent_40%)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-6 md:p-8 backdrop-blur-2xl bg-white/5 ring-1 ring-white/10">
          <h3 className="text-3xl text-white font-semibold">Contact us</h3>
          <p className="text-white/70 mt-1">Have questions? Tell us about your use case.</p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-white/30" />
              <input value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} placeholder="Email" type="email" className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-white/30" />
            </div>
            <textarea value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} placeholder="Message" rows="5" className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-white/30" />
            <div className="flex items-center gap-3">
              <button disabled={state.loading} className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400/80 to-fuchsia-500/80 text-black font-semibold ring-1 ring-white/30 disabled:opacity-60">
                {state.loading ? 'Sending…' : 'Send message'}
              </button>
              {state.success && <span className="text-emerald-300/90">{state.success}</span>}
              {state.error && <span className="text-rose-300/90">{state.error}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 text-center text-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
        <p>© {new Date().getFullYear()} Nebula — All rights reserved.</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <Navbar />
      <Hero />
      <main className="relative z-10">
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
