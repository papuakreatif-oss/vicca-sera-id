import Image from 'next/image'
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
    photo: '/images/prawedding/dc4709a9cb018bf1a1f2e5ceb393.jpg',
  },
  {
    quote:
      'Pernikahan kami di Sorong jadi terasa seperti film. Tim Vicca Sera tidak hanya mengurus vendor, tapi memastikan tiap momen punya rasa. Tamu kami masih membicarakan catering dan dekorasi bulan lalu.',
    names: 'Stella & Rendy',
    location: 'Sorong',
    package: 'Paket Cycloop',
    rating: 5,
    date: 'Januari 2026',
    photo: '/images/prawedding/144daf17c43f2e107265a7a36489.jpg',
  },
  {
    quote:
      'Saya dan pasangan tinggal di Jakarta saat planning. Komunikasi lewat WA dan video call sangat lancar. Hari-H di Timika terasa lebih dari yang kami bayangkan. Terima kasih Bunda Vicca dan tim.',
    names: 'Marsela & Doni',
    location: 'Timika',
    package: 'Paket Youtefa',
    rating: 5,
    date: 'November 2025',
    photo: '/images/prawedding/887d018e69e9c87b81deb6797af8.jpg',
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
            {/* Client photo — circular with gold ring */}
            <div className="mb-5 flex items-center gap-4">
              <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden ring-2 ring-champagne-400/60 ring-offset-2 ring-offset-midnight-400 flex-shrink-0">
                <Image
                  src={item.photo}
                  alt={`Foto ${item.names} — klien Vicca Sera Wedding di ${item.location}`}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={85}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <Quote
                size={28}
                className="text-champagne-400/30 ml-auto"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>

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
