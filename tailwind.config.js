module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
        },
        dark: {
          100: 'var(--dark-100)',
          200: 'var(--dark-200)',
          300: 'var(--dark-300)',
          400: 'var(--dark-400)',
          500: 'var(--dark-500)',
          600: 'var(--dark-600)',
          700: 'var(--dark-700)',
          800: 'var(--dark-800)',
        },
        accent: {
          300: 'var(--accent-300)',
          400: 'var(--accent-400)',
          500: 'var(--accent-500)',
          600: 'var(--accent-600)',
          700: 'var(--accent-700)',
        },
        glass: "var(--glass)",
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
        gradient: 'linear-gradient(123.91deg, #FFCD1B -5.26%, #E35A0C 102.43%)',
        "glass-card": "var(--glass-card)",
      },
    },
  },

  variants: {},
  plugins: ['../node_modules/@nature-ui/**/*.js*'],
};
