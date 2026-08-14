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
          className="fixed inset-0 z-50 bg-[#304638] text-[#F3F1EB] flex flex-col justify-between p-8 sm:p-12 md:hidden"
        >
          {/* Header row */}
          <div className="flex justify-between items-center border-b border-[#F3F1EB]/15 pb-6">
            <span className="font-display tracking-[0.25em] text-lg font-light">
              ESPACIO RÍO
            </span>
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="text-2xl font-light hover:text-[#D8D3C8] transition-colors p-2 -mr-2"
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
                  className="font-display text-4xl font-light tracking-wide text-[#F3F1EB] hover:text-[#D8D3C8] transition-colors block"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer details */}
          <div className="border-t border-[#F3F1EB]/15 pt-6 text-xs text-[#D8D3C8]/70 flex flex-col gap-2">
            <p>{siteConfig.location.address}</p>
            <div className="flex justify-between items-center pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F3F1EB] transition-colors tracking-widest uppercase"
              >
                INSTAGRAM ↗
              </a>
              <span>© {new Date().getFullYear()} ESPACIO RÍO</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
