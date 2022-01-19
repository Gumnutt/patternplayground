module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        screenfit: "calc(100vh - 92px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
