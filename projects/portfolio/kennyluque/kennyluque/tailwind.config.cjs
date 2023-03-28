/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI']
    },
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        writing: {
          from: { width: "100%" },
          to: { width: "0 " },
        },
      },
      animation: {
        gradient: "gradient 9s ease infinite",
        writing: "writing  5s steps(30) infinite alternate",
      }
    }
    // extend: {
    //   keyframes:{
    //     transition: {
    //       '0%, 16.667%, 100%': { 'opacity': '1'},
    //       '33.333%, 83.333%': { 'opacity': '0'}
    //     }
    //   }
    // },
  },
  plugins: [],
}