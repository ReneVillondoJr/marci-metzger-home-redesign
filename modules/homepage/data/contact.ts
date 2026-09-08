import type {
  ContactInfo,
  CookieBannerData,
  FooterData,
} from '@/modules/homepage/types/home';

export const contactInfo: ContactInfo = {
  sectionHeading: 'CALL OR VISIT',

  businessName: 'Marci Metzger - THE RIDGE REALTY GROUP',

  address: '3190 HW-160, Suite F, Pahrump, Nevada 89048, United States',

  phoneLabel: '(206) 919-6886',
  phoneHref: 'tel:2069196886',

  officeHours: {
    label: 'Open today',
    hours: '08:00 am – 07:00 pm',
    note: 'Open daily 8:00 am - 7:00 pm. Appointments outside office hours available upon request. Just call!',
  },

  mapCenter: {
    lat: 36.2081,
    lng: -115.9839,
  },

  directionsHref:
    'https://www.google.com/maps/search/?api=1&query=Marci+Metzger+THE+RIDGE+REALTY+GROUP%2C+3190+HW-160+Suite+F%2C+Pahrump%2C+NV+89048',

  mapEmbedUrl:
    'https://www.google.com/maps?q=Marci+Metzger+THE+RIDGE+REALTY+GROUP%2C+3190+HW-160+Suite+F%2C+Pahrump%2C+NV+89048&output=embed',
};

export const footerData: FooterData = {
  copyright: `Copyright © ${new Date().getFullYear()} Marci Metzger - THE RIDGE REALTY GROUP — All Rights Reserved`,
};

export const cookieBannerData: CookieBannerData = {
  title: 'This website uses cookies.',
  message:
    'We use cookies to analyze website traffic and optimize your experience. By accepting, your data will be aggregated with all other user data.',
  acceptLabel: 'Accept',
};
