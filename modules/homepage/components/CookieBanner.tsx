'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { cookieBannerData } from '@/modules/homepage/data/contact';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className='fixed bottom-4 left-4 right-4 z-50 max-w-sm rounded-xl border bg-background p-5 shadow-lg sm:left-auto'>
      <h4 className='text-sm font-semibold'>{cookieBannerData.title}</h4>
      <p className='mt-2 text-xs leading-5 text-muted-foreground'>
        {cookieBannerData.message}
      </p>
      <div className='mt-4 flex justify-end'>
        <Button size='sm' onClick={() => setIsVisible(false)}>
          {cookieBannerData.acceptLabel}
        </Button>
      </div>
    </div>
  );
}
