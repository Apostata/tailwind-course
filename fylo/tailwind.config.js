/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(217, 28%, 15%)",
        "dark-blue-2": "hsl(218, 28%, 13%)",
        "dark-blue-3": "hsl(216, 53%, 9%)",
        "dark-blue-4": "hsl(219, 30%, 18%)",
        "accent-cyan": "hsl(176, 68%, 64%)",
        "accent-blue": "hsl(198, 60%, 50%)",
        "light-red": "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "logo-dark-mode": "url('/src/images/logo-dark-mode.svg')",
        "logo-light-mode": "url('/src/images/logo-light-mode.svg')",
        "curvy-dark-mode": "url('/src/images/bg-curvy-dark-mode.svg')",
        "curvy-light-mode": "url('/src/images/bg-curvy-light-mode.svg')",    
      },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"]
    },
  },
  plugins: [],
  }
}

