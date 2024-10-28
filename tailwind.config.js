/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackLight: "#000000dd",
        white: "#f5f5f5",
      },
      gridTemplateColumns:{
        'auto-fit-75': 'repeat (auto-fill, minmax(75px, 1fr)'
      }
    },
  },
  plugins: [],
};
