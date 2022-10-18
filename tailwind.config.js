/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica"],
    },
    colors: {
      primary: "#006A4F",
      secondary: "#5FA776",
      primaryLight: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
