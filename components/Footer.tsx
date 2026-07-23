import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail, Heart } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const MARQUEE_WORDS = [
  'Elegansi',
  'Tanpa Batas',
  'Wedding Atelier',
  'Papua Kreatif Group',
  'Bunda Vicca',
  'Cinta Anda',
  'Hari Istimewa',
]

function Marquee() {
  // Duplicate words for seamless infinite scroll
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS]

  return (
    <div className="overflow-hidden border-y border-champagne-700/30 py-8 bg-midnight-500/50">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((word, i) => (
          <span
            key={i}
            className="flex items-center font-accent text-3xl md:text-5xl text-champagne-400/40 hover:text-champagne-400/70 transition-colors"
          >
            <span className="mx-8">{word}</span>
            <span className="mx-4 text-champagne-700/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-midnight-500 text-ivory-100">
      {/* CTA Banner */}
      <div className="border-b border-champagne-700/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-midnight-radial opacity-50" />
        <div className="container-editorial py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow mb-4">Siap Memulai Perjalanan</p>
              <h2 className="font-serif text-display-3 leading-tight">
                Mari wujudkan pernikahan<br />
                <span className="italic text-gold-gradient">yang Anda impikan.</span>
              </h2>
            </div>
            <div className="lg:text-right">
              <a
                href={`https://wa.me/${BRAND.phone}?text=${encodeURIComponent('Halo Bunda Vicca, saya ingin konsultasi paket wedding. Mohon info lebih lanjut.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex"
              >
                <MessageCircle size={18} />
                Chat Bunda Vicca
              </a>
              <p className="mt-5 text-sm font-sans text-ivory-300">
                Konsultasi gratis 30 menit · respon dalam 2 jam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee — decorative running text */}
      <Marquee />

      {/* Main footer */}
      <div className="container-editorial py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3
              className="font-accent text-3xl mb-5 text-champagne-400"
              style={{ letterSpacing: '0.05em' }}
            >
              Vicca Sera
            </h3>
            <p className="text-sm font-sans text-ivory-300 leading-relaxed mb-6">
              Wedding Organizer premium di Papua. Mendesain pernikahan Anda dari konsep hingga hari-H dengan rasa elegan, sentuhan lokal, dan standar internasional.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-champagne-700/40 text-ivory-300 hover:border-champagne-400 hover:text-champagne-400 transition-all duration-500"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={BRAND.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-champagne-700/40 text-ivory-300 hover:border-champagne-400 hover:text-champagne-400 transition-all duration-500"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={`https://wa.me/${BRAND.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-champagne-700/40 text-ivory-300 hover:border-champagne-400 hover:text-champagne-400 transition-all duration-500"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest-3 font-medium mb-5 text-champagne-400">
              Paket Wedding
            </h4>
            <ul className="space-y-3 text-sm font-sans text-ivory-300">
              <li><a href="#packages" className="hover:text-champagne-400 transition-colors duration-300">Paket Skyline</a></li>
              <li><a href="#packages" className="hover:text-champagne-400 transition-colors duration-300">Paket Cycloop</a></li>
              <li><a href="#packages" className="hover:text-champagne-400 transition-colors duration-300">Paket Numbay</a></li>
              <li><a href="#packages" className="hover:text-champagne-400 transition-colors duration-300">Paket Youtefa</a></li>
              <li><a href="#packages" className="hover:text-champagne-400 transition-colors duration-300">Paket Custom</a></li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest-3 font-medium mb-5 text-champagne-400">
              Perusahaan
            </h4>
            <ul className="space-y-3 text-sm font-sans text-ivory-300">
              <li><a href={BRAND.parentUrl} className="hover:text-champagne-400 transition-colors duration-300">Papua Kreatif Group</a></li>
              <li><a href="#" className="hover:text-champagne-400 transition-colors duration-300">Tentang Kami</a></li>
              <li><a href="#testimonials" className="hover:text-champagne-400 transition-colors duration-300">Cerita Klien</a></li>
              <li><a href="#gallery" className="hover:text-champagne-400 transition-colors duration-300">Galeri</a></li>
              <li><a href="#faq" className="hover:text-champagne-400 transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest-3 font-medium mb-5 text-champagne-400">
              Hubungi Bunda Vicca
            </h4>
            <ul className="space-y-4 text-sm font-sans">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-champagne-400 flex-shrink-0" />
                <a href={`tel:${BRAND.phoneFormatted}`} className="text-ivory-300 hover:text-champagne-400 transition-colors duration-300">
                  {BRAND.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-champagne-400 flex-shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="text-ivory-300 hover:text-champagne-400 transition-colors duration-300">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-champagne-400 flex-shrink-0" />
                <span className="text-ivory-300">
                  Jayapura, Sorong, Timika,<br />
                  Merauke, Manokwari, Biak
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-champagne-700/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-ivory-400">
            © 2026 {BRAND.parentBrand}. All rights reserved.
          </p>
          <p className="text-xs font-sans text-ivory-400 flex items-center gap-2">
            Crafted with
            <Heart size={12} className="text-blush-300 fill-blush-300" />
            by Bunda Vicca & Tim
          </p>
          <div className="flex items-center gap-6 text-xs font-sans text-ivory-400">
            <a href="#" className="hover:text-champagne-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-champagne-400 transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-champagne-400 transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
