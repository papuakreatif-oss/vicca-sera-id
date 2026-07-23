import { ArrowDown, MessageCircle, Star } from 'lucide-react'
import { BRAND, STATS } from '@/lib/constants'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Decorative background gradient */}
      <div
        className="absolute inset-0 bg-gradient-warm -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-noise opacity-30 -z-10"
        aria-hidden="true"
      />

      {/* Decorative botanical ornaments */}
      <div
        className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-sage-200/30 blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-rose-200/30 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="container-editorial relative z-10 py-20 lg:py-32">
        {/* Eyebrow */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-sage-300 bg-cream-50/80 backdrop-blur-sm px-5 py-2 text-xs font-sans uppercase tracking-widest-2 text-sage-500 font-medium">
            <Star size={12} className="text-gold-400 fill-gold-400" />
            Wedding Organizer Premium di Papua
            <Star size={12} className="text-gold-400 fill-gold-400" />
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-display-1 text-charcoal-700 text-center leading-[0.95] mb-8 animate-fade-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}
        >
          Elegansi tanpa batas<br />
          <span className="italic text-gradient-warm">
            untuk hari istimewa Anda.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="font-sans text-lg lg:text-xl text-charcoal-600 text-center max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
        >
          Mendesain pernikahan Anda dari konsep hingga hari-H dengan rasa elegan, sentuhan lokal Papua, dan standar internasional.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}
        >
          <a
            href={`https://wa.me/${BRAND.phone}?text=${encodeURIComponent('Halo Bunda Vicca, saya tertarik dengan paket wedding Vicca Sera. Boleh info lebih lanjut?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={18} />
            Konsultasi Gratis
          </a>
          <a href="#packages" className="btn-secondary">
            Lihat 4 Paket
          </a>
        </div>

        {/* Stats inline */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 max-w-3xl mx-auto pt-12 border-t border-sage-200 animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl lg:text-4xl text-sage-500 font-medium mb-1">
                {stat.number}
              </div>
              <div className="text-xs font-sans uppercase tracking-wider text-charcoal-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
          style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}
        >
          <a
            href="#packages"
            className="flex flex-col items-center gap-2 text-charcoal-500 hover:text-sage-500 transition-colors"
            aria-label="Scroll to packages"
          >
            <span className="text-xs font-sans uppercase tracking-widest-2">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
