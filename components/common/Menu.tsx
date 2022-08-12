import { MouseEventHandler, useState } from 'react'
import styles from '../../styles/common/Menu.module.scss'
import Link from 'next/link'

interface IProps {
  active?: number
}

function Menu(props: IProps) {
	const [active, setActive] = useState(props.active || 0)
	const [menuLst, setMenuLst] = useState([
		{ title: '首页', url: '/' },
		{ title: '图标库', url: '/icon' },
		{ title: '图标管理', url: '/admin' },
		{ title: '帮助中心', url: '/help' },
	])

	const handleClick = (idx: number) => {
		return () => {
			setActive(idx)
		}
	}

	return (
		<>
			{menuLst.map((val, idx) => {
				return (
					<Link key={val.title} href={val.url}>
						<span
							onClick={handleClick(idx)}
							className={active === idx ? styles.menuActive : styles.menuItem}
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
