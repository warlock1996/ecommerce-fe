/** @jsxImportSource @emotion/react */

import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import { css, keyframes } from '@emotion/react'

function Spinner({ ...props }) {
	const spin = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `
	return <FaSpinner css={{ animation: `${spin} .8s linear infinite` }} {...props} />
}

export default Spinner
