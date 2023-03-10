/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { fontFamily: { nanum: "Nanum Square KR", sans: "Noto Sans KR" } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
