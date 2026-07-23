import { Camera, Heart, Sparkles } from 'lucide-react'

const GALLERY_ITEMS = [
  {
    title: 'Yuliana & Yance',
    location: 'Jayapura',
    palette: 'champagne' as const,
    icon: Heart,
    aspect: 'aspect-[4/5]',
  },
  {
    title: 'Stella & Rendy',
    location: 'Sorong',
    palette: 'blush' as const,
    icon: Sparkles,
    aspect: 'aspect-[3/4]',
  },
  {
    title: 'Marsela & Doni',
    location: 'Timika',
    palette: 'sage' as const,
    icon: Heart,
    aspect: 'aspect-[4/5]',
  },
  {
    title: 'Yuni & Yosua',
    location: 'Merauke',
    palette: 'champagne' as const,
    icon: Heart,
    aspect: 'aspect-[3/4]',
  },
  {
    title: 'Gracia & Michael',
    location: 'Jayapura',
    palette: 'blush' as const,
    icon: Heart,
    aspect: 'aspect-[4/5]',
  },
  {
    title: 'Anastasya & Bram',
    location: 'Manokwari',
    palette: 'sage' as const,
    icon: Sparkles,
    aspect: 'aspect-[3/4]',
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
            {/* Cinematic gradient placeholder */}
            <div className={PALETTE_BG[item.palette] + ' absolute inset-0 transition-transform duration-700 group-hover:scale-110'} />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-700/90 via-midnight-500/20 to-transparent" />

            {/* Decorative ornament */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
              <Icon size={48} className="text-champagne-400" strokeWidth={1} />
            </div>

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
