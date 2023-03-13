/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.{html,js,jsx}",
    "./src/pages/*.{html,js,jsx}",
    "./src/*.{html,js,jsx}",
    "./index.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: { fontFamily: { sans: "Noto Sans KR", nanum: "Nanum Square" } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
