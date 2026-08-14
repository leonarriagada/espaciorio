export interface Tenant {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  logo?: string;
  schedule?: string;
  location?: string;
  website?: string;
  instagram?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accent?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'arquitectura' | 'paisaje' | 'gastronomia' | 'encuentro';
  image: string;
  aspect: 'panorama' | 'portrait' | 'square';
}
