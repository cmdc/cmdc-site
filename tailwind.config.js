const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      "2xlMax": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xlMax: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lgMax: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      mdMax: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      smMax: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        title: ["Chakra Petch, Spartan", "sans-serif"],
        sans: [
          "Chakra Petch",
          "Spartan",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Liberation Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        //sans: ['Spartan', 'sans-serif'],
        serif: ["Roboto", "sans-serif"],
      },

      fontSize: {
        tiny: "0.813rem",
        md: "1.063rem",
        "5xl": "2.65rem",
        "6xl": "2.75rem",
      },

      maxWidth: {
        xxs: "16rem",
      },

      height: {
        96: "24rem",
      },

      borderWidth: {
        3: "3px",
      },

      margin: {
        13: "3.25rem",
      },

      padding: {
        full: "100%",
      },

      textDecorationThickness: {
        3: "3px",
      },

      translate: {
        "4/5": "80%",
      },

      animation: {
        orbit: "orbit 2.5s linear infinite",
      },

      keyframes: {
        orbit: {
          "0%": {
            transform: "rotate(0deg) translate(-0.25rem) rotate(0deg)",
          },

          "100%": {
            transform: "rotate(360deg) translate(-0.25rem) rotate(-360deg);",
          },
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
