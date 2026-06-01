import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { metaConfig, siteConfig } from '@/data/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(metaConfig.siteUrl),
  title: metaConfig.title,
  description: metaConfig.description,
  keywords: metaConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: metaConfig.title.default,
    title: metaConfig.title.default,
    description: metaConfig.description,
    images: [
      {
        url: metaConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'HMTI UBSI Margonda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: metaConfig.title.default,
    description: metaConfig.description,
    images: [metaConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0067b1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}