import type { IconType } from 'react-icons';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYelp,
} from 'react-icons/fa6';

import { socialLinks } from '@/modules/homepage/data/social';
import type { SocialPlatform } from '@/modules/homepage/types/home';

const iconByPlatform: Record<SocialPlatform, IconType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  yelp: FaYelp,
};

interface SocialLinksSectionProps {
  variant?: 'section' | 'inline';
}

export function SocialLinksSection({
  variant = 'section',
}: SocialLinksSectionProps) {
  const content = (
    <div className='flex items-center justify-center gap-15 '>
      {socialLinks.map((link) => {
        const Icon = iconByPlatform[link.platform];

        return (
          <a
            key={link.platform}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={link.label}
            className='text-white/80 transition-all duration-300 hover:scale-110 hover:text-white'
          >
            <Icon className='size-8' aria-hidden='true' />
          </a>
        );
      })}
    </div>
  );

  if (variant === 'inline') {
    return content;
  }

  return (
    <section className='bg-black py-25 text-white'>
      <div className='mx-auto max-w-6xl px-6'>{content}</div>
    </section>
  );
}
