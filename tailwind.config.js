/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FAF6EE',
        'bg-secondary': '#F3EBDD',
        'terracotta': '#C83E24',
        'terracotta-dark': '#A92E17',
        'gold': '#C59B27',
        'dark-charcoal': '#1C1917',
        'sand-border': '#E6DCB9',
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        serif: ['Cormorant Garamond', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
