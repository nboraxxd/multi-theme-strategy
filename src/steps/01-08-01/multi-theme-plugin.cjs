const plugin = require('tailwindcss/plugin')
const hexRgb = require('hex-rgb')

// ------------------------------
// Helpers
// ------------------------------

function getRgbChannels(hex) {
  const { red, green, blue } = hexRgb(hex)
  return `${red} ${green} ${blue}`
}

// ------------------------------
// Color themes
// ------------------------------
const themes = {
  base: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#d0d7f7',
    300: '#aab9ff',
    400: '#8994ff',
    500: '#6b70fc',
    600: '#554fee',
    700: '#453ccd',
    800: '#3830a2',
    900: '#272173',
  },
  rainforest: {
    50: '#ecfdf4',
    100: '#c9f2de',
    200: '#9de9c6',
    300: '#56d0a0',
    400: '#00b380',
    500: '#009268',
    600: '#007955',
    700: '#006344',
    800: '#005038',
    900: '#003422',
  },
  candy: {
    50: '#fdf2f8',
    100: '#f7e2ee',
    200: '#f8cce5',
    300: '#f5a4d0',
    400: '#f271b5',
    500: '#e13d90',
    600: '#c31667',
    700: '#a1004b',
    800: '#84003d',
    900: '#590028',
  },
}

// ------------------------------
// Plugin definition
// ------------------------------
module.exports = plugin(function ({ addBase }) {
  addBase({
    /*
      ------------------------------
      Keep the `:root` CSS variables as is for now.
      ------------------------------
    */
    ':root': {
      '--primary-50': getRgbChannels(themes.base['50']),
      '--primary-100': getRgbChannels(themes.base['100']),
      '--primary-200': getRgbChannels(themes.base['200']),
      '--primary-300': getRgbChannels(themes.base['300']),
      '--primary-400': getRgbChannels(themes.base['400']),
      '--primary-500': getRgbChannels(themes.base['500']),
      '--primary-600': getRgbChannels(themes.base['600']),
      '--primary-700': getRgbChannels(themes.base['700']),
      '--primary-800': getRgbChannels(themes.base['800']),
      '--primary-900': getRgbChannels(themes.base['900']),
    },

    /*
    ------------------------------
    Generate the three `data-theme` CSS blocks below
    by iterating over the `themes` object.
    
    Hint: you can use `addBase()` 
    function multiple times!
    
    Hint: you can use `Object.entries()` to iterate
    over the keys of the `themes` object.
    ------------------------------
    */
    '[data-theme="base"]': {
      '--primary-50': getRgbChannels(themes.base['50']),
      '--primary-100': getRgbChannels(themes.base['100']),
      '--primary-200': getRgbChannels(themes.base['200']),
      '--primary-300': getRgbChannels(themes.base['300']),
      '--primary-400': getRgbChannels(themes.base['400']),
      '--primary-500': getRgbChannels(themes.base['500']),
      '--primary-600': getRgbChannels(themes.base['600']),
      '--primary-700': getRgbChannels(themes.base['700']),
      '--primary-800': getRgbChannels(themes.base['800']),
      '--primary-900': getRgbChannels(themes.base['900']),
    },
    '[data-theme="rainforest"]': {
      '--primary-50': getRgbChannels(themes.rainforest['50']),
      '--primary-100': getRgbChannels(themes.rainforest['100']),
      '--primary-200': getRgbChannels(themes.rainforest['200']),
      '--primary-300': getRgbChannels(themes.rainforest['300']),
      '--primary-400': getRgbChannels(themes.rainforest['400']),
      '--primary-500': getRgbChannels(themes.rainforest['500']),
      '--primary-600': getRgbChannels(themes.rainforest['600']),
      '--primary-700': getRgbChannels(themes.rainforest['700']),
      '--primary-800': getRgbChannels(themes.rainforest['800']),
      '--primary-900': getRgbChannels(themes.rainforest['900']),
    },
    '[data-theme="candy"]': {
      '--primary-50': getRgbChannels(themes.candy['50']),
      '--primary-100': getRgbChannels(themes.candy['100']),
      '--primary-200': getRgbChannels(themes.candy['200']),
      '--primary-300': getRgbChannels(themes.candy['300']),
      '--primary-400': getRgbChannels(themes.candy['400']),
      '--primary-500': getRgbChannels(themes.candy['500']),
      '--primary-600': getRgbChannels(themes.candy['600']),
      '--primary-700': getRgbChannels(themes.candy['700']),
      '--primary-800': getRgbChannels(themes.candy['800']),
      '--primary-900': getRgbChannels(themes.candy['900']),
    },
  })
})
