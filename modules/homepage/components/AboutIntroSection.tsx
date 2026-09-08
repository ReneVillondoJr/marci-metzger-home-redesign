import Image from 'next/image';
import Link from 'next/link';

import { agentIntro } from '@/modules/homepage/data/about';

export function AboutIntroSection() {
  return (
    <section className='bg-black px-6 py-16 text-center text-white'>
      <div className='mx-auto max-w-6xl'>
        <h2 className='text-4xl font-semibold tracking-tight'>
          {agentIntro.sectionHeading}
        </h2>

        <div className='mx-auto mt-20 flex max-w-xs flex-col items-center gap-6'>
          <Link href='/about-us' className='block overflow-hidden rounded-full'>
            <Image
              src={agentIntro.photo}
              alt={agentIntro.photoAlt}
              width={220}
              height={220}
              className='aspect-square w-full rounded-full object-cover'
            />
          </Link>

          <h2 className='text-xl font-medium'>{agentIntro.headline}</h2>

          <a
            href={agentIntro.phoneHref}
            className='text-xl text-gray-300 underline-offset-4 hover:text-white hover:underline'
          >
            {agentIntro.phoneLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
