import Image from 'next/image';

import { getItSoldHeading, statCards } from '@/modules/homepage/data/about';

export function GetItSoldSection() {
  return (
    <section className='bg-[#f6f3ef] py-20 lg:py-24'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='mt-3 font-serif text-3xl font-light uppercase tracking-[0.08em] text-[#222222] sm:text-4xl'>
            {getItSoldHeading}
          </h2>
        </div>

        <div className='mt-16 space-y-8 lg:space-y-12'>
          {statCards.map((card, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <article
                key={card.id}
                className='overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_24px_60px_-40px_rgba(0,0,0,0.3)]'
              >
                <div className='grid items-center gap-0 lg:grid-cols-2'>
                  <div className={imageFirst ? 'lg:order-1' : 'lg:order-2'}>
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      width={900}
                      height={600}
                      className='h-full w-full object-cover lg:min-h-[420px]'
                    />
                  </div>

                  <div
                    className={`px-6 py-10 text-center sm:px-10 lg:px-14 ${
                      imageFirst ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className='mx-auto max-w-xl'>
                      <h3 className='text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl'>
                        {card.heading}
                      </h3>

                      <div className='mt-5 space-y-4 text-base leading-7 text-stone-600'>
                        {card.body.map((paragraph, paragraphIndex) => (
                          <p key={paragraphIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
