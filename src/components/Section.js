/** @jsxImportSource @emotion/react */

import React from 'react'

const Section = ({ title, subTitle, children, ...props }) => {
	return (
		<section {...props}>
			<div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem auto 1rem' }}>
				<h3 css={{ marginBottom: '0' }}>{title}</h3>
				<h4 css={{ margin: '0', fontWeight: 'normal' }}>{subTitle}</h4>
			</div>

			<div>{children}</div>
		</section>
	)
}

export default Section
