/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      'beige': "#F9E4D4",
      "mint": "#CAE4DB",
      "lightOrange": "#F2A154",
      "lightText": "#474747",
      "lightRed": "#F39189",
      "lightBrown": "#BD9354",
      "lightPurple": "#F5E6FE",
      "darkPurple": "#BE63F9",
      "gold": "#F0A500",
      "darkRed": "#9C0F48",
      "darkOrange": "#E2703A",
      "darkGreen": "#2C3639",
      "darkBrown": "#594545"
    },
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'firasans':['Fira Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
