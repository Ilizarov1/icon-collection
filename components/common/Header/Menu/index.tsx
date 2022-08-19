import { MouseEventHandler, useState } from 'react';
import styles from './Menu.module.scss';

function Menu() {
  const [active, setActive] = useState(0);
  const [menuLst, setMenuLst] = useState([
    '首页',
    '图标库',
    '图标管理',
    '帮助中心',
  ]);

  const handleClick = (idx: number) => {
    return () => {
      setActive(idx);
    };
  };

  return (
    <div className={styles.menuContainer}>
      {menuLst.map((val, idx) => {
        return (
          <span
            onClick={handleClick(idx)}
            className={active === idx ? styles.menuActive : styles.menuItem}
            key={idx}
          >
            {val}
          </span>
        );
      })}
    </div>
  );
}
export default Menu;
