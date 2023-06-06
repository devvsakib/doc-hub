/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F7A582',
        'secondary': '#6C6B6B',
        'tertiary': '#07332F',
        'quaternary': '#3B3A3A',
      }
    }
  },
  plugins: [],
}