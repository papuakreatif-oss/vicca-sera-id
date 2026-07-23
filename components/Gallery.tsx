import Image from 'next/image'
import { Camera, Heart, Sparkles } from 'lucide-react'

const GALLERY_ITEMS = [
  {
    title: 'Yuliana & Yance',
    location: 'Jayapura',
    palette: 'champagne' as const,
    icon: Heart,
    aspect: 'aspect-[4/5]',
    src: '/images/prewedding/0cf6a2909f039dda49791b84d213.jpg',
  },
  {
    title: 'Stella & Rendy',
    location: 'Sorong',
    palette: 'blush' as const,
    icon: Sparkles,
    aspect: 'aspect-[3/4]',
    src: '/images/prewedding/eb558b51b2202604cec7cdbb78dc.jpg',
  },
  {
    title: 'Marsela & Doni',
    location: 'Timika',
    palette: 'sage' as const,
    icon: Heart,
    aspect: 'aspect-[4/5]',
    src: '/images/prewedding/a891d1cf199b9015b9e0096e986c.jpg',
  },
  {
    title: 'Yuni & Yosua',
    location: 'Merauke',
    palette: 'champagne' as const,
    icon: Heart,
    aspect: 'aspect-[3/4]',
    src: '/images/prewedding/819cfcd01de6209c89d35652aa70.jpg',
  },
  {
    title: 'Gracia & Michael',
    location: 'Jayapura',
    palette: 'blush' as const,
    icon: Heart,
    aspect: 'aspect-[4/5]',
    src: '/images/prewedding/7fef1856cd0cf0618634739461e9.jpg',
  },
  {
    title: 'Anastasya & Bram',
    location: 'Manokwari',
    palette: 'sage' as const,
    icon: Sparkles,
    aspect: 'aspect-[3/4]',
    src: '/images/prewedding/602acfe695445a2594cc31e6c72b.jpg',
  },
]

const PALETTE_BG = {
  champagne: 'bg-gradient-to-br from-champagne-700/30 via-midnight-300 to-champagne-800/20',
  blush: 'bg-gradient-to-br from-blush-400/25 via-midnight-300 to-blush-500/15',
  sage: 'bg-gradient-to-br from-sage-400/25 via-midnight-300 to-sage-500/15',
}

export function Gallery() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {GALLERY_ITEMS.map((item, index) => {
        const Icon = item.icon
        return (
          <figure
            key={index}
            className={`group relative overflow-hidden rounded-2xl ${item.aspect} cursor-pointer`}
          >
            {/* Real wedding photo with next/image */}
            <Image
              src={item.src}
              alt={`${item.title} — Vicca Sera Wedding di ${item.location}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              quality={85}
              loading={index < 2 ? 'eager' : 'lazy'}
            />

            {/* Cinematic gradient fallback (shows during load or if image fails) */}
            <div
              className={PALETTE_BG[item.palette] + ' absolute inset-0 -z-10 transition-transform duration-700'}
              aria-hidden="true"
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-700/90 via-midnight-500/20 to-transparent" />

            {/* Light leak overlay */}
            <div className="light-leak rounded-2xl" aria-hidden="true" />

            {/* Caption */}
            <figcaption className="absolute inset-x-0 bottom-0 p-5 lg:p-7 z-10">
              <p className="eyebrow mb-2 text-xs">{item.location}</p>
              <h3 className="font-serif text-xl lg:text-2xl text-ivory-100 mb-1 italic">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-xs font-sans text-ivory-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Camera size={12} />
                <span className="uppercase tracking-widest-2">Wedding of {item.location}</span>
              </div>
            </figcaption>

            {/* Corner ornament */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-midnight-500/70 backdrop-blur-sm border border-champagne-400/40">
                <Icon size={12} className="text-champagne-400" />
              </div>
            </div>
          </figure>
        )
      })}
    </div>
  )
}
