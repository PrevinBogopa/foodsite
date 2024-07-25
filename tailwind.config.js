module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brandPrimary": "#96031a",
        "neutralDGrey": "#4D4D4D",
        "neutralGrey": "#717171",
        "blue":"#230396",
        "green":"#a8ce3c",
        "neutralSilver": "#F5F7FA",
        "gray900": "#18191F",
        "neutralBlack": "#263238",
        "yelloww":"#ffda00",
        'primary': '#010851',
        'primarywhite': '#F7F7F7',
        'primarygray': '#808080',
        'secondary': '#9A7AF1',
        'tertiary': '#707070',
        'pink': '#ffda00',
        'greenish': '#a8ce3c'
      },
      boxShadow: {
        '3xl': '0px 10px 50px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}