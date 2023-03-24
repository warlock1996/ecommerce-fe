import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import Spinner from '../components/Spinner'
import { client, useAsync } from '../utils/client'
import * as auth from '../api/auth'
import FullPageSpinner from '../components/FullPageSpinner'

const AuthContext = createContext(false)

const getUser = async () => {
	let user = null
	if (localStorage.getItem('token')) {
		user = await client('/user')
	}

	return user
}

function AuthProvider({ children }) {
	const { data: user, run, isLoading, isSuccess, setData } = useAsync()

	useEffect(() => {
		const promise = getUser()
		run(promise)
	}, [run])

	const login = useCallback((form) => auth.login(form).then((res) => setData(res)), [setData])

	const register = useCallback((form) => auth.register(form).then((res) => setData(res)), [setData])

	const logout = useCallback(() => auth.logout(), [])

	const value = useMemo(() => ({ login, register, user, logout }), [login, register, user, logout])

	if (isLoading) return <FullPageSpinner />

	if (isSuccess) return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuthContext() {
	const context = useContext(AuthContext)
	if (!context) throw new Error('must be used within <AuthProvider/>')
	return context
}

export { AuthContext, AuthProvider, useAuthContext }
