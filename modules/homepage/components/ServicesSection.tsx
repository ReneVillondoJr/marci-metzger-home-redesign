import Image from 'next/image';

import { SectionHeading } from '@/components/layout/SectionHeading';
import {
  serviceCards,
  servicesHeading,
} from '@/modules/homepage/data/services';

export function ServicesSection() {
  return (
    <section className='bg-[#F5F4F0] py-16 md:py-38'>
      <div className='mx-auto max-w-6xl px-6'>
        <SectionHeading title={servicesHeading} showDivider />

        <div className='mt-12 grid gap-14 md:grid-cols-3 md:gap-8 lg:mt-14 lg:gap-12'>
          {serviceCards.map((card, index) => (
            <article
              key={card.id}
              className='group flex flex-col items-center text-center'
            >
              <span className='mb-4 text-xs font-medium tracking-[0.25em] text-[#252522]/40'>
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className='relative h-52 w-52 overflow-hidden rounded-full border border-[#252522]/10 bg-white p-1 transition-all duration-500 group-hover:border-[#252522]/30 sm:h-56 sm:w-56'>
                <div className='relative h-full w-full overflow-hidden rounded-full'>
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes='224px'
                    className='object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                </div>
              </div>

              <div className='mt-6 max-w-sm'>
                <h3 className='font-heading text-lg font-semibold tracking-tight text-[#252522] md:text-xl'>
                  {card.heading}
                </h3>

                <div className='mx-auto mt-3 h-px w-8 bg-[#252522]/25 transition-all duration-300 group-hover:w-12' />

                {card.subheading && (
                  <p className='mt-3 text-sm font-medium text-[#252522]/60'>
                    {card.subheading}
                  </p>
                )}

                <p className='mt-4 text-sm leading-7 text-[#252522]/65'>
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
