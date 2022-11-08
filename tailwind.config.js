/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        myOwn: 'hsl(193, 38%, 86%)',
        myOwnDarkBlue: 'hsl(218, 23%, 16%);',
        myOwnNeonGreen: 'hsl(150, 100%, 66%)',
        myOwnCyan: 'hsl(193, 38%, 86%)',
      },
    },
  },
  plugins: [],
}
