/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				secondary: {
					darkcyan: '#52AD8C',
					cream: '#F2EBE3',
				},
				neutral: {
					verydarkblue: '#1C232B',
					darkgrayishblue: '#6C7289',
				},
			},
			fontFamily: { montserrat: ['Montserrat'], fraunces: ['Fraunces'] },
			spacing: { '2/3': '66.666667%' },
		},
	},
	plugins: [],
};
