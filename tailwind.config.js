/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: "#0056FE",
      green: "#04D5B7",
      border_green: "#00816E",
      card: "rgba(26, 36, 51, 0.8)",
      card1: "rgba(32, 71, 94, 0.8)",
      black: "#000",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        "bottom-bar-bg": "url('/images/bottom-bar-bg.svg')",
      },
    },
  },
  plugins: [],
};
