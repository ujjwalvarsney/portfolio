import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  FadeIn,
  FadeInStagger,
  FadeInItem,
  GlowLine,
  CountUp,
} from "../components/animations";
import {
  Aurora,
  Particles,
  BlurReveal,
  TextShimmer,
  PulseGlow,
} from "../components/hero-effects";

export const metadata: Metadata = {
  title: "About | Ujjwal Varsney",
  description:
    "Senior UX Designer with 5+ years across 12+ industries. Research, prototyping, testing, and handoff for enterprise platforms and operational systems.",
};

function AboutNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg-primary/60 border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center gap-2 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to portfolio
        </Link>
        <Link href="/" className="text-lg font-semibold tracking-tight cursor-pointer">
          Ujjwal<span className="text-accent">.</span>
        </Link>
        <details className="relative [&>summary]:list-none [&>summary::-webkit-details-marker]:hidden">
          <summary className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer flex items-center gap-1 select-none">
            Resume
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 [[open]>&]:rotate-180">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div className="absolute top-full right-0 mt-3 w-44 rounded-xl border border-white/[0.08] bg-bg-card/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-1.5 z-50">
            <a href="/resume/Ujjwal_Varsney_SeniorUXDesigner.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/[0.06] transition-all duration-200 cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Preview
            </a>
            <a href="/resume/Ujjwal_Varsney_SeniorUXDesigner.pdf" download className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:text-accent hover:bg-accent/[0.06] transition-all duration-200 cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download
            </a>
          </div>
        </details>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-36 pb-24 px-8 relative overflow-hidden">
      <Aurora />
      <Particles count={12} />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-8">
            <FadeIn>
              <p className="section-label mb-6">ABOUT ME</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h1 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold leading-[1.15] tracking-tight mb-8">
                <BlurReveal text="Ujjwal Varsney" delay={80} />
              </h1>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="text-lg md:text-xl 2xl:text-2xl text-text-secondary leading-relaxed">
                <TextShimmer className="text-lg md:text-xl 2xl:text-2xl">Senior UX Designer</TextShimmer>
                {" "}with five years of experience across{" "}
                <strong className="font-semibold text-text-primary/70">12+ industries</strong>, including
                manufacturing, healthcare, pharma, education, agriculture, and logistics.
              </p>
            </FadeIn>
            <FadeIn delay={0.7}>
              <div className="space-y-6 text-text-secondary leading-relaxed mt-8">
                <p>
                  I run the full design cycle - <strong className="font-semibold text-text-primary/70">research, prototyping, testing, and handoff</strong>. I also mentor junior designers, collaborate with marketing on POCs, and help onboard new projects.
                </p>
                <p>
                  Most of my work involves <strong className="font-semibold text-text-primary/70">enterprise platforms, internal dashboards, and operational systems</strong> - products that do their job on paper but get quietly ignored in practice. I focus on identifying and resolving that disconnect.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-4">
            <FadeIn delay={0.3}>
              <div className="relative aspect-square rounded-2xl border border-white/[0.08] bg-bg-card overflow-hidden gradient-outline">
                <Image
                  src="/Image (7) 1MB.jpg"
                  alt="Ujjwal Varsney"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16" stagger={0.12}>
          {[
            { value: 5, suffix: "+", label: "Years of Experience" },
            { value: 12, suffix: "+", label: "Domains Served" },
            { value: 20000, suffix: "+", label: "Users Impacted" },
            { value: 25, suffix: "+", label: "Projects Completed" },
          ].map((stat) => (
            <FadeInItem key={stat.label}>
              <div className="group p-6 rounded-xl border border-white/[0.08] bg-bg-card hover:border-accent/20 transition-all duration-300 relative overflow-hidden cursor-default gradient-outline">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-accent mb-1">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}


function Capabilities() {
  const capabilities = [
    {
      num: "/01",
      title: "UX Research",
      description:
        "User interviews, behavioral analysis, and journey mapping to uncover the real problems behind the surface.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="m1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d4d4d4" />
              <stop offset="0.5" stopColor="#888" />
              <stop offset="1" stopColor="#444" />
            </linearGradient>
          </defs>
          <circle cx="14" cy="14" r="9" stroke="url(#m1)" strokeWidth="2" />
          <path d="M21 21L27 27" stroke="url(#m1)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="14" cy="14" r="4" stroke="url(#m1)" strokeWidth="1" opacity="0.4" />
        </svg>
      ),
    },
    {
      num: "/02",
      title: "Interface Design",
      description:
        "High-fidelity interfaces for web and mobile, built for clarity, consistency, and real-world use.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="m2" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d4d4d4" />
              <stop offset="0.5" stopColor="#888" />
              <stop offset="1" stopColor="#444" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="24" height="24" rx="3" stroke="url(#m2)" strokeWidth="2" />
          <rect x="4" y="4" width="24" height="8" rx="3" fill="url(#m2)" fillOpacity="0.12" />
          <path d="M4 12h24" stroke="url(#m2)" strokeWidth="1.5" />
          <path d="M12 28V12" stroke="url(#m2)" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      num: "/03",
      title: "Enterprise Platforms",
      description:
        "Complex operational platforms, dashboards, and internal tools designed for adoption, not just deployment.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="m3" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d4d4d4" />
              <stop offset="0.5" stopColor="#888" />
              <stop offset="1" stopColor="#444" />
            </linearGradient>
          </defs>
          <path d="M16 4L28 11V21L16 28L4 21V11L16 4Z" stroke="url(#m3)" strokeWidth="2" strokeLinejoin="round" />
          <path d="M4 11L16 18L28 11" stroke="url(#m3)" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M16 18V28" stroke="url(#m3)" strokeWidth="1.5" />
          <polygon points="16,4 28,11 16,18 4,11" fill="url(#m3)" fillOpacity="0.08" />
        </svg>
      ),
    },
    {
      num: "/04",
      title: "Design Systems",
      description:
        "Scalable component libraries and design tokens that keep products consistent as they grow.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="m4" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d4d4d4" />
              <stop offset="0.5" stopColor="#888" />
              <stop offset="1" stopColor="#444" />
            </linearGradient>
          </defs>
          <path d="M16 6L28 12L16 18L4 12L16 6Z" fill="url(#m4)" fillOpacity="0.12" stroke="url(#m4)" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M4 17L16 23L28 17" stroke="url(#m4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 22L16 28L28 22" stroke="url(#m4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-4">What I Do</p>
        </FadeIn>
        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
          {capabilities.map((cap) => (
            <FadeInItem key={cap.num}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 gradient-outline h-full">
                <div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] backdrop-blur-sm flex items-center justify-center mb-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
                  style={{
                    transform:
                      "perspective(800px) rotateX(-5deg) rotateY(5deg)",
                  }}
                >
                  {cap.icon}
                </div>
                <span className="text-xs font-mono text-text-muted block mb-2">
                  {cap.num}
                </span>
                <h3 className="text-base font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-bg-card to-[var(--gradient-card-end)] p-10 relative overflow-hidden gradient-outline">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent" />
            <blockquote className="pl-6">
              <p className="text-xl md:text-2xl text-text-primary italic leading-relaxed">
                &ldquo;Outside of work, I photograph. It keeps a different part of the brain active.&rdquo;
              </p>
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-24 px-8 relative overflow-hidden">
      <Image
        src="/LuxuryBG.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--bg-primary)] to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none z-[1]" />
      <Aurora />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative text-center">
        <FadeIn>
          <p className="section-label mb-4">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold leading-tight mb-6">
            Interested in
            <br />
            <span className="text-accent">Working Together?</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s figure out what your users actually need.
          </p>
          <div className="flex justify-center items-center gap-6">
            <PulseGlow>
              <a
                href="mailto:ujjwalvarsney@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 2xl:px-8 2xl:py-4 text-sm 2xl:text-base rounded-full bg-accent text-bg-primary font-semibold hover:bg-accent-bright hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Get in Touch
              </a>
            </PulseGlow>
            <a
              href="https://www.linkedin.com/in/ujjwalvarsney/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 2xl:px-6 2xl:py-4 text-sm 2xl:text-base rounded-full border border-white/[0.08] text-text-secondary hover:text-text-primary hover:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function AboutFooter() {
  return (
    <footer className="py-16 px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-semibold tracking-tight cursor-pointer">
              Ujjwal<span className="text-accent">.</span>
            </Link>
            <p className="text-text-secondary text-sm mt-4 max-w-sm leading-relaxed">
              Senior UX Designer. I design the things that run businesses, entertain users, and survive real life.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              <Link href="/#work" className="hover:text-accent transition-colors duration-200 cursor-pointer">Work</Link>
              <Link href="/about" className="hover:text-accent transition-colors duration-200 cursor-pointer">About</Link>
              <Link href="/#process" className="hover:text-accent transition-colors duration-200 cursor-pointer">Process</Link>
            </div>
          </div>
        </div>
        <GlowLine className="mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Ujjwal Varsney
          </p>
          <a href="#top" className="text-sm text-text-muted hover:text-accent transition-colors duration-200 cursor-pointer">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <>
      <div id="top" />
      <AboutNav />
      <main id="main-content" className="flex-1">
        <Hero />
        <GlowLine className="max-w-7xl mx-auto" />
        <Capabilities />
        <GlowLine className="max-w-7xl mx-auto" />
        <Philosophy />
        <GlowLine className="max-w-7xl mx-auto" />
        <Contact />
      </main>
      <AboutFooter />
    </>
  );
}
