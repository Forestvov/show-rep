import { AuthPage } from 'pages/auth'
import { HomePage } from 'pages/home'
import { Outlet, createBrowserRouter } from 'react-router-dom'

import { BaseLayout } from './layouts/BaseLayout'

export const appRouter = createBrowserRouter([
	{
		element: BaseLayout(),
		errorElement: <div>error</div>,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
		],
	},
	{
		element: <Outlet />,
		errorElement: <div>error</div>,
		children: [
			{
				path: '/auth',
				element: <AuthPage />,
			},
		],
	},
])
