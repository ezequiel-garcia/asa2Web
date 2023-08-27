/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "primary": "#f5f6fa",
        "primary2": "#e6e7e8",
        "secondary": "#757575",
        "secondaryLight": "#dedede92",
        "tertiary": "#FF6B00",
        "backgrounds": "#858faf",
        "backgroundsLight": "#dce2f9a1",
        "dark": "#000000",
        "error50": "#fc9191",
        "error200": "#eb4e4e",
        "error500": "#e30f28e1",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],

}
