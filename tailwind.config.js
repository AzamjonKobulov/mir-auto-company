/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        base: '89.5rem',
      },
      screens: {
        xs: '30rem',
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
        xl: '80rem',
        '2xl': '90rem',
      },
      fontFamily: {
        firs: ['TT Firs Neue Trl', 'sans-serif'],
        fira: ['Fira Mono', 'monospace'],
      },
      colors: {
        brand: {
          gray: '#F1F3F7',
          dark: '#232323',
          blue: '#008EFF',
          green: '#D9FF6C',
          'dark-green': '#C3E661',
        },
      },
      fontSize: {
        32: '2rem',
        40: '2.5rem',
      },
      backgroundImage: {
        'hero-block':
          'linear-gradient(71.98deg, #117FD6 14.08%, #008EFF 96.2%)',
        'hero-trucks':
          'linear-gradient(180deg, rgba(6, 138, 243, 0.4) 0%, rgba(6, 138, 243, 0) 42.07%)',
        'hero-trucks2':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 62.82%, rgba(0, 0, 0, 0.4) 100%)',
      },
      lineHeight: {
        18: '1.125rem',
      },
    },
  },
  plugins: [],
};
