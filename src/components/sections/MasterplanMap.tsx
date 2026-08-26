'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  MapPin,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Box,
  CheckCircle,
  ExternalLink,
  Clock,
  Store,
  X,
  ChevronRight,
  ShieldCheck,
  Building2,
  Car,
  Filter,
  ArrowRight
} from 'lucide-react';
import { tenantsData } from '@/data/tenants';
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
  'zone-a1': {
    id: 'zone-a1',
    title: 'Starbucks Drive-Thru',
    category: 'gastronomia',
    categoryLabel: 'Cafetería & Drive-Thru',
    area: '471,00 m²',
    nivel: 'Piso 1',
    uso: 'Cafetería Starbucks con atención al auto y salón de degustación',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'starbucks-drive-thru',
    ig: '@starbucks_chile',
    web: 'starbucks.cl',
    image: '/images/nuevos-locales/local-1-starbucks-a.png',
  },
  'zone-b1': {
    id: 'zone-b1',
    title: 'Boulangerie',
    category: 'gastronomia',
    categoryLabel: 'Panadería & Pastelería',
    area: '162,59 m²',
    nivel: 'Piso 1',
    uso: 'Panadería artesanal, bollería y cafetería de especialidad',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'boulangerie',
    image: '/images/nuevos-locales/local-3-boulangerie.png',
  },
  'zone-b2': {
    id: 'zone-b2',
    title: 'Pilates Studio',
    category: 'bienestar',
    categoryLabel: 'Bienestar & Salud',
    area: '162,59 m²',
    nivel: 'Piso 1',
    uso: 'Estudio especializado de pilates y entrenamiento funcional',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'pilates-studio',
    image: '/images/nuevos-locales/local-2-pilates.png',
  },
  'zone-b3': {
    id: 'zone-b3',
    title: 'Gimnasio Boutique',
    category: 'deporte',
    categoryLabel: 'Fitness & Deporte',
    area: '162,59 m²',
    nivel: 'Piso 1',
    uso: 'Gimnasio boutique con equipamiento de alta gama',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'gym-boutique',
    image: '/images/nuevos-locales/local-11-gym.png',
  },
  'zone-b4': {
    id: 'zone-b4',
    title: 'Sempre Pasta',
    category: 'gastronomia',
    categoryLabel: 'Restaurante & Trattoria',
    area: '130,00 m²',
    nivel: 'Piso 1',
    uso: 'Restaurante italiano especializado en pastas frescas artesanas',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'sempre-pasta',
    image: '/images/nuevos-locales/local-4-sempre-pasta.png',
  },
  'zone-c1': {
    id: 'zone-c1',
    title: 'La Ove Bee',
    category: 'servicios',
    categoryLabel: 'Moda & Boutique Infantil',
    area: '60,00 m²',
    nivel: 'Piso 1',
    uso: 'Boutique de vestuario infantil y regalos boutique',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'la-ove-bee',
    image: '/images/nuevos-locales/local-5-la-ove-bee.png',
  },
  'zone-c2': {
    id: 'zone-c2',
    title: 'Válgame Dios',
    category: 'gastronomia',
    categoryLabel: 'Restaurante & Bar',
    area: '60,00 m²',
    nivel: 'Piso 1',
    uso: 'Gastronomía de autor, picoteo y coctelería',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'valgame-dios',
    image: '/images/nuevos-locales/local-8-valgame-dios.png',
  },
  'zone-c3': {
    id: 'zone-c3',
    title: 'Cerámica Gres',
    category: 'servicios',
    categoryLabel: 'Arte & Decoración',
    area: '60,00 m²',
    nivel: 'Piso 1',
    uso: 'Taller de cerámica gres, utilitarios y diseño de interiores',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'ceramica-gres',
    image: '/images/nuevos-locales/local-9-ceramica-gres.png',
  },
  'zone-c4': {
    id: 'zone-c4',
    title: 'Corredora de Propiedades',
    category: 'servicios',
    categoryLabel: 'Servicios Inmobiliarios',
    area: '60,00 m²',
    nivel: 'Piso 1',
    uso: 'Gestión y asesoría inmobiliaria de proyectos residenciales',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'corredora-propiedades',
    image: '/images/nuevos-locales/local-10-corredora.png',
  },
  'zone-c5': {
    id: 'zone-c5',
    title: 'Manos & Pies',
    category: 'bienestar',
    categoryLabel: 'Belleza & Nail Spa',
    area: '60,00 m²',
    nivel: 'Piso 1',
    uso: 'Centro de cuidado estético, manicura y pedicura profesional',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'manos-pies',
    image: '/images/nuevos-locales/local-7-manos-pies.png',
  },
  'zone-c6': {
    id: 'zone-c6',
    title: 'Barbería Tradicional',
    category: 'barberia',
    categoryLabel: 'Barbería & Grooming',
    area: '60,00 m²',
    nivel: 'Piso 1',
    uso: 'Corte de cabello masculino, barbería y tratamiento capilar',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'barberia',
    image: '/images/nuevos-locales/local-6-barberia.png',
  },
  'zone-c-n1': {
    id: 'zone-c-n1',
    title: 'Canchas de Pádel (Pista 1)',
    category: 'deporte',
    categoryLabel: 'Arriendo de Canchas & Pádel',
    area: '1.120,00 m²',
    nivel: 'Piso 1',
    uso: 'Cancha deportiva panorámica con césped sintético e iluminación',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'canchas-padel',
    image: '/images/nuevos-locales/canchas-padel.png',
  },
  'zone-c-n2': {
    id: 'zone-c-n2',
    title: 'Canchas de Pádel (Pista 2)',
    category: 'deporte',
    categoryLabel: 'Arriendo de Canchas & Pádel',
    area: '1.120,00 m²',
    nivel: 'Piso 1',
    uso: 'Cancha deportiva panorámica con iluminación profesional',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'canchas-padel',
    image: '/images/nuevos-locales/canchas-padel.png',
  },
  'zone-green': {
    id: 'zone-green',
    title: 'Área Verde & Parque Botánico',
    category: 'general',
    categoryLabel: 'Paisajismo & Naturaleza',
    area: '2.840,00 m²',
    nivel: 'Piso 1 Exterior',
    uso: 'Senderos peatonales, plazas de descanso y arborización nativa',
    status: 'operativo',
    statusLabel: 'Uso Público',
  },
  'zone-carwash': {
    id: 'zone-carwash',
    title: 'Carwash & Detailing',
    category: 'servicios',
    categoryLabel: 'Servicios Automotrices',
    area: '150,00 m²',
    nivel: 'Piso 1 Estacionamientos',
    uso: 'Lavado ecológico y detallado vehicular',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'carwash-premium',
    image: '/images/nuevos-locales/carwash.png',
  },
  'zone-quincho': {
    id: 'zone-quincho',
    title: 'Quincho Corporativo',
    category: 'servicios',
    categoryLabel: 'Eventos & Networking',
    area: '200,00 m²',
    nivel: 'Piso 1 / Terrazas',
    uso: 'Espacio equipado para eventos privados y reuniones corporativas',
    status: 'operativo',
    statusLabel: 'En Operación',
    slug: 'quincho-corporativo',
    image: '/images/nuevos-locales/quincho-corporativo.png',
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
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
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
    // If clicking outside SVG shapes (on the SVG background), close drawer
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
    return zone && zone.category === activeCategory;
  };

  const getFillColor = (zoneId: string) => {
    const zone = ZONES_REGISTRY[zoneId];
    const isSelected = activeDrawerZone?.id === zoneId || (zone?.slug && zone.slug === selectedSlug);
    const isHovered = hoveredZoneId === zoneId;
    const isMatch = isZoneFiltered(zoneId);

    if (!isMatch) return '#1A1E24';

    if (isSelected) return '#FFE9A3';
    if (isHovered) return '#F5D68E';

    if (zoneId.startsWith('zone-b')) return '#2C3844';
    if (zoneId === 'zone-a1') return '#1E3E34';
    if (zoneId.startsWith('zone-c-n')) return '#1B354C';
    if (zoneId.startsWith('zone-c')) return '#3B2D4A';
    if (zoneId === 'zone-green') return '#1A3323';

    return '#222831';
  };

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
        className={`relative w-full bg-[#0D1117] rounded-3xl border border-white/15 overflow-hidden shadow-2xl transition-all duration-500 touch-pan-y ${
          isIsometric ? 'h-[580px]' : 'aspect-[1150/560] min-h-[420px]'
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
              // Match Blender mesh name to zone
              if (name.includes('Starbucks')) handleZoneClick('zone-a1');
              else if (name.includes('Boulangerie')) handleZoneClick('zone-b1');
              else if (name.includes('Pilates')) handleZoneClick('zone-b2');
              else if (name.includes('Gym')) handleZoneClick('zone-b3');
              else if (name.includes('SemprePasta')) handleZoneClick('zone-b4');
              else if (name.includes('OveBee')) handleZoneClick('zone-c1');
              else if (name.includes('ValgameDios')) handleZoneClick('zone-c2');
              else if (name.includes('Ceramica')) handleZoneClick('zone-c3');
              else if (name.includes('Corredora')) handleZoneClick('zone-c4');
              else if (name.includes('ManosPies')) handleZoneClick('zone-c5');
              else if (name.includes('Barberia')) handleZoneClick('zone-c6');
              else if (name.includes('Padel')) handleZoneClick('zone-c-n1');
              else if (name.includes('Parque')) handleZoneClick('zone-green');
            }}
          />
        ) : (
          /* Floor 1 SVG Map (Full-Width Original 1150 x 560 Aspect Ratio) */
          activeFloor === 'piso1' && (
            <div
              className="w-full h-full transition-transform duration-500 ease-out origin-center"
              style={{
                transform: `scale(${zoomLevel})`,
              }}
            >
            <svg
              viewBox="0 0 1150 560"
              className="w-full h-full block touch-none select-none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleBackgroundClick}
            >
              <defs>
                <pattern id="mp-ph" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                  <line x1="4" y1="0" x2="4" y2="8" stroke="#333D4B" strokeWidth="0.8" opacity="0.6" />
                </pattern>

                <symbol id="mp-tree" viewBox="-10 -10 20 20">
                  <circle r="8" fill="#2E4A35" stroke="#4A7553" strokeWidth="1" />
                  <circle r="4.5" fill="#426B4B" opacity="0.7" />
                  <circle r="2" fill="#5D8C67" opacity="0.6" />
                </symbol>
              </defs>

              {/* Road Access (Av. Pedro de Valdivia) */}
              <rect x="96" y="92" width="64" height="402" fill="#161B22" stroke="#2D3748" strokeWidth="1" />
              <line x1="96" y1="92" x2="96" y2="494" stroke="#FFE9A3" strokeWidth="1.5" strokeDasharray="6,6" opacity="0.7" />
              <text
                transform="translate(76,295) rotate(-90)"
                fill="#FFE9A3"
                fontSize="10"
                fontWeight="600"
                letterSpacing="0.12em"
                textAnchor="middle"
              >
                AV. PEDRO DE VALDIVIA
              </text>

              {/* LAYER 1 — Green Park (Right) */}
              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-green')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-green')}
                opacity={isZoneFiltered('zone-green') ? 1 : 0.25}
              >
                <path
                  d="M 870,93 L 1110,104 L 1110,492 L 870,492 Z"
                  fill={getFillColor('zone-green')}
                  stroke={hoveredZoneId === 'zone-green' ? '#FFE9A3' : '#2E4A35'}
                  strokeWidth={hoveredZoneId === 'zone-green' ? 2 : 1.2}
                />
              </g>

              {/* Trees Grid */}
              <g pointerEvents="none" opacity={isZoneFiltered('zone-green') ? 0.85 : 0.2}>
                <use href="#mp-tree" x="900" y="138" width="28" height="28" />
                <use href="#mp-tree" x="950" y="155" width="26" height="26" />
                <use href="#mp-tree" x="1000" y="136" width="28" height="28" />
                <use href="#mp-tree" x="1050" y="152" width="28" height="28" />
                <use href="#mp-tree" x="900" y="210" width="28" height="28" />
                <use href="#mp-tree" x="950" y="232" width="30" height="30" />
                <use href="#mp-tree" x="1000" y="208" width="28" height="28" />
                <use href="#mp-tree" x="1050" y="228" width="26" height="26" />
                <use href="#mp-tree" x="900" y="290" width="28" height="28" />
                <use href="#mp-tree" x="950" y="310" width="26" height="26" />
                <use href="#mp-tree" x="1000" y="288" width="30" height="30" />
                <use href="#mp-tree" x="1050" y="308" width="28" height="28" />
                <use href="#mp-tree" x="900" y="370" width="26" height="26" />
                <use href="#mp-tree" x="950" y="392" width="28" height="28" />
                <use href="#mp-tree" x="1000" y="368" width="30" height="30" />
              </g>

              {/* LAYER 2 — Parking Bays */}
              <rect x="160" y="218" width="500" height="48" fill="#1A202C" stroke="#2D3748" strokeWidth="0.8" />
              <rect x="490" y="346" width="380" height="146" fill="#1A202C" stroke="#2D3748" strokeWidth="0.8" />

              {/* LAYER 3 — Canchas Deportivas */}
              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-c-n1')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-c-n1')}
                opacity={isZoneFiltered('zone-c-n1') ? 1 : 0.25}
              >
                <rect
                  x="660"
                  y="105"
                  width="108"
                  height="161"
                  fill={getFillColor('zone-c-n1')}
                  stroke={hoveredZoneId === 'zone-c-n1' ? '#FFE9A3' : '#4A5568'}
                  strokeWidth={hoveredZoneId === 'zone-c-n1' ? 2 : 1.2}
                />
                <line x1="660" y1="186" x2="768" y2="186" stroke="#FFE9A3" strokeWidth="0.9" opacity="0.6" />
                <line x1="714" y1="105" x2="714" y2="266" stroke="#FFE9A3" strokeWidth="0.7" opacity="0.4" />
              </g>

              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-c-n2')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-c-n2')}
                opacity={isZoneFiltered('zone-c-n2') ? 1 : 0.25}
              >
                <rect
                  x="772"
                  y="105"
                  width="100"
                  height="161"
                  fill={getFillColor('zone-c-n2')}
                  stroke={hoveredZoneId === 'zone-c-n2' ? '#FFE9A3' : '#4A5568'}
                  strokeWidth={hoveredZoneId === 'zone-c-n2' ? 2 : 1.2}
                />
                <line x1="772" y1="186" x2="872" y2="186" stroke="#FFE9A3" strokeWidth="0.9" opacity="0.6" />
                <line x1="822" y1="105" x2="822" y2="266" stroke="#FFE9A3" strokeWidth="0.7" opacity="0.4" />
              </g>

              {/* LAYER 4 — Bloque B (Locales Norte B1 - B4) */}
              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-b1')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-b1')}
                opacity={isZoneFiltered('zone-b1') ? 1 : 0.25}
              >
                <rect
                  x="160"
                  y="108"
                  width="138"
                  height="110"
                  fill={getFillColor('zone-b1')}
                  stroke={hoveredZoneId === 'zone-b1' ? '#FFE9A3' : '#4A5568'}
                  strokeWidth={hoveredZoneId === 'zone-b1' ? 2 : 1.2}
                />
                <text x="229" y="156" fill="#F5F3EA" fontSize="13" fontWeight="bold" textAnchor="middle">B1</text>
                <text x="229" y="174" fill="#FFE9A3" fontSize="9" textAnchor="middle">Boulangerie</text>
              </g>

              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-b2')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-b2')}
                opacity={isZoneFiltered('zone-b2') ? 1 : 0.25}
              >
                <rect
                  x="298"
                  y="108"
                  width="138"
                  height="110"
                  fill={getFillColor('zone-b2')}
                  stroke={hoveredZoneId === 'zone-b2' ? '#FFE9A3' : '#4A5568'}
                  strokeWidth={hoveredZoneId === 'zone-b2' ? 2 : 1.2}
                />
                <text x="367" y="156" fill="#F5F3EA" fontSize="13" fontWeight="bold" textAnchor="middle">B2</text>
                <text x="367" y="174" fill="#FFE9A3" fontSize="9" textAnchor="middle">Pilates</text>
              </g>

              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-b3')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-b3')}
                opacity={isZoneFiltered('zone-b3') ? 1 : 0.25}
              >
                <rect
                  x="436"
                  y="108"
                  width="138"
                  height="110"
                  fill={getFillColor('zone-b3')}
                  stroke={hoveredZoneId === 'zone-b3' ? '#FFE9A3' : '#4A5568'}
                  strokeWidth={hoveredZoneId === 'zone-b3' ? 2 : 1.2}
                />
                <text x="505" y="156" fill="#F5F3EA" fontSize="13" fontWeight="bold" textAnchor="middle">B3</text>
                <text x="505" y="174" fill="#FFE9A3" fontSize="9" textAnchor="middle">Gym Boutique</text>
              </g>

              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-b4')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-b4')}
                opacity={isZoneFiltered('zone-b4') ? 1 : 0.25}
              >
                <rect
                  x="574"
                  y="108"
                  width="86"
                  height="110"
                  fill={getFillColor('zone-b4')}
                  stroke={hoveredZoneId === 'zone-b4' ? '#FFE9A3' : '#4A5568'}
                  strokeWidth={hoveredZoneId === 'zone-b4' ? 2 : 1.2}
                />
                <text x="617" y="156" fill="#F5F3EA" fontSize="13" fontWeight="bold" textAnchor="middle">B4</text>
                <text x="617" y="174" fill="#FFE9A3" fontSize="9" textAnchor="middle">Sempre Pasta</text>
              </g>

              {/* LAYER 5 — Bloque C (Locales C1 - C6) */}
              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-c1')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-c1')}
                opacity={isZoneFiltered('zone-c1') ? 1 : 0.25}
              >
                <rect
                  x="492"
                  y="266"
                  width="63"
                  height="80"
                  fill={getFillColor('zone-c1')}
                  stroke={hoveredZoneId === 'zone-c1' ? '#FFE9A3' : '#4A5568'}
                  strokeWidth={hoveredZoneId === 'zone-c1' ? 2 : 1.2}
                />
                <text x="523" y="295" fill="#F5F3EA" fontSize="10" fontWeight="bold" textAnchor="middle">C1</text>
                <text transform="rotate(-90,523,322)" x="523" y="322" fill="#FFE9A3" fontSize="7.5" textAnchor="middle">Ove Bee</text>
              </g>

              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-c2')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-c2')}
                opacity={isZoneFiltered('zone-c2') ? 1 : 0.25}
              >
                <rect
                  x="555"
                  y="266"
                  width="63"
                  height="80"
                  fill={getFillColor('zone-c2')}
                  stroke={hoveredZoneId === 'zone-c2' ? '#FFE9A3' : '#4A5568'}
                  strokeWidth={hoveredZoneId === 'zone-c2' ? 2 : 1.2}
                />
                <text x="586" y="295" fill="#F5F3EA" fontSize="10" fontWeight="bold" textAnchor="middle">C2</text>
                <text transform="rotate(-90,586,322)" x="586" y="322" fill="#FFE9A3" fontSize="7.5" textAnchor="middle">Válgame Dios</text>
              </g>

              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-c3')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-c3')}
                opacity={isZoneFiltered('zone-c3') ? 1 : 0.25}
              >
                <rect
                  x="618"
                  y="266"
                  width="63"
                  height="80"
                  fill={getFillColor('zone-c3')}
                  stroke={hoveredZoneId === 'zone-c3' ? '#FFE9A3' : '#4A5568'}
                  strokeWidth={hoveredZoneId === 'zone-c3' ? 2 : 1.2}
                />
                <text x="649" y="295" fill="#F5F3EA" fontSize="10" fontWeight="bold" textAnchor="middle">C3</text>
                <text transform="rotate(-90,649,322)" x="649" y="322" fill="#FFE9A3" fontSize="7.5" textAnchor="middle">Cerámica</text>
              </g>

              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-c4')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-c4')}
                opacity={isZoneFiltered('zone-c4') ? 1 : 0.25}
              >
                <rect
                  x="681"
                  y="266"
                  width="63"
                  height="80"
                  fill={getFillColor('zone-c4')}
                  stroke={hoveredZoneId === 'zone-c4' ? '#FFE9A3' : '#4A5568'}
                  strokeWidth={hoveredZoneId === 'zone-c4' ? 2 : 1.2}
                />
                <text x="712" y="295" fill="#F5F3EA" fontSize="10" fontWeight="bold" textAnchor="middle">C4</text>
                <text transform="rotate(-90,712,322)" x="712" y="322" fill="#FFE9A3" fontSize="7.5" textAnchor="middle">Corredora</text>
              </g>

              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-c5')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-c5')}
                opacity={isZoneFiltered('zone-c5') ? 1 : 0.25}
              >
                <rect
                  x="744"
                  y="266"
                  width="63"
                  height="80"
                  fill={getFillColor('zone-c5')}
                  stroke={hoveredZoneId === 'zone-c5' ? '#FFE9A3' : '#4A5568'}
                  strokeWidth={hoveredZoneId === 'zone-c5' ? 2 : 1.2}
                />
                <text x="775" y="295" fill="#F5F3EA" fontSize="10" fontWeight="bold" textAnchor="middle">C5</text>
                <text transform="rotate(-90,775,322)" x="775" y="322" fill="#FFE9A3" fontSize="7.5" textAnchor="middle">Manos/Pies</text>
              </g>

              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-c6')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-c6')}
                opacity={isZoneFiltered('zone-c6') ? 1 : 0.25}
              >
                <rect
                  x="807"
                  y="266"
                  width="63"
                  height="80"
                  fill={getFillColor('zone-c6')}
                  stroke={hoveredZoneId === 'zone-c6' ? '#FFE9A3' : '#4A5568'}
                  strokeWidth={hoveredZoneId === 'zone-c6' ? 2 : 1.2}
                />
                <text x="838" y="295" fill="#F5F3EA" fontSize="10" fontWeight="bold" textAnchor="middle">C6</text>
                <text transform="rotate(-90,838,322)" x="838" y="322" fill="#FFE9A3" fontSize="7.5" textAnchor="middle">Barbería</text>
              </g>

              {/* LAYER 6 — Bloque A1 (Starbucks) */}
              <g
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredZoneId('zone-a1')}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => handleZoneClick('zone-a1')}
                opacity={isZoneFiltered('zone-a1') ? 1 : 0.25}
              >
                <rect
                  x="160"
                  y="346"
                  width="200"
                  height="146"
                  fill={getFillColor('zone-a1')}
                  stroke={hoveredZoneId === 'zone-a1' ? '#FFE9A3' : '#4A5568'}
                  strokeWidth={hoveredZoneId === 'zone-a1' ? 2 : 1.2}
                />
                <text x="260" y="414" fill="#F5F3EA" fontSize="15" fontWeight="bold" textAnchor="middle">A1</text>
                <text x="260" y="434" fill="#FFE9A3" fontSize="11" fontWeight="600" textAnchor="middle">Starbucks Drive-Thru</text>
              </g>

              {/* Labels & Perimeter */}
              <path d="M 160,93 L 870,93 L 1110,104 L 1110,492 L 870,492 L 160,492 Z" fill="none" stroke="#FFE9A3" strokeWidth="1.5" strokeDasharray="8,6" opacity="0.6" />
              <text x="714" y="190" fill="#F5F3EA" fontSize="9" textAnchor="middle">CANCHA 1</text>
              <text x="822" y="190" fill="#F5F3EA" fontSize="9" textAnchor="middle">CANCHA 2</text>
              <text x="990" y="460" fill="#FFE9A3" fontSize="10" fontWeight="600" textAnchor="middle">PARQUE & ÁREA VERDE</text>
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
              onClick={() => handleZoneClick('zone-quincho')}
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
              onClick={() => handleZoneClick('zone-carwash')}
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
                left: Math.min(tooltipPos.x + 15, (containerRef.current?.offsetWidth || 300) - 240),
                top: Math.max(tooltipPos.y - 120, 10),
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
                  <span>✦ Haz clic para desplegar info</span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide-Over Side Drawer ("Panel Lateral con la Info al Pinchar") */}
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
                    Local Seleccionado
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
                      Render Interior 3D
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
                    <span>Ver Ficha Completa del Local</span>
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
