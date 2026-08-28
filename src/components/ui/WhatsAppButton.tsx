'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { siteConfig } from '@/data/site';

export default function WhatsAppButton() {
  const whatsappUrl =
    siteConfig.socials.whatsapp ||
    'https://wa.me/56995198669?text=Hola%20Espacio%20R%C3%ADo,%20quisiera%20m%C3%A1s%20informaci%C3%B3n';
  const padelUrl =
    siteConfig.socials.bookingPadel ||
    'https://espaciorio-cl.matchpoint.com.es/Booking/Grid.aspx';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5"
    >
      {/* 1. Padel Booking Floating Button (Top - Unmasked, Full Prominence) */}
      <div className="flex items-center gap-3 group">
        <span className="hidden sm:inline-block bg-[#080A0D]/95 backdrop-blur-md text-[#FFE9A3] text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#FFE9A3]/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Reserva tu cancha de pádel ✦
        </span>

        <a
          href={padelUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Reservar cancha de pádel"
          className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 hover:scale-115 active:scale-95 transition-all duration-300 focus:outline-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]"
        >
          <div className="relative w-full h-full">
            <Image
              src="/raqueta-de-padel.png"
              alt="Reservar Cancha de Pádel"
              fill
              sizes="80px"
              className="object-contain"
            />
          </div>
        </a>
      </div>

      {/* 2. WhatsApp Floating Button (Bottom - Direct PNG Icon) */}
      <div className="flex items-center gap-3 group">
        <span className="hidden sm:inline-block bg-[#080A0D]/95 backdrop-blur-md text-[#F5F3EA] text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          ¿Consultas? Escríbenos a WhatsApp ✦
        </span>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Contactar por WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 hover:scale-115 active:scale-95 transition-all duration-300 focus:outline-none drop-shadow-[0_8px_18px_rgba(0,0,0,0.6)]"
        >
          <div className="relative w-full h-full">
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              fill
              sizes="64px"
              className="object-contain"
            />
          </div>
        </a>
      </div>
    </motion.div>
  );
}
