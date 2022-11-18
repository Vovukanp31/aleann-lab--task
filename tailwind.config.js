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
        blue: {
          ['btn-main']: '#384564',
          ['banner-text-border']: '#55699E',
          ['banner-bg']: '#55699E4D',
        },
        yellow: {
          ['banner-text-border']: '#988B49',
          ['banner-bg']: '#FFCF0026',
        }
      
      },

      borderWidth: {
        ['1']: '1px',
      },
    },
  },
  
  plugins: [],
}
