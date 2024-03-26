/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'filmes': "url('.././img/backgroundnovo.jpg')"
      }
    },
  },
  plugins: [],
}

