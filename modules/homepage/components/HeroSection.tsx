'use client';

import { Phone } from 'lucide-react';

import { heroData } from '@/modules/homepage/data/hero';

export function HeroSection() {
  return (
    <section className='relative flex min-h-[90svh] items-end justify-center overflow-hidden text-center text-white'>
      {/* Full Hero Image */}
      <div
        aria-hidden
        className='absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed'
        style={{
          backgroundImage: `url(${heroData.backgroundImage})`,
        }}
      />

      {/* Overlay */}
      <div aria-hidden className='absolute inset-0 bg-black/35' />

      {/* Content */}
      <div className='relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 pb-16 sm:pb-20 lg:pb-24'>
        <p className='text-lg font-medium uppercase tracking-[0.2em] text-white/90'>
          {heroData.eyebrow}
        </p>

        <h1 className='text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl'>
          {heroData.heading}
        </h1>

        <a
          href={heroData.ctaHref}
          className='inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90'
        >
          <Phone className='size-4' />
          {heroData.ctaLabel}
        </a>
      </div>
    </section>
  );
}
