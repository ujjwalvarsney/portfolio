import Link from "next/link";

export function CaseNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg-primary/60 border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.3)]" aria-label="Case study navigation">
      <div className="max-w-7xl mx-auto px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center gap-2 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 [[open]>&]:rotate-180" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div className="absolute top-full right-0 mt-3 w-44 rounded-xl border border-white/[0.08] bg-bg-card/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-1.5 z-50">
            <a href="/resume/Ujjwal_Varsney_SeniorUXDesigner.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/[0.06] transition-all duration-200 cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Preview
            </a>
            <a href="/resume/Ujjwal_Varsney_SeniorUXDesigner.pdf" download className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:text-accent hover:bg-accent/[0.06] transition-all duration-200 cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
