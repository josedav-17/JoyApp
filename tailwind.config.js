/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" }
        }
      },
      animation: {
        fadeIn: "fadeIn 2s ease-out",
        typing: "typing 3s steps(30, end) infinite"
      }
    }
  },
  plugins: [],
}
