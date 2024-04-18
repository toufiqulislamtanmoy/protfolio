/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        Kaushan: ['Kaushan Script', 'cursive'],
        Poppins: ['Poppins', 'sans-serif'],
        Pacifico: ['Pacifico', 'cursive'],
        Rubik: ['Rubik Vinyl', 'cursive'],
        Russo: ['Russo One', 'sans-serif'],
        Libre: ['Libre Baskerville', 'serif'],
        TiltPrism: ['Tilt Prism', 'serif']
      },
    },
  },
  plugins: [require("daisyui")],
}

