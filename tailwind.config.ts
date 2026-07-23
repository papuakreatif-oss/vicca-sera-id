import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Midnight Romance — Wedding World-Class Dark Palette
        midnight: {
          50: '#1A1E2E',
          100: '#141828',
          200: '#101425',
          300: '#0C1020',
          400: '#0A0E1F',   // base background (deeper than event_papua)
          500: '#070B1A',
          600: '#050814',
          700: '#03060F',
          900: '#020308',
        },
        champagne: {
          100: '#F5E6D3',
          200: '#E8D2B0',
          300: '#DCC494',
          400: '#D4AF7A',   // luxury accent (primary gold)
          500: '#B8945E',
          600: '#9A7A48',
          700: '#7A5F38',
          800: '#5C4728',
        },
        ivory: {
          50: '#FAF7F0',
          100: '#F5EFE6',   // warm text (not stark white)
          200: '#E8DDCC',
          300: '#D6C9B0',
          400: '#B5A48A',
          500: '#8B7E68',
        },
        blush: {
          100: '#FAEAEC',
          200: '#F2D4D8',
          300: '#E8B4B8',   // feminine highlight
          400: '#D68A91',
          500: '#B86B72',
        },
        sage: {
          100: '#DDE5D5',
          200: '#B5C2A6',
          300: '#8FA378',
          400: '#6B7F5C',   // organic accent
          500: '#4F6042',
          600: '#3A4832',
        },
        ink: {
          400: '#5A5F6E',
          500: '#3E4252',
          600: '#2A2D3A',
          700: '#1A1D26',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        accent: ['var(--font-italiana)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'widest-2': '0.3em',
        'widest-3': '0.4em',
      },
      fontSize: {
        'display-1': ['clamp(3.5rem, 9vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-2': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'display-3': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.4em' }],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'curtain-reveal': 'curtainReveal 2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'letter-fade': 'letterFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'petal-drift': 'petalDrift 18s linear infinite',
        'light-leak': 'lightLeak 0.8s ease-out forwards',
        'gold-shimmer': 'goldShimmer 2.5s ease-in-out infinite',
        'slow-zoom': 'slowZoom 8s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        curtainReveal: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        letterFade: {
          from: { opacity: '0', transform: 'translateY(20px)', filter: 'blur(8px)' },
          to: { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' },
        },
        petalDrift: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translate(-100vw, 100vh) rotate(360deg)', opacity: '0' },
        },
        lightLeak: {
          from: { opacity: '0', transform: 'translateX(-100%)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        goldShimmer: {
          '0%, 100%': { backgroundPosition: '-200% center' },
          '50%': { backgroundPosition: '200% center' },
        },
        slowZoom: {
          from: { transform: 'scale(1.0)' },
          to: { transform: 'scale(1.08)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 122, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 122, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-midnight': 'linear-gradient(180deg, #0A0E1F 0%, #050814 100%)',
        'gradient-midnight-radial': 'radial-gradient(ellipse at top, #141828 0%, #0A0E1F 50%, #050814 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF7A 0%, #F5E6D3 50%, #D4AF7A 100%)',
        'gradient-gold-shimmer': 'linear-gradient(110deg, #D4AF7A 0%, #F5E6D3 25%, #D4AF7A 50%, #F5E6D3 75%, #D4AF7A 100%)',
        'gold-text': 'linear-gradient(135deg, #F5E6D3 0%, #D4AF7A 50%, #B8945E 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'gold-sm': '0 4px 20px rgba(212, 175, 122, 0.15)',
        'gold-md': '0 8px 40px rgba(212, 175, 122, 0.25)',
        'gold-lg': '0 16px 60px rgba(212, 175, 122, 0.4)',
        'midnight-sm': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'midnight-md': '0 8px 40px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

export default config
