import type { Metadata } from 'next';
import { Cinzel, Source_Sans_3 } from 'next/font/google';

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
  title: 'Marci Metzger | Real Estate',
  description:
    'Marci Metzger - Real estate services, property listings, and homes for sale.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${sourceSans.variable} ${cinzel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
