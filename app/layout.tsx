import type { Metadata } from 'next';
import { Cinzel, Source_Sans_3 } from 'next/font/google';

import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';

import './globals.css';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Marci Metzger | The Ridge Realty Group',
  description:
    'Marci Metzger - The Ridge Realty Group. Real estate services, property listings, and homes for sale in Pahrump, Nevada.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${sourceSans.variable} ${cinzel.variable}`}>
      <body className='bg-white font-sans text-[#222222] antialiased'>
        <SiteHeader />

        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
