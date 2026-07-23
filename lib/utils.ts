import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn — Conditional className merger.
 * Combines clsx + tailwind-merge untuk smart Tailwind class combination.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * formatRupiah — Format angka ke Rupiah IDR.
 * Example: 220000000 → "Rp 220.000.000"
 */
export function formatRupiah(amount: number, prefix: string = 'Rp '): string {
  return `${prefix}${amount.toLocaleString('id-ID')}`
}

/**
 * formatPax — Format guest count.
 * Example: 200 → "200 tamu"
 */
export function formatPax(count: number): string {
  return `${count} tamu`
}

/**
 * formatWhatsAppURL — Build WhatsApp click-to-chat URL.
 */
export function formatWhatsAppURL(
  phone: string,
  message?: string
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '').replace(/^0/, '62')
  const url = `https://wa.me/${cleanPhone}`
  if (message) {
    return `${url}?text=${encodeURIComponent(message)}`
  }
  return url
}

/**
 * slugify — Convert string to URL-safe slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
