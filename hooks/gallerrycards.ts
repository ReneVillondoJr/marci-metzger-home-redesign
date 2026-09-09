'use client';

import { useState } from 'react';

import type { GalleryCard } from '@/components/layout/threecolumngallery';

export function useThreeColumnGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryCard | null>(null);

  const openImage = (image: GalleryCard) => {
    setSelectedImage(image);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedImage(null);
    }
  };

  return {
    selectedImage,
    openImage,
    handleOpenChange,
  };
}
