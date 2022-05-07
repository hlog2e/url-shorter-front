module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jalnan: ["jalnan"],
      },
      backgroundImage: {
        "shape-div": "url('/waves.svg')",
      },
    },
  },
  plugins: [],
};
