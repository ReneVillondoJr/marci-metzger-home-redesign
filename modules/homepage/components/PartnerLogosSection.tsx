import Image from 'next/image';

import { partnerLogos } from '@/modules/homepage/data/gallery';

export function PartnerLogosSection() {
  return (
    <section className='border-y bg-background py-25'>
      <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 sm:justify-between'>
        {partnerLogos.map((logo) => (
          <Image
            key={logo.id}
            src={logo.image}
            alt={logo.alt}
            width={100}
            height={100}
            className='h-16 w-auto object-contain grayscale transition-all hover:grayscale-0'
          />
        ))}
      </div>
    </section>
  );
}
