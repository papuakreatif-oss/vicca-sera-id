'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Paket', href: '#packages' },
  { label: 'Proses', href: '#process' },
  { label: 'Cerita', href: '#testimonials' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-700',
        scrolled
          ? 'bg-midnight-500/95 backdrop-blur-md border-b border-champagne-700/30 shadow-midnight-md'
          : 'bg-transparent'
      )}
    >
      <div className="container-editorial flex items-center justify-between py-5">
        {/* Logo */}
        <a href="#hero" className="flex items-baseline gap-3 group">
          <span
            className="font-accent text-2xl md:text-3xl text-champagne-400 group-hover:text-champagne-300 transition-colors duration-500"
            style={{ letterSpacing: '0.05em' }}
          >
            Vicca Sera
          </span>
          <span className="hidden md:inline text-eyebrow uppercase tracking-widest-3 text-ivory-400 font-sans font-light">
            Wedding Atelier
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-xs font-sans uppercase tracking-widest-2 text-ivory-200 hover:text-champagne-400 transition-colors duration-500 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-champagne-400 transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href={`https://wa.me/${BRAND.phone}?text=${encodeURIComponent('Halo Bunda Vicca, saya tertarik dengan paket wedding Vicca Sera. Mohon info lebih lanjut.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-champagne-400 bg-transparent px-6 py-2.5 text-xs font-sans uppercase tracking-widest-2 text-champagne-400 transition-all duration-500 hover:bg-champagne-400 hover:text-midnight-500 hover:shadow-gold-sm"
          >
            Konsultasi
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-champagne-400 hover:text-champagne-300 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-midnight-500/98 backdrop-blur-md border-t border-champagne-700/30 animate-fade-in">
          <nav className="container-editorial py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-sans uppercase tracking-widest-2 text-ivory-200 hover:text-champagne-400 transition-colors duration-500 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${BRAND.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-4 text-xs"
            >
              Konsultasi via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
