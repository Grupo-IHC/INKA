/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mont: ['Montserrat'],
      pro: ['Source Code Pro'],
      stick: ["Stick"],
      inika: ["Inika"],
    },
    extend: {
      backgroundImage: {
        'login': "url('./src/shared/assets/FondoLogin.png')",    
        'inicio': "url('./src/shared/assets/backgroundInicio.png')"    
      },
      colors: {
        'primary': '#D1C8C1',
        'secondary': '#31241E',
        'tertiary': '#FF7000',
        'cuaternary': '#7A3906',
        'quinary': '#7A3906',
        'senary': '#F6F4F3',
      },
      padding: {
        '121px': '121px',
        '67px': '67px',
      },
      height: {
        '850' : '850px',
        '800' : '800px',
      }
    },
  },
  plugins: [],
}

