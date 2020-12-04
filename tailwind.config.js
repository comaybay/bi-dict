module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {

      },

      borderWidth: {
        '1.5': '1.5px'
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
