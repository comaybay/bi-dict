module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'yellow': {
          light: '#E3DFB3',

        }
      },

      ringOffsetWidth: {
        "-2": "-2px"
      },

      borderWidth: {
        '1.5': '1.5px',
        '3': '3px'
      },

      spacing: {
        '72': '18rem'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      borderWidth: ['focus']
    },
  },
  plugins: [],
}
