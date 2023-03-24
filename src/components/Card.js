/** @jsxImportSource @emotion/react */

import React from 'react'

const Card = ({ children, ...props }) => {
	return (
		<div
			css={{
				borderRadius: '4px',
				backgroundColor: '#ffffff',
				padding: '20px'
			}}
			{...props}
		>
			{children}
		</div>
	)
}

export default Card
