import type { NextPage } from 'next'
import Header from '../components/common/Header'

import useSWR from 'swr'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const fetcher = (url: URL) => fetch(url).then((r) => r.json())

const Home: NextPage = () => {
	const { data, error } = useSWR('./api/hello', fetcher)

	if (error) return <div>failed to load</div>
	if (!data) return <div>loading...</div>

	return (
		<div>
			<Header />

			<Router>
				<div>
					<ul>
						<li>
							<Link to="/">INDEX</Link>
						</li>
						<li>
							<Link to="/about">ABOUT</Link>
						</li>
					</ul>

					<Routes>
						<Route path='/' element={(<h2>INDEX</h2>)}/>
						<Route path='/about' element={(<h2>ABOUT</h2>)}/>
					</Routes>
				</div>
			</Router>
		</div>
	)
}

export default Home
