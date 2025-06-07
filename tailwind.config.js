/** @type {import('tailwindcss').Config} */
export default {
  // if you use dark mode always use class as deafult value to work with the entire app as i think
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};
