// hooks/use-gallery-carousel.ts
"use client";

import { useCallback, useState } from "react";

export function useGalleryCarousel(itemCount: number) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    if (itemCount === 0) return;
    setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  const goToNext = useCallback(() => {
    if (itemCount === 0) return;
    setActiveIndex((prev) => (prev + 1) % itemCount);
  }, [itemCount]);

  const goToIndex = useCallback(
    (index: number) => {
      if (index < 0 || index >= itemCount) return;
      setActiveIndex(index);
    },
    [itemCount],
  );

  return { activeIndex, goToPrevious, goToNext, goToIndex };
}
