import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn() — Conditional className merger with Tailwind dedupe.
 * Standard shadcn pattern.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * formatRupiah() — Format a number to Indonesian Rupiah currency string.
 *
 * @example
 *   formatRupiah(170_000_000)  // 'Rp 170.000.000'
 *   formatRupiah(1500)         // 'Rp 1.500'
 */
export function formatRupiah(amount: number): string {
  return 'Rp ' + amount.toLocaleString('id-ID', {
    maximumFractionDigits: 0,
  })
}

/**
 * formatRupiahShort() — Compact format (millions/billions).
 *
 * @example
 *   formatRupiahShort(170_000_000)  // 'Rp 170jt'
 *   formatRupiahShort(1_500_000)    // 'Rp 1,5jt'
 */
export function formatRupiahShort(amount: number): string {
  if (amount >= 1_000_000_000) {
    return `Rp ${(amount / 1_000_000_000).toFixed(amount % 1_000_000_000 === 0 ? 0 : 1)}M`
  }
  if (amount >= 1_000_000) {
    return `Rp ${(amount / 1_000_000).toFixed(amount % 1_000_000 === 0 ? 0 : 1)}jt`
  }
  if (amount >= 1_000) {
    return `Rp ${(amount / 1_000).toFixed(0)}rb`
  }
  return `Rp ${amount}`
}

/**
 * slugify() — URL-safe slug from a string.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
