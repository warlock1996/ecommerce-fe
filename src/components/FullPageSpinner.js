/** @jsxImportSource @emotion/react */
import React from 'react'
import Spinner from './Spinner'

function FullPageSpinner() {
	return (
		<div css={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
			<Spinner css={{ height: '30px', width: '30px' }} />
		</div>
	)
}

export default FullPageSpinner
