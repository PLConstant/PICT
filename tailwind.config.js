module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    // add all css instructions you like into the 'extend' object. 
    // you should then see these additions as options when styling components.
    extend: {
      minWidth: {
        '200': '200px',
        '290': '290px'
      },
      height: {
        '350': '350px'
      },
      minHeight: {
        '350': '350px',
        '3/4': '75%'
      },
      width: {
        '9/50': '18%'
      },
    },
  },
  plugins: [],
}
