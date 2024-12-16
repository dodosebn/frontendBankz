/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "DarkBlue": "hsl(233, 26%, 24%)",
"LimeGreen": "hsl(136, 65%, 51%)",
"BrightCyan": "hsl(192, 70%, 51%)",
"GrayishBlue": "hsl(233, 8%, 62%)",
"LightGrayishBlue": "#fafafa",
"VeryLightGray": "#f4f5f7",
"White":" hsl(0, 0%, 100%)",
"slateGray": "#8b8d98",
"shadow": "#9698a5"
      },
      fontFamily: {
        sans: ['Public Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },

    },
  },
  plugins: [],
}