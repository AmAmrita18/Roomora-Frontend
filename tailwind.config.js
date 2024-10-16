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
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'zoom-in': 'zoom-in 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

// f9eae1