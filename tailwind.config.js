/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        blueColor: "#1B3764",
        yellowColor: "#FFCA42",
        whiteColor: "#F6F8FC",
      },
    },
  },
  plugins: [],
};
