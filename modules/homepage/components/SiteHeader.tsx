'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import {
  brandName,
  logoImage,
  navLinks,
} from '@/modules/homepage/data/navigation';

import { useMobileNav } from '@/modules/homepage/hooks/use-mobile-nav';

export function SiteHeader() {
  const { isOpen, open, close } = useMobileNav();

  return (
    <header className='relative z-50 border-b bg-background/95 backdrop-blur'>
      {/* Header */}
      <div className='relative mx-auto flex h-40 max-w-6xl items-center px-6'>
        {/* Menu Button */}
        <button
          type='button'
          onClick={open}
          aria-label='Open navigation menu'
          aria-expanded={isOpen}
          className='rounded-md p-2 text-foreground transition-all duration-200 hover:bg-muted active:scale-95'
        >
          <Menu className='size-6' />
        </button>

        {/* Center Logo */}
        <Link
          href='/'
          className='absolute left-1/2 -translate-x-1/2'
          aria-label={brandName}
        >
          <Image
            src={logoImage}
            alt={brandName}
            width={160}
            height={50}
            className='h-25 w-auto object-contain'
            priority
          />
        </Link>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden='true'
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-dvh w-[280px] max-w-[85vw] flex-col border-r bg-background shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : 'pointer-events-none -translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Sidebar Header */}
        <div className='flex h-20 shrink-0 items-center justify-between border-b px-6'>
          <span className='text-sm font-medium uppercase tracking-[0.2em] text-foreground/70'>
            Menu
          </span>

          <button
            type='button'
            onClick={close}
            aria-label='Close navigation menu'
            className='rounded-md p-2 text-foreground transition-all duration-200 hover:rotate-90 hover:bg-muted active:scale-95'
          >
            <X className='size-6' />
          </button>
        </div>

        {/* Navigation */}
        <nav className='min-h-0 flex-1 overflow-y-auto px-6 py-6'>
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={`group relative block border-b py-4 text-base font-medium text-foreground/80 transition-all duration-300 hover:pl-2 hover:text-foreground ${
                isOpen ?
                  'translate-x-0 opacity-100'
                : '-translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50 + 100}ms` : '0ms',
              }}
            >
              <span className='relative inline-block'>
                {link.label}

                <span className='absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full' />
              </span>
            </Link>
          ))}
        </nav>
      </aside>
    </header>
  );
}
