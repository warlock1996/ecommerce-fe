/** @jsxImportSource @emotion/react */

import React, { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Input from '../components/Input'
import { useAuthContext } from '../context/AuthContext'

function Register() {
	const [form, setForm] = useState({ email: '', name: '', password: '' })
	const { register } = useAuthContext()

	const onSubmit = async (event) => {
		event.preventDefault()
		await register(form)
	}
	return (
		<Card
			css={{
				margin: '5rem auto',
				maxWidth: '500px',
				backgroundColor: '#ffffff',
				padding: '2rem',
				borderRadius: '5px',
			}}
		>
			<form onSubmit={onSubmit} css={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				<h1 css={{ margin: 0, marginInline: 'auto', color: '#48afff' }}>Register</h1>
				<Input
					value={form.email}
					onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
					type='email'
					placeholder='email'
					required
				/>
				<Input
					value={form.name}
					onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
					type='text'
					placeholder='name'
					required
				/>
				<Input
					value={form.password}
					onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
					type='password'
					placeholder='password'
					required
				/>
				<Button type='submit' variant='primary'>
					Register
				</Button>
			</form>
		</Card>
	)
}

export default Register
