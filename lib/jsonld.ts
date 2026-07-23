/**
 * JSON-LD structured data for SEO.
 *
 * LocalBusiness schema for Vicca Sera Wedding Organizer.
 * This file is separated from app/layout.tsx because Next.js 14 App Router
 * layout.tsx has strict export rules — only `default`, `metadata`,
 * `viewport`, `generateMetadata`, and `generateViewport` are valid exports.
 *
 * Imported in layout.tsx and rendered via `dangerouslySetInnerHTML`.
 */

const SITE_URL = 'https://vicca.id'
const SITE_NAME = 'Vicca Sera Wedding Organizer'
const SITE_DESC = 'Wedding Organizer premium di Papua. Mendesain pernikahan Anda dari konsep hingga hari-H dengan rasa elegan, sentuhan lokal, dan standar internasional. 4 paket eksklusif: SKYLINE, CYCLOOP, NUMBAY, YOUTEFA.'

export const viccaSeraJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_URL,
  name: SITE_NAME,
  description: SITE_DESC,
  url: SITE_URL,
  telephone: '+62-852-4466-1150',
  priceRange: 'Rp 170.000.000 - Rp 340.000.000',
  image: `${SITE_URL}/images/og-vicca-sera.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jayapura',
    addressRegion: 'Papua',
    addressCountry: 'ID',
  },
  areaServed: [
    { '@type': 'City', name: 'Jayapura' },
    { '@type': 'City', name: 'Sorong' },
    { '@type': 'City', name: 'Timika' },
    { '@type': 'City', name: 'Merauke' },
    { '@type': 'City', name: 'Manokwari' },
    { '@type': 'City', name: 'Biak' },
  ],
  sameAs: [
    'https://www.instagram.com/viccasera_wo',
    'https://www.tiktok.com/@viccasera_wo',
    'https://www.facebook.com/viccaserawo',
  ],
}

/**
 * Render JSON-LD as a string for dangerouslySetInnerHTML.
 */
export const viccaSeraJsonLdString = JSON.stringify(viccaSeraJsonLd)
