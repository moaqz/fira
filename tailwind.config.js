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
          surface2: '#45475a',
          mauve: '#cba6f7',
          mauve2: '#cfb2f1'
        }
      }
    }
  },
  plugins: []
}
