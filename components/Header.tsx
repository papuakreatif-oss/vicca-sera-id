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
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-cream-100/90 backdrop-blur-md border-b border-cream-300 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-editorial flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl md:text-3xl font-medium text-charcoal-700 group-hover:text-sage-500 transition-colors">
            Vicca Sera
          </span>
          <span className="hidden md:inline text-eyebrow uppercase tracking-widest-2 text-charcoal-500 font-sans">
            Wedding
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans font-medium text-charcoal-600 hover:text-sage-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href={`https://wa.me/${BRAND.phone}?text=${encodeURIComponent('Halo Bunda Vicca, saya tertarik dengan paket wedding Vicca Sera. Boleh info lebih lanjut?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-6 py-3"
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-charcoal-600 hover:text-sage-500 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream-100 border-t border-cream-300 animate-fade-in">
          <nav className="container-editorial py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-sans font-medium text-charcoal-600 hover:text-sage-500 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${BRAND.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 text-sm"
            >
              Konsultasi via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
