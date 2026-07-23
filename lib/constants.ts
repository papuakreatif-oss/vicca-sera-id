/**
 * Constants — All static data for Vicca Sera wedding landing page.
 *
 * Includes:
 *   - Packages (SKYLINE, CYCLOOP, NUMBAY, YOUTEFA)
 *   - Process steps (6-step wedding journey)
 *   - Testimonials (real-feel stories)
 *   - FAQ (10 common questions)
 *   - Gallery photos (placeholder)
 *   - Why Us (5 differentiators)
 *
 * Note: All pricing is "mulai dari" floor (negotiation happens on discovery call).
 */

// ================================================
// BRAND
// ================================================
export const BRAND = {
  name: 'Vicca Sera',
  tagline: 'Wedding Organizer',
  phone: '6285244661150', // Bunda Vicca
  phoneFormatted: '0852-4466-1150',
  email: 'halo@vicca.id',
  address: 'Jayapura, Papua',
  region: 'Papua, Indonesia',
  instagram: 'https://www.instagram.com/viccasera_wo',
  tiktok: 'https://www.tiktok.com/@viccasera_wo',
  facebook: 'https://www.facebook.com/viccaserawo',
  parentBrand: 'Papua Kreatif Group',
  parentUrl: 'https://papuakreatif.id',
}

// ================================================
// PACKAGES — 4 Wedding Packages
// ================================================
export interface Package {
  id: string
  name: string
  tagline: string
  pax: number
  priceMin: number
  priceMax: number
  featured?: boolean
  includes: string[]
  signature: string[]
  delivery: string
}

export const PACKAGES: Package[] = [
  {
    id: 'skyline',
    name: 'Skyline',
    tagline: 'Intimate Elegance',
    pax: 200,
    priceMin: 170_000_000,
    priceMax: 220_000_000,
    includes: [
      'Wedding Organizer + Day Coordinator',
      'Catering 200 pax (5 menu + 1 dessert)',
      'Dekorasi venue + pelaminan',
      'Dokumentasi foto + video cinematic',
      'Entertainment (band akustik + MC)',
      'Bridal make up + 2 busana pengantin',
      'Rundown + timeline + briefing',
    ],
    signature: [
      'Floral arrangement lokal Papua',
      'Reserved VIP parking untuk keluarga',
    ],
    delivery: '6–8 minggu persiapan',
  },
  {
    id: 'cycloop',
    name: 'Cycloop',
    tagline: 'Refined Celebration',
    pax: 300,
    priceMin: 200_000_000,
    priceMax: 260_000_000,
    featured: true,
    includes: [
      'Semua layanan Skyline',
      'Catering 300 pax (7 menu + 2 dessert)',
      'Dekorasi venue + pelaminan luxury',
      'Dokumentasi foto + video + drone',
      'Live band + MC + sound system pro',
      'Bridal make up + 4 busana pengantin',
      'Honeymoon voucher + guest book',
    ],
    signature: [
      'Custom signage & monogram',
      'Reserved lounge untuk VIP',
      'Free upgrade menu untuk 30 pax VIP',
    ],
    delivery: '4–6 minggu persiapan',
  },
  {
    id: 'numbay',
    name: 'Numbay',
    tagline: 'Grand Heritage',
    pax: 400,
    priceMin: 230_000_000,
    priceMax: 290_000_000,
    includes: [
      'Semua layanan Cycloop',
      'Catering 400 pax (8 menu + 3 dessert)',
      'Dekorasi venue + pelaminan heritage',
      'Dokumentasi full team (3 fotografer, 2 videografer)',
      'Live band + MC + DJ + lighting pro',
      'Bridal make up + 6 busana pengantin',
      'Honeymoon 2D1N + gift hamper',
    ],
    signature: [
      'Cultural performance (tarian adat)',
      'Reserved dining room keluarga inti',
      'Welcome dinner H-1 untuk keluarga',
    ],
    delivery: '3–5 minggu persiapan',
  },
  {
    id: 'youtefa',
    name: 'Youtefa',
    tagline: 'Royal Affair',
    pax: 500,
    priceMin: 280_000_000,
    priceMax: 340_000_000,
    includes: [
      'Semua layanan Numbay',
      'Catering 500 pax (10 menu + 4 dessert)',
      'Dekorasi venue + pelaminan imperial',
      'Dokumentasi full team + same-day edit video',
      'Live band + MC + DJ + orchestra',
      'Bridal make up + 8 busana pengantin',
      'Honeymoon 3D2N + after-party',
    ],
    signature: [
      'Pre-wedding photoshoot di 2 lokasi',
      'Butler service untuk keluarga VIP',
      'Live streaming untuk keluarga di luar kota',
      'Wedding planner dedicated 24/7',
    ],
    delivery: '2–4 minggu persiapan (priority)',
  },
]

// ================================================
// PROCESS — 6-step Wedding Journey
// ================================================
export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'Kami dengarkan visi Anda. Ceritakan tema, budget, dan tanggal. 30 menit via WA Bunda Vicca.',
    duration: '30 menit',
  },
  {
    number: '02',
    title: 'Konsep & Quotation',
    description: 'Tim menyusun konsep visual + quotation detail sesuai paket pilihan Anda. Negosiasi terbuka, transparan, tanpa hidden fee.',
    duration: '2–3 hari',
  },
  {
    number: '03',
    title: 'Booking & Kontrak',
    description: 'DP 30% untuk lock tanggal di kalender vendor + venue. Kontrak resmi dengan detail deliverables.',
    duration: 'H-1 setelah deal',
  },
  {
    number: '04',
    title: 'Persiapan & Detail',
    description: 'Meeting rutin 2x/bulan. Fitting baju, food tasting, dekor mockup, rundown final, dan briefing keluarga.',
    duration: '4–8 minggu',
  },
  {
    number: '05',
    title: 'Hari Bahagia',
    description: 'Tim onsite 8 jam sebelum acara. Kami handle semua — Anda tinggal tenang, tersenyum, dan nikmati.',
    duration: 'Hari H',
  },
  {
    number: '06',
    title: 'Penutupan & Kenangan',
    description: 'Album foto + video cinematic jadi. Plus complimentary after-wedding dinner untuk keluarga inti.',
    duration: '2–4 minggu setelah H',
  },
]

// ================================================
// TESTIMONIALS
// ================================================
export interface Testimonial {
  name: string
  wedding: string
  location: string
  date: string
  quote: string
  rating: number
  package: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Yuliana & Yance',
    wedding: 'Pernikahan Adat + Resepsi Modern',
    location: 'Sorong',
    date: 'Maret 2026',
    quote:
      'Bunda Vicca luar biasa. Semua berjalan sempurna — dari dekorasi adat hingga dress code modern. Keluarga besar kami yang dari Jawa, Bali, dan Papua semuanya merasa nyaman. Lebih dari sekedar WO, mereka keluarga.',
    rating: 5,
    package: 'Youtefa',
  },
  {
    name: 'Indri & Robert',
    wedding: 'Garden Wedding',
    location: 'Jayapura',
    date: 'November 2025',
    quote:
      'Awalnya ragu WO di Papua bisa sekelas Jakarta. Vicca Sera buktikan kami salah. Catering enak, dekorasi rapi, dokumentasi cinematic. Tamu 350 orang semua happy.',
    rating: 5,
    package: 'Numbay',
  },
  {
    name: 'Marsela & Daniel',
    wedding: 'Beach Wedding',
    location: 'Biak',
    date: 'Juli 2025',
    quote:
      'Konsep beach wedding di Biak penuh tantangan — akses, listrik, cuaca. Tim Vicca Sera handle semuanya profesional. Bahkan groom yang awalnya grogi jadi enjoy banget karena koordinatornya sigap.',
    rating: 5,
    package: 'Cycloop',
  },
  {
    name: 'Greta & Yosua',
    wedding: 'Intimate Wedding',
    location: 'Timika',
    date: 'April 2025',
    quote:
      'Paket Skyline worth it banget. Hanya 150 tamu tapi terasa intimate dan elegan. Ornamen bunga lokal + view Pegunungan Tembagapura = unforgettable.',
    rating: 5,
    package: 'Skyline',
  },
]

// ================================================
// WHY VICCA SERA — 5 Differentiators
// ================================================
export const DIFFERENTIATORS = [
  {
    icon: 'Heart',
    title: 'Sentuhan Lokal, Standar Internasional',
    description:
      'Kami tahu adat Papua, tapi tidak ketinggalan tren global. Setiap pernikahan adalah kanvas untuk warisan budaya dan cita rasa modern.',
  },
  {
    icon: 'Users',
    title: 'Tim Berpengalaman 25+ Tahun',
    description:
      'Backbone Papua Kreatif Group yang telah handle 500+ event sejak 1998. Anda dipegang tim yang sudah teruji.',
  },
  {
    icon: 'Sparkles',
    title: 'Bundling Lengkap, Tanpa Hidden Fee',
    description:
      'WO + Catering + Dekorasi + Photo/Video + Entertainment — semua sudah dalam paket. Negosiasi terbuka, quotation transparan.',
  },
  {
    icon: 'MapPin',
    title: 'Jangkauan Papua & Eastern Indonesia',
    description:
      'Tim onsite Jayapura, Sorong, Timika, Merauke, Manokwari, Biak. Kami yang urus vendor lokal, Anda tinggal datang.',
  },
  {
    icon: 'Clock',
    title: 'Respons Cepat, Layanan Personal',
    description:
      'Bunda Vicca WhatsApp langsung. Konsultasi gratis 30 menit. Meeting fleksibel, briefing keluarga online/offline.',
  },
]

// ================================================
// FAQ
// ================================================
export interface FAQItem {
  q: string
  a: string
}

export const FAQS: FAQItem[] = [
  {
    q: 'Apakah Vicca Sera melayani wedding di luar Papua?',
    a: 'Ya, kami melayani wedding di seluruh Indonesia. Untuk luar Papua, ada surcharge logistik dan akomodasi tim onsite. Hubungi Bunda Vicca untuk quotation khusus.',
  },
  {
    q: 'Berapa minimal DP untuk booking tanggal?',
    a: 'DP 30% dari total paket untuk lock tanggal di kalender vendor dan venue. Pelunasan paling lambat H-14 sebelum acara. Pembayaran via transfer bank (Mandiri) atau QRIS.',
  },
  {
    q: 'Apakah paket sudah termasuk semua kebutuhan wedding?',
    a: 'Ya, semua paket sudah bundling: Wedding Organizer + Catering + Dekorasi + Photo/Video + Entertainment + Bridal. Anda tinggal tambah honeymoon, after-party, atau custom sesuai paket.',
  },
  {
    q: 'Bisakah kami custom paket sesuai budget kami?',
    a: 'Tentu. Discovery call pertama akan kami dengarkan kebutuhan dan budget Anda. Kami susun paket custom dengan deliverables jelas dan tanpa hidden fee.',
  },
  {
    q: 'Bagaimana jika ada perubahan konsep di tengah jalan?',
    a: 'Perubahan konsep dibahas di meeting persiapan. Tim kami terbuka untuk revisi selama masih dalam ruang lingkup paket. Untuk perubahan besar di luar scope, akan ada penyesuaian biaya yang disepakati kedua pihak.',
  },
  {
    q: 'Apakah Vicca Sera punya vendor tetap di setiap kota?',
    a: 'Ya. Kami punya jaringan vendor terpercaya di Jayapura, Sorong, Timika, Merauke, Manokwari, Biak. Semua sudah di-screening quality, harga, dan ketepatan waktu.',
  },
  {
    q: 'Bagaimana sistem pembayaran?',
    a: 'DP 30% saat deal, pelunasan H-14. Pembayaran via transfer bank (Mandiri 154-00-1529504-5 a.n. Papua Kreatif) atau QRIS. Invoice resmi dengan PPN.',
  },
  {
    q: 'Apakah ada garansi kepuasan?',
    a: 'Kami stand behind our work. Jika ada deliverable yang tidak sesuai kontrak, kami revisi tanpa biaya tambahan. Ini komitmen kami — bukan hanya slogan.',
  },
  {
    q: 'Kapan sebaiknya mulai konsultasi?',
    a: 'Idealnya 6–12 bulan sebelum tanggal acara. Tapi kami juga handle wedding express 1–3 bulan (dengan adjustment scope dan biaya vendor). Yang penting, hubungi kami sesegera mungkin.',
  },
  {
    q: 'Apakah melayani wedding adat Papua?',
    a: 'Tentu! Kami punya tim yang paham adat Papua: mulai dari prosesi pinang, sasi, tarian adat, hingga ritual adat spesifik untuk keluarga besar. Diskusi detail di discovery call.',
  },
]

// ================================================
// GALLERY — Placeholder photo gallery
// (in production, replace with real gallery URLs from gallery.papuakreatif.id)
// ================================================
export const GALLERY_PHOTOS = [
  { id: 1, alt: 'Wedding ceremony altar', aspect: 'portrait' },
  { id: 2, alt: 'Bridal portrait in garden', aspect: 'landscape' },
  { id: 3, alt: 'Reception dinner setup', aspect: 'portrait' },
  { id: 4, alt: 'Couple first dance', aspect: 'landscape' },
  { id: 5, alt: 'Floral arrangement detail', aspect: 'portrait' },
  { id: 6, alt: 'Family group photo', aspect: 'landscape' },
]

// ================================================
// STATS — Social proof numbers
// ================================================
export const STATS = [
  { number: '500+', label: 'Event Sukses' },
  { number: '25+', label: 'Tahun Pengalaman' },
  { number: '98%', label: 'Kepuasan Klien' },
  { number: '6', label: 'Kota di Papua' },
]
