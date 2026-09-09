import { SectionHeading } from '@/components/layout/SectionHeading';

export function FindYourHome() {
  return (
    <section className='bg-black px-6 py-16 text-center text-white md:py-20'>
      <div className='mx-auto max-w-6xl'>
        <SectionHeading
          title="Need A Real Estate Agent? Let's Find Your Home!"
          tone='dark'
        />

        <div className='mx-auto mt-12 max-w-2xl'>
          <p className='text-base leading-relaxed text-gray-300 md:text-lg'>
            Click The Button Below for Available Real Estate in Pahrump & Las
            Vegas
          </p>

          <a
            href='https://www.zillow.com/profile/marcimetzger'
            target='_blank'
            rel='noopener noreferrer'
            className='
              mt-8
              inline-block
              border-b
              border-white/50
              pb-1
              text-sm
              font-medium
              uppercase
              tracking-[0.15em]
              text-white
              transition-all
              duration-300
              hover:border-white
              hover:text-gray-300
            '
          >
            Current Listings
          </a>
        </div>
      </div>
    </section>
  );
}
