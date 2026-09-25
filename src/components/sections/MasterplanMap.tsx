'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Box,
  CheckCircle,
  Store,
  X,
  ShieldCheck,
  Building2,
  Car,
  Filter,
  ArrowRight
} from 'lucide-react';
import Masterplan3DViewer from '@/components/sections/Masterplan3DViewer';

export interface ZoneData {
  id: string;
  title: string;
  category: 'gastronomia' | 'bienestar' | 'barberia' | 'servicios' | 'deporte' | 'general';
  categoryLabel: string;
  area: string;
  nivel: string;
  uso: string;
  status: 'operativo' | 'proxima' | 'disponible';
  statusLabel: string;
  slug?: string;
  ig?: string;
  web?: string;
  image?: string;
}

interface MasterplanMapProps {
  onSelectLocal?: (slug: string) => void;
  selectedSlug?: string;
}

export const ZONES_REGISTRY: Record<string, ZoneData> = {
  'lot-01': {
    id: 'lot-01',
    title: 'Starbucks Drive-Thru',
    category: 'gastronomia',
    categoryLabel: 'Cafetería & Drive-Thru',
    area: '176,11 m²',
    nivel: 'Piso 1 · Con Terraza',
    uso: 'Cafetería de especialidad con atención vehicular exclusiva y terraza de clientes',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'starbucks-drive-thru',
    ig: '@starbucks_chile',
    web: 'starbucks.cl',
    image: '/images/nuevos-locales/local-1-starbucks-a.png',
  },
  'lot-02': {
    id: 'lot-02',
    title: 'Boulangerie',
    category: 'gastronomia',
    categoryLabel: 'Panadería & Pastelería Francesa',
    area: '92,40 m²',
    nivel: 'Piso 1 · Vereda Comercial',
    uso: 'Panadería y repostería artesanal francesa, croissants, baguettes de masa madre, deli y café gourmet por Andrés Gatica',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'boulangerie-pasteleria',
    image: '/images/nuevos-locales/local-3-boulangerie.png',
  },
  'lot-03': {
    id: 'lot-03',
    title: 'Kiosclub',
    category: 'servicios',
    categoryLabel: 'Minimarket & Confectionery',
    area: '89,71 m²',
    nivel: 'Piso 1 · Vereda Comercial',
    uso: 'Cadena de confitería importada, snacks exclusivos, bebidas premium y conveniencia (Módulo 1)',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'kiosclub',
    image: '/images/nuevos-locales/local-1-starbucks-b.png',
  },
  'lot-04': {
    id: 'lot-04',
    title: 'Kiosclub (Módulo 2)',
    category: 'servicios',
    categoryLabel: 'Minimarket & Confectionery',
    area: '86,06 m²',
    nivel: 'Piso 1 · Vereda Comercial',
    uso: 'Cadena de confitería importada, snacks exclusivos, bebidas premium y conveniencia (Módulo 2)',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'kiosclub',
    image: '/images/nuevos-locales/local-1-starbucks-b.png',
  },
  'lot-04a': {
    id: 'lot-04a',
    title: 'Sempre Pasta',
    category: 'gastronomia',
    categoryLabel: 'Pastas Artesanales Italianas',
    area: '18,30 m²',
    nivel: 'Piso 1 · Vereda Comercial',
    uso: 'Gastronomía italiana especializada en pastas caseras elaboradas diariamente con salsas tradicionales por Sofía Díaz',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'sempre-pasta',
    image: '/images/nuevos-locales/local-4-sempre-pasta.png',
  },
  'lot-05': {
    id: 'lot-05',
    title: 'La Ove Bee',
    category: 'servicios',
    categoryLabel: 'Boutique Infantil & Regalos',
    area: '31,28 m²',
    nivel: 'Piso 1 · Paseo Central',
    uso: 'Boutique infantil con vestuario delicado, accesorios y regalos exclusivos por Jacqueline Herrera',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'la-ove-bee',
    image: '/images/nuevos-locales/local-5-la-ove-bee.png',
  },
  'lot-06': {
    id: 'lot-06',
    title: 'Válgame Dios',
    category: 'servicios',
    categoryLabel: 'Moda Femenina & Vestuario de Autor',
    area: '30,81 m²',
    nivel: 'Piso 1 · Paseo Central',
    uso: 'Propuesta exclusiva de vestuario femenino de autor, calzado y accesorios sofisticados por Paulina Valdevenito',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'valgame-dios',
    image: '/images/nuevos-locales/local-8-valgame-dios.png',
  },
  'lot-07': {
    id: 'lot-07',
    title: 'Javiera Poch',
    category: 'servicios',
    categoryLabel: 'Calzado de Autor & Diseño',
    area: '30,84 m²',
    nivel: 'Piso 1 · Paseo Central',
    uso: 'Exclusiva firma de calzado femenino de autor confeccionado en cuero genuino, carteras y accesorios',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'javiera-poch',
    image: '/images/nuevos-locales/local-11-gym.png',
  },
  'lot-08': {
    id: 'lot-08',
    title: 'José Manuel',
    category: 'servicios',
    categoryLabel: 'Concept Store & Lifestyle',
    area: '30,87 m²',
    nivel: 'Piso 1 · Paseo Central',
    uso: 'Concept store curado de moda masculina, calzado y accesorios contemporáneos de alta gama',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'jose-manuel',
    image: '/images/nuevos-locales/local-10-corredora.png',
  },
  'lot-09': {
    id: 'lot-09',
    title: 'Chini Beauty Studio',
    category: 'bienestar',
    categoryLabel: 'Salón de Belleza & Estética',
    area: '30,90 m²',
    nivel: 'Piso 1 · Paseo Central',
    uso: 'Estudio de belleza integral y cuidado estético dirigido por Paula Vega: diseño de cejas, spa capilar y tratamientos',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'chini-beauty-studio',
    image: '/images/nuevos-locales/local-7-manos-pies.png',
  },
  'lot-10': {
    id: 'lot-10',
    title: 'Navi BarberShop',
    category: 'barberia',
    categoryLabel: 'Barbería & Corte Masculino',
    area: '40,15 m²',
    nivel: 'Piso 1 · Paseo Central',
    uso: 'Barbería premium liderada por Ricardo Cea, con cortes clásicos y modernos, perfilado tradicional de barba y toalla caliente',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'navi-barbershop',
    image: '/images/nuevos-locales/local-6-barberia.png',
  },
  'lot-12': {
    id: 'lot-12',
    title: 'Claudia Arriagada Propiedades',
    category: 'servicios',
    categoryLabel: 'Gestión Inmobiliaria & Asesoría',
    area: '31,08 m²',
    nivel: 'Piso 1 · Sector Servicios Norte',
    uso: 'Asesoría inmobiliaria profesional, corretaje de propiedades exclusivas, tasaciones y gestión de inversiones',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'claudia-arriagada-corredora',
    image: '/images/nuevos-locales/local-10-corredora.png',
  },
  'lot-13': {
    id: 'lot-13',
    title: 'Pilates Reformer',
    category: 'bienestar',
    categoryLabel: 'Mind-Body Studio',
    area: '30,43 m²',
    nivel: 'Piso 1 · Paseo Norte',
    uso: 'Estudio boutique de Pilates Reformer con equipamiento de alta gama a cargo de Pablo Simpson (Módulo 1)',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'pilates-reformer',
    image: '/images/nuevos-locales/local-2-pilates.png',
  },
  'lot-14': {
    id: 'lot-14',
    title: 'Pilates Reformer (Módulo Estudio)',
    category: 'bienestar',
    categoryLabel: 'Mind-Body Studio',
    area: '30,43 m²',
    nivel: 'Piso 1 · Paseo Norte',
    uso: 'Sala de entrenamiento postural, reformer y elongación funcional (Módulo 2)',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'pilates-reformer',
    image: '/images/nuevos-locales/local-2-pilates.png',
  },
  'lot-15': {
    id: 'lot-15',
    title: 'Local 11d (Disponible)',
    category: 'servicios',
    categoryLabel: 'Espacio Comercial',
    area: '30,43 m²',
    nivel: 'Piso 1 · Paseo Norte',
    uso: 'Unidad comercial disponible con vitrina directa hacia el paseo y terrazas',
    status: 'disponible',
    statusLabel: 'Disponible',
  },
  'lot-16': {
    id: 'lot-16',
    title: 'Fiorella Innocenti · Cerámica Gres',
    category: 'servicios',
    categoryLabel: 'Galería de Arte & Taller',
    area: '25,18 m²',
    nivel: 'Piso 1 · Conexión Pádel',
    uso: 'Taller de cerámica gres y galería de diseño de autor: piezas decorativas y utilitarias exclusivas hechas a mano y clases',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'fiorella-innocenti-ceramica',
    image: '/images/nuevos-locales/local-9-ceramica-gres.png',
  },
  'lot-padel': {
    id: 'lot-padel',
    title: 'Canchas de Pádel',
    category: 'deporte',
    categoryLabel: 'Arriendo & Pádel Club',
    area: '1.120,00 m²',
    nivel: 'Piso 1 · Sector Deportivo',
    uso: 'Canchas de pádel techadas de estándar panorámico con iluminación LED profesional',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'canchas-padel',
    image: '/images/nuevos-locales/canchas-padel.png',
  },
  'lot-carwash': {
    id: 'lot-carwash',
    title: 'Carwash & Detailing',
    category: 'servicios',
    categoryLabel: 'Servicios Automotrices',
    area: '150,00 m²',
    nivel: 'Piso 1 · Acceso Estacionamientos',
    uso: 'Lavado ecológico de alta presión y detallado cerámico vehicular',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'carwash-premium',
    image: '/images/nuevos-locales/carwash.png',
  },
  'lot-quincho': {
    id: 'lot-quincho',
    title: 'Quincho & Kitchenette',
    category: 'servicios',
    categoryLabel: 'Eventos & Networking',
    area: '200,00 m²',
    nivel: 'Piso 1 · Plaza Interior',
    uso: 'Espacio equipado para eventos privados, networking corporativo y celebraciones',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'quincho-corporativo',
    image: '/images/nuevos-locales/quincho-corporativo.png',
  },
  'lot-parque': {
    id: 'lot-parque',
    title: 'Parque · Entorno Natural',
    category: 'general',
    categoryLabel: 'Paisajismo & Naturaleza',
    area: '2.840,00 m²',
    nivel: 'Piso 1 Exterior',
    uso: 'Senderos peatonales, áreas verdes nativas y plazas de descanso familiar',
    status: 'operativo',
    statusLabel: 'Uso Público',
  },
};

type FloorLevel = 'piso1' | 'piso2' | 'subterraneo';
type CategoryFilter = 'all' | 'gastronomia' | 'bienestar' | 'barberia' | 'servicios' | 'deporte';

export default function MasterplanMap({ onSelectLocal, selectedSlug }: MasterplanMapProps) {
  const [activeFloor, setActiveFloor] = useState<FloorLevel>('piso1');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isIsometric, setIsIsometric] = useState<boolean>(false);
  const [hoveredZoneId, setHoveredZoneId] = useState<string | null>(null);
  const [activeDrawerZone, setActiveDrawerZone] = useState<ZoneData | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  const activeHoverZone = hoveredZoneId ? ZONES_REGISTRY[hoveredZoneId] : null;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltipPos({
      x: Math.min(e.clientX - rect.left + 15, rect.width - 250),
      y: Math.max(e.clientY - rect.top - 130, 10),
    });
  };

  const handleZoneClick = (zoneId: string) => {
    const zone = ZONES_REGISTRY[zoneId];
    if (zone) {
      setActiveDrawerZone(zone);
      if (zone.slug && onSelectLocal) {
        onSelectLocal(zone.slug);
      }
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).tagName === 'svg') {
      setActiveDrawerZone(null);
    }
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.85));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setIsIsometric(false);
  };

  const isZoneFiltered = (zoneId: string) => {
    if (activeCategory === 'all') return true;
    const zone = ZONES_REGISTRY[zoneId];
    return zone ? zone.category === activeCategory : true;
  };

  const getLotState = (zoneId: string) => {
    const zone = ZONES_REGISTRY[zoneId];
    const isSelected = activeDrawerZone?.id === zoneId || (Boolean(zone?.slug) && zone?.slug === selectedSlug);
    const isHovered = hoveredZoneId === zoneId;
    const isMatch = isZoneFiltered(zoneId);

    return { isSelected, isHovered, isMatch };
  };

  const renderLot = (
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    num: string,
    areaText?: string,
    fontSizeNum = 14
  ) => {
    const { isSelected, isHovered, isMatch } = getLotState(id);
    let fill = '#796c5b';
    let stroke = '#8d806e';
    let strokeWidth = 1;
    let filter = undefined;
    let textColor = '#eee8dd';
    let areaColor = '#d2c9bc';

    if (!isMatch) {
      fill = '#252320';
      stroke = '#3a3832';
      textColor = '#55524b';
      areaColor = '#44423c';
    } else if (isSelected) {
      fill = '#FFE9A3';
      stroke = '#FFFFFF';
      strokeWidth = 2;
      filter = 'drop-shadow(0 0 10px rgba(255,233,163,0.55))';
      textColor = '#080A0D';
      areaColor = '#2B2414';
    } else if (isHovered) {
      fill = '#9b8a72';
      stroke = '#c1ad90';
      strokeWidth = 1.5;
      filter = 'drop-shadow(0 0 7px rgba(201,177,140,0.35))';
    }

    const cx = x + width / 2;
    const cy = y + height / 2;

    return (
      <g
        key={id}
        className="cursor-pointer transition-all duration-200"
        onMouseEnter={() => setHoveredZoneId(id)}
        onMouseLeave={() => setHoveredZoneId(null)}
        onClick={(e) => {
          e.stopPropagation();
          handleZoneClick(id);
        }}
        filter={filter}
      >
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          className="transition-colors duration-200"
        />
        <text
          x={cx}
          y={areaText ? cy - 2 : cy + 4}
          textAnchor="middle"
          fill={textColor}
          fontSize={fontSizeNum}
          fontWeight={isSelected ? '700' : '500'}
          className="pointer-events-none select-none transition-colors duration-200"
        >
          {num}
        </text>
        {areaText && (
          <text
            x={cx}
            y={cy + 13}
            textAnchor="middle"
            fill={areaColor}
            fontSize={8.5}
            fontWeight={isSelected ? '600' : 'normal'}
            className="pointer-events-none select-none transition-colors duration-200"
          >
            {areaText}
          </text>
        )}
      </g>
    );
  };

  const padelState = getLotState('lot-padel');
  const parqueState = getLotState('lot-parque');
  const carwashState = getLotState('lot-carwash');
  const quinchoState = getLotState('lot-quincho');

  return (
    <div className="flex flex-col gap-6 w-full relative">
      {/* Top Filter & Level Control Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#161B22]/90 p-5 sm:p-6 rounded-3xl border border-white/10 shadow-2xl">
        {/* Floor Level Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#080A0D] rounded-2xl border border-white/10 overflow-x-auto custom-scrollbar">
          <button
            onClick={() => setActiveFloor('piso1')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeFloor === 'piso1'
                ? 'bg-[#FFE9A3] text-[#080A0D] shadow-lg font-bold'
                : 'text-[#F5F3EA]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Piso 1 · Locales</span>
          </button>

          <button
            onClick={() => setActiveFloor('piso2')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeFloor === 'piso2'
                ? 'bg-[#FFE9A3] text-[#080A0D] shadow-lg font-bold'
                : 'text-[#F5F3EA]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Piso 2 · Terrazas</span>
          </button>

          <button
            onClick={() => setActiveFloor('subterraneo')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeFloor === 'subterraneo'
                ? 'bg-[#FFE9A3] text-[#080A0D] shadow-lg font-bold'
                : 'text-[#F5F3EA]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Car className="w-3.5 h-3.5" />
            <span>Nivel -1 · Carwash</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
          <span className="text-[10px] uppercase font-bold text-[#FFE9A3] tracking-widest hidden sm:inline flex items-center gap-1">
            <Filter className="w-3 h-3" />
            <span>Filtrar:</span>
          </span>

          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-medium tracking-wider uppercase transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-white/20 text-white border border-white/30 font-bold'
                : 'bg-white/5 text-[#F5F3EA]/60 hover:text-white hover:bg-white/10'
            }`}
          >
            Todos
          </button>

          <button
            onClick={() => setActiveCategory('gastronomia')}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-medium tracking-wider uppercase transition-all cursor-pointer ${
              activeCategory === 'gastronomia'
                ? 'bg-[#FFE9A3] text-[#080A0D] font-bold shadow-md'
                : 'bg-white/5 text-[#F5F3EA]/60 hover:text-white hover:bg-white/10'
            }`}
          >
            Gastronomía
          </button>

          <button
            onClick={() => setActiveCategory('bienestar')}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-medium tracking-wider uppercase transition-all cursor-pointer ${
              activeCategory === 'bienestar'
                ? 'bg-[#FFE9A3] text-[#080A0D] font-bold shadow-md'
                : 'bg-white/5 text-[#F5F3EA]/60 hover:text-white hover:bg-white/10'
            }`}
          >
            Bienestar
          </button>

          <button
            onClick={() => setActiveCategory('barberia')}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-medium tracking-wider uppercase transition-all cursor-pointer ${
              activeCategory === 'barberia'
                ? 'bg-[#FFE9A3] text-[#080A0D] font-bold shadow-md'
                : 'bg-white/5 text-[#F5F3EA]/60 hover:text-white hover:bg-white/10'
            }`}
          >
            Barbería
          </button>

          <button
            onClick={() => setActiveCategory('servicios')}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-medium tracking-wider uppercase transition-all cursor-pointer ${
              activeCategory === 'servicios'
                ? 'bg-[#FFE9A3] text-[#080A0D] font-bold shadow-md'
                : 'bg-white/5 text-[#F5F3EA]/60 hover:text-white hover:bg-white/10'
            }`}
          >
            Servicios
          </button>

          <button
            onClick={() => setActiveCategory('deporte')}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-medium tracking-wider uppercase transition-all cursor-pointer ${
              activeCategory === 'deporte'
                ? 'bg-[#FFE9A3] text-[#080A0D] font-bold shadow-md'
                : 'bg-white/5 text-[#F5F3EA]/60 hover:text-white hover:bg-white/10'
            }`}
          >
            Deporte
          </button>
        </div>
      </div>

      {/* Main Full-Width Map Stage Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onClick={(e) => !isIsometric && handleBackgroundClick(e)}
        className={`relative w-full bg-[#111210] rounded-3xl border border-[#3A3932] overflow-hidden shadow-2xl transition-all duration-500 touch-pan-y ${
          isIsometric ? 'h-[580px]' : 'aspect-[1237/650] min-h-[460px]'
        }`}
      >
        {/* Action Controls Overlay */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-[#161B22]/90 backdrop-blur-md p-1.5 rounded-2xl border border-white/15 shadow-xl">
          <button
            onClick={() => setIsIsometric((prev) => !prev)}
            className={`p-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              isIsometric ? 'bg-[#FFE9A3] text-[#080A0D]' : 'text-white/80 hover:bg-white/10'
            }`}
            title="Vista 3D Maqueta"
          >
            <Box className="w-4 h-4" />
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider">3D Maqueta</span>
          </button>

          <div className="w-px h-5 bg-white/15" />

          <button
            onClick={handleZoomIn}
            className="p-2 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            title="Acercar mapa"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={handleZoomOut}
            className="p-2 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            title="Alejar mapa"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <button
            onClick={handleResetZoom}
            className="p-2 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            title="Restablecer vista"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Real 3D Blender WebGL Model View when 3D Maqueta is active */}
        {isIsometric ? (
          <Masterplan3DViewer
            onSelectBuilding={(name) => {
              if (name.includes('Starbucks')) handleZoneClick('lot-01');
              else if (name.includes('Boulangerie')) handleZoneClick('lot-02');
              else if (name.includes('Kiosclub')) handleZoneClick('lot-03');
              else if (name.includes('SemprePasta')) handleZoneClick('lot-04a');
              else if (name.includes('OveBee')) handleZoneClick('lot-05');
              else if (name.includes('ValgameDios')) handleZoneClick('lot-06');
              else if (name.includes('JavieraPoch')) handleZoneClick('lot-07');
              else if (name.includes('JoseManuel')) handleZoneClick('lot-08');
              else if (name.includes('ChiniBeauty') || name.includes('ManosPies')) handleZoneClick('lot-09');
              else if (name.includes('Barberia') || name.includes('Navi')) handleZoneClick('lot-10');
              else if (name.includes('Corredora') || name.includes('Claudia')) handleZoneClick('lot-12');
              else if (name.includes('Pilates')) handleZoneClick('lot-13');
              else if (name.includes('Ceramica') || name.includes('Fiorella')) handleZoneClick('lot-16');
              else if (name.includes('Padel')) handleZoneClick('lot-padel');
              else if (name.includes('Parque')) handleZoneClick('lot-parque');
            }}
          />
        ) : (
          /* Floor 1 SVG Map (Exact Architectural Layout 1237 x 650) */
          activeFloor === 'piso1' && (
            <div
              className="w-full h-full transition-transform duration-500 ease-out origin-center"
              style={{
                transform: `scale(${zoomLevel})`,
              }}
            >
              <svg
                viewBox="0 0 1237 650"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-full block touch-none select-none"
                aria-label="Plano interactivo Espacio Río"
                onClick={handleBackgroundClick}
              >
                {/* Access / Dimension lines */}
                <path d="M38 90V530 M42 90V530 M36 530h12 M36 90h12" fill="none" stroke="#3c3c36" strokeWidth={1} />
                <path d="M48 110h-16 M48 160h-16 M48 206h-16 M48 515h-16" fill="none" stroke="#3c3c36" strokeWidth={1} />
                <text x="18" y="142" fill="#827d73" fontSize={8} letterSpacing="1.7px" textAnchor="middle">
                  4,3 M
                </text>
                <text x="18" y="245" fill="#827d73" fontSize={8} letterSpacing="1.7px" textAnchor="middle">
                  14 M
                </text>
                <text x="18" y="408" fill="#827d73" fontSize={8} letterSpacing="1.7px" textAnchor="middle">
                  28 M
                </text>

                {/* Road corridor (Av. Pedro de Valdivia) */}
                <path d="M68 90v440" fill="none" stroke="#3c3c36" strokeWidth={1} />
                <path d="M68 185 l-5 8 M68 185 l5 8 M68 185 v18" fill="none" stroke="#776f62" strokeWidth={1.2} />
                <text x="64" y="160" transform="rotate(-90 64 160)" fill="#aaa49a" fontSize={8} letterSpacing="1.8px" textAnchor="middle">
                  ACCESO
                </text>
                <text x="64" y="325" transform="rotate(-90 64 325)" fill="#827d73" fontSize={8} letterSpacing="1.8px" textAnchor="middle">
                  AV. PEDRO DE VALDIVIA
                </text>
                <path d="M68 475 l-5 -8 M68 475 l5 -8 M68 475 v-18" fill="none" stroke="#776f62" strokeWidth={1.2} />

                {/* Upper boundary */}
                <path
                  d="M65 106 L1090 78 L1092 248 L354 251 L354 284 L613 284"
                  fill="none"
                  stroke="#4b4940"
                  strokeWidth={1}
                  strokeDasharray="7 5"
                />

                {/* Lots 02 - 04a */}
                {renderLot('lot-02', 76, 104, 93, 57, '02', '92,40 m²')}
                {renderLot('lot-03', 169, 104, 76, 57, '03', '89,71 m²')}
                {renderLot('lot-04', 245, 104, 91, 57, '04', '86,06 m²')}
                {renderLot('lot-04a', 336, 104, 39, 57, '04a', '18,3 m²', 11)}

                <text x="145" y="181" textAnchor="middle" fill="#827d73" fontSize={8} letterSpacing="1.7px">
                  VEREDA COMERCIAL
                </text>

                {/* Upper central lots (11a - 11e / Sector 11) */}
                {renderLot('lot-12', 375, 104, 54, 57, '11a', '31,08 m²', 12)}
                {renderLot('lot-13', 429, 104, 55, 57, '11b', '30,43 m²', 12)}
                {renderLot('lot-14', 484, 104, 55, 57, '11c', '30,43 m²', 12)}
                {renderLot('lot-15', 539, 104, 55, 57, '11d', '30,43 m²', 12)}
                {renderLot('lot-16', 594, 104, 49, 57, '11e', '25,18 m²', 12)}

                {/* Parking Area (57 Estacionamientos) */}
                <rect x="102" y="173" width="229" height="47" fill="#252522" stroke="#46443d" strokeWidth={1} />
                <g stroke="#45433c" strokeWidth={1}>
                  <path d="M118 174v45 M142 174v45 M166 174v45 M190 174v45 M214 174v45 M238 174v45 M262 174v45 M286 174v45 M310 174v45" />
                </g>
                <text x="216" y="202" textAnchor="middle" fill="#827d73" fontSize={8} letterSpacing="1.7px">
                  57 ESTACIONAMIENTOS
                </text>

                {/* Central Paseo */}
                <rect x="350" y="174" width="290" height="38" fill="#252522" stroke="#46443d" strokeWidth={1} />
                <circle cx="380" cy="193" r="7" fill="#354031" stroke="#68755b" strokeWidth={1} />
                <circle cx="418" cy="193" r="7" fill="#354031" stroke="#68755b" strokeWidth={1} />
                <circle cx="558" cy="193" r="7" fill="#354031" stroke="#68755b" strokeWidth={1} />
                <circle cx="598" cy="193" r="7" fill="#354031" stroke="#68755b" strokeWidth={1} />
                <circle cx="626" cy="193" r="7" fill="#354031" stroke="#68755b" strokeWidth={1} />
                <text x="490" y="198" textAnchor="middle" fill="#827d73" fontSize={8} letterSpacing="1.7px">
                  PASEO CENTRAL
                </text>

                {/* Cancha de Pádel */}
                <g
                  className="cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setHoveredZoneId('lot-padel')}
                  onMouseLeave={() => setHoveredZoneId(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoneClick('lot-padel');
                  }}
                  filter={padelState.isSelected ? 'drop-shadow(0 0 10px rgba(255,233,163,0.5))' : undefined}
                >
                  <polygon
                    points="650,101 738,94 748,246 660,252"
                    fill={padelState.isSelected ? '#FFE9A3' : padelState.isHovered ? '#514a40' : '#3c3933'}
                    stroke={padelState.isSelected ? '#FFFFFF' : padelState.isHovered ? '#c1ad90' : '#605b51'}
                    strokeWidth={padelState.isSelected ? 2 : 1}
                  />
                  <polygon
                    fill="none"
                    stroke={padelState.isSelected ? '#554a22' : '#777064'}
                    strokeWidth={1}
                    points="659,112 726,106 736,234 669,240"
                  />
                  <line x1="692" y1="109" x2="701" y2="238" stroke={padelState.isSelected ? '#554a22' : '#777064'} />
                  <text
                    x="699"
                    y="174"
                    textAnchor="middle"
                    transform="rotate(-5 699 174)"
                    fill={padelState.isSelected ? '#080A0D' : '#aaa49a'}
                    fontSize={10}
                    letterSpacing="1.8px"
                    fontWeight={padelState.isSelected ? '700' : 'normal'}
                    className="pointer-events-none select-none"
                  >
                    CANCHA
                  </text>
                  <text
                    x="703"
                    y="189"
                    textAnchor="middle"
                    transform="rotate(-5 703 189)"
                    fill={padelState.isSelected ? '#080A0D' : '#aaa49a'}
                    fontSize={10}
                    letterSpacing="1.8px"
                    fontWeight={padelState.isSelected ? '700' : 'normal'}
                    className="pointer-events-none select-none"
                  >
                    DE PÁDEL
                  </text>
                </g>

                {/* Cabins / Baños & Camarines */}
                <rect x="755" y="104" width="42" height="151" fill="#3c3933" stroke="#605b51" strokeWidth={1} />
                <text
                  x="777"
                  y="182"
                  textAnchor="middle"
                  transform="rotate(-90 777 182)"
                  fill="#827d73"
                  fontSize={8}
                  letterSpacing="1.7px"
                >
                  CABAÑAS
                </text>

                {/* Parque Entorno Natural */}
                <g
                  className="cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setHoveredZoneId('lot-parque')}
                  onMouseLeave={() => setHoveredZoneId(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoneClick('lot-parque');
                  }}
                  filter={parqueState.isSelected ? 'drop-shadow(0 0 10px rgba(255,233,163,0.5))' : undefined}
                >
                  <path
                    d="M817 96 Q950 99 1091 77 L1093 249 Q953 264 817 249Z"
                    fill={parqueState.isSelected ? '#2A3C2A' : parqueState.isHovered ? '#434038' : '#3c3933'}
                    stroke={parqueState.isSelected ? '#FFE9A3' : parqueState.isHovered ? '#c1ad90' : '#605b51'}
                    strokeWidth={parqueState.isSelected ? 2 : 1}
                  />
                  <text
                    x="953"
                    y="167"
                    textAnchor="middle"
                    fill={parqueState.isSelected ? '#FFE9A3' : '#aaa49a'}
                    fontSize={10}
                    letterSpacing="1.8px"
                    fontWeight="600"
                    className="pointer-events-none select-none"
                  >
                    PARQUE
                  </text>
                  <text
                    x="953"
                    y="185"
                    textAnchor="middle"
                    fill={parqueState.isSelected ? '#FFFFFF' : '#827d73'}
                    fontSize={8}
                    letterSpacing="1.7px"
                    className="pointer-events-none select-none"
                  >
                    ENTORNO NATURAL
                  </text>
                  <g fill="#354031" stroke="#68755b" strokeWidth={1} pointerEvents="none">
                    <circle cx="834" cy="110" r="8" />
                    <circle cx="875" cy="137" r="9" />
                    <circle cx="918" cy="115" r="5" />
                    <circle cx="970" cy="98" r="9" />
                    <circle cx="1042" cy="94" r="8" />
                    <circle cx="1076" cy="111" r="8" />
                    <circle cx="1001" cy="137" r="6" />
                    <circle cx="1063" cy="158" r="8" />
                    <circle cx="839" cy="171" r="6" />
                    <circle cx="898" cy="178" r="5" />
                    <circle cx="952" cy="159" r="8" />
                    <circle cx="1020" cy="173" r="9" />
                    <circle cx="1074" cy="199" r="6" />
                    <circle cx="864" cy="212" r="7" />
                    <circle cx="916" cy="198" r="5" />
                    <circle cx="975" cy="207" r="8" />
                    <circle cx="1034" cy="221" r="6" />
                    <circle cx="1062" cy="236" r="9" />
                  </g>
                  <path d="M824 224 Q925 173 1081 200" fill="none" stroke="#3c3c36" strokeWidth={1} pointerEvents="none" />
                </g>

                {/* Lower lots (05 - 10) */}
                {renderLot('lot-05', 346, 248, 45, 49, '05', '31,28 m²', 12)}
                {renderLot('lot-06', 391, 248, 46, 49, '06', '30,81 m²', 12)}
                {renderLot('lot-07', 437, 248, 47, 49, '07', '30,84 m²', 12)}
                {renderLot('lot-08', 484, 248, 47, 49, '08', '30,87 m²', 12)}
                {renderLot('lot-09', 531, 248, 47, 49, '09', '30,90 m²', 12)}
                {renderLot('lot-10', 578, 248, 42, 49, '10', '40,15 m²', 12)}

                {/* Lower dashed zoning boundary */}
                <path
                  d="M346 299v113 M394 299v113 M471 299v113 M558 299v-65 M620 299v-57 M817 250v224 L470 474V300"
                  fill="none"
                  stroke="#4b4940"
                  strokeWidth={1}
                  strokeDasharray="7 5"
                />
                <path
                  d="M354 299 v208 H76 v-272"
                  fill="none"
                  stroke="#4b4940"
                  strokeWidth={1}
                  strokeDasharray="7 5"
                />

                {/* Lot 01 / Starbucks & Terraza */}
                <g
                  className="cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setHoveredZoneId('lot-01')}
                  onMouseLeave={() => setHoveredZoneId(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoneClick('lot-01');
                  }}
                >
                  {/* Outer container box enclosing both Local 01 and Terraza */}
                  <rect
                    x="94"
                    y="324"
                    width="66"
                    height="160"
                    fill="#151412"
                    stroke="#48443B"
                    strokeWidth={1}
                  />

                  {/* Inner brown box of Local 01 */}
                  <rect
                    x="99"
                    y="329"
                    width="56"
                    height="126"
                    fill={
                      getLotState('lot-01').isSelected
                        ? '#FFE9A3'
                        : getLotState('lot-01').isHovered
                        ? '#9b8a72'
                        : '#796c5b'
                    }
                    stroke={
                      getLotState('lot-01').isSelected
                        ? '#FFFFFF'
                        : getLotState('lot-01').isHovered
                        ? '#c1ad90'
                        : '#8d806e'
                    }
                    strokeWidth={getLotState('lot-01').isSelected ? 2 : 1}
                    filter={
                      getLotState('lot-01').isSelected
                        ? 'drop-shadow(0 0 10px rgba(255,233,163,0.55))'
                        : undefined
                    }
                    className="transition-colors duration-200"
                  />

                  {/* Subtle divider inside Local 01 */}
                  <line
                    x1="99"
                    y1="392"
                    x2="155"
                    y2="392"
                    stroke={getLotState('lot-01').isSelected ? '#E2CA7C' : '#6B5F4F'}
                    strokeWidth={0.8}
                  />

                  {/* Lot 01 Number & Area */}
                  <text
                    x="127"
                    y="368"
                    textAnchor="middle"
                    fill={getLotState('lot-01').isSelected ? '#080A0D' : '#eee8dd'}
                    fontSize={14}
                    fontWeight={getLotState('lot-01').isSelected ? '700' : '500'}
                    className="pointer-events-none select-none"
                  >
                    01
                  </text>
                  <text
                    x="127"
                    y="383"
                    textAnchor="middle"
                    fill={getLotState('lot-01').isSelected ? '#2B2414' : '#d2c9bc'}
                    fontSize={8.5}
                    fontWeight={getLotState('lot-01').isSelected ? '600' : 'normal'}
                    className="pointer-events-none select-none"
                  >
                    176,11 m²
                  </text>

                  {/* Terraza label at bottom of outer frame */}
                  <text
                    x="127"
                    y="473"
                    textAnchor="middle"
                    fill="#827d73"
                    fontSize={8}
                    letterSpacing="1.7px"
                    className="pointer-events-none select-none"
                  >
                    TERRAZA
                  </text>
                </g>

                {/* Left Parking Bay (10 stalls, aligned with Local 01 and Central Feature) */}
                <rect x="165" y="324" width="31" height="160" fill="#252522" stroke="#46443d" strokeWidth={1} />
                <g stroke="#44433d" strokeWidth={1}>
                  <path d="M165 340h31 M165 356h31 M165 372h31 M165 388h31 M165 404h31 M165 420h31 M165 436h31 M165 452h31 M165 468h31" />
                </g>

                {/* Central Feature with 3 Triangles (aligned from y=324 to y=484) */}
                <rect x="228" y="324" width="80" height="160" fill="#3c3933" stroke="#605b51" strokeWidth={1} />
                <path
                  d="M268 335l15 26h-30z M268 382l15 26h-30z M268 429l15 26h-30z"
                  fill="#514a40"
                  stroke="#6d6558"
                  strokeWidth={1}
                />

                {/* Bicicleteros Badge (aligned with middle triangle) */}
                <rect
                  x="302"
                  y="394"
                  width="78"
                  height="17"
                  rx="3"
                  fill="#252522"
                  stroke="#776f62"
                  strokeWidth={1}
                />
                <text
                  x="341"
                  y="406"
                  textAnchor="middle"
                  fill="#aaa49a"
                  fontSize={7.5}
                  letterSpacing="1.7px"
                  className="select-none pointer-events-none"
                >
                  BICICLETEROS
                </text>

                {/* Right Parking / Bicycle Stalls directly below Bicicleteros */}
                <rect x="326" y="416" width="30" height="96" fill="#252522" stroke="#46443d" strokeWidth={1} />
                <g stroke="#44433d" strokeWidth={1}>
                  <path d="M326 432h30 M326 448h30 M326 464h30 M326 480h30 M326 496h30" />
                </g>

                {/* Carwash (positioned below the central block and left parking, with clean margin) */}
                <g
                  className="cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setHoveredZoneId('lot-carwash')}
                  onMouseLeave={() => setHoveredZoneId(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoneClick('lot-carwash');
                  }}
                  filter={carwashState.isSelected ? 'drop-shadow(0 0 10px rgba(255,233,163,0.5))' : undefined}
                >
                  <rect
                    x="176"
                    y="512"
                    width="112"
                    height="50"
                    fill={carwashState.isSelected ? '#FFE9A3' : carwashState.isHovered ? '#60584b' : '#3c3933'}
                    stroke={carwashState.isSelected ? '#FFFFFF' : carwashState.isHovered ? '#c1ad90' : '#605b51'}
                    strokeWidth={carwashState.isSelected ? 2 : 1}
                  />
                  <line x1="232" y1="512" x2="232" y2="562" stroke={carwashState.isSelected ? '#BFA253' : '#555247'} strokeWidth={1} />
                  {/* Wash bay stripes at bottom */}
                  <line x1="184" y1="547" x2="224" y2="547" stroke={carwashState.isSelected ? '#BFA253' : '#4E493F'} strokeWidth={0.8} />
                  <line x1="184" y1="552" x2="224" y2="552" stroke={carwashState.isSelected ? '#BFA253' : '#4E493F'} strokeWidth={0.8} />
                  <line x1="240" y1="547" x2="280" y2="547" stroke={carwashState.isSelected ? '#BFA253' : '#4E493F'} strokeWidth={0.8} />
                  <line x1="240" y1="552" x2="280" y2="552" stroke={carwashState.isSelected ? '#BFA253' : '#4E493F'} strokeWidth={0.8} />
                  <text
                    x="232"
                    y="534"
                    textAnchor="middle"
                    fill={carwashState.isSelected ? '#080A0D' : '#aaa49a'}
                    fontSize={10}
                    letterSpacing="1.8px"
                    fontWeight={carwashState.isSelected ? '700' : 'normal'}
                    className="pointer-events-none select-none"
                  >
                    CARWASH
                  </text>
                </g>

                {/* Interior Plaza, Quincho & Kitchenette */}
                <g
                  className="cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setHoveredZoneId('lot-quincho')}
                  onMouseLeave={() => setHoveredZoneId(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoneClick('lot-quincho');
                  }}
                  filter={quinchoState.isSelected ? 'drop-shadow(0 0 10px rgba(255,233,163,0.5))' : undefined}
                >
                  <path d="M472 301 H818 V474 H472 Z" fill="#3c3933" stroke="#605b51" strokeWidth={1} pointerEvents="none" />
                  <rect
                    x="513"
                    y="333"
                    width="86"
                    height="87"
                    fill={quinchoState.isSelected ? '#FFE9A3' : quinchoState.isHovered ? '#60584b' : '#514a40'}
                    stroke={quinchoState.isSelected ? '#FFFFFF' : quinchoState.isHovered ? '#c1ad90' : '#6d6558'}
                    strokeWidth={quinchoState.isSelected ? 2 : 1}
                  />
                  <text
                    x="556"
                    y="348"
                    textAnchor="middle"
                    fill={quinchoState.isSelected ? '#332B1E' : '#827d73'}
                    fontSize={8}
                    letterSpacing="1.7px"
                    className="pointer-events-none select-none"
                  >
                    KITCHENETTE
                  </text>
                  <text
                    x="556"
                    y="384"
                    textAnchor="middle"
                    fill={quinchoState.isSelected ? '#080A0D' : '#aaa49a'}
                    fontSize={10}
                    letterSpacing="1.8px"
                    fontWeight={quinchoState.isSelected ? '700' : 'normal'}
                    className="pointer-events-none select-none"
                  >
                    QUINCHO
                  </text>
                  <text
                    x="646"
                    y="430"
                    textAnchor="middle"
                    fill="#aaa49a"
                    fontSize={10}
                    letterSpacing="1.8px"
                    className="pointer-events-none select-none"
                  >
                    PLAZA INTERIOR
                  </text>
                  <g fill="#354031" stroke="#68755b" strokeWidth={1} pointerEvents="none">
                    <circle cx="615" cy="357" r="5" />
                    <circle cx="665" cy="355" r="6" />
                    <circle cx="727" cy="365" r="8" />
                    <circle cx="493" cy="390" r="8" />
                    <circle cx="503" cy="419" r="8" />
                    <circle cx="546" cy="432" r="6" />
                    <circle cx="591" cy="447" r="8" />
                    <circle cx="631" cy="437" r="6" />
                    <circle cx="759" cy="421" r="7" />
                    <circle cx="764" cy="459" r="6" />
                    <circle cx="684" cy="452" r="5" />
                  </g>
                  <path d="M488 436 Q620 391 771 405" fill="none" stroke="#3c3c36" strokeWidth={1} pointerEvents="none" />
                </g>

                {/* Architectural Scale & Footnote Legend */}
                <line x1="66" y1="579" x2="1190" y2="579" stroke="#2e2f2b" strokeWidth={1} />
                <text x="66" y="596" fill="#827d73" fontSize={8} letterSpacing="1.7px">
                  ESPACIO RÍO · EMPLAZAMIENTO PISO 1 · SUPERFICIES
                </text>
                <text x="66" y="610" fill="#827d73" fontSize={8} letterSpacing="1.7px">
                  PLANO ARQ-002 · B02 · ABRIL 2026 · ÁREA DENTRO DE DESLINDE
                </text>

                {/* Compass Rose */}
                <text x="1175" y="596" textAnchor="end" fill="#827d73" fontSize={8} letterSpacing="1.7px">
                  N
                </text>
                <circle cx="1175" cy="614" r="17" fill="none" stroke="#353630" strokeWidth={1} />
                <path d="M1175 602l-5 22 5-4 5 4z" fill="#7b806f" />

                {/* Graphic Scale */}
                <line x1="990" y1="602" x2="1090" y2="602" stroke="#55544c" strokeWidth={1} />
                <line x1="990" y1="598" x2="990" y2="606" stroke="#55544c" strokeWidth={1} />
                <line x1="1090" y1="598" x2="1090" y2="606" stroke="#55544c" strokeWidth={1} />
                <text x="990" y="615" fill="#827d73" fontSize={8} letterSpacing="1.7px">
                  0
                </text>
                <text x="1088" y="615" textAnchor="end" fill="#827d73" fontSize={8} letterSpacing="1.7px">
                  50 M
                </text>
              </svg>
            </div>
          )
        )}

        {/* Floor 2 View */}
        {activeFloor === 'piso2' && (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#080A0D]/90">
            <div className="w-16 h-16 rounded-full bg-[#FFE9A3]/10 border border-[#FFE9A3]/30 flex items-center justify-center text-[#FFE9A3] mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFE9A3] mb-1">
              Planta Nivel 2
            </span>
            <h4 className="font-display text-2xl text-white font-normal mb-3">
              Terrazas Mirador & Quincho Corporativo
            </h4>
            <button
              onClick={() => handleZoneClick('lot-quincho')}
              className="bg-[#FFE9A3] text-[#080A0D] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer shadow-lg"
            >
              Ver Ficha Quincho
            </button>
          </div>
        )}

        {/* Subterraneo View */}
        {activeFloor === 'subterraneo' && (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#080A0D]/90">
            <div className="w-16 h-16 rounded-full bg-[#FFE9A3]/10 border border-[#FFE9A3]/30 flex items-center justify-center text-[#FFE9A3] mb-4">
              <Car className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFE9A3] mb-1">
              Nivel -1 Estacionamientos
            </span>
            <h4 className="font-display text-2xl text-white font-normal mb-3">
              Estacionamientos & Carwash Detailing
            </h4>
            <button
              onClick={() => handleZoneClick('lot-carwash')}
              className="bg-[#FFE9A3] text-[#080A0D] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer shadow-lg"
            >
              Ver Ficha Carwash
            </button>
          </div>
        )}

        {/* Floating Tooltip on Hover */}
        <AnimatePresence>
          {activeHoverZone && activeFloor === 'piso1' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              style={{
                left: tooltipPos.x,
                top: tooltipPos.y,
              }}
              className="absolute z-30 w-60 bg-[#161B22]/95 backdrop-blur-md p-4 rounded-2xl border border-[#FFE9A3]/40 shadow-2xl pointer-events-none"
            >
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-[#FFE9A3] uppercase tracking-wider">
                  {activeHoverZone.categoryLabel}
                </span>
                <h4 className="text-sm font-bold text-white leading-tight">
                  {activeHoverZone.title}
                </h4>

                <div className="grid grid-cols-2 gap-2 pt-2 mt-1 border-t border-white/10 text-[11px]">
                  <div>
                    <span className="text-[#F5F3EA]/60 block text-[9px] uppercase">Superficie</span>
                    <span className="text-white font-semibold">{activeHoverZone.area}</span>
                  </div>
                  <div>
                    <span className="text-[#F5F3EA]/60 block text-[9px] uppercase">Nivel</span>
                    <span className="text-white font-semibold">{activeHoverZone.nivel}</span>
                  </div>
                </div>

                <p className="text-[10px] text-[#F5F3EA]/80 pt-1 font-light">
                  {activeHoverZone.uso}
                </p>

                <span className="text-[9px] font-bold text-[#FFE9A3] uppercase tracking-widest pt-1 flex items-center gap-1">
                  <span>✦ Clic para ver ficha completa</span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide-Over Side Drawer */}
        <AnimatePresence>
          {activeDrawerZone && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="absolute top-0 right-0 z-40 w-full sm:w-[420px] h-full bg-[#161B22]/98 backdrop-blur-2xl border-l border-white/20 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#FFE9A3]/10 border border-[#FFE9A3]/30 text-[#FFE9A3] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {activeDrawerZone.categoryLabel}
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{activeDrawerZone.statusLabel}</span>
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveDrawerZone(null)}
                    className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                    title="Cerrar panel lateral"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Title & Description */}
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#FFE9A3] tracking-widest block mb-1">
                    Unidad / Local
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-white font-normal leading-tight mb-2">
                    {activeDrawerZone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F5F3EA]/80 font-light leading-relaxed">
                    {activeDrawerZone.uso}
                  </p>
                </div>

                {/* Render 3D Image Preview */}
                {activeDrawerZone.image && (
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#080A0D] border border-white/15 shadow-lg group">
                    <Image
                      src={activeDrawerZone.image}
                      alt={activeDrawerZone.title}
                      fill
                      sizes="400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#080A0D]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-[#FFE9A3] uppercase tracking-wider border border-[#FFE9A3]/30">
                      Vista Interior
                    </div>
                  </div>
                )}

                {/* Specifications Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#080A0D]/60 border border-white/10 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#FFE9A3] block mb-0.5">
                      Superficie
                    </span>
                    <span className="text-sm font-bold text-white">{activeDrawerZone.area}</span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#FFE9A3] block mb-0.5">
                      Ubicación
                    </span>
                    <span className="text-sm font-bold text-white">{activeDrawerZone.nivel}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFE9A3]">
                    Ventajas del espacio
                  </span>
                  <div className="flex flex-col gap-2 text-xs text-[#F5F3EA]/80 font-light">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FFE9A3] flex-shrink-0" />
                      <span>Ubicación privilegiada en paseo Espacio Río.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FFE9A3] flex-shrink-0" />
                      <span>Acceso directo a estacionamientos de clientes.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FFE9A3] flex-shrink-0" />
                      <span>Conexión directa con Av. Pedro de Valdivia.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <a
                  href="#contacto"
                  onClick={() => setActiveDrawerZone(null)}
                  className="w-full bg-[#FFE9A3] text-[#080A0D] px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer shadow-lg flex items-center justify-center gap-2 text-center"
                >
                  <Store className="w-4 h-4" />
                  <span>Consultar por este espacio</span>
                </a>

                {activeDrawerZone.slug && (
                  <button
                    onClick={() => {
                      if (onSelectLocal && activeDrawerZone.slug) {
                        onSelectLocal(activeDrawerZone.slug);
                      }
                      setActiveDrawerZone(null);
                    }}
                    className="w-full bg-white/10 border border-white/20 text-white px-5 py-3 rounded-2xl text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Ver Galería y Detalles del Local</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
