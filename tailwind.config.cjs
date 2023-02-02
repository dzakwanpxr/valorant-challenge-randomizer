/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: "transparent",
        red: "#BD3944",
        darkred: "#A52A2A",
        darkestred: "#53212B",
        white: "#FFFBF5",
      },
    },
  },
  plugins: [],
};
