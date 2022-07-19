/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'most-watched-card-bg': '#252836',
        'most-watched-title': '#9c9eb5'
      },
    },
  },
  plugins: [],
}
