/** @jsxImportSource @emotion/react */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'

const Button = ({ children, loading, variant, ...props }) => {
	const navigate = useNavigate()
	let base = {
		width: '99px',
		height: '40px',
		border: '1px solid #fff',
		padding: '8px 5px',
		borderRadius: '5px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
		backgroundColor: '#ffffff',
		color: '#48afff',
	}

	const transparent = {
		backgroundColor: 'transparent',
		borderColor: '#ffffff',
		color: '#ffffff',
	}

	const primary = {
		backgroundColor: '#48afff',
		color: '#ffffff',
		borderColor: '#ffffff',
	}
	if (variant) {
		switch (variant) {
			case 'transparent':
				base = { ...base, ...transparent }
				break
			case 'primary':
				base = { ...base, ...primary }
				break
			default:
				break
		}
	}


	const onClick = () => {
		if (props.to) {
			navigate(props.to)
			return
		}

		props.onClick && props.onClick()
	}

	return (
		<button css={base} {...props} onClick={onClick}>
			<span>{children}</span>
			{loading && <Spinner css={{ marginLeft: '.5rem' }} />}
		</button>
	)
}

export default Button
