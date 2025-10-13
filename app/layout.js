// app/layout.js
import './globals.css';
import { Quicksand } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Whatsapp } from '@/components/Whatsapp';
import Script from 'next/script'; // 👈 Importamos el componente Script

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Atl Ecosystem - Estanques, Acuarios y BioPiscinas',
    template: '%s | Atl Ecosystem',
  },
  description:
    'Diseñamos y construimos ecosistemas acuáticos: bio-piscinas, estanques, cascadas y más.',

  alternates: { canonical: '/' },

  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Atl Ecosystem',
    images: [
      // ✅ sirve desde /public/logo_ecoatl.png
      { url: '/logo_ecoatl.png' },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Atl Ecosystem',
    description:
      'Diseñamos y construimos ecosistemas acuáticos: bio-piscinas, estanques, cascadas y más.',
    images: ['/logo_ecoatl.png'],
  },

  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }, // opcional si lo tienes
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/* EL SCRIPT PRINCIPAL DE GTRAManager se coloca al inicio del <head> (o al inicio del <body> con la estrategia "afterInteractive" o "lazyOnload").
        Aquí se usa "afterInteractive" para mejorar el rendimiento inicial.
      */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5ZBY0NHLQ7"
        strategy="afterInteractive" // o "lazyOnload" si quieres que cargue más tarde
      />

      {/* El segundo script con la configuración se coloca inline.
        Se usa la estrategia "afterInteractive" y se le asigna un ID.
      */}
      <Script
        id="google-analytics-init" // ID único para el script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5ZBY0NHLQ7');
          `,
        }}
      />
      {/* FIN DE LA ETIQUETA DE GOOGLE
      */}
      
      <body className={quicksand.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}