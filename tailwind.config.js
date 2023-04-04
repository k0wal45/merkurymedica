/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        logo: ['chaparral-pro', 'serif']
      },
      colors: {
        logo: '#2b4693',
        grayish: '#131313'
      },
    },
  },
  plugins: [],
}

