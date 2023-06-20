import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			app: '/src/app',
			pages: '/src/pages',
			widgets: '/src/widgets',
			features: '/src/features',
			shared: '/src/shared',
			popups: '/src/popups',
			hooks: '/src/hooks',
			utils: '/src/utils',
		},
	},
})
