module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				blue: {
					DEFAULT: '#0072c4',
				},
				yellow: {
					DEFAULT: '#FFD03E',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
