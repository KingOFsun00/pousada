/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        primary: '#5d4037',
        secondary: '#8d6e63',
        accent: '#d7ccc8',
        light: '#efebe9',
        dark: '#3e2723',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease',
      },
    },
  },
  plugins: [],
}
