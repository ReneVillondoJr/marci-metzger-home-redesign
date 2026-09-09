'use client';

import Image from 'next/image';

import { SectionHeading } from '@/components/layout/SectionHeading';

export function About() {
  return (
    <section className='w-full text-[#222222]'>
      <div className='w-full bg-black px-6 py-20 text-center sm:px-10 md:py-24 lg:px-16 lg:py-28'>
        <SectionHeading title='ABOUT' tone='dark' showDivider />

        <div className='mt-12 flex w-full justify-center md:mt-14'>
          <div className='relative h-70 w-full max-w-70 overflow-hidden sm:h-85 sm:max-w-85 md:h-75 md:max-w-75'>
            <Image
              src='/about/2x2marci-metzger.webp'
              alt='Marci J Metzger, Pahrump REALTOR'
              fill
              sizes='(max-width: 600px) 280px, (max-width: 768px) 300px, 400px'
              className='
                object-cover
                object-center
                transition-transform
                duration-1000
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:scale-[1.03]
              '
              priority
            />
          </div>
        </div>

        <div className='mx-auto mt-8 max-w-3xl'>
          <p className='text-2xl font-medium uppercase  text-white'>
            Marci J Metzger
          </p>

          <p className='mt-3 font-serif text-1xl font-light  leading-tight tracking-[0.08em] text-white '>
            REALTOR for Nearly Three Decades
          </p>
        </div>
      </div>

      <div className='mx-auto '>
        <div className='grid lg:grid-cols-2'>
          <div className='flex flex-col justify-center px-6 py-8 sm:px-10 md:px-14 lg:px-45'>
            <div className='mt-6 h-px w-12 bg-[#222222]' />

            <p className='text-[10px] font-medium uppercase tracking-[0.28em] text-[#77716B]'>
              Marci J Metzger
            </p>

            <p className='mt-7 max-w-xl text-[15px] leading-8  sm:text-base'>
              Marci was a REALTOR, then licensed Broker, in Washington State.
              Now, she is enjoying the sunshine, and helping clients in Southern
              Nevada. Having helped buyers and sellers in many markets since
              1995, she is a wealth of knowledge.
            </p>

            <div className='mt-10 border-l border-[#D8D5D0] pl-6'>
              <p className='text-[10px] font-medium uppercase tracking-[0.24em] text-[#77716B]'>
                In Her Words
              </p>

              <blockquote className='mt-4 max-w-xl font-serif text-lg font-light italic leading-8 text-[#44403C] sm:text-xl'>
                &quot;I love that small-town feeling that our community offers.
                Spectacular golf courses, parks, pool, and easy access to Las
                Vegas make Pahrump a great place to call home. Working or
                retired, fast-paced or looking to relax... there&apos;s a place
                for you here!
                <br />
                <br />I enjoy living in the Mountain Falls community and will
                strive to find you a home that will suit you just as this
                community does me.&quot;
              </blockquote>
            </div>
          </div>

          <div className='relative min-h-125 overflow-hidden lg:min-h-130'>
            <Image
              src='/2x2marci-metzger.webp'
              alt='Marci J Metzger, Pahrump REALTOR'
              fill
              sizes='(max-width: 1024px) 100vw, 50vw'
              className='
                object-cover
                object-center
                transition-transform
                duration-1000
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:scale-[1.02]
              '
              priority
            />

            <div className='pointer-events-none absolute inset-0 bg-black/3' />
          </div>
        </div>
      </div>
    </section>
  );
}
