import Image from "next/image";
import type { Metadata } from "next";
import {
  FadeIn,
  FadeInStagger,
  FadeInItem,
  GlowLine,
  SlideIn,
  CountUp,
} from "../../components/animations";
import {
  Aurora,
  BlurReveal,
  Particles,
  MouseSpotlight,
  TextShimmer,
  GradientText,
} from "../../components/hero-effects";
import { SectionNav } from "../../components/section-nav";
import { CaseStudyToggle, ReadingModeSwitch, StickyReadingBar, FullStoryOnly } from "../../components/case-study-toggle";
import { CaseNav } from "../../components/case-nav";
import { CaseFooter } from "../../components/case-footer";

export const metadata: Metadata = {
  title: "Logistics Legends League | Ujjwal",
  description:
    "Redesigning a gamified performance platform for 200+ logistics contributors across 7 regions.",
};

/* ─────────────────────────────────────────────
   SHARED: Hero sections (same in both modes)
   ───────────────────────────────────────────── */

function TheFrame() {
  return (
    <section id="top" className="pt-36 pb-24 px-8 relative overflow-hidden">
      <Aurora />
      <Particles count={15} />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative text-center w-full">
        <FadeIn>
          <p className="section-label mb-8">THE FRAME</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight max-w-4xl mx-auto">
            <BlurReveal text="Low engagement and zero competitive incentive in a performance system no one wanted to open." delay={50} />
          </h1>
        </FadeIn>
        <FadeIn delay={0.8}>
          <p className="text-text-secondary mt-8 text-lg">
            <TextShimmer>Logistics Legends League</TextShimmer> &middot; UX Case Study
          </p>
        </FadeIn>
        <FadeIn delay={1.1}>
          <div className="mt-8">
            <ReadingModeSwitch />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function HeroUI() {
  return (
    <section className="pt-12 pb-16 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1628]/80 to-bg-primary pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <MouseSpotlight className="rounded-2xl">
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden relative group gradient-outline">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <Image
                src="/images/lll/HeroUI.png"
                alt="Logistics Legends League - gamified performance platform shown across MacBook, iPad, and iPhone with avatar, badges, achievements, and battle pass UI"
                width={2880}
                height={1620}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </MouseSpotlight>
        </FadeIn>
        <FadeInStagger className="flex flex-wrap gap-12 md:gap-16 mt-12 justify-center" stagger={0.1}>
          {[
            { value: 3, suffix: "", label: "User Roles" },
            { value: 7, suffix: "", label: "Regions" },
            { value: 200, suffix: "+", label: "Contributors" },
          ].map((stat) => (
            <FadeInItem key={stat.label}>
              <div className="text-center group cursor-default">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  <p className="text-4xl font-bold text-accent relative">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </p>
                </div>
                <p className="text-xs text-text-muted uppercase tracking-wider mt-2">
                  {stat.label}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   QUICK READ: Condensed micro case study
   ───────────────────────────────────────────── */

function QuickRead() {
  return (
    <>
      {/* Challenge */}
      <section id="context" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="section-label mb-4">THE CHALLENGE</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              A Gamified System <GradientText>Nobody Used</GradientText>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-secondary text-lg leading-relaxed max-w-3xl mb-10">
              Logistics Legends League had avatars, XP, badges, and leaderboards - but it was all buried inside PowerBI dashboards and manually-maintained Excel sheets. Contributors had no reason to check their own data because the experience wasn&apos;t designed for them.
            </p>
          </FadeIn>
          <FadeInStagger className="grid sm:grid-cols-3 gap-4 mb-10" stagger={0.1}>
            {[
              { stat: "0 / 8", desc: "contributors could name their own SLA score", color: "text-accent border-accent/30" },
              { stat: "6+ hrs/wk", desc: "per supervisor on manual game admin", color: "text-amber-400 border-amber-400/30" },
              { stat: "7 regions", desc: "dependent on individual supervisor availability", color: "text-green-400 border-green-400/30" },
            ].map((item) => (
              <FadeInItem key={item.stat}>
                <div className={`rounded-xl border ${item.color.split(" ")[1]} bg-bg-card p-6 text-center gradient-outline`}>
                  <p className={`text-2xl font-bold ${item.color.split(" ")[0]} mb-2`}>{item.stat}</p>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
          <FadeIn>
            <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-bg-card to-[var(--gradient-card-end)] p-8 relative overflow-hidden gradient-outline">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent" />
              <blockquote className="pl-6">
                <p className="text-xl md:text-2xl text-text-primary italic leading-relaxed">
                  &ldquo;People perform differently when there is a milestone.&rdquo;
                </p>
                <p className="text-sm text-text-muted mt-3">Stakeholder interview - the guiding principle behind every design decision</p>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>

      <GlowLine className="max-w-7xl mx-auto" />

      {/* Process */}
      <section id="research" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="section-label mb-4">PROCESS</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              Research to <GradientText>Redesign</GradientText>
            </h2>
          </FadeIn>
          <FadeInStagger className="grid md:grid-cols-4 gap-4" stagger={0.1}>
            {[
              { phase: "Discover", method: "8 interviews, 4 regions", insight: "Nobody knew their own score - engagement problem, not a UI problem" },
              { phase: "Define", method: "Supervisor shadowing, 3 sites", insight: "The game layer cost supervisors 6+ hours/week in manual admin" },
              { phase: "Test", method: "4-week A/B pilot", insight: "Individual leaderboards tripled daily check-ins vs. regional ones" },
              { phase: "Ship", method: "Responsive web platform", insight: "Single app replaced PowerBI + Excel + manual email workflows" },
            ].map((step, i) => (
              <FadeInItem key={step.phase}>
                <div className="rounded-xl border border-border-subtle bg-bg-card p-6 h-full gradient-outline">
                  <span className="text-accent font-mono text-xs mb-3 block">0{i + 1}</span>
                  <h3 className="font-bold text-sm mb-1">{step.phase}</h3>
                  <p className="text-[11px] text-text-muted mb-3">{step.method}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.insight}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <GlowLine className="max-w-7xl mx-auto" />

      {/* Key Decisions */}
      <section id="strategy" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="section-label mb-4">KEY DECISIONS</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              What I <GradientText>Changed and Why</GradientText>
            </h2>
          </FadeIn>
          <FadeInStagger className="grid md:grid-cols-2 gap-5" stagger={0.1}>
            {[
              {
                title: "Individual leaderboards over regional",
                rationale: "Regional rankings let low performers hide behind the group score. Individual boards with regional identity kept intact tripled daily check-ins.",
                color: "border-accent/30",
              },
              {
                title: "Visual overhaul to action-game UI",
                rationale: "Same gamification building blocks, completely different experience. Users in initial testing called it the single biggest reason they wanted to come back.",
                color: "border-amber-400/30",
              },
              {
                title: "Responsive across 3 devices",
                rationale: "Desktop-only to fully responsive. The habit forms when the platform fits into the workflow - on breaks, on the floor, on the go.",
                color: "border-green-400/30",
              },
              {
                title: "Email notifications on every update",
                rationale: "Custom LLL-themed emails with a direct link, sent every time data refreshes. Turned silent updates into an active pull mechanism.",
                color: "border-purple-400/30",
              },
            ].map((d) => (
              <FadeInItem key={d.title}>
                <div className={`rounded-xl border ${d.color} bg-bg-card p-6 h-full gradient-outline`}>
                  <h3 className="font-bold mb-2">{d.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{d.rationale}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
          <FadeIn>
            <details className="group rounded-2xl border border-white/[0.08] bg-gradient-to-br from-bg-card to-[var(--gradient-card-end)] overflow-hidden mt-6 gradient-outline">
              <summary className="flex items-center justify-between px-8 py-5 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
                <span className="text-sm text-accent font-medium">The research behind the leaderboard decision</span>
                <svg className="w-4 h-4 text-accent shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 space-y-4 border-t border-white/[0.06] pt-6">
                <p className="text-sm text-text-secondary leading-relaxed"><strong className="text-text-primary/70">Social Loafing</strong> - When individual effort is hidden behind group scores, people naturally contribute less. (Karau &amp; Williams)</p>
                <p className="text-sm text-text-secondary leading-relaxed"><strong className="text-text-primary/70">The N-Effect</strong> - Motivation drops as the competitor pool grows. 200+ people on one board means nobody tries. (Garcia &amp; Tor)</p>
                <p className="text-sm text-text-secondary leading-relaxed"><strong className="text-text-primary/70">Real-World Proof</strong> - Kenco switched to individual leaderboards: 45% profit increase, 3x KPI improvement in 3 months.</p>
              </div>
            </details>
          </FadeIn>
        </div>
      </section>

      <GlowLine className="max-w-7xl mx-auto" />

      {/* Before & After */}
      <section id="before-after" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="section-label mb-4">BEFORE &amp; AFTER</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
              From PowerBI to a <GradientText>Self-Service Platform</GradientText>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <SlideIn direction="left">
              <MouseSpotlight className="rounded-xl h-full">
                <div className="rounded-xl border border-red-500/30 bg-gradient-to-b from-red-500/5 to-bg-card overflow-hidden h-full group gradient-outline">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/images/lll/before.png"
                      alt="Before - the old PowerBI dashboard with cluttered layout, manual data entry, and no self-service access for contributors"
                      width={1168}
                      height={754}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-sm">
                      <span className="text-xs font-semibold text-red-400">Before</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-semibold text-red-400 mb-2">The Old Way</p>
                    <p className="text-sm text-text-secondary leading-relaxed">PowerBI dashboard. Built for reporting, manually maintained, nothing to draw contributors in.</p>
                  </div>
                </div>
              </MouseSpotlight>
            </SlideIn>
            <SlideIn direction="right" delay={0.15}>
              <MouseSpotlight className="rounded-xl h-full">
                <div className="rounded-xl border border-accent/30 bg-gradient-to-b from-accent/5 to-bg-card overflow-hidden h-full group gradient-outline">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/images/lll/after.png"
                      alt="After - the redesigned LLL web platform with gamified UI, avatar, badges, achievements, and self-service access"
                      width={1168}
                      height={754}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
                      <span className="text-xs font-semibold text-accent">After</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-semibold text-accent mb-2">The New Platform</p>
                    <p className="text-sm text-text-secondary leading-relaxed">Responsive web platform. Self-service access across 3 devices, current stats and leaderboards on demand.</p>
                  </div>
                </div>
              </MouseSpotlight>
            </SlideIn>
          </div>
        </div>
      </section>

      <GlowLine className="max-w-7xl mx-auto" />

      {/* Screens */}
      <section id="screens" className="py-20 px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/3 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <FadeIn>
            <p className="section-label mb-4">MAJOR SCREENS</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
              How the Experience <GradientText>Works</GradientText>
            </h2>
          </FadeIn>
          <div className="space-y-12">
            {[
              { label: "Home Page", color: "text-accent bg-accent/10 border-accent/20", src: "/images/lll/screen-home.png", alt: "Home Page - gamified landing page across MacBook, iPad, and iPhone showing dynamic avatar, performance metrics, and evolving backgrounds" },
              { label: "Leaderboard", color: "text-amber-400 bg-amber-400/10 border-amber-400/20", src: "/images/lll/screen-leaderboard.png", alt: "Leaderboard - regional rankings across MacBook, iPad, and iPhone showing top performers with regional emblems and color-coded standings" },
              { label: "Email Notifications", color: "text-green-400 bg-green-400/10 border-green-400/20", src: "/images/lll/screen-email.png", alt: "Email Notifications - custom LLL-themed email with 'Your June stats are in!' headline and Check Progress CTA button" },
            ].map((screen) => (
              <FadeIn key={screen.label}>
                <MouseSpotlight className="rounded-xl">
                  <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-bg-card group relative gradient-outline">
                    <div className={`absolute top-6 left-6 z-10 px-3 py-1.5 rounded-full ${screen.color} border backdrop-blur-sm`}>
                      <span className="text-xs font-semibold">{screen.label}</span>
                    </div>
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={2400}
                      height={1442}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </MouseSpotlight>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <GlowLine className="max-w-7xl mx-auto" />

      {/* Impact */}
      <section id="impact" className="py-20 px-8 relative overflow-hidden">
        <Aurora />
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <FadeIn>
            <p className="section-label mb-4">IMPACT</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
              What <GradientText>Changed</GradientText>
            </h2>
          </FadeIn>
          <FadeInStagger className="grid sm:grid-cols-2 md:grid-cols-3 gap-5" stagger={0.08}>
            {[
              { arrow: "↑", value: "3x", label: "Daily Check-Ins", color: "text-accent" },
              { arrow: "↓", value: "3 → 1", label: "Tools Consolidated", color: "text-green-400" },
              { arrow: "↓", value: "~6 hrs/wk", label: "Supervisor Effort Saved", color: "text-amber-400" },
              { arrow: "↑", value: "34%", label: "Email Click-Through", color: "text-accent" },
              { arrow: "↓", value: "Zero", label: "Regional Data Blackouts", color: "text-green-400" },
              { arrow: "↑", value: "10 days", label: "First Feature Request", color: "text-purple-400" },
            ].map((m) => (
              <FadeInItem key={m.label}>
                <div className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-bg-card to-[var(--gradient-dark-end)] p-6 text-center gradient-outline">
                  <p className={`${m.color} text-xl mb-1`}>{m.arrow}</p>
                  <p className="text-2xl font-bold text-text-primary mb-1">{m.value}</p>
                  <p className="text-sm font-semibold text-text-primary">{m.label}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <GlowLine className="max-w-7xl mx-auto" />

      {/* Reflection */}
      <section id="next-steps" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="section-label mb-4">REFLECTION</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              What I&apos;d Push <GradientText>Further</GradientText>
            </h2>
          </FadeIn>
          <FadeInStagger className="grid md:grid-cols-3 gap-5" stagger={0.1}>
            {[
              { title: "Adaptive Mobile Experience", desc: "The current platform is responsive, not adaptive. If mobile turns out to be the primary access point, build a version designed for quick glances and one-hand navigation.", color: "border-accent/30" },
              { title: "Shorter Data Refresh Cycles", desc: "Monthly updates are too slow for habit formation. Weekly or bi-weekly refreshes would tighten the feedback loop and make competition feel continuous.", color: "border-amber-400/30" },
              { title: "Inline Performance Sparklines", desc: "Tiny trend lines beneath each stat card value - no labels, no axes. A visual nudge that tells you at a glance whether your SLA is climbing or dipping.", color: "border-green-400/30" },
            ].map((item) => (
              <FadeInItem key={item.title}>
                <div className={`rounded-xl border ${item.color} bg-bg-card p-6 h-full gradient-outline`}>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   FULL STORY: Original detailed case study
   ───────────────────────────────────────────── */

function TheContext() {
  return (
    <section id="context" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-4">THE CONTEXT</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
            What Is Logistics
            <br />
            <GradientText>Legends League?</GradientText>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-7">
            <FadeIn>
              <div className="mb-4">
                <span className="text-xs font-semibold tracking-widest text-accent uppercase">THE PLATFORM</span>
              </div>
              <p className="text-text-secondary leading-relaxed mb-6">
                Logistics Legends League (LLL) is a <strong className="font-semibold text-text-primary/70">gamified performance measurement platform</strong> built for logistics teams. It serves <strong className="font-semibold text-text-primary/70">three levels of users</strong>: floor contributors who track their own stats, supervisors who monitor team performance, and managers who oversee regional KPIs.
              </p>
              <p className="text-text-secondary leading-relaxed">
                The gamification layer (avatars, XP, badges, leaderboards, boss battles) <strong className="font-semibold text-text-primary/70">already existed in a PowerBI + Excel setup</strong>. But it was{" "}
                <strong className="font-semibold text-text-primary/70">manually maintained, and treated as a reporting tool rather than something contributors actually wanted to open</strong>. The redesign rebuilds the entire system as a <strong className="font-semibold text-text-primary/70">single responsive web application</strong> where performance data flows in automatically and <strong className="font-semibold text-text-primary/70">every contributor has direct, self-service access</strong>.
              </p>
            </FadeIn>
          </div>
          <div className="md:col-span-5">
            <FadeInStagger className="grid gap-4" stagger={0.1}>
              {[
                { role: "Contributors", desc: "Track their own stats, SLA accuracy, attendance, and EXP levels.", color: "border-accent/30" },
                { role: "Supervisors", desc: "Monitor team performance, approve data, and manage regional leaderboards.", color: "border-amber-400/30" },
                { role: "Managers", desc: "Oversee regional KPIs, track trends, and make strategic decisions.", color: "border-green-400/30" },
              ].map((r) => (
                <FadeInItem key={r.role}>
                  <div className={`rounded-xl border ${r.color} bg-bg-card p-5 hover:bg-bg-card-hover transition-all duration-300 cursor-pointer gradient-outline`}>
                    <p className="text-accent font-semibold text-sm mb-2">{r.role}</p>
                    <p className="text-xs text-text-secondary leading-relaxed">{r.desc}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </div>

        <FadeIn>
          <div className="rounded-2xl border border-border-subtle bg-gradient-to-br from-bg-card to-[var(--gradient-card-end)] p-10 mb-10 gradient-outline">
            <span className="text-xs font-semibold tracking-widest text-red-400 uppercase block mb-4">THE PROBLEM</span>
            <p className="text-text-secondary leading-relaxed mb-6">
              The existing system had the right idea (gamification, badges, leaderboards, boss battles) but the execution was buried inside PowerBI dashboards and manually-maintained Excel sheets <strong className="font-semibold text-text-primary/70">built for reporting, not engagement</strong>. Contributors had <strong className="font-semibold text-text-primary/70">no reason to check their own data</strong> because the <strong className="font-semibold text-text-primary/70">experience wasn&apos;t designed for them</strong>.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The result: <strong className="font-semibold text-text-primary/70">low engagement across the board</strong>. No one competed because checking standings felt like extra work, not a habit. No one improved because timely, motivating feedback didn&apos;t exist. Productivity stayed flat, not because people didn&apos;t care, but because the <strong className="font-semibold text-text-primary/70">system gave them no reason to</strong>.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-3 gap-4 mb-12" stagger={0.1}>
          {[
            { label: "Low Engagement", color: "border-red-500/30 bg-red-500/5" },
            { label: "Zero Competition", color: "border-amber-500/30 bg-amber-500/5" },
            { label: "Flat Productivity", color: "border-orange-500/30 bg-orange-500/5" },
          ].map((chip) => (
            <FadeInItem key={chip.label}>
              <div className={`rounded-xl border ${chip.color} p-5 text-center gradient-outline`}>
                <p className="text-sm font-semibold text-text-primary">{chip.label}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn>
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-bg-card to-[var(--gradient-card-end)] p-10 relative overflow-hidden gradient-outline">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent" />
            <blockquote className="pl-6">
              <p className="text-xl md:text-2xl text-text-primary italic leading-relaxed">
                &ldquo;People perform differently when there is a milestone.&rdquo;
              </p>
              <p className="text-sm text-text-muted mt-4">
                Stakeholder interview &middot; The guiding principle behind every design decision in LLL
              </p>
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ResearchAndStakes() {
  return (
    <section id="research" className="py-24 px-8 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/3 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <p className="section-label mb-4">RESEARCH &amp; STAKES</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            What We Found and
            <br />
            <GradientText>Why It Mattered</GradientText>
          </h2>
          <p className="text-text-secondary mb-16 text-lg">
            8 interviews, 3 months of data, and three interconnected problems that couldn&apos;t be solved in isolation.
          </p>
        </FadeIn>

        <FadeInStagger className="space-y-6 mb-20" stagger={0.12}>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle border-l-2 border-l-accent bg-bg-card p-8 hover:bg-bg-card-hover transition-all duration-300 cursor-pointer gradient-outline">
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-8">
                <div className="text-center pt-1">
                  <p className="text-3xl font-bold text-accent">0 / 8</p>
                  <p className="text-[11px] text-text-muted mt-2 leading-snug">interviewed contributors could name their own SLA score</p>
                </div>
                <div>
                  <p className="font-mono text-sm text-accent mb-1">/01</p>
                  <h3 className="text-xl font-bold mb-3">Contributors never checked their own numbers</h3>
                  <p className="text-text-secondary leading-relaxed">200+ floor contributors <strong className="font-semibold text-text-primary/70">rarely checked</strong> their own SLA accuracy, attendance record, or EXP level, even though the data was technically available. The PowerBI dashboard was built for reporting, not engagement, buried behind links, updated on someone else&apos;s schedule, and designed for oversight rather than self-service. People weren&apos;t disengaged because they didn&apos;t care. They were disengaged because the system <strong className="font-semibold text-text-primary/70">never gave them a reason to come back</strong>.</p>
                </div>
              </div>
            </div>
          </FadeInItem>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle border-l-2 border-l-amber-400 bg-bg-card p-8 hover:bg-bg-card-hover transition-all duration-300 cursor-pointer gradient-outline">
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-8">
                <div className="text-center pt-1">
                  <p className="text-3xl font-bold text-amber-400">6+ hrs</p>
                  <p className="text-[11px] text-text-muted mt-2 leading-snug">per supervisor per week on manual game admin</p>
                </div>
                <div>
                  <p className="font-mono text-sm text-amber-400 mb-1">/02</p>
                  <h3 className="text-xl font-bold mb-3">Supervisors were drowning in manual work</h3>
                  <p className="text-text-secondary leading-relaxed">Every badge assignment, leaderboard update, and raffle entry was <strong className="font-semibold text-text-primary/70">tracked manually in Excel</strong> behind the PowerBI layer. Supervisors across 7 regions were spending <strong className="font-semibold text-text-primary/70">hours every week</strong> just keeping the gamification system alive. Time that should have gone to coaching, floor management, and actual leadership. The system built to motivate people was quietly <strong className="font-semibold text-text-primary/70">burning out the people running it</strong>.</p>
                </div>
              </div>
            </div>
          </FadeInItem>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle border-l-2 border-l-green-400 bg-bg-card p-8 hover:bg-bg-card-hover transition-all duration-300 cursor-pointer gradient-outline">
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-8">
                <div className="text-center pt-1">
                  <p className="text-3xl font-bold text-green-400">7 regions</p>
                  <p className="text-[11px] text-text-muted mt-2 leading-snug">dependent on individual supervisor availability</p>
                </div>
                <div>
                  <p className="font-mono text-sm text-green-400 mb-1">/03</p>
                  <h3 className="text-xl font-bold mb-3">The tech stack was a bottleneck, not a tool</h3>
                  <p className="text-text-secondary leading-relaxed">The gamification layer lived inside PowerBI, <strong className="font-semibold text-text-primary/70">built for reporting and read-only</strong>. The dashboard existed, but <strong className="font-semibold text-text-primary/70">nothing about it encouraged contributors</strong> to log in, track their progress, or check the leaderboard on their own. One person out sick meant an entire region went dark. The stack wasn&apos;t scaling. It was creating a <strong className="font-semibold text-text-primary/70">single point of failure</strong> at every site.</p>
                </div>
              </div>
            </div>
          </FadeInItem>
        </FadeInStagger>

        <FadeIn>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-8">KEY RESEARCH INSIGHTS</p>
        </FadeIn>
        <FadeInStagger className="grid md:grid-cols-2 gap-6 mb-16" stagger={0.1}>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle bg-accent/5 p-6 h-full hover:border-accent/20 transition-all duration-300 cursor-pointer gradient-outline">
              <p className="text-4xl font-bold text-accent opacity-40 mb-1">01</p>
              <p className="text-[11px] text-text-muted uppercase tracking-wider mb-3">User Interviews | 8 contributors, 4 regions</p>
              <h3 className="font-bold mb-2">Nobody knew their own score</h3>
              <p className="text-sm text-text-secondary leading-relaxed">We interviewed 8 contributors across 4 regions. <strong className="font-semibold text-text-primary/70">Not one could tell us their current SLA accuracy or EXP level</strong>. Gamification tracking lived in supervisor spreadsheets, and performance data sat untouched in PowerBI. Nobody had a habit of checking either. That&apos;s not a UI problem. That&apos;s an <strong className="font-semibold text-text-primary/70">engagement problem</strong>.</p>
            </div>
          </FadeInItem>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle bg-amber-400/5 p-6 h-full hover:border-accent/20 transition-all duration-300 cursor-pointer gradient-outline">
              <p className="text-4xl font-bold text-amber-400 opacity-40 mb-1">02</p>
              <p className="text-[11px] text-text-muted uppercase tracking-wider mb-3">Usability Testing | 8 participants</p>
              <h3 className="font-bold mb-2">Gamification felt decorative, not functional</h3>
              <p className="text-sm text-text-secondary leading-relaxed">The old PowerBI had badges, avatars, and XP, but it all sat inside a <strong className="font-semibold text-text-primary/70">static dashboard built for supervisor oversight</strong>. Contributors described it as <strong className="font-semibold text-text-primary/70">&ldquo;a sticker chart for adults.&rdquo;</strong> Something they glanced at once a month, if they opened it at all. They didn&apos;t want decoration. They wanted to <strong className="font-semibold text-text-primary/70">feel their numbers move</strong>.</p>
            </div>
          </FadeInItem>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle bg-green-400/5 p-6 h-full hover:border-accent/20 transition-all duration-300 cursor-pointer gradient-outline">
              <p className="text-4xl font-bold text-green-400 opacity-40 mb-1">03</p>
              <p className="text-[11px] text-text-muted uppercase tracking-wider mb-3">Supervisor Shadowing | 3 sites</p>
              <h3 className="font-bold mb-2">The game layer was costing supervisors 6+ hours a week</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Badge assignments, leaderboard updates, raffle entry tracking. <strong className="font-semibold text-text-primary/70">All done manually in spreadsheets</strong>. The system built to boost motivation had quietly become the <strong className="font-semibold text-text-primary/70">biggest admin burden on the floor</strong>. Supervisors were <strong className="font-semibold text-text-primary/70">gaming the game just to keep up</strong>.</p>
            </div>
          </FadeInItem>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle bg-purple-400/5 p-6 h-full hover:border-accent/20 transition-all duration-300 cursor-pointer gradient-outline">
              <p className="text-4xl font-bold text-purple-400 opacity-40 mb-1">04</p>
              <p className="text-[11px] text-text-muted uppercase tracking-wider mb-3">A/B Test | 4-week pilot</p>
              <h3 className="font-bold mb-2">Visible individual effort changed everything</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Regional leaderboards let <strong className="font-semibold text-text-primary/70">low performers hide behind the group score</strong>. Top contributors carried the numbers while the rest coasted. When we piloted individual leaderboards with regional identity kept intact, <strong className="font-semibold text-text-primary/70">daily check-ins nearly tripled</strong>. People didn&apos;t disengage - they started tracking their own progress for the first time.</p>
            </div>
          </FadeInItem>
        </FadeInStagger>

        <FadeIn>
          <div className="rounded-xl border border-border-subtle bg-bg-card p-8 text-center gradient-outline">
            <p className="text-text-secondary leading-relaxed max-w-3xl mx-auto">
              All three fed into each other. Contributors disengaged because the system gave them no reason to engage with it. Supervisors burned out because <strong className="font-semibold text-text-primary/70">the system was manual</strong>. And the tech stack made it impossible to fix either problem without <strong className="font-semibold text-text-primary/70">rebuilding from scratch</strong>.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function EngagementStrategy() {
  return (
    <section id="strategy" className="py-24 px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-green-500/3 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <p className="section-label mb-4">ENGAGEMENT STRATEGY</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            How We Brought
            <br />
            <GradientText>Engagement Back</GradientText>
          </h2>
          <p className="text-text-secondary mb-16 text-lg">
            Four design decisions that shifted the platform from something people ignored to something they checked daily.
          </p>
        </FadeIn>
        <FadeInStagger className="grid md:grid-cols-2 gap-6" stagger={0.1}>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle bg-bg-card p-8 h-full hover:border-accent/30 transition-all duration-300 cursor-pointer gradient-outline">
              <span className="text-5xl font-bold text-accent opacity-30 block mb-4">01</span>
              <h3 className="text-lg font-bold mb-3">A Complete Visual Overhaul</h3>
              <p className="text-text-secondary leading-relaxed">From cluttered PowerBI to a <strong className="font-semibold text-text-primary/70">polished action-game UI</strong>. Same building blocks, <strong className="font-semibold text-text-primary/70">completely different experience</strong>. Users in initial testing called it the <strong className="font-semibold text-text-primary/70">single biggest reason</strong> they wanted to come back.</p>
            </div>
          </FadeInItem>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle bg-bg-card p-8 h-full hover:border-amber-400/30 transition-all duration-300 cursor-pointer gradient-outline">
              <span className="text-5xl font-bold text-amber-400 opacity-30 block mb-4">02</span>
              <h3 className="text-lg font-bold mb-3">Responsive Across 3 Devices</h3>
              <p className="text-text-secondary leading-relaxed">Desktop-only to fully responsive. Contributors check rankings <strong className="font-semibold text-text-primary/70">on breaks, on the floor, on the go</strong>. The habit forms when the platform <strong className="font-semibold text-text-primary/70">fits into the workflow</strong>, not the other way around.</p>
            </div>
          </FadeInItem>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle bg-bg-card p-8 h-full hover:border-green-400/30 transition-all duration-300 cursor-pointer gradient-outline">
              <span className="text-5xl font-bold text-green-400 opacity-30 block mb-4">03</span>
              <h3 className="text-lg font-bold mb-3">Clear Progression in Every Tooltip</h3>
              <p className="text-text-secondary leading-relaxed">Rewrote every badge tooltip to show <strong className="font-semibold text-text-primary/70">exact unlock criteria</strong>, <strong className="font-semibold text-text-primary/70">current gap</strong>, and <strong className="font-semibold text-text-primary/70">proximity to qualifying</strong>. <strong className="font-semibold text-text-primary/70">&ldquo;You are just one away&rdquo;</strong> turned badges from mystery rewards into personal targets.</p>
            </div>
          </FadeInItem>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle bg-bg-card p-8 h-full hover:border-purple-400/30 transition-all duration-300 cursor-pointer gradient-outline">
              <span className="text-5xl font-bold text-purple-400 opacity-30 block mb-4">04</span>
              <h3 className="text-lg font-bold mb-3">Email Notifications on Every Update</h3>
              <p className="text-text-secondary leading-relaxed"><strong className="font-semibold text-text-primary/70">Custom LLL-themed emails</strong> with a <strong className="font-semibold text-text-primary/70">direct link</strong>, sent every time data refreshes. Turned silent updates into an <strong className="font-semibold text-text-primary/70">active pull mechanism</strong> that brings contributors back.</p>
            </div>
          </FadeInItem>
        </FadeInStagger>
      </div>
    </section>
  );
}

function KeyDecision() {
  return (
    <section id="decision" className="py-24 px-8 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <p className="section-label mb-4">ONE KEY DECISION I OWNED</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            The Feature Everyone Trusted
            <br />
            <GradientText>Was Lying.</GradientText>
          </h2>
        </FadeIn>
        <FadeInStagger className="grid md:grid-cols-3 gap-6 mb-12" stagger={0.1}>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle bg-gradient-to-b from-bg-card to-[var(--gradient-deep-end)] p-8 h-full gradient-outline">
              <p className="text-xs font-semibold tracking-widest text-red-400 mb-4">THE PROBLEM</p>
              <p className="text-text-secondary leading-relaxed">Regional leaderboards let everyone share the credit - whether they contributed or not. <strong className="font-semibold text-text-primary/70">Top performers carried the score, the rest just showed up.</strong> Research calls this social loafing: when individual effort isn&apos;t visible, people do less.</p>
            </div>
          </FadeInItem>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle bg-gradient-to-b from-bg-card to-[var(--gradient-deep-end)] p-8 h-full gradient-outline">
              <p className="text-xs font-semibold tracking-widest text-amber-400 mb-4">THE DECISION</p>
              <p className="text-text-secondary leading-relaxed">I replaced regional rankings with <strong className="font-semibold text-text-primary/70">individual leaderboards</strong>. Kept the regional emblems and theme colors so belonging stayed intact - you still repped your region, you just <strong className="font-semibold text-text-primary/70">couldn&apos;t hide behind it</strong>.</p>
            </div>
          </FadeInItem>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle bg-gradient-to-b from-bg-card to-[var(--gradient-deep-end)] p-8 h-full gradient-outline">
              <p className="text-xs font-semibold tracking-widest text-green-400 mb-4">THE RESULT</p>
              <p className="text-text-secondary leading-relaxed"><strong className="font-semibold text-text-primary/70">Daily check-ins nearly tripled</strong> in the 4-week pilot. People who never checked standings started tracking their own progress.</p>
            </div>
          </FadeInItem>
        </FadeInStagger>
        <FadeIn>
          <details className="group rounded-2xl border border-white/[0.08] bg-gradient-to-br from-bg-card to-[var(--gradient-card-end)] overflow-hidden gradient-outline">
            <summary className="flex items-center justify-between px-8 py-5 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
              <span className="text-sm text-accent font-medium">This wasn&apos;t a gut call. Here&apos;s the research behind it.</span>
              <svg className="w-4 h-4 text-accent shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-8 pb-8 space-y-5 border-t border-white/[0.06] pt-6">
              <div>
                <p className="text-xs font-semibold tracking-widest text-text-muted uppercase mb-2">Social Loafing</p>
                <p className="text-sm text-text-secondary leading-relaxed">When individual effort is hidden behind group scores, people naturally contribute less. (Karau &amp; Williams - meta-analysis of 78 studies)</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest text-text-muted uppercase mb-2">The N-Effect</p>
                <p className="text-sm text-text-secondary leading-relaxed">Motivation drops as the competitor pool grows. 200+ people on one board means nobody tries. (Garcia &amp; Tor)</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest text-text-muted uppercase mb-2">Free-Rider Collapse</p>
                <p className="text-sm text-text-secondary leading-relaxed">Low performers coast, high performers notice and also stop trying. Double collapse. (Kerr)</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest text-text-muted uppercase mb-2">Identity Doesn&apos;t Need Scoring</p>
                <p className="text-sm text-text-secondary leading-relaxed">Visual markers like colors and emblems create belonging just as effectively as group rankings. (Tajfel - Minimal Group Paradigm)</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest text-text-muted uppercase mb-2">Real-World Proof</p>
                <p className="text-sm text-text-secondary leading-relaxed">Kenco, a logistics company, switched to individual leaderboards: 45% profit increase, 3x KPI improvement in 3 months. Deloitte did the same: 46.6% more daily users.</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest text-text-muted uppercase mb-2">The Hybrid Model</p>
                <p className="text-sm text-text-secondary leading-relaxed">Individual accountability + group identity = best outcomes. That&apos;s exactly what I built here. (Slavin - STAD Model)</p>
              </div>
            </div>
          </details>
        </FadeIn>
      </div>
    </section>
  );
}

function InfoArchitecture() {
  return (
    <section id="architecture" className="py-24 px-8 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/3 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <p className="section-label mb-4">INFORMATION ARCHITECTURE</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            How Data Flows
            <br />
            <GradientText>to Each Role</GradientText>
          </h2>
          <p className="text-text-secondary mb-16 text-lg max-w-3xl">
            At month-end, data is <strong className="font-semibold text-text-primary/70">collected automatically</strong> from operational systems, compiled and reviewed by managers. Once approved, the portal updates and every contributor is notified. What each user sees <strong className="font-semibold text-text-primary/70">depends on their role</strong>.
          </p>
        </FadeIn>

        <FadeIn>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-6">DATA INPUTS</p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6" stagger={0.08}>
          {[
            { title: "Check-in / Checkout", desc: "Attendance & clock data" },
            { title: "Leave Tracking", desc: "Absences & PTO records" },
            { title: "Report Submissions", desc: "Daily operational reports" },
            { title: "Operational Metrics", desc: "SLA, QA & KPI scores" },
          ].map((input) => (
            <FadeInItem key={input.title}>
              <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 gradient-outline">
                <p className="text-sm font-semibold text-text-primary mb-1">{input.title}</p>
                <p className="text-xs text-text-muted">{input.desc}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn>
          <p className="text-accent text-2xl text-center mb-6">&#x25BC;</p>
        </FadeIn>

        <FadeIn>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-6">DATA PIPELINE</p>
        </FadeIn>
        <FadeInStagger className="grid md:grid-cols-4 gap-3 mb-6" stagger={0.1}>
          {[
            { num: "01", title: "Automated Collection", desc: "System pulls data from all sources at month-end. No manual compilation by supervisors needed." },
            { num: "02", title: "Excel Compilation", desc: "Collected data is auto-formatted into a structured Excel file and delivered to managers for review." },
            { num: "03", title: "Manager Review & Paste", desc: "Managers verify the compiled data. If satisfied, they paste it into the main Excel file, that paste is the approval." },
            { num: "04", title: "Portal Update & Notification", desc: "Portal detects the update, refreshes all views, and sends a custom email notification to every contributor." },
          ].map((step, i) => (
            <FadeInItem key={step.num}>
              <div className="flex items-start gap-3">
                <div className="rounded-xl border border-border-subtle bg-bg-card p-5 flex-1 hover:border-accent/20 transition-all duration-300 cursor-pointer gradient-outline">
                  <span className="text-accent font-mono text-sm mb-2 block">{step.num}</span>
                  <h3 className="font-bold text-sm mb-2">{step.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
                {i < 3 && (
                  <span className="text-accent text-lg mt-8 hidden md:block shrink-0">&rarr;</span>
                )}
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn>
          <p className="text-accent text-2xl text-center mb-6">&#x25BC;</p>
        </FadeIn>

        <FadeIn>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-6">ROLE-BASED ACCESS</p>
        </FadeIn>
        <FadeInStagger className="grid md:grid-cols-3 gap-6" stagger={0.1}>
          {[
            {
              role: "Contributors",
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              ),
              borderColor: "border-accent/30", hoverBorder: "hover:border-accent/50", iconBg: "bg-accent/10 border-accent/10", dotColor: "bg-accent",
              desc: "Floor-level employees who track their own individual performance and compete with peers.",
              access: ["OPS / RTS Battle Pass", "Month Filter", "Leaderboard", "Glossary"],
              note: "Battle Pass type (OPS or RTS) depends on team assignment. Contributors only see their own data.",
            },
            {
              role: "Supervisors",
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
              borderColor: "border-amber-400/30", hoverBorder: "hover:border-amber-400/50", iconBg: "bg-amber-400/10 border-amber-400/10", dotColor: "bg-amber-400",
              desc: "Team leads who monitor how their team is performing against team-level goals.",
              access: ["Leadership Battle Pass", "Data Summary (Respective Plants)", "Name / User Filter", "Glossary"],
              note: "Leadership Battle Pass shows team goals only, no personal performance data. Supervisors can filter by contributor name.",
            },
            {
              role: "Managers",
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01" /><path d="M16 6h.01" />
                  <path d="M12 6h.01" /><path d="M12 10h.01" />
                  <path d="M12 14h.01" /><path d="M16 10h.01" />
                  <path d="M16 14h.01" /><path d="M8 10h.01" />
                  <path d="M8 14h.01" />
                </svg>
              ),
              borderColor: "border-green-400/30", hoverBorder: "hover:border-green-400/50", iconBg: "bg-green-400/10 border-green-400/10", dotColor: "bg-green-400",
              desc: "Regional managers who oversee KPIs and team performance across their entire region.",
              access: ["Leadership Battle Pass", "Data Summary (All Plants & Regions)", "Name / User Filter", "Glossary"],
              note: "Managers see aggregated regional data across all teams. Same views as supervisors but at a higher level.",
            },
          ].map((role) => (
            <FadeInItem key={role.role}>
              <div className={`rounded-xl border ${role.borderColor} ${role.hoverBorder} bg-bg-card p-6 h-full transition-all duration-500 cursor-default group relative overflow-hidden gradient-outline`}>
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${role.iconBg} border`}>
                    {role.icon}
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-accent transition-colors duration-300">{role.role}</h3>
                </div>
                <p className="text-xs text-text-secondary mb-5 leading-relaxed">{role.desc}</p>
                <p className="text-[10px] font-semibold tracking-widest text-text-muted uppercase mb-3">CAN ACCESS</p>
                <ul className="space-y-2.5 mb-5">
                  {role.access.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                      <span className={`w-1.5 h-1.5 rounded-full ${role.dotColor} shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-xs text-text-muted leading-relaxed">{role.note}</p>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-4">BEFORE &amp; AFTER</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            From PowerBI to a
            <br />
            <GradientText>Self-Service Platform</GradientText>
          </h2>
          <p className="text-text-secondary mb-16 text-lg">
            The old system had the right building blocks but buried them inside a reporting tool and manual workflows. The redesign <strong className="font-semibold text-text-primary/70">put every contributor in the driver&apos;s seat</strong>.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          <SlideIn direction="left">
            <MouseSpotlight className="rounded-xl h-full">
              <div className="rounded-xl border border-red-500/30 bg-gradient-to-b from-red-500/5 to-bg-card overflow-hidden h-full group gradient-outline">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/lll/before.png"
                    alt="Before - the old PowerBI dashboard with cluttered layout, manual data entry, and no self-service access for contributors"
                    width={1168}
                    height={754}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-red-400">Before</span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="font-semibold text-red-400 mb-3">The Old Way</p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    PowerBI dashboard. <strong className="font-semibold text-text-primary/70">Built for reporting</strong>, manually maintained, with <strong className="font-semibold text-text-primary/70">nothing to draw contributors in</strong>. Contributors saw their data <strong className="font-semibold text-text-primary/70">once a month at best</strong>.
                  </p>
                </div>
              </div>
            </MouseSpotlight>
          </SlideIn>
          <SlideIn direction="right" delay={0.15}>
            <MouseSpotlight className="rounded-xl h-full">
              <div className="rounded-xl border border-accent/30 bg-gradient-to-b from-accent/5 to-bg-card overflow-hidden h-full group gradient-outline">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/lll/after.png"
                    alt="After - the redesigned LLL web platform with gamified UI, avatar, badges, achievements, and self-service access"
                    width={1168}
                    height={754}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-accent">After</span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="font-semibold text-accent mb-3">The New Platform</p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Responsive web platform. Self-service access across 3 devices. Current stats, gamification, and leaderboards available to every contributor, on demand.
                  </p>
                </div>
              </div>
            </MouseSpotlight>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

function MajorScreens() {
  return (
    <section id="screens" className="py-24 px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/3 blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <p className="section-label mb-4">MAJOR SCREENS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 leading-tight">
            How the Experience
            <br />
            <GradientText>Works</GradientText>
          </h2>
        </FadeIn>
        <div className="space-y-24">
          <SlideIn direction="left">
            <MouseSpotlight className="rounded-xl">
              <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-bg-card group relative gradient-outline">
                <div className="absolute top-6 left-6 z-10 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-accent">Home Page</span>
                </div>
                <Image
                  src="/images/lll/screen-home.png"
                  alt="Home Page - gamified landing page across MacBook, iPad, and iPhone showing dynamic avatar, performance metrics, and evolving backgrounds"
                  width={2400}
                  height={1442}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </MouseSpotlight>
          </SlideIn>

          <SlideIn direction="right">
            <MouseSpotlight className="rounded-xl">
              <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-bg-card group relative gradient-outline">
                <div className="absolute top-6 left-6 z-10 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-amber-400">Leaderboard</span>
                </div>
                <Image
                  src="/images/lll/screen-leaderboard.png"
                  alt="Leaderboard - regional rankings across MacBook, iPad, and iPhone showing top performers with regional emblems and color-coded standings"
                  width={2400}
                  height={1442}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </MouseSpotlight>
          </SlideIn>

          <SlideIn direction="left">
            <MouseSpotlight className="rounded-xl">
              <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-bg-card group relative gradient-outline">
                <div className="absolute top-6 left-6 z-10 px-3 py-1.5 rounded-full bg-green-400/10 border border-green-400/20 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-green-400">Email Notifications</span>
                </div>
                <Image
                  src="/images/lll/screen-email.png"
                  alt="Email Notifications - custom LLL-themed email with 'Your June stats are in!' headline and Check Progress CTA button"
                  width={2400}
                  height={694}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </MouseSpotlight>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

function UsabilityTesting() {
  return (
    <section id="testing" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-4">USABILITY TESTING</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 leading-tight">
            Evidence of Learning
            <br />
            <GradientText>&amp; Iteration</GradientText>
          </h2>
        </FadeIn>
        <FadeInStagger className="space-y-4" stagger={0.1}>
          {[
            {
              cause: "Users missed their performance trends",
              change: "Added month-by-month filtering to the contributor dashboard",
              effect: "6 of 8 explored month comparisons unprompted",
            },
            {
              cause: "Leaderboard felt intimidating for new users",
              change: "Grouped rankings by region with team emblems",
              effect: "5 of 8 new users engaged with leaderboard immediately",
            },
            {
              cause: "Badge unlock criteria was unclear",
              change: "Rewrote descriptions with exact thresholds",
              effect: "7 of 8 identified badge criteria on first read",
            },
          ].map((row, i) => (
            <FadeInItem key={i}>
              <div className="rounded-xl border border-border-subtle bg-bg-card p-8 hover:bg-bg-card-hover transition-all duration-300 cursor-pointer gradient-outline">
                <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-center">
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest text-red-400 uppercase mb-2">CAUSE</p>
                    <p className="text-sm text-text-primary font-medium">{row.cause}</p>
                  </div>
                  <span className="text-accent text-2xl hidden md:block">&rarr;</span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest text-amber-400 uppercase mb-2">CHANGE</p>
                    <p className="text-sm text-text-primary font-medium">{row.change}</p>
                  </div>
                  <span className="text-accent text-2xl hidden md:block">&rarr;</span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest text-green-400 uppercase mb-2">EFFECT</p>
                    <p className="text-sm text-accent font-semibold">{row.effect}</p>
                  </div>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="py-24 px-8 relative overflow-hidden">
      <Aurora />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <p className="section-label mb-4">IMPACT</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            What <GradientText>Changed</GradientText>
          </h2>
          <p className="text-text-secondary mb-16 text-lg">
            Measurable shifts from the first rollout across 7 regions.
          </p>
        </FadeIn>
        <FadeInStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>
          {[
            { arrow: "↑", value: "3x", label: "Daily Check-Ins", desc: "After introducing regional leaderboards in the 4-week pilot", color: "text-accent" },
            { arrow: "↓", value: "3 → 1", label: "Tools Consolidated", desc: "PowerBI + manual workflows + separate emails unified", color: "text-green-400" },
            { arrow: "↓", value: "~6 hrs/wk", label: "Supervisor Effort Saved", desc: "Manual data prep automated per region", color: "text-amber-400" },
            { arrow: "↑", value: "34%", label: "Email Click-Through", desc: "Primary channel driving return visits", color: "text-accent" },
            { arrow: "↓", value: "Zero", label: "Regional Data Blackouts", desc: "Automated pipeline removed single point of failure", color: "text-green-400" },
            { arrow: "↑", value: "10 days", label: "First Feature Request", desc: "Contributors engaging, not just viewing", color: "text-purple-400" },
          ].map((m) => (
            <FadeInItem key={m.label}>
              <div className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-bg-card to-[var(--gradient-dark-end)] p-8 text-center transition-all duration-300 cursor-default group relative overflow-hidden gradient-outline">
                  <p className={`${m.color} text-2xl mb-2`}>{m.arrow}</p>
                  <p className="text-3xl font-bold text-text-primary mb-1">{m.value}</p>
                  <p className="text-sm font-semibold text-text-primary mb-1">{m.label}</p>
                  <p className="text-xs text-text-muted">{m.desc}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

function PushFurther() {
  return (
    <section id="next-steps" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-4">WHAT I&apos;D PUSH FURTHER</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            If I Had One
            <br />
            <GradientText>More Sprint</GradientText>
          </h2>
          <p className="text-text-secondary mb-16 text-lg">
            The shipped product solved the core problems. But three things came up during testing and early usage that I&apos;d prioritize in a follow-up cycle: small, realistic changes with outsized impact.
          </p>
        </FadeIn>
        <FadeInStagger className="space-y-6" stagger={0.12}>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle border-l-accent border-l-2 bg-bg-card p-8 hover:bg-bg-card-hover transition-all duration-300 cursor-pointer gradient-outline">
              <div className="flex gap-6 items-start">
                <span className="text-4xl font-bold text-accent opacity-40 shrink-0">/01</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-6">Adaptive Mobile Experience</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-3">THE GAP</p>
                      <p className="text-sm text-text-secondary leading-relaxed">The current platform is <strong className="font-semibold text-text-primary/70">responsive, not adaptive</strong>. It works across devices but isn&apos;t optimized for any one of them. We&apos;re <strong className="font-semibold text-text-primary/70">monitoring adoption patterns and device usage</strong> closely to understand where contributors spend most of their time.</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-3">WHAT I&apos;D BUILD</p>
                      <p className="text-sm text-text-secondary leading-relaxed">If mobile turns out to be the <strong className="font-semibold text-text-primary/70">primary access point</strong>, we&apos;ll build a version designed specifically around how contributors use their phones: quick glances, one-hand navigation, minimal scrolling to reach key stats. The <strong className="font-semibold text-text-primary/70">data will guide the timing</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInItem>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle border-l-amber-400 border-l-2 bg-bg-card p-8 hover:bg-bg-card-hover transition-all duration-300 cursor-pointer gradient-outline">
              <div className="flex gap-6 items-start">
                <span className="text-4xl font-bold text-amber-400 opacity-40 shrink-0">/02</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-6">Shorter Data Refresh Cycles</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-3">THE GAP</p>
                      <p className="text-sm text-text-secondary leading-relaxed">Performance data currently updates once a month. That&apos;s a <strong className="font-semibold text-text-primary/70">long gap between effort and feedback</strong>. Contributors wait weeks to see the impact of what they did, and the competition <strong className="font-semibold text-text-primary/70">resets too slowly</strong> to feel ongoing.</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-3">WHAT I&apos;D BUILD</p>
                      <p className="text-sm text-text-secondary leading-relaxed">Moving to <strong className="font-semibold text-text-primary/70">weekly or bi-weekly refreshes</strong> would tighten the loop, give contributors a reason to check in more often, and make the competition feel continuous. This was originally scoped for the current phase, but we held it back. Changing how often data refreshes changes user behavior, and that kind of shift needs to be <strong className="font-semibold text-text-primary/70">validated through research</strong> before it rolls out.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInItem>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle border-l-green-400 border-l-2 bg-bg-card p-8 hover:bg-bg-card-hover transition-all duration-300 cursor-pointer gradient-outline">
              <div className="flex gap-6 items-start">
                <span className="text-4xl font-bold text-green-400 opacity-40 shrink-0">/03</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-6">Inline Performance Sparklines</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-3">THE GAP</p>
                      <p className="text-sm text-text-secondary leading-relaxed">Contributors can see their current stats (SLA, QA, EXP) but the dashboard stat cards are <strong className="font-semibold text-text-primary/70">just snapshots</strong>. There&apos;s <strong className="font-semibold text-text-primary/70">no visual signal</strong> for whether a number is trending up or down. You have to navigate to the Data Summary page and compare rows manually to spot a trend. <strong className="font-semibold text-text-primary/70">Most people don&apos;t bother</strong>.</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-3">WHAT I&apos;D BUILD</p>
                      <p className="text-sm text-text-secondary leading-relaxed">Tiny <strong className="font-semibold text-text-primary/70">inline sparklines beneath each stat card value</strong>: a simple 4-month trend line, no labels, no axes. Just a visual nudge that tells you at a glance whether your SLA is climbing or dipping. The data already exists in the system; it&apos;s just <strong className="font-semibold text-text-primary/70">not surfaced where people look first</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInItem>
        </FadeInStagger>
      </div>
    </section>
  );
}

function FullStory() {
  return (
    <>
      <TheContext />
      <GlowLine className="max-w-7xl mx-auto" />
      <ResearchAndStakes />
      <GlowLine className="max-w-7xl mx-auto" />
      <EngagementStrategy />
      <GlowLine className="max-w-7xl mx-auto" />
      <KeyDecision />
      <GlowLine className="max-w-7xl mx-auto" />
      <InfoArchitecture />
      <GlowLine className="max-w-7xl mx-auto" />
      <BeforeAfter />
      <GlowLine className="max-w-7xl mx-auto" />
      <MajorScreens />
      <GlowLine className="max-w-7xl mx-auto" />
      <UsabilityTesting />
      <GlowLine className="max-w-7xl mx-auto" />
      <Impact />
      <GlowLine className="max-w-7xl mx-auto" />
      <PushFurther />
    </>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────── */

/* ─────────────────────────────────────────────
   SECTION NAV CONFIG & PAGE EXPORT
   ───────────────────────────────────────────── */

const icon = (d: string) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const LLL_SECTIONS = [
  { id: "top", label: "Top", icon: icon("M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4") },
  { id: "context", label: "Context", icon: icon("M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z") },
  { id: "research", label: "Research", icon: icon("M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z") },
  { id: "strategy", label: "Strategy", icon: icon("M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z") },
  { id: "before-after", label: "Design", icon: icon("M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z") },
  { id: "screens", label: "Screens", icon: icon("M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z") },
  { id: "impact", label: "Impact", icon: icon("M13 7h8m0 0v8m0-8l-8 8-4-4-6 6") },
  { id: "next-steps", label: "Next Steps", icon: icon("M13 5l7 7-7 7M5 5l7 7-7 7") },
];

export default function LLLCaseStudy() {
  return (
    <>
      <CaseNav />
      <CaseStudyToggle
        storageKey="lll-reading-mode"
        quickRead={<QuickRead />}
        fullStory={<FullStory />}
      >
        <FullStoryOnly>
          <SectionNav sections={LLL_SECTIONS} />
        </FullStoryOnly>
        <main id="main-content" className="flex-1 xl:pl-12 2xl:pl-0">
          <TheFrame />
          <HeroUI />
          <GlowLine className="max-w-7xl mx-auto" />
          <StickyReadingBar />
        </main>
      </CaseStudyToggle>
      <CaseFooter description="Logistics Legends League · Gamified Performance Platform · 2026" />
    </>
  );
}
