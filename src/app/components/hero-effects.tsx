"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div className="aurora-blob-1" />
      <div className="aurora-blob-2" />
      <div className="aurora-blob-3" />
    </div>
  );
}

interface BlurRevealProps {
  text: string;
  delay?: number;
  className?: string;
  startDelay?: number;
  gradient?: boolean;
}

const gradientStyle: React.CSSProperties = {
  background: "linear-gradient(180deg, #A6A6A6 0%, #FAFAFA 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  padding: "0 0.15em",
  margin: "0 -0.15em",
};

export function BlurReveal({
  text,
  delay = 80,
  className = "",
  startDelay = 0,
  gradient = false,
}: BlurRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
          animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: startDelay + i * (delay / 1000),
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="mr-[0.25em] inline-block"
        >
          {gradient ? (
            <span style={gradientStyle}>{word}</span>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </span>
  );
}

export function TextShimmer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`text-shimmer ${className}`}>{children}</span>;
}

export function GradientText({
  children,
  className = "",
  italic = false,
}: {
  children: ReactNode;
  className?: string;
  italic?: boolean;
}) {
  return (
    <span
      className={className}
      style={{
        ...gradientStyle,
        ...(italic ? { fontStyle: "italic" } : {}),
      }}
    >
      {children}
    </span>
  );
}

export function MouseSpotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const rafRef = useRef<number>(0);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const clientX = e.clientX;
    const clientY = e.clientY;
    rafRef.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setPosition({ x: clientX - rect.left, y: clientY - rect.top });
    });
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

export function Particles({ count = 20 }: { count?: number }) {
  const particles: Array<{ id: number; size: number; x: number; y: number; duration: number; delay: number }> = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 1 + (i % 3),
    x: (i * 37 + 13) % 100,
    y: (i * 53 + 7) % 100,
    duration: 5 + (i % 8) * 2,
    delay: (i % 5) * 1.5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-accent/30 animate-float-particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
        className="text-text-muted"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </motion.div>
  );
}

export function ElegantShape({
  className = "",
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border border-white/[0.06] shadow-[0_8px_32px_0_rgba(255,255,255,0.04)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)]`}
        />
      </motion.div>
    </motion.div>
  );
}

export function PulseGlow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative inline-flex group ${className}`}>
      <div className="absolute -inset-1 rounded-full bg-white/[0.15] blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function FloatingDotGrid({ className = "" }: { className?: string }) {
  const dots = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: (i % 10) * 10 + ((Math.floor(i / 10) % 2) * 5),
    y: Math.floor(i / 10) * 12.5,
    size: i % 3 === 0 ? 3 : 2,
    opacity: 0.08 + (i % 5) * 0.04,
  }));

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{ y: [0, -12, 0], rotate: [0, 0.5, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        {dots.map((dot) => (
          <circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r={dot.size / 2}
            fill="white"
            opacity={dot.opacity}
          />
        ))}
      </svg>
    </motion.div>
  );
}

export function ScrollScale({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.6, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
