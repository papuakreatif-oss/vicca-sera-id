import { Quote, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'Bunda Vicca dan tim mengurus semuanya dari jauh. Kami hanya perlu datang dan merayakan. Detail rundown, vendor, hingga dekorasi noken Papua — semuanya terasa personal dan terasa rumah kami sendiri.',
    names: 'Yuliana & Yance',
    location: 'Jayapura',
    package: 'Paket Skyline',
    rating: 5,
    date: 'Maret 2026',
  },
  {
    quote:
      'Pernikahan kami di Sorong jadi terasa seperti film. Tim Vicca Sera tidak hanya mengurus vendor, tapi memastikan tiap momen punya rasa. Tamu kami masih membicarakan catering dan dekorasi bulan lalu.',
    names: 'Stella & Rendy',
    location: 'Sorong',
    package: 'Paket Cycloop',
    rating: 5,
    date: 'Januari 2026',
  },
  {
    quote:
      'Saya dan pasangan tinggal di Jakarta saat planning. Komunikasi lewat WA dan video call sangat lancar. Hari-H di Timika terasa lebih dari yang kami bayangkan. Terima kasih Bunda Vicca dan tim.',
    names: 'Marsela & Doni',
    location: 'Timika',
    package: 'Paket Youtefa',
    rating: 5,
    date: 'November 2025',
  },
]

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {TESTIMONIALS.map((item, index) => (
        <figure
          key={index}
          className="glass-card group relative flex flex-col"
        >
          {/* Light leak overlay */}
          <div className="light-leak rounded-2xl" aria-hidden="true" />

          <div className="relative z-10 flex flex-col h-full">
            {/* Quote icon */}
            <Quote
              size={32}
              className="text-champagne-400/40 mb-4"
              strokeWidth={1.5}
              aria-hidden="true"
            />

            {/* Rating */}
            <div className="flex items-center gap-0.5 mb-5">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-champagne-400 fill-champagne-400"
                />
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="font-serif text-base lg:text-lg text-ivory-200 leading-relaxed mb-6 flex-1 italic">
              &ldquo;{item.quote}&rdquo;
            </blockquote>

            {/* Footer */}
            <figcaption className="pt-5 border-t border-champagne-700/30">
              <p
                className="font-accent text-lg text-champagne-400 mb-1"
                style={{ letterSpacing: '0.05em' }}
              >
                {item.names}
              </p>
              <p className="text-xs font-sans text-ivory-400 uppercase tracking-widest-2 mb-0.5">
                {item.location} · {item.package}
              </p>
              <p className="text-xs font-sans text-ivory-500">
                {item.date}
              </p>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  )
}
