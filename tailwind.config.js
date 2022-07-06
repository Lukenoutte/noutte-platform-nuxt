/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
      colors: {
        'dark-blue': '#1f1d2b',
        'input-color': '#353340',
      },
    },
  },
  plugins: [],
}
