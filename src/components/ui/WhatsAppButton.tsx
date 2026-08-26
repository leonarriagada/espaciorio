'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function WhatsAppButton() {
  const whatsappUrl = siteConfig.socials.whatsapp || 'https://wa.me/56900000000?text=Hola%20Espacio%20R%C3%ADo,%20quisiera%20m%C3%A1s%20informaci%C3%B3n';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip text */}
      <span className="hidden sm:inline-block bg-[#080A0D]/90 backdrop-blur-md text-[#F5F3EA] text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¿Consultas? Escríbenos a WhatsApp ✦
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20 focus:outline-none"
      >
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </motion.div>
  );
}
