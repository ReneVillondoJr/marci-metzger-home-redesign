import type {
  ContactInfo,
  CookieBannerData,
  FooterData,
} from '@/modules/homepage/types/home';

export const contactInfo: ContactInfo = {
  sectionHeading: 'CALL OR VISIT',

  businessName: 'Desert View Hospital',

  address: '360 S Lola Ln, Pahrump, NV 89048, United States',

  phoneLabel: '(775) 751-7500',
  phoneHref: 'tel:7757517500',

  officeHours: {
    label: 'Open 24 hours',
    hours: '24 hours',
    note: 'Emergency services are available 24 hours a day.',
  },

  mapCenter: {
    lat: 36.2073,
    lng: -115.9831,
  },

  directionsHref:
    'https://www.google.com/maps/search/?api=1&query=Desert+View+Hospital%2C+360+S+Lola+Ln%2C+Pahrump%2C+NV+89048',

  mapEmbedUrl:
    'https://www.google.com/maps?q=Desert+View+Hospital%2C+360+S+Lola+Ln%2C+Pahrump%2C+NV+89048&output=embed',
};

export const footerData: FooterData = {
  copyright: `Copyright © ${new Date().getFullYear()} Desert View Hospital — All Rights Reserved`,
};

export const cookieBannerData: CookieBannerData = {
  title: 'This website uses cookies.',
  message:
    'We use cookies to analyze website traffic and optimize your experience. By accepting, your data will be aggregated with all other user data.',
  acceptLabel: 'Accept',
};
