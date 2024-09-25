/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Yellow
        secondary: '#87CEEB', // Light Blue
        accent1: '#98FB98', // Pale Green
        accent2: '#FFA07A', // Light Salmon
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        hand: ['var(--font-patrick-hand)'],
      },
    },
  },
  plugins: [],
}
