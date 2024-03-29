/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '3xs': '280px',
      '2xs': '430px',
      'xsm': '600px',
      'sm': '780px',
      'md': '960px',
      'lg': '1200px',
      'xl': '1600px',
    },
  },
  plugins: [],
}