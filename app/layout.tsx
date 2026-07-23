import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Italiana } from 'next/font/google'
import { viccaSeraJsonLdString } from '@/lib/jsonld'
import './globals.css'

// Cormorant Garamond — display serif, wedding elegance
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

// Inter — sans body, clean modern
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

// Italiana — luxury accent, engraved feel for wedding titles
const italiana = Italiana({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-italiana',
  display: 'swap',
})

const SITE_URL = 'https://vicca.id'
const SITE_NAME = 'Vicca Sera Wedding Organizer'
const SITE_DESC = 'Wedding Organizer premium di Papua. Mendesain pernikahan Anda dari konsep hingga hari-H dengan rasa elegan, sentuhan lokal, dan standar internasional.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Elegansi Tanpa Batas untuk Hari Istimewa Anda`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: [
    'wedding organizer Papua',
    'WO Jayapura',
    'wedding organizer Sorong',
    'wedding organizer Timika',
    'wedding organizer Merauke',
    'Vicca Sera',
    'pernikahan Papua',
    'WO premium Indonesia',
    'paket wedding lengkap',
    'Bunda Vicca',
  ],
  authors: [{ name: 'Papua Kreatif Group', url: 'https://papuakreatif.id' }],
  creator: 'Vicca Sera Wedding Organizer',
  publisher: 'Papua Kreatif Group',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Elegansi Tanpa Batas`,
    description: SITE_DESC,
    images: [
      {
        url: '/images/og-vicca-sera.jpg',
        width: 1200,
        height: 630,
        alt: 'Vicca Sera Wedding Organizer — Papua',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Elegansi Tanpa Batas`,
    description: SITE_DESC,
    images: ['/images/og-vicca-sera.jpg'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0E1F',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// JSON-LD structured data — see lib/jsonld.ts (imported as viccaSeraJsonLdString)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${cormorant.variable} ${inter.variable} ${italiana.variable}`}>
      <body className="min-h-screen bg-midnight-400 text-ivory-100 antialiased font-sans">
        {/* Skip to content — accessibility */}
        <a href="#main" className="skip-link">
          Lewati ke konten utama
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: viccaSeraJsonLdString }}
        />
        {children}
      </body>
    </html>
  )
}
