/** @type {import('tailwindcss').Config} */
const lineClamp = require("@tailwindcss/line-clamp");
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
    extends: {
      fontFamily: {
        sans: ["Barlow Semi Condensend", "sans-serif"],
      },
    }
  },
  plugins: [lineClamp],
}

