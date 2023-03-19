/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/*.{html,js,jsx}",
    "./src/Components/auth/*.{html,js,jsx}",
    "./src/Pages/*.{html,js,jsx}",
    "./src/UI/*.{html,js,jsx}",
    "./src//*.{html,js,jsx}",
    "./src/*.{html,js,jsx}",
    "./index.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Noto Sans KR",
        nanum: "Nanum Square",
      },
      spacing: {
        100: "100px",
        60: "60px",
        616: "616px",
        1232: "1232px",
        661: "661px",
        344: "344px",
        196: "196px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
