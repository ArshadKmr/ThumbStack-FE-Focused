/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        gloock: ['Gloock', 'serif'],
        bentonsans: ['"Benton Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

