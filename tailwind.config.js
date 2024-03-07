/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0052fe',
        'blueshade': '#0082ff',
        'yellowshade': '#faa002'
      }
    },
  },
  plugins: [],
}

