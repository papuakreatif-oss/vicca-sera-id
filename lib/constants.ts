/**
 * Vicca Sera Wedding Organizer — Single Source of Truth
 *
 * Brand constants, package data, process steps, FAQ items.
 * Imported by all components. NEVER hardcode these values elsewhere.
 */

export const BRAND = {
  name: 'Vicca Sera Wedding Organizer',
  shortName: 'Vicca Sera',
  tagline: 'Wedding Atelier',
  // WhatsApp — Bunda Vicca direct (NOT the WA bot number 0812-4007-3217)
  phone: '6285244661150',
  phoneFormatted: '+62-852-4466-1150',
  email: 'bunda.vicca@papuakreatif.id',
  instagram: 'https://www.instagram.com/viccasera_wo',
  facebook: 'https://www.facebook.com/viccaserawo',
  tiktok: 'https://www.tiktok.com/@viccasera_wo',
  parentBrand: 'Papua Kreatif Group',
  parentUrl: 'https://papuakreatif.id',
  url: 'https://vicca.id',
  established: 1998,
}

export const STATS = [
  { number: '800+', label: 'Pernikahan' },
  { number: '25+', label: 'Tahun' },
  { number: '50+', label: 'Vendor Pilihan' },
  { number: '6', label: 'Kota Layanan' },
]

export interface Package {
  id: string
  name: string
  tagline: string
  pax: number
  priceMin: number
  priceMax: number
  delivery: string
  includes: string[]
  signature: string[]
  featured?: boolean
}

export const PACKAGES: Package[] = [
  {
    id: 'skyline',
    name: 'Skyline',
    tagline: 'Intimate city romance',
    pax: 200,
    priceMin: 170_000_000,
    priceMax: 220_000_000,
    delivery: '1 hari, 1 venue',
    featured: false,
    includes: [
      'Koordinator wedding & rundown',
      'Dekorasi venue + pelaminan',
      'Catering 200 pax (prasmanan + snack box)',
      'Dokumentasi foto + 1 videografer',
      'Make-up & attire pengantin',
      'MC + hiburan akustik',
      'Transportasi pengantin',
      'Buku tamu + souvenir standar',
    ],
    signature: [
      'Konsultasi mendalam dengan Bunda Vicca',
      'Run-through venue H-7',
      'Welcome dinner malam sebelumnya',
    ],
  },
  {
    id: 'cycloop',
    name: 'Cycloop',
    tagline: 'Classic elegance for larger moments',
    pax: 300,
    priceMin: 200_000_000,
    priceMax: 260_000_000,
    delivery: '1 hari, 1 venue utama',
    featured: false,
    includes: [
      'Semua layanan Skyline',
      'Catering 300 pax + menu upgrade',
      'Dokumentasi foto + video + drone',
      'Live streaming ceremony',
      'Entertainment lengkap (band + DJ)',
      'Lighting & tata panggung profesional',
      'Photo booth interaktif',
      'Souvenir premium 300 pcs',
    ],
    signature: [
      'Wedding planner dedicated',
      'Trial menu catering',
      'Pre-wedding photoshoot',
      'Custom invitation design',
    ],
  },
  {
    id: 'numbay',
    name: 'Numbay',
    tagline: 'Heritage romance with full control',
    pax: 400,
    priceMin: 230_000_000,
    priceMax: 290_000_000,
    delivery: '1–2 hari, multi venue',
    featured: true, // PALING DIMINATI
    includes: [
      'Semua layanan Cycloop',
      'Catering 400 pax (signature + buffet island)',
      'Dokumentasi cinematic + drone + same-day edit',
      'Full entertainment (band + DJ + tari adat)',
      'Dekorasi 2 venue (akad + resepsi)',
      'Transportasi tamu (shuttle)',
      'Wedding organizer team 8 orang',
      'Souvenir custom 400 pcs',
    ],
    signature: [
      'Bunda Vicca as personal coordinator',
      'Pre-wedding cinematic video',
      'Custom wedding website',
      'Day-of coordinator 2x shift',
      'Honeymoon planning add-on',
    ],
  },
  {
    id: 'youtefa',
    name: 'Youtefa',
    tagline: 'Bespoke destination wedding',
    pax: 500,
    priceMin: 280_000_000,
    priceMax: 340_000_000,
    delivery: '2–3 hari, destination',
    featured: false,
    includes: [
      'Semua layanan Numbay',
      'Catering 500 pax + chef on-site',
      'Dokumentasi full team (3 fotografer + 2 videografer + drone)',
      'Destination venue sourcing',
      'Akomodasi tamu VIP (10 kamar)',
      'Welcome reception + after-party',
      'Dekorasi custom tema + instalasi seni',
      'Souvenir eksklusif 500 pcs',
    ],
    signature: [
      'Bespoke venue hunting trip',
      'Cultural integration (Papua heritage)',
      'Bunda Vicca + tim 12 orang',
      'Honeymoon 3 hari 2 malam',
      'Annual anniversary dinner (year 1)',
    ],
  },
]

export interface ProcessStep {
  number: string
  title: string
  description: string
  duration: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Konsultasi Awal',
    description:
      'Bercerita tentang visi Anda kepada Bunda Vicca. Kami mendengar, mencatat, dan menerjemahkan ide Anda menjadi konsep yang bisa dieksekusi.',
    duration: '30 menit · gratis',
  },
  {
    number: '02',
    title: 'Konsep & Rancangan',
    description:
      'Tim kreatif kami menyusun moodboard, rundown, dan estimasi biaya detail. Anda akan menerima proposal tertulis dalam 7 hari kerja.',
    duration: '7 hari kerja',
  },
  {
    number: '03',
    title: 'Vendor & Tim',
    description:
      'Bunda Vicca memilih vendor catering, dekorasi, dokumentasi, dan entertainment yang sesuai gaya Anda. Semua briefing kami koordinasikan.',
    duration: '30 hari sebelum hari-H',
  },
  {
    number: '04',
    title: 'Gladi Resik',
    description:
      'Run-through penuh di venue. Semua pihak bertemu, tata panggung dicoba, timeline dikunci. Tidak ada kejutan di hari-H.',
    duration: 'H-7 sampai H-3',
  },
  {
    number: '05',
    title: 'Hari Bahagia Anda',
    description:
      'Tim Vicca Sera hadir 6 jam sebelum acara. Anda fokus menjadi pengantin. Kami pastikan setiap momen terjadi sempurna.',
    duration: 'Hari-H · 14–18 jam',
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Apakah Vicca Sera melayani wedding di luar Jayapura?',
    answer:
      'Ya. Kami melayani 6 kota di Papua: Jayapura, Sorong, Timika, Merauke, Manokwari, dan Biak. Untuk paket Numbay dan Youtefa, tim kami siap menginap di lokasi acara.',
  },
  {
    question: 'Berapa minimal DP untuk booking tanggal?',
    answer:
      'DP booking sebesar 30% dari total paket, dibayar setelah konsep dan rancangan disetujui. Pelunasan paling lambat H-14. Pembayaran dapat dicicil 2 tahap tanpa biaya tambahan.',
  },
  {
    question: 'Bisakah saya customize paket atau menambah layanan?',
    answer:
      'Tentu. Setiap paket adalah titik awal. Bunda Vicca akan membantu menyesuaikan menu, vendor, dan layanan tambahan sesuai kebutuhan Anda. Kami akan menyusun quotation baru tanpa biaya desain ulang.',
  },
  {
    question: 'Bagaimana jika saya ingin tetap di Jakarta saat planning?',
    answer:
      'Banyak klien kami yang merencanakan dari luar Papua. Komunikasi via WhatsApp dan video call berjalan lancar. Tim kami di Jayapura/Sorong/Timika menangani semua eksekusi di lapangan.',
  },
  {
    question: 'Apakah tim Vicca Sera hadir di hari-H?',
    answer:
      'Ya. Minimal 4 orang tim hadir di hari-H untuk paket Skyline/Cycloop, dan 8–12 orang untuk paket Numbay/Youtefa. Bunda Vicca sendiri hadir di paket Numbay dan Youtefa.',
  },
  {
    question: 'Apakah ada layanan honeymoon?',
    answer:
      'Paket Numbay dan Youtefa sudah termasuk perencanaan honeymoon 2–3 hari 2 malam di destinasi pilihan. Kami bekerja sama dengan Injros View Glamping untuk destinasi premium di Papua.',
  },
]
