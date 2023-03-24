/** @jsxImportSource @emotion/react */
import React from 'react'
import Button from './Button'
import { ReactComponent as MenuBar } from '../assets/bar.svg'
import { ReactComponent as AppLogo } from '../assets/logo.svg'
import { ReactComponent as MicBlue } from '../assets/mic-blue.svg'
import { useSideMenuContext } from '../context/SideMenuContext'
import { client } from '../utils/client'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
//

const Navigation = ({ children, loading, ...props }) => {
	const [isOpen, setOpen] = useSideMenuContext()
	const { user } = useAuthContext()

	return (
		<header>
			<nav
				css={{
					display: 'flex',
					alignItems: 'center',
					backgroundColor: '#48afff',
					height: '71px',
					padding: 'calc(30px / 3)',
					position: 'relative',
				}}
				{...props}
			>
				<div css={{ display: 'flex', gap: '1rem', alignItems: 'center', marginRight: 'auto', height: '100%' }}>
					<MenuBar css={{ width: '28px', height: '28px', cursor: 'pointer' }} onClick={() => setOpen(!isOpen)} />
					<Link to='/'>
						<AppLogo css={{ width: '130px', height: '48px', cursor: 'pointer' }} />
					</Link>
				</div>

				<div
					css={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '420px',
						backgroundColor: '#fff',
						border: '2px solid #48afff',
						color: '#748a98',
						fontSize: '14px',
						fontWeight: 'normal',
						height: '51px',
						margin: '0',
						borderRadius: '8px',
						padding: '.6rem 1rem',
					}}
				>
					<input
						css={{
							outline: 'none',
							border: 'none',
							width: '90%',
							padding: '0',
							margin: '0',
						}}
						placeholder='Search...'
						type='text'
					/>
					<MicBlue />
				</div>

				{!user && (
					<div css={{ display: 'flex', gap: '.6rem', marginLeft: 'auto' }}>
						<Button to='/login'>Log In</Button>
						<Button to='/register' variant='transparent'>
							Register
						</Button>
					</div>
				)}
			</nav>
		</header>
	)
}

export default Navigation
