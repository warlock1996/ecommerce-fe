/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrowLeft.svg'
import { ReactComponent as ArrowRight } from '../assets/arrowRight.svg'

function Slider({ slides, ...props }) {
	const [current, setCurrent] = useState(1)
	const slideRefs = useRef([])

	const onPrev = () => {
		if (current < slides.length) {
			slideRefs.current.forEach((slideRef) => {
				const oldLeft = Number(slideRef.style.left.split('px')[0])
				slideRef.style.left = oldLeft + slideRef.width * -1 + 'px'
				setCurrent(current + 1)
			})
		}
	}

	const onNext = () => {
		if (current > 1) {
			slideRefs.current.forEach((slideRef) => {
				const oldLeft = Number(slideRef.style.left.split('px')[0])
				slideRef.style.left = oldLeft - slideRef.width * -1 + 'px'
				setCurrent(current - 1)
			})
		}
	}

	return (
		<div
			css={{
				height: '450px',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<div
				css={{
					position: 'absolute',
					left: '2%',
					top: '50%',
					zIndex: 1,
					transform: 'translateY(-50%)',
					backgroundColor: 'lightgray',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '.7rem',
					opacity: '.7',
					'&:hover': {
						cursor: 'pointer',
						opacity: '1',
					},
				}}
				onClick={onPrev}
			>
				<ArrowLeft />
			</div>

			<div
				css={{
					position: 'absolute',
					right: '2%',
					top: '50%',
					zIndex: 1,
					transform: 'translateY(-50%)',
					backgroundColor: 'lightgray',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '.7rem',
					opacity: '.7',
					'&:hover': {
						cursor: 'pointer',
						opacity: '1',
					},
				}}
				onClick={onNext}
			>
				<ArrowRight />
			</div>
			<div css={{ display: 'flex' }}>
				{slides.map((slide, index) => (
					<img
						key={index}
						ref={(el) => (slideRefs.current[index] = el)}
						src={slide}
						css={{
							width: '100%',
							height: 'auto',
							position: 'relative',
                            transition: 'left 1s ease-in-out'
						}}
						alt={`slider-img-'${index}`}
					/>
				))}
			</div>
		</div>
	)
}

export default Slider
