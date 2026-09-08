import type { MlsSearchFormConfig } from '@/modules/homepage/types/home';

export const mlsSearchConfig: MlsSearchFormConfig = {
  sectionHeading: 'Find Your Dream Home',
  formTitle: 'Search Listings',
  // backgroundImage: "https://img1.wsimg.com/isteam/getty/2223376026/",
  backgroundImage: '',
  sortOptions: [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'pra', label: 'Least Expensive to Most' },
    { value: 'prd', label: 'Most Expensive to Least' },
    { value: 'bda', label: 'Bedrooms (Low to High)' },
    { value: 'bdd', label: 'Bedrooms (High to Low)' },
    { value: 'tba', label: 'Bathrooms (Low to High)' },
    { value: 'tbd', label: 'Bathrooms (High to Low)' },
  ],
  bedroomOptions: [
    { value: '', label: 'Any Number' },
    { value: '0', label: 'Studio' },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' },
    { value: '4', label: '4+' },
    { value: '5', label: '5+' },
    { value: '6', label: '6+' },
  ],
  bathroomOptions: [
    { value: '', label: 'Any Number' },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' },
    { value: '4', label: '4+' },
    { value: '5', label: '5+' },
    { value: '6', label: '6+' },
  ],
  submitLabel: 'Search Now',
};

export const locationOptions: { value: string; label: string }[] = [];
export const propertyTypeOptions: { value: string; label: string }[] = [];
