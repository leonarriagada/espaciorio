import { Tenant, Experience, GalleryItem } from '@/types';

export const tenantsData: Tenant[] = [
  {
    slug: 'starbucks-drive-thru',
    name: 'STARBUCKS',
    category: 'Café · Drive-Thru',
    description: 'Café de origen, repostería y servicio rápido con tótem exclusivo y carril Drive-Thru.',
    image: '/images/05.jpg',
    schedule: '07:30 - 21:30 hrs',
    location: 'Acceso Vehicular / Sector Norte',
    featured: true,
    website: 'https://starbucks.cl',
  },
  {
    slug: 'bar-lolita-jones',
    name: 'BAR LOLITA JONES',
    category: 'Gastronomía · Coctelería de Autor',
    description: 'Cocktails de autor, gastronomía vibrante y terraza de ingreso principal al paseo peatonal.',
    image: '/images/06.jpg',
    schedule: '12:30 - 01:00 hrs',
    location: 'Acceso Peatonal Principal',
    featured: true,
  },
  {
    slug: 'aurora-fine-dining',
    name: 'AURORA FINE DINING & CAFÉ',
    category: 'Gastronomía · Haute Cuisine',
    description: 'Propuesta gastronómica de alto nivel con amplia terraza exterior y cafetería de especialidad.',
    image: '/images/09.jpg',
    schedule: '08:30 - 23:30 hrs',
    location: 'Paseo Central / Nivel 1',
    featured: true,
  },
  {
    slug: 'volterra-vinos-tapas',
    name: 'VOLTERRA VINOS & TAPAS',
    category: 'Gastronomía · Cava & Tapas',
    description: 'Selección de cepas boutique, maridajes Mediterranean-style y terraza en segundo nivel.',
    image: '/images/11.jpg',
    schedule: '13:00 - 23:00 hrs',
    location: 'Sector Terrazas / Nivel 2',
    featured: true,
  },
  {
    slug: 'the-padel-club',
    name: 'THE PADEL CLUB',
    category: 'Deporte · Club House',
    description: 'Canchas de pádel de alto estándar, club house, pasarelas elevadas y área social de dos niveles.',
    image: '/images/10.jpg',
    schedule: '07:00 - 23:00 hrs',
    location: 'Sector Deportivo / Nivel 1 & 2',
    featured: true,
  },
];

export const experiencesData: Experience[] = [
  {
    id: 'exp-drive-thru',
    title: 'STARBUCKS & DRIVE-THRU',
    subtitle: 'El ritmo del día a tu velocidad.',
    description: 'Primer plano del volumen independiente de Starbucks con terraza exterior, estacionamiento directo y tótem vertical de Drive-Thru.',
    image: '/images/05.jpg',
  },
  {
    id: 'exp-gastronomia',
    title: 'GASTRONOMÍA & VIDA SOCIAL',
    subtitle: 'Aurora, Volterra & Lolita Jones.',
    description: 'Terrazas abiertas, alta cocina, cava de vinos y coctelería de autor en una hilera de restaurantes con fachadas vidriadas de dos niveles.',
    image: '/images/11.jpg',
  },
  {
    id: 'exp-deporte',
    title: 'THE PADEL CLUB & DEPORTE',
    subtitle: 'Infraestructura deportiva de nivel superior.',
    description: 'Canchas de pádel cubiertas y al aire libre, pasarelas elevadas de conexión y espacios de encuentro para deportistas.',
    image: '/images/04.jpg',
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Vista General Panorámica',
    category: 'arquitectura',
    image: '/images/01.jpg',
    aspect: 'panorama',
  },
  {
    id: 'gal-2',
    title: 'Acceso Peatonal & Bar Lolita Jones',
    category: 'encuentro',
    image: '/images/06.jpg',
    aspect: 'portrait',
  },
  {
    id: 'gal-3',
    title: 'Paseo Central & Experiencia Gastronómica',
    category: 'gastronomia',
    image: '/images/07.jpg',
    aspect: 'square',
  },
  {
    id: 'gal-4',
    title: 'Aurora Fine Dining & Cancha de Pádel',
    category: 'arquitectura',
    image: '/images/09.jpg',
    aspect: 'panorama',
  },
  {
    id: 'gal-5',
    title: 'The Padel Club & Conexión Nivel 2',
    category: 'paisaje',
    image: '/images/10.jpg',
    aspect: 'portrait',
  },
];
