/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#0b0b0b',
        },
        foreground: {
          DEFAULT: '#0b0b0b',
          dark: '#f5f5f5',
        },
      },
      transitionTimingFunction: {
        'ease-io': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
