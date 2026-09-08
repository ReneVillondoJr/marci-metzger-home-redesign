import Image from 'next/image';

import { getItSoldHeading, statCards } from '@/modules/homepage/data/about';

export function GetItSoldSection() {
  return (
    <section className='bg-muted/40 py-20 lg:py-24'>
      <div className='mx-auto max-w-6xl px-6'>
        {/* Section Heading */}
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-light tracking-tight sm:text-4xl'>
            {getItSoldHeading}
          </h2>
        </div>

        {/* Alternating Content */}
        <div className='mt-16 space-y-20 lg:mt-24 lg:space-y-28'>
          {statCards.map((card, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <div
                key={card.id}
                className='grid items-center gap-10 lg:grid-cols-2 lg:gap-16'
              >
                {/* Image */}
                <div className={imageFirst ? 'lg:order-1' : 'lg:order-2'}>
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    width={900}
                    height={600}
                    className='aspect-[4/3] w-full object-cover'
                  />
                </div>

                {/* Text */}
                <div
                  className={`text-center ${
                    imageFirst ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className='mx-auto max-w-xl'>
                    <h3 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
                      {card.heading}
                    </h3>

                    <div className='mt-5 space-y-4 text-base leading-7 text-muted-foreground'>
                      {card.body.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
