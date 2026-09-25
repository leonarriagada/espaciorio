'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-[#080A0D] text-[#F5F3EA] flex flex-col justify-between p-8 sm:p-12 md:hidden h-[100dvh] overflow-y-auto"
        >
          {/* Header row */}
          <div className="flex justify-between items-center border-b border-white/15 pb-6">
            <span className="font-display tracking-[0.25em] text-lg font-light text-[#F5F3EA] flex items-center gap-2">
              <span>ESPACIO RIO</span>
              <span className="text-[#FFE9A3]">✦</span>
            </span>
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="text-2xl font-light hover:text-[#FFE9A3] transition-colors p-2 -mr-2"
            >
              ✕
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-6 my-auto py-8">
            {siteConfig.navigation.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + index * 0.08, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="font-display text-4xl font-light tracking-wide text-[#F5F3EA] hover:text-[#FFE9A3] transition-colors block"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer details */}
          <div className="border-t border-white/15 pt-6 text-xs text-[#F5F3EA]/70 flex flex-col gap-2">
            <p>{siteConfig.location.address}</p>
            <div className="flex justify-between items-center pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FFE9A3] transition-colors tracking-widest uppercase text-[#FFE9A3] font-semibold"
              >
                INSTAGRAM ↗
              </a>
              <span>© {new Date().getFullYear()} ESPACIO RIO</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
