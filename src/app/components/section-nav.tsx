"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from "react";

type Section = {
  id: string;
  label: string;
  icon: ReactNode;
};

export function SectionNav({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [visible, setVisible] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);
  const [manualCollapse, setManualCollapse] = useState(false);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  const activeIndex = sections.findIndex((s) => s.id === activeId);
  const expanded = (isWide && !manualCollapse) || hoverOpen;

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1536px)");
    const update = () => setIsWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          const sorted = visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(sorted[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoverOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverTimeout.current = setTimeout(() => setHoverOpen(false), 400);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 w-[320px] z-30 pointer-events-none hidden xl:block transition-opacity duration-500 ${
          !isWide && hoverOpen && visible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.15) 80%, transparent 100%)",
        }}
      />

      <nav
        aria-label="Section navigation"
        className={`fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden xl:block transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          visible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-6 pointer-events-none"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-500 ${
          expanded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div
          className="h-[120px] w-[28px] overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          }}
        >
          <div
            className="flex flex-col items-center gap-4 transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{
              transform: `translateY(${60 - activeIndex * 36 - 10}px)`,
            }}
          >
            {sections.map(({ id, icon, label }, index) => {
              const distance = Math.abs(index - activeIndex);
              const colorClass = distance === 0
                ? "text-accent scale-110"
                : distance === 1
                  ? "text-text-secondary/60"
                  : "text-text-secondary/15";
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`shrink-0 w-[20px] h-[20px] flex items-center justify-center transition-all duration-500 cursor-pointer [&>svg]:w-[16px] [&>svg]:h-[16px] ${colorClass}`}
                  aria-label={`Jump to ${label}`}
                  aria-current={id === activeId ? "true" : undefined}
                >
                  {icon}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`ml-2 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          expanded
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 -translate-x-3 pointer-events-none"
        }`}
      >
        <div ref={containerRef} className="relative flex flex-col gap-1">
          {sections.map(({ id, label, icon }, index) => {
            const isActive = id === activeId;

            return (
              <button
                key={id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                onClick={() => scrollTo(id)}
                className="relative flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-white/[0.06] group"
                aria-label={`Jump to ${label}`}
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`shrink-0 w-5 h-5 flex items-center justify-center transition-all duration-400 [&>svg]:w-4 [&>svg]:h-4 ${
                    isActive
                      ? "text-accent"
                      : "text-text-secondary/50 group-hover:text-text-primary"
                  }`}
                >
                  {icon}
                </span>
                <span
                  className={`text-[13px] leading-tight tracking-[-0.01em] whitespace-nowrap transition-all duration-400 ${
                    isActive
                      ? "text-text-primary font-semibold"
                      : "text-text-secondary/70 group-hover:text-text-primary font-normal"
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}

          {isWide && (
            <>
              <div className="h-px bg-white/20 mx-1 mt-3 mb-1" />
              <button
                onClick={() => setManualCollapse((v) => !v)}
                className="flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-white/[0.06] text-text-secondary/60 hover:text-text-primary"
                aria-label={manualCollapse ? "Expand navigation" : "Collapse navigation"}
              >
                <span className="shrink-0 w-5 h-5 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 transition-transform duration-300 ${manualCollapse ? "rotate-180" : ""}`} aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </span>
                <span className="text-[13px] leading-tight tracking-[-0.01em] whitespace-nowrap">
                  {manualCollapse ? "Expand" : "Collapse"}
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
    </>
  );
}
