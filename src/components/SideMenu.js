/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { useSideMenuContext } from '../context/SideMenuContext'
import { ReactComponent as WhiteLogo } from '../assets/po-footer-logo-white.svg'
import { ReactComponent as Close } from '../assets/close.svg'
import { ReactComponent as ArrowDown } from '../assets/ArrowDown.svg'
import Button from '../components/Button'
import { client, useAsync } from '../utils/client'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { FaLocationArrow, FaSignOutAlt, FaUser } from 'react-icons/fa'

const fetchCategories = (async () => await client('/category'))()

function SideMenuBase({ width = '360', children, ...props }) {
	const [isOpen, setOpen] = useSideMenuContext()

	return (
		<div
			css={{
				position: 'fixed',
				height: '100vh',
				width: isOpen ? '100vw' : '0',
				top: 0,
				left: 0,
				zIndex: '999',
				display: 'flex',
				backgroundColor: 'rgba(0,0,0,0.5)',
			}}
			onClick={() => setOpen(!isOpen)}
		>
			<aside
				css={{
					position: 'relative',
					height: '100%',
					width: width + 'px',
					top: '0',
					left: isOpen ? '0' : width * -1 + 'px',
					transition: 'left .2s ease-in-out',
					zIndex: '1000',
					overflowY: 'auto',
				}}
				{...props}
			>
				{isOpen && children}
			</aside>
		</div>
	)
}

function CategoriesMenu({ title, icon, brands = [] }) {
	const [open, setOpen] = useState(false)
	return (
		<details
			onClick={() => setOpen(!open)}
			css={{ cursor: 'pointer', borderRadius: '10px', backgroundColor: open ? 'rgba(116,138,152,.05)' : 'transparent' }}
		>
			<summary
				css={{
					display: 'flex',
					gap: '.2rem',
					justifyContent: 'flex-start',
					alignItems: 'center',
					color: '#404040',
					padding: '10px 20px 10px 15px',
					borderBottom: open ? '1px solid #ccc' : 'none',
				}}
			>
				{icon}
				<div css={{ marginLeft: '.5rem', flex: 1 }}>{title}</div>
				<ArrowDown css={{ rotate: open ? '180deg' : '0' }} />
			</summary>

			<ul css={{ margin: 0, listStyleType: 'none', padding: '0', paddingBlock: '.5rem' }}>
				{brands.map((br) => (
					<li
						key={br.name}
						css={{
							fontSize: '14px',
							padding: '5px 20px',
							color: '#404040',
							'&:hover': {
								backgroundColor: 'rgba(116,138,152,.08) ',
							},
						}}
					>
						{br.name}
					</li>
				))}
			</ul>
		</details>
	)
}

const popular = ['Best Mobiles Under 10000', 'Best Mobiles Under 15000']

const mainNavigation = [
	'About',
	'FAQs',
	'Careers',
	'Contact',
	'Privacy',
	'Press & Blog',
	'Instalments Plan',
	'Terms & Condition',
	'E-Warranty Activation',
]

const options = [
	{ name: 'My Account', component: <FaUser /> },
	{ name: 'Track My Order', component: <FaLocationArrow /> },
	{ name: 'Logout', component: <FaSignOutAlt /> },
]

function SideMenuApp() {
	const [isOpen, setIsOpen] = useSideMenuContext()
	const { user } = useAuthContext()
	const { run, data } = useAsync()

	useEffect(() => {
		run(fetchCategories)
	}, [])

	return (
		<SideMenuBase css={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#ffffff' }}>
			<div
				css={{
					backgroundColor: '#48afff',
					padding: '2.5rem',
					display: 'flex',
					gap: '1rem',
					justifyContent: 'space-between',
				}}
			>
				<div>
					<WhiteLogo css={{ marginBottom: '.2rem', width: '120px' }} />
					{user ? (
						<ul
							css={{
								padding: '0',
								listStyleType: 'none',
								margin: '1rem auto',
								cursor: 'pointer',
							}}
						>
							{options.map((option) => (
								<li
									css={{
										display: 'flex',
										gap: '.5rem',
										marginBottom: '1rem',
										alignItems: 'center',
										justifyContent: 'flex-start',
										color: '#ffffff',
										fontSize: '15px',
										'&:hover': {
											transition: 'transform .4s ease-in-out',
											transform: 'translateX(10px)',
										},
									}}
								>
									{option.component}
									<span>{option.name}</span>
								</li>
							))}
						</ul>
					) : (
						<Button to='/login' variant='transparent' css={{ marginTop: '1rem' }}>
							Login
						</Button>
					)}
				</div>
				<Close css={{ cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)} />
			</div>

			<div css={{ padding: '30px' }}>
				<div
					css={{
						marginBottom: '5rem',
					}}
				>
					<div
						css={{
							color: '#748a98',
							fontWeight: '600',
							fontSize: '12px',
							marginBottom: 'calc(30px / 3)',
							textTransform: 'uppercase',
						}}
					>
						Categories
					</div>
					{data?.data?.categories?.map((cat) => (
						<CategoriesMenu title={cat.name} key={cat._id} />
					))}
				</div>

				<div
					css={{
						marginBottom: '5rem',
					}}
				>
					<div
						css={{
							color: '#748a98',
							fontWeight: '600',
							fontSize: '12px',
							marginBottom: 'calc(30px / 3)',
							textTransform: 'uppercase',
						}}
					>
						Popular Lists
					</div>
					{popular.map((pop) => (
						<Button
							key={pop}
							css={{
								borderRadius: '4px',
								border: 'solid 1px #bababa',
								backgroundColor: '#fff',
								color: '#606060',
								fontWeight: '400',
								marginBottom: '1rem',
								padding: '1rem 2rem',
								width: 'fit-content',
								'&:hover': {
									backgroundColor: '#48afff',
									color: '#ffffff',
								},
							}}
						>
							{pop}
						</Button>
					))}
				</div>

				<div
					css={{
						marginBottom: '5rem',
					}}
				>
					<div
						css={{
							color: '#748a98',
							fontWeight: '600',
							fontSize: '12px',
							marginBottom: 'calc(30px / 3)',
							textTransform: 'uppercase',
						}}
					>
						Main Navigation
					</div>
					{mainNavigation.map((mn) => (
						<div
							key={mn}
							css={{
								fontSize: '14px',
								color: '#404040',
								marginBottom: '10px',
								cursor: 'pointer',
							}}
						>
							{mn}
						</div>
					))}
				</div>
			</div>
		</SideMenuBase>
	)
}

export { SideMenuBase, SideMenuApp }
