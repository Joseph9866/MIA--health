import { useState, useEffect, useRef } from 'react'

function Faq() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (idx) => setOpenIndex((prev) => (prev === idx ? null : idx))

  return (
    <div className="mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2">
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <button type="button" onClick={() => toggle(0)} aria-expanded={openIndex === 0} className="w-full text-left flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="help-circle" className="lucide lucide-help-circle mt-0.5 h-5 w-5 text-[#1A328A]"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4"></path><line x1="12" x2="12.01" y1="17" y2="17"></line></svg>
          <span className="text-sm font-medium text-slate-900 font-space-grotesk">What services does MIA Health Solutions provide?</span>
        </button>
        {openIndex === 0 && (
          <div className="mt-3 text-sm text-slate-600 font-manrope">We offer hospital operations optimization, clinical governance, workforce development, digital transformation, and strategy execution tailored to your facility.</div>
        )}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <button type="button" onClick={() => toggle(1)} aria-expanded={openIndex === 1} className="w-full text-left flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="workflow" className="lucide lucide-workflow mt-0.5 h-5 w-5 text-[#1A328A]"><path d="M4 5h6"></path><rect width="10" height="7" x="10" y="3" rx="2"></rect><path d="M12 14h2"></path><path d="M4 19h6"></path><rect width="10" height="7" x="10" y="16" rx="2"></rect></svg>
          <span className="text-sm font-medium text-slate-900 font-space-grotesk">How do engagements typically start?</span>
        </button>
        {openIndex === 1 && (
          <div className="mt-3 text-sm text-slate-600 font-manrope">We begin with a discovery assessment to align on goals and constraints, followed by a co-created roadmap with measurable milestones.</div>
        )}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <button type="button" onClick={() => toggle(2)} aria-expanded={openIndex === 2} className="w-full text-left flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="graduation-cap" className="lucide lucide-graduation-cap mt-0.5 h-5 w-5 text-[#1A328A]"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
          <span className="text-sm font-medium text-slate-900 font-space-grotesk">Do you provide staff training and capacity building?</span>
        </button>
        {openIndex === 2 && (
          <div className="mt-3 text-sm text-slate-600 font-manrope">Yes. We deliver targeted training, coaching, and on-the-job mentorship to embed sustainable practices across teams.</div>
        )}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <button type="button" onClick={() => toggle(3)} aria-expanded={openIndex === 3} className="w-full text-left flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="shield-check" className="lucide lucide-shield-check mt-0.5 h-5 w-5 text-[#1A328A]"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
          <span className="text-sm font-medium text-slate-900 font-space-grotesk">How do you ensure data privacy and compliance?</span>
        </button>
        {openIndex === 3 && (
          <div className="mt-3 text-sm text-slate-600 font-manrope">We follow strict governance, role-based access, and regulatory-aligned protocols throughout discovery, implementation, and monitoring.</div>
        )}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <button type="button" onClick={() => toggle(4)} aria-expanded={openIndex === 4} className="w-full text-left flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="clock" className="lucide lucide-clock mt-0.5 h-5 w-5 text-[#1A328A]"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
          <span className="text-sm font-medium text-slate-900 font-space-grotesk">What timelines should we expect to see results?</span>
        </button>
        {openIndex === 4 && (
          <div className="mt-3 text-sm text-slate-600 font-manrope">Quick wins are targeted within weeks, with sustained outcome improvements tracked across agreed quarterly milestones.</div>
        )}
      </div>
    </div>
  )
}

function App() {
  const year = new Date().getFullYear()
  const [mobileOpen, setMobileOpen] = useState(false)
  const marqueeRef = useRef(null)
  const pauseRef = useRef(false)

  useEffect(() => {
    const track = marqueeRef.current
    if (!track) return
    let x = 0
    let prev = performance.now()
    let raf
    const speed = 60 // px per second

    const getGap = () => {
      const cs = getComputedStyle(track)
      const gap = parseFloat(cs.columnGap || cs.gap || '0')
      return isNaN(gap) ? 0 : gap
    }

    const tick = (now) => {
      const dt = (now - prev) / 1000
      prev = now
      if (!pauseRef.current) {
        x -= speed * dt
        const first = track.firstElementChild
        if (first) {
          const itemWidth = first.offsetWidth + getGap()
          while (-x >= itemWidth) {
            track.appendChild(first)
            x += itemWidth
          }
        }
        track.style.transform = `translateX(${x}px)`
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-3 group">

              <img src="https://iili.io/KrAzn7n.png" alt="mia logo" className="h-9 w-9" />

              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-tight text-slate-900 font-space-grotesk">MIA Health Solutions</span>
                <span className="text-[11px] text-slate-500 font-space-grotesk">Transforming Global Health Systems</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a
                href="#services"
                className="text-slate-600 hover:text-slate-900 transition-colors font-space-grotesk"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('services')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                Services
              </a>
              <a
                href="#why-us"
                className="text-slate-600 hover:text-slate-900 transition-colors font-space-grotesk"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('why-us')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                Why Us
              </a>
              {/* <a
                href="#approach"
                className="text-slate-600 hover:text-slate-900 transition-colors font-space-grotesk"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('approach')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                Approach
              </a> */}
              <a
                href="#outcomes"
                className="text-slate-600 hover:text-slate-900 transition-colors font-space-grotesk"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('outcomes')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                Outcomes
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-slate-900 transition-colors font-space-grotesk"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('about')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-slate-900 transition-colors font-space-grotesk"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('contact')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                Contact
              </a>
            </nav>  

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="md:hidden inline-flex items-center rounded-md border border-slate-200 px-2.5 py-2 text-slate-800 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A328A]/40"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="x" className="h-5 w-5"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="menu" className="h-5 w-5"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                )}
              </button>
              <a href="#contact" className="hidden sm:inline-flex items-center rounded-md border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A328A]/40 font-space-grotesk">
                Talk to an expert
              </a>
              <a href="#cta" className="hidden md:inline-flex items-center rounded-md bg-[#1A328A] px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#162A74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A328A]/50 font-space-grotesk">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
          {mobileOpen && (
            <div className="md:hidden absolute right-4 top-16 w-56 rounded-lg border border-slate-200 bg-white shadow-lg py-2">
              <a
                href="#services"
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-space-grotesk"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('services')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  setMobileOpen(false)
                }}
              >
                Services
              </a>
              <a
                href="#why-us"
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-space-grotesk"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('why-us')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  setMobileOpen(false)
                }}
              >
                Why Us
              </a>
              <a
                href="#outcomes"
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-space-grotesk"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('outcomes')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  setMobileOpen(false)
                }}
              >
                Outcomes
              </a>
              <a
                href="#about"
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-space-grotesk"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('about')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  setMobileOpen(false)
                }}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-space-grotesk"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('contact')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  setMobileOpen(false)
                }}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-slate-50/60"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-14 lg:py-24">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 font-space-grotesk font-semibold">
                MIA Health Solutions
              </h1>
              <h1 className="text-1xl sm:text-2xl lg:text-3xl tracking-tight text-slate-900 font-space-grotesk font-medium">
                   Transforming Global Health Systems
              </h1>
              <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-slate-600 font-space-grotesk">
                Mia Health Solutions is the leader in transforming global health system, through excellent healthcare management and social behaviour change. At MIA Health Solutions, we believe that every healthcare institution has the potential to deliver world-class services with the right systems, people, and strategy in place. We are a hospital management consultancy dedicated to driving operational excellence, improving patient outcomes, and ensuring financial sustainability for healthcare organizations globally.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#services" className="inline-flex items-center rounded-md bg-[#1A328A] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#162A74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A328A]/50 font-space-grotesk">
                  Explore Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="stethoscope" className="lucide lucide-stethoscope ml-2 h-4 w-4"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
                </a>
                <a href="#contact" className="inline-flex items-center rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A328A]/40 font-space-grotesk">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="phone" className="lucide lucide-phone ml-2 h-4 w-4"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="gauge" className="lucide lucide-gauge h-4 w-4 text-[#1A328A]"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
                    <span className="text-sm font-medium font-space-grotesk">Operational Excellence</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500 font-space-grotesk">Optimize systems and processes end-to-end.</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="heart-pulse" className="lucide lucide-heart-pulse h-4 w-4 text-[#1A328A]"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
                    <span className="text-sm font-medium font-space-grotesk">Better Patient Outcomes</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500 font-space-grotesk">Improve safety, quality, and experience.</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="wallet" className="lucide lucide-wallet h-4 w-4 text-[#1A328A]"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                    <span className="text-sm font-medium font-space-grotesk">Financial Sustainability</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500 font-space-grotesk">Strengthen revenue and reduce waste.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-[#1A328A]/5 blur-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <img src="https://www.shutterstock.com/image-photo/doctor-healthcare-medicine-patient-talking-600nw-2191880035.jpg" alt="Healthcare professionals collaborating" className="h-80 sm:h-96 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-transparent"></div>
                  <div className="absolute bottom-0 p-4 sm:p-5">
                    <div className="inline-flex items-center rounded-md bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-800 backdrop-blur font-space-grotesk">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="hospital" className="lucide lucide-hospital mr-2 h-3.5 w-3.5 text-[#1A328A]"><path d="M12 7v4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M14 9h-4"></path><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"></path></svg>
                      Partnering with hospitals across the globe
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop" alt="Team" className="h-20 w-full object-cover rounded-lg border border-slate-200" />
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" alt="Patient care" className="h-20 w-full object-cover rounded-lg border border-slate-200" />
                  <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" alt="Operations" className="h-20 w-full object-cover rounded-lg border border-slate-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 sm:py-16 border-t border-slate-200 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl tracking-tight text-slate-900 font-space-grotesk font-medium">What We Do</h2>
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-slate-600 font-space-grotesk">
              We provide end-to-end hospital management consultancy services, working hand-in-hand with your team to optimize performance across all areas of your institution.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl tracking-tight text-slate-900 font-space-grotesk font-medium">Our Services</h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop" alt="Total Hospital Management" className="w-full h-40 object-cover block" />
              <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-[#1A328A]/10 text-[#1A328A] grid place-content-center border border-[#1A328A]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="hospital" className="lucide lucide-hospital h-4.5 w-4.5"><path d="M12 7v4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M14 9h-4"></path><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <h4 className="text-base font-medium text-slate-900 font-space-grotesk">TOTAL HOSPITAL MANAGEMENT</h4>
              </div>
              <p className="mt-2.5 text-sm text-slate-600 font-space-grotesk">End-to-end management for clinical, operational, and financial excellence.</p>
              <div className="mt-4 flex items-center text-sm text-[#1A328A] font-space-grotesk">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right mr-1.5 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Integrated oversight and delivery.
              </div>
              </div>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img src="https://kims.org.uk/wp-content/uploads/2019/01/Landing-page_Theatres.jpg" alt="Hospital Infrastructure Development" className="w-full h-40 object-cover block" />
              <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-[#1A328A]/10 text-[#1A328A] grid place-content-center border border-[#1A328A]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="building-2" className="lucide lucide-building-2 h-4.5 w-4.5"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"></path><path d="M6 18h12"></path><path d="M10 6h.01"></path><path d="M14 6h.01"></path><path d="M10 10h.01"></path><path d="M14 10h.01"></path><path d="M10 14h.01"></path><path d="M14 14h.01"></path></svg>
                </div>
                <h4 className="text-base font-medium text-slate-900 font-space-grotesk">HOSPITAL INFRASTRUCTURE DEVELOPMENT</h4>
              </div>
              <p className="mt-2.5 text-sm text-slate-600 font-space-grotesk">Facility planning, equipment, and technology enablement.</p>
              <div className="mt-4 flex items-center text-sm text-[#1A328A] font-space-grotesk">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right mr-1.5 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Build resilient, modern facilities.
              </div>
              </div>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img src="https://41809.fs1.hubspotusercontent-na1.net/hubfs/41809/Mentoring%20in%20Health%20Care%20(1).jpg" alt="Training and Capacity Building" className="w-full h-40 object-cover block" />
              <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-[#1A328A]/10 text-[#1A328A] grid place-content-center border border-[#1A328A]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="graduation-cap" className="lucide lucide-graduation-cap h-4.5 w-4.5"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
                </div>
                <h4 className="text-base font-medium text-slate-900 font-space-grotesk">TRAINING AND CAPACITY BUILDING</h4>
              </div>
              <p className="mt-2.5 text-sm text-slate-600 font-space-grotesk">Targeted training, coaching, and mentorship for lasting change.</p>
              <div className="mt-4 flex items-center text-sm text-[#1A328A] font-space-grotesk">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right mr-1.5 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Uplift skills and culture.
              </div>
              </div>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1200&auto=format&fit=crop" alt="Human Resource Management" className="w-full h-40 object-cover block" />
              <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-[#1A328A]/10 text-[#1A328A] grid place-content-center border border-[#1A328A]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="users" className="lucide lucide-users h-4.5 w-4.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                </div>
                <h4 className="text-base font-medium text-slate-900 font-space-grotesk">HUMAN RESOURCE MANAGEMENT</h4>
              </div>
              <p className="mt-2.5 text-sm text-slate-600 font-space-grotesk">Recruitment, retention, performance, and workforce planning.</p>
              <div className="mt-4 flex items-center text-sm text-[#1A328A] font-space-grotesk">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right mr-1.5 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Build high-performing teams.
              </div>
              </div>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop" alt="Healthcare Marketing" className="w-full h-40 object-cover block" />
              <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-[#1A328A]/10 text-[#1A328A] grid place-content-center border border-[#1A328A]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="megaphone" className="lucide lucide-megaphone h-4.5 w-4.5"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
                </div>
                <h4 className="text-base font-medium text-slate-900 font-space-grotesk">HEALTHCARE MARKETING</h4>
              </div>
              <p className="mt-2.5 text-sm text-slate-600 font-space-grotesk">Brand strategy, outreach, and reputation management for growth.</p>
              <div className="mt-4 flex items-center text-sm text-[#1A328A] font-space-grotesk">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right mr-1.5 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Grow awareness and trust.
              </div>
              </div>
            </div>            

            <div className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPToguhl_ppfgn8czNmk42HL6P3_7U9DnbLg&s" alt="Quality Management Systems" className="w-full h-40 object-cover block" />
              <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-[#1A328A]/10 text-[#1A328A] grid place-content-center border border-[#1A328A]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="shield-check" className="lucide lucide-shield-check h-4.5 w-4.5"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                </div>
                <h4 className="text-base font-medium text-slate-900 font-space-grotesk">QUALITY MANAGEMENT SYSTEMS</h4>
              </div>
              <p className="mt-2.5 text-sm text-slate-600 font-space-grotesk">Standards, audits, and continuous improvement frameworks.</p>
              <div className="mt-4 flex items-center text-sm text-[#1A328A] font-space-grotesk">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right mr-1.5 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Embed excellence and safety.
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-12 sm:py-16 bg-slate-50/50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-3xl sm:text-4xl tracking-tight text-slate-900 font-space-grotesk font-medium">Why Choose Us?</h3>
              <p className="mt-3 text-[15px] sm:text-base text-slate-600 font-space-grotesk">Partnering with MIA Health Solutions means unlocking:</p>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle-2" className="lucide lucide-check-circle-2 h-5 w-5 text-[#1A328A]"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  </span>
                  <span className="text-sm text-slate-700 font-space-grotesk">Improved operational efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle-2" className="lucide lucide-check-circle-2 h-5 w-5 text-[#1A328A]"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  </span>
                  <span className="text-sm text-slate-700 font-space-grotesk">Enhanced patient care &amp; satisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle-2" className="lucide lucide-check-circle-2 h-5 w-5 text-[#1A328A]"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  </span>
                  <span className="text-sm text-slate-700 font-space-grotesk">Increased financial stability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle-2" className="lucide lucide-check-circle-2 h-5 w-5 text-[#1A328A]"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  </span>
                  <span className="text-sm text-slate-700 font-space-grotesk">Better staff morale &amp; retention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle-2" className="lucide lucide-check-circle-2 h-5 w-5 text-[#1A328A]"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  </span>
                  <span className="text-sm text-slate-700 font-space-grotesk">Smarter, data-driven decision-making</span>
                </li>
              </ul>
            </div>
            <div className="lg:pl-8">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-[#1A328A]/10 text-[#1A328A] grid place-content-center border border-[#1A328A]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="target" className="lucide lucide-target h-4.5 w-4.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                </div>
                  <h4 className="text-base font-medium text-slate-900 font-space-grotesk">Our Approach</h4>
                </div>
                <p className="mt-2 text-sm text-slate-600 font-space-grotesk">
                  We start with a comprehensive needs assessment, then design a tailored strategy that aligns with your goals. Through structured implementation, continuous monitoring, and evaluation, we ensure long-term success and measurable impact.
                </p>

                <div id="approach" className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-7 w-7 rounded-full bg-slate-50 border border-slate-200 text-slate-700 grid place-content-center text-xs font-medium font-space-grotesk">1</div>
                    <div>
                      <div className="text-sm font-medium text-slate-900 font-space-grotesk">Needs Assessment</div>
                      <div className="text-xs text-slate-600 font-space-grotesk">Deep-dive diagnostics and stakeholder mapping.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-7 w-7 rounded-full bg-slate-50 border border-slate-200 text-slate-700 grid place-content-center text-xs font-medium font-space-grotesk">2</div>
                    <div>
                      <div className="text-sm font-medium text-slate-900 font-space-grotesk">Tailored Strategy</div>
                      <div className="text-xs text-slate-600 font-space-grotesk">Clear roadmap aligned to your objectives.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-7 w-7 rounded-full bg-slate-50 border border-slate-200 text-slate-700 grid place-content-center text-xs font-medium font-space-grotesk">3</div>
                    <div>
                      <div className="text-sm font-medium text-slate-900 font-space-grotesk">Implementation</div>
                      <div className="text-xs text-slate-600 font-space-grotesk">Change management and capability building.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-7 w-7 rounded-full bg-slate-50 border border-slate-200 text-slate-700 grid place-content-center text-xs font-medium font-space-grotesk">4</div>
                    <div>
                      <div className="text-sm font-medium text-slate-900 font-space-grotesk">Monitoring &amp; Evaluation</div>
                      <div className="text-xs text-slate-600 font-space-grotesk">Track, learn, and iterate for sustained impact.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section id="outcomes" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl tracking-tight text-slate-900 font-space-grotesk font-medium">Expected Outcomes</h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="badge-check" className="lucide lucide-badge-check h-5 w-5 text-[#1A328A]"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                <div className="text-sm font-medium text-slate-900 font-space-grotesk">Quality service delivery</div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="smile-plus" className="lucide lucide-smile-plus h-5 w-5 text-[#1A328A]"><path d="M22 11v1a10 10 0 1 1-9-10"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line><path d="M16 5h6"></path><path d="M19 2v6"></path></svg>
                <div className="text-sm font-medium text-slate-900 font-space-grotesk">Patient satisfaction</div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="users-round" className="lucide lucide-users-round h-5 w-5 text-[#1A328A]"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
                <div className="text-sm font-medium text-slate-900 font-space-grotesk">Staff satisfaction</div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="trending-up" className="lucide lucide-trending-up h-5 w-5 text-[#1A328A]"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                <div className="text-sm font-medium text-slate-900 font-space-grotesk">Continuous institutional growth and improvement</div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="handshake" className="lucide lucide-handshake h-5 w-5 text-[#1A328A]"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="M21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
                <div className="text-sm font-medium text-slate-900 font-space-grotesk">Social support and community involvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="py-12 sm:py-16 bg-slate-50/50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl sm:text-4xl tracking-tight text-slate-900 font-space-grotesk font-medium">Who We Are</h3>
              <p className="mt-3 text-[15px] sm:text-base text-slate-600 font-space-grotesk">
                MIA Health Solutions is a leading health systems consultancy committed to transforming global healthcare landscapes through innovation, excellence, and compassion.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="eye" className="lucide lucide-eye h-4.5 w-4.5 text-[#1A328A]"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    <div className="text-sm font-medium text-slate-900 font-space-grotesk">Vision</div>
                  </div>
                  <p className="mt-1.5 text-sm text-slate-600 font-space-grotesk">To be the leader in transforming the global health system through operational excellence.</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="target" className="lucide lucide-target h-4.5 w-4.5 text-[#1A328A]"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                    <div className="text-sm font-medium text-slate-900 font-space-grotesk">Mission</div>
                  </div>
                  <p className="mt-1.5 text-sm text-slate-600 font-space-grotesk">Pursuing innovative solutions for a healthy society through, social behaviour change and excellent healthcare management.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-[#1A328A]/5 blur-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <img src="https://imagine-public.x.ai/imagine-public/images/3c7153a5-d37d-45e6-b45d-0757d62fab3b.png?cache=1" alt="Consultants working with hospital leadership" className="h-80 w-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="inline-flex items-center rounded-md bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-800 backdrop-blur font-space-grotesk">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="badge-check" className="lucide lucide-badge-check mr-2 h-3.5 w-3.5 text-[#1A328A]"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      Trusted advisors to healthcare leaders
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-3xl sm:text-4xl tracking-tight text-slate-900 font-space-grotesk font-medium">Our Core Values</h4>
            <div
              className="mt-6 overflow-hidden"
              onMouseEnter={() => (pauseRef.current = true)}
              onMouseLeave={() => (pauseRef.current = false)}
            >
              <div ref={marqueeRef} className="flex flex-nowrap gap-5 will-change-transform">
                <div className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden shrink-0 w-72 sm:w-80">
                  <img src="https://arabinsightscaremagazine.com/wp-content/uploads/2025/06/Building-a-Culture-of-Healthcare-Excellence-in-Medical-Institutions.jpg" alt="Excellence" className="w-full h-40 object-cover block" />
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="sparkles" className="lucide lucide-sparkles h-5 w-5 text-[#1A328A]"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                      <div className="text-sm font-medium text-slate-900 font-space-grotesk">Excellence</div>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 font-space-grotesk">Delivering the highest quality in healthcare management.</p>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden shrink-0 w-72 sm:w-80">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_wyNnRoO9uTd-9Ge3bPbBHLD6Tt6A__sMQ&s" alt="Compassion" className="w-full h-40 object-cover block" />
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="heart" className="lucide lucide-heart h-5 w-5 text-[#1A328A]"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                      <div className="text-sm font-medium text-slate-900 font-space-grotesk">Compassion</div>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 font-space-grotesk">Placing patients at the heart of every decision.</p>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden shrink-0 w-72 sm:w-80">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-g2hW7UgH0BI6wjBl7I4q38kdqnxW0SPTnQ&s" alt="Innovation" className="w-full h-40 object-cover block" />
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="lightbulb" className="lucide lucide-lightbulb h-5 w-5 text-[#1A328A]"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                      <div className="text-sm font-medium text-slate-900 font-space-grotesk">Innovation</div>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 font-space-grotesk">Embracing new ideas and technologies.</p>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden shrink-0 w-72 sm:w-80">
                  <img src="https://pp-cdn.phenompeople.com/CareerConnectResources/prod/CHENUS/images/EnablingCollaborationFosteringTeamworkinHealthcareEnvironments-1719241343638.jpg" alt="Collaboration" className="w-full h-40 object-cover block" />
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="handshake" className="lucide lucide-handshake h-5 w-5 text-[#1A328A]"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="M21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
                      <div className="text-sm font-medium text-slate-900 font-space-grotesk">Collaboration</div>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 font-space-grotesk">Building strong partnerships for lasting impact.</p>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden shrink-0 w-72 sm:w-80">
                  <img src="https://www.nursingprocess.org/bimg/integrity-in-nursing.webp" alt="Integrity" className="w-full h-40 object-cover block" />
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="shield-check" className="lucide lucide-shield-check h-5 w-5 text-[#1A328A]"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      <div className="text-sm font-medium text-slate-900 font-space-grotesk">Integrity</div>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 font-manrope">Ensuring transparency and accountability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl tracking-tight text-slate-900 font-space-grotesk font-medium">Our Commitment</h3>
              <p className="mt-3 text-[15px] sm:text-base text-slate-600 font-manrope">
                We are not just consultants — we are partners in healthcare transformation. From underserved communities to large hospitals, our goal is to build systems that:
              </p>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="hospital" className="lucide lucide-hospital mt-0.5 h-5 w-5 text-[#1A328A]"><path d="M12 7v4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M14 9h-4"></path><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"></path></svg>
                  <span className="text-sm text-slate-700 font-manrope">Expand access to quality healthcare</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="graduation-cap" className="lucide lucide-graduation-cap mt-0.5 h-5 w-5 text-[#1A328A]"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
                  <span className="text-sm text-slate-700 font-manrope">Empower healthcare professionals through training and capacity-building</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="beaker" className="lucide lucide-beaker mt-0.5 h-5 w-5 text-[#1A328A]"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>
                  <span className="text-sm text-slate-700 font-manrope">Strengthen healthcare delivery through innovation and research</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="leaf" className="lucide lucide-leaf mt-0.5 h-5 w-5 text-[#1A328A]"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                  <span className="text-sm text-slate-700 font-manrope">Foster long-term community health improvement</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-[#1A328A]/5 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img src="https://imagine-public.x.ai/imagine-public/images/755bb979-4ecd-4785-8bc7-6dfc2c437a3d.png?cache=1" alt="Community healthcare outreach" className="h-80 w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="inline-flex items-center rounded-md bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-800 backdrop-blur font-manrope">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="sparkle" className="lucide lucide-sparkle mr-2 h-3.5 w-3.5 text-[#1A328A]"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
                    Impact at scale, grounded in compassion
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="cta" className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-tr from-[#1A328A]/10 to-white p-6 sm:p-8">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h4 className="text-xl sm:text-2xl tracking-tight text-slate-900 font-montserrat font-medium">Let’s Transform Healthcare Together.</h4>
                <p className="mt-2 text-sm text-slate-600 font-manrope">Discover how MIA Health Solutions can help your hospital thrive.</p>
              </div>
              <div className="flex md:justify-end gap-3">
                <a href="#contact" className="inline-flex items-center rounded-md bg-[#1A328A] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#162A74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A328A]/50 font-manrope">
                  Contact Us Today
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="send" className="lucide lucide-send ml-2 h-4 w-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                </a>
                <a href="tel:+0000000000" className="inline-flex items-center rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A328A]/40 font-manrope">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="phone-call" className="lucide lucide-phone-call mr-2 h-4 w-4"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                  +254 729 023 918
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 sm:py-16 bg-slate-50/50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl tracking-tight text-slate-900 font-space-grotesk font-medium">Frequently Asked Questions</h3>
          <Faq />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 sm:py-16 bg-slate-50/50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="text-3xl sm:text-4xl tracking-tight text-slate-900 font-space-grotesk font-medium">Contact Us</h3>
              <p className="mt-3 text-[15px] sm:text-base text-slate-600 font-manrope">
                Start your journey toward operational excellence and better patient outcomes. Send us a message and our team will reach out shortly.
              </p>

              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 font-manrope">Full Name</label>
                    <input type="text" placeholder="Enter your name" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[#1A328A] focus:ring-[#1A328A]/30" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 font-manrope">Email</label>
                    <input type="email" placeholder="you@example.com" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[#1A328A] focus:ring-[#1A328A]/30" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 font-manrope">Organization</label>
                  <input type="text" placeholder="Hospital or clinic name" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[#1A328A] focus:ring-[#1A328A]/30" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 font-manrope">Phone (optional)</label>
                  <input type="tel" placeholder="+00 000 000 000" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[#1A328A] focus:ring-[#1A328A]/30" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 font-manrope">How can we help?</label>
                  <textarea rows={4} placeholder="Tell us about your goals, challenges, and timelines..." className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[#1A328A] focus:ring-[#1A328A]/30" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500 font-manrope">By submitting, you agree to be contacted about your request.</p>
                  <button type="submit" className="inline-flex items-center rounded-md bg-[#1A328A] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#162A74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A328A]/50 font-manrope">
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="mail" className="lucide lucide-mail ml-2 h-4 w-4"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-base font-medium text-slate-900 font-manrope">Get in touch</h4>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-md bg-[#1A328A]/10 text-[#1A328A] grid place-content-center border border-[#1A328A]/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="mail" className="lucide lucide-mail h-4.5 w-4.5"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-slate-900 font-manrope">Email</div>
                      <a href="mailto:info@miahealthsolutions.org" className="text-slate-700 hover:text-slate-900 font-manrope">info@miahealthsolutions.org</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-md bg-[#1A328A]/10 text-[#1A328A] grid place-content-center border border-[#1A328A]/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="phone" className="lucide lucide-phone h-4.5 w-4.5"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-slate-900 font-manrope">Phone</div>
                      <a href="tel:+254729023918" className="text-slate-700 hover:text-slate-900 font-manrope">+254 729 023 918, +254 727 038 840</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-md bg-[#1A328A]/10 text-[#1A328A] grid place-content-center border border-[#1A328A]/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="map-pin" className="lucide lucide-map-pin h-4.5 w-4.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-slate-900 font-manrope">Headquarters</div>
                      <div className="text-slate-700 font-manrope">Ruaka, Kenya</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-slate-200 p-4">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="info" className="lucide lucide-info mt-0.5 h-4.5 w-4.5 text-[#1A328A]"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    <p className="text-sm text-slate-600 font-manrope">
                      We typically respond within 1–2 business days. For urgent requests, please call directly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl overflow-hidden border border-slate-200">
                <iframe
                  title="MIA Health Solutions Location"
                  src="https://www.google.com/maps?q=-1.2070012,36.7832944&z=16&output=embed"
                  className="w-full h-56"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <a href="#" className="flex items-center gap-3 group">
              <img src="https://iili.io/KrAzn7n.png" alt="mia logo" className="h-9 w-9" />
              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-tight text-slate-900 font-manrope">MIA Health Solutions</span>
                <span className="text-[11px] text-slate-500 font-manrope">Transforming Global Health Systems</span>
              </div>
            </a>
            <div className="flex flex-wrap items-center gap-5 text-sm">
              <a href="#services" className="text-slate-600 hover:text-slate-900 font-manrope">Services</a>
              <a href="#why-us" className="text-slate-600 hover:text-slate-900 font-manrope">Why Us</a>
              <a href="#outcomes" className="text-slate-600 hover:text-slate-900 font-manrope">Outcomes</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 font-manrope">About</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 font-manrope">Contact</a>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <p className="font-manrope">© <span className="font-manrope">{year}</span> MIA Health Solutions. All rights reserved.</p>
            <p className="font-manrope">Privacy • Terms • Cookies</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
