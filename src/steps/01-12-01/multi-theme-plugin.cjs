const plugin = require('tailwindcss/plugin')
const hexRgb = require('hex-rgb')

const themes = require('./themes.json')

// ------------------------------
// Helpers
// ------------------------------
function getRgbChannels(hex) {
  const { red, green, blue } = hexRgb(hex)
  return `${red} ${green} ${blue}`
}

// Generate CSS variables
function getCssVariableDeclarations(input, path = [], output = {}) {
  Object.entries(input).forEach(([key, value]) => {
    const newPath = path.concat(key)
    if (typeof value !== 'string') {
      getCssVariableDeclarations(value, newPath, output)
    } else {
      output[`--${newPath.join('-')}`] = getRgbChannels(value)
    }
  })
  return output
}

/*
  ------------------------------
  1. Write a helper function that takes an object
  as input, and outputs the correct object 
  to extend the Tailwind config's
  theme colors.
  ------------------------------
*/
function getColorUtilitiesWithCssVariableReferences(input, path = []) {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => {
      const newPath = path.concat(key)
      if (typeof value !== 'string') {
        return [key, getColorUtilitiesWithCssVariableReferences(value, newPath)]
      } else {
        return [key, `rgb(var(--${newPath.join('-')}) / <alpha-value>)`]
      }
    })
  )
}

// console.log(getColorUtilitiesWithCssVariableReferences(Object.values(themes)[0])['secondary'])

// ------------------------------
// Plugin definition
// ------------------------------
module.exports = plugin(
  function ({ addBase }) {
    addBase({
      ':root': getCssVariableDeclarations(Object.values(themes)[0]),
    })
    Object.entries(themes).forEach(([key, value]) => {
      addBase({
        [`[data-theme="${key}"]`]: getCssVariableDeclarations(value),
      })
    })
  },

  /*
  ------------------------------
  2. Extend the user's theme below using the new
  `getColorUtilitiesWithCssVariableReferences`
  function you've just created.
  ------------------------------
*/
  {
    theme: {
      extend: {
        colors: getColorUtilitiesWithCssVariableReferences(Object.values(themes)[0]),
      },
    },
  }
)
