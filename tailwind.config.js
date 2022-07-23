/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#1E213A",
      "dark-blue": "#100E1D",
      gray: "#6E707A",
      "light-gray": "#E7E7EB",
      "dark-gray": "#585676",
      primary: "#E7E7EB",
      secondary: "#A09FB1",
      yellow: "#FFEC65",
      "secondary-dark": "#88869D",
      "blue-btn": "#3C47E9",
      "gray-border": "#616475",
    },
    extend: {},
  },
  plugins: [],
};
