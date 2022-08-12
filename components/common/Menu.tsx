import { useState } from 'react'
import styles from '../../styles/common/Menu.module.scss'

function Menu() {
	const [active, setActive] = useState(0)
	const [menuLst, setMenuLst] = useState([
		'首页',
		'图标库',
		'图标管理',
		'帮助中心',
	])

	return (
		<>
			{menuLst.map((val, idx) => {
				return (
					<span className={active === idx? styles.menuActive : styles.menuItem} key={val}>
						{val}
					</span>
				)
			})}
		</>
	)
}
export default Menu
