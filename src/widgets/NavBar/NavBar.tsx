import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'

export default function NavBar() {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => isActive ? styles.active : styles.link;

  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <NavLink className={getLinkClass} to='/'>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to='/albums'>
            Альбомы
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to='/about'>
            О проекте
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}