import Link from "next/link";
import { FadeIn } from "./animations";
import { Aurora, PulseGlow } from "./hero-effects";

export function CaseFooter({ description }: { description: string }) {
  return (
    <footer className="py-20 px-8 border-t border-white/[0.08] relative overflow-hidden">
      <Aurora />
      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-text-muted">{description}</p>
          </div>
          <div className="flex justify-center items-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.08] text-accent hover:bg-accent/10 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all projects
            </Link>
            <PulseGlow>
              <a
                href="mailto:ujjwalvarsney@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-bg-primary font-semibold hover:bg-accent-bright hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Get in Touch
              </a>
            </PulseGlow>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
