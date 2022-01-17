module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      minWidth: {
        '200': '200px',
        '290': '290px'
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
