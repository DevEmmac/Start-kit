/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "slate-gray": "#94A3BB",
        "slategray": "rgb(221, 221, 221)",
        "coral-red": "#FF6452",
        "pink": "#DB2777",
        "idigo": "#334155",
        "sky-blue": "#6366F1",
        "light-indigo": "#64748B"
      },
        backgroundImage: {
          "profile": "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          "landing": "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
          "login": "url('/home/emmie/start-kit/src/assets/register_bg_2.png')"
        },
    },
  },
  plugins: [],
}