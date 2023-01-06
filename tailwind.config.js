/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      purple: '#526DFF',
      yellow: '#F1C232',
      white : '#FFFFFF'
    },
    screens: {
      'xs': {'min': '300px', 'max': '900px'},},

    extend: {},
  },
  plugins: [],
}