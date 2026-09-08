import { footerData } from '@/modules/homepage/data/contact';

import { FooterSocialLinks } from './FooterSocialLinks';

export function SiteFooter() {
  return (
    <footer className='border-t bg-black py-10 text-white'>
      <div className='mx-auto max-w-6xl px-6 text-center'>
        <FooterSocialLinks />

        <p className='mt-6 text-xs text-white/60'>{footerData.copyright}</p>
      </div>
    </footer>
  );
}
