import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CacheBuster from '@/components/ui/CacheBuster';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#FF5A00',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://drapple.com.ng'),
  title: {
    default: "Dr. Apple — Authentic iPhones, MacBooks, iPads & Accessories",
    template: "%s | Dr. Apple"
  },
  description: "Dr. Apple is Kano's #1 trusted retailer for 100% authentic Apple products, including iPhones, MacBooks, iPads, Apple Watches, and original accessories. Visit our 5 Kano branches or order online with instant Kano delivery.",
  keywords: [
    "Dr Apple", "Dr Apple Kano", "Apple Store Kano", "Buy iPhone Kano", "Original MacBook Kano", 
    "iPad Kano", "Apple Watch Kano", "Murtala Mohammed Way Kano", "Sabon Gari Kano", "Zoo Road Kano",
    "Bello Road Kano", "BUK Road Kano", "Apple Repair Kano", "Dr Apple Nigeria"
  ],
  authors: [{ name: "Yalerima Technologies Limited", url: "https://www.yalerima.com.ng" }],
  creator: "Yalerima Technologies Limited",
  publisher: "Dr. Apple Nigeria",
  formatDetection: { telephone: true, email: true, address: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Dr. Apple — Authentic Apple Store",
    description: "Authentic Apple products, MacBooks, iPhones, iPads & accessories in Kano, Nigeria. Visit our 5 flagship branches.",
    url: 'https://drapple.com.ng',
    siteName: 'Dr. Apple',
    locale: 'en_NG',
    type: 'website',
    images: [{ url: '/dr.png', width: 512, height: 512, alt: 'Dr. Apple Logo' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Apple — Authentic Apple Store",
    description: "Authentic Apple products, MacBooks, iPhones, iPads & accessories in Kano, Nigeria.",
    images: ['/dr.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ElectronicsStore',
    name: 'Dr. Apple',
    image: 'https://drapple.com.ng/dr.png',
    '@id': 'https://drapple.com.ng',
    url: 'https://drapple.com.ng',
    telephone: '+2348137843328',
    priceRange: '₦₦₦',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 15, Murtala Mohammed Way',
      addressLocality: 'Kano',
      addressRegion: 'Kano State',
      postalCode: '700211',
      addressCountry: 'NG'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.0022,
      longitude: 8.5920
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '08:30',
      closes: '20:00'
    },
    sameAs: [
      'https://www.facebook.com',
      'https://www.instagram.com'
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-calibri bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased selection:bg-[#FF5A00] selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <CacheBuster />
          <div className="flex flex-col min-h-screen relative overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-[56px] md:pt-[60px]">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

