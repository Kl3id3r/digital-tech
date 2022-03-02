// rgba(var(--b3f,250,250,250),1)
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "280px",
      md: "720px",
      lg: "1090px",
      xl: "1280px",
    },
    colors: {
      gray: "#fafafa",
      black: "#262626",
    },
  },
  plugins: [],
};
