/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      colors: {
        primary: {
          500: "#6f4bff",
          600: "#5c38e6",
          700: "#4c2fba"
        },
        accent: {
          100: "#f4ede6",
          200: "#ede2d7",
          700: "#2d1f3a"
        }
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 20% 20%, rgba(123,92,255,0.12), transparent 35%), radial-gradient(circle at 80% 0%, rgba(255,153,102,0.12), transparent 30%)"
      }
    }
  },
  plugins: []
};
