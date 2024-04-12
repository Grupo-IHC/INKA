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
        'login': "url('/src/shared/assets/backgroundLR.png')",    
        'inicio': "url('/src/shared/assets/backgroundInicio.png')",
        'mobile': "url('/src/shared/assets/bgMobile.png')",
        'products': "url('/src/shared/assets/backgroundProductos.png')", 
        'section2': "url('/src/shared/assets/Vector.png')", 
        'section4': "url('/src/shared/assets/bgSection4.svg')", 
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
        '600' : '600px',
      }
    },
  },
  plugins: [],
}

