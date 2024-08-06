/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["wireframe", "dark",],
  },
  extend: {},
  plugins: [require("daisyui")],
};
