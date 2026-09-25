/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bb: {
          dark: '#070a08',
          card: '#0e1511',
          cardHover: '#131e18',
          border: '#1b2d22',
          borderHighlight: '#22c55e',
          green: '#15803d',
          neon: '#00ff88',
          neonDim: 'rgba(0, 255, 136, 0.15)',
          cyan: '#00e5ff',
          cyanDim: 'rgba(0, 229, 255, 0.15)',
          yellow: '#facc15',
          hazmat: '#eab308',
          amber: '#f59e0b',
          sand: '#d97706',
          smoke: '#1a241f',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Oswald', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'smoke': 'smoke 6s linear infinite',
        'road': 'road 0.8s linear infinite',
        'wheel': 'wheel 0.4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        smoke: {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: '0.8' },
          '50%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-30px) scale(1.6)', opacity: '0' },
        },
        road: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-40px)' },
        },
        wheel: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
