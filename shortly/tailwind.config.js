/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors:{
        'cyan-light':'hsl(180, 66%, 69%)',
        'cyan':'hsl(180, 66%, 49%)',
        'dark-violet':'hsl(257, 27%, 26%)',
        'grayish-blue':'hsl(0, 0%, 75%)',
        'grayish-violet':'hsl(257, 7%, 63%)',
        'very-dark-blue':'hsl(255, 11%, 22%)',
        'very-dark-violet':'hsl(260, 8%, 14%)',
      },
      fontFamily:{
        sans:['Poppins, sans-serif'],
      }, 
      backgroundImage:{
        'cta': "url('/src/images/bg-boost-desktop.svg')",
      },   
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
}

