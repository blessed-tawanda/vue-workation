module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem'
      },
      padding: {
        '5/6': '83.333333%'
      }
    },
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.200'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          }
        },
        select: {
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.default'),
          backgroundColor: theme('colors.gray.700'),
          borderColor: theme('colors.gray.700'),
          icon: '<svg fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>',
          lineHeight: theme('lineHeight.snug'),
          '&:focus': {
            borderColor: 'transparent',
            boxShadow: 'none',
            backgroundColor: theme('colors.gray.600')
          }
        },
        checkbox: {
          width: '1.5rem',
          height: '1.5rem',
          backgroundColor: theme('colors.gray.900'),
          checkedColor: theme('colors.indigo.500'),
          borderColor: theme('colors.gray.900'),
          '&:focus': {
            borderColor: 'transparent',
            boxShadow: 'none',
            backgroundColor: theme('colors.gray.600')
          }
        },
        radio: {
          width: '1.5rem',
          height: '1.5rem',
          checkedColor: theme('colors.indigo.500'),
          backgroundColor: theme('colors.gray.900'),
          borderColor: theme('colors.gray.900'),
          '&:focus': {
            borderColor: 'transparent',
            boxShadow: 'none',
            backgroundColor: theme('colors.gray.600')
          }
        }
      },
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
}
