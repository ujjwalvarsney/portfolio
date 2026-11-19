"use client";

import type { ReactNode } from "react";

// Anchor link inside the CSS-only mobile menu that closes the menu on click.
export function MobileMenuLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        const toggle = document.getElementById("mobile-menu") as HTMLInputElement | null;
        if (toggle) toggle.checked = false;
      }}
    >
      {children}
    </a>
  );
}
