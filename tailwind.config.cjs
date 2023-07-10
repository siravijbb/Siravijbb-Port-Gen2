const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {}
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'media',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			purple: '#3f3cbb',
			midnight: '#121063',
			metal: '#565584',
			tahiti: '#3ab7bf',
			silver: '#ecebff',
			'bubble-gum': '#ff77e9',
			bermuda: '#78dcca',
			siravijpp: '#554994',
			siravijw: '#F29393',
			siravijdw: '#C17575',
			dwarn: '#332940',
		}
	}
};

module.exports = config;
