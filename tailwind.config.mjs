/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blue-1' : '#FBFBFB',
				'blue-2' : '#F1F1F1',
				'blue-3' : '#356169'
			}
		},
	},
	plugins: [],
}
