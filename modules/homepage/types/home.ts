export interface NavLink {
  label: string;
  href: string;
}

export interface HeroData {
  eyebrow: string;
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage: string;
  backgroundImageAlt: string;
}

export interface AgentIntro {
  sectionHeading: string;
  photo: string;
  photoAlt: string;
  headline: string;
  phoneLabel: string;
  phoneHref: string;
}

export interface StatCard {
  id: string;
  image: string;
  imageAlt: string;
  heading: string;
  body: string[];
}

export interface ServiceCard {
  id: string;
  image: string;
  imageAlt: string;
  heading: string;
  subheading: string;
  body: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface MlsSearchFormConfig {
  sectionHeading: string;
  formTitle: string;
  backgroundImage: string;
  sortOptions: SelectOption[];
  bedroomOptions: SelectOption[];
  bathroomOptions: SelectOption[];
  submitLabel: string;
}

export interface PartnerLogo {
  id: string;
  image: string;
  alt: string;
}

export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
}

export type SocialPlatform = 'facebook' | 'instagram' | 'linkedin' | 'yelp';

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
  label: string;
}

export interface OfficeHours {
  label: string;
  hours: string;
  note: string;
}

export interface ContactInfo {
  sectionHeading: string;
  businessName: string;
  address: string;
  phoneLabel: string;
  phoneHref: string;

  officeHours: OfficeHours;

  mapCenter: {
    lat: number;
    lng: number;
  };

  directionsHref: string;
  mapEmbedUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface MlsSearchFormData {
  location: string;
  type: string;
  sortBy: string;
  bedrooms: string;
  bathrooms: string;
  minPrice: string;
  maxPrice: string;
}

export interface FooterData {
  copyright: string;
}

export interface CookieBannerData {
  title: string;
  message: string;
  acceptLabel: string;
}
