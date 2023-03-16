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
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: "#0056FE",
      blue_simplicity: "#0072DE",
      pink_simplicity: "#ff3366",
      green: "#04D5B7",
      gray: "#EEEEEE",
      gray_text_simplicity: "#8C8C8C",
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
      dropShadow: {
        widget: "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
      // colors: {
      //   sophisticated_blue: colors.sophisticated_blue,
      //   morrden_blue: colors.morrden_blue,
      //   morrden_pink: colors.morrden_pink,
      //   "th-background": "var(--background)",
      //   "th-background-button": "var(--background-button)",
      //   "th-foreground": "var(--foreground)",
      //   "th-primary-dark": "var(--primary-dark)",
      //   "th-primary-medium": "var(--primary-medium)",
      //   "th-primary-light": "var(--primary-light)",
      //   "th-accent-dark": "var(--accent-dark)",
      //   "th-accent-medium": "var(--accent-medium)",
      //   "th-accent-light": "var(--accent-light)",
      // },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          button: "var(--color-button-base)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
