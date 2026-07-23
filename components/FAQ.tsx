'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { FAQS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => {
        const isOpen = openIdx === i
        return (
          <div
            key={i}
            className={cn(
              'rounded-2xl border bg-cream-50 transition-all duration-300',
              isOpen
                ? 'border-sage-300 shadow-md'
                : 'border-cream-300 hover:border-sage-200'
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-4 p-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-base lg:text-lg font-medium text-charcoal-700 leading-snug">
                {faq.q}
              </span>
              <span
                className={cn(
                  'flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300',
                  isOpen
                    ? 'bg-sage-300 text-charcoal-700 rotate-180'
                    : 'bg-cream-200 text-charcoal-500'
                )}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>

            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="px-6 pb-6 text-sm font-sans text-charcoal-600 leading-relaxed">
                {faq.a}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
