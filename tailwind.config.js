/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          950: '#001A24',
          900: '#00222D',
          800: '#002E3D', // Primary Deep Teal
          700: '#003D52',
          600: '#004D66',
        },
        gold: {
          300: '#F4DF82',
          400: '#E5C358',
          500: '#D4AF37', // Primary Gold Accent
          600: '#B89225',
          700: '#947217',
        },
        offwhite: {
          50: '#FCFCFB',
          100: '#F5F5F2', // Primary Off-White
          200: '#E8E8E2',
          300: '#D9D9CF',
          400: '#B0B0A4',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
        wide: '0.04em',
        wider: '0.08em',
      },
    },
  },
  plugins: [],
}
