/** @type {import('tailwindcss').Config} */
module.exports = {
  buildModules:['@nuxtjs/fontawesome'],
  fontawesome: {
    icons:{
     solid:true
    }
   },
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
      colors: {
        'dark-blue-color': '#1f1d2b',
        'main-color': '#379e73',
        'grey1-color': '#353340',
        'grey2-color': '#9c9eb5',
        'grey3-color': '#808191',
        'dark-grey-color': '#494857',
        'light-blue-color': '#252836',
        'darkest-grey-color': '#3a3d4a'
      },
    }
  },
  plugins: [],
}
