import { useCallback, useState } from 'react'

async function client(url, { body = undefined, ...config } = {}) {
	console.log('process.env.API_URL', process.env.REACT_APP_API_URL)
	return window
		.fetch(`${process.env.REACT_APP_API_URL}${url}`, {
			body: body ? JSON.stringify(body) : undefined,
			method: body ? 'POST' : 'GET',
			...config,
		})
		.then((res) => res.json())
}

function useAsync() {
	const [{ status, data }, setState] = useState({ status: 'idle', data: null })

	const run = useCallback((promise) => {
		setState((prev) => ({ ...prev, status: 'pending' }))
		promise
			.then((res) => {
				setState((prev) => ({ ...prev, data: res, status: 'resolved' }))
			})
			.catch((error) => {
				setState((prev) => ({ ...prev, status: 'rejected' }))
			})
	}, [])

	const setData = useCallback((data) => {
		setState((prev) => ({ ...prev, data, status: 'resolved' }))
	}, [])

	const isLoading = status === 'pending'
	const isSuccess = status === 'resolved'
	const isError = status === 'rejected'

	return { run, setData, data, isLoading, isSuccess, isError }
}

export { client, useAsync }
