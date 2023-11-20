/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    colors: {
      // ...
      'bofa': {
        light: '#DDDDDD',
        DEFAULT: '#012169',
        red: '#E31837',
        white: '#FFFFFF',
      },
      // ...
    },
  },
  plugins: [],
  variants: {
    tableLayout: ['responsive', 'hover', 'focus'],
  }
}

