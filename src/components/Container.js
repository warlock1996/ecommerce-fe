/** @jsxImportSource @emotion/react */

import React from 'react'

function Container({ children, ...props }) {
	return <div css={{ maxWidth: '1200px', margin: 'auto' }}>{children}</div>
}

export default Container
