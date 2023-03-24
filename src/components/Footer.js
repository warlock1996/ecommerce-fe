/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import React from 'react'
import Container from './Container'
import { ReactComponent as PaymentMethods } from '../assets/payment_method.svg'
import { ReactComponent as WhiteLogo } from '../assets/po-footer-logo-white.svg'

const links = ['About Us ', 'FAQs ', 'Contact Us', 'Careers', 'Press & Blog', 'Terms & Condition'].map((link) => (
	<li key={link}>{link}</li>
))

const serviceLinks = ['Help Center ', 'Privacy Policy', 'Installments Plan', 'E-Warranty', 'Activation '].map(
	(link) => <li key={link}>{link}</li>
)

function Footer({ children, ...props }) {
	const FooterList = styled.ul({
		listStyleType: 'none',
		margin: 0,
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		gap: '.5rem',
		'& li': {
			color: '#ffffff',
			fontSize: '12px',
			cursor: 'pointer',
			'&:hover': {
				textDecoration: 'underline',
			},
		},
	})

	return (
		<footer
			css={{
				backgroundColor: '#48afff',
				padding: '2rem',
			}}
			{...props}
		>
			<Container>
				<div css={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
					<div css={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						<WhiteLogo width={'128px'} />
						<FooterList>{links}</FooterList>
					</div>
					<div css={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						<div css={{ color: '#ffffff' }}>Customer Service</div>
						<FooterList>{serviceLinks}</FooterList>
					</div>
					<div css={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						<div css={{ color: '#ffffff' }}>Secure Payments Methods</div>
						<PaymentMethods css={{ width: '270px' }} />
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
