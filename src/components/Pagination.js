/** @jsxImportSource @emotion/react */

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaDiceTwo, FaDotCircle, FaGoodreads, FaHandPointDown } from 'react-icons/fa'

function Pagination({ currentPage = 1, totalPages = 0, onChange }) {
    // what if the totalPages changes
	const pages = useRef(
		Array(totalPages)
			.fill()
			.map((_, index) => index + 1)
	)

	const onPrev = () => {
		if (currentPage > 1) onChange(currentPage - 1)
	}

	const onNext = () => {
		if (currentPage < totalPages) onChange(currentPage + 1)
	}

	return (
		<div css={{ margin: '.5rem auto'}}>
			<ul
				css={{
					listStyleType: 'none',
					margin: '0',
					padding: '0',
					display: 'flex',
					gap: '.5rem',
					justifyContent: 'flex-end',
					alignItems: 'center',
					'& li': {
						padding: '.5rem',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '30px',
						height: '30px',
						backgroundColor: '#48afff',
						color: '#ffffff',
						borderRadius: '5px',
						'&:hover': {
							cursor: 'pointer',
							backgroundColor: '#fffff',
						},
					},
				}}
			>
				<li key={0} onClick={onPrev}>
					<FaArrowLeft />
				</li>
				{totalPages > 10 && currentPage > 10 && (
					<li css={{ backgroundColor: 'transparent !important', color: 'blue !important' }}>•••</li>
				)}
				{pages.current.slice(currentPage <= 10 ? 0 : 10, currentPage <= 10 ? 10 : currentPage + 10).map((page) => (
					<li
						key={page}
						css={{ backgroundColor: currentPage === page ? '#ff338c !important' : 'inherit' }}
						onClick={() => onChange(page)}
					>
						{page}
					</li>
				))}
				{totalPages > 10 && currentPage <= 10 && (
					<li css={{ backgroundColor: 'transparent !important', color: 'blue !important' }}>•••</li>
				)}
				<li key={totalPages + 1} onClick={onNext}>
					<FaArrowRight />
				</li>
			</ul>
		</div>
	)
}

export default Pagination
