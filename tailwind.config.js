/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goldenrod: '#DAA520', // Custom golden color
        'transparent-black': 'rgba(0, 0, 0, 0.5)' // Semi-transparent black for overlay
      },
      spacing: {
        '128': '32rem', // Custom spacing if needed
      },
    },
  },
  plugins: [],
};
