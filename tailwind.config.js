/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "lightblue":"#16b8bc",
        "darkgrey":"#191918"
      },
      animation:{
        'circle-spin':'spinning 1s forwards',
        'fade-right-out':'fadeRightOut 0.5s forwards',
      },
      keyframes:{
        spinning:{
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeRightOut:{
          '0%':{opacity:1,transform:'translateX(0%)'},
          '100%':{opacity:0,transform:'translateX(-100%)'},
        },
      },
      screens:{
        '2xl':'1600px'
      }


    },
  },
  plugins: [],
}

