export interface Tenant {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  galleryImages?: string[];
  badge?: string;
  logo?: string;
  schedule?: string;
  location?: string;
  website?: string;
  instagram?: string;
  featured?: boolean;
}

