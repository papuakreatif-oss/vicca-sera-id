import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Romantic Elegance palette — wedding-specific, distinct from
        // event_papua_com (Midnight/Mint/Pink dark-mode) and inpro.id (Navy/Gold/Red light)
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F2',   // base background
          200: '#F4EFE7',
          300: '#EBE3D4',
        },
        sage: {
          50: '#F0F3ED',
          100: '#DCE4D6',
          200: '#B8C7AE',
          300: '#9CAF88',   // primary
          400: '#7A9266',
          500: '#5F754F',
          600: '#4A5C3E',
          700: '#3A4832',
        },
        rose: {
          100: '#F2E5E5',
          200: '#E8CFCF',
          300: '#D4A5A5',   // CTA accent
          400: '#B88282',
          500: '#9C6060',
        },
        charcoal: {
          400: '#5C5C5C',
          500: '#3D3D3D',
          600: '#2C2C2C',   // main text
          700: '#1F1F1F',
          900: '#0F0F0F',
        },
        gold: {
          300: '#E0CE9E',
          400: '#C9A961',   // luxury accent
          500: '#A88845',
          600: '#8A6F38',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'widest-2': '0.3em',
      },
      fontSize: {
        // Editorial scale — serif display
        'display-1': ['clamp(3.5rem, 9vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-2': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'display-3': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.3em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          from: { backgroundPosition: '-1000px 0' },
          to: { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(180deg, #FAF7F2 0%, #F4EFE7 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
