import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  title: ReactNode;
  eyebrow?: ReactNode;
  tone?: 'light' | 'dark';
  showDivider?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  eyebrow,
  tone = 'light',
  showDivider = false,
  className,
}: SectionHeadingProps) {
  const isDark = tone === 'dark';

  return (
    <div className={cn('text-center', className)}>
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-[10px] font-medium uppercase tracking-[0.3em]',
            isDark ? 'text-white/45' : 'text-[#77716B]',
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          'font-serif text-2xl font-light uppercase tracking-[0.08em] sm:text-3xl md:text-3xl',
          isDark ? 'text-white' : 'text-[#222222]',
        )}
      >
        {title}
      </h2>

      {showDivider && (
        <div
          className={cn(
            'mx-auto mt-5 h-px w-12',
            isDark ? 'bg-white/30' : 'bg-[#252522]/30',
          )}
        />
      )}
    </div>
  );
}
