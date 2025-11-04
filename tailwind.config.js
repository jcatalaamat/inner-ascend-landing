/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic': {
          'black': '#0A0A0F',
          'dark': '#121218',
          'violet': '#8B7BF7',
          'silver': '#E8E6F0',
          'integration': '#4ECDC4',
        },
        'warm': {
          'gold': '#D4AF37',
          'gold-light': '#F4E4C1',
          'peach': '#FFB88C',
          'coral': '#FF9B71',
          'purple': '#9B7EDE',
          'purple-light': '#B695F8',
          'earth': '#8B7355',
          'sage': '#9CAF88',
        }
      },
    },
  },
  plugins: [],
}