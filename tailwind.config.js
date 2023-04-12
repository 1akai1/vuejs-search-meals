/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			sadasd: 1,
			dsafds: dsfdsf,
			sdfdsf: 3,
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
