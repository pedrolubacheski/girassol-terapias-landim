/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        cambo: ["Cambo", "serif"],
        cantarell: ["Cantarell", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
        "lobster-two": ["Lobster Two", "sans-serif"],
      },
    },
  },
  plugins: [],
};
