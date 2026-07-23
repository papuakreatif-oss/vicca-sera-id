'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={cn(
              'rounded-2xl border bg-midnight-200/40 backdrop-blur-sm overflow-hidden transition-all duration-500',
              isOpen
                ? 'border-champagne-400/60 shadow-gold-sm'
                : 'border-champagne-700/30 hover:border-champagne-400/40'
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
            >
              <span
                className={cn(
                  'font-serif text-lg lg:text-xl font-medium transition-colors duration-500',
                  isOpen ? 'text-champagne-400' : 'text-ivory-100'
                )}
              >
                {item.question}
              </span>
              <span
                className={cn(
                  'flex items-center justify-center w-9 h-9 rounded-full border flex-shrink-0 transition-all duration-500',
                  isOpen
                    ? 'bg-champagne-400 border-champagne-400 text-midnight-500 rotate-180'
                    : 'border-champagne-700/50 text-champagne-400'
                )}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>

            <div
              id={`faq-panel-${index}`}
              className={cn(
                'grid transition-all duration-500 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-2 text-sm lg:text-base font-sans text-ivory-300 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
