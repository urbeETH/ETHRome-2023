/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
