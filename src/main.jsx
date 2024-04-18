// index.js

import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import {
	RouterProvider,
	createBrowserRouter
} from 'react-router-dom'

import App from './App'
import Home from './pages/Home/Home';
import About from './pages/About/About';

import LookingForBlood from './pages/WantToDonateBlood/WantToDonateBlood'
import WantToDonateBlood from './pages/LookingForBlood/LookingForBlood'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App /> ,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/projects',
				element: <WantToDonateBlood />,
			},
			{
				path: '/contact',
				element: <LookingForBlood />,
			},
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router}>
		<App />
	</RouterProvider>
)
