/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontWeight: {
      display: 700,
      body: {
        medium: 500,
        bold: 700,
      },
      caption: {
        medium: 500,
        bold: 700,
      },
      small: {
        medium: 500,
        bold: 700,
      },
    },
    fontSize: {
      display: "36.65px",
      body: "16px",
      caption: "14px",
      small: "12px",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        BlackColor: "#000000",
        DavysGrey: "#4D4D4D",
        Vermillion: "#CD4631",
        PewterBlue: "#81ADC8",
        Champagne: "#F7EDE8",
        AliceBlue: "#EDF3F7",
      },
    },
  },
  plugins: [],
};
