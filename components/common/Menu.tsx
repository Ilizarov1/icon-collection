import React, { MouseEventHandler, useContext, useState } from 'react'
import styles from '../../styles/common/Menu.module.scss'
import Link from 'next/link'
import { Menu as MenuEnum } from '../../constants/common/menu'
import MenuStore from '../../store/menu'

const MenuContext = React.createContext(MenuStore)

function Menu() {
	const MenuStore = useContext(MenuContext)
	const [menuLst, setMenuLst] = useState([
		{ title: '首页', url: '/', idx: MenuEnum.INDEX },
		{ title: '图标库', url: '/icon', idx: MenuEnum.ICON },
		{ title: '图标管理', url: '/admin', idx: MenuEnum.MANAGE },
		{ title: '帮助中心', url: '/help', idx: MenuEnum.HELP },
	])

	const handleClick = (idx: MenuEnum) => {
		return () => {
			MenuStore.updateActive(idx)
		}
	}
	return (
		<>
			{menuLst.map((val) => {
				return (
					<Link key={val.title} href={val.url}>
						<span
							onClick={handleClick(val.idx)}
							className={
								MenuStore.active === val.idx
									? styles.menuActive
									: styles.menuItem
							}
						>
							{val.title}
						</span>
					</Link>
				)
			})}
		</>
	)
}
export default Menu
