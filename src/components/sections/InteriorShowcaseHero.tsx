'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight, X, Maximize2, Pause, Play } from 'lucide-react';

interface StoreInterior {
  id: string;
  name: string;
  category: string;
  categoryTag: 'gastronomia' | 'bienestar' | 'servicios';
  shortInvite: string;
  badge: string;
  image: string;
  galleryImages?: string[];
  schedule: string;
  location: string;
}

const storeInteriors: StoreInterior[] = [
  {
    id: 'starbucks',
    name: 'STARBUCKS',
    category: 'Café & Drive-Thru',
    categoryTag: 'gastronomia',
    shortInvite: 'Disfruta tu café preferido y bebidas de especialidad con la comodidad de su Drive-Thru exclusivo.',
    badge: 'LOCAL 1 · 3° DRIVE-THRU',
    image: '/images/nuevos-locales/local-1-starbucks-a.png',
    galleryImages: [
      '/images/nuevos-locales/local-1-starbucks-a.png',
      '/images/nuevos-locales/local-1-starbucks-b.png',
      '/images/nuevos-locales/local-1-starbucks-b1.png',
    ],
    schedule: '07:00 - 22:00 hrs',
    location: 'Local 1 / Acceso Vehicular',
  },
  {
    id: 'boulangerie',
    name: 'BOULANGERIE',
    category: 'Panadería & Pastelería Francesa',
    categoryTag: 'gastronomia',
    shortInvite: 'Croissants recién horneados, baguettes artesanales y café gourmet en un espacio acogedor.',
    badge: 'LOCAL 3 · PASTELERÍA FRANCESA',
    image: '/images/nuevos-locales/local-3-boulangerie.png',
    schedule: '08:00 - 20:30 hrs',
    location: 'Local 3 / Paseo Central',
  },
  {
    id: 'sempre-pasta',
    name: 'SEMPRE PASTA',
    category: 'Gastronomía · Pastas Artesanales',
    categoryTag: 'gastronomia',
    shortInvite: 'Gastronomía italiana especializada en pastas caseras elaboradas diariamente con calidad artesanal.',
    badge: 'LOCAL 4 · PASTA CASERA',
    image: '/images/nuevos-locales/local-4-sempre-pasta.png',
    schedule: '11:30 - 22:00 hrs',
    location: 'Local 4 / Paseo Central',
  },
  {
    id: 'la-ove-bee',
    name: 'LA OVE BEE',
    category: 'Boutique Infantil & Regalos',
    categoryTag: 'servicios',
    shortInvite: 'Ropa delicada, accesorios, juguetes y regalos para bebés y niños, con marcas premium y servicio personalizado.',
    badge: 'LOCAL 5 · BOUTIQUE INFANTIL',
    image: '/images/nuevos-locales/local-5-la-ove-bee.png',
    schedule: '10:00 - 20:00 hrs',
    location: 'Local 5 / Paseo Comercial',
  },
  {
    id: 'barberia',
    name: 'BARBERÍA',
    category: 'Grooming & Corte Masculino',
    categoryTag: 'servicios',
    shortInvite: 'Cortes clásicos, perfilado de barba y el ritual de la toalla caliente.',
    badge: 'LOCAL 6 · CORTE & BARBA',
    image: '/images/nuevos-locales/local-6-barberia.png',
    schedule: '10:00 - 20:30 hrs',
    location: 'Local 6 / Paseo Comercial',
  },
  {
    id: 'manos-pies',
    name: 'MANOS Y PIES',
    category: 'Bienestar & Spa Nails',
    categoryTag: 'bienestar',
    shortInvite: 'Manicure, pedicure spa y tratamientos de cuidado personal en un entorno relajante.',
    badge: 'LOCAL 7 · SPA & NAILS',
    image: '/images/nuevos-locales/local-7-manos-pies.png',
    schedule: '09:30 - 20:00 hrs',
    location: 'Local 7 / Sector Bienestar',
  },
  {
    id: 'valgame-dios',
    name: 'VÁLGAME DIOS',
    category: 'Moda Boutique · Vestuario & Calzado',
    categoryTag: 'servicios',
    shortInvite: 'Vestuario, zapatos y accesorios femeninos exclusivos diseñados para destacar tu estilo propio con elegancia.',
    badge: 'LOCAL 8 · MODA & CALZADO',
    image: '/images/nuevos-locales/local-8-valgame-dios.png',
    schedule: '10:30 - 20:30 hrs',
    location: 'Local 8 / Paseo Comercial',
  },
  {
    id: 'ceramica-gres',
    name: 'CERÁMICA GRES',
    category: 'Arte & Taller de Cerámica',
    categoryTag: 'servicios',
    shortInvite: 'Taller de alfarería, piezas artesanales únicas hechas a mano y expresión creativa.',
    badge: 'LOCAL 9 · TALLER DE ARTE',
    image: '/images/nuevos-locales/local-9-ceramica-gres.png',
    schedule: '10:00 - 19:30 hrs',
    location: 'Local 9 / Paseo Comercial',
  },
  {
    id: 'corredora',
    name: 'CORREDORA DE PROPIEDADES',
    category: 'Servicios Inmobiliarios',
    categoryTag: 'servicios',
    shortInvite: 'Gestión inmobiliaria integral y asesoría profesional en la zona.',
    badge: 'LOCAL 10 · REAL ESTATE',
    image: '/images/nuevos-locales/local-10-corredora.png',
    schedule: '09:00 - 18:30 hrs',
    location: 'Local 10 / Sector Servicios',
  },
  {
    id: 'pilates',
    name: 'PILATES REFORMER',
    category: 'Bienestar & Mind-Body',
    categoryTag: 'bienestar',
    shortInvite: 'Fortalecimiento postural y entrenamiento consciente con equipamiento de alta gama.',
    badge: 'LOCAL 2 · REFORMER STUDIO',
    image: '/images/nuevos-locales/local-2-pilates.png',
    schedule: '07:30 - 21:00 hrs',
    location: 'Local 2 / Nivel 2',
  },
  {
    id: 'gym',
    name: 'GYM',
    category: 'Deporte & Fitness Studio',
    categoryTag: 'bienestar',
    shortInvite: 'Espacio equipado para entrenamiento funcional, fuerza y acondicionamiento personal.',
    badge: 'LOCAL 11 · FITNESS CLUB',
    image: '/images/nuevos-locales/local-11-gym.png',
    schedule: '07:00 - 22:00 hrs',
    location: 'Local 11 / Sector Deportivo',
  },
  {
    id: 'padel',
    name: 'CANCHAS DE PÁDEL',
    category: 'Deporte & Pádel Club',
    categoryTag: 'bienestar',
    shortInvite: 'Canchas de pádel techadas con estándar profesional para jugar a cualquier hora.',
    badge: 'PÁDEL CLUB TECHADO',
    image: '/images/nuevos-locales/canchas-padel.png',
    schedule: '07:30 - 23:00 hrs',
    location: 'Sector Deportivo Cubierto',
  },
  {
    id: 'quincho',
    name: 'QUINCHO CORPORATIVO',
    category: 'Eventos & Networking',
    categoryTag: 'servicios',
    shortInvite: 'Espacio equipado para reuniones corporativas, celebraciones privadas y networking.',
    badge: 'QUINCHO & EVENTOS',
    image: '/images/nuevos-locales/quincho-corporativo.png',
    schedule: 'Reserva Previa',
    location: 'Sector Terrazas Nivel 2',
  },
  {
    id: 'carwash',
    name: 'CARWASH',
    category: 'Servicios & Detailing Ecológico',
    categoryTag: 'servicios',
    shortInvite: 'Lavado ecológico de alta presión y detallado mientras disfrutás tu paseo.',
    badge: 'CARWASH & DETAILING',
    image: '/images/nuevos-locales/carwash.png',
    schedule: '08:30 - 19:30 hrs',
    location: 'Estacionamiento Nivel 1',
  },
];

type CategoryFilter = 'all' | 'gastronomia' | 'bienestar' | 'servicios';

export default function InteriorShowcaseHero() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeSubImageIndex, setActiveSubImageIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [activeModalStore, setActiveModalStore] = useState<StoreInterior | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const filteredStores = storeInteriors.filter((store) => {
    if (activeFilter === 'all') return true;
    return store.categoryTag === activeFilter;
  });

  const currentStore = filteredStores[selectedIndex] || filteredStores[0];

  const hasSubGallery = currentStore.galleryImages && currentStore.galleryImages.length > 1;
  const currentDisplayedImage = hasSubGallery
    ? currentStore.galleryImages![activeSubImageIndex]
    : currentStore.image;

  // Autoplay Timer
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % filteredStores.length);
      setActiveSubImageIndex(0);
    }, 2500);

    return () => clearInterval(interval);
  }, [isAutoplay, filteredStores.length]);

  const handleNext = () => {
    setIsAutoplay(false);
    setSelectedIndex((prev) => (prev + 1) % filteredStores.length);
    setActiveSubImageIndex(0);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setSelectedIndex((prev) => (prev - 1 + filteredStores.length) % filteredStores.length);
    setActiveSubImageIndex(0);
  };

  const handleFilterChange = (filter: CategoryFilter) => {
    setIsAutoplay(false);
    setActiveFilter(filter);
    setSelectedIndex(0);
    setActiveSubImageIndex(0);
  };

  // Helper for 3D card indexes
  const getCardIndexOffset = (offset: number) => {
    const total = filteredStores.length;
    return (selectedIndex + offset + total) % total;
  };

  const prevStore = filteredStores[getCardIndexOffset(-1)];
  const nextStore = filteredStores[getCardIndexOffset(1)];

  return (
    <section
      id="locales"
      className="relative w-full min-h-screen bg-[#0D1117] text-[#F5F3EA] py-12 sm:py-24 px-3 sm:px-8 lg:px-12 overflow-hidden flex flex-col justify-between"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FFE9A3]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#162A38]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto w-full z-10 my-auto flex flex-col gap-6 sm:gap-10">
        {/* Header section with categories */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE9A3]/10 border border-[#FFE9A3]/30 text-[#FFE9A3] text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 / LOCALES COMERCIALES</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight"
            >
              Conoce nuestros <span className="italic text-[#FFE9A3]">locales comerciales</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-xs sm:text-base text-[#F5F3EA]/80 font-light max-w-xl"
            >
              Explora los 11 locales comerciales y áreas exclusivas con movimiento y perspectiva.
            </motion.p>
          </div>

          {/* Category Filter Pills & Autoplay Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-[#161B22] p-1.5 rounded-2xl border border-white/10 shadow-xl">
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeFilter === 'all'
                    ? 'bg-[#FFE9A3] text-[#080A0D] shadow-lg font-semibold'
                    : 'text-[#F5F3EA]/70 hover:text-white hover:bg-white/5'
                  }`}
              >
                Todos ({storeInteriors.length})
              </button>
              <button
                onClick={() => handleFilterChange('gastronomia')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeFilter === 'gastronomia'
                    ? 'bg-[#FFE9A3] text-[#080A0D] shadow-lg font-semibold'
                    : 'text-[#F5F3EA]/70 hover:text-white hover:bg-white/5'
                  }`}
              >
                Gastronomía
              </button>
              <button
                onClick={() => handleFilterChange('bienestar')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeFilter === 'bienestar'
                    ? 'bg-[#FFE9A3] text-[#080A0D] shadow-lg font-semibold'
                    : 'text-[#F5F3EA]/70 hover:text-white hover:bg-white/5'
                  }`}
              >
                Bienestar & Deporte
              </button>
              <button
                onClick={() => handleFilterChange('servicios')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeFilter === 'servicios'
                    ? 'bg-[#FFE9A3] text-[#080A0D] shadow-lg font-semibold'
                    : 'text-[#F5F3EA]/70 hover:text-white hover:bg-white/5'
                  }`}
              >
                Moda & Servicios
              </button>
            </div>

            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="w-9 sm:w-10 h-9 sm:h-10 rounded-2xl bg-[#161B22] border border-white/10 text-[#FFE9A3] flex items-center justify-center hover:border-[#FFE9A3] transition-colors cursor-pointer"
              title={isAutoplay ? 'Pausar rotación' : 'Reanudar rotación'}
            >
              {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </motion.div>
        </div>

        {/* Dynamic 3D Motion Stage */}
        <div className="relative w-full py-2 sm:py-6 flex items-center justify-center perspective-[1200px] min-h-[460px] sm:min-h-[600px]">
          {/* Left Floating Card (Previous - Hidden on Mobile) */}
          <motion.div
            key={`prev-${prevStore.id}`}
            onClick={handlePrev}
            initial={{ opacity: 0.3, scale: 0.8, rotateY: 20, x: -100 }}
            animate={{ opacity: 0.45, scale: 0.85, rotateY: 18, x: '-65%' }}
            whileHover={{ opacity: 0.75, scale: 0.88 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-10 w-[65%] max-w-[800px] aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-[#161B22] border border-white/10 shadow-2xl cursor-pointer hidden md:block"
          >
            <Image
              src={prevStore.image}
              alt={prevStore.name}
              fill
              sizes="50vw"
              className="object-cover object-center filter grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-[#080A0D]/70" />
            <div className="absolute bottom-6 left-6 z-10">
              <span className="text-xs uppercase tracking-widest text-[#FFE9A3] font-semibold block mb-1">
                {prevStore.badge}
              </span>
              <h4 className="font-display text-xl text-white font-normal">{prevStore.name}</h4>
            </div>
          </motion.div>

          {/* Center Active Store Card */}
          <motion.div
            key={`active-${currentStore.id}-${currentDisplayedImage}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30 w-full max-w-[1100px] min-h-[440px] sm:min-h-[540px] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-[#161B22] border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] group flex flex-col justify-between"
          >
            <Image
              src={currentDisplayedImage}
              alt={currentStore.name}
              fill
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out cursor-pointer"
              priority
              onClick={() => setFullscreenImage(currentDisplayedImage)}
            />

            {/* Dark Gradient Overlay for Maximum Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/95 via-[#0D1117]/40 to-black/60 pointer-events-none z-10" />

            {/* Top Overlay Bar */}
            <div className="relative z-20 p-4 sm:p-8 flex justify-between items-start">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap max-w-[75%]">
                <span className="bg-[#080A0D]/85 backdrop-blur-md border border-[#FFE9A3]/50 text-[#FFE9A3] text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg">
                  {currentStore.badge}
                </span>

                {hasSubGallery && (
                  <span className="bg-[#FFE9A3] text-[#080A0D] text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full inline-flex items-center gap-1 shadow-lg">
                    <span>3 VISTAS</span>
                  </span>
                )}
              </div>

              {/* Sub Gallery Switcher + Fullscreen Zoom Button */}
              <div className="flex items-center gap-2 sm:gap-3">
                {hasSubGallery && (
                  <div className="flex items-center gap-1.5 bg-[#080A0D]/80 backdrop-blur-md p-1 rounded-full border border-white/20">
                    {currentStore.galleryImages!.map((_, subIdx) => (
                      <button
                        key={subIdx}
                        onClick={() => setActiveSubImageIndex(subIdx)}
                        className={`w-6 sm:w-7 h-6 sm:h-7 rounded-full text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${subIdx === activeSubImageIndex
                            ? 'bg-[#FFE9A3] text-[#080A0D] scale-110'
                            : 'bg-white/20 text-white hover:bg-white/40'
                          }`}
                      >
                        {subIdx + 1}
                      </button>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setFullscreenImage(currentDisplayedImage)}
                  aria-label="Ver pantalla completa"
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#080A0D]/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#FFE9A3] hover:text-[#080A0D] transition-colors cursor-pointer"
                  title="Expandir imagen en pantalla completa"
                >
                  <Maximize2 className="w-3.5 sm:w-4.5 h-3.5 sm:h-4.5" />
                </button>
              </div>
            </div>

            {/* Bottom Content Overlay */}
            <div className="relative z-20 p-5 sm:p-10 flex flex-col gap-2.5 sm:gap-4 mt-auto">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#FFE9A3]">
                <span>{currentStore.category}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-5xl lg:text-6xl text-white font-normal tracking-wide leading-tight">
                {currentStore.name}
              </h3>

              <p className="text-xs sm:text-base text-[#F5F3EA]/90 font-light max-w-2xl leading-relaxed line-clamp-3 sm:line-clamp-none">
                {currentStore.shortInvite}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 mt-1 sm:mt-2 pt-3 sm:pt-4 border-t border-white/20 text-[11px] sm:text-xs text-[#F5F3EA]/90 font-light">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#FFE9A3]" />
                    {currentStore.schedule}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#FFE9A3]" />
                    {currentStore.location}
                  </span>
                </div>

                <button
                  onClick={() => setActiveModalStore(currentStore)}
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#FFE9A3] hover:underline cursor-pointer py-1"
                >
                  <span>Ver detalle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Navigation Arrows (Desktop: Side Floating, Mobile: Neatly Positioned) */}
            <button
              onClick={handlePrev}
              aria-label="Anterior"
              className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-4 z-30 w-12 h-12 rounded-full bg-[#080A0D]/80 backdrop-blur-md border border-white/20 text-white items-center justify-center hover:bg-[#FFE9A3] hover:text-[#080A0D] transition-colors cursor-pointer shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Siguiente"
              className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-4 z-30 w-12 h-12 rounded-full bg-[#080A0D]/80 backdrop-blur-md border border-white/20 text-white items-center justify-center hover:bg-[#FFE9A3] hover:text-[#080A0D] transition-colors cursor-pointer shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>

          {/* Right Floating Card (Next - Hidden on Mobile) */}
          <motion.div
            key={`next-${nextStore.id}`}
            onClick={handleNext}
            initial={{ opacity: 0.3, scale: 0.8, rotateY: -20, x: 100 }}
            animate={{ opacity: 0.45, scale: 0.85, rotateY: -18, x: '65%' }}
            whileHover={{ opacity: 0.75, scale: 0.88 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-10 w-[65%] max-w-[800px] aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-[#161B22] border border-white/10 shadow-2xl cursor-pointer hidden md:block"
          >
            <Image
              src={nextStore.image}
              alt={nextStore.name}
              fill
              sizes="50vw"
              className="object-cover object-center filter grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-[#080A0D]/70" />
            <div className="absolute bottom-6 right-6 z-10 text-right">
              <span className="text-xs uppercase tracking-widest text-[#FFE9A3] font-semibold block mb-1">
                {nextStore.badge}
              </span>
              <h4 className="font-display text-xl text-white font-normal">{nextStore.name}</h4>
            </div>
          </motion.div>
        </div>

        {/* Mobile Navigation Controls Bar */}
        <div className="flex sm:hidden items-center justify-between bg-[#161B22] p-2.5 rounded-2xl border border-white/10 text-xs">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1 text-[#FFE9A3] font-semibold px-3 py-1.5 rounded-xl bg-white/5 active:bg-white/15"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <span className="text-white/70 font-mono text-[11px]">
            {selectedIndex + 1} / {filteredStores.length}
          </span>

          <button
            onClick={handleNext}
            className="flex items-center gap-1 text-[#FFE9A3] font-semibold px-3 py-1.5 rounded-xl bg-white/5 active:bg-white/15"
          >
            <span>Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Filmstrip Thumbnail Track Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto py-2 px-1 custom-scrollbar">
          {filteredStores.map((store, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={store.id}
                onClick={() => {
                  setIsAutoplay(false);
                  setSelectedIndex(idx);
                  setActiveSubImageIndex(0);
                }}
                className={`relative flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${isSelected
                    ? 'w-20 sm:w-28 h-12 sm:h-16 border-2 border-[#FFE9A3] scale-105 shadow-lg'
                    : 'w-14 sm:w-20 h-9 sm:h-12 border border-white/10 opacity-50 hover:opacity-100'
                  }`}
                title={store.name}
              >
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
                <div className={`absolute inset-0 ${isSelected ? 'bg-transparent' : 'bg-black/40'}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      <AnimatePresence>
        {fullscreenImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
            <button
              onClick={() => setFullscreenImage(null)}
              aria-label="Cerrar vista completa"
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#FFE9A3] hover:text-[#080A0D] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-6xl aspect-[16/10] max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={fullscreenImage}
                alt={currentStore.name}
                fill
                className="object-contain object-center"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Detail Quick View Modal */}
      <AnimatePresence>
        {activeModalStore && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-2xl bg-[#161B22] border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveModalStore(null)}
                aria-label="Cerrar"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#FFE9A3] hover:text-[#080A0D] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src={activeModalStore.image}
                  alt={activeModalStore.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-transparent to-black/30" />
              </div>

              <div className="p-6 sm:p-8 flex flex-col gap-4">
                <span className="text-xs uppercase tracking-widest text-[#FFE9A3] font-semibold">
                  {activeModalStore.badge}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl text-white">
                  {activeModalStore.name}
                </h3>

                <p className="text-sm text-[#F5F3EA]/80 font-light leading-relaxed">
                  {activeModalStore.shortInvite}
                </p>

                {activeModalStore.galleryImages && (
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-xs text-[#FFE9A3] font-semibold">Galería de imágenes:</span>
                    <div className="flex items-center gap-2">
                      {activeModalStore.galleryImages.map((img, idx) => (
                        <div key={idx} className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/20">
                          <Image src={img} alt={`Vista ${idx + 1}`} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs text-[#F5F3EA]/70">
                  <div>
                    <span className="block font-semibold text-white mb-1">Horario</span>
                    <span>{activeModalStore.schedule}</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-white mb-1">Ubicación</span>
                    <span>{activeModalStore.location}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <a
                    href="#ubicacion"
                    onClick={() => setActiveModalStore(null)}
                    className="bg-[#FFE9A3] text-[#080A0D] text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-full hover:bg-white transition-colors"
                  >
                    ¿Cómo llegar?
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
