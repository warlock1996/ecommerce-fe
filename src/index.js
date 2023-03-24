import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Index from './pages/index'
import Login from './pages/login'
import Register from './pages/register'
import Mobiles from './pages/mobiles'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Index />,
			},
			{
				path: '/mobiles',
				element: <Mobiles />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<AuthProvider>
		<RouterProvider router={router}></RouterProvider>
	</AuthProvider>
)
