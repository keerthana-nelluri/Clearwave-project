/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#1A7A6E",
          mid: "#2A9D8F",
          light: "#5BBFB5",
        },
        ink: {
          1: "#0D1E1C",
          2: "#3A5C58",
          3: "#6B8C88",
          4: "#F4"
        },
        cream: "#EFF5F1",
        dark: {
          DEFAULT: "#0B1512",
          card: "#0F211C",
        },
        hairline: "rgba(13,30,28,0.08)",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};