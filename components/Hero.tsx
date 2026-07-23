import { ArrowDown, MessageCircle } from 'lucide-react'
import { BRAND, STATS } from '@/lib/constants'

// Floating petals for cinematic wedding atmosphere
function FloatingPetals() {
  const petals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${(i * 8.3) + Math.random() * 5}%`,
    delay: `${i * 1.5}s`,
    duration: `${18 + (i % 4) * 2}s`,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            top: '-20px',
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  const headlineWords = ['Elegansi', 'tanpa', 'batas']

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden vignette"
    >
      {/* Base radial gradient — midnight romance */}
      <div
        className="absolute inset-0 bg-gradient-midnight-radial -z-20"
        aria-hidden="true"
      />

      {/* Noise texture for cinematic grain */}
      <div
        className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay -z-10"
        aria-hidden="true"
      />

      {/* Floating petals */}
      <FloatingPetals />

      {/* Decorative gold glows */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-champagne-700/15 blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blush-400/10 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="container-editorial relative z-10 py-20 lg:py-32 text-center">
        {/* Eyebrow with curtain reveal line */}
        <div className="flex flex-col items-center mb-10">
          <span className="curtain-line w-32 mb-6" />
          <span className="eyebrow animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Wedding Atelier · Est. 1998
          </span>
        </div>

        {/* Main headline with letter-by-letter fade */}
        <h1 className="font-serif text-display-1 leading-[0.95] mb-8">
          <span className="block text-ivory-100">
            {headlineWords.map((word, i) => (
              <span
                key={i}
                className="inline-block opacity-0 animate-letter-fade"
                style={{
                  animationDelay: `${0.7 + i * 0.15}s`,
                  marginRight: '0.3em',
                }}
              >
                {word}
              </span>
            ))}
          </span>
          <span
            className="block italic text-gold-gradient opacity-0 animate-letter-fade"
            style={{ animationDelay: '1.15s' }}
          >
            untuk hari istimewa Anda.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="font-sans text-base md:text-lg text-ivory-200 max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: '1.4s' }}
        >
          Mendesain pernikahan Anda dari konsep hingga hari-H dengan rasa elegan,
          sentuhan lokal Papua, dan standar internasional. Bunda Vicca dan tim
          siap merayakan cinta Anda.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 opacity-0 animate-fade-up"
          style={{ animationDelay: '1.6s' }}
        >
          <a
            href={`https://wa.me/${BRAND.phone}?text=${encodeURIComponent('Halo Bunda Vicca, saya tertarik dengan paket wedding Vicca Sera. Mohon info lebih lanjut.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={16} />
            Konsultasi Gratis
          </a>
          <a href="#packages" className="btn-link">
            Lihat Paket Wedding
          </a>
        </div>

        {/* Stats inline */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 max-w-4xl mx-auto pt-12 border-t border-champagne-700/40 opacity-0 animate-fade-up"
          style={{ animationDelay: '1.8s' }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-accent text-3xl lg:text-4xl text-champagne-400 mb-2">
                {stat.number}
              </div>
              <div className="text-xs font-sans uppercase tracking-widest-2 text-ivory-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: '2s' }}
      >
        <a
          href="#packages"
          className="flex flex-col items-center gap-3 text-ivory-400 hover:text-champagne-400 transition-colors duration-500"
          aria-label="Scroll ke paket wedding"
        >
          <span className="text-xs font-sans uppercase tracking-widest-3">Scroll</span>
          <ArrowDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
