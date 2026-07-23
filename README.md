# Vicca Sera — Wedding Landing Page

> Landing page premium untuk Vicca Sera Wedding Organizer (Papua Kreatif Group).
> Next.js 14 + Tailwind CSS + TypeScript + Framer Motion + Lucide Icons.

## ✦ Overview

World-class landing page dengan **Romantic Elegance** design system:

- **Palette**: Cream `#FAF7F2` + Sage Green `#9CAF88` + Dusty Rose `#D4A5A5` + Gold `#C9A961` + Charcoal `#2C2C2C`
- **Typography**: Cormorant Garamond (display serif) + Inter (body sans)
- **Mood**: Elegan, intimate, premium — distinctly different dari event_papua_com (dark mode) dan inpro.id (navy/gold)

## 🎯 Sections

1. **Hero** — cinematic intro dengan serif headline, gradient warm, animated stats
2. **Packages** — 4 paket (Skyline / Cycloop / Numbay / Youtefa) dengan featured badge untuk Cycloop
3. **Why Vicca Sera** — 5 differentiators
4. **Process** — 6-step wedding journey timeline dengan alternating layout
5. **Testimonials** — 4 cerita klien dengan rating + lokasi + paket
6. **Gallery** — masonry placeholder (replace dengan foto real di production)
7. **Contact Form** — 8-field inquiry form + auto-open WhatsApp dengan template
8. **FAQ** — 10 pertanyaan umum dengan accordion
9. **Footer** — CTA banner + 4-column nav + social + bottom bar

## 🛠 Tech Stack

- **Next.js 14.2** (App Router + RSC + Server Actions)
- **React 18.3** + **TypeScript 5.5**
- **Tailwind CSS 3.4** dengan custom Romantic Elegance palette
- **Framer Motion 11** (animations)
- **Lucide React** (icons)
- **clsx + tailwind-merge** (className utilities)

## 📁 Project Structure

```
vicca-sera-id/
├── app/
│   ├── api/contact/route.ts      # POST endpoint for form submissions
│   ├── globals.css               # Editorial base styles + animations
│   ├── layout.tsx                # Fonts + SEO + JSON-LD LocalBusiness
│   └── page.tsx                  # Main composition (8 sections)
├── components/
│   ├── Header.tsx                # Sticky nav with mobile menu
│   ├── Hero.tsx                  # Cinematic hero with gradient + stats
│   ├── PackageCard.tsx           # 4-tier package card with featured badge
│   ├── ProcessTimeline.tsx       # 6-step alternating timeline
│   ├── ContactForm.tsx           # Inquiry form with WA deep-link
│   ├── FAQ.tsx                   # Accordion FAQ
│   ├── Gallery.tsx               # Masonry placeholder
│   └── Footer.tsx                # CTA banner + 4-col + social
├── lib/
│   ├── constants.ts              # BRAND, PACKAGES, PROCESS, FAQS, etc
│   └── utils.ts                  # cn + formatRupiah + formatWhatsAppURL
├── public/                       # Static assets (favicon, og image)
├── tailwind.config.ts            # Romantic Elegance palette + animations
├── next.config.mjs               # Security headers + image config
└── package.json
```

## 🚀 Local Development

```bash
# Install dependencies
npm install
# or
pnpm install

# Run dev server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Type check
npm run type-check
```

## 🌐 Deployment (Vercel)

### Quick Deploy

1. Push repo ke GitHub (sudah dilakukan: `papuakreatif-oss/vicca-sera-id`)
2. Buka https://vercel.com/new dan import repo `vicca-sera-id`
3. Set environment variables (lihat `.env.example`)
4. Klik **Deploy** — selesai dalam 2 menit

### Custom Domain (vicca.id)

Setelah deploy berhasil:

1. Vercel Dashboard → Project → Settings → Domains → Add `vicca.id`
2. Copy DNS records dari Vercel:
   - Untuk apex `vicca.id`: A record `@` → `76.76.21.21`
   - Untuk `www.vicca.id`: CNAME `www` → `cname.vercel-dns.com`
3. Set di Cloudflare DNS (papuakreatif.id zone)
4. Tunggu propagasi 5-30 menit
5. SSL auto-issue oleh Vercel

### Environment Variables

```env
# Production (Vercel)
NEXT_PUBLIC_SITE_URL=https://vicca.id
WA_PHONE=6285244661150
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/vicca-inquiry
RESEND_API_KEY=re_xxx
```

## 📊 Production Checklist

- [ ] Replace `app/layout.tsx` `og-vicca-sera.jpg` di `public/images/` dengan foto real
- [ ] Add `public/favicon.ico` (32x32, 180x180 apple-touch-icon)
- [ ] Replace placeholder gradient di `components/Gallery.tsx` dengan foto real
- [ ] Connect `app/api/contact/route.ts` ke n8n webhook + Resend email
- [ ] Setup Plausible / GA4 untuk analytics
- [ ] Submit sitemap ke Google Search Console
- [ ] Verify OG image rendering (https://www.opengraph.xyz/)

## 🔗 Related Projects

- **Papua Kreatif Group** (parent): https://github.com/papuakreatif-oss/papuakreatif
- **event_papua.com** (sister dark-mode): https://github.com/papuakreatif-oss/event_papua_com
- **inpro.id** (sister EO): coming soon

## 📞 Contact

- **Bunda Vicca** (Wedding Lead): 0852-4466-1150
- **Halo Vicca**: halo@vicca.id
- **Papua Kreatif Group**: https://papuakreatif.id

---

© 2026 Papua Kreatif Group. All rights reserved.

by Kaka Yaklep - AI Assistant diciptakan & bekerja untuk kaka Indra TJ. papuakreatif.id
