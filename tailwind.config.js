/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackLight: "#303841",
      },
      gridTemplateColumns:{
        'auto-fit-75': 'repeat (auto-fill, minmax(75px, 1fr)'
      }
    },
  },
  plugins: [],
};
