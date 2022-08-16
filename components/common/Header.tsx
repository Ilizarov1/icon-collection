import styles from '../../styles/common/Header.module.scss'
import logo from '../../public/Logo.svg'
import Image from 'next/image'
import Menu from './Menu'


function Header() {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<div className={styles.logo}>
					<Image src={logo} alt="logo" />
				</div>
				<div className={styles.menu}>
					<Menu />
				</div>
				<div>SSO</div>
			</div>
		</div>
	)
}
export default Header
