/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			'main-bg': '#e4e4e4',
			'main-text': '#242424',
			'title-color': '#838383',
			'orange-text': '#FFA542',
			'white-bg': '#FFFFFF',
			black: '#1C1C27',
		},
		boxShadow: {
			shadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
		},
		extend: {},
	},
	plugins: [],
};
