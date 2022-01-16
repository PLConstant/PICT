module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    minWidth: {
      '200': '200px'
    },
    extend: {},
  },
  plugins: [],
}
