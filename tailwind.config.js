/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      colors: {
        gray: {
          850: "#1f2937",
          950: "#111827",
        },
      },
    },
  },
  plugins: [],
};
