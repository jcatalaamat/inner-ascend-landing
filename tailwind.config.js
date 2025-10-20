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
        }
      },
    },
  },
  plugins: [],
}