/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1350px"
    },
    extend: {
      colors: {
        bodyColor: "#F8F8F8",
        lightGray: "#e5e7eb",
        blackColor: "#0F0F0F",
        primaryColor: '#F8A531'
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
        "moveto": "moveto 10s linear infinite" // Merged here
      },
      keyframes: {
        "loop-scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}
        },
        "moveto": { // Merged here
          from: {transform: "scaleX(0)"},
          to: {transform: "scaleX(1)"}
        }
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        sm: "30px",
      }
    },
    fontFamily: {
      TTCPro: ['TTCPro, sans-serif']
    },
  },
  plugins: [],
}
