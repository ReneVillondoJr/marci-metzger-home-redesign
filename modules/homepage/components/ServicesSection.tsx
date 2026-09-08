import Image from 'next/image';

import {
  serviceCards,
  servicesHeading,
} from '@/modules/homepage/data/services';

export function ServicesSection() {
  return (
    <section className='bg-muted/40 py-16'>
      <div className='mx-auto max-w-6xl px-6'>
        <h2 className='text-center text-2xl font-semibold tracking-tight'>
          {servicesHeading}
        </h2>

        <div className='mt-10 grid gap-10 md:grid-cols-3'>
          {serviceCards.map((card) => (
            <article
              key={card.id}
              className='flex flex-col items-center gap-4 text-center'
            >
              {/* Circular Image */}
              <div className='relative h-55 w-55 overflow-hidden rounded-full'>
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes='220px'
                  className='object-cover'
                />
              </div>

              {/* Title */}
              <div>
                <h3 className='text-base font-semibold'>{card.heading}</h3>

                <p className='text-sm text-muted-foreground'>
                  {card.subheading}
                </p>
              </div>

              {/* Description */}
              <p className='text-sm leading-relaxed text-muted-foreground'>
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
