module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        97:"97%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
