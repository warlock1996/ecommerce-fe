/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Image1 from '../assets/pakistan-priceoye-slider-knlrs.jpg'
import Image2 from '../assets/pakistan-priceoye-slider-le0is.jpg'
import Image3 from '../assets/pakistan-priceoye-slider-mu3dd.jpg'
import Slider from '../components/Slider'
import { client, useAsync } from '../utils/client'
import Samsung from '../assets/samsung.jpg'
import Infinix from '../assets/infinix.jpg'
import Oppo from '../assets/oppo.jpg'
import Xiaomi from '../assets/xiaomi.jpg'
import Vivo from '../assets/vivo.jpg'
import Tecno from '../assets/tecno.jpg'
import Realme from '../assets/realme.jpg'
import Itel from '../assets/itel.jpg'
import Card from '../components/Card'
import { FaCaretUp } from 'react-icons/fa'
import { ReactComponent as ArrowDown } from '../assets/ArrowDown.svg'
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
import Radio from '../components/Radio'

const fetchBrands = (async () => await Promise.resolve([{ _id: 1, name: 'samsung' }]))()

function SubNavigation({ ...props }) {
	const { run, data } = useAsync()

	useEffect(() => {
		run(fetchBrands)
	}, [])

	return (
		<div {...props}>
			<ul
				css={{
					listStyleType: 'none',
					padding: '0',
					display: 'flex',
					gap: '.8rem',
					alignItems: 'center',
					justifyContent: 'center',
					margin: '0',
					marginInline: 'auto',
					cursor: 'pointer',
					backgroundColor: '#ffffff',
				}}
			>
				{data?.map((brand) => (
					<Link to={`/mobiles/${brand.name.toLowerCase()}`} key={brand._id}>
						<li
							css={{
								display: 'flex',
								gap: '5rem',
								alignItems: 'center',
								justifyContent: 'center',
								padding: '7px',
								width: '140px',
								fontSize: '12px',
								borderBottom: '3px solid transparent',
							}}
						>
							<img src={Samsung} alt='samsung' width='50px' />
							<img src={Infinix} alt='infinix' width='50px' />
							<img src={Oppo} alt='oppo' width='50px' />
							<img src={Xiaomi} alt='xiaomi' width='50px' />
							<img src={Vivo} alt='vivo' width='50px' />
							<img src={Tecno} alt='tecno' width='50px' />
							<img src={Realme} alt='realme' width='50px' />
							<img src={Itel} alt='itel' width='50px' />
							{/* {React.cloneElement(<Samsung />, { key: brand._id, width: '45px', height: '45px' })} */}
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

const filters = [
	{
		name: 'SORTING',
		filters: ['Popularity', 'Price (Low to High)', 'Price (High to Low)'],
	},
	{
		name: 'EXPRESS DELIVERY',
		filters: ['express delivery'],
	},
	{
		name: 'SET YOUR PRICE RANGE',
		filters: ['Below Rs. 10,000', 'Rs. 10,000 - Rs. 20,000', 'Rs. 20,000 - Rs. 30,000'],
	},
]

function FilterCollapsable({ title, filters, ...props }) {
	const [open, setOpen] = useState(true)
	return (
		<details {...props} open={open} onClick={() => setOpen(!open)} css={{ borderBottom: '1px solid #dbdbdb' }}>
			<summary
				css={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
					marginBlock: '.7rem',
					cursor: 'pointer',
				}}
			>
				<div css={{ textTransform: 'uppercase', fontWeight: 'bold', color: '#404040', fontSize: '13px' }}>{title}</div>
				<ArrowDown css={{ transform: open ? 'rotate(180deg)' : 'none' }} />
			</summary>

			<ul css={{ listStyleType: 'none', margin: '0', padding: '0', marginBottom: '.8rem' }}>
				{filters.map((f, index) => (
					<li key={f} css={{ display: 'flex', gap: '.2rem', fontSize: '14px', color: '#606060', cursor: 'pointer' }}>
						<input type='radio' name={title} id={f} />
						<label htmlFor={f} css={{ flex: 1 }}>
							{f}
						</label>
					</li>
				))}
			</ul>
		</details>
	)
}

const fetchProducts = (async () => await client('/product'))()

function Mobiles({ ...props }) {
	const { run, data } = useAsync()

	const [currentPage, setCurrenPage] = useState(1)

	useEffect(() => {
		run(fetchProducts)
	}, [])
	return (
		<div {...props}>
			<SubNavigation css={{ marginBottom: '1rem' }} />
			<Slider slides={[Image1, Image2, Image3]} />

			<div css={{ margin: '1rem' }}>
				<Card css={{ marginBottom: '1rem' }}>
					<h3 css={{ fontSize: '16px', margin: '0 0 10px' }}>Price List of Samsung Mobile Phones in Pakistan</h3>
					<p css={{ fontSize: '12px', margin: '0' }}>
						Showing you 313 Samsung Mobile Phone Price in Pakistan. PriceOye helps you find the lowest online Price of
						all mobile phones sold in Pakistan.
					</p>
				</Card>

				<div css={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
					<Card css={{ padding: '30px', width: '30%' }}>
						{filters.map((f) => (
							<FilterCollapsable key={f.name} title={f.name} filters={f.filters} />
						))}
					</Card>
					<div css={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 300px)' }}>
						{data?.products?.map((product) => (
							<ProductCard key={product._id} title={product.name} price={product.price} />
						))}
					</div>
				</div>

				<Pagination currentPage={currentPage} totalPages={20} onChange={(page) => setCurrenPage(page)} />
			</div>
		</div>
	)
}

export default Mobiles
