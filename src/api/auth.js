import { client } from '../utils/client'

async function login(data) {
	return await client('/auth/login', data)
}

async function register(data) {
	return await client('/auth/signup', data)
}

async function logout() {
	localStorage.removeItem('token')
	return await client('/auth/logout')
}

export { login, register, logout }
