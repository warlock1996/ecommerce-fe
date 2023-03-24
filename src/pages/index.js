/** @jsxImportSource @emotion/react */

import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import ProductCard from '../components/ProductCard'
import CardSection from '../components/CardSection'
import Slider from '../components/Slider'
import Container from '../components/Container'
import Image1 from '../assets/pakistan-priceoye-slider-knlrs.jpg'
import Image2 from '../assets/pakistan-priceoye-slider-le0is.jpg'
import Image3 from '../assets/pakistan-priceoye-slider-mu3dd.jpg'
import MobileImage from '../assets/infinix-hot-12-play-pakistan-priceoye-1sinx-270x270.webp'
import WatchImage from '../assets/apple-watch-series-8-pakistan-priceoye-xu0ed-270x270.webp'
import WirelessEarbuds from '../assets/infinix-xe-20-wireless-earbuds-pakistan-priceoye-6gvb8-270x270.webp'
import Tablet from '../assets/samsung-galaxy-tab-s6-lite-10-4-inches-p613-pakistan-priceoye-3e8jx-270x270.webp'
import Banner from '../assets/static-dk-banner.jpg'
import { ReactComponent as Samsung } from '../assets/samsung.svg'
import { ReactComponent as Infinix } from '../assets/infinix.svg'
import { ReactComponent as Oppo } from '../assets/oppo.svg'
import { ReactComponent as Xiami } from '../assets/samsung.svg'
import { ReactComponent as Vivo } from '../assets/vivo.svg'
import { ReactComponent as Tecno } from '../assets/tecno.svg'
import { ReactComponent as Realme } from '../assets/realme.svg'
import { ReactComponent as Itel } from '../assets/itel.svg'
import { ReactComponent as Apple } from '../assets/apple.svg'
import { ReactComponent as Nokia } from '../assets/nokia.svg'
import { ReactComponent as PtaApproved } from '../assets/feature-approved.svg'
import { ReactComponent as Warranty } from '../assets/feature-warranty.svg'
import { ReactComponent as Shipping } from '../assets/feature-shipping.svg'
import { ReactComponent as Delivery } from '../assets/feature-delivery.svg'
import { client, useAsync } from '../utils/client'
import { ReactComponent as SmartWatches } from '../assets/smart-watches.svg'
import { ReactComponent as Mobiles } from '../assets/mobiles.svg'
import { ReactComponent as WirelessEarbudsComponent } from '../assets/wireless-earbuds.svg'
import { ReactComponent as BluetoohSpeakers } from '../assets/bluetooth-speakers.svg'
import { ReactComponent as PowerBanks } from '../assets/power-banks.svg'
import { ReactComponent as Laptops } from '../assets/laptops.svg'
import { ReactComponent as Tablets } from '../assets/tablets.svg'
import { Link } from 'react-router-dom'

const fetchCategories = (async () => await client('/category'))()

const ShopByPriceBtn = styled.button({
	outline: 'none',
	border: 'none',
	position: 'relative',
	padding: '16px',
	borderRadius: '12px',
	textAlign: 'center',
	background: 'radial-gradient(50% 50% at 50% 50%, #FFF348 0%, #FFF348 100%)',
	cursor: 'pointer',
	'&::after': {
		position: 'absolute',
		width: '100%',
		content: '" "',
		display: 'block',
		bottom: '0',
		left: '0',
		height: '0',
		backgroundColor: '#48afff',
		borderRadius: '12px',
	},
	'&:hover': {
		'&::after': {
			transition: 'height .8s',
			height: '100%',
		},
	},
})

const brands = [
	{ name: 'Samsung', component: <Samsung /> },
	{ name: 'Infinix', component: <Infinix /> },
	{ name: 'OPPO', component: <Oppo /> },
	{ name: 'Xiami', component: <Xiami /> },
	{ name: 'Vivo', component: <Vivo /> },
	{ name: 'Tecno', component: <Tecno /> },
	{ name: 'Realme', component: <Realme /> },
	{ name: 'Itel', component: <Itel /> },
	{ name: 'Apple', component: <Apple /> },
	{ name: 'Nokia', component: <Nokia /> },
]

const features = [
	{ title: 'Mobile Phone', subTitle: 'PTA Approved', component: <PtaApproved /> },
	{ title: 'Brand Warranty', subTitle: '1 Year', component: <Warranty /> },
	{ title: 'ISB & RWP', subTitle: '24hr Delivery', component: <Shipping /> },
	{ title: 'All Over Pakistan', subTitle: 'Free Delivery', component: <Delivery /> },
].map((f) => (
	<div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
		{React.cloneElement(f.component, { width: '70px', height: '70px' })}
		<div css={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '14px' }}>{f.title}</div>
		<div css={{ fontSize: '13px' }}>{f.subTitle}</div>
	</div>
))

const navItems = [
	{ name: 'Mobiles', link: 'mobiles', component: <Mobiles /> },
	{ name: 'Smart Watches', link: 'smartwatches', component: <SmartWatches /> },
	{ name: 'Wireless Earbuds', link: 'wirelessearbuds', component: <WirelessEarbudsComponent /> },
	{ name: 'Bluetooth Speakers', link: 'bluetoothspeakers', component: <BluetoohSpeakers /> },
	{ name: 'Power Banks', link: 'powerbanks', component: <PowerBanks /> },
	{ name: 'Laptops', link: 'laptops', component: <Laptops /> },
	{ name: 'Tablets', link: 'tablets', component: <Tablets /> },
]

function SubNavigation({ ...props }) {
	const { run, data } = useAsync()

	useEffect(() => {
		run(fetchCategories)
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
				{data?.data?.categories?.map((cat) => (
					<Link to={`/${cat.name.toLowerCase()}`} key={cat._id}>
						<li
							css={{
								display: 'flex',
								flexDirection: 'column',
								gap: '.6rem',
								alignItems: 'center',
								padding: '7px',
								width: '140px',
								fontSize: '12px',
								borderBottom: '3px solid transparent',
								'&:hover': {
									backgroundColor: 'rgba(215,217,219,.3)',
									borderBottom: '3px solid #48afff',
								},
							}}
						>
							{React.cloneElement(<Mobiles />, { key: cat._id, width: '45px', height: '45px' })}
							<span>{cat.name}</span>
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

function Index() {
	return (
		<>
			<SubNavigation css={{ marginBottom: '1rem' }} />
			<Slider slides={[Image1, Image2, Image3]} />
			<Container>
				<CardSection title='Latest Mobiles' linkText='View All'>
					{Array(4)
						.fill()
						.map(() => (
							<ProductCard title='Samsung Galaxy S23 Ultra' price='535,000' image={MobileImage} />
						))}
				</CardSection>

				<CardSection title='Shop by Price' linkText='View All'>
					{Array(8)
						.fill()
						.map(() => (
							<ShopByPriceBtn>Below Rs. 10,000</ShopByPriceBtn>
						))}
				</CardSection>

				<CardSection
					title='Shop by Brand'
					linkText='View All'
					gridCss={{ gridTemplateColumns: 'repeat(10, 70px)', justifyContent: 'center' }}
				>
					{brands.map((brand) => (
						<div
							css={{
								display: 'flex',
								flexDirection: 'column',
								gap: '.5rem',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{React.cloneElement(brand.component, { width: '70px', height: '70px' })}
							<span>{brand.name}</span>
						</div>
					))}
				</CardSection>

				{/* <Section title='Customer Reviews' subTitle='What our Customers say about Priceoye.pk'>
					</Section>

					<Section title='Best Seller' subTitle='Get the best prices in town'>
					</Section> */}

				<CardSection title='Latest Smart Watches' linkText='View All'>
					{Array(4)
						.fill()
						.map(() => (
							<ProductCard title='Apple Watch Series 8 (45mm)' price='124,999' image={WatchImage} />
						))}
				</CardSection>
			</Container>

			<img src={Banner} alt='static-banner' width='100%' height='auto' />

			<Container>
				{/* <Section title='Loved and Recommended' subTitle='Influencers talk about priceoye as a trusted brand'>
					</Section> */}

				<CardSection title='Latest Wireless Earbuds' linkText='View All'>
					{Array(4)
						.fill()
						.map(() => (
							<ProductCard title='Infinix XE20 Wireless Earbuds' price='3000' image={WirelessEarbuds} />
						))}
				</CardSection>

				<CardSection title='Latest Tablets' linkText='View All'>
					{Array(4)
						.fill()
						.map(() => (
							<ProductCard title='Samsung Galaxy Tab S6 Lite 10.4 inches (P613)' price='40000' image={Tablet} />
						))}
				</CardSection>
			</Container>

			<div
				css={{
					backgroundColor: '#ffffff',
					padding: '30px',
				}}
			>
				<Container>
					<div css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>{features}</div>
				</Container>
			</div>
		</>
	)
}

export default Index
