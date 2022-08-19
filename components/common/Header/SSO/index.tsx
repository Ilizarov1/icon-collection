import Image from 'next/image';

import headIcon from '../../../../public/head-icon.png';

import styles from './SSO.module.scss';

export default function SSO() {
  return (
    <div className={styles.sso}>
      <div className={styles.image}>
        <Image src={headIcon} alt='' />
      </div>
      <div className={styles.username}>
        <span>Zhao</span>
      </div>
    </div>
  );
}
