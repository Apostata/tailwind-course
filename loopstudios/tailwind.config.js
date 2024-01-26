/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    fontFamily:{
      sans:['Josefin Sans','sans-serif'],
      alata:['Alata'],
    },
    extend: {
      backgroundImage: {
        'hero-mobile': "url('./images/mobile/image-hero.jpg')",
        'hero-desktop': "url('./images/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
}

