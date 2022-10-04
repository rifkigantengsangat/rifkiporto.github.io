/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'navbar' : 'rgba(59, 61, 66, 0.75)'
      },
      fontFamily:{
        'monserrat' : ['Montserrat', 'sans-serif'],
        'roboto':['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
