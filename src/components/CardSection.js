/** @jsxImportSource @emotion/react */

import React from 'react'

const CardSection = ({ title, titleLink, linkText, link, children, gridCss, ...props }) => {
	return (
		<section css={{ margin: '60px 0 30px' }} {...props}>
			<div css={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
				<a href={titleLink} css={{ fontWeight: 'bold' }}>
					{title}
				</a>
				{linkText && (
					<a href={link} css={{ color: '#48afff' }}>
						{linkText}
					</a>
				)}
			</div>

			<div
				css={[
					{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, 286px)',
						gap: '1rem',
						justifyContent: 'flex-start',
						alignItems: 'center',
						width: '100%',
					},
					gridCss
				]}
			>
				{children}
			</div>
		</section>
	)
}

export default CardSection
