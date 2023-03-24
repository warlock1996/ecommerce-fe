/** @jsxImportSource @emotion/react */

import React, { useState } from 'react'
import Navigation from './components/Nav'

import Footer from './components/Footer'
import { SideMenuProvider } from './context/SideMenuContext'
import { SideMenuApp } from './components/SideMenu'
import { Outlet } from 'react-router-dom'
import { Radio, RadioGroup } from './components/Radio'

function App() {
	const [radio, setRadio] = useState(null)

	return (
		<div
			css={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'stretch',
				minHeight: '100vh',
			}}
		>
			<SideMenuProvider>
				<div>
					<Navigation />
					<SideMenuApp />
				</div>
			</SideMenuProvider>
			<main css={{ flexGrow: 1 }}>
				<Outlet />
			</main>

			<Footer />
		</div>
	)
}

export default App
