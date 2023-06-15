/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rome: {
          50: '#8314c7',
          100: '#5b0e8b',
        }
      },
      height: {
        'calc-screen-75': 'calc(100vh - 75px)',
      },
      fontFamily: {
        redhat: ['Red Hat Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
