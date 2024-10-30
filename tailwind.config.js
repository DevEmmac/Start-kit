/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "slate-gray": "#6D6D6D",
        "slategray": "rgb(221, 221, 221)",
        "coral-red": "#FF6452",
        "pink": "#DB2777",
        "idigo": "#334155"
      }
    },
  },
  plugins: [],
}