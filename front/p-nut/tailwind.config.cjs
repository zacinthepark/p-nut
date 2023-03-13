/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/*.{html,js,jsx}",
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
        "100px": "100px",
        "50px": "50px",
        "5px": "5px",
        "360px": "360px",
        "1200px": "1200px",
        "204px": "204px",
        "41px": "41px",
        "794px": "794px",
        "354px": "354px",
      },
      colors: {
        prettywhite: "#FDFDFD",
        DEFAULT: "#212121",
        "#2F80ED": "#2F80ED",
        "#AEAFAE": "#AEAFAE",
        "#7F807F": "#7F807F",
        "#F5F5F5": "##F5F5F5",
      },
      fontSize: {
        "23px": "23px",
      },
      borderRadius: {
        "20px": "20px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
