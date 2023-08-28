/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chinese-violet': '#6F6179',
        'chocolate-cosmos': '#450019',
        'gun-metal': '#293241',
        'cool-gray': '#8491A9',
        'white': '#f0f0f0',
        'gray-100': '#8EA9C1'
  
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

