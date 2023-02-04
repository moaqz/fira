const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', ...fontFamily.sans]
      },
      colors: {
        brand: {
          crust: '#11111b',
          mantle: '#181825',
          subtext: '#bac2de',
          surface: '#313244',
          surface2: '#45475a',
          mauve: '#cba6f7',
          mauve2: '#cfb2f1',
          pink: '#f5c2e7'
        }
      }
    }
  },
  plugins: []
}
