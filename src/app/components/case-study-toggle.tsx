"use client";

import {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  type ReactNode,
} from "react";

type Mode = "quick" | "full";

const ModeContext = createContext<{
  mode: Mode;
  setMode: (m: Mode) => void;
  mounted: boolean;
}>({ mode: "quick", setMode: () => {}, mounted: false });

export function useReadingMode() {
  return useContext(ModeContext);
}

function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Private browsing or storage full
  }
}

export function CaseStudyToggle({
  quickRead,
  fullStory,
  storageKey = "case-study-mode",
  children,
}: {
  quickRead: ReactNode;
  fullStory: ReactNode;
  storageKey?: string;
  children?: ReactNode;
}) {
  const [mode, setModeState] = useState<Mode>("quick");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = safeGetItem(storageKey) as Mode | null;
    if (saved === "quick" || saved === "full") setModeState(saved);
    setMounted(true);
  }, [storageKey]);

  const setMode = (next: Mode) => {
    setModeState(next);
    safeSetItem(storageKey, next);
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, mounted }}>
      {children}
      <div
        key={mode}
        className="animate-fade-in"
        style={{ animationDuration: "400ms" }}
      >
        {mode === "quick" ? quickRead : fullStory}
      </div>
    </ModeContext.Provider>
  );
}

function TogglePill({
  sticky = false,
  tooltipPosition = "bottom",
}: {
  sticky?: boolean;
  tooltipPosition?: "bottom" | "top";
}) {
  const { mode, setMode } = useContext(ModeContext);
  const [showTooltip, setShowTooltip] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(null);

  const handleEnter = () => {
    hoverTimer.current = setTimeout(() => setShowTooltip(true), 600);
  };
  const handleLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setShowTooltip(false);
  };

  const tooltipClasses =
    tooltipPosition === "bottom"
      ? "top-full mt-3"
      : "bottom-full mb-3";

  return (
    <div
      className="relative inline-flex flex-col items-center"
      role="tablist"
      aria-label="Reading mode"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className={`rounded-full border border-white/[0.12] backdrop-blur-xl p-1 shadow-[0_0_20px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.08)] gradient-outline ${
          sticky ? "bg-bg-primary/70" : "bg-white/[0.04]"
        }`}
      >
        <div className="flex gap-0.5">
          <button
            role="tab"
            aria-selected={mode === "quick"}
            onClick={() => setMode("quick")}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              mode === "quick"
                ? "bg-white/[0.14] text-text-primary shadow-[0_0_12px_rgba(255,255,255,0.08)]"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            Quick Read
          </button>
          <button
            role="tab"
            aria-selected={mode === "full"}
            onClick={() => setMode("full")}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              mode === "full"
                ? "bg-white/[0.14] text-text-primary shadow-[0_0_12px_rgba(255,255,255,0.08)]"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            Full Story
          </button>
        </div>
      </div>

      <div
        className={`absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-300 pointer-events-none ${tooltipClasses} ${
          showTooltip ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        role="tooltip"
      >
        <div className="relative rounded-lg bg-white/[0.10] backdrop-blur-xl border border-white/[0.20] px-3.5 py-2 shadow-[0_0_12px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.4)]">
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-3 h-1.5 ${
              tooltipPosition === "bottom" ? "-top-1.5" : "-bottom-1.5"
            }`}
            style={{
              clipPath:
                tooltipPosition === "bottom"
                  ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                  : "polygon(0% 0%, 100% 0%, 50% 100%)",
              background: "rgba(255,255,255,0.18)",
            }}
          />
          <p className="text-xs text-text-primary leading-relaxed text-center whitespace-nowrap">
            Pick your pace
          </p>
        </div>
      </div>
    </div>
  );
}

export function ReadingModeSwitch() {
  return <TogglePill tooltipPosition="bottom" />;
}

export function StickyReadingBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-14 left-0 right-0 z-40 flex justify-center py-2.5 transition-all duration-500 ${
        scrolled
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      aria-hidden={!scrolled}
      style={{
        background:
          "linear-gradient(to bottom, var(--bg-primary, rgba(3,3,3,0.85)) 0%, rgba(3,3,3,0.6) 70%, transparent 100%)",
      }}
    >
      <TogglePill sticky tooltipPosition="bottom" />
    </div>
  );
}

export function FullStoryOnly({ children }: { children: ReactNode }) {
  const { mode } = useContext(ModeContext);
  if (mode === "quick") return null;
  return <>{children}</>;
}
