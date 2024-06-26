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
        'products': "url('/src/shared/assets/bgProductos.svg')", 
        'section2': "url('/src/shared/assets/bgSection2.svg')",
        'section4': "url('/src/shared/assets/bgSection4.svg')", 
        'waveLogin': "url('/src/shared/assets/waveLogin.png')", 
        'waveRegister': "url('/src/shared/assets/waveRegister.png')", 
        'register' : "url('/src/shared/assets/backgroundRegister.png')",  
      },
      colors: {
        'primary': '#E8DFDB',
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

