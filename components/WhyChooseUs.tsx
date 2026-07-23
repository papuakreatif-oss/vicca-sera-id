import { Sparkles, Heart, Crown, Compass } from 'lucide-react'

const DIFFERENTIATORS = [
  {
    icon: Sparkles,
    title: 'Pengalaman 25+ Tahun',
    description:
      'Sejak 1998, kami merayakan lebih dari 800 pernikahan di Papua. Pengalaman panjang ini berarti setiap detail kecil sudah kami antisipasi.',
    metric: '800+',
    metricLabel: 'Pernikahan Dirayakan',
  },
  {
    icon: Heart,
    title: 'Tim yang Merawat Detail',
    description:
      'Setiap rundown, timeline, dan briefing kami kerjakan dengan teliti. Bunda Vicca sendiri memastikan setiap klien mendapat perhatian penuh.',
    metric: '24/7',
    metricLabel: 'Dukungan Tim',
  },
  {
    icon: Crown,
    title: 'Standar Internasional',
    description:
      'Vendor catering, dekorasi, dan dokumentasi pilihan yang sudah teruji. Setiap elemen pernikahan Anda setara dengan wedding organizer kelas dunia.',
    metric: '50+',
    metricLabel: 'Vendor Pilihan',
  },
  {
    icon: Compass,
    title: 'Sentuhan Lokal Papua',
    description:
      'Menggabungkan kekayaan budaya Papua ke dalam pernikahan Anda — dari motif tenun, dekorasi noken, hingga kuliner khas.',
    metric: '6',
    metricLabel: 'Kota Layanan',
  },
]

export function WhyChooseUs() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {DIFFERENTIATORS.map((item, index) => {
        const Icon = item.icon
        return (
          <div key={index} className="glass-card group relative">
            {/* Light leak overlay */}
            <div className="light-leak rounded-2xl" aria-hidden="true" />

            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full bg-midnight-300 border border-champagne-400/30 group-hover:border-champagne-400 transition-colors duration-500">
                <Icon size={20} className="text-champagne-400" strokeWidth={1.5} />
              </div>

              <h3 className="font-serif text-xl text-ivory-100 mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm font-sans text-ivory-300 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="pt-5 border-t border-champagne-700/30">
                <p className="font-accent text-2xl text-champagne-400 mb-1">
                  {item.metric}
                </p>
                <p className="text-xs font-sans text-ivory-400 uppercase tracking-widest-2">
                  {item.metricLabel}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
