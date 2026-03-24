/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arami: {
          red: '#D9381E',     // Vibrant red for buttons/accents
          dark: '#1A1A1A',    // Main dark background
          card: '#242424',    // Surface/Card backgrounds
          text: '#FFFFFF',    // Main text
          muted: '#A3A3A3',   // Subtitle text
        }
      },
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
