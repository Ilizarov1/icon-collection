import Image from 'next/image';
import ArrowDropDown from '@mui/icons-material/ArrowDropDownOutlined';
import headIcon from '../../../../public/WechatIMG6.jpeg';

import styles from './SSO.module.scss';

export default function SSO() {
  return (
    <div className={styles.sso}>
      <Image
        src={headIcon}
        alt=''
        className={styles.image}
        height={24}
        width={24}
      />
      <div className={styles.username}>
        <span>Zhao</span>
      </div>
      <div className={styles.icon}>
        <ArrowDropDown htmlColor='#232323' />
      </div>
    </div>
  );
}
