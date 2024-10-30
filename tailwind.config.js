/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        darkSlateGray: 'hsl(234, 29%, 20%)',
        charcoalGray: 'hsl(235, 18%, 26%)',
        gray: 'hsl(231, 7%, 60%)',
      },
      fontFamily : {
        sans: ['Roboto', 'sans-serif']
      },
      backgroundImage: (theme) => ({
        'hero-desktop': "url('../images/illustration-sign-up-desktop.svg')",
        'hero-mobile': "url('../images/illustration-sign-up-mobile.svg')",
      })
    },
  },
  plugins: [],
}

