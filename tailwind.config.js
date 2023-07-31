/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts, tsx}', './src/**/**/*.tsx'],
  darkMode: 'class',
  theme: {
    minHeight: {
      '1/2': '50%',
    },
    screens: {
      sp: { max: '896px' },
    },
    extend: {
      fontFamily: {
        Potta: ['"Potta One"', 'cursive'],
      },
      animation: {
        'puff-out-hor': 'puff-out-hor 0.9s cubic-bezier(0.165, 0.840, 0.440, 1.000)   both',
      },
      keyframes: {
        'puff-out-hor': {
          '0%': {
            transform: 'scaleX(1)',
            filter: 'blur(0)',
            opacity: '1',
          },
          to: {
            transform: 'scaleX(2)',
            filter: 'blur(2px)',
            opacity: '0',
          },
        },
      },
    },
  },
  variants: {
    backgroundColor: ['disabled', 'hover'],
    borderColor: ['disabled'],
    textColor: ['disabled', 'visited', 'hover'],
    cursor: ['disabled', 'hover'],
    minHeight: ['responsive'],
  },
  plugins: [],
  mode: 'jit',
}
