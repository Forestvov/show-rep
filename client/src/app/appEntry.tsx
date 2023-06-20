import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { appRouter } from './appRouter'
import { store } from './store/root'
import './styles/main.css'
import './styles/vendor.css'

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={appRouter} />
		</Provider>
	</React.StrictMode>
)
