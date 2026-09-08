// hooks/use-mobile-nav.ts
"use client";

import { useEffect, useState } from "react";

export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll while the drawer is open, matching the original
  // site's "disable-scroll" behavior.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((prev) => !prev),
  };
}
