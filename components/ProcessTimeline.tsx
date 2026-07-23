import { PROCESS_STEPS } from '@/lib/constants'

export function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Vertical line for desktop */}
      <div
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-sage-200"
        aria-hidden="true"
      />

      <div className="space-y-12 lg:space-y-16">
        {PROCESS_STEPS.map((step, index) => (
          <div
            key={step.number}
            className={`relative grid lg:grid-cols-2 gap-8 items-start ${
              index % 2 === 1 ? 'lg:[direction:rtl]' : ''
            }`}
          >
            {/* Number badge for desktop */}
            <div
              className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 z-10 items-center justify-center w-14 h-14 rounded-full bg-cream-100 border-2 border-sage-300 shadow-sm ${
                index % 2 === 1 ? '[direction:ltr]' : ''
              }`}
            >
              <span className="font-serif text-base text-sage-500 font-medium">
                {step.number}
              </span>
            </div>

            {/* Content - alternating sides */}
            <div
              className={`lg:pr-16 ${index % 2 === 1 ? 'lg:pl-16 lg:pr-0 [direction:ltr]' : ''}`}
            >
              <div className="bg-cream-50 rounded-2xl p-8 border border-cream-300 hover:shadow-lg transition-shadow">
                {/* Number for mobile */}
                <div className="lg:hidden flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cream-100 border-2 border-sage-300">
                    <span className="font-serif text-sm text-sage-500 font-medium">
                      {step.number}
                    </span>
                  </div>
                  <span className="text-xs font-sans uppercase tracking-wider text-charcoal-500">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-serif text-2xl lg:text-3xl text-charcoal-700 mb-3 font-medium">
                  {step.title}
                </h3>
                <p className="text-base font-sans text-charcoal-600 leading-relaxed mb-4">
                  {step.description}
                </p>

                <span className="hidden lg:inline text-xs font-sans uppercase tracking-wider text-sage-500 font-medium">
                  ⏱ {step.duration}
                </span>
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
