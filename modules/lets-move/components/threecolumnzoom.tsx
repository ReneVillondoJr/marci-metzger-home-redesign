'use client';

import Image from 'next/image';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

import { galleryCards } from '@/modules/lets-move/data/three-column-gallery';

import { useThreeColumnGallery } from '@/modules/lets-move/hooks/use-three-column-gallery';

export function ThreeColumnGallery() {
  const { selectedImage, openImage, handleOpenChange } =
    useThreeColumnGallery();

  return (
    <>
      <section className='w-full bg-white py-16 md:py-20'>
        <div className='w-full'>
          <div className='grid grid-cols-1 gap-0 md:grid-cols-3'>
            {galleryCards.map((card) => (
              <article key={card.id} className='group w-full overflow-hidden'>
                <button
                  type='button'
                  onClick={() => openImage(card)}
                  aria-label={`View image ${card.id}`}
                  className='
relative
block
w-full
cursor-zoom-in
overflow-hidden
focus:outline-none
focus-visible:ring-2
focus-visible:ring-[#222222]
focus-visible:ring-offset-2
'
                >
                  <div
                    className='
                   relative
                   h-[280px]
                   w-full
                   overflow-hidden
                   sm:h-[200px]
                   md:h-[250px]
                   lg:h-[300px]
                 '
                  >
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes='(max-width: 768px) 100vw, 33.333vw'
                      className='
                     object-cover
                     transition-transform
                     duration-1000
                     ease-[cubic-bezier(0.22,1,0.36,1)]
                     group-hover:scale-110
                   '
                      priority
                    />
                    <span
                      className='
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/0
                    transition-colors
                    duration-700
                    group-hover:bg-black/10
                  '
                    />
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Dialog open={selectedImage !== null} onOpenChange={handleOpenChange}>
        <DialogContent
          showCloseButton
          className='
        !w-[95vw]
        !max-w-[1400px]
        h-[90vh]
        border-0
        rounded-none
        bg-black
        p-0
        shadow-2xl
        sm:!max-w-[1400px]
      '
        >
          <DialogTitle className='sr-only'>
            {selectedImage?.alt ?? 'Image preview'}
          </DialogTitle>

          {selectedImage && (
            <div className='relative h-full w-full'>
              <Image
                src={selectedImage.image}
                alt={selectedImage.alt}
                fill
                sizes='95vw'
                className='object-contain'
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
