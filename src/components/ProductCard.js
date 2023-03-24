/** @jsxImportSource @emotion/react */
import React from 'react'
import Card from './Card'

const ProductCard = ({ title, image, price, ...props }) => {
	return (
		<Card
			css={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				height: '275px',
				padding: '20px',
				width: '100%',
				maxWidth: '286px',
				boxSizing: 'border-box',
			}}
		>
			<img src={image} css={{ width: '120px', height: '120px', marginBottom: '1rem' }} alt='product-img' />
			<div css={{ fontWeight: 'bold', marginBottom: '.5rem', alignSelf: 'flex-start' }}>{title}</div>
			<div css={{ alignSelf: 'flex-start' }}>Rs: {price}</div>
		</Card>
	)
}

export default ProductCard
