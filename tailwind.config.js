/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        dark: '#171717',
        light: '#FFFFFF',
        primary: '#27AE60',
        secondary: '#828282',
        triond: '#212121',
        dark2: '#333333'
      }
    },
  },
  plugins: [],
}

