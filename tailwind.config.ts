/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#b7fb00',
			},
		},
		fontFamily: {
			golos: ['Golos Text', 'sans-serif'],
		},
		container: {
			center: true,
			padding: '2rem',
		},
		plugins: [],
	},
}
