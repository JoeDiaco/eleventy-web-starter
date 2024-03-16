module.exports = {
	theme: {
		fontFamily: {
			'header': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			'sans' : ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif']
		},
		extend: {
			colors: {
				'blue': {
					DEFAULT: '#35B8DB',
					100: '#C2E94',
					200: '#9ADBED',
					300: '#71CDE5',
					400: '#49BFDE',
					500: '#2FA5C5',
					600: '#258099',
					700: '#1A5C6D',
					800: '#0F3741',
					900: '#051215',
				},
				'yellow': {
					DEFAULT: '#F7B539',
					100: '#FBDA9C',
					200: '#FAD288',
					300: '#F9CB74',
					400: '#F8C360',
					500: '#F7BC4C',
					600: '#DEA233',
					700: '#C5902D',
					800: '#AC7E27',
					900: '#946C22',
				},
				'grey': {
					100: '#E5E5E5',
					200: '#CCCCCC',
					300: '#B2B2B2',
					400: '#999999',
					500: '#7F7F7F',
					600: '#666666',
					700: '#4C4C4C',
					800: '#333333',
					900: '#191919',
				},
			}
		},
	},
	plugins: [],
	content: ['src/**/*.njk', 'src/**/*.js']
}
