import type { AgentIntro, StatCard } from '@/modules/homepage/types/home';

export const agentIntro: AgentIntro = {
  sectionHeading: 'Marci Metzger',
  photo: '/about/marci-metzger.webp',
  photoAlt: 'Marci Metzger, Pahrump real estate agent',
  headline: 'Realtor for Nearly 3 Decades',
  phoneLabel: '(206) 919-6886',
  phoneHref: 'tel:2069196886',
};

export const getItSoldHeading = 'GET IT SOLD';

export const statCards: StatCard[] = [
  {
    id: 'top-sales',
    image: '/get-it-sold-1.webp',
    imageAlt: 'Pahrump neighborhood street view',
    heading: 'Top Residential Sales, Last 5 Years',
    body: [
      'We helped nearly 90 clients in 2021, and closed $28.5 million in sales.',
      'Our team works hard every day to grow and learn, so we can keep excelling in our market. Our clients deserve our best, and we make sure our best gets better every year.',
    ],
  },
  {
    id: 'dont-just-list',
    image: '/get-it-sold-2.webp',
    imageAlt: 'For sale sign in front of a home',
    heading: "Don't Just List It",
    body: [
      'Get it sold. We exhaust every avenue to put our listings in front of every possible buyer, getting you top dollar for your home.',
    ],
  },
  {
    id: 'guide-to-buyers',
    image: '/get-it-sold-3.webp',
    imageAlt: 'Couple reviewing paperwork with a real estate agent',
    heading: 'Guide to Buyers',
    body: [
      'Nobody knows the market like we do. Enjoy having a pro at your service — market analysis, upgrade lists, contractors on speed dial, and more.',
    ],
  },
];
