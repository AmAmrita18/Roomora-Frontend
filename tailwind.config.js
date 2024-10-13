/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: '#FFFFFF',
        secondryText: "#999999",
        backgroundDark: "#141414",
        primaryBackground: "#262626",
        secondryBackground: "#1A1A1A",
        borderCol: "#262626",
        purple: "#703BF7"
      }
    },
  },
  plugins: [],
}

// f9eae1