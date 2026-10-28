/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Albert Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          muted: '#525252',
          subtle: '#737373',
        },
        surface: {
          DEFAULT: '#ffffff',
          subtle: '#f8fafc',
          card: '#f1f5f9',
          border: '#e2e8f0',
        },
        brand: {
          DEFAULT: '#1e3a8a', // Deep corporate navy
          accent: '#2563eb',  // Crisp sapphire
          light: '#eff6ff',
        }
      }
    },
  },
  plugins: [],
}

