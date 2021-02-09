module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#E4C1AF',
          400: '#E4A079',
          500: '#E37C42',
          600: '#E35A0C',
          700: '#D05007',
        },
        dark: {
          200: '#D1D2D2',
          300: '#C8CACA',
          400: '#B3B6B6',
          500: '#828989',
          600: '#505B5B',
          700: '#1F2D2D',
          800: '#151818',
        },
        accent: {
          300: '#ECDFB2',
          400: '#F2D980',
          500: '#F8D34D',
          600: '#FFCD1B',
          700: '#E7B70E',
        },
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '3.5rem',
        '8xl': '4.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      },
      backgroundImage: {
        gradient: 'linear-gradient(123.91deg, #FFCD1B -5.26%, #E35A0C 102.43%)'
      },
    },
  },

  variants: {},
  plugins: ['../node_modules/@nature-ui/**/*.js*'],
};
