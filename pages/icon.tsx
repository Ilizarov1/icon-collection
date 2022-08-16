import type { NextPage } from 'next'
import React from 'react'
import Header from '../components/common/Header'
import { Menu as MenuEnum } from '../constants/common/menu'
import MenuStore from '../store/menu'

const MenuContext = React.createContext(MenuStore)
const Icon: NextPage = () => {
	return (
		<div>
			<MenuContext.Provider value={MenuStore}>
				<Header />
			</MenuContext.Provider>
		</div>
	)
}

export default Icon
