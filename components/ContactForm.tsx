'use client'

import { useState, useTransition } from 'react'
import { MessageCircle, Loader2, Check, Send } from 'lucide-react'
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
          `📦 Paket: ${pkg?.name || data.package}%0A` +
          `👥 Tamu: ${data.pax} orang%0A` +
          `📅 Tanggal: ${data.date || 'belum fix'}%0A` +
          `📍 Lokasi: ${data.location}%0A` +
          `📞 HP: ${data.phone}%0A` +
          (data.email ? `✉️ Email: ${data.email}%0A` : '') +
          `%0ACatatan:%0A${data.message || '-'}%0A%0A` +
          `Mohon info lebih lanjut. Terima kasih!`

        window.open(`https://wa.me/${BRAND.phone}?text=${waMessage}`, '_blank')
      } catch (err) {
        setError('Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi langsung via WhatsApp.')
      }
    })
  }

  if (submitted) {
    return (
      <div className="bg-sage-50 border border-sage-200 rounded-2xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-300 mb-4">
          <Check size={32} className="text-charcoal-700" strokeWidth={2.5} />
        </div>
        <h3 className="font-serif text-2xl text-charcoal-700 mb-2">
          Terima kasih, Bunda Vicca akan segera menghubungi Anda.
        </h3>
        <p className="text-sm font-sans text-charcoal-600 mb-6">
          Kami sudah membuka WhatsApp. Jika belum terbuka otomatis,
          <a
            href={`https://wa.me/${BRAND.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage-500 hover:text-sage-700 ml-1 underline"
          >
            klik di sini
          </a>.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-secondary text-sm"
        >
          Kirim Inquiry Lain
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
            <option value="" disabled>Pilih paket</option>
            {PACKAGES.map(pkg => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name} — {pkg.tagline} ({pkg.pax} pax)
              </option>
            ))}
            <option value="custom">Custom / Belum tahu</option>
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
            <option value="" disabled>Pilih kota</option>
            <option value="Jayapura">Jayapura</option>
            <option value="Sorong">Sorong</option>
            <option value="Timika">Timika</option>
            <option value="Merauke">Merauke</option>
            <option value="Manokwari">Manokwari</option>
            <option value="Biak">Biak</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Ceritakan visi Anda
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tema, konsep, venue, cerita singkat tentang kalian berdua..."
          className="form-input resize-none"
        />
      </div>

      {error && (
        <div className="rounded-lg bg-rose-100 border border-rose-300 p-4 text-sm text-charcoal-600">
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
            <Loader2 size={18} className="animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            <Send size={18} />
            Kirim & Buka WhatsApp
          </>
        )}
      </button>

      <p className="text-xs font-sans text-charcoal-500 text-center">
        <MessageCircle size={12} className="inline" />
        <span className="ml-1">
          Atau langsung chat di <a href={`https://wa.me/${BRAND.phone}`} target="_blank" rel="noopener noreferrer" className="text-sage-500 hover:text-sage-700 underline">{BRAND.phoneFormatted}</a> (Bunda Vicca)
        </span>
      </p>
    </form>
  )
}
