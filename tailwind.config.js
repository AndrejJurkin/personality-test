module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('hero-pattern.svg')",
      },
    },
  },
};
