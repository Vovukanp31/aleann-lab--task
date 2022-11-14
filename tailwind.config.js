/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      proxima: ["Proxima", "proxima"],
      proximaBold: ["Proxima-bold", "sans-serif"]
    },
    extend: {
      colors: {
        gray: {
          main: '#3A4562',
          additional: '#878D9D',
          layer: '#E6E9F2',
          logos: '#70778B',
          ['mobile-card']: '#EFF0F5',
        },
      }
    },
  },
  plugins: [],
}
