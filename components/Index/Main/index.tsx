import Image from 'next/image';

import logo from '../../../public/Frame.svg';
import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.lineGrp}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.logo}>
        <Image src={logo} alt='' />
      </div>
      <div className={styles.footer}>
        <div className={styles.name}>
          <span>Carbon</span>
        </div>
        <div className={styles.comp}>
          <span>{'<CarbonAirlinePassengerCare/>'}</span>
        </div>
        <div> by IBM | Apache 2.0</div>
      </div>
    </div>
  );
}
export default Main;
