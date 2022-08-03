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
        'dark-blue': '#1f1d2b',
        'input-color': '#353340',
        'menu-title-color': '#494857',
        'card': '#252836',
        'grey-card': '#9c9eb5',
        'like-icon-background': '#3a3d4a'
      },
    }
  },
  plugins: [],
}
