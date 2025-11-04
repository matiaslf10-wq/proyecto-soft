/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
          light: '#60a5fa',
        },
        secondary: {
          DEFAULT: '#6b7280',
          dark: '#4b5563',
          light: '#9ca3af',
        },
        brand: {
          blue: '#3b82f6',
          gray: '#6b7280',
          white: '#ffffff',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
        'gradient-card': 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
      },
    },
  },
  plugins: [],
}