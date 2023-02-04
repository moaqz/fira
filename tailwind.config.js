/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          crust: '#11111b',
          mantle: '#181825',
          subtext: '#bac2de',
          surface: '#313244',
          mauve: '#cba6f7'
        }
      }
    }
  },
  plugins: []
}
