/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    important: true,
    theme: {
      extend: {
        colors: {
          "surface-color": "#111111",
          "surface-color-1": "#FDD1D5",
          button: "#F84757",
          "text-1": "#FFF5F6",
          "text-2": "#696969",
          "button-1": "#303030",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
          jua: ["Jua", "sans-serif"],
        },
        height: {
          691: "691px",
          190: "190px",
          220: "220px",
          295: "295px",
        },
        width: {
          190: "190px",
          "90-p": "90%",
          295: "295px",
        },
        rotate: {
          360: "360deg",
        },
        maxWidth: {
          900: "900px",
        },
      },
      container: {
        center: true,
        padding: "3rem",
        screens: {
          sm: "90%",
          md: "90%",
          lg: "90%",
          xl: "90%",
        },
      },
    },
    plugins: [],
  };
  