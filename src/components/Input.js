import React  from 'react'
/** @jsxImportSource @emotion/react */

let base = {
	width: '100%',
	outline: '0',
	borderRadius: '5px',
	border: '1px solid #d1d1d1',
	borderLeftWidth: 'thick',
	padding: '8px 5px 8px 8px',
	backgroundColor: '#fff',
	'&:hover, &:focus': {
		borderColor: '#48afff',
		outline: '0',
	},
}

const Input = ({ children, loading, ...props }) => {
	return (
		<div>
			<input css={base} {...props} />
			{/* loading icon */}
		</div>
	)
}

export default Input
