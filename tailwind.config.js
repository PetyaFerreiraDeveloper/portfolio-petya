/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   goRight: {
      //     '0%:': { transform: 'transitionX(0)' },
      //     '25%': { transform: 'transitionX(25%)' },
      //     '50%': { transform: 'transitionX(50%)' },
      //     '75%': { transform: 'transitionX(75%)' },
      //     '100%': { transform: 'transitionX(100%)' },
      //   },
      //   goLeft: {
      //     '0%:': { transform: 'transitionX(0%)' },
      //     '25%': { transform: 'transitionX(-25%)' },
      //     '50%': { transform: 'transitionX(-50%)' },
      //     '75%': { transform: 'transitionX(-75%)' },
      //     '100%': { transform: 'transitionX(-100%)' },
      //   }
      // },
      // animation: {
      //   goRight: 'goRight 1s linear',
      //   goLeft: 'goLeft 1s linear',
      // }
    },
  },
  plugins: [],
}
