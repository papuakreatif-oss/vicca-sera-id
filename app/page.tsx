import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PackageCard } from '@/components/PackageCard'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { ContactForm } from '@/components/ContactForm'
import { FAQ } from '@/components/FAQ'
import { Gallery } from '@/components/Gallery'
import { Footer } from '@/components/Footer'
import { PACKAGES, TESTIMONIALS, DIFFERENTIATORS, BRAND } from '@/lib/constants'
import { Heart, Users, Sparkles, MapPin, Clock, Star, Quote } from 'lucide-react'

// Lucide icon mapping helper
const ICON_MAP = {
  Heart,
  Users,
  Sparkles,
  MapPin,
  Clock,
} as const

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main">
        {/* ================================================
            1. HERO
            ================================================ */}
        <Hero />

        {/* ================================================
            2. PACKAGES — 4 Paket Wedding
            ================================================ */}
        <section id="packages" className="py-20 lg:py-32 bg-cream-50">
          <div className="container-editorial">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
              <p className="eyebrow mb-4">Empat Paket Eksklusif</p>
              <h2 className="display-2 mb-6">
                Pilih paket yang sesuai dengan<br />
                <span className="italic text-gradient-warm">visi pernikahan Anda.</span>
              </h2>
              <p className="text-base lg:text-lg font-sans text-charcoal-600 leading-relaxed">
                Setiap paket sudah bundling lengkap — Wedding Organizer, Catering, Dekorasi, Photo/Video, Entertainment, dan Bridal. Anda tinggal pilih sesuai skala dan anggaran.
              </p>
            </div>

            {/* Package grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-stretch">
              {PACKAGES.map((pkg, i) => (
                <PackageCard key={pkg.id} pkg={pkg} index={i} />
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <p className="text-sm font-sans text-charcoal-500 italic mb-4">
                Butuh paket custom atau skala lebih besar? Kami diskusi di discovery call.
              </p>
              <a
                href={`https://wa.me/${BRAND.phone}?text=${encodeURIComponent('Halo Bunda Vicca, saya butuh paket wedding custom. Boleh diskusi?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Diskusikan Paket Custom
              </a>
            </div>
          </div>
        </section>

        {/* ================================================
            3. WHY VICCA SERA — 5 Differentiators
            ================================================ */}
        <section className="py-20 lg:py-32 bg-gradient-warm">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="eyebrow mb-4">Mengapa Vicca Sera</p>
              <h2 className="display-2 mb-6">
                Lebih dari wedding organizer,<br />
                <span className="italic">kami adalah kurator kenangan.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {DIFFERENTIATORS.map((diff) => {
                const Icon = ICON_MAP[diff.icon as keyof typeof ICON_MAP]
                return (
                  <div
                    key={diff.title}
                    className="bg-cream-50 rounded-2xl p-8 border border-cream-300 hover:border-sage-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage-100 mb-5">
                      <Icon size={20} className="text-sage-500" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-charcoal-700 mb-3 leading-snug">
                      {diff.title}
                    </h3>
                    <p className="text-sm font-sans text-charcoal-600 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================================================
            4. PROCESS — 6-step Wedding Journey
            ================================================ */}
        <section id="process" className="py-20 lg:py-32 bg-cream-50">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="eyebrow mb-4">Proses Wedding</p>
              <h2 className="display-2 mb-6">
                Enam langkah dari konsep<br />
                <span className="italic text-gradient-warm">hingga hari-H.</span>
              </h2>
              <p className="text-base lg:text-lg font-sans text-charcoal-600 leading-relaxed">
                Kami memandu Anda di setiap tahap dengan komunikasi yang jelas, timeline yang terstruktur, dan tanpa kejutan biaya.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <ProcessTimeline />
            </div>
          </div>
        </section>

        {/* ================================================
            5. TESTIMONIALS — Client Stories
            ================================================ */}
        <section id="testimonials" className="py-20 lg:py-32 bg-gradient-warm">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="eyebrow mb-4">Cerita Klien</p>
              <h2 className="display-2 mb-6">
                Mereka yang mempercayakan<br />
                <span className="italic">hari istimewa mereka pada kami.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="bg-cream-50 rounded-2xl p-8 lg:p-10 border border-cream-300 hover:shadow-lg transition-shadow relative"
                >
                  <Quote size={40} className="absolute top-6 right-6 text-sage-200" strokeWidth={1.5} />

                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-gold-400 fill-gold-400" />
                    ))}
                  </div>

                  <blockquote className="font-serif text-lg italic text-charcoal-700 leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <figcaption className="pt-4 border-t border-cream-300">
                    <p className="font-sans text-sm font-medium text-charcoal-700">
                      {t.name}
                    </p>
                    <p className="text-xs font-sans text-charcoal-500 mt-1">
                      {t.wedding} · {t.location} · {t.date}
                    </p>
                    <p className="text-xs font-sans text-sage-500 mt-2 uppercase tracking-wider">
                      Paket {t.package}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================
            6. GALLERY — Masonry Placeholder
            ================================================ */}
        <section id="gallery" className="py-20 lg:py-32 bg-cream-50">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="eyebrow mb-4">Galeri</p>
              <h2 className="display-2 mb-6">
                Momen yang<br />
                <span className="italic text-gradient-warm">tak pernah pudar.</span>
              </h2>
              <p className="text-base font-sans text-charcoal-600">
                Cuplikan dokumentasi dari pernikahan yang kami handle. Galeri lengkap dikirim saat discovery call.
              </p>
            </div>

            <Gallery />

            <div className="mt-12 text-center">
              <a
                href={`https://wa.me/${BRAND.phone}?text=${encodeURIComponent('Halo Bunda Vicca, saya ingin lihat galeri lengkap wedding Vicca Sera. Boleh dikirim?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Minta Galeri Lengkap via WA
              </a>
            </div>
          </div>
        </section>

        {/* ================================================
            7. CONTACT — Form
            ================================================ */}
        <section id="contact" className="py-20 lg:py-32 bg-gradient-warm">
          <div className="container-editorial">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
              {/* Left: copy */}
              <div>
                <p className="eyebrow mb-4">Mulai Perjalanan Anda</p>
                <h2 className="display-2 mb-6">
                  Ceritakan visi Anda.<br />
                  <span className="italic text-gradient-warm">
                    Kami wujudkan bersama.
                  </span>
                </h2>
                <p className="text-base lg:text-lg font-sans text-charcoal-600 leading-relaxed mb-8">
                  Isi form di samping atau langsung chat Bunda Vicca. Konsultasi pertama gratis 30 menit, tanpa komitmen. Bunda Vicca akan merespon dalam 2 jam (jam kerja).
                </p>

                <ul className="space-y-4">
                  {[
                    'Konsultasi gratis 30 menit',
                    'Quotation detail dalam 2-3 hari',
                    'DP ringan 30% setelah deal',
                    'Pembayaran via transfer bank atau QRIS',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-sans text-charcoal-600">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sage-100">
                        <Sparkles size={12} className="text-sage-500" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Direct WA */}
                <div className="mt-10 pt-8 border-t border-cream-300">
                  <p className="text-xs font-sans uppercase tracking-wider text-charcoal-500 mb-3">
                    Atau langsung chat
                  </p>
                  <a
                    href={`https://wa.me/${BRAND.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-serif text-2xl text-sage-500 hover:text-sage-700 transition-colors"
                  >
                    <span className="font-medium">{BRAND.phoneFormatted}</span>
                    <span className="text-sm font-sans italic text-charcoal-500">
                      — Bunda Vicca
                    </span>
                  </a>
                </div>
              </div>

              {/* Right: form */}
              <div className="bg-cream-50 rounded-2xl p-8 lg:p-10 border border-cream-300 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
            8. FAQ
            ================================================ */}
        <section id="faq" className="py-20 lg:py-32 bg-cream-50">
          <div className="container-editorial max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="eyebrow mb-4">Pertanyaan Klien</p>
              <h2 className="display-2 mb-6">
                Hal-hal yang<br />
                <span className="italic">sering ditanyakan.</span>
              </h2>
            </div>

            <FAQ />

            <div className="mt-12 text-center">
              <p className="text-sm font-sans text-charcoal-500 italic mb-4">
                Punya pertanyaan lain?
              </p>
              <a
                href={`https://wa.me/${BRAND.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Tanya Bunda Vicca
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
