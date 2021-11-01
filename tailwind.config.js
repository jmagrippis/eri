const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx,js,jsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.cyan,
      secondary: colors.emerald,
      gray: colors.coolGray,
      white: colors.white,
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
