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

  // Automatically change image every 5 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [api]);

  if (galleryImages.length === 0) {
    return null;
  }

  return (
    <section className='bg-black py-16 text-white'>
      <div className='mx-auto max-w-6xl px-6'>
        {/* Heading */}
        <h2 className='text-center font-heading text-2xl font-semibold tracking-tight md:text-3xl'>
          {galleryHeading}
        </h2>

        {/* Main Image */}
        <div className='relative mt-8'>
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className='w-full'
          >
            <CarouselContent>
              {galleryImages.map((item) => (
                <CarouselItem key={item.id} className='basis-full'>
                  <div className='relative overflow-hidden'>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={1200}
                      height={650}
                      className='aspect-[2/1] w-full object-cover'
                      priority
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Previous */}
            <CarouselPrevious
              className='left-4 h-10 w-10 border-white/30 bg-black/70 text-white hover:bg-black hover:text-white'
              aria-label='Previous photo'
            >
              <ChevronLeft className='size-5' />
            </CarouselPrevious>

            {/* Next */}
            <CarouselNext
              className='right-4 h-10 w-10 border-white/30 bg-black/70 text-white hover:bg-black hover:text-white'
              aria-label='Next photo'
            >
              <ChevronRight className='size-5' />
            </CarouselNext>
          </Carousel>
        </div>

        {/* Smaller Thumbnails */}
        <div className='mt-4 flex'>
          <div className='flex max-w-full gap-2 overflow-x-auto pb-2'>
            {galleryImages.map((item, index) => (
              <button
                key={item.id}
                type='button'
                onClick={() => api?.scrollTo(index)}
                aria-label={`View photo ${index + 1}`}
                aria-current={activeIndex === index}
                className={`group relative h-16 w-20 shrink-0 overflow-hidden rounded-md border transition-all duration-300 sm:h-18 sm:w-24 md:h-20 md:w-28 ${
                  activeIndex === index ?
                    'border-white opacity-100'
                  : 'border-white/20 opacity-60 hover:border-white/60 hover:opacity-100'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes='112px'
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                />

                {/* Active thumbnail */}
                {activeIndex === index && (
                  <span className='absolute inset-0 border-2 border-white' />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
