/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mont: ['Montserrat'],
    },
    extend: {
      backgroundImage: {
        'login': "url('./src/shared/assets/FondoLogin.png')",        
      },
      colors: {
        'primary': '#D1C8C1',
        'secondary': '#31241E',
      },
      padding: {
        '121px': '121px',
      }
    },
  },
  plugins: [],
}

