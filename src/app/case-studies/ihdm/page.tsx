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
  title: "Inventory & Helpdesk Management | Ujjwal",
  description:
    "Designing a mobile app for K-12 school districts to streamline inventory management and helpdesk operations.",
};

/* ── SHARED HERO ── */

function TheFrame() {
  return (
    <section id="top" className="pt-36 pb-16 px-8 relative overflow-hidden">
      <Aurora />
      <Particles count={15} />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative text-center w-full">
        <FadeIn>
          <p className="section-label mb-8">THE FRAME</p>
        </FadeIn>
        <div className="max-w-4xl mx-auto space-y-3">
          <FadeIn delay={0.15}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
              <BlurReveal text="One school was losing assets nobody could find." delay={60} />
            </h1>
          </FadeIn>
          <FadeIn delay={0.5}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-text-secondary">
              <BlurReveal text="The other was filing tickets nobody would answer." delay={60} startDelay={0.6} />
            </h1>
          </FadeIn>
          <FadeIn delay={0.9}>
            <p className="text-xl md:text-2xl text-text-muted pt-6">
              Two broken systems.{" "}
              <TextShimmer className="font-semibold text-xl md:text-2xl">I designed one app to fix both.</TextShimmer>
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={1.1}>
          <p className="text-text-secondary mt-10 text-lg">
            Inventory &amp; Helpdesk Management &middot; UX Case Study
          </p>
        </FadeIn>
        <FadeIn delay={1.4}>
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
    <section className="pt-4 pb-16 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1628]/80 to-bg-primary pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <MouseSpotlight className="rounded-2xl">
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden relative group gradient-outline">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <Image
                src="/images/ihdm/hero.png"
                alt="Inventory and Helpdesk Management - UX Case Study hero visual showing the mobile app interface with helpdesk tickets, dashboard statistics, and inventory management screens against a purple gradient background"
                width={3840}
                height={2160}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </MouseSpotlight>
        </FadeIn>
        <FadeInStagger className="flex flex-wrap gap-12 md:gap-16 mt-12 justify-center" stagger={0.1}>
          {[
            { value: 209, label: "Screens Designed" },
            { value: 2, suffix: "", label: "Platforms Shipped" },
            { value: 21, suffix: " mo", label: "Project Duration" },
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

/* ── QUICK READ ── */

function QuickRead() {
  return (
    <>
      {/* Challenge */}
      <section id="context" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="section-label mb-4">THE CHALLENGE</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              Two Broken Systems, <GradientText>One App</GradientText>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-secondary text-lg leading-relaxed max-w-3xl mb-10">
              K-12 districts manage thousands of assets across multiple locations with helpdesk operations scattered across fragmented systems. Manual record-keeping was error-prone, IT tickets fell through cracks, and nobody had a unified view of what was happening.
            </p>
          </FadeIn>
          <FadeInStagger className="grid sm:grid-cols-3 gap-4 mb-10" stagger={0.1}>
            {[
              { stat: "70%", desc: "reported delays in asset check-ins and check-outs", color: "text-accent border-accent/30" },
              { stat: "65%", desc: "experienced slow helpdesk response times", color: "text-amber-400 border-amber-400/30" },
              { stat: "3 tools", desc: "juggled for inventory, tickets, and audits", color: "text-green-400 border-green-400/30" },
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
            <div className="rounded-2xl border border-border-subtle bg-gradient-to-br from-bg-card to-[var(--gradient-card-end)] p-8 gradient-outline">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-3">MY ROLE</span>
              <p className="text-text-secondary leading-relaxed">
                Senior UX Designer - end-to-end design across a 21-month cycle with a cross-functional team of 11. Shipped to App Store and Google Play in July 2024.
              </p>
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
              Research to <GradientText>Launch</GradientText>
            </h2>
          </FadeIn>
          <FadeInStagger className="grid md:grid-cols-4 gap-4" stagger={0.1}>
            {[
              { phase: "Discover", method: "Interviews, surveys, 3-site observation", insight: "All three user groups shared one frustration: fragmented tools eating into education time" },
              { phase: "Analyze", method: "Competitive audit, journey maps", insight: "Neither competitor offered unified inventory + helpdesk. Incident IQ had depth but terrible onboarding" },
              { phase: "Design", method: "IA, wireframes, high-fidelity UI", insight: "Adopted Lunchbox Design System. RFID/barcode scanning, 11 filterable data views, role-based navigation" },
              { phase: "Ship", method: "iOS + Android, 209 screens", insight: "Iterative testing refined ticket filtering and homepage personalization before launch" },
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
      <section id="design" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="section-label mb-4">KEY DECISIONS</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              What I <GradientText>Built and Why</GradientText>
            </h2>
          </FadeIn>
          <FadeInStagger className="grid md:grid-cols-3 gap-5 mb-12" stagger={0.1}>
            {[
              {
                title: "RFID & barcode scanning",
                rationale: "Manually typing tag numbers was the biggest time sink. Camera, RFID, and barcode scan features cut audit time dramatically.",
                color: "border-accent/30",
              },
              {
                title: "11 filterable data views",
                rationale: "Admins and IT staff needed different slices of the same data. Role-based dashboards with comprehensive filters tailored to each user.",
                color: "border-amber-400/30",
              },
              {
                title: "Helpdesk ticket evolution",
                rationale: "Started with basic details, iterated to 10 comprehensive sections after testing. All relevant information accessible without switching tools.",
                color: "border-green-400/30",
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

          <div className="space-y-12">
            {[
              { label: "RFID & Barcode Scanning", color: "text-accent bg-accent/10 border-accent/20", src: "/images/ihdm/screen-rfid.png", alt: "Streamlining Asset Management with RFID and Barcode Scanning" },
              { label: "Inventory Statistics", color: "text-amber-400 bg-amber-400/10 border-amber-400/20", src: "/images/ihdm/screen-statistics.png", alt: "Detailed Inventory Statistics with Customizable Filters" },
              { label: "Helpdesk Ticket", color: "text-green-400 bg-green-400/10 border-green-400/20", src: "/images/ihdm/screen-ticket.png", alt: "Evolution of Helpdesk Ticket from basic to comprehensive" },
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
                      width={3840}
                      height={2160}
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
              { before: "2.6", after: "4.3", label: "User Satisfaction", improvement: "+1.7", color: "text-accent" },
              { before: "59%", after: "86%", label: "Adoption Rate", improvement: "+27%", color: "text-accent" },
              { before: "29 hrs", after: "11 hrs", label: "Ticket Resolution", improvement: "-18 hrs", color: "text-amber-400" },
              { before: "7.5 min", after: "4.7 min", label: "Time on Task", improvement: "-2.8 min", color: "text-amber-400" },
              { before: "81%", after: "96%", label: "Inventory Accuracy", improvement: "+15%", color: "text-green-400" },
              { before: "77%", after: "89%", label: "Task Success Rate", improvement: "+12%", color: "text-green-400" },
            ].map((m) => (
              <FadeInItem key={m.label}>
                <div className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-bg-card to-[var(--gradient-dark-end)] p-6 transition-all duration-300 cursor-default gradient-outline">
                  <div className="flex justify-between items-baseline mb-3">
                    <span className="text-xs text-text-muted line-through decoration-red-400/40">{m.before}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-text-muted">
                      <path d="M3 8h10M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs text-text-primary font-semibold">{m.after}</span>
                  </div>
                  <p className={`${m.color} text-2xl font-bold mb-1`}>{m.improvement}</p>
                  <p className="text-sm font-semibold text-text-primary">{m.label}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <GlowLine className="max-w-7xl mx-auto" />

      {/* Reflection */}
      <section id="lessons" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="section-label mb-4">REFLECTION</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              What I <GradientText>Learned</GradientText>
            </h2>
          </FadeIn>
          <FadeInStagger className="grid md:grid-cols-2 gap-5" stagger={0.1}>
            {[
              { title: "Cross-platform parity", desc: "Android used Jetpack Compose, iOS used UIKit. I proposed a simplified single-screen scan view that preserved the core interaction while being feasible on both platforms.", color: "border-accent/30" },
              { title: "Scoping under budget pressure", desc: "Phase 2 budget was cut mid-sprint. I audited features against research data and cut offline sync and push notifications - shipping on time with highest-impact features intact.", color: "border-amber-400/30" },
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

/* ── FULL STORY: Original sections ── */

function AboutTheCompany() {
  return (
    <section id="context" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-4">ABOUT THE COMPANY</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
            Frontline
            <br />
            <GradientText>Education</GradientText>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-7">
            <FadeIn>
              <p className="text-text-secondary leading-relaxed mb-6">
                With over <strong className="font-semibold text-text-primary/70">25 years in K-12 education</strong>, Frontline Education is a leading provider of school administration software. They offer solutions for <strong className="font-semibold text-text-primary/70">human capital management, student programs, business operations, and analytics</strong>, serving over 10,000 clients nationwide.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Frontline&apos;s tools help streamline administrative tasks, allowing educators to focus on student success. The Inventory &amp; Helpdesk Management app was designed to bring their <strong className="font-semibold text-text-primary/70">asset tracking and issue resolution capabilities</strong> into a unified mobile experience for K-12 districts.
              </p>
            </FadeIn>
          </div>
          <div className="md:col-span-5">
            <FadeInStagger className="grid grid-cols-2 gap-4" stagger={0.1}>
              {[
                { value: "25", label: "Years of\nService" },
                { value: "12k", label: "Schools\nServed" },
                { value: "30+", label: "Software\nSolutions" },
                { value: "1.3B", label: "Annual\nRevenue" },
              ].map((stat) => (
                <FadeInItem key={stat.label}>
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 text-center gradient-outline">
                    <p className="text-2xl font-bold text-accent mb-1">{stat.value}</p>
                    <p className="text-xs text-text-muted whitespace-pre-line">{stat.label}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </div>

        <FadeIn>
          <div className="rounded-2xl border border-border-subtle bg-gradient-to-br from-bg-card to-[var(--gradient-card-end)] p-10 gradient-outline">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-4">MY ROLE</span>
            <p className="text-text-secondary leading-relaxed mb-4">
              As the <strong className="font-semibold text-text-primary/70">Senior UX Designer</strong> on this project, I was responsible for the end-to-end design of the mobile application. From <strong className="font-semibold text-text-primary/70">user research and competitive analysis</strong> through <strong className="font-semibold text-text-primary/70">information architecture, wireframing, and high-fidelity UI design</strong>.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I worked closely with a cross-functional team of 11 - including project managers, iOS and Android developers, and QA analysts - over a <strong className="font-semibold text-text-primary/70">21-month development cycle</strong> that culminated in a live launch on the App Store and Google Play Store in <strong className="font-semibold text-text-primary/70">July 2024</strong>.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TheProblem() {
  return (
    <section className="py-24 px-8 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-red-500/3 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <p className="section-label mb-4">THE PROBLEM</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            Why This Needed
            <br />
            <GradientText>to Be Solved</GradientText>
          </h2>
          <p className="text-text-secondary mb-16 text-lg max-w-3xl">
            K-12 districts manage thousands of assets - textbooks, laptops, tablets, lab equipment - across multiple locations, with help desk operations scattered across fragmented systems.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="rounded-2xl border border-border-subtle bg-gradient-to-br from-bg-card to-[var(--gradient-card-end)] p-10 mb-12 gradient-outline">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <span className="text-xs font-semibold tracking-widest text-red-400 uppercase block mb-4">CONTEXT &amp; BACKGROUND</span>
                <p className="text-text-secondary leading-relaxed">
                  There are around <strong className="font-semibold text-text-primary/70">13,452 school districts and more than 115,000 K-12 schools in the United States</strong>. Each manages a vast array of assets. Traditional methods - manual record-keeping and outdated software - were <strong className="font-semibold text-text-primary/70">inefficient and error-prone</strong>. Help desk operations relied on multiple systems, leading to delays and miscommunication.
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase block mb-4">PROBLEM STATEMENT</span>
                <p className="text-text-secondary leading-relaxed">
                  K-12 school districts struggle with <strong className="font-semibold text-text-primary/70">inefficient processes for managing inventory, auditing, and help desk operations</strong>. These issues affect students, teachers, and administrative staff by causing delays and miscommunication, compromising the overall effectiveness of district operations and <strong className="font-semibold text-text-primary/70">wasting time and resources</strong>.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-6 mb-16" stagger={0.1}>
          {[
            { num: "01", title: "Inventory Management", desc: "Issuing and collecting assets via barcode readers or device cameras. Inventory audits using RFID. Detailed tag lookups to manage asset distribution and collection effortlessly.", color: "hover:border-accent/30" },
            { num: "02", title: "Help Desk Management", desc: "Users can create, edit, and manage help desk tickets directly within the app. Improved communication between users and IT staff for better issue tracking and resolution.", color: "hover:border-amber-400/30" },
            { num: "03", title: "Unified Mobile Experience", desc: "Consolidating inventory and helpdesk into a single platform. Responsive design adapting to different devices. Features like offline access and push notifications for real-time updates.", color: "hover:border-green-400/30" },
          ].map((item) => (
            <FadeInItem key={item.num}>
              <div className={`rounded-xl border border-border-subtle bg-bg-card p-8 h-full ${item.color} transition-all duration-300 cursor-pointer gradient-outline`}>
                <span className="text-5xl font-bold text-accent opacity-30 block mb-4">{item.num}</span>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{item.desc}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-8">STAKEHOLDERS</p>
        </FadeIn>
        <FadeInStagger className="grid md:grid-cols-3 gap-6 mb-12" stagger={0.1}>
          {[
            { role: "School District Administrators", desc: "Oversee overall operations and ensure resources are managed effectively.", color: "border-sky-400/40", textColor: "text-sky-400" },
            { role: "IT Staff", desc: "Handle technical issues and manage the help desk operations.", color: "border-amber-400/40", textColor: "text-amber-400" },
            { role: "Teachers", desc: "Use assets and report issues that need to be resolved promptly.", color: "border-green-400/40", textColor: "text-green-400" },
          ].map((r) => (
            <FadeInItem key={r.role}>
              <div className={`rounded-xl border ${r.color} bg-bg-card p-5 hover:bg-bg-card-hover transition-all duration-300 cursor-pointer gradient-outline`}>
                <p className={`${r.textColor} font-semibold text-sm mb-2`}>{r.role}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{r.desc}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeInStagger className="grid grid-cols-3 gap-4" stagger={0.1}>
          {[
            { label: "Reduce Admin Burden", color: "border-sky-400/40 bg-sky-400/5" },
            { label: "Accurate Inventory", color: "border-amber-400/40 bg-amber-400/5" },
            { label: "Faster Resolution", color: "border-green-400/40 bg-green-400/5" },
          ].map((goal) => (
            <FadeInItem key={goal.label}>
              <div className={`rounded-xl border ${goal.color} p-5 text-center gradient-outline`}>
                <p className="text-sm font-semibold text-text-primary">{goal.label}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

function ResearchProcess() {
  return (
    <section id="research" className="py-24 px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <p className="section-label mb-4">RESEARCH &amp; PROCESS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            Understanding the
            <br />
            <GradientText>Users &amp; Their Pain</GradientText>
          </h2>
          <p className="text-text-secondary mb-16 text-lg">
            User interviews, surveys, observational studies, and competitive analysis shaped every design decision.
          </p>
        </FadeIn>

        <FadeInStagger className="space-y-6 mb-20" stagger={0.12}>
          {[
            { stat: "70%", statDesc: "reported delays in asset check-ins and check-outs", num: "/01", title: "User Interviews", desc: "Conducted interviews with school district administrators, IT staff, and teachers. Administrators emphasized the need for real-time inventory updates to prevent asset loss. IT staff highlighted inefficiencies in current help desk systems. Teachers wanted a straightforward way to report and track issues.", textColor: "text-accent", borderColor: "border-l-accent" },
            { stat: "65%", statDesc: "experienced slow help desk response times", num: "/02", title: "Surveys", desc: "Distributed surveys to a broader audience within school districts to gather quantitative data. Over 70% of respondents reported delays in asset check-ins and check-outs, and 65% experienced slow help desk response times.", textColor: "text-amber-400", borderColor: "border-l-amber-400" },
            { stat: "3 sites", statDesc: "observed for pain points and inefficiencies", num: "/03", title: "Observational Studies", desc: "Observed current processes in action to identify pain points. Manual record-keeping was prone to errors, and the lack of a unified system for help desk management led to miscommunication across departments.", textColor: "text-green-400", borderColor: "border-l-green-400" },
          ].map((item) => (
            <FadeInItem key={item.num}>
              <div className={`rounded-xl border border-border-subtle border-l-2 ${item.borderColor} bg-bg-card p-8 hover:bg-bg-card-hover transition-all duration-300 cursor-pointer gradient-outline`}>
                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-8">
                  <div className="text-center pt-1">
                    <p className={`text-3xl font-bold ${item.textColor}`}>{item.stat}</p>
                    <p className="text-[11px] text-text-muted mt-2 leading-snug">{item.statDesc}</p>
                  </div>
                  <div>
                    <p className={`font-mono text-sm ${item.textColor} mb-1`}>{item.num}</p>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn>
          <div className="mb-20">
            <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-6">USER JOURNEY MAPS</p>
            <MouseSpotlight className="rounded-xl">
              <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-bg-card group gradient-outline">
                <Image src="/images/ihdm/process-journey-maps.png" alt="User Journey Maps - Pain point identification across three user roles" width={3840} height={2160} className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]" />
              </div>
            </MouseSpotlight>
            <p className="text-sm text-text-secondary mt-4 max-w-2xl">
              Mapping pain points across all three user roles revealed the same pattern: <strong className="font-semibold text-text-primary/70">every workflow bottleneck traced back to fragmented tools and manual handoffs</strong>.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-8">PERSONAS &amp; PAIN POINTS</p>
        </FadeIn>
        <FadeInStagger className="space-y-6 mb-16" stagger={0.1}>
          {[
            { name: "Yovan Chu", role: "School District Administrator", needs: "Efficient asset management, real-time inventory updates, and streamlined administrative tasks.", quote: "I need a system that keeps our inventory accurate and up-to-date without adding to our workload.", pain: "Time-consuming manual updates, errors in records, lack of real-time data." },
            { name: "Nicole Buchanan", role: "IT Staff", needs: "Quick issue resolution, better communication tools, and a unified help desk system.", quote: "Managing help desk tickets across different platforms is a nightmare. We need everything in one place.", pain: "Delays due to multiple systems, miscommunication, lack of a unified ticketing system." },
            { name: "Karla Anderson", role: "Teacher", needs: "Easy reporting of issues, quick resolution, and minimal disruption to teaching.", quote: "I just want to report a problem and know it will be fixed quickly without having to follow up constantly.", pain: "Slow response times, lack of updates, disruption to teaching." },
          ].map((p) => (
            <FadeInItem key={p.name}>
              <div className="rounded-xl border border-border-subtle bg-bg-card p-8 gradient-outline">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <p className="text-sm font-bold text-text-primary">{p.name}</p>
                    <p className="text-xs text-accent">{p.role}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-text-secondary mb-3"><strong className="font-semibold text-text-primary/70">Needs:</strong> {p.needs}</p>
                    <blockquote className="border-l-2 border-accent pl-4">
                      <p className="text-sm text-text-primary italic">&ldquo;{p.quote}&rdquo;</p>
                    </blockquote>
                    <p className="text-xs text-red-400 mt-3">Pain Points: {p.pain}</p>
                  </div>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn>
          <div className="rounded-xl border border-border-subtle bg-bg-card p-8 text-center gradient-outline">
            <p className="text-text-secondary leading-relaxed max-w-3xl mx-auto">
              All three user groups shared a common frustration: <strong className="font-semibold text-text-primary/70">fragmented tools and manual processes</strong> were eating into time that should have been spent on education. The solution needed to unify inventory and helpdesk into <strong className="font-semibold text-text-primary/70">one seamless mobile experience</strong>.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CompetitiveAudit() {
  return (
    <section className="py-24 px-8 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <p className="section-label mb-4">COMPETITIVE AUDIT</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            Where Competitors
            <br />
            <GradientText>Fell Short</GradientText>
          </h2>
          <p className="text-text-secondary mb-16 text-lg">
            We analyzed Incident IQ (direct competitor) and One to One Plus (indirect competitor) to identify gaps we could exploit.
          </p>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 gap-6 mb-12" stagger={0.1}>
          {[
            { name: "INCIDENT IQ", type: "Direct Competitor - K-12 IT Service Management", color: "border-amber-400/30", labelColor: "text-amber-400", weakness: "Complex multi-step setup requiring IT admin involvement. Navigation overwhelmed non-technical users - teachers reported needing training just to submit a ticket.", opportunity: "QR-code onboarding that eliminates setup friction entirely. Role-based navigation so each user sees only what they need." },
            { name: "ONE TO ONE PLUS", type: "Indirect Competitor - Device Management", color: "border-green-400/30", labelColor: "text-green-400", weakness: "Simple interface but no customization or role-based views. Basic reporting with no drill-down. Admins and teachers saw the same flat interface regardless of their needs.", opportunity: "Keep the simplicity but add customizable dashboards, personalized home screens, and 11 filterable data views tailored to each role." },
          ].map((c) => (
            <FadeInItem key={c.name}>
              <div className={`rounded-xl border ${c.color} bg-gradient-to-b from-bg-card to-[var(--gradient-deep-end)] p-8 h-full gradient-outline`}>
                <p className={`text-xs font-semibold tracking-widest ${c.labelColor} mb-3`}>{c.name}</p>
                <p className="text-text-muted text-xs mb-4">{c.type}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest text-red-400 uppercase mb-1">UX WEAKNESS</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{c.weakness}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest text-green-400 uppercase mb-1">OUR DESIGN OPPORTUNITY</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{c.opportunity}</p>
                  </div>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn>
          <div className="rounded-xl border border-border-subtle bg-bg-card p-8 text-center gradient-outline">
            <p className="text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Neither competitor offered a <strong className="font-semibold text-text-primary/70">unified inventory + helpdesk mobile experience</strong>. Incident IQ had depth but terrible onboarding. One to One Plus had simplicity but no power. We designed for both: <strong className="font-semibold text-text-primary/70">simple enough for a teacher, powerful enough for an IT admin</strong>.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function DesignProcess() {
  return (
    <section id="design" className="py-24 px-8 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <p className="section-label mb-4">STARTING THE DESIGN</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            From Research to
            <br />
            <GradientText>High-Fidelity</GradientText>
          </h2>
          <p className="text-text-secondary mb-16 text-lg max-w-3xl">
            We adopted the <strong className="font-semibold text-text-primary/70">Lunchbox Design System</strong> by Frontline to ensure consistency across all products. This decision gave us a cohesive, visually appealing foundation while maintaining the brand&apos;s tone.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mb-20">
            <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-6">INFORMATION ARCHITECTURE</p>
            <MouseSpotlight className="rounded-xl">
              <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-bg-card group gradient-outline">
                <Image src="/images/ihdm/process-ia.png" alt="Information Architecture - restructured navigation and content hierarchy" width={3840} height={6396} className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]" />
              </div>
            </MouseSpotlight>
            <p className="text-sm text-text-secondary mt-4 max-w-2xl">
              Restructured based on user pain points and research insights. The IA separates <strong className="font-semibold text-text-primary/70">inventory, helpdesk, and audit workflows</strong> while keeping a shared entry point that adapts to each user role.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-24">
          <SlideIn direction="left">
            <div className="grid md:grid-cols-[1fr_380px] gap-10 items-center">
              <MouseSpotlight className="rounded-xl">
                <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-bg-card group gradient-outline">
                  <Image src="/images/ihdm/screen-rfid.png" alt="RFID and Barcode Scanning screens" width={3840} height={2160} className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]" />
                </div>
              </MouseSpotlight>
              <div>
                <span className="text-5xl font-bold text-accent opacity-20 block mb-4">01</span>
                <h3 className="text-xl font-bold mb-3">RFID &amp; Barcode Scanning</h3>
                <p className="text-text-secondary leading-relaxed">Manually typing tag or serial numbers was time-consuming. We introduced <strong className="font-semibold text-text-primary/70">RFID, barcode, and camera scan</strong> features, significantly expediting tasks like auditing, collecting, and issuing assets, making the entire process more efficient.</p>
              </div>
            </div>
          </SlideIn>
          <SlideIn direction="right">
            <div className="grid md:grid-cols-[380px_1fr] gap-10 items-center">
              <div className="order-2 md:order-1">
                <span className="text-5xl font-bold text-amber-400 opacity-20 block mb-4">02</span>
                <h3 className="text-xl font-bold mb-3">Detailed Inventory Statistics</h3>
                <p className="text-text-secondary leading-relaxed">We included <strong className="font-semibold text-text-primary/70">eleven detailed charts and data tables</strong>, each equipped with a wide range of filter options. These comprehensive filters allow users to tailor the data to their specific needs, ensuring the most relevant information for their analysis.</p>
              </div>
              <MouseSpotlight className="rounded-xl order-1 md:order-2">
                <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-bg-card group gradient-outline">
                  <Image src="/images/ihdm/screen-statistics.png" alt="Detailed Inventory Statistics with Customizable Filters" width={3840} height={2160} className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]" />
                </div>
              </MouseSpotlight>
            </div>
          </SlideIn>
          <SlideIn direction="left">
            <div className="grid md:grid-cols-[1fr_380px] gap-10 items-center">
              <MouseSpotlight className="rounded-xl">
                <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-bg-card group gradient-outline">
                  <Image src="/images/ihdm/screen-ticket.png" alt="Evolution of Helpdesk Ticket" width={3840} height={2160} className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]" />
                </div>
              </MouseSpotlight>
              <div>
                <span className="text-5xl font-bold text-green-400 opacity-20 block mb-4">03</span>
                <h3 className="text-xl font-bold mb-3">Helpdesk Ticket Evolution</h3>
                <p className="text-text-secondary leading-relaxed">The helpdesk ticket was one of our key offerings. The first screen displayed a basic version with only essential details. After many iterations, the <strong className="font-semibold text-text-primary/70">latest version includes 10 comprehensive sections</strong>, providing a detailed overview and ensuring all relevant information is easily accessible.</p>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

function Iterations() {
  return (
    <section id="testing" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-4">ITERATIONS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            Testing &amp;
            <br />
            <GradientText>Refining</GradientText>
          </h2>
          <p className="text-text-secondary mb-16 text-lg max-w-3xl">
            User testing revealed key opportunities to personalize the experience and give users control over what they see first.
          </p>
        </FadeIn>

        <FadeIn>
          <MouseSpotlight className="rounded-xl">
            <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-bg-card group gradient-outline">
              <Image src="/images/ihdm/screen-iterations.png" alt="Iterations from User Testing - Before and After comparison" width={3840} height={2160} className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]" />
            </div>
          </MouseSpotlight>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 gap-6 mt-12" stagger={0.1}>
          {[
            { before: "Static \"Helpdesk Tickets\" heading with no filtering", after: "Filter option letting users view only tickets they want", beforeLabel: "BEFORE", afterLabel: "AFTER" },
            { before: "\"Audit\" on homepage was only relevant to some user groups", after: "Settings page to personalize homepage content", beforeLabel: "DISCOVERY", afterLabel: "SOLUTION" },
          ].map((row, i) => (
            <FadeInItem key={i}>
              <div className="rounded-xl border border-border-subtle bg-bg-card p-8 h-full hover:bg-bg-card-hover transition-all duration-300 cursor-pointer gradient-outline">
                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest text-red-400 uppercase mb-2">{row.beforeLabel}</p>
                    <p className="text-sm text-text-primary font-medium">{row.before}</p>
                  </div>
                  <span className="text-accent text-2xl hidden md:block">&rarr;</span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest text-green-400 uppercase mb-2">{row.afterLabel}</p>
                    <p className="text-sm text-accent font-semibold">{row.after}</p>
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
          <p className="section-label mb-4">POST-LAUNCH UX METRICS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            What <GradientText>Changed</GradientText>
          </h2>
          <p className="text-text-secondary mb-16 text-lg">
            Measurable improvements across every key metric after launch.
          </p>
        </FadeIn>
        <FadeInStagger className="grid md:grid-cols-3 gap-6" stagger={0.08}>
          {[
            { before: "2.6", after: "4.3", label: "User Satisfaction", desc: "Score out of 5", improvement: "+1.7", color: "text-accent" },
            { before: "59%", after: "86%", label: "Adoption Rate", desc: "User adoption", improvement: "+27%", color: "text-accent" },
            { before: "29 hrs", after: "11 hrs", label: "Ticket Resolution", desc: "Average helpdesk resolution time", improvement: "-18 hrs", color: "text-amber-400" },
            { before: "7.5 min", after: "4.7 min", label: "Time on Task", desc: "Average task duration", improvement: "-2.8 min", color: "text-amber-400" },
            { before: "81%", after: "96%", label: "Inventory Accuracy", desc: "Record accuracy", improvement: "+15%", color: "text-green-400" },
            { before: "77%", after: "89%", label: "Task Success Rate", desc: "Completion percentage", improvement: "+12%", color: "text-green-400" },
          ].map((m) => (
            <FadeInItem key={m.label}>
              <div className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-bg-card to-[var(--gradient-dark-end)] p-6 transition-all duration-300 cursor-default group relative overflow-hidden gradient-outline">
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-xs text-text-muted line-through decoration-red-400/40">{m.before}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-text-muted">
                    <path d="M3 8h10M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-xs text-text-primary font-semibold">{m.after}</span>
                </div>
                <p className={`${m.color} text-2xl font-bold mb-1`}>{m.improvement}</p>
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

function LessonsAndChallenges() {
  return (
    <section id="lessons" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-4">LESSONS &amp; CHALLENGES</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            What I Learned
            <br />
            <GradientText>&amp; What Was Hard</GradientText>
          </h2>
          <p className="text-text-secondary mb-16 text-lg">
            21 months of building taught me as much about navigating constraints as it did about design.
          </p>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 gap-6 mb-16" stagger={0.1}>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle border-l-2 border-l-accent bg-bg-card p-8 h-full gradient-outline">
              <p className="text-xs font-semibold tracking-widest text-accent mb-4">CROSS-PLATFORM PARITY</p>
              <p className="text-text-secondary leading-relaxed">The Android team built with Jetpack Compose while iOS used UIKit - two fundamentally different layout systems. Our <strong className="font-semibold text-text-primary/70">RFID scanning flow required a custom bottom-sheet with real-time tag count updates</strong>, which Compose handled natively but UIKit didn&apos;t. I proposed a simplified single-screen scan view that <strong className="font-semibold text-text-primary/70">preserved the core interaction</strong> (scan → confirm → associate) while being technically feasible on both platforms. The compromise cost us one animation but kept the experience consistent for users who switched between devices.</p>
            </div>
          </FadeInItem>
          <FadeInItem>
            <div className="rounded-xl border border-border-subtle border-l-2 border-l-amber-400 bg-bg-card p-8 h-full gradient-outline">
              <p className="text-xs font-semibold tracking-widest text-amber-400 mb-4">SCOPING UNDER BUDGET PRESSURE</p>
              <p className="text-text-secondary leading-relaxed">Phase 2 budget was cut mid-sprint. I audited every remaining feature against our research data and <strong className="font-semibold text-text-primary/70">cut offline sync and push notifications</strong> - two features users ranked lower than the core scanning and ticketing flows. The trade-off: we shipped on time with the highest-impact features intact. Phase 3 planning is now underway to bring back <strong className="font-semibold text-text-primary/70">the deferred features alongside new enhancements</strong> informed by post-launch usage data.</p>
            </div>
          </FadeInItem>
        </FadeInStagger>

        <FadeIn>
          <div className="rounded-2xl border border-border-subtle bg-gradient-to-br from-bg-card to-[var(--gradient-card-end)] p-10 text-center gradient-outline">
            <p className="text-xl md:text-2xl text-text-primary leading-relaxed max-w-3xl mx-auto mb-6">
              Shipped to the App Store and Google Play in July 2024 - from first wireframe to live product in 21 months.
            </p>
            <p className="text-text-secondary leading-relaxed max-w-3xl mx-auto">
              The app now handles <strong className="font-semibold text-text-primary/70">inventory tracking, RFID audits, and helpdesk operations</strong> for K-12 districts that previously juggled three separate tools. Phase 3 requirements gathering is underway, focused on <strong className="font-semibold text-text-primary/70">offline access and expanded analytics</strong>.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function FullStory() {
  return (
    <>
      <AboutTheCompany />
      <GlowLine className="max-w-7xl mx-auto" />
      <TheProblem />
      <GlowLine className="max-w-7xl mx-auto" />
      <ResearchProcess />
      <GlowLine className="max-w-7xl mx-auto" />
      <CompetitiveAudit />
      <GlowLine className="max-w-7xl mx-auto" />
      <DesignProcess />
      <GlowLine className="max-w-7xl mx-auto" />
      <Iterations />
      <GlowLine className="max-w-7xl mx-auto" />
      <Impact />
      <GlowLine className="max-w-7xl mx-auto" />
      <LessonsAndChallenges />
    </>
  );
}

/* ── FOOTER ── */

/* ── SECTION NAV & PAGE EXPORT ── */

const icon = (d: string) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const IHDM_SECTIONS = [
  { id: "top", label: "Top", icon: icon("M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4") },
  { id: "context", label: "Context", icon: icon("M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z") },
  { id: "research", label: "Research", icon: icon("M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z") },
  { id: "design", label: "Design", icon: icon("M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z") },
  { id: "testing", label: "Testing", icon: icon("M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4") },
  { id: "impact", label: "Impact", icon: icon("M13 7h8m0 0v8m0-8l-8 8-4-4-6 6") },
  { id: "lessons", label: "Lessons", icon: icon("M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253") },
];

export default function IHDMCaseStudy() {
  return (
    <>
      <CaseNav />
      <CaseStudyToggle
        storageKey="ihdm-reading-mode"
        quickRead={<QuickRead />}
        fullStory={<FullStory />}
      >
        <FullStoryOnly>
          <SectionNav sections={IHDM_SECTIONS} />
        </FullStoryOnly>
        <main id="main-content" className="flex-1 xl:pl-12 2xl:pl-0">
          <TheFrame />
          <HeroUI />
          <GlowLine className="max-w-7xl mx-auto" />
          <StickyReadingBar />
        </main>
      </CaseStudyToggle>
      <CaseFooter description="Inventory & Helpdesk Management · Mobile App · Frontline Education · 2024" />
    </>
  );
}
