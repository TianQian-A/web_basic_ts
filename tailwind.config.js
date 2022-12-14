/** @type {import('tailwindcss').Config} */

const safe = require("tailwindcss-safe-area");
const duoduo =require("@yunduoduo/tailwindcss-vars")
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        duoduo: "red",
      },
    },
  },
  plugins: [],
};
