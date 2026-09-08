'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { galleryHeading, galleryImages } from '@/modules/homepage/data/gallery';

export function PhotoGallerySection() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active slide
  useEffect(() => {
    if (!api) return;

    const updateSelected = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    updateSelected();

    api.on('select', updateSelected);

    return () => {
      api.off('select', updateSelected);
    };
  }, [api]);

  // Slow automatic slideshow
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [api]);

  if (galleryImages.length === 0) {
    return null;
  }

  return (
    <section className='bg-[#111111] py-20 text-white md:py-24'>
      {' '}
      <div className='mx-auto max-w-7xl px-5 sm:px-6 lg:px-8'>
        {/* Section Heading */}
        <div className='mb-10 text-center md:mb-12'>
          <p className='mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white/45'>
            Gallery
          </p>

          <h2 className='font-heading text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl'>
            {galleryHeading}
          </h2>

          <div className='mx-auto mt-5 h-px w-14 bg-white/30' />
        </div>

        {/* Main Gallery */}
        <div className='group relative'>
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
              duration: 60,
            }}
            className='w-full'
          >
            <CarouselContent>
              {galleryImages.map((item) => (
                <CarouselItem key={item.id} className='basis-full'>
                  <div className='relative aspect-[16/8.5] overflow-hidden bg-black sm:aspect-[16/8] md:aspect-[16/7.5]'>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes='(max-width: 768px) 100vw, 1200px'
                      className='object-cover transition-transform duration-[7000ms] ease-out group-hover:scale-[1.015]'
                      priority
                    />

                    {/* Bottom gradient */}
                    <div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent' />

                    {/* Image number */}
                    <div className='absolute bottom-4 left-4 sm:bottom-6 sm:left-6'>
                      <span className='text-[10px] font-medium uppercase tracking-[0.2em] text-white/70'>
                        {String(activeIndex + 1).padStart(2, '0')} /{' '}
                        {String(galleryImages.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Previous */}
            <CarouselPrevious
              className='
            left-3
            h-9
            w-9
            border-white/20
            bg-black/35
            text-white
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-white/50
            hover:bg-black/60
            hover:text-white
            group-hover:opacity-100
            sm:left-5
            sm:h-11
            sm:w-11
          '
              aria-label='Previous photo'
            >
              <ChevronLeft className='size-4 sm:size-5' />
            </CarouselPrevious>

            {/* Next */}
            <CarouselNext
              className='
            right-3
            h-9
            w-9
            border-white/20
            bg-black/35
            text-white
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-white/50
            hover:bg-black/60
            hover:text-white
            group-hover:opacity-100
            sm:right-5
            sm:h-11
            sm:w-11
          '
              aria-label='Next photo'
            >
              <ChevronRight className='size-4 sm:size-5' />
            </CarouselNext>
          </Carousel>
        </div>

        {/* Thumbnails */}
        <div className='mt-5'>
          <div
            className='
          flex
          gap-2.5
          overflow-x-auto
          pb-2
          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-white/15
        '
          >
            {galleryImages.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.id}
                  type='button'
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`View photo ${index + 1}`}
                  aria-current={isActive}
                  className={`
                group
                relative
                h-14
                w-20
                shrink-0
                overflow-hidden
                rounded-sm
                border
                bg-black
                transition-all
                duration-500
                sm:h-16
                sm:w-24
                md:h-[68px]
                md:w-28
                ${
                  isActive ?
                    'border-white opacity-100'
                  : 'border-white/10 opacity-45 hover:border-white/40 hover:opacity-80'
                }
              `}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes='112px'
                    className='
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                '
                  />

                  {/* Thumbnail overlay */}
                  <span
                    className={`
                  absolute inset-0 transition-colors duration-500
                  ${
                    isActive ? 'bg-transparent' : (
                      'bg-black/20 group-hover:bg-transparent'
                    )
                  }
                `}
                  />

                  {/* Active indicator */}
                  {isActive && (
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-white' />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
