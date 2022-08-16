import type { NextPage } from 'next'
import Header from '../components/common/Header'
import useSWR from 'swr'
import React from 'react'

const fetcher = (url: URL) => fetch(url).then((r) => r.json())
const Home: NextPage = () => {
	const { data, error } = useSWR('./api/hello', fetcher)

	if (error) return <div>failed to load</div>
	if (!data) return <div>loading...</div>

	return (
		<div>
			<Header />
		</div>
	)
}

export default Home
