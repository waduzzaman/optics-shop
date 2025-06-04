// app/layout.js or app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Optics Shop - Quality Eyewear & Eye Care',
  description: 'Your one-stop shop for high-quality eyeglasses, contact lenses, and comprehensive eye care services in Toronto.',
  keywords: ['optics', 'eyeglasses', 'contact lenses', 'eye care', 'Toronto', 'optician', 'sunglasses'],
  metadataBase: new URL('https://your-optics-shop-domain.com'), // ensures absolute URLs
  openGraph: {
    title: 'Optics Shop - Quality Eyewear & Eye Care',
    description: 'Your one-stop shop for high-quality eyeglasses, contact lenses, and comprehensive eye care services in Toronto.',
    url: '/',
    siteName: 'Optics Shop',
    images: [
      {
        url: '/og-image.jpg', // Store in public/ directory
        width: 1200,
        height: 630,
        alt: 'Optics Shop Logo and tagline',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optics Shop - Quality Eyewear & Eye Care',
    description: 'Your one-stop shop for high-quality eyeglasses, contact lenses, and comprehensive eye care services in Toronto.',
    creator: '@yourtwitterhandle',
    images: ['/twitter-image.jpg'], // Store in public/
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen text-gray-800 bg-white`}>
        <Navbar />
        <main className="flex-grow px-4 md:px-8 lg:px-16 py-6 max-w-7xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
