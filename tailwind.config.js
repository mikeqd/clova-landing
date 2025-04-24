/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        bgColor: "#242424",
        accent: "#7dd956",
        subHeading: "#888888", // Subheading color
        darkGray: "rgb(36, 36, 36)",
        lightTransparent: "rgba(255, 255, 255, 0.02)",
      },
    },
  },
  plugins: [],
};
