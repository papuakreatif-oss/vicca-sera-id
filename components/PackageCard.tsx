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
    `Halo Bunda Vicca, saya tertarik dengan paket ${pkg.name} (${pkg.tagline}, ${pkg.pax} pax, ${priceLabel}). Boleh info lebih lanjut dan ketersediaan tanggal?`
  )

  const waLink = `https://wa.me/${BRAND.phone}?text=${waMessage}`

  return (
    <div
      className={cn(
        'package-card group relative',
        pkg.featured && 'package-card-featured'
      )}
      data-index={index}
    >
      {pkg.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-300 px-4 py-1.5 text-xs font-medium tracking-wide text-charcoal-700 shadow-sm">
            <Sparkles size={12} />
            Paling Populer
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <p className="eyebrow mb-2">Paket {index + 1}</p>
        <h3 className="font-serif text-3xl font-medium text-charcoal-700 mb-1">
          {pkg.name}
        </h3>
        <p className="text-sm font-sans text-sage-500 italic">
          {pkg.tagline}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6 pb-6 border-b border-cream-300">
        <p className="text-xs font-sans text-charcoal-500 uppercase tracking-wider mb-1">
          Mulai dari
        </p>
        <p className="font-serif text-2xl lg:text-3xl text-charcoal-700 font-medium leading-tight">
          {priceLabel}
        </p>
        <p className="text-xs font-sans text-charcoal-500 mt-2">
          untuk {pkg.pax} tamu · {pkg.delivery}
        </p>
      </div>

      {/* Includes */}
      <ul className="space-y-3 mb-6 flex-1">
        {pkg.includes.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm font-sans text-charcoal-600">
            <Check
              size={16}
              className="mt-0.5 flex-shrink-0 text-sage-500"
              strokeWidth={2.5}
            />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {/* Signature */}
      <div className="mb-6 pt-6 border-t border-cream-300">
        <p className="text-xs font-sans uppercase tracking-wider text-gold-500 font-medium mb-3">
          ✦ Signature
        </p>
        <ul className="space-y-2">
          {pkg.signature.map((item, i) => (
            <li key={i} className="text-sm font-sans text-charcoal-500 italic">
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
          'btn-primary w-full justify-center text-sm',
          pkg.featured && 'shadow-md'
        )}
      >
        <MessageCircle size={16} />
        Tanya Paket {pkg.name}
      </a>

      <p className="mt-3 text-xs font-sans text-charcoal-500 text-center">
        Quotation detail via WA Bunda Vicca
        <ArrowRight size={12} className="inline ml-1" />
      </p>
    </div>
  )
}
