import Link from "next/link";
import Image from "next/image";
import {
  FadeIn,
  FadeInStagger,
  FadeInItem,
  GlowLine,
} from "./components/animations";
import {
  ElegantShape,
  BlurReveal,
  TextShimmer,
  MouseSpotlight,
  GradientText,
  ScrollScale,
} from "./components/hero-effects";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg-primary/60 border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight cursor-pointer"
        >
          Ujjwal<span className="text-text-muted">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          <Link
            href="/about"
            className="hover:text-text-primary transition-colors duration-200 cursor-pointer"
          >
            About
          </Link>
          <details className="relative [&>summary]:list-none [&>summary::-webkit-details-marker]:hidden">
            <summary className="hover:text-text-primary transition-colors duration-200 cursor-pointer flex items-center gap-1 select-none">
              Resume
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 [[open]>&]:rotate-180">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <div className="absolute top-full right-0 mt-3 w-44 rounded-xl border border-white/[0.06] bg-bg-card/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-1.5 z-50">
              <a href="/resume/Ujjwal_Varsney_SeniorUXDesigner.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/[0.06] transition-all duration-200 cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Preview
              </a>
              <a href="/resume/Ujjwal_Varsney_SeniorUXDesigner.pdf" download className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/[0.06] transition-all duration-200 cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </a>
            </div>
          </details>
          <a
            href="mailto:ujjwalvarsney@gmail.com"
            className="px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.10] text-text-primary text-sm hover:bg-white/[0.12] transition-all duration-200 cursor-pointer"
          >
            Let&apos;s Talk
          </a>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="mobile-menu" className="peer sr-only" />
      <label
        htmlFor="mobile-menu"
        className="cursor-pointer p-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <div className="fixed top-16 left-6 right-6 bg-bg-card/95 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 flex-col gap-4 text-sm text-text-secondary hidden peer-checked:flex shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <Link
          href="/about"
          className="hover:text-text-primary transition-colors duration-200 cursor-pointer py-2"
        >
          About
        </Link>
        <div className="flex items-center gap-4 py-2">
          <a
            href="/resume/Ujjwal_Varsney_SeniorUXDesigner.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-text-primary transition-colors duration-200 cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Preview Resume
          </a>
          <a
            href="/resume/Ujjwal_Varsney_SeniorUXDesigner.pdf"
            download
            className="flex items-center gap-2 text-text-primary hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </a>
        </div>
        <a
          href="mailto:ujjwalvarsney@gmail.com"
          className="px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.10] text-text-primary text-sm hover:bg-white/[0.12] transition-all duration-200 cursor-pointer text-center"
        >
          Let&apos;s Talk
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-8 relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Hero%20Video.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.40,
          background: "linear-gradient(to right, rgba(0,0,0,1) 19%, rgba(0,0,0,0.4) 100%)",
        }}
      />
      <div className="absolute inset-0 hero-grid opacity-40 pointer-events-none" />

      <ElegantShape
        delay={0.3}
        width={600}
        height={140}
        rotate={12}
        gradient="from-white/[0.06]"
        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
      />
      <ElegantShape
        delay={0.5}
        width={500}
        height={120}
        rotate={-15}
        gradient="from-white/[0.04]"
        className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
      />
      <ElegantShape
        delay={0.4}
        width={300}
        height={80}
        rotate={-8}
        gradient="from-white/[0.05]"
        className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
      />
      <ElegantShape
        delay={0.6}
        width={200}
        height={60}
        rotate={20}
        gradient="from-white/[0.03]"
        className="right-[15%] md:right-[20%] top-[8%] md:top-[12%]"
      />
      <ElegantShape
        delay={0.7}
        width={150}
        height={40}
        rotate={-25}
        gradient="from-white/[0.04]"
        className="left-[20%] md:left-[25%] top-[5%] md:top-[8%]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <FadeIn>
          <div className="mb-6 lg:mb-8">
            <TextShimmer className="text-xs font-semibold tracking-[0.15em] uppercase">
              Senior UX Designer
            </TextShimmer>
          </div>
        </FadeIn>

        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl xl:text-5xl 2xl:text-[5.5rem] font-light leading-[1.08] tracking-tight space-y-2">
          <span className="block">
            <BlurReveal text="I design the things" delay={60} />
          </span>
          <span className="block">
            <BlurReveal
              text="that run businesses,"
              delay={60}
              startDelay={0.4}
            />
          </span>
          <span className="block italic">
            <BlurReveal text="entertain users," delay={60} startDelay={0.8} gradient />
          </span>
          <span className="block">
            <BlurReveal
              text="and survive real life."
              delay={60}
              startDelay={1.2}
            />
          </span>
        </h1>

        <FadeIn delay={1.8}>
          <p className="text-base md:text-lg xl:text-lg 2xl:text-xl text-text-secondary mt-6 lg:mt-8 max-w-xl leading-relaxed">
            I shape new products and reshape broken ones. Both end the same way:
            people using it without thinking twice.
          </p>
        </FadeIn>

        <FadeIn delay={2.0}>
          <div className="mt-6 lg:mt-8">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 2xl:px-6 2xl:py-3 text-sm rounded-full bg-white text-[#030303] font-semibold hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.12)]"
            >
              View Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 3v10M8 13l-4-4M8 13l4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-4">Projects</p>
          <h2 className="text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl font-bold leading-tight mb-20">
            Selected
            <GradientText> Work</GradientText>
          </h2>
        </FadeIn>

        <div className="space-y-12">
          <ScrollScale>
            <MouseSpotlight>
              <Link
                href="/case-studies/lll"
                className="group block cursor-pointer"
              >
                <div className="relative rounded-2xl border border-white/[0.06] bg-bg-card overflow-hidden transition-all duration-700 hover:border-white/[0.15] hover:shadow-[0_0_80px_-12px_rgba(255,255,255,0.04)] gradient-outline">
                  <div className="grid md:grid-cols-2 items-center">
                    <div className="relative z-20 p-8 md:p-10">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-white/[0.08] text-text-primary border border-white/[0.10]">
                          FEATURED
                        </span>
                        <span className="text-text-muted text-sm font-mono">
                          /01
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                        Built for Reporting. I Rebuilt It for People.
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-6">
                        How I turned a PowerBI dashboard nobody checked into a
                        gamified platform that started a competition across 7
                        regions.
                      </p>
                      <div className="flex items-center gap-2.5 flex-wrap mb-6">
                        {[
                          "Gamification",
                          "Enterprise",
                          "Data Platform",
                          "7 Regions",
                        ].map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-[11px] border border-white/[0.08] text-text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-text-secondary group-hover:text-white group-hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-1.5">
                        View Case Study
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6 4L10 8L6 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="relative h-[340px] md:h-[440px] bg-gradient-to-br from-bg-secondary via-bg-card to-bg-secondary overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-r-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-bg-card via-transparent to-transparent z-10 md:block hidden" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-white/[0.03] blur-[80px] group-hover:bg-white/[0.06] transition-all duration-1000" />
                      <div className="absolute inset-4 z-[5]">
                        <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] opacity-90 group-hover:opacity-100 transition-opacity duration-700">
                          <Image
                            src="/images/lll/HeroUI.png"
                            alt="Logistics Legends League gamified dashboard showing leaderboards and XP tracking"
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </MouseSpotlight>
          </ScrollScale>

          <ScrollScale>
            <MouseSpotlight>
              <Link
                href="/case-studies/ihdm"
                className="group block cursor-pointer"
              >
                <div className="relative rounded-2xl border border-white/[0.06] bg-bg-card overflow-hidden transition-all duration-700 hover:border-white/[0.15] hover:shadow-[0_0_80px_-12px_rgba(255,255,255,0.04)] gradient-outline">
                  <div className="grid md:grid-cols-2 items-center">
                    <div className="relative z-20 p-8 md:p-10">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="text-text-muted text-sm font-mono">
                          /02
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                        Schools Tracked Assets on Paper.
                        <br />I Put a Scanner in Their Pocket.
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-6">
                        Designing a mobile-first inventory and helpdesk system
                        that replaced manual chaos with barcode scans, RFID
                        audits, and real-time ticketing.
                      </p>
                      <div className="flex items-center gap-2.5 flex-wrap mb-6">
                        {["Mobile App", "Inventory", "Education", "RFID"].map(
                          (tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-[11px] border border-white/[0.08] text-text-muted"
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                      <span className="text-sm text-text-secondary group-hover:text-white group-hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-1.5">
                        View Case Study
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6 4L10 8L6 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="relative h-[340px] md:h-[440px] bg-gradient-to-br from-bg-secondary via-bg-card to-bg-secondary overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-r-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-bg-card via-transparent to-transparent z-10 md:block hidden" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-white/[0.03] blur-[80px] group-hover:bg-white/[0.06] transition-all duration-1000" />
                      <div className="absolute inset-4 z-[5]">
                        <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] opacity-90 group-hover:opacity-100 transition-opacity duration-700">
                          <Image
                            src="/images/ihdm/cover.png"
                            alt="IHDM inventory and helpdesk mobile app with RFID scanning and dashboard"
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </MouseSpotlight>
          </ScrollScale>
        </div>
      </div>
    </section>
  );
}


function Process() {
  const items = [
    {
      num: "/01",
      title: "Understand the system, not just the screen",
      body: "I map data flows, stakeholder incentives, and operational constraints before opening Figma. The screen is the last mile.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="p1" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d4d4d4" />
              <stop offset="0.5" stopColor="#888" />
              <stop offset="1" stopColor="#444" />
            </linearGradient>
          </defs>
          <circle cx="11" cy="11" r="8" stroke="url(#p1)" strokeWidth="1.5" />
          <path d="m21 21-4.3-4.3" stroke="url(#p1)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="11" cy="11" r="3" stroke="url(#p1)" strokeWidth="1" opacity="0.4" />
        </svg>
      ),
    },
    {
      num: "/02",
      title: "Design for the person who didn't ask for it",
      body: "Enterprise tools are often mandated, not chosen. My job is to make the mandated thing worth opening. That means designing for engagement, not just usability.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="p2" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d4d4d4" />
              <stop offset="0.5" stopColor="#888" />
              <stop offset="1" stopColor="#444" />
            </linearGradient>
          </defs>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="url(#p2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" stroke="url(#p2)" strokeWidth="1.5" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="url(#p2)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#p2)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: "/03",
      title: "Ship the proof, then refine",
      body: "I scope for impact, not perfection. A shipped feature that changes one metric is worth more than a polished prototype that never leaves Figma.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="p3" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d4d4d4" />
              <stop offset="0.5" stopColor="#888" />
              <stop offset="1" stopColor="#444" />
            </linearGradient>
          </defs>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="url(#p3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="url(#p3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="url(#p3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="url(#p3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-4">How I Work</p>
          <h2 className="text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl font-bold leading-tight mb-6">
            Design is the argument for why
            <br />
            something{" "}
            <GradientText>should exist this way.</GradientText>
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-16">
            I keep things lean and intentional. Every decision has a reason, and
            every deliverable maps back to a real user need.
          </p>
        </FadeIn>
        <FadeInStagger className="grid md:grid-cols-3 gap-8" stagger={0.12}>
          {items.map((item) => (
            <FadeInItem key={item.num}>
              <div className="group p-8 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-500 h-full cursor-default relative overflow-hidden gradient-outline">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] backdrop-blur-sm flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
                    style={{ transform: 'perspective(800px) rotateX(-5deg) rotateY(5deg)' }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-text-muted font-mono text-sm">
                    {item.num}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-3 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {item.body}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-32 px-8 relative overflow-hidden">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <FadeIn>
          <p className="section-label mb-6">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl xl:text-4xl 2xl:text-6xl font-bold mb-6 leading-tight">
            Have a complex system
            <br />
            that needs <GradientText>design thinking?</GradientText>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-lg mx-auto">
            I&apos;m always interested in UX challenges where design can shift
            real metrics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ujjwalvarsney@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 2xl:px-6 2xl:py-3 text-sm rounded-full bg-white text-[#030303] font-semibold hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.12)]"
            >
              ujjwalvarsney@gmail.com
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ujjwalvarsney/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.08] text-text-primary hover:border-white/[0.20] hover:text-white transition-all duration-200 cursor-pointer text-sm"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight cursor-pointer"
            >
              Ujjwal<span className="text-text-muted">.</span>
            </Link>
            <p className="text-text-secondary text-sm mt-4 max-w-sm leading-relaxed">
              Senior UX Designer. I design the things that run businesses,
              entertain users, and survive real life.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              <Link
                href="/#work"
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                About
              </Link>
              <Link
                href="/#process"
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Process
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              <a
                href="mailto:ujjwalvarsney@gmail.com"
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/ujjwalvarsney/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <GlowLine className="mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Ujjwal Varsney
          </p>
          <a
            href="#"
            className="text-sm text-text-muted hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
