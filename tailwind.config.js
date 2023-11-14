/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: { min: '320px', max: '639px' },
			'sm-min': { min: '320px' },
			'sm-max': { max: '639px' },
			md: { min: '640px', max: '767px' },
			'md-min': { min: '640px' },
			'md-max': { max: '767px' },
			lg: { min: '768px', max: '1023px' },
			'lg-min': { min: '768px' },
			'lg-max': { max: '1023px' },
			xl: { min: '1024px', max: '1279px' },
			'xl-min': { min: '1024px' },
			'xl-max': { max: '1279px' },
			'2xl': { min: '1280px' },
		},
		colors: {
			'main-bg': '#e4e4e4',
			'main-text': '#242424',
			'title-color': '#838383',
			'orange-text': '#FFA542',
			'white-bg': '#FFFFFF',
			black: '#1C1C27',
			'input-bg': '#ced0c8',
		},
		boxShadow: {
			shadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
		},
		extend: {},
	},
	plugins: [],
};
