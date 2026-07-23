import { Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react'
import { BRAND, type Package } from '@/lib/constants'
import { formatRupiah, cn } from '@/lib/utils'

interface PackageCardProps {
  pkg: Package
  index: number
}

export function PackageCard({ pkg, index }: PackageCardProps) {
  const priceLabel = pkg.priceMin === pkg.priceMax
    ? formatRupiah(pkg.priceMin)
    : `${formatRupiah(pkg.priceMin)} – ${formatRupiah(pkg.priceMax)}`

  const waMessage = encodeURIComponent(
    `Halo Bunda Vicca, saya tertarik dengan paket ${pkg.name} (${pkg.tagline}, ${pkg.pax} pax, ${priceLabel}). Mohon info lebih lanjut dan ketersediaan tanggal.`
  )

  const waLink = `https://wa.me/${BRAND.phone}?text=${waMessage}`

  return (
    <div
      className={cn(
        'glass-card group relative h-full flex flex-col',
        pkg.featured && 'glass-card-featured animate-glow-pulse'
      )}
      data-index={index}
    >
      {/* Light leak overlay */}
      <div className="light-leak rounded-2xl" aria-hidden="true" />

      {pkg.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-champagne-400 px-4 py-1.5 text-xs font-medium uppercase tracking-widest-2 text-midnight-500 shadow-gold-sm">
            <Sparkles size={12} />
            Paling Diminati
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6 relative z-10">
        <p className="eyebrow mb-3">Paket {String(index + 1).padStart(2, '0')}</p>
        <h3
          className="font-accent text-4xl text-champagne-400 mb-2"
          style={{ letterSpacing: '0.05em' }}
        >
          {pkg.name}
        </h3>
        <p className="text-sm font-serif italic text-ivory-300">
          {pkg.tagline}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6 pb-6 border-b border-champagne-700/30 relative z-10">
        <p className="text-xs font-sans text-ivory-400 uppercase tracking-widest-2 mb-2">
          Mulai dari
        </p>
        <p className="font-serif text-xl lg:text-2xl text-ivory-100 font-medium leading-tight">
          {priceLabel}
        </p>
        <p className="text-xs font-sans text-ivory-400 mt-3">
          untuk {pkg.pax} tamu · {pkg.delivery}
        </p>
      </div>

      {/* Includes */}
      <ul className="space-y-3 mb-6 flex-1 relative z-10">
        {pkg.includes.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm font-sans text-ivory-200">
            <Check
              size={16}
              className="mt-0.5 flex-shrink-0 text-champagne-400"
              strokeWidth={2.5}
            />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {/* Signature */}
      <div className="mb-6 pt-6 border-t border-champagne-700/30 relative z-10">
        <p className="text-xs font-sans uppercase tracking-widest-2 text-champagne-400 font-medium mb-3">
          ✦ Signature
        </p>
        <ul className="space-y-2">
          {pkg.signature.map((item, i) => (
            <li key={i} className="text-sm font-serif italic text-ivory-300">
              · {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'btn-primary w-full justify-center text-xs relative z-10',
          pkg.featured && 'shadow-gold-sm'
        )}
      >
        <MessageCircle size={14} />
        Tanya Paket {pkg.name}
      </a>

      <p className="mt-3 text-xs font-sans text-ivory-400 text-center relative z-10">
        Quotation detail via WA Bunda Vicca
        <ArrowRight size={11} className="inline ml-1" />
      </p>
    </div>
  )
}
