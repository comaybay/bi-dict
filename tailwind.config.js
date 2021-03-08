module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'genshin': {
          'yellow-medium': '#F8E9AF',
          'yellow-light': '#F0EFD3',
          'yellow-extra-light': '#F2F2E4',
          'blue-medium': '#6179B3',
          'blue-dark': '#3E5180',
          'blue-darker': '#2F3F66',
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
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      borderWidth: ['focus'],
      borderColor: ['active'],
      textColor: ['active']
    },
  },
  plugins: [],
}
