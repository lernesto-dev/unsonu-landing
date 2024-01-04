/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blue-1' : '#1A2C32',
				'blue-2' : '#F2F9F9'
			}
		},
	},
	plugins: [],
}
