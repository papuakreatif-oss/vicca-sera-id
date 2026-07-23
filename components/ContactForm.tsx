'use client'

import { useState, useTransition } from 'react'
import { MessageCircle, Loader2, Check, Send, Heart } from 'lucide-react'
import { BRAND, PACKAGES } from '@/lib/constants'

export function ContactForm() {
  const [pending, startTransition] = useTransition()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      package: formData.get('package') as string,
      pax: formData.get('pax') as string,
      date: formData.get('date') as string,
      location: formData.get('location') as string,
      message: formData.get('message') as string,
      honeypot: formData.get('website') as string, // bot trap — must be empty
    }

    // Honeypot — bots fill this, humans don't see it
    if (data.honeypot) {
      setSubmitted(true)
      return
    }

    startTransition(async () => {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })

        if (!res.ok) {
          throw new Error('Submission failed')
        }

        setSubmitted(true)

        // Build WA message and open
        const pkg = PACKAGES.find(p => p.id === data.package)
        const waMessage = `Halo Bunda Vicca, saya ${data.name} ingin konsultasi wedding:%0A%0A` +
          `✦ Paket: ${pkg?.name || data.package}%0A` +
          `✦ Tamu: ${data.pax} orang%0A` +
          `✦ Tanggal: ${data.date || 'belum fix'}%0A` +
          `✦ Lokasi: ${data.location}%0A` +
          `✦ HP: ${data.phone}%0A` +
          (data.email ? `✦ Email: ${data.email}%0A` : '') +
          `%0A— Cerita kami —%0A${data.message || '—'}%0A%0A` +
          `Mohon info lebih lanjut. Terima kasih 🙏`

        window.open(`https://wa.me/${BRAND.phone}?text=${waMessage}`, '_blank')
      } catch (err) {
        setError('Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi langsung via WhatsApp.')
      }
    })
  }

  if (submitted) {
    return (
      <div className="glass-card-featured p-10 lg:p-12 text-center relative overflow-hidden">
        <div className="light-leak rounded-2xl" aria-hidden="true" />
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-champagne-400 mb-6">
            <Heart size={28} className="text-midnight-500 fill-midnight-500" />
          </div>
          <h3 className="font-serif text-2xl lg:text-3xl text-ivory-100 mb-4">
            Terima kasih.
          </h3>
          <p className="text-base font-sans text-ivory-300 mb-8 max-w-md mx-auto leading-relaxed">
            Bunda Vicca akan menghubungi Anda dalam 2 jam. WhatsApp sudah terbuka otomatis untuk melanjutkan percakapan.
          </p>
          <a
            href={`https://wa.me/${BRAND.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs"
          >
            <MessageCircle size={14} />
            Buka WhatsApp
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="block mx-auto mt-5 text-xs font-sans text-ivory-400 hover:text-champagne-400 transition-colors duration-300 uppercase tracking-widest-2"
          >
            Kirim inquiry lain
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="form-label">
            Nama Lengkap *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Yuliana & Yance"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="phone" className="form-label">
            No WhatsApp *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="08123456789"
            className="form-input"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="anda@email.com"
          className="form-input"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="package" className="form-label">
            Paket *
          </label>
          <select
            id="package"
            name="package"
            required
            className="form-input"
            defaultValue=""
          >
            <option value="" disabled className="bg-midnight-500">Pilih paket</option>
            {PACKAGES.map(pkg => (
              <option key={pkg.id} value={pkg.id} className="bg-midnight-500">
                {pkg.name} — {pkg.tagline} ({pkg.pax} pax)
              </option>
            ))}
            <option value="custom" className="bg-midnight-500">Custom / Belum tahu</option>
          </select>
        </div>
        <div>
          <label htmlFor="pax" className="form-label">
            Estimasi Tamu *
          </label>
          <input
            id="pax"
            name="pax"
            type="number"
            required
            min="50"
            max="1000"
            placeholder="200"
            className="form-input"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="date" className="form-label">
            Tanggal Target
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="location" className="form-label">
            Lokasi *
          </label>
          <select
            id="location"
            name="location"
            required
            className="form-input"
            defaultValue=""
          >
            <option value="" disabled className="bg-midnight-500">Pilih kota</option>
            <option value="Jayapura" className="bg-midnight-500">Jayapura</option>
            <option value="Sorong" className="bg-midnight-500">Sorong</option>
            <option value="Timika" className="bg-midnight-500">Timika</option>
            <option value="Merauke" className="bg-midnight-500">Merauke</option>
            <option value="Manokwari" className="bg-midnight-500">Manokwari</option>
            <option value="Biak" className="bg-midnight-500">Biak</option>
            <option value="Lainnya" className="bg-midnight-500">Lainnya</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Ceritakan Visi Anda
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tema, konsep, venue, atau cerita singkat tentang kalian berdua..."
          className="form-input resize-none"
        />
      </div>

      {/* Honeypot — hidden from humans, bots fill this */}
      <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
        <label htmlFor="website">Website (leave empty)</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <div className="rounded-lg border border-blush-400/40 bg-blush-400/10 p-4 text-sm text-ivory-200">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            <Send size={16} />
            Kirim & Buka WhatsApp
          </>
        )}
      </button>

      <p className="text-xs font-sans text-ivory-400 text-center">
        Atau langsung chat Bunda Vicca di
        <a href={`https://wa.me/${BRAND.phone}`} target="_blank" rel="noopener noreferrer" className="ml-1 text-champagne-400 hover:text-champagne-300 transition-colors underline">
          {BRAND.phoneFormatted}
        </a>
      </p>
    </form>
  )
}
