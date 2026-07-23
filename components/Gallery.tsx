import { Camera } from 'lucide-react'

// Placeholder gallery with elegant gradient cards.
// In production: replace with real photos from gallery.papuakreatif.id

const GALLERY = [
  { id: 1, gradient: 'from-sage-200 to-sage-100', label: 'Garden Wedding' },
  { id: 2, gradient: 'from-rose-200 to-cream-200', label: 'Pelaminan' },
  { id: 3, gradient: 'from-gold-300 to-cream-200', label: 'Momen Sakral' },
  { id: 4, gradient: 'from-sage-100 to-cream-200', label: 'First Dance' },
  { id: 5, gradient: 'from-rose-100 to-rose-200', label: 'Family Portrait' },
  { id: 6, gradient: 'from-cream-200 to-gold-300', label: 'Reception' },
  { id: 7, gradient: 'from-sage-200 to-cream-200', label: 'Catering' },
  { id: 8, gradient: 'from-rose-200 to-rose-300', label: 'Dekorasi' },
]

export function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {GALLERY.map((item, i) => (
        <div
          key={item.id}
          className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} group cursor-pointer ${
            i === 0 || i === 5 ? 'md:row-span-2 md:aspect-[1/2]' : ''
          }`}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />

          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-charcoal-700 group-hover:scale-110 transition-transform duration-500">
            <Camera size={28} className="mb-2 opacity-60" strokeWidth={1.5} />
            <p className="font-serif text-lg italic">{item.label}</p>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-charcoal-700/0 group-hover:bg-charcoal-700/20 transition-colors duration-500" />
        </div>
      ))}
    </div>
  )
}
