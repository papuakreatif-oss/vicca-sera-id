import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-charcoal-700 text-cream-100">
      {/* CTA Banner */}
      <div className="border-b border-charcoal-600">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="eyebrow text-sage-300 mb-3">Siap Memulai Perjalanan</p>
              <h2 className="font-serif text-display-3 text-cream-100 leading-tight">
                Mari wujudkan pernikahan<br />yang Anda impikan.
              </h2>
            </div>
            <div className="lg:text-right">
              <a
                href={`https://wa.me/${BRAND.phone}?text=${encodeURIComponent('Halo Bunda Vicca, saya ingin konsultasi paket wedding. Boleh info lebih lanjut?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-rose-300 px-8 py-4 font-sans text-sm font-medium tracking-wide text-charcoal-700 shadow-sm transition-all duration-300 hover:bg-rose-400 hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
                Chat Bunda Vicca Sekarang
              </a>
              <p className="mt-4 text-sm font-sans text-cream-200/70">
                Konsultasi gratis 30 menit · respon dalam 2 jam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-editorial py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl mb-4">Vicca Sera</h3>
            <p className="text-sm font-sans text-cream-200/80 leading-relaxed mb-6">
              Wedding Organizer premium di Papua. Mendesain pernikahan Anda dari konsep hingga hari-H dengan rasa elegan, sentuhan lokal, dan standar internasional.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-cream-100/10 hover:bg-sage-300 hover:text-charcoal-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={BRAND.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-cream-100/10 hover:bg-sage-300 hover:text-charcoal-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={`https://wa.me/${BRAND.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-cream-100/10 hover:bg-sage-300 hover:text-charcoal-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest-2 font-medium mb-4 text-cream-200/60">
              Layanan
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li><a href="#packages" className="hover:text-sage-300 transition-colors">Paket Skyline</a></li>
              <li><a href="#packages" className="hover:text-sage-300 transition-colors">Paket Cycloop</a></li>
              <li><a href="#packages" className="hover:text-sage-300 transition-colors">Paket Numbay</a></li>
              <li><a href="#packages" className="hover:text-sage-300 transition-colors">Paket Youtefa</a></li>
              <li><a href="#process" className="hover:text-sage-300 transition-colors">Proses Wedding</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest-2 font-medium mb-4 text-cream-200/60">
              Perusahaan
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li><a href={BRAND.parentUrl} className="hover:text-sage-300 transition-colors">Papua Kreatif Group</a></li>
              <li><a href="#" className="hover:text-sage-300 transition-colors">Tentang Kami</a></li>
              <li><a href="#testimonials" className="hover:text-sage-300 transition-colors">Cerita Klien</a></li>
              <li><a href="#faq" className="hover:text-sage-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-sage-300 transition-colors">Blog Wedding</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest-2 font-medium mb-4 text-cream-200/60">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-sage-300 flex-shrink-0" />
                <a href={`tel:${BRAND.phoneFormatted}`} className="hover:text-sage-300 transition-colors">
                  {BRAND.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-sage-300 flex-shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-sage-300 transition-colors">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-sage-300 flex-shrink-0" />
                <span>Jayapura, Sorong, Timika,<br />Merauke, Manokwari, Biak</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-charcoal-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-cream-200/60">
            © 2026 {BRAND.parentBrand}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-sans text-cream-200/60">
            <a href="#" className="hover:text-sage-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sage-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-sage-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
