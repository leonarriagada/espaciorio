import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/site';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteConfig.metaTitle,
  description: siteConfig.metaDescription,
  keywords: [
    'Espacio Río',
    'Arquitectura Contemporánea',
    'Gastronomía',
    'Lifestyle Destination',
    'Starbucks Drive-Thru',
    'Naturaleza',
    'Montaña',
  ],
  authors: [{ name: 'Espacio Río' }],
  openGraph: {
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    url: 'https://espaciorio.cl',
    siteName: 'Espacio Río',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${geist.variable}`}>
      <body className="bg-[#F3F1EB] text-[#242624] antialiased selection:bg-[#304638] selection:text-[#F3F1EB]">
        {children}
      </body>
    </html>
  );
}
