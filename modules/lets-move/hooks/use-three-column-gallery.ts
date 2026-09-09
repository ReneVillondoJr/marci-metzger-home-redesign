'use client';

import { useState } from 'react';

import type { GalleryCard } from '@/modules/lets-move/types/three-column-gallery';

export function useThreeColumnGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryCard | null>(null);

  function openImage(image: GalleryCard) {
    setSelectedImage(image);
  }

  function closeImage() {
    setSelectedImage(null);
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      closeImage();
    }
  }

  return {
    selectedImage,
    openImage,
    closeImage,
    handleOpenChange,
  };
}
