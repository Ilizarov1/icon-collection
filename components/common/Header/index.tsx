import Image from 'next/image';

import Menu from './Menu';
import SSO from './SSO';

import logo from '../../../public/Logo.svg';
import styles from './Header.module.scss';
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <Image src={logo} alt='logo' />
        </div>
        <Menu />
        <SSO />
      </div>
    </div>
  );
}
export default Header;
