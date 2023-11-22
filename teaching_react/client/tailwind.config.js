/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dancing_script: ["Dancing Script", "cursive"],
        Merriweather: ["Merriweather", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
      screens: {
        large: "1200px",
      },
    },
  },
  plugins: [],
};
