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

/*
  ------------------------------
  1. Write a helper function that takes an input, 
  and outputs the correct CSS-in-JS object 
  to create the CSS variables.

  Here's the format we're expecting:
  
  ```
  {
    '--primary-500': getRgbChannels('#6b70fc'),
    ...,
    '--secondary-some-nested-color': getRgbChannels('#0099aa'),
  }
  ```
  ------------------------------
*/
function getCssVariableDeclarations(input, path = [], output = {}) {
  Object.entries(input).forEach(([key, value]) => {
    const newPath = [...path, key]

    if (typeof value !== 'string') {
      getCssVariableDeclarations(value, newPath, output)
    } else {
      output[`--${newPath.join('-')}`] = getRgbChannels(value)
    }
  })
  
  return output
}

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
  {
    theme: {
      extend: {
        colors: {
          primary: {
            50: 'rgb(var(--primary-50) / <alpha-value>)',
            100: 'rgb(var(--primary-100) / <alpha-value>)',
            200: 'rgb(var(--primary-200) / <alpha-value>)',
            300: 'rgb(var(--primary-300) / <alpha-value>)',
            400: 'rgb(var(--primary-400) / <alpha-value>)',
            500: 'rgb(var(--primary-500) / <alpha-value>)',
            600: 'rgb(var(--primary-600) / <alpha-value>)',
            700: 'rgb(var(--primary-700) / <alpha-value>)',
            800: 'rgb(var(--primary-800) / <alpha-value>)',
            900: 'rgb(var(--primary-900) / <alpha-value>)',
          },
        },
      },
    },
  }
)
