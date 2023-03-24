/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI']
    },
    extend: {
      keyframes:{
        transition: {
          '0%, 16.667%, 100%': { 'opacity': '1'},
          '33.333%, 83.333%': { 'opacity': '0'}
        }
      }
    },
  },
  plugins: [],
}