module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgBlue: "#12123cff",
        tBlue: "#4367d7",
        textWhite: "#eeeeee",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}