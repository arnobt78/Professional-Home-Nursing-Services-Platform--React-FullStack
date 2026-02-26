/** @type {import('tailwindcss').Config} */
/** Tailwind: content paths, custom colors (primary/secondary), fonts (Poppins, Ephesis, Sour Gummy), container padding. */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#144647", // Main brand color
          500: "#06b6d4", // Additional shade
          700: "#0e7490", // Additional shade
        },
        secondary: "#24836d", // Secondary color
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        ephesis: ["Ephesis", "cursive"],
        sour: ["Sour Gummy", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
