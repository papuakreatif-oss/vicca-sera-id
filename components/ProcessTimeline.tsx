import { Clock } from 'lucide-react'
import { PROCESS_STEPS } from '@/lib/constants'

export function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Vertical gold line for desktop */}
      <div
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-champagne-700/60 to-transparent"
        aria-hidden="true"
      />

      <div className="space-y-12 lg:space-y-20">
        {PROCESS_STEPS.map((step, index) => (
          <div
            key={step.number}
            className={`relative grid lg:grid-cols-2 gap-8 items-start ${
              index % 2 === 1 ? 'lg:[direction:rtl]' : ''
            }`}
          >
            {/* Number badge for desktop */}
            <div
              className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 top-2 z-10 items-center justify-center w-14 h-14 rounded-full bg-midnight-400 border-2 border-champagne-400 shadow-gold-sm ${
                index % 2 === 1 ? '[direction:ltr]' : ''
              }`}
            >
              <span className="font-accent text-base text-champagne-400">
                {step.number}
              </span>
            </div>

            {/* Content */}
            <div
              className={`lg:pr-16 ${index % 2 === 1 ? 'lg:pl-16 lg:pr-0 [direction:ltr]' : ''}`}
            >
              <div className="glass-card group">
                {/* Light leak overlay */}
                <div className="light-leak rounded-2xl" aria-hidden="true" />

                <div className="relative z-10">
                  {/* Number for mobile */}
                  <div className="lg:hidden flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-midnight-400 border-2 border-champagne-400">
                      <span className="font-accent text-sm text-champagne-400">
                        {step.number}
                      </span>
                    </div>
                    <span className="text-xs font-sans uppercase tracking-widest-2 text-champagne-400 flex items-center gap-1.5">
                      <Clock size={12} />
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl lg:text-3xl text-ivory-100 mb-4 font-medium">
                    {step.title}
                  </h3>
                  <p className="text-base font-sans text-ivory-300 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <span className="hidden lg:inline text-xs font-sans uppercase tracking-widest-2 text-champagne-400 font-medium">
                    {step.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Empty spacer for alternating layout */}
            <div className={index % 2 === 1 ? 'lg:pr-16 [direction:ltr]' : 'lg:pl-16'} />
          </div>
        ))}
      </div>
    </div>
  )
}
