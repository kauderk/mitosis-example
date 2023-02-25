/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: [
    {
      pattern: /(h|w)-*/,
    },
  ],
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.pink,
      neutral: colors.gray,
      ...colors
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
