import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.link}>Главная</a>
      <a href="#" className={styles.link}>Статьи</a>
      <a href="#" className={styles.link}>О нас</a>
    </nav>
  );
}

export default Nav;