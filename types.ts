export type Page = 'home' | 'services' | 'gallery' | 'pricing' | 'about' | 'terms' | 'contact';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  process: string[];
  aftercare: string;
  imageUrl: string;
}

export interface PriceItem {
  service: string;
  description: string;
  price: string;
  duration: string;
  guarantee: string;
}

export interface PackageItem {
  title: string;
  saving: string;
}

export interface Testimonial {
  quote: string;
  name: string;
}

export interface GalleryItem {
  id: number;
  category: 'Sulam Alis' | 'Eyelash Extension' | 'Nail Art';
  beforeUrl: string;
  afterUrl: string;
  title: string;
}

export interface USP {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}
